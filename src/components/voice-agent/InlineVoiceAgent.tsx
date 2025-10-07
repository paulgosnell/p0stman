import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useConversation } from '@elevenlabs/react';
import { X } from 'lucide-react';

interface InlineVoiceAgentProps {
  isActive: boolean;
  onClose: () => void;
  agentId: string;
}

export default function InlineVoiceAgent({ isActive, onClose, agentId }: InlineVoiceAgentProps) {
  const conversation = useConversation({
    onConnect: () => console.log('Connected'),
    onDisconnect: () => console.log('Disconnected'),
    onError: (error) => console.error('Error:', error),
  });

  const [barHeights, setBarHeights] = useState<number[]>(new Array(60).fill(0));
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (isActive && conversation.status !== 'connected' && conversation.status !== 'connecting') {
      conversation.startSession({ agentId });
    }

    return () => {
      if (conversation.status === 'connected') {
        conversation.endSession();
      }
    };
  }, [isActive, conversation.status]);

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
      className="overflow-hidden"
    >
      <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-lg border-t border-white/10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-4 h-4 text-white/70" />
        </button>

        <div className="space-y-4">
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
