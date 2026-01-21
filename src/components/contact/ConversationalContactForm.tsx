import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { sendEmail } from '../../lib/emailjs';
import { sendContactEmail, supabase } from '../../lib/supabase';
import { useTracking, useTrackForm } from '../../hooks/useTracking';

export default function ConversationalContactForm() {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get('role');
  const fromCareers = !!roleParam;

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    roleParam ? `I'm interested in the ${roleParam} role.` : ''
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Tracking hooks
  const { getSourceData, markConversion } = useTracking();
  const { trackFormStart, trackFormSubmit } = useTrackForm('contact_form');

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    trackFormStart();
    setIsLoading(true);
    setError(null);

    try {
      const sourceData = await getSourceData();

      // Save to Supabase (primary storage - must succeed)
      const { error: supabaseError } = await supabase.from('contacts').insert({
        name,
        email,
        project_type: fromCareers ? 'Careers' : 'General Inquiry',
        description: message.trim(),
        session_id: sourceData?.session_id,
        referrer: sourceData?.referrer,
        referrer_domain: sourceData?.referrer_domain,
        utm_source: sourceData?.utm_source,
        utm_medium: sourceData?.utm_medium,
        utm_campaign: sourceData?.utm_campaign,
        landing_page: sourceData?.landing_page,
        device_type: sourceData?.device_type,
        page_views_before_contact: sourceData?.page_views_before_contact
      });

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        throw new Error('Failed to save contact');
      }

      // Send email notifications (non-blocking - don't fail the form if these error)
      sendEmail({
        name,
        email,
        form_type: 'contact_form',
        project_type: fromCareers ? 'Careers' : 'General Inquiry',
        message: message.trim(),
        description: message.trim(),
        source_page: sourceData?.referrer || document.referrer || ''
      }).catch(err => console.error('EmailJS error (non-blocking):', err));

      sendContactEmail({
        name,
        email,
        projectType: fromCareers ? 'Careers Application' : 'General Inquiry',
        message: message.trim(),
        form_type: 'contact'
      }).catch(err => console.error('Contact email error (non-blocking):', err));

      markConversion('contact_form');
      trackFormSubmit(true, { type: fromCareers ? 'careers' : 'general' });

      // Show success state
      setStep('success');

    } catch (err) {
      console.error('Form submission error:', err);
      setError('Something went wrong. Please try again or email us directly at hello@p0stman.com');
      trackFormSubmit(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 'form' ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-8"
          >
            <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-2">
              Let's Talk
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
              Tell us about your project. Paul will personally review your message and get back to you within 24 hours.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-light transition-all focus:border-gray-900 dark:focus:border-gray-400 focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-light transition-all focus:border-gray-900 dark:focus:border-gray-400 focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  What can we help you with?
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={fromCareers
                    ? "Tell us about yourself and what you've been building..."
                    : "I'm looking to build... / I need help with... / I have a question about..."
                  }
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-light transition-all focus:border-gray-900 dark:focus:border-gray-400 focus:ring-0 focus:outline-none resize-none"
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={!name.trim() || !email.trim() || !message.trim() || isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-light text-lg rounded-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" strokeWidth={1.5} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" strokeWidth={1.5} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" strokeWidth={1.5} />
            </div>

            <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-2">
              Message Sent!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
              Thanks for reaching out, {name.split(' ')[0]}! Paul will personally review your message and get back to you within 24 hours.
            </p>

            <div className="space-y-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                In the meantime, you might want to:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/case-studies"
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-light"
                >
                  View Case Studies
                </a>
                <a
                  href="/paul-gosnell"
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-light"
                >
                  Learn About Paul
                </a>
              </div>
            </div>

            <button
              onClick={() => {
                setStep('form');
                setName('');
                setEmail('');
                setMessage('');
                setError(null);
              }}
              className="mt-6 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 underline"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
