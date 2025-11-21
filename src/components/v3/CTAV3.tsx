import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCTAButtonClick } from '../../lib/analytics';

export default function CTAV3() {
  return (
    <section id="cta" className="py-40 md:py-48 px-6 md:px-0 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-gray-100 leading-tight">
            Ready to Ship Fast?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
            Tell us what you're building. We'll tell you the timeline and price.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            to="/contact"
            onClick={() => trackCTAButtonClick('Get Started', 'ctav3_section', window.location.pathname)}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-lg font-light text-base hover:bg-pink-600 transition-colors"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
