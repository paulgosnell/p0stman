import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mic, X, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import {
  GEMINI_LIVE_WS_URL,
  GEMINI_LIVE_MODEL,
  DEFAULT_GEMINI_VOICE,
  DEFAULT_VOICE_STYLE_INSTRUCTIONS,
  AUDIO_CONFIG,
  type GeminiLiveVoice,
} from '../../config/gemini-realtime';

export interface GeminiVoiceAgentProps {
  /** The section of the site this agent is for */
  section: string;
  /** Custom system prompt for this section */
  prompt: string;
  /** Optional first message override */
  firstMessage?: string;
  /** Display mode */
  placement?: 'inline' | 'floating';
  /** Optional button text */
  buttonText?: string;
  /** Show live transcript */
  showTranscript?: boolean;
  /** Theme color */
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'white';
  /** Icon for button */
  icon?: string;
  /** Auto-start conversation */
  autoStart?: boolean;
  /** Max duration in seconds */
  maxDurationSeconds?: number;
  /** Max conversation turns */
  maxTurns?: number;
  /** Gemini voice selection */
  voice?: GeminiLiveVoice;
  /** Custom voice style instructions */
  voiceStyleInstructions?: string;
  /** Callbacks */
  onConversationStart?: () => void;
  onConversationEnd?: (conversationId?: string) => void;
  onError?: (error: any) => void;
  onMessagesUpdate?: (messages: Message[]) => void;
}

interface Message {
  role: 'user' | 'agent';
  text: string;
  timestamp: number;
}

const languageMapping: Record<string, string> = {
  en: 'English',
  it: 'Italian',
  es: 'Spanish',
  fr: 'French',
  da: 'Danish',
  ar: 'Arabic',
};

export default function GeminiVoiceAgent({
  section,
  prompt,
  firstMessage,
  placement = 'inline',
  buttonText,
  showTranscript = false,
  color = 'blue',
  icon = '🎤',
  autoStart = false,
  maxDurationSeconds = 300,
  maxTurns = 10,
  voice = DEFAULT_GEMINI_VOICE,
  voiceStyleInstructions,
  onConversationStart,
  onConversationEnd,
  onError,
  onMessagesUpdate,
}: GeminiVoiceAgentProps) {
  // State
  const [isConnected, setIsConnected] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isAgentSpeaking, setIsAgentSpeaking] = useState(false);
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [turnCount, setTurnCount] = useState(0);
  const [conversationStartTime, setConversationStartTime] = useState<number | null>(null);

  // Refs
  const wsRef = useRef<WebSocket | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioQueueRef = useRef<ArrayBuffer[]>([]);
  const isPlayingRef = useRef(false);
  const isMountedRef = useRef(true);
  const animationFrameRef = useRef<number>();
  const durationTimerRef = useRef<NodeJS.Timeout>();

  const navigate = useNavigate();

  // Color theme mappings
  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-pink-600',
    purple: 'bg-purple-600 hover:bg-pink-600',
    green: 'bg-green-600 hover:bg-pink-600',
    orange: 'bg-orange-600 hover:bg-pink-600',
    pink: 'bg-pink-600 hover:bg-pink-700',
    white: 'bg-white hover:bg-gray-100',
  };

  const barColorClasses = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    pink: 'bg-pink-500',
    white: 'bg-white',
  };

  // Waveform state
  const [barHeights, setBarHeights] = useState<number[]>(
    new Array(placement === 'floating' ? 20 : 60).fill(0)
  );

  // Build system prompt
  const buildSystemPrompt = useCallback(() => {
    const languageName = languageMapping[selectedLanguage] || 'English';
    const voiceStyle = voiceStyleInstructions || DEFAULT_VOICE_STYLE_INSTRUCTIONS;

    return `${prompt}

IMPORTANT LANGUAGE INSTRUCTION: You MUST respond in ${languageName}. The user has selected ${languageName} as their preferred language.

${voiceStyle}

You have tools for navigation:
- navigateToSection: Navigate to pages (pricing, services, case-studies, contact, home)
- scrollToElement: Scroll to elements on the page
- highlightSection: Highlight sections with visual effects`;
  }, [prompt, selectedLanguage, voiceStyleInstructions]);

  // Setup on mount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      disconnect();
    };
  }, []);

  // Auto-start
  useEffect(() => {
    if (autoStart && !isConnected && !isInitializing) {
      connect();
    }
  }, [autoStart]);

  // Duration timer
  useEffect(() => {
    if (isConnected && !conversationStartTime) {
      setConversationStartTime(Date.now());

      if (maxDurationSeconds) {
        durationTimerRef.current = setTimeout(() => {
          console.log(`Duration limit reached: ${maxDurationSeconds}s`);
          disconnect();
        }, maxDurationSeconds * 1000);
      }
    }

    return () => {
      if (durationTimerRef.current) {
        clearTimeout(durationTimerRef.current);
      }
    };
  }, [isConnected, conversationStartTime, maxDurationSeconds]);

  // Turn limit check
  useEffect(() => {
    if (isConnected && maxTurns && turnCount >= maxTurns) {
      console.log(`Turn limit reached: ${turnCount}`);
      disconnect();
    }
  }, [turnCount, isConnected, maxTurns]);

  // Handle tool calls
  const handleToolCall = useCallback(
    (toolName: string, parameters: any): string => {
      console.log('🔧 Tool call:', toolName, parameters);

      switch (toolName) {
        case 'navigateToSection': {
          const validSections = ['pricing', 'services', 'case-studies', 'contact', 'home'];
          if (validSections.includes(parameters.section)) {
            const path = parameters.section === 'home' ? '/' : `/${parameters.section}`;
            navigate(path);
            return `Navigating to ${parameters.section}`;
          }
          return `Cannot navigate to ${parameters.section}`;
        }

        case 'scrollToElement': {
          const element = document.getElementById(parameters.elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return `Scrolled to ${parameters.elementId}`;
          }
          return `Element not found`;
        }

        case 'highlightSection': {
          const element = document.getElementById(parameters.sectionId);
          if (element) {
            element.classList.add('ring-2', 'ring-blue-500', 'ring-offset-2');
            setTimeout(() => {
              element.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-2');
            }, 3000);
            return `Highlighted ${parameters.sectionId}`;
          }
          return `Section not found`;
        }

        default:
          return `Unknown tool: ${toolName}`;
      }
    },
    [navigate]
  );

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

  // Play audio from queue
  const playAudioQueue = useCallback(async () => {
    if (isPlayingRef.current || audioQueueRef.current.length === 0) return;

    isPlayingRef.current = true;
    setIsAgentSpeaking(true);

    while (audioQueueRef.current.length > 0) {
      const audioData = audioQueueRef.current.shift();
      if (!audioData || !audioContextRef.current) break;

      try {
        // Create audio buffer from PCM data
        const int16Array = new Int16Array(audioData);
        const float32Array = new Float32Array(int16Array.length);
        for (let i = 0; i < int16Array.length; i++) {
          float32Array[i] = int16Array[i] / 32768;
        }

        const audioBuffer = audioContextRef.current.createBuffer(
          1,
          float32Array.length,
          AUDIO_CONFIG.outputSampleRate
        );
        audioBuffer.getChannelData(0).set(float32Array);

        // Play the buffer
        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContextRef.current.destination);

        await new Promise<void>((resolve) => {
          source.onended = () => resolve();
          source.start();
        });
      } catch (e) {
        console.error('Error playing audio:', e);
      }
    }

    isPlayingRef.current = false;
    if (isMountedRef.current) {
      setIsAgentSpeaking(false);
      setTurnCount((prev) => prev + 1);
    }
  }, []);

  // Handle WebSocket messages
  const handleMessage = useCallback(
    (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);

        // Handle setup complete
        if (data.setupComplete) {
          console.log('✅ Gemini setup complete');
          if (isMountedRef.current) {
            setIsConnected(true);
            setIsInitializing(false);
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

          // Handle model turn (text transcript)
          if (content.modelTurn?.parts) {
            for (const part of content.modelTurn.parts) {
              if (part.text) {
                const newMessage: Message = {
                  role: 'agent',
                  text: part.text,
                  timestamp: Date.now(),
                };
                setMessages((prev) => {
                  const updated = [...prev, newMessage];
                  onMessagesUpdate?.(updated);
                  return updated;
                });
              }

              // Handle inline audio data
              if (part.inlineData?.data) {
                const audioBuffer = base64ToArrayBuffer(part.inlineData.data);
                audioQueueRef.current.push(audioBuffer);
                playAudioQueue();
              }
            }
          }

          // Handle turn complete
          if (content.turnComplete) {
            console.log('Turn complete');
          }
        }

        // Handle tool calls
        if (data.toolCall) {
          const { functionCalls } = data.toolCall;
          if (functionCalls) {
            const responses = functionCalls.map((call: any) => {
              const result = handleToolCall(call.name, call.args);
              return {
                id: call.id,
                name: call.name,
                response: { result },
              };
            });

            wsRef.current?.send(
              JSON.stringify({
                toolResponse: { functionResponses: responses },
              })
            );
          }
        }
      } catch (e) {
        console.error('Error parsing message:', e);
      }
    },
    [firstMessage, handleToolCall, onMessagesUpdate, playAudioQueue]
  );

  // Connect to Gemini Live API
  const connect = async () => {
    try {
      setIsInitializing(true);
      setError(null);

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
            tools: [
              {
                functionDeclarations: [
                  {
                    name: 'navigateToSection',
                    description: 'Navigate to a different page on the website',
                    parameters: {
                      type: 'object',
                      properties: {
                        section: {
                          type: 'string',
                          enum: ['pricing', 'services', 'case-studies', 'contact', 'home'],
                        },
                      },
                      required: ['section'],
                    },
                  },
                  {
                    name: 'scrollToElement',
                    description: 'Scroll to a specific element',
                    parameters: {
                      type: 'object',
                      properties: {
                        elementId: { type: 'string' },
                      },
                      required: ['elementId'],
                    },
                  },
                  {
                    name: 'highlightSection',
                    description: 'Highlight a section',
                    parameters: {
                      type: 'object',
                      properties: {
                        sectionId: { type: 'string' },
                      },
                      required: ['sectionId'],
                    },
                  },
                ],
              },
            ],
          },
        };

        ws.send(JSON.stringify(setupMessage));
      };

      ws.onmessage = handleMessage;

      ws.onerror = (e) => {
        console.error('WebSocket error:', e);
        if (isMountedRef.current) {
          setError('Connection error');
        }
      };

      ws.onclose = () => {
        console.log('WebSocket closed');
        if (isMountedRef.current) {
          setIsConnected(false);
          setIsInitializing(false);
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

          setIsMicrophoneActive(true);
        }
      };

      source.connect(processor);
      processor.connect(audioContextRef.current.destination);

      // Start waveform animation
      const updateWaveform = () => {
        if (analyserRef.current && isMountedRef.current) {
          const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
          analyserRef.current.getByteFrequencyData(dataArray);

          const barCount = placement === 'floating' ? 20 : 60;
          const step = Math.floor(dataArray.length / barCount);
          const heights = Array.from({ length: barCount }, (_, i) => {
            const value = dataArray[i * step] || 0;
            return (value / 255) * 100;
          });
          setBarHeights(heights);
        }
        animationFrameRef.current = requestAnimationFrame(updateWaveform);
      };
      updateWaveform();

      if (placement === 'floating') {
        setIsExpanded(true);
      }

      onConversationStart?.();
    } catch (err) {
      console.error('Connection error:', err);
      const errorMsg = err instanceof Error ? err.message : 'Failed to connect';
      if (isMountedRef.current) {
        setError(errorMsg);
        setIsInitializing(false);
      }
      onError?.(err);
      disconnect();
    }
  };

  // Disconnect
  const disconnect = () => {
    if (durationTimerRef.current) {
      clearTimeout(durationTimerRef.current);
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
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

    audioQueueRef.current = [];
    isPlayingRef.current = false;

    if (isMountedRef.current) {
      setIsConnected(false);
      setIsInitializing(false);
      setIsAgentSpeaking(false);
      setIsMicrophoneActive(false);
      setIsExpanded(false);
      setTurnCount(0);
      setConversationStartTime(null);
      setBarHeights(new Array(placement === 'floating' ? 20 : 60).fill(0));
    }

    onConversationEnd?.();
  };

  // Language change handler
  const handleLanguageChange = (newLanguage: string) => {
    const wasConnected = isConnected;
    if (wasConnected) disconnect();
    setSelectedLanguage(newLanguage);
    if (wasConnected) setTimeout(() => connect(), 100);
  };

  // Status text
  const getStatusText = () => {
    if (error) return 'Error - Click to retry';
    if (isInitializing) return 'Connecting...';
    if (isConnected && isAgentSpeaking) return 'Speaking...';
    if (isConnected && isMicrophoneActive) return 'Listening...';
    if (isConnected) return 'Ready';
    return 'Disconnected';
  };

  // Floating mode - compact button
  if (placement === 'floating' && !isExpanded) {
    return (
      <motion.button
        onClick={connect}
        className={`
          ${colorClasses[color]} text-white
          rounded-full w-14 h-14 flex items-center justify-center
          shadow-lg hover:shadow-xl transition-all duration-300
          ${error ? 'bg-red-600 hover:bg-red-700' : ''}
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        title={buttonText || `Talk to ${section} assistant`}
      >
        {error ? (
          <AlertCircle className="w-6 h-6" />
        ) : isInitializing ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
      </motion.button>
    );
  }

  // Floating mode - expanded
  if (placement === 'floating' && isExpanded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden w-80"
      >
        <div className={`${colorClasses[color]} text-white p-4 flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{icon}</span>
            <div>
              <div className="font-semibold text-sm">{section} Assistant</div>
              <div className="text-xs opacity-90">{getStatusText()}</div>
            </div>
          </div>
          <button
            onClick={disconnect}
            className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4">
          {error && (
            <div className="mb-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-300">
              {error}
            </div>
          )}

          <div className="h-16 flex items-center justify-center gap-[2px] bg-gray-50 dark:bg-gray-900 rounded-lg p-2 mb-3">
            {barHeights.map((height, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isAgentSpeaking ? `${Math.max(height, 8)}%` : '8%',
                  opacity: isConnected ? 1 : 0.3,
                }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                className={`w-1 ${barColorClasses[color]} rounded-full`}
                style={{ minHeight: '8%' }}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div
              className={`
              w-2 h-2 rounded-full
              ${isAgentSpeaking ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}
              ${!isConnected ? 'bg-gray-400' : ''}
            `}
            />
            <span>{getStatusText()}</span>
          </div>

          <div className="mt-3 flex justify-center">
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
              disabled={isConnected}
            />
          </div>
        </div>
      </motion.div>
    );
  }

  // Inline mode
  const isWhiteTheme = color === 'white';

  return (
    <div className="w-full">
      {!isConnected && !isInitializing ? (
        <motion.button
          onClick={connect}
          className={`
            w-full flex items-center justify-center gap-3 px-6 py-4
            font-light transition-all duration-300
            ${
              isWhiteTheme
                ? 'bg-white text-gray-900 hover:bg-gray-100 border-0'
                : 'rounded-xl border border-gray-300 bg-transparent text-gray-900 hover:border-gray-400 hover:bg-gray-50'
            }
            ${error ? 'border-red-600 text-red-600 hover:bg-red-50' : ''}
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error ? (
            <>
              <AlertCircle className="w-5 h-5" />
              <span>Retry Connection</span>
            </>
          ) : (
            <>
              <Mic className="w-5 h-5" />
              <span>{buttonText || `Talk to ${section} assistant`}</span>
            </>
          )}
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-visible"
          >
            <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-lg border-t border-gray-200 dark:border-gray-700">
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-[9999]">
                <LanguageSelector
                  selectedLanguage={selectedLanguage}
                  onLanguageChange={handleLanguageChange}
                  disabled={isConnected}
                />
                <button
                  onClick={disconnect}
                  className="p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full transition-colors ml-auto"
                >
                  <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <div className="space-y-4 mt-12 overflow-hidden">
                {error && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-300">
                    {error}
                  </div>
                )}

                <div className="flex items-center justify-center gap-[2px] h-20">
                  {barHeights.map((height, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: isAgentSpeaking ? `${Math.max(height, 8)}%` : '8%',
                        opacity: isConnected ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.1, ease: 'easeOut' }}
                      className="w-[3px] bg-white/60 rounded-full"
                      style={{ minHeight: '8%' }}
                    />
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-white/90 font-light text-sm">{getStatusText()}</p>
                </div>

                {showTranscript && messages.length > 0 && (
                  <div className="mt-4 space-y-2 max-h-64 overflow-y-auto bg-white/5 rounded-lg p-4">
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`
                          p-3 rounded-lg text-sm
                          ${
                            msg.role === 'user'
                              ? 'bg-blue-500/20 text-white ml-8'
                              : 'bg-gray-500/20 text-white/90 mr-8'
                          }
                        `}
                      >
                        <div className="font-semibold capitalize mb-1 text-xs opacity-70">
                          {msg.role}
                        </div>
                        <div>{msg.text}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
