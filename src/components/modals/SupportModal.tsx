import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Headphones, Clock, DollarSign, CheckCircle, Loader2, Twitter, Mail, Bot, Zap } from 'lucide-react';
import { redirectToPayment } from '../../lib/stripe';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handlePayment = async () => {
    setIsProcessing(true);
    setError(null);
    try {
      redirectToPayment(['support']);
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
              <Headphones className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Expert Support Session</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-indigo-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-medium text-gray-900">One-on-One Support</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Get personalized help with your Bolt Builder projects. Expert guidance on integrations, deployment, debugging, and more.
                </p>
                <div className="flex items-center gap-2 text-indigo-600">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">Screen sharing and live assistance included</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">Session Includes</h3>
                  <div className="space-y-3">
                    {[
                      "45-minute video call",
                      "Screen sharing",
                      "Code review",
                      "Best practices",
                      "Direct problem solving",
                      "Implementation guidance"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">What You Can Ask</h3>
                  <div className="space-y-3">
                    {[
                      "Technical questions",
                      "Integration help",
                      "Debugging assistance",
                      "Architecture advice",
                      "Performance optimization",
                      "Best practices guidance"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-600">Session Price</div>
                  <div className="text-2xl font-bold text-gray-900">$100</div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>45-minute session</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>Pay once, book anytime</span>
                  </div>
                </div>
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    'Book Your Session'
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