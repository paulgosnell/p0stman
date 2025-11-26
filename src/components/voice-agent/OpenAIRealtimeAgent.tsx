'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mic, X, Loader2, AlertCircle } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import {
  OPENAI_REALTIME_URL,
  DEFAULT_VAD_CONFIG,
  TRANSCRIPTION_MODEL,
  DEFAULT_VOICE_STYLE_INSTRUCTIONS,
  type OpenAIRealtimeVoice,
} from '../../config/openai-realtime';

export interface OpenAIRealtimeAgentProps {
  /** The section of the site this agent is for */
  section: string;

  /** Custom system prompt for this section */
  prompt: string;

  /** Optional first message override */
  firstMessage?: string;

  /** Display mode: 'inline' = full inline widget, 'floating' = compact floating button */
  placement?: 'inline' | 'floating';

  /** Optional button text for the trigger button */
  buttonText?: string;

  /** Theme color for the component */
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'pink';

  /** Icon to display on the button */
  icon?: string;

  /** Auto-start the conversation when component mounts */
  autoStart?: boolean;

  /** OpenAI voice selection */
  voice?: OpenAIRealtimeVoice;

  /** Callback when conversation starts */
  onConversationStart?: () => void;

  /** Callback when conversation ends */
  onConversationEnd?: () => void;

  /** Callback when error occurs */
  onError?: (error: any) => void;

  /** Callback when messages are updated */
  onMessagesUpdate?: (messages: Message[]) => void;
}

interface Message {
  role: 'user' | 'agent';
  text: string;
  timestamp: number;
}

// Language code mapping for OpenAI
const languageMapping: Record<string, string> = {
  en: 'English',
  it: 'Italian',
  es: 'Spanish',
  fr: 'French',
  da: 'Danish',
  ar: 'Arabic',
};

export default function OpenAIRealtimeAgent({
  section,
  prompt,
  firstMessage,
  placement = 'inline',
  buttonText,
  color = 'blue',
  icon = '🎤',
  autoStart = false,
  voice = 'coral',
  onConversationStart,
  onConversationEnd,
  onError,
  onMessagesUpdate,
}: OpenAIRealtimeAgentProps) {
  // TEMPORARY: Voice agent maintenance mode
  const VOICE_AGENT_MAINTENANCE = false;

  // State
  const [isConnected, setIsConnected] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isAgentSpeaking, setIsAgentSpeaking] = useState(false);
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  // Refs
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const remoteAudioRef = useRef<HTMLAudioElement | null>(null);
  const isMountedRef = useRef(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number>();

  const navigate = useNavigate();

  // Color theme mappings
  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-pink-600',
    purple: 'bg-purple-600 hover:bg-pink-600',
    green: 'bg-green-600 hover:bg-pink-600',
    orange: 'bg-orange-600 hover:bg-pink-600',
    pink: 'bg-pink-600 hover:bg-pink-700',
  };

  const barColorClasses = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    pink: 'bg-pink-500',
  };

  // Waveform state
  const [barHeights, setBarHeights] = useState<number[]>(
    new Array(placement === 'floating' ? 20 : 60).fill(0)
  );

  // Build the full system prompt with language context and voice style
  const buildSystemPrompt = useCallback(() => {
    const languageName = languageMapping[selectedLanguage] || 'English';
    return `${prompt}

IMPORTANT LANGUAGE INSTRUCTION: You MUST respond in ${languageName}. The user has selected ${languageName} as their preferred language. All your responses should be in ${languageName}.

${DEFAULT_VOICE_STYLE_INSTRUCTIONS}

You have access to the following tools for navigation:
- navigateToSection: Navigate to different pages (pricing, services, case-studies, contact, home)
- scrollToElement: Scroll to a specific element on the page
- highlightSection: Highlight a section with visual effect`;
  }, [prompt, selectedLanguage]);

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
      disconnect();
    };
  }, []);

  // Auto-start if enabled
  useEffect(() => {
    if (autoStart && !isConnected && !isInitializing) {
      connect();
    }
  }, [autoStart]);

  // Handle tool calls from OpenAI
  const handleToolCall = useCallback(
    (toolName: string, parameters: any) => {
      console.log('🔧 Tool call received:', toolName, 'with params:', parameters);

      switch (toolName) {
        case 'navigateToSection': {
          const validSections = ['pricing', 'services', 'case-studies', 'contact', 'home'];
          if (validSections.includes(parameters.section)) {
            const path = parameters.section === 'home' ? '/' : `/${parameters.section}`;
            navigate(path);
            return `Navigating to ${parameters.section} page`;
          }
          return `Cannot navigate to ${parameters.section}`;
        }

        case 'scrollToElement': {
          const element = document.getElementById(parameters.elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return `Scrolled to ${parameters.elementId}`;
          }
          return `Element ${parameters.elementId} not found`;
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
          return `Section ${parameters.sectionId} not found`;
        }

        default:
          return `Unknown tool: ${toolName}`;
      }
    },
    [navigate]
  );

  // Handle data channel messages from OpenAI
  const handleDataChannelMessage = useCallback(
    (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        console.log('📨 OpenAI event:', data.type);

        switch (data.type) {
          case 'session.created':
            // Send session config with system prompt and tools
            dataChannelRef.current?.send(
              JSON.stringify({
                type: 'session.update',
                session: {
                  instructions: buildSystemPrompt(),
                  voice: voice,
                  input_audio_transcription: { model: TRANSCRIPTION_MODEL },
                  turn_detection: DEFAULT_VAD_CONFIG,
                  tools: [
                    {
                      type: 'function',
                      name: 'navigateToSection',
                      description: 'Navigate to a different page on the website',
                      parameters: {
                        type: 'object',
                        properties: {
                          section: {
                            type: 'string',
                            enum: ['pricing', 'services', 'case-studies', 'contact', 'home'],
                            description: 'The section/page to navigate to',
                          },
                        },
                        required: ['section'],
                      },
                    },
                    {
                      type: 'function',
                      name: 'scrollToElement',
                      description: 'Scroll to a specific element on the current page',
                      parameters: {
                        type: 'object',
                        properties: {
                          elementId: {
                            type: 'string',
                            description: 'The ID of the element to scroll to',
                          },
                        },
                        required: ['elementId'],
                      },
                    },
                    {
                      type: 'function',
                      name: 'highlightSection',
                      description: 'Highlight a section with a visual ring effect',
                      parameters: {
                        type: 'object',
                        properties: {
                          sectionId: {
                            type: 'string',
                            description: 'The ID of the section to highlight',
                          },
                        },
                        required: ['sectionId'],
                      },
                    },
                  ],
                },
              })
            );

            // Trigger first message after brief delay
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
              setIsConnected(true);
              setIsInitializing(false);
            }
            break;

          case 'input_audio_buffer.speech_started':
            if (isMountedRef.current) {
              setIsMicrophoneActive(true);
              setIsAgentSpeaking(false);
            }
            break;

          case 'input_audio_buffer.speech_stopped':
            if (isMountedRef.current) {
              setIsMicrophoneActive(false);
            }
            break;

          case 'response.audio.delta':
          case 'response.audio_transcript.delta':
            // Audio is streaming
            if (isMountedRef.current) {
              setIsAgentSpeaking(true);
              setIsMicrophoneActive(false);
            }
            break;

          case 'response.audio.done':
          case 'response.audio_transcript.done':
            // Audio finished
            if (isMountedRef.current) {
              setIsAgentSpeaking(false);
            }
            break;

          case 'response.done':
            if (isMountedRef.current) {
              setIsAgentSpeaking(false);
            }
            break;

          case 'conversation.item.created':
            // Track messages for transcript
            if (data.item?.content) {
              const content = data.item.content[0];
              if (content?.transcript || content?.text) {
                const newMessage: Message = {
                  role: data.item.role === 'assistant' ? 'agent' : 'user',
                  text: content.transcript || content.text || '',
                  timestamp: Date.now(),
                };
                setMessages((prev) => {
                  const updated = [...prev, newMessage];
                  onMessagesUpdate?.(updated);
                  return updated;
                });
              }
            }
            break;

          case 'response.function_call_arguments.done':
            // Handle tool call
            if (data.name && data.arguments) {
              try {
                const args = JSON.parse(data.arguments);
                const result = handleToolCall(data.name, args);

                // Send tool result back
                dataChannelRef.current?.send(
                  JSON.stringify({
                    type: 'conversation.item.create',
                    item: {
                      type: 'function_call_output',
                      call_id: data.call_id,
                      output: result,
                    },
                  })
                );

                // Trigger response after tool call
                dataChannelRef.current?.send(
                  JSON.stringify({
                    type: 'response.create',
                  })
                );
              } catch (e) {
                console.error('Failed to parse tool arguments:', e);
              }
            }
            break;

          case 'error':
            console.error('OpenAI Realtime error:', data.error);
            if (isMountedRef.current) {
              setError(data.error?.message || 'An error occurred');
            }
            break;
        }
      } catch (e) {
        console.error('Failed to parse data channel message:', e);
      }
    },
    [buildSystemPrompt, voice, firstMessage, handleToolCall, onMessagesUpdate]
  );

  // Connect to OpenAI Realtime
  const connect = async () => {
    try {
      setIsInitializing(true);
      setError(null);

      // 1. Get ephemeral key from our API
      const keyResponse = await fetch('/api/openai-realtime-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ voice }),
      });

      if (!keyResponse.ok) {
        const errorData = await keyResponse.json();
        throw new Error(errorData.error || 'Failed to get session token');
      }

      const { client_secret } = await keyResponse.json();

      // 2. Get microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStreamRef.current = stream;

      // 3. Create WebRTC peer connection
      const pc = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      });
      peerConnectionRef.current = pc;

      // 4. Handle incoming audio from OpenAI
      pc.ontrack = (event) => {
        if (remoteAudioRef.current && event.streams[0]) {
          remoteAudioRef.current.srcObject = event.streams[0];

          // Setup audio analyzer for waveform
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
        }
      };

      // 5. Add microphone track
      pc.addTrack(stream.getAudioTracks()[0], stream);

      // 6. Create data channel for events
      const dc = pc.createDataChannel('oai-events');
      dataChannelRef.current = dc;
      dc.onmessage = handleDataChannelMessage;
      dc.onopen = () => {
        console.log('Data channel opened');
      };
      dc.onclose = () => {
        console.log('Data channel closed');
      };

      // 7. Create and send offer
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      // 8. Exchange SDP with OpenAI
      const sdpResponse = await fetch(
        OPENAI_REALTIME_URL,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${client_secret.value}`,
            'Content-Type': 'application/sdp',
          },
          body: offer.sdp,
        }
      );

      if (!sdpResponse.ok) {
        throw new Error('Failed to connect to OpenAI Realtime');
      }

      // 9. Set remote description
      await pc.setRemoteDescription({
        type: 'answer',
        sdp: await sdpResponse.text(),
      });

      // 10. Handle connection state changes
      pc.onconnectionstatechange = () => {
        console.log('Connection state:', pc.connectionState);
        if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') {
          if (isMountedRef.current) {
            setError('Connection lost');
            disconnect();
          }
        }
      };

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

  // Disconnect and cleanup
  const disconnect = () => {
    // Cancel animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = undefined;
    }

    // Close data channel
    dataChannelRef.current?.close();
    dataChannelRef.current = null;

    // Close peer connection
    peerConnectionRef.current?.close();
    peerConnectionRef.current = null;

    // Stop audio tracks
    audioStreamRef.current?.getTracks().forEach((t) => t.stop());
    audioStreamRef.current = null;

    // Close audio context
    audioContextRef.current?.close();
    audioContextRef.current = null;
    analyserRef.current = null;

    if (isMountedRef.current) {
      setIsConnected(false);
      setIsInitializing(false);
      setIsAgentSpeaking(false);
      setIsMicrophoneActive(false);
      setIsExpanded(false);
      setBarHeights(new Array(placement === 'floating' ? 20 : 60).fill(0));
    }

    onConversationEnd?.();
  };

  // Handle language change
  const handleLanguageChange = (newLanguage: string) => {
    const wasConnected = isConnected;
    if (wasConnected) {
      disconnect();
    }
    setSelectedLanguage(newLanguage);

    // Restart with new language if was connected
    if (wasConnected) {
      setTimeout(() => connect(), 100);
    }
  };

  // Get status text
  const getStatusText = () => {
    if (error) return 'Error - Click to retry';
    if (isInitializing) return 'Connecting...';
    if (isConnected && isAgentSpeaking) return 'Speaking...';
    if (isConnected && isMicrophoneActive) return 'Listening...';
    if (isConnected) return 'Ready';
    return 'Disconnected';
  };

  // TEMPORARY: Show maintenance message if voice agent is disabled
  if (VOICE_AGENT_MAINTENANCE) {
    if (placement === 'floating') {
      return (
        <motion.div
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full px-4 py-2 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          title="Voice Agent is currently being upgraded"
        >
          <div className="flex items-center gap-2 text-sm font-medium">
            <span>🍔</span>
            <span>Voice Agent out for lunch</span>
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full">
        <div className="relative overflow-hidden rounded-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-pink-50 p-6 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(251,146,60,0.3),transparent_50%)]" />
          </div>
          <div className="relative z-10">
            <div className="text-4xl mb-3 animate-bounce">🍔</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Voice Agent Out for Lunch</h3>
            <p className="text-gray-600 font-light mb-4">
              Our AI assistant is being upgraded with new capabilities.
              <br />
              Back online soon!
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-orange-200">
              <span className="text-sm text-gray-700">
                In the meantime, you can{' '}
                <a
                  href="/contact"
                  className="text-orange-600 hover:text-orange-700 font-medium underline"
                >
                  contact us directly
                </a>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

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

  // Floating mode - expanded widget
  if (placement === 'floating' && isExpanded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden w-80"
      >
        {/* Header */}
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

        {/* Content */}
        <div className="p-4">
          {/* Error message */}
          {error && (
            <div className="mb-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-300">
              {error}
            </div>
          )}

          {/* Waveform */}
          <div className="h-16 flex items-center justify-center gap-[2px] bg-gray-50 dark:bg-gray-900 rounded-lg p-2 mb-3">
            {barHeights.map((height, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isAgentSpeaking ? `${Math.max(height, 8)}%` : '8%',
                  opacity: isConnected ? 1 : 0.3,
                }}
                transition={{
                  duration: 0.1,
                  ease: 'easeOut',
                }}
                className={`w-1 ${barColorClasses[color]} rounded-full`}
                style={{
                  minHeight: '8%',
                }}
              />
            ))}
          </div>

          {/* Status indicator */}
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

          {/* Language selector */}
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
  return (
    <div className="w-full">
      {!isConnected && !isInitializing ? (
        // Trigger button
        <motion.button
          onClick={connect}
          className={`
            w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl
            border border-gray-300 bg-transparent text-gray-900 font-light
            hover:border-gray-400 hover:bg-gray-50
            transition-all duration-300
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
        // Active widget
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-visible"
          >
            <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-lg border-t border-gray-200 dark:border-gray-700">
              {/* Header with language selector and close button */}
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
                {/* Error message */}
                {error && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-300">
                    {error}
                  </div>
                )}

                {/* Live Waveform */}
                <div className="flex items-center justify-center gap-[2px] h-20">
                  {barHeights.map((height, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: isAgentSpeaking ? `${Math.max(height, 8)}%` : '8%',
                        opacity: isConnected ? 1 : 0.3,
                      }}
                      transition={{
                        duration: 0.1,
                        ease: 'easeOut',
                      }}
                      className="w-[3px] bg-white/60 rounded-full"
                      style={{
                        minHeight: '8%',
                      }}
                    />
                  ))}
                </div>

                {/* Status text */}
                <div className="text-center">
                  <p className="text-white/90 font-light text-sm">{getStatusText()}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
