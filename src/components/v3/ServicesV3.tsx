import React from 'react';
import { ArrowRight } from 'lucide-react';
import CardCarousel from './CardCarousel';

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
  },
  {
    title: 'Integration & API',
    description: 'Connect your systems. Third-party APIs, data pipelines, custom integrations.',
    priceRange: '$3k - $15k',
    timeline: '1-2 weeks',
    cta: 'Connect Systems'
  },
  {
    title: 'Training & Deployment',
    description: 'Team training, documentation, deployment infrastructure, ongoing support.',
    priceRange: '$5k - $20k',
    timeline: '2-4 weeks',
    cta: 'Get Support'
  },
  {
    title: 'Scale & Optimize',
    description: 'Performance tuning, infrastructure scaling, cost optimization, monitoring.',
    priceRange: '$8k - $30k',
    timeline: '1-3 weeks',
    cta: 'Optimize Now'
  }
];

export default function ServicesV3() {
  const cardElements = services.map((service, index) => (
    <div
      key={index}
      className="group relative rounded-xl p-8 transition-all duration-300 bg-white border border-gray-200 hover:border-gray-300 h-full flex flex-col"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-blue-600" />

      {/* Content */}
      <div className="space-y-6 mt-4 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-2xl font-light leading-tight text-gray-900">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-base font-light leading-relaxed text-gray-600 flex-1">
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
  ));

  return (
    <section id="services" className="py-40 md:py-48 bg-white">
      {/* Section Heading - Contained */}
      <div className="max-w-6xl mx-auto px-6 md:px-0 mb-20 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
          How We Work
        </h2>
      </div>

      {/* Full-width Carousel */}
      <div className="px-6 md:px-12 lg:px-20">
        <CardCarousel
          cards={cardElements}
          cardsPerView={{
            mobile: 1,
            tablet: 2,
            desktop: 3
          }}
        />
      </div>
    </section>
  );
}
