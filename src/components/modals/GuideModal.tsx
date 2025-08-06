import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, CheckCircle, Loader2, Twitter, Mail, Bot, Zap } from 'lucide-react';
import { redirectToPayment } from '../../lib/stripe';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuideModal({ isOpen, onClose }: GuideModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handlePayment = async () => {
    setIsProcessing(true);
    setError(null);
    try {
      redirectToPayment(['guide']);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment processing failed');
      setIsProcessing(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 my-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Bolt Builder's Guide</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="w-5 h-5 text-green-600" />
                  <h3 className="font-medium text-gray-900">Build Without Barriers</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn to build production-ready applications in weeks, not months. No coding experience required.
                </p>
                <div className="flex items-center gap-2 text-green-600">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">Get $50 off live training with guide purchase</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">What's Included</h3>
                  <div className="space-y-3">
                    {[
                      "200+ pages of practical guidance",
                      "Step-by-step instructions",
                      "Real-world examples",
                      "Access to Bolt Builder Network"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">What You'll Learn</h3>
                  <div className="space-y-3">
                    {[
                      "AI-powered development workflow",
                      "Building UI components",
                      "Database integration",
                      "Authentication & security"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-600">Guide Price</div>
                  <div className="text-2xl font-bold text-gray-900">$50</div>
                </div>
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    'Get the Guide'
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <a
                    href="https://twitter.com/paulgosnell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:hello@p0stman.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
                  alt="Secure payments by Stripe"
                  className="h-6"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}