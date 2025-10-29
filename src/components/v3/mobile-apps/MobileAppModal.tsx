import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { MobileApp } from './types';
import { useEffect } from 'react';

interface MobileAppModalProps {
  app: MobileApp | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileAppModal({ app, isOpen, onClose }: MobileAppModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!app) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-50 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 truncate">
                  {app.name}
                </h3>
                <p className="text-xs font-light text-gray-600 dark:text-gray-400 mt-0.5 line-clamp-1">
                  {app.description}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Iframe Content */}
            <div className="flex-1 relative bg-gray-50 dark:bg-gray-800">
              <iframe
                src={app.url}
                className="absolute inset-0 w-full h-full border-0"
                title={app.name}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>

            {/* Footer (optional - case study link) */}
            {app.caseStudyUrl && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                <a
                  href={app.caseStudyUrl}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
                >
                  <span>View Full Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
