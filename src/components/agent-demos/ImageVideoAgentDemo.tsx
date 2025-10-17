import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const examples = [
  {
    type: 'Image Analysis',
    input: 'Product photo',
    output: 'Detected: Nike shoes, white background, optimal lighting',
  },
  {
    type: 'Video Processing',
    input: 'Customer testimonial',
    output: 'Transcribed, timestamped, highlights extracted',
  },
  {
    type: 'Scene Detection',
    input: 'Store footage',
    output: 'Identified 12 customers, 3 staff interactions',
  },
];

export default function ImageVideoAgentDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    // Switch examples
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % examples.length);
      setProgress(0);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const current = examples[currentIndex];

  return (
    <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg space-y-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-gray-700 text-xs font-medium">{current.type}</span>
          </div>

          {/* Processing visualization */}
          <div className="grid grid-cols-3 gap-2 items-center">
            {/* Input */}
            <div className="col-span-1 p-2 bg-white/5 rounded border border-gray-200">
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[10px] text-white/60 mt-1 text-center">{current.input}</p>
            </div>

            {/* Arrow */}
            <div className="col-span-1 flex justify-center">
              <motion.svg
                className="w-4 h-4 text-white/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </div>

            {/* Output */}
            <div className="col-span-1 p-2 bg-white/5 rounded border border-purple-500/30">
              <div className="aspect-square bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[10px] text-white/60 mt-1 text-center">Analyzed</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-1">
            <div className="h-1 bg-gray-50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[10px] text-gray-500">{current.output}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
