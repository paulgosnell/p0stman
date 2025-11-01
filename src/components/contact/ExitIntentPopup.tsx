import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Zap } from 'lucide-react';

interface ExitIntentPopupProps {
  onClose: () => void;
  onSchedule: () => void;
}

export default function ExitIntentPopup({ onClose, onSchedule }: ExitIntentPopupProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let hasShown = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect mouse leaving viewport from top
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        hasShown = true;
      }
    };

    // Wait 3 seconds before activating exit intent
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleSchedule = () => {
    setShow(false);
    onSchedule();
    // Scroll to contact form
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

          <div className="relative p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100 text-center mb-3">
              Wait! Before You Go...
            </h3>

            <p className="text-gray-600 dark:text-gray-300 font-light text-center mb-6">
              Get a free AI feasibility assessment for your project. No obligation, just expert guidance.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700 dark:text-gray-300 font-light">
                  <p className="font-medium mb-1">What you'll get:</p>
                  <ul className="space-y-1">
                    <li>• 15-minute consultation call</li>
                    <li>• Custom solution recommendation</li>
                    <li>• Clear pricing and timeline</li>
                    <li>• No pressure, just insights</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSchedule}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-light hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Schedule Free Call
              </button>
              <button
                onClick={handleClose}
                className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-light hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Maybe Later
              </button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4 font-light">
              Trusted by 2,500+ projects. From $5K. 6-day MVP delivery.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
