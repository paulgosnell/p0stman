import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import GeminiVoiceAgent from './voice-agent/GeminiVoiceAgent';
import { getVoiceAgentConfig } from '../config/voiceAgentPrompts';
import AnimatedWaveform from './v3/AnimatedWaveform';

export default function FloatingGuideAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const guideTourConfig = getVoiceAgentConfig('guideTour');

  // Check if hero section is in view (on homepage only)
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
  });

  // Hide floating agent when hero is visible on homepage
  const isHomepage = location.pathname === '/';
  const shouldHide = isHomepage && heroInView;

  return (
    <>
      {/* Hero detection marker (on homepage only) */}
      {isHomepage && <div ref={heroRef} className="invisible absolute top-0" />}

      {/* Floating Button - Hide when hero is visible */}
      <AnimatePresence>
        {!shouldHide && (
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 rounded-lg shadow-lg flex items-center justify-center transition-colors overflow-hidden border border-white/10 dark:border-black/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open site guide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} className="text-white dark:text-black" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 flex items-center justify-center"
            >
              <AnimatedWaveform
                barCount={10}
                color="#ffffff"
                hoverColor="#3B82F6"
                animate={true}
                isLive={false}
              />
            </motion.div>
          )}
        </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Panel - Hide when hero is visible */}
      <AnimatePresence>
        {isOpen && !shouldHide && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-gray-950 border border-white/10 overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-white/10">
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500 font-light block mb-2">
                AI Assistant
              </span>
              <h3 className="text-lg font-light text-white">How can I help?</h3>
            </div>

            {/* Content */}
            <div className="p-6">
              <GeminiVoiceAgent
                section="guideTour"
                prompt={guideTourConfig.prompt}
                firstMessage={guideTourConfig.firstMessage}
                placement="inline"
                buttonText="Start Conversation"
                color="white"
                icon=""
                showTranscript={false}
              />
            </div>

            {/* Footer with waveform */}
            <div className="px-6 py-4 border-t border-white/10 bg-white/5">
              <div className="h-8 flex items-center justify-center">
                <AnimatedWaveform
                  barCount={24}
                  color="#ffffff"
                  hoverColor="#3B82F6"
                  animate={true}
                  isLive={false}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay when panel is open */}
      <AnimatePresence>
        {isOpen && !shouldHide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}
