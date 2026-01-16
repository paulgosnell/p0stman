import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import type { GestureType, DetectedGesture } from '../../hooks/useGestureDetection';

// Map gestures to emojis and colors
const GESTURE_CONFIG: Record<
  GestureType,
  { emoji: string; colors: string[]; label: string } | null
> = {
  Thumb_Up: {
    emoji: '👍',
    colors: ['#FFD700', '#FFA500', '#FF8C00'],
    label: 'Nice!',
  },
  Thumb_Down: {
    emoji: '👎',
    colors: ['#6B7280', '#4B5563', '#374151'],
    label: 'Hmm...',
  },
  Victory: {
    emoji: '✌️',
    colors: ['#8B5CF6', '#A855F7', '#D946EF'],
    label: 'Peace!',
  },
  ILoveYou: {
    emoji: '🤟',
    colors: ['#EC4899', '#F43F5E', '#EF4444'],
    label: 'Love it!',
  },
  Pointing_Up: {
    emoji: '☝️',
    colors: ['#3B82F6', '#0EA5E9', '#06B6D4'],
    label: 'Good point!',
  },
  Open_Palm: {
    emoji: '👋',
    colors: ['#F59E0B', '#FBBF24', '#FCD34D'],
    label: 'Hey there!',
  },
  Closed_Fist: {
    emoji: '👊',
    colors: ['#EF4444', '#F97316', '#FB923C'],
    label: 'Boom!',
  },
  None: null,
};

interface FallingEmoji {
  id: number;
  emoji: string;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

interface GestureEffectsProps {
  gesture: DetectedGesture | null;
  containerRef?: React.RefObject<HTMLElement>;
}

export function GestureEffects({ gesture, containerRef }: GestureEffectsProps) {
  const [emojis, setEmojis] = useState<FallingEmoji[]>([]);
  const [label, setLabel] = useState<string | null>(null);

  const triggerEffect = useCallback((gestureType: GestureType) => {
    const config = GESTURE_CONFIG[gestureType];
    if (!config) return;

    // Show label
    setLabel(config.label);
    setTimeout(() => setLabel(null), 2000);

    // Create falling emojis
    const newEmojis: FallingEmoji[] = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      emoji: config.emoji,
      x: Math.random() * 100, // percentage across screen
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
      size: 24 + Math.random() * 24,
      rotation: Math.random() * 360,
    }));

    setEmojis(newEmojis);

    // Also trigger confetti for extra flair
    const colors = config.colors;
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.3, x: 0.5 },
      colors,
      ticks: 100,
      gravity: 1.2,
      scalar: 1.2,
      shapes: ['circle', 'square'],
    });

    // Clear emojis after animation
    setTimeout(() => setEmojis([]), 4000);
  }, []);

  // Trigger effect when gesture changes
  useEffect(() => {
    if (gesture && gesture.gesture !== 'None') {
      triggerEffect(gesture.gesture);
    }
  }, [gesture, triggerEffect]);

  return (
    <>
      {/* Gesture Label */}
      <AnimatePresence>
        {label && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            className="fixed top-1/3 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-2xl">
              <span className="text-2xl font-bold text-white drop-shadow-lg">
                {label}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Falling Emojis */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
        <AnimatePresence>
          {emojis.map((emoji) => (
            <motion.div
              key={emoji.id}
              initial={{
                opacity: 1,
                y: -100,
                x: `${emoji.x}vw`,
                rotate: emoji.rotation,
                scale: 0,
              }}
              animate={{
                opacity: [1, 1, 0],
                y: '110vh',
                rotate: emoji.rotation + 360,
                scale: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: emoji.duration,
                delay: emoji.delay,
                ease: 'easeIn',
              }}
              style={{ fontSize: emoji.size }}
              className="absolute top-0 select-none"
            >
              {emoji.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

// Compact version for the video panel
export function GestureIndicator({ gesture }: { gesture: DetectedGesture | null }) {
  if (!gesture || gesture.gesture === 'None') return null;

  const config = GESTURE_CONFIG[gesture.gesture];
  if (!config) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="absolute top-2 left-2 z-20 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full flex items-center gap-1"
    >
      <span className="text-lg">{config.emoji}</span>
      <span className="text-xs text-white/80 font-light">{config.label}</span>
    </motion.div>
  );
}
