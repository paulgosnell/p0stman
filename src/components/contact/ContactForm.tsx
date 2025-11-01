import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Loader2, Twitter, Linkedin, CheckCircle } from 'lucide-react';
import { sendEmail } from '../../lib/emailjs';
import FormInput from '../ui/FormInput';
import FormGroup from '../ui/FormGroup';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formStarted, setFormStarted] = useState(false);

  // Track form interactions
  useEffect(() => {
    const referrer = document.referrer || window.location.href;

    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'contact_page_viewed', {
        source_page: referrer,
        page_path: window.location.pathname
      });
    }
  }, []);

  const handleFormStart = () => {
    if (!formStarted) {
      setFormStarted(true);
      const referrer = document.referrer || window.location.href;

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_started', {
          source_page: referrer,
          form_type: 'contact_page'
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const referrer = document.referrer || window.location.href;

      await sendEmail({
        name: formData.name,
        email: formData.email,
        form_type: 'contact_page',
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        description: formData.description,
        message: formData.description, // EmailJS template may expect 'message' field
        source_page: referrer
      });

      // Track successful submission
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submitted', {
          source_page: referrer,
          form_type: 'contact_page',
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline
        });
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');

      // Track error
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_error', {
          error_message: err instanceof Error ? err.message : 'Unknown error'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-6">Send a Message</h2>

      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm font-light">
          {error}
        </div>
      )}

      {success ? (
        <div className="text-center py-12">
          <Mail className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-light mb-2 text-gray-900 dark:text-gray-100">Message Sent!</h3>
          <p className="text-gray-600 dark:text-gray-300 font-light">
            Thanks for reaching out. I'll get back to you soon.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700 dark:text-gray-300 font-light">
                <p className="font-medium mb-1">Want a faster response?</p>
                <p>DM me directly on <a href="https://twitter.com/paulgosnell" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a> or message me on <a href="https://linkedin.com/in/pgosnell" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
              </div>
            </div>
          </div>

          <FormGroup
            onSubmit={handleSubmit}
            submitText="Schedule Free Consultation"
            submitting={isSubmitting}
          >
            <FormInput
              id="contact_page_name"
              name="name"
              type="text"
              label="Name"
              placeholder="Your full name"
              value={formData.name}
              onChange={(value) => {
                handleFormStart();
                setFormData({ ...formData, name: value });
              }}
              required
            />

            <FormInput
              id="contact_page_email"
              name="email"
              type="email"
              label="Email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(value) => {
                handleFormStart();
                setFormData({ ...formData, email: value });
              }}
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2" htmlFor="contact_page_project_type">
                What are you looking to build?
              </label>
              <select
                id="contact_page_project_type"
                name="projectType"
                value={formData.projectType}
                onChange={(e) => {
                  handleFormStart();
                  setFormData({ ...formData, projectType: e.target.value });
                }}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-light transition-all focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:outline-none"
                required
              >
                <option value="">Select project type</option>
                <option value="AI Voice Agents">AI Voice Agents (from $5K)</option>
                <option value="Custom Website">Custom Website (from $10K)</option>
                <option value="Mobile App">Mobile App (from $20K)</option>
                <option value="AI Platform Development">AI Platform Development (from $5K)</option>
                <option value="Digital Transformation">Digital Transformation (custom)</option>
                <option value="Retainer Service">Retainer Service ($5K/mo)</option>
                <option value="Fractional CPO">Fractional CPO (custom)</option>
                <option value="Consultation">Expert Consultation ($100/hr)</option>
                <option value="Not Sure">Not Sure - Need Guidance</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2" htmlFor="contact_page_budget">
                What's your budget?
              </label>
              <select
                id="contact_page_budget"
                name="budget"
                value={formData.budget}
                onChange={(e) => {
                  handleFormStart();
                  setFormData({ ...formData, budget: e.target.value });
                }}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-light transition-all focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:outline-none"
                required
              >
                <option value="">Select budget range</option>
                <option value="Under $5K">Under $5K</option>
                <option value="$5K - $10K">$5K - $10K</option>
                <option value="$10K - $20K">$10K - $20K</option>
                <option value="$20K - $50K">$20K - $50K</option>
                <option value="$50K - $100K">$50K - $100K</option>
                <option value="$100K+">$100K+</option>
                <option value="Not Sure">Not Sure Yet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2" htmlFor="contact_page_timeline">
                When do you need this?
              </label>
              <select
                id="contact_page_timeline"
                name="timeline"
                value={formData.timeline}
                onChange={(e) => {
                  handleFormStart();
                  setFormData({ ...formData, timeline: e.target.value });
                }}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-light transition-all focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:outline-none"
                required
              >
                <option value="">Select timeline</option>
                <option value="ASAP (within 2 weeks)">ASAP (within 2 weeks)</option>
                <option value="This month">This month</option>
                <option value="Next 2-3 months">Next 2-3 months</option>
                <option value="Just exploring">Just exploring</option>
              </select>
            </div>

            <FormInput
              id="contact_page_description"
              name="description"
              type="textarea"
              label="Message"
              placeholder="Tell me about your project..."
              value={formData.description}
              onChange={(value) => {
                handleFormStart();
                setFormData({ ...formData, description: value });
              }}
              rows={5}
              required
            />

            {/* Risk Reversal */}
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700 dark:text-gray-300 font-light">
                  <p className="font-medium mb-1">Free consultation. No obligation.</p>
                  <p>We'll assess your project and give you a clear quote and timeline. If it's not a fit, we'll tell you honestly.</p>
                </div>
              </div>
            </div>
          </FormGroup>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-600 dark:text-gray-300 font-light mb-4">Also connect with me on:</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://twitter.com/paulgosnell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-light"
              >
                <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                <span>Twitter</span>
              </a>
              <a
                href="https://linkedin.com/in/pgosnell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-light"
              >
                <Linkedin className="w-5 h-5 text-[#0077B5]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}