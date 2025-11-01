import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import FloatingGuideAgent from '../components/FloatingGuideAgent';
import { ArrowRight, Check, Mic, Code, Smartphone, Zap, Users, TrendingUp } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  whatYouGet: string[];
  pricing: string;
  timeline: string;
  examples: string;
  cta: string;
}

const services: Service[] = [
  {
    icon: <Mic className="w-8 h-8" />,
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
    pricing: 'From $5K',
    timeline: '6-day pilot, 2-3 weeks production',
    examples: 'Real estate lead qualification, medical appointment booking, customer support screening',
    cta: 'Build Voice Agent'
  },
  {
    icon: <Code className="w-8 h-8" />,
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
    pricing: 'From $10K',
    timeline: '6-day MVP, 3-week production',
    examples: 'SaaS dashboards, booking platforms, e-commerce systems, portfolio sites',
    cta: 'Build Website'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
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
    pricing: 'From $20K',
    timeline: '3-4 weeks MVP',
    examples: 'Wellness tracking, booking apps, social platforms, productivity tools',
    cta: 'Build Mobile App'
  },
  {
    icon: <Zap className="w-8 h-8" />,
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
    pricing: 'From $5K',
    timeline: '1-2 weeks pilot, 2-4 weeks production',
    examples: 'Code generation platforms, document processing, customer support bots, content creation tools',
    cta: 'Build AI Platform'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
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
    pricing: 'Custom (typically $50K+)',
    timeline: '3-12 months',
    examples: 'FAB Bank (1→40 team scale), platform re-architecture, cloud migration, API modernization',
    cta: 'Discuss Transformation'
  },
  {
    icon: <Users className="w-8 h-8" />,
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
    pricing: 'From $5K/month',
    timeline: 'Ongoing retainer',
    examples: 'Pre-seed startups needing product strategy, agencies scaling delivery teams, enterprises launching new products',
    cta: 'Get Leadership'
  }
];

export default function Services() {

  return (
    <>
      <Helmet>
        <title>Services | P0STMAN | AI-Native Product Studio</title>
        <meta name="description" content="AI voice agents, custom web platforms, mobile apps, AI development, digital transformation, and fractional leadership. Agency-quality work at startup speed." />
      </Helmet>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <HeaderV3Global />

        {/* Hero Section */}
        <section className="py-32 px-6 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">What We Build</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-thin text-gray-900 dark:text-gray-100 leading-tight max-w-4xl">
                Agency-Quality Work. <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Startup Speed & Scale.
                </span>
              </h1>

              <p className="text-xl font-light text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                From AI voice agents to full-stack platforms, we deliver production-ready systems in weeks, not months. No 40-person teams. No endless meetings. Just experienced builders leveraging AI to ship fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors font-medium"
                >
                  Schedule a Call
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all"
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Column - Icon & Overview */}
                    <div className="md:col-span-1 space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                        {service.icon}
                      </div>

                      <div>
                        <h3 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-light">
                          {service.tagline}
                        </p>
                      </div>

                      <div className="pt-4 space-y-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-light text-gray-900 dark:text-gray-100">
                            {service.pricing}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {service.timeline}
                        </p>
                      </div>

                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        {service.cta}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Middle Column - Description & What You Get */}
                    <div className="md:col-span-2 space-y-6">
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
                      </p>

                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wide">
                          What You Get
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.whatYouGet.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 uppercase tracking-wide">
                          Example Use Cases
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {service.examples}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We're Different */}
        <section className="py-24 px-6 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-thin text-gray-900 dark:text-gray-100 mb-6">
                How We're Different
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
                Traditional agencies vs. P0STMAN's AI-native approach
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Traditional Agency */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-6">
                  Traditional Agency
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>6-8 week discovery phases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>40-person meetings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Months to first deliverable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>$200K+ budgets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Handoffs and silos</span>
                  </li>
                </ul>
              </motion.div>

              {/* P0STMAN */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800"
              >
                <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-6">
                  P0STMAN
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span>1-2 week discovery (AI-assisted research)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span>Direct access to decision-makers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span>Working prototypes in days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span>$5K pilots to $50K+ systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span>One team, start to finish</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
                <strong className="text-gray-900 dark:text-gray-100">The unlock:</strong> AI handles the repetitive work—research, documentation, boilerplate code, testing frameworks. Our team focuses on architecture, validation, and commercial viability. 20 years of pattern recognition means we avoid rookie mistakes and challenge briefs to make them better before we build.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-thin mb-6">
                Ready to Build?
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                Tell us what you\'re building. We\'ll tell you the timeline and price. Most projects start with a quick consultation call—free, no pressure, just honest guidance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all font-medium text-lg"
                >
                  Schedule a Call
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all font-medium text-lg"
                >
                  View Case Studies
                </a>
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
