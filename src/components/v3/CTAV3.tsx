import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTAV3() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Connect to your email/CRM service
      // For now, just show success state
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error:', error);
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

          {submitted && (
            <p className="text-sm text-green-600 font-light">
              Thanks! We'll be in touch soon.
            </p>
          )}
        </form>

        {/* Alternative CTA */}
        <div className="pt-4">
          <button className="text-blue-600 hover:text-blue-700 font-light text-base transition-colors">
            Or schedule a call →
          </button>
        </div>
      </div>
    </section>
  );
}
