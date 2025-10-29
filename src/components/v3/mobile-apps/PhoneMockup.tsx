import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { MobileApp } from './types';

interface PhoneMockupProps {
  app: MobileApp;
}

export default function PhoneMockup({ app }: PhoneMockupProps) {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="relative w-full">
      {/* iPhone Mockup Container */}
      <div className="relative mx-auto" style={{ maxWidth: '390px' }}>
        {/* iPhone Frame/Bezel */}
        <div
          className="relative bg-gray-900 dark:bg-gray-800 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 dark:border-gray-700"
          style={{
            aspectRatio: '390 / 844', // iPhone 14/15 proportions
          }}
        >
          {/* Screen Area */}
          <div className="relative h-full bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden">
            {/* Iframe */}
            <iframe
              src={app.url}
              className="absolute inset-0 w-full h-full border-0"
              title={app.name}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              loading="lazy"
            />

            {/* Info Panel Overlay (Bottom 1/3) */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-auto"
                >
                  {/* Frosted Glass Effect */}
                  <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6">
                    {/* App Info */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-light text-gray-900 dark:text-gray-100">
                        {app.name}
                      </h3>
                      <p className="text-sm font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                        {app.description}
                      </p>
                      {app.caseStudyUrl && (
                        <a
                          href={app.caseStudyUrl}
                          className="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
                        >
                          <span>View Case Study</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Minimize Button */}
                    <button
                      onClick={() => setIsMinimized(true)}
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-600 hover:bg-pink-600 text-white text-sm font-light transition-all duration-300"
                    >
                      <span>Minimize</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expand Button (when minimized) */}
            <AnimatePresence>
              {isMinimized && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setIsMinimized(false)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 text-sm font-light text-gray-900 dark:text-gray-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-lg z-10"
                >
                  View Info
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Notch (for realism) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-gray-900 dark:bg-gray-800 rounded-b-3xl" />
        </div>
      </div>
    </div>
  );
}
