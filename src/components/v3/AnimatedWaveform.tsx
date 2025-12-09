import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Video, MicOff, VideoOff } from 'lucide-react';

interface AnimatedWaveformProps {
  barCount?: number;
  color?: string;
  hoverColor?: string;
  animate?: boolean;
  frequencyData?: number[];
  isLive?: boolean;
  onBarClick?: (index: number) => void;
  onVoiceStart?: () => void;
  onVoiceStop?: () => void;
  onCameraStart?: () => void;
  onCameraStop?: () => void;
  isVoiceActive?: boolean;
  isCameraActive?: boolean;
  showControls?: boolean;
}

export default function AnimatedWaveform({
  barCount = 60,
  color = '#0066FF',
  hoverColor = '#FF1493',
  animate = true,
  frequencyData,
  isLive = false,
  onBarClick,
  onVoiceStart,
  onVoiceStop,
  onCameraStart,
  onCameraStop,
  isVoiceActive = false,
  isCameraActive = false,
  showControls = true,
}: AnimatedWaveformProps) {
  const [heights, setHeights] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleVoiceClick = () => {
    if (isVoiceActive) {
      onVoiceStop?.();
    } else {
      onVoiceStart?.();
    }
  };

  const handleCameraClick = () => {
    if (isCameraActive) {
      onCameraStop?.();
    } else {
      onCameraStart?.();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Waveform */}
      <div className="w-full h-full flex items-center justify-center gap-[3px]">
        {heights.map((height, i) => {
          const barColor = isHovered ? hoverColor : color;

          return (
            <motion.div
              key={i}
              className="rounded-full flex-1"
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
                },
              }}
            />
          );
        })}
      </div>

      {/* Hover Menu - slides down */}
      {showControls && (
        <AnimatePresence>
          {(isHovered || isVoiceActive || isCameraActive) && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg"
            >
              {/* Voice Button */}
              <button
                onClick={handleVoiceClick}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isVoiceActive
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {isVoiceActive ? (
                  <>
                    <MicOff className="w-4 h-4" />
                    <span className="text-xs font-light">End</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4" />
                    <span className="text-xs font-light">Voice</span>
                  </>
                )}
              </button>

              {/* Camera Button */}
              <button
                onClick={handleCameraClick}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isCameraActive
                    ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {isCameraActive ? (
                  <>
                    <VideoOff className="w-4 h-4" />
                    <span className="text-xs font-light">Off</span>
                  </>
                ) : (
                  <>
                    <Video className="w-4 h-4" />
                    <span className="text-xs font-light">Video</span>
                  </>
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
