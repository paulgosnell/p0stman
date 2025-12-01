import { useState, useEffect, useRef, useCallback } from 'react';
import {
  OPENAI_REALTIME_URL,
  DEFAULT_VAD_CONFIG,
  TRANSCRIPTION_MODEL,
  DEFAULT_VOICE_STYLE_INSTRUCTIONS,
  type OpenAIRealtimeVoice,
} from '../config/openai-realtime';

export interface VoiceWaveformState {
  isActive: boolean;
  isConnecting: boolean;
  isConnected: boolean;
  isSpeaking: boolean;
  frequencyData: number[];
  status: string;
}

export interface UseVoiceWaveformOptions {
  /** System prompt for the agent */
  prompt?: string;
  /** First message the agent says */
  firstMessage?: string;
  /** OpenAI voice selection */
  voice?: OpenAIRealtimeVoice;
  /** Voice activity detection threshold (0.0-1.0) */
  threshold?: number;
  /** Silence duration before AI responds (ms) */
  silenceDuration?: number;
}

const DEFAULT_PROMPT = `You are a helpful AI assistant for P0STMAN, an AI-powered product studio that builds intelligent software products.

You help visitors understand:
- What P0STMAN does (AI-powered product development)
- Our services (voice agents, chat agents, code agents, workflow automation)
- Our process (rapid prototyping, AI-first development)
- How to get started (book a call, contact us)

Be friendly, concise, and helpful. Guide visitors to relevant sections of the website when appropriate.`;

const DEFAULT_FIRST_MESSAGE = "Hey! Welcome to P0STMAN. I'm the AI assistant here - kind of meta, right? What brings you by today?";

/**
 * Hook for managing OpenAI Realtime voice agent with waveform visualization
 * @deprecated agentId parameter - now uses OpenAI Realtime instead of ElevenLabs
 */
export function useVoiceWaveform(
  _agentId?: string, // Kept for backward compatibility, not used
  options: UseVoiceWaveformOptions = {}
) {
  const {
    prompt = DEFAULT_PROMPT,
    firstMessage = DEFAULT_FIRST_MESSAGE,
    voice = 'coral',
    threshold = DEFAULT_VAD_CONFIG.threshold,
    silenceDuration = DEFAULT_VAD_CONFIG.silence_duration_ms,
  } = options;

  // State
  const [status, setStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [heights, setHeights] = useState<number[]>(new Array(60).fill(0));

  // Refs
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const remoteAudioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number>();
  const isMountedRef = useRef(true);

  // Build system prompt
  const buildSystemPrompt = useCallback(() => {
    return `${prompt}

${DEFAULT_VOICE_STYLE_INSTRUCTIONS}`;
  }, [prompt]);

  // Setup audio element on mount
  useEffect(() => {
    isMountedRef.current = true;
    if (!remoteAudioRef.current) {
      const audio = document.createElement('audio');
      audio.autoplay = true;
      remoteAudioRef.current = audio;
    }
    return () => {
      isMountedRef.current = false;
      stopConversation();
    };
  }, []);

  // Handle data channel messages
  const handleDataChannelMessage = useCallback(
    (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);

        switch (data.type) {
          case 'session.created':
            dataChannelRef.current?.send(
              JSON.stringify({
                type: 'session.update',
                session: {
                  instructions: buildSystemPrompt(),
                  voice: voice,
                  input_audio_transcription: { model: TRANSCRIPTION_MODEL },
                  turn_detection: {
                    type: 'server_vad',
                    threshold: threshold,
                    prefix_padding_ms: DEFAULT_VAD_CONFIG.prefix_padding_ms,
                    silence_duration_ms: silenceDuration,
                  },
                },
              })
            );

            if (firstMessage) {
              setTimeout(() => {
                dataChannelRef.current?.send(
                  JSON.stringify({
                    type: 'response.create',
                    response: {
                      modalities: ['text', 'audio'],
                      instructions: `Say exactly: "${firstMessage}"`,
                    },
                  })
                );
              }, 500);
            }
            break;

          case 'session.updated':
            if (isMountedRef.current) {
              setStatus('connected');
            }
            break;

          case 'input_audio_buffer.speech_started':
            if (isMountedRef.current) {
              setIsSpeaking(false);
            }
            break;

          case 'response.audio.delta':
          case 'response.audio_transcript.delta':
            if (isMountedRef.current) {
              setIsSpeaking(true);
            }
            break;

          case 'response.audio.done':
          case 'response.audio_transcript.done':
          case 'response.done':
            if (isMountedRef.current) {
              setIsSpeaking(false);
            }
            break;

          case 'error':
            console.error('OpenAI Realtime error:', data.error);
            break;
        }
      } catch (e) {
        console.error('Failed to parse data channel message:', e);
      }
    },
    [buildSystemPrompt, voice, firstMessage, threshold, silenceDuration]
  );

  // Start conversation
  const startConversation = async () => {
    if (status !== 'disconnected') return;

    try {
      setStatus('connecting');

      // 1. Get ephemeral key
      const keyResponse = await fetch('/api/openai-realtime-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ voice }),
      });

      if (!keyResponse.ok) {
        throw new Error('Failed to get session token');
      }

      const { client_secret } = await keyResponse.json();

      // 2. Get microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStreamRef.current = stream;

      // 3. Create peer connection
      const pc = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      });
      peerConnectionRef.current = pc;

      // 4. Handle incoming audio
      pc.ontrack = (event) => {
        if (remoteAudioRef.current && event.streams[0]) {
          remoteAudioRef.current.srcObject = event.streams[0];

          // Setup analyzer for waveform
          if (!audioContextRef.current) {
            audioContextRef.current = new AudioContext();
          }

          const source = audioContextRef.current.createMediaStreamSource(event.streams[0]);
          analyserRef.current = audioContextRef.current.createAnalyser();
          analyserRef.current.fftSize = 256;
          source.connect(analyserRef.current);

          // Start waveform animation
          const updateWaveform = () => {
            if (analyserRef.current && isMountedRef.current) {
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
        }
      };

      // 5. Add microphone track
      pc.addTrack(stream.getAudioTracks()[0], stream);

      // 6. Create data channel
      const dc = pc.createDataChannel('oai-events');
      dataChannelRef.current = dc;
      dc.onmessage = handleDataChannelMessage;

      // 7. Create offer
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      // 8. Exchange SDP
      const sdpResponse = await fetch(OPENAI_REALTIME_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${client_secret.value}`,
          'Content-Type': 'application/sdp',
        },
        body: offer.sdp,
      });

      if (!sdpResponse.ok) {
        throw new Error('Failed to connect to OpenAI Realtime');
      }

      await pc.setRemoteDescription({
        type: 'answer',
        sdp: await sdpResponse.text(),
      });

      // 9. Handle connection state
      pc.onconnectionstatechange = () => {
        if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') {
          if (isMountedRef.current) {
            stopConversation();
          }
        }
      };
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

    dataChannelRef.current?.close();
    dataChannelRef.current = null;

    peerConnectionRef.current?.close();
    peerConnectionRef.current = null;

    audioStreamRef.current?.getTracks().forEach((t) => t.stop());
    audioStreamRef.current = null;

    audioContextRef.current?.close();
    audioContextRef.current = null;
    analyserRef.current = null;

    if (isMountedRef.current) {
      setStatus('disconnected');
      setIsSpeaking(false);
      setHeights(new Array(60).fill(0));
    }
  };

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
  };
}
