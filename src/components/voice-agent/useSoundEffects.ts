/**
 * Optional sound effects hook for voice agent
 * Uncomment and integrate if you want subtle audio feedback
 */

import { useEffect, useRef } from 'react';

interface SoundEffectsConfig {
  enabled?: boolean;
  volume?: number; // 0.0 to 1.0
}

export function useSoundEffects(config: SoundEffectsConfig = {}) {
  const { enabled = false, volume = 0.3 } = config;
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!enabled) return;

    if (typeof window !== 'undefined' && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, [enabled]);

  const playTone = (frequency: number, duration: number) => {
    if (!enabled || !audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  };

  return {
    // Subtle whoosh when overlay opens
    playOpen: () => {
      playTone(440, 0.2); // A4 note
    },

    // Soft tone when conversation starts
    playConnect: () => {
      playTone(523.25, 0.15); // C5 note
    },

    // Gentle tone when conversation ends
    playDisconnect: () => {
      playTone(392, 0.2); // G4 note
    },

    // Quick notification for AI response
    playResponse: () => {
      playTone(659.25, 0.1); // E5 note
    },

    // Error sound
    playError: () => {
      playTone(220, 0.3); // A3 note (lower, more ominous)
    }
  };
}

/**
 * Usage example in VoiceAgentOverlay.tsx:
 *
 * const sounds = useSoundEffects({ enabled: true, volume: 0.2 });
 *
 * useEffect(() => {
 *   if (isOpen) {
 *     sounds.playOpen();
 *   }
 * }, [isOpen]);
 *
 * useEffect(() => {
 *   if (connectionStatus === 'connected') {
 *     sounds.playConnect();
 *   } else if (connectionStatus === 'disconnected' && isActive) {
 *     sounds.playDisconnect();
 *   }
 * }, [connectionStatus]);
 *
 * useEffect(() => {
 *   if (error) {
 *     sounds.playError();
 *   }
 * }, [error]);
 */
