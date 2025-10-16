import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceTier {
  title: string;
  description: string;
  priceRange: string;
  timeline: string;
  cta: string;
}

const services: ServiceTier[] = [
  {
    title: 'AI Agent Development',
    description: 'Voice agents, chat agents, code agents. From pilot to production.',
    priceRange: '$5k - $50k+',
    timeline: 'Pilots in days, production in weeks',
    cta: 'Start a Pilot'
  },
  {
    title: 'MVP to Market',
    description: 'Full-stack web/mobile products. Rapid prototyping, market validation, deployment.',
    priceRange: '$10k - $75k',
    timeline: '6 days to 3 weeks',
    cta: 'Launch Your MVP'
  },
  {
    title: 'Fractional Leadership',
    description: 'CPO/CTO/CIO services. Digital transformation, agency white-label, creative prototypes.',
    priceRange: 'Custom pricing',
    timeline: 'Ongoing engagement',
    cta: 'Discuss Strategy'
  }
];

export default function ServicesV3() {
  return (
    <section id="services" className="py-40 md:py-48 px-6 md:px-0 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            How We Work
          </h2>
        </div>

        {/* Service Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-xl p-8 transition-all duration-300 bg-white border border-gray-200 hover:border-gray-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-blue-600" />

              {/* Content */}
              <div className="space-y-6 mt-4">
                {/* Title */}
                <h3 className="text-2xl font-light leading-tight text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base font-light leading-relaxed text-gray-600">
                  {service.description}
                </p>

                {/* Price Range */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg font-light text-blue-600">
                    {service.priceRange}
                  </p>
                </div>

                {/* Timeline */}
                <p className="text-sm font-light text-gray-600">
                  {service.timeline}
                </p>

                {/* CTA Button */}
                <div className="pt-6">
                  <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-light text-base hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group/btn">
                    {service.cta}
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
