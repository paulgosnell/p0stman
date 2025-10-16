import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedWaveformProps {
  barCount?: number;
  color?: string;
  hoverColor?: string;
  animate?: boolean;
  frequencyData?: number[];
  isLive?: boolean;
  onBarClick?: (index: number) => void;
}

export default function AnimatedWaveform({
  barCount = 60,
  color = '#0066FF',
  hoverColor = '#FF6B35',
  animate = true,
  frequencyData,
  isLive = false,
  onBarClick
}: AnimatedWaveformProps) {
  const [heights, setHeights] = useState<number[]>([]);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  useEffect(() => {
    // If live mode with frequency data, use that directly
    if (isLive && frequencyData && frequencyData.length > 0) {
      setHeights(frequencyData);
      return;
    }

    // Demo mode: initialize heights
    const initialHeights = Array.from({ length: barCount }, (_, i) => {
      const phase = (i / barCount) * Math.PI * 2;
      return 20 + 60 * Math.abs(Math.sin(phase));
    });
    setHeights(initialHeights);

    if (!animate || isLive) return;

    // Demo animation loop
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
  }, [barCount, animate, isLive, frequencyData]);

  return (
    <div className="w-full h-full flex items-center justify-center gap-[3px]">
      {heights.map((height, i) => {
        const isHovered = hoveredBar === i;
        const barColor = isHovered ? hoverColor : color;

        return (
          <motion.div
            key={i}
            className="rounded-full flex-1 cursor-pointer transition-colors duration-150"
            style={{
              backgroundColor: barColor,
              height: `${Math.max(height, 5)}%`,
              opacity: isHovered ? 1 : 0.85,
              minWidth: '2px',
              maxWidth: '6px',
            }}
            animate={{
              height: `${Math.max(height, 5)}%`,
              backgroundColor: barColor,
            }}
            transition={{
              height: {
                duration: isLive ? 0.05 : 0.15,
                ease: 'easeOut',
              },
              backgroundColor: {
                duration: 0.2,
                ease: 'easeInOut',
              },
            }}
            onMouseEnter={() => setHoveredBar(i)}
            onMouseLeave={() => setHoveredBar(null)}
            onClick={() => onBarClick?.(i)}
          />
        );
      })}
    </div>
  );
}
