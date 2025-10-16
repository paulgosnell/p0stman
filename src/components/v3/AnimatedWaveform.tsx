import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedWaveformProps {
  barCount?: number;
  color?: string;
  animate?: boolean;
}

export default function AnimatedWaveform({
  barCount = 60,
  color = '#0066FF',
  animate = true
}: AnimatedWaveformProps) {
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    // Initialize heights
    const initialHeights = Array.from({ length: barCount }, (_, i) => {
      const phase = (i / barCount) * Math.PI * 2;
      return 20 + 60 * Math.abs(Math.sin(phase));
    });
    setHeights(initialHeights);

    if (!animate) return;

    // Animation loop
    let frame = 0;
    const interval = setInterval(() => {
      frame += 1;
      const newHeights = Array.from({ length: barCount }, (_, i) => {
        const phase = ((i + frame * 0.5) / barCount) * Math.PI * 2;
        const baseHeight = 20;
        const waveHeight = 60 * Math.abs(Math.sin(phase));
        const randomJitter = Math.random() * 15;
        return baseHeight + waveHeight + randomJitter;
      });
      setHeights(newHeights);
    }, 100);

    return () => clearInterval(interval);
  }, [barCount, animate]);

  return (
    <div className="w-full h-full flex items-center justify-center gap-[3px]">
      {heights.map((height, i) => (
        <motion.div
          key={i}
          className="rounded-full flex-1"
          style={{
            backgroundColor: color,
            height: `${Math.max(height, 5)}%`,
            opacity: 0.85,
            minWidth: '2px',
            maxWidth: '6px',
          }}
          animate={{
            height: `${Math.max(height, 5)}%`,
          }}
          transition={{
            duration: 0.15,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
