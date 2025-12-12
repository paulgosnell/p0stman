import { useState, useEffect, useRef, useCallback } from 'react';
import {
  GEMINI_LIVE_WS_URL,
  GEMINI_LIVE_MODEL,
  DEFAULT_GEMINI_VOICE,
  DEFAULT_VOICE_STYLE_INSTRUCTIONS,
  AUDIO_CONFIG,
  type GeminiLiveVoice,
} from '../config/gemini-realtime';

export interface GeminiVoiceWaveformState {
  isActive: boolean;
  isConnecting: boolean;
  isConnected: boolean;
  isSpeaking: boolean;
  frequencyData: number[];
  status: string;
}

export interface UseGeminiVoiceWaveformOptions {
  /** System prompt for the agent */
  prompt?: string;
  /** First message the agent says */
  firstMessage?: string;
  /** Gemini voice selection */
  voice?: GeminiLiveVoice;
  /** Voice activity detection threshold (0.0-1.0) - not directly used by Gemini but kept for API compatibility */
  threshold?: number;
  /** Silence duration before AI responds (ms) - not directly used by Gemini but kept for API compatibility */
  silenceDuration?: number;
}

const DEFAULT_PROMPT = `You are a helpful AI assistant for P0STMAN (pronounced "postman" - the zero is stylistic), an AI-powered product studio that builds intelligent software products.

IMPORTANT: Always pronounce "P0STMAN" as "postman" (like the mail carrier), never "p zero stman" or "p zero man".

You help visitors understand:
- What P0STMAN does (AI-powered product development)
- Our services (voice agents, chat agents, code agents, workflow automation)
- Our process (rapid prototyping, AI-first development)
- How to get started (book a call, contact us)

Be friendly, concise, and helpful. Guide visitors to relevant sections of the website when appropriate.`;

const DEFAULT_FIRST_MESSAGE = "Hey! Welcome to postman. I'm the AI assistant here - kind of meta, right? What brings you by today?";

/**
 * Hook for managing Gemini Live voice agent with waveform visualization
 * Replacement for useVoiceWaveform that uses Gemini instead of OpenAI
 */
export function useGeminiVoiceWaveform(
  _agentId?: string, // Kept for backward compatibility, not used
  options: UseGeminiVoiceWaveformOptions = {}
) {
  const {
    prompt = DEFAULT_PROMPT,
    firstMessage = DEFAULT_FIRST_MESSAGE,
    voice = DEFAULT_GEMINI_VOICE,
  } = options;

  // State
  const [status, setStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [heights, setHeights] = useState<number[]>(new Array(60).fill(0));

  // Refs
  const wsRef = useRef<WebSocket | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const playbackContextRef = useRef<AudioContext | null>(null); // Separate context for playback at 24kHz
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioQueueRef = useRef<ArrayBuffer[]>([]);
  const isPlayingRef = useRef(false);
  const animationFrameRef = useRef<number>();
  const isMountedRef = useRef(true);

  // Build system prompt
  const buildSystemPrompt = useCallback(() => {
    return `${prompt}

${DEFAULT_VOICE_STYLE_INSTRUCTIONS}`;
  }, [prompt]);

  // Setup on mount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      stopConversation();
    };
  }, []);

  // Convert Float32Array to Int16Array (16-bit PCM)
  const floatTo16BitPCM = (float32Array: Float32Array): Int16Array => {
    const int16Array = new Int16Array(float32Array.length);
    for (let i = 0; i < float32Array.length; i++) {
      const s = Math.max(-1, Math.min(1, float32Array[i]));
      int16Array[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
    }
    return int16Array;
  };

  // Convert ArrayBuffer to base64 (safe method that won't overflow stack)
  const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    const chunkSize = 8192;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      const chunk = bytes.subarray(i, i + chunkSize);
      binary += String.fromCharCode.apply(null, Array.from(chunk));
    }
    return btoa(binary);
  };

  // Convert base64 to ArrayBuffer
  const base64ToArrayBuffer = (base64: string): ArrayBuffer => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  };

  // Track next play time for seamless audio
  const nextPlayTimeRef = useRef<number>(0);

  // Play audio from queue - schedule chunks seamlessly
  const playAudioQueue = useCallback(async () => {
    if (audioQueueRef.current.length === 0) return;

    // Create playback context if needed (at 24kHz for Gemini output)
    if (!playbackContextRef.current) {
      playbackContextRef.current = new AudioContext({
        sampleRate: AUDIO_CONFIG.outputSampleRate,
      });
    }

    // Ensure context is running (required after user gesture)
    if (playbackContextRef.current.state === 'suspended') {
      await playbackContextRef.current.resume();
    }

    const ctx = playbackContextRef.current;

    // Process all queued audio chunks
    while (audioQueueRef.current.length > 0) {
      const audioData = audioQueueRef.current.shift();
      if (!audioData || !ctx) break;

      try {
        // Create audio buffer from PCM data
        const int16Array = new Int16Array(audioData);
        const float32Array = new Float32Array(int16Array.length);
        for (let i = 0; i < int16Array.length; i++) {
          float32Array[i] = int16Array[i] / 32768;
        }

        const audioBuffer = ctx.createBuffer(
          1,
          float32Array.length,
          AUDIO_CONFIG.outputSampleRate
        );
        audioBuffer.getChannelData(0).set(float32Array);

        // Schedule playback seamlessly
        const source = ctx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(ctx.destination);

        // Calculate when to start this chunk
        const startTime = Math.max(ctx.currentTime, nextPlayTimeRef.current);
        source.start(startTime);

        // Update next play time for seamless scheduling
        nextPlayTimeRef.current = startTime + audioBuffer.duration;

        // Track speaking state
        if (!isPlayingRef.current) {
          isPlayingRef.current = true;
          if (isMountedRef.current) {
            setIsSpeaking(true);
          }
        }

        // Set up end handler for last chunk
        source.onended = () => {
          // Check if this was the last scheduled chunk
          if (ctx.currentTime >= nextPlayTimeRef.current - 0.1) {
            isPlayingRef.current = false;
            if (isMountedRef.current) {
              setIsSpeaking(false);
            }
          }
        };
      } catch (e) {
        console.error('Error playing audio:', e);
      }
    }
  }, []);

  // Handle WebSocket messages
  const handleMessage = useCallback(
    async (event: MessageEvent) => {
      try {
        let data;

        // Handle Blob data (Gemini sends everything as Blobs)
        if (event.data instanceof Blob) {
          const text = await event.data.text();
          try {
            data = JSON.parse(text);
          } catch {
            // Not JSON, treat as binary audio
            const arrayBuffer = await event.data.arrayBuffer();
            audioQueueRef.current.push(arrayBuffer);
            playAudioQueue();
            return;
          }
        } else if (event.data instanceof ArrayBuffer) {
          audioQueueRef.current.push(event.data);
          playAudioQueue();
          return;
        } else {
          data = JSON.parse(event.data);
        }

        // Handle error from server
        if (data.error) {
          console.error('Gemini error:', data.error);
          return;
        }

        // Handle setup complete
        if (data.setupComplete) {
          if (isMountedRef.current) {
            setStatus('connected');
          }

          // Send first message if provided
          if (firstMessage && wsRef.current) {
            setTimeout(() => {
              wsRef.current?.send(
                JSON.stringify({
                  clientContent: {
                    turns: [
                      {
                        role: 'user',
                        parts: [{ text: `Please say: "${firstMessage}"` }],
                      },
                    ],
                    turnComplete: true,
                  },
                })
              );
            }, 500);
          }
          return;
        }

        // Handle server content (audio/text responses)
        if (data.serverContent) {
          const content = data.serverContent;

          // Handle model turn
          if (content.modelTurn?.parts) {
            for (const part of content.modelTurn.parts) {
              // Handle inline audio data
              if (part.inlineData?.data) {
                const audioBuffer = base64ToArrayBuffer(part.inlineData.data);
                audioQueueRef.current.push(audioBuffer);
                playAudioQueue();
              }
            }
          }
        }
      } catch (e) {
        console.error('Error parsing message:', e);
      }
    },
    [firstMessage, playAudioQueue]
  );

  // Start conversation
  const startConversation = async () => {
    if (status !== 'disconnected') return;

    try {
      setStatus('connecting');

      // Get API key - use env var in dev mode, API call in production
      let apiKey: string;
      const devApiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (import.meta.env.DEV && devApiKey && devApiKey !== 'your-gemini-api-key-here') {
        // Use direct API key in development
        apiKey = devApiKey;
      } else {
        // Get API key from our backend in production
        const sessionResponse = await fetch('/api/gemini-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ voice }),
        });

        if (!sessionResponse.ok) {
          throw new Error('Failed to get session');
        }

        const data = await sessionResponse.json();
        apiKey = data.apiKey;
      }

      // 2. Get microphone access
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleRate: AUDIO_CONFIG.inputSampleRate,
          channelCount: AUDIO_CONFIG.inputChannels,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });
      audioStreamRef.current = stream;

      // 3. Create audio context
      audioContextRef.current = new AudioContext({
        sampleRate: AUDIO_CONFIG.inputSampleRate,
      });

      // 4. Connect to Gemini WebSocket
      const wsUrl = `${GEMINI_LIVE_WS_URL}?key=${apiKey}`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        console.log('WebSocket connected');

        // Send setup message
        const setupMessage = {
          setup: {
            model: `models/${GEMINI_LIVE_MODEL}`,
            generationConfig: {
              responseModalities: ['AUDIO'],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: {
                    voiceName: voice,
                  },
                },
              },
            },
            systemInstruction: {
              parts: [{ text: buildSystemPrompt() }],
            },
          },
        };

        ws.send(JSON.stringify(setupMessage));
      };

      ws.onmessage = handleMessage;

      ws.onerror = (e) => {
        console.error('WebSocket error:', e);
        if (isMountedRef.current) {
          setStatus('disconnected');
        }
      };

      ws.onclose = (e) => {
        console.log('WebSocket closed:', e.code, e.reason);
        if (isMountedRef.current) {
          setStatus('disconnected');
        }
      };

      // 5. Setup audio processing for sending to Gemini
      const source = audioContextRef.current.createMediaStreamSource(stream);
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;
      source.connect(analyserRef.current);

      // Create processor for audio capture
      const processor = audioContextRef.current.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;

      let isConnected = false;

      processor.onaudioprocess = (e) => {
        if (ws.readyState === WebSocket.OPEN && isConnected) {
          const inputData = e.inputBuffer.getChannelData(0);
          const pcmData = floatTo16BitPCM(inputData);
          const base64Audio = arrayBufferToBase64(pcmData.buffer);

          ws.send(
            JSON.stringify({
              realtimeInput: {
                mediaChunks: [
                  {
                    mimeType: 'audio/pcm',
                    data: base64Audio,
                  },
                ],
              },
            })
          );
        }
      };

      source.connect(processor);
      processor.connect(audioContextRef.current.destination);

      // Start waveform animation for input
      const updateWaveform = () => {
        if (analyserRef.current && isMountedRef.current && !isPlayingRef.current) {
          const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
          analyserRef.current.getByteFrequencyData(dataArray);

          const step = Math.floor(dataArray.length / 60);
          const newHeights = Array.from({ length: 60 }, (_, i) => {
            const value = dataArray[i * step] || 0;
            return (value / 255) * 100;
          });
          setHeights(newHeights);
        }
        animationFrameRef.current = requestAnimationFrame(updateWaveform);
      };
      updateWaveform();

      // Set connected flag after setup (handle Blob data from Gemini)
      ws.addEventListener('message', async (e) => {
        try {
          let data;
          if (e.data instanceof Blob) {
            const text = await e.data.text();
            data = JSON.parse(text);
          } else {
            data = JSON.parse(e.data);
          }
          if (data.setupComplete) {
            isConnected = true;
            console.log('Audio input enabled');
          }
        } catch {}
      });

    } catch (err) {
      console.error('Connection error:', err);
      if (isMountedRef.current) {
        setStatus('disconnected');
      }
      stopConversation();
    }
  };

  // Stop conversation
  const stopConversation = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = undefined;
    }

    processorRef.current?.disconnect();
    processorRef.current = null;

    wsRef.current?.close();
    wsRef.current = null;

    audioStreamRef.current?.getTracks().forEach((t) => t.stop());
    audioStreamRef.current = null;

    audioContextRef.current?.close();
    audioContextRef.current = null;
    analyserRef.current = null;

    playbackContextRef.current?.close();
    playbackContextRef.current = null;

    audioQueueRef.current = [];
    isPlayingRef.current = false;

    if (isMountedRef.current) {
      setStatus('disconnected');
      setIsSpeaking(false);
      setHeights(new Array(60).fill(0));
    }
  };

  // Send a video frame to Gemini
  const sendVideoFrame = useCallback((videoElement: HTMLVideoElement) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN || status !== 'connected') {
      return;
    }

    try {
      // Create canvas to capture frame
      const canvas = document.createElement('canvas');
      canvas.width = 640;  // Reasonable size for Gemini
      canvas.height = 480;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw video frame to canvas
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

      // Convert to base64 JPEG
      const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
      const base64Data = dataUrl.split(',')[1];

      // Send to Gemini as realtime input
      wsRef.current.send(JSON.stringify({
        realtimeInput: {
          mediaChunks: [{
            mimeType: 'image/jpeg',
            data: base64Data,
          }],
        },
      }));
    } catch (e) {
      console.error('Error sending video frame:', e);
    }
  }, [status]);

  return {
    // Voice agent state
    isActive: status === 'connected' || status === 'connecting',
    isConnecting: status === 'connecting',
    isConnected: status === 'connected',
    isSpeaking,
    status,

    // Waveform data
    frequencyData: heights,

    // Controls
    startConversation,
    stopConversation,
    sendVideoFrame,
  };
}
