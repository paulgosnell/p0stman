import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import SectionVoiceAgent from './voice-agent/SectionVoiceAgent';
import { getVoiceAgentConfig } from '../config/voiceAgentPrompts';
import AnimatedWaveform from './v3/AnimatedWaveform';

export default function FloatingGuideAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const guideTourConfig = getVoiceAgentConfig('guideTour');

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center transition-colors overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open site guide"
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
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-12 h-12 flex items-center justify-center px-1"
            >
              <AnimatedWaveform
                barCount={12}
                color="#ffffff"
                hoverColor="#FFD700"
                animate={true}
                isLive={false}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Floating Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle size={20} className="text-white" />
                <h3 className="text-lg font-semibold text-white">Site Guide</h3>
              </div>
              <p className="text-blue-100 text-sm">
                Ask me to show you around or answer any questions
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <SectionVoiceAgent
                section="guideTour"
                prompt={guideTourConfig.prompt}
                firstMessage={guideTourConfig.firstMessage}
                placement="inline"
                buttonText="Start Guide"
                color="blue"
                icon="🗺️"
                showTranscript={false}
              />
            </div>

            {/* Waveform Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="h-12 flex items-center justify-center">
                <AnimatedWaveform
                  barCount={30}
                  color="#0066FF"
                  hoverColor="#FF6B35"
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
        {isOpen && (
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
