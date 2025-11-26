import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import {
  OPENAI_REALTIME_URL,
  DEFAULT_VAD_CONFIG,
  TRANSCRIPTION_MODEL,
  DEFAULT_VOICE_STYLE_INSTRUCTIONS,
  type OpenAIRealtimeVoice,
} from '../../config/openai-realtime';

interface InlineVoiceAgentProps {
  isActive: boolean;
  onClose: () => void;
  /** System prompt for the agent */
  prompt?: string;
  /** First message the agent says */
  firstMessage?: string;
  /** OpenAI voice selection */
  voice?: OpenAIRealtimeVoice;
  /** @deprecated No longer used - kept for backward compatibility */
  agentId?: string;
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

export default function InlineVoiceAgent({
  isActive,
  onClose,
  prompt = 'You are a helpful AI assistant for P0STMAN, an AI-powered product studio.',
  firstMessage = "Hey! Welcome to P0STMAN. I'm the AI assistant here - kind of meta, right? What brings you by today?",
  voice = 'coral',
}: InlineVoiceAgentProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [isConnected, setIsConnected] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isAgentSpeaking, setIsAgentSpeaking] = useState(false);
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Refs
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const remoteAudioRef = useRef<HTMLAudioElement | null>(null);
  const isMountedRef = useRef(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number>();

  const [barHeights, setBarHeights] = useState<number[]>(new Array(60).fill(0));

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
      disconnect();
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
            if (isMountedRef.current) {
              setIsAgentSpeaking(true);
              setIsMicrophoneActive(false);
            }
            break;

          case 'response.audio.done':
          case 'response.audio_transcript.done':
          case 'response.done':
            if (isMountedRef.current) {
              setIsAgentSpeaking(false);
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
    [buildSystemPrompt, voice, firstMessage]
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

              const step = Math.floor(dataArray.length / 60);
              const heights = Array.from({ length: 60 }, (_, i) => {
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
            disconnect();
          }
        }
      };
    } catch (err) {
      console.error('Connection error:', err);
      const errorMsg = err instanceof Error ? err.message : 'Failed to connect';
      if (isMountedRef.current) {
        setError(errorMsg);
        setIsInitializing(false);
      }
      disconnect();
    }
  };

  // Disconnect and cleanup
  const disconnect = () => {
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
      setIsConnected(false);
      setIsInitializing(false);
      setIsAgentSpeaking(false);
      setIsMicrophoneActive(false);
      setBarHeights(new Array(60).fill(0));
    }
  };

  // Handle language change - must restart session
  const handleLanguageChange = (newLanguage: string) => {
    const wasConnected = isConnected;
    if (wasConnected) {
      disconnect();
    }
    setSelectedLanguage(newLanguage);

    if (wasConnected) {
      setTimeout(() => connect(), 100);
    }
  };

  // Auto-connect when isActive becomes true
  useEffect(() => {
    if (isActive && !isConnected && !isInitializing) {
      connect();
    }

    return () => {
      if (!isActive && isConnected) {
        disconnect();
      }
    };
  }, [isActive]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      disconnect();
    };
  }, []);

  // Handle close
  const handleClose = () => {
    disconnect();
    onClose();
  };

  // Get status text
  const getStatusText = () => {
    if (error) return error;
    if (isInitializing) return 'Connecting...';
    if (isConnected && isAgentSpeaking) return 'Speaking...';
    if (isConnected && isMicrophoneActive) return 'Listening...';
    if (isConnected) return 'Ready';
    return 'Disconnected';
  };

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-visible"
    >
      <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-lg border-t border-gray-200">
        {/* Header with language selector and close button */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-[9999]">
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
            disabled={isConnected}
          />

          <button
            onClick={handleClose}
            className="p-1.5 hover:bg-gray-50 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="space-y-4 mt-12 overflow-hidden">
          {/* Error message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
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
  );
}
