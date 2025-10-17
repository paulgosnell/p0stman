import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import FloatingGuideAgent from '../components/FloatingGuideAgent';
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

export default function Services() {
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
          <button
            onClick={() => {
              const element = document.getElementById('cta');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-light text-base hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 group/btn"
          >
            {service.cta}
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>Services | P0STMAN | AI-Powered Product Studio</title>
        <meta name="description" content="From AI agents to MVPs, fractional leadership to integrations. Our complete service portfolio." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <HeaderV3Global />

        {/* Hero Section */}
        <section className="py-40 md:py-48 px-6 md:px-0 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6 mb-16">
              <h1 className="text-5xl md:text-6xl font-thin text-gray-900 leading-tight">
                How We Work
              </h1>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed max-w-3xl">
                Six service tiers designed to match every project stage and budget. From pilots to full-scale production, we deliver speed without sacrificing quality.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 md:py-32 px-6 md:px-0 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cardElements}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-40 md:py-48 px-6 md:px-0 bg-white">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                Ready to Ship Fast?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                Tell us what you're building. We'll tell you the timeline and price.
              </p>
            </div>

            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-6 py-3.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 font-light focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-light text-base hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Get Started
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>

            <div className="pt-4">
              <a
                href="/contact"
                className="text-blue-600 hover:text-pink-600 font-light text-base transition-colors inline-block"
              >
                Or schedule a call →
              </a>
            </div>
          </div>
        </section>

        <FooterV3 />
        <FloatingGuideAgent />
      </div>
    </>
  );
}
