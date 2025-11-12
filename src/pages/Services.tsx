import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import FloatingGuideAgent from '../components/FloatingGuideAgent';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  title: string;
  tagline: string;
  description: string;
  whatYouGet: string[];
  timeline: string;
  examples: string;
  path: string;
}

const services: Service[] = [
  {
    title: 'AI Voice Agents',
    tagline: 'Autonomous phone systems that actually work',
    description: 'Voice AI agents powered by ElevenLabs and LiveKit. Handle calls 24/7, qualify leads, book appointments, answer questions. Production-ready systems, not demos.',
    whatYouGet: [
      'Custom voice personality and script',
      'ElevenLabs or LiveKit integration',
      'CRM/calendar integration',
      'Real-time transcription & analytics',
      'Call routing & escalation logic',
      '30 days of refinement & tuning'
    ],
    timeline: '6-day pilot, 2-3 weeks production',
    examples: 'Real estate lead qualification, medical appointment booking, customer support screening',
    path: '/contact'
  },
  {
    title: 'Custom Websites & SaaS',
    tagline: 'Fast, modern, scalable web platforms',
    description: 'Full-stack web applications built with Next.js, React, and Supabase. From landing pages to multi-tenant SaaS platforms. AI-assisted development, human-validated architecture.',
    whatYouGet: [
      'Modern tech stack (Next.js, Tailwind, Supabase)',
      'Responsive design (mobile-first)',
      'SEO optimization & analytics',
      'Authentication & user management',
      'Payment integration (Stripe)',
      'Hosting & deployment setup'
    ],
    timeline: '6-day MVP, 3-week production',
    examples: 'SaaS dashboards, booking platforms, e-commerce systems, portfolio sites',
    path: '/contact'
  },
  {
    title: 'Mobile Apps',
    tagline: 'iOS & Android apps, one codebase',
    description: 'Cross-platform mobile apps using React Native. Native performance, shared codebase, faster shipping. Perfect for startups validating mobile-first ideas.',
    whatYouGet: [
      'iOS & Android from one codebase',
      'Native UI components',
      'Push notifications & deep linking',
      'Offline-first capabilities',
      'App store submission support',
      'Backend API integration'
    ],
    timeline: '3-4 weeks MVP',
    examples: 'Wellness tracking, booking apps, social platforms, productivity tools',
    path: '/mobile-app'
  },
  {
    title: 'AI Platform Development',
    tagline: 'Multi-model AI orchestration',
    description: 'Custom AI platforms leveraging Claude, GPT-4, Gemini, and specialized models. Chat agents, code generation, workflow automation. Built for scale and commercial use.',
    whatYouGet: [
      'Multi-model AI orchestration',
      'Custom prompt engineering',
      'RAG (retrieval-augmented generation)',
      'Function calling & tool use',
      'Cost optimization & caching',
      'Production monitoring & observability'
    ],
    timeline: '1-2 weeks pilot, 2-4 weeks production',
    examples: 'Code generation platforms, document processing, customer support bots, content creation tools',
    path: '/ai-platform-development'
  },
  {
    title: 'Digital Transformation',
    tagline: 'Enterprise-scale modernization',
    description: 'Legacy system modernization, platform migrations, team scaling. We\'ve grown teams from 1 to 40+. Strategic roadmaps backed by execution.',
    whatYouGet: [
      'Technology assessment & audit',
      'Modernization roadmap',
      'Team structure & hiring support',
      'Architecture & infrastructure design',
      'Migration execution',
      'Ongoing advisory & oversight'
    ],
    timeline: '3-12 months',
    examples: 'FAB Bank (1→40 team scale), platform re-architecture, cloud migration, API modernization',
    path: '/digital-transformation'
  },
  {
    title: 'Fractional Leadership',
    tagline: 'CPO/CTO on-demand',
    description: '20 years of product leadership without the $300K/year salary. Strategic guidance, technical architecture, team management, roadmap planning.',
    whatYouGet: [
      'Weekly strategy sessions',
      'Product roadmap development',
      'Technical architecture review',
      'Team leadership & mentoring',
      'Vendor & agency management',
      'Board-level reporting'
    ],
    timeline: 'Ongoing retainer',
    examples: 'Pre-seed startups needing product strategy, agencies scaling delivery teams, enterprises launching new products',
    path: '/fractional-cpo'
  }
];

const differentiators = [
  {
    label: 'Traditional Agency',
    points: [
      '6-8 week discovery phases',
      '40-person meetings',
      'Months to first deliverable',
      '$200K+ budgets',
      'Handoffs and silos'
    ],
    isNegative: true
  },
  {
    label: 'P0STMAN',
    points: [
      '1-2 week discovery (AI-assisted research)',
      'Direct access to decision-makers',
      'Working prototypes in days',
      '$5K pilots to $50K+ systems',
      'One team, start to finish'
    ],
    isNegative: false
  }
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | P0STMAN | AI-Native Product Studio</title>
        <meta name="description" content="AI voice agents, custom web platforms, mobile apps, AI development, digital transformation, and fractional leadership. Agency-quality work at startup speed." />
        <meta name="keywords" content="AI development services, voice AI agents, custom web development, mobile app development, AI platform development, digital transformation, fractional CTO, fractional CPO" />
        <meta property="og:title" content="Services | P0STMAN | AI-Native Product Studio" />
        <meta property="og:description" content="AI voice agents, custom web platforms, mobile apps, and AI development services at startup speed." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://p0stman.com/services" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <HeaderV3Global darkMode={false} />

        {/* Hero Section */}
        <section className="py-32 md:py-48 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Eyebrow */}
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  What We Build
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-gray-900 leading-[1.05] tracking-tight mb-8">
                Agency Quality.
                <br />
                Startup Speed.
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mb-12">
                From AI voice agents to full-stack platforms, we deliver production-ready systems in weeks, not months. No 40-person teams. No endless meetings. Just experienced builders leveraging AI to ship fast.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light text-lg"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors font-light text-lg"
                >
                  Schedule a Call
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Core Services
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight max-w-4xl">
                What We Do
              </h2>
            </motion.div>

            {/* Services List */}
            <div className="space-y-16 md:space-y-24">
              {services.map((service, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-12 lg:p-16 border-t border-gray-200"
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Left Column - Title & Overview */}
                    <div className="lg:col-span-5 space-y-6">
                      <div>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-xl md:text-2xl text-gray-500 font-light">
                          {service.tagline}
                        </p>
                      </div>

                      <p className="text-gray-600 font-light leading-relaxed text-lg">
                        {service.description}
                      </p>

                      <div className="pt-4">
                        <div className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-2">
                          Timeline
                        </div>
                        <p className="text-gray-900 font-light">
                          {service.timeline}
                        </p>
                      </div>

                      <Link
                        to={service.path}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light group"
                      >
                        Get Started
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                      </Link>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-7 space-y-8">
                      {/* What You Get */}
                      <div>
                        <h4 className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-6">
                          What You Get
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {service.whatYouGet.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                              <span className="text-gray-600 font-light leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Example Use Cases */}
                      <div className="pt-8 border-t border-gray-200">
                        <h4 className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-4">
                          Example Use Cases
                        </h4>
                        <p className="text-gray-600 font-light leading-relaxed">
                          {service.examples}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* How We're Different */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  The Difference
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight max-w-4xl mb-8">
                How We're Different
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
                Traditional agencies vs. P0STMAN's AI-native approach
              </p>
            </motion.div>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl">
              {differentiators.map((diff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`p-8 lg:p-12 ${
                    diff.isNegative
                      ? 'bg-gray-50 border border-gray-200 text-gray-900'
                      : 'bg-black text-white'
                  }`}
                >
                  <h3 className={`text-3xl md:text-4xl font-light mb-8 ${
                    diff.isNegative ? 'text-gray-900' : 'text-white !text-white'
                  }`}>
                    {diff.label}
                  </h3>

                  <ul className="space-y-4">
                    {diff.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4">
                        {diff.isNegative ? (
                          <span className="text-gray-400 text-lg mt-1">✗</span>
                        ) : (
                          <Check className="w-5 h-5 text-white !text-white flex-shrink-0 mt-1" strokeWidth={1.5} />
                        )}
                        <span className={`font-light leading-relaxed ${
                          diff.isNegative ? 'text-gray-600' : 'text-white/90 !text-white/90'
                        }`}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mt-16 lg:mt-24 max-w-4xl"
            >
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                <strong className="text-gray-900 font-normal">The unlock:</strong> AI handles the repetitive work—research, documentation, boilerplate code, testing frameworks. Our team focuses on architecture, validation, and commercial viability. 20 years of pattern recognition means we avoid rookie mistakes and challenge briefs to make them better before we build.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
                Ready to Build?
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
                Tell us what you're building. We'll tell you the timeline and price. Most projects start with a quick consultation call—free, no pressure, just honest guidance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light text-lg"
                >
                  Schedule a Call
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors font-light text-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <FooterV3 />
        <FloatingGuideAgent />
      </div>
    </>
  );
}
