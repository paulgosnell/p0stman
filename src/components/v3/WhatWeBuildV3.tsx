import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Mic, Smartphone, Rocket } from 'lucide-react';

interface Capability {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  examples: string[];
  link: string;
  linkText: string;
  accent: string;
}

const capabilities: Capability[] = [
  {
    icon: Layers,
    title: 'Unified Systems',
    subtitle: 'Connect everything',
    description: 'Custom dashboards that bring your disconnected tools together. POS, inventory, scheduling, CRM—one platform, real-time visibility.',
    examples: ['Multi-location retail', 'Service businesses', 'Operations dashboards'],
    link: '/unify-your-systems',
    linkText: 'Learn more',
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Mic,
    title: 'AI Agents',
    subtitle: 'Voice & chat, production-ready',
    description: 'Autonomous AI agents that handle calls, qualify leads, answer questions. ElevenLabs, Claude, GPT-4—built for real workloads.',
    examples: ['Voice assistants', 'Customer support', 'Lead qualification'],
    link: '/services/ai-agents',
    linkText: 'Explore agents',
    accent: 'from-violet-500 to-purple-500',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile',
    subtitle: 'Full-stack platforms',
    description: 'From landing pages to multi-tenant SaaS. React, Next.js, React Native. Modern stack, mobile-first, production-ready.',
    examples: ['SaaS platforms', 'Booking systems', 'Mobile apps'],
    link: '/services',
    linkText: 'View services',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Rocket,
    title: 'Prototype to Production',
    subtitle: 'Your MVP, shipped properly',
    description: 'Built something in Lovable, Bolt, or Replit? We take your prototype and make it production-ready. Auth, scaling, deployment.',
    examples: ['Lovable rebuilds', 'Bolt to production', 'MVP scaling'],
    link: '/prototype-to-production',
    linkText: 'Get started',
    accent: 'from-orange-500 to-amber-500',
  },
];

export default function WhatWeBuildV3() {
  return (
    <section className="relative py-24 md:py-32 bg-gray-950 overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Gradient accent top left */}
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-blue-950/30 to-transparent" />

      {/* Gradient accent bottom right */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-purple-950/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-light mb-4 block">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto">
            From Idea to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Production
            </span>
            <br className="hidden sm:block" />
            <span className="text-gray-400">Weeks, Not Months.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            AI-native development means we ship faster without cutting corners.
            20 years of pattern recognition, modern tooling, production-grade architecture.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full p-8 md:p-10 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon and Title Row */}
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className={`p-3 bg-gradient-to-br ${capability.accent} bg-opacity-10 border border-gray-700 group-hover:border-gray-600 transition-colors`}>
                    <capability.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-light text-white leading-tight">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light">
                      {capability.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 font-light leading-relaxed mb-6 relative z-10">
                  {capability.description}
                </p>

                {/* Examples */}
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {capability.examples.map((example, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 border border-gray-700"
                    >
                      {example}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to={capability.link}
                  className="inline-flex items-center gap-2 text-sm text-white font-light group-hover:gap-3 transition-all relative z-10"
                >
                  {capability.linkText}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-gray-500 font-light mb-6">
            Not sure where to start? Let's talk through your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white transition-all duration-300 font-light"
          >
            Schedule a Call
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
