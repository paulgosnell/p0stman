import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Conversation } from '@elevenlabs/client';
import VoiceOrb from './VoiceOrb';
import LanguageSelector from './LanguageSelector';

interface VoiceAgentOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  agentId: string;
  apiKey: string;
}

export default function VoiceAgentOverlay({ isOpen, onClose, agentId, apiKey }: VoiceAgentOverlayProps) {
  const [isActive, setIsActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const [error, setError] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const conversationRef = useRef<Conversation | null>(null);

  // Start conversation
  const startConversation = useCallback(async () => {
    if (!agentId || isActive) return;

    try {
      setConnectionStatus('connecting');
      setError(null);

      // Initialize ElevenLabs conversation with language override
      const conversation = await Conversation.startSession({
        agentId,
        apiKey,
        overrides: {
          agent: {
            language: selectedLanguage,
          },
        },
        onConnect: () => {
          console.log('Connected to ElevenLabs with language:', selectedLanguage);
          setConnectionStatus('connected');
          setIsActive(true);
        },
        onDisconnect: () => {
          console.log('Disconnected from ElevenLabs');
          setConnectionStatus('disconnected');
          setIsActive(false);
          setIsListening(false);
          setIsSpeaking(false);
        },
        onError: (error) => {
          console.error('Conversation error:', error);
          setError('Connection error. Please try again.');
          setConnectionStatus('disconnected');
        },
        onModeChange: (mode) => {
          console.log('Mode changed:', mode);
          setIsListening(mode.mode === 'listening');
          setIsSpeaking(mode.mode === 'speaking');
        }
      });

      conversationRef.current = conversation;

    } catch (err) {
      console.error('Failed to start conversation:', err);
      setError('Failed to start conversation. Please try again.');
      setConnectionStatus('disconnected');
    }
  }, [agentId, apiKey, isActive, selectedLanguage]);

  // End conversation
  const endConversation = useCallback(async () => {
    if (conversationRef.current) {
      try {
        await conversationRef.current.endSession();
      } catch (err) {
        console.error('Error ending conversation:', err);
      }
      conversationRef.current = null;
    }
    setIsActive(false);
    setIsListening(false);
    setIsSpeaking(false);
    setConnectionStatus('disconnected');
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
    if (connectionStatus === 'connecting') return 'Connecting to P0STMAN...';
    if (isSpeaking) return 'P0STMAN is speaking...';
    if (isListening) return 'P0STMAN is listening...';
    if (isActive) return 'Tap to end conversation with P0STMAN';
    return 'Tap to talk to P0STMAN';
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
              className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
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
                  <span className="text-xs text-white/70 uppercase tracking-wider">
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
