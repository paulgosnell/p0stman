import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Clock, DollarSign, CheckCircle, Loader2, Twitter, Mail, Bot, Zap } from 'lucide-react';
import { sendEmail } from '../../lib/emailjs';

interface MobileAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileAppModal({ isOpen, onClose }: MobileAppModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectName: '',
    timeframe: '',
    industry: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        form_type: 'mobile_app_inquiry',
        project_name: formData.projectName,
        timeframe: formData.timeframe,
        industry: formData.industry
      });
      
      setSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        if (!success) return;
        setFormData({
          name: '',
          email: '',
          projectName: '',
          timeframe: '',
          industry: ''
        });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit inquiry');
      setIsSubmitting(false);
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
              <Smartphone className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Mobile App Package</h2>
            </div>

            {success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Inquiry Submitted!</h3>
                <p className="text-gray-600">
                  Thanks for your interest. We'll review your project details and get back to you shortly.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Bot className="w-5 h-5 text-blue-600" />
                    <h3 className="font-medium text-gray-900">AI-Powered Development</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Get your mobile app built in 4 weeks using cutting-edge AI technology. Native apps for both iOS and Android platforms.
                  </p>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">App Store submission guidance included</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="projectName">
                      Project Name
                    </label>
                    <input
                      type="text"
                      id="projectName"
                      name="projectName"
                      value={formData.projectName}
                      onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="timeframe">
                      Desired Timeframe
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={(e) => setFormData({...formData, timeframe: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select timeframe</option>
                      <option value="ASAP">As soon as possible</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Not sure">Not sure yet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="industry">
                      Industry (Optional)
                    </label>
                    <input
                      type="text"
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-600">Investment</div>
                      <div className="text-2xl font-bold text-gray-900">$20,000</div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>4 weeks delivery</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        'Submit Your Project'
                      )}
                    </button>
                  </div>
                </form>

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
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}