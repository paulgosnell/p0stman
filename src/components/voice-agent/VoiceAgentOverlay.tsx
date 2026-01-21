import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import VoiceOrb from './VoiceOrb';
import LanguageSelector from './LanguageSelector';
import {
  OPENAI_REALTIME_URL,
  DEFAULT_VAD_CONFIG,
  TRANSCRIPTION_MODEL,
  DEFAULT_VOICE_STYLE_INSTRUCTIONS,
  type OpenAIRealtimeVoice,
} from '../../config/openai-realtime';

interface VoiceAgentOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  /** System prompt for the agent */
  prompt?: string;
  /** First message the agent says */
  firstMessage?: string;
  /** OpenAI voice selection */
  voice?: OpenAIRealtimeVoice;
  /** @deprecated No longer used - kept for backward compatibility */
  agentId?: string;
  /** @deprecated No longer used - kept for backward compatibility */
  apiKey?: string;
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

export default function VoiceAgentOverlay({
  isOpen,
  onClose,
  prompt = 'You are a helpful AI assistant for POSTMAN, an AI-powered product studio.',
  firstMessage = "Hey! Welcome to POSTMAN. I'm the AI assistant here - kind of meta, right? What brings you by today?",
  voice = 'coral',
}: VoiceAgentOverlayProps) {
  const [isActive, setIsActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const [error, setError] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  // Refs
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const remoteAudioRef = useRef<HTMLAudioElement | null>(null);
  const isMountedRef = useRef(true);

  // Build the full system prompt with language context and voice style
  const buildSystemPrompt = useCallback(() => {
    const languageName = languageMapping[selectedLanguage] || 'English';
    return `${prompt}

IMPORTANT LANGUAGE INSTRUCTION: You MUST respond in ${languageName}. The user has selected ${languageName} as their preferred language. All your responses should be in ${languageName}.

${DEFAULT_VOICE_STYLE_INSTRUCTIONS}`;
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
    };
  }, []);

  // Handle data channel messages from OpenAI
  const handleDataChannelMessage = useCallback(
    (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);

        switch (data.type) {
          case 'session.created':
            // Send session config with system prompt
            dataChannelRef.current?.send(
              JSON.stringify({
                type: 'session.update',
                session: {
                  instructions: buildSystemPrompt(),
                  voice: voice,
                  input_audio_transcription: { model: TRANSCRIPTION_MODEL },
                  turn_detection: DEFAULT_VAD_CONFIG,
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
              setConnectionStatus('connected');
              setIsActive(true);
            }
            break;

          case 'input_audio_buffer.speech_started':
            if (isMountedRef.current) {
              setIsListening(true);
              setIsSpeaking(false);
            }
            break;

          case 'input_audio_buffer.speech_stopped':
            if (isMountedRef.current) {
              setIsListening(false);
            }
            break;

          case 'response.audio.delta':
          case 'response.audio_transcript.delta':
            if (isMountedRef.current) {
              setIsSpeaking(true);
              setIsListening(false);
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
            if (isMountedRef.current) {
              setError(data.error?.message || 'Connection error. Please try again.');
              setConnectionStatus('disconnected');
            }
            break;
        }
      } catch (e) {
        console.error('Failed to parse data channel message:', e);
      }
    },
    [buildSystemPrompt, voice, firstMessage]
  );

  // Start conversation
  const startConversation = useCallback(async () => {
    if (isActive) return;

    try {
      setConnectionStatus('connecting');
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
        }
      };

      // 5. Add microphone track
      pc.addTrack(stream.getAudioTracks()[0], stream);

      // 6. Create data channel for events
      const dc = pc.createDataChannel('oai-events');
      dataChannelRef.current = dc;
      dc.onmessage = handleDataChannelMessage;
      dc.onopen = () => {
        console.log('Connected to OpenAI with language:', selectedLanguage);
      };
      dc.onclose = () => {
        console.log('Disconnected from OpenAI');
        if (isMountedRef.current) {
          setConnectionStatus('disconnected');
          setIsActive(false);
          setIsListening(false);
          setIsSpeaking(false);
        }
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
        if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') {
          if (isMountedRef.current) {
            setError('Connection lost');
            endConversation();
          }
        }
      };
    } catch (err) {
      console.error('Failed to start conversation:', err);
      if (isMountedRef.current) {
        setError(err instanceof Error ? err.message : 'Failed to start conversation. Please try again.');
        setConnectionStatus('disconnected');
      }
    }
  }, [isActive, selectedLanguage, handleDataChannelMessage, voice]);

  // End conversation
  const endConversation = useCallback(() => {
    dataChannelRef.current?.close();
    dataChannelRef.current = null;

    peerConnectionRef.current?.close();
    peerConnectionRef.current = null;

    audioStreamRef.current?.getTracks().forEach((t) => t.stop());
    audioStreamRef.current = null;

    if (isMountedRef.current) {
      setIsActive(false);
      setIsListening(false);
      setIsSpeaking(false);
      setConnectionStatus('disconnected');
    }
  }, []);

  // Handle orb click
  const handleOrbClick = useCallback(() => {
    if (isActive) {
      endConversation();
    } else {
      startConversation();
    }
  }, [isActive, startConversation, endConversation]);

  // Cleanup on unmount or close
  useEffect(() => {
    if (!isOpen && isActive) {
      endConversation();
    }
  }, [isOpen, isActive, endConversation]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Get status text
  const getStatusText = () => {
    if (error) return error;
    if (connectionStatus === 'connecting') return 'Connecting to POSTMAN...';
    if (isSpeaking) return 'POSTMAN is speaking...';
    if (isListening) return 'POSTMAN is listening...';
    if (isActive) return 'Tap to end conversation with POSTMAN';
    return 'Tap to talk to POSTMAN';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
        >
          {/* Top bar with language selector and close button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.1 }}
            className="absolute top-6 left-6 right-6 md:top-8 md:left-8 md:right-8 flex justify-between items-center"
          >
            {/* Language selector - disabled during active conversation */}
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              disabled={isActive || connectionStatus === 'connecting'}
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Close"
            >
              <X size={28} strokeWidth={2} />
            </button>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="flex flex-col items-center justify-center space-y-8 px-4"
          >
            {/* Orb */}
            <motion.button
              onClick={handleOrbClick}
              disabled={connectionStatus === 'connecting'}
              className="relative cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <VoiceOrb
                isListening={isListening}
                isSpeaking={isSpeaking}
                isActive={isActive}
              />
            </motion.button>

            {/* Status text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center space-y-2"
            >
              <p
                className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${
                  error
                    ? 'text-red-400'
                    : isSpeaking
                    ? 'text-orange-400'
                    : isListening
                    ? 'text-blue-400'
                    : 'text-white'
                }`}
              >
                {getStatusText()}
              </p>

              {/* Subtle instruction */}
              {!isActive && !error && (
                <p className="text-sm text-white/60">
                  Press ESC to close
                </p>
              )}

              {/* Active status indicator */}
              {isActive && (
                <div className="flex items-center justify-center space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full animate-pulse ${
                      isSpeaking ? 'bg-orange-400' : 'bg-blue-400'
                    }`}
                  />
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    Connected
                  </span>
                </div>
              )}
            </motion.div>

            {/* Error retry button */}
            {error && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={startConversation}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                Try Again
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
