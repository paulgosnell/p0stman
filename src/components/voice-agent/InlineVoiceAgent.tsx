import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useConversation } from '@elevenlabs/react';
import { X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

interface InlineVoiceAgentProps {
  isActive: boolean;
  onClose: () => void;
  agentId: string;
}

export default function InlineVoiceAgent({ isActive, onClose, agentId }: InlineVoiceAgentProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const conversation = useConversation();

  // Handle language change - must restart session
  const handleLanguageChange = (newLanguage: string) => {
    const wasActive = conversation.status === 'connected';
    if (wasActive) {
      conversation.endSession();
    }
    setSelectedLanguage(newLanguage);
  };

  const [barHeights, setBarHeights] = useState<number[]>(new Array(60).fill(0));
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (isActive && conversation.status !== 'connected' && conversation.status !== 'connecting') {
      const config: any = { agentId };

      // Add overrides for language if not English
      if (selectedLanguage !== 'en') {
        config.overrides = {
          agent: {
            language: selectedLanguage,
          },
        };
      }

      console.log('Starting session with config:', config);
      conversation.startSession(config);
    }

    return () => {
      if (conversation.status === 'connected') {
        conversation.endSession();
      }
    };
  }, [isActive, conversation.status, selectedLanguage]);

  // Animate waveform based on audio frequency data
  useEffect(() => {
    if (conversation.status !== 'connected') {
      setBarHeights(new Array(60).fill(0));
      return;
    }

    const updateWaveform = () => {
      const frequencyData = conversation.getOutputByteFrequencyData();
      if (frequencyData) {
        const step = Math.floor(frequencyData.length / 60);
        const heights = Array.from({ length: 60 }, (_, i) => {
          const value = frequencyData[i * step] || 0;
          return (value / 255) * 100;
        });
        setBarHeights(heights);
      }
      animationFrameRef.current = requestAnimationFrame(updateWaveform);
    };

    updateWaveform();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [conversation.status]);

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-visible"
    >
      <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-lg border-t border-white/10">
        {/* Header with language selector and close button - positioned outside overflow context */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-[9999]">
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
            disabled={false}
          />

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-white/70" />
          </button>
        </div>

        <div className="space-y-4 mt-12 overflow-hidden">
          {/* Live Waveform */}
          <div className="flex items-center justify-center gap-[2px] h-20">
            {barHeights.map((height, i) => (
              <motion.div
                key={i}
                animate={{
                  height: conversation.isSpeaking ? `${Math.max(height, 8)}%` : '8%',
                  opacity: conversation.status === 'connected' ? 1 : 0.3,
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
            <p className="text-white/90 font-light text-sm">
              {conversation.status === 'connecting' && 'Connecting...'}
              {conversation.status === 'connected' && !conversation.isSpeaking && 'Listening...'}
              {conversation.status === 'connected' && conversation.isSpeaking && 'Speaking...'}
              {conversation.status === 'disconnected' && 'Disconnected'}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
