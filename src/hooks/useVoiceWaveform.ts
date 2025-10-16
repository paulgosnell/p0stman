import { useState, useEffect, useRef } from 'react';
import { useConversation } from '@elevenlabs/react';

export interface VoiceWaveformState {
  isActive: boolean;
  isConnecting: boolean;
  isConnected: boolean;
  isSpeaking: boolean;
  frequencyData: number[];
  status: string;
}

export function useVoiceWaveform(agentId: string) {
  const [heights, setHeights] = useState<number[]>(new Array(60).fill(0));
  const animationFrameRef = useRef<number>();
  const conversation = useConversation();

  // Initialize voice agent session
  useEffect(() => {
    if (conversation.status === 'connected' || conversation.status === 'connecting') {
      return;
    }

    return () => {
      if (conversation.status === 'connected') {
        conversation.endSession();
      }
    };
  }, [conversation.status]);

  // Stream frequency data to waveform
  useEffect(() => {
    if (conversation.status !== 'connected') {
      setHeights(new Array(60).fill(0));
      return;
    }

    const updateWaveform = () => {
      const frequencyData = conversation.getOutputByteFrequencyData();
      if (frequencyData) {
        const step = Math.floor(frequencyData.length / 60);
        const newHeights = Array.from({ length: 60 }, (_, i) => {
          const value = frequencyData[i * step] || 0;
          return (value / 255) * 100;
        });
        setHeights(newHeights);
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

  const startConversation = () => {
    if (conversation.status !== 'connected' && conversation.status !== 'connecting') {
      conversation.startSession({ agentId });
    }
  };

  const stopConversation = () => {
    if (conversation.status === 'connected') {
      conversation.endSession();
    }
  };

  return {
    // Voice agent state
    isActive: conversation.status === 'connected' || conversation.status === 'connecting',
    isConnecting: conversation.status === 'connecting',
    isConnected: conversation.status === 'connected',
    isSpeaking: conversation.isSpeaking,
    status: conversation.status,

    // Waveform data
    frequencyData: heights,

    // Controls
    startConversation,
    stopConversation,

    // Raw conversation object for advanced usage
    conversation,
  };
}
