import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { sendEmail } from '../../lib/emailjs';
import { getVoiceAgentConfig } from '../../config/voiceAgentPrompts';
import SectionVoiceAgent from '../voice-agent/SectionVoiceAgent';

export default function CTAV3() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get CTA-specific prompt from config
  const ctaConfig = getVoiceAgentConfig('cta');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await sendEmail({
        name: email, // Using email as the name for this simple form
        email: email,
        form_type: 'cta_homepage'
      });

      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send. Please try again or email hello@p0stman.com');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section id="cta" className="py-40 md:py-48 px-6 md:px-0 bg-white">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
            Ready to Ship Fast?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Tell us what you're building. We'll tell you the timeline and price.
          </p>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm font-light">
              {error}
            </div>
          )}

          {submitted ? (
            <p className="text-base text-green-600 font-light">
              Thanks! Check your email for next steps.
            </p>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-3.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 font-light focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-light text-base hover:bg-blue-700 disabled:bg-gray-400 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isLoading ? 'Sending...' : 'Get Started'}
                {!isLoading && <ArrowRight size={18} />}
              </button>
            </div>
          )}
        </form>

        {/* Voice Agent Option */}
        <div className="space-y-4">
          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-400 font-light">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Voice Agent - SectionVoiceAgent component */}
          <SectionVoiceAgent
            section="cta"
            prompt={ctaConfig.prompt}
            firstMessage={ctaConfig.firstMessage}
            placement="inline"
            buttonText="Prefer to talk? Try our AI assistant"
            color="blue"
            icon="🎤"
            showTranscript={false}
          />
        </div>

        {/* Alternative CTA */}
        <div className="pt-4">
          <a
            href="/contact"
            className="text-blue-600 hover:text-blue-700 font-light text-base transition-colors inline-block"
          >
            Or schedule a call →
          </a>
        </div>
      </div>
    </section>
  );
}
