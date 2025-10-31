import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Bot, Rocket, Users } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

const services: Service[] = [
  {
    icon: <Sparkles className="w-8 h-8" strokeWidth={1.5} />,
    title: 'AI Agents & Platforms',
    description: 'Intelligent systems that understand, decide, and execute. Voice AI, multi-agent architectures, and conversational platforms built for real-world impact.',
    path: '/ai-agents'
  },
  {
    icon: <Bot className="w-8 h-8" strokeWidth={1.5} />,
    title: 'AI Platform Development',
    description: 'Full-stack AI products from concept to production. LLM integration, RAG systems, real-time processing, and scalable infrastructure.',
    path: '/ai-platform-development'
  },
  {
    icon: <Rocket className="w-8 h-8" strokeWidth={1.5} />,
    title: 'Rapid Prototyping',
    description: 'Validate ideas in days, not months. Interactive prototypes with real data, AI-accelerated development, and instant deployment.',
    path: '/services'
  },
  {
    icon: <Users className="w-8 h-8" strokeWidth={1.5} />,
    title: 'Fractional CPO',
    description: 'Product strategy and execution leadership without the full-time commitment. Drive your roadmap, build your team, ship faster.',
    path: '/fractional-cpo'
  }
];

export default function ServicesLuxury() {
  return (
    <section className="py-32 md:py-48 bg-gray-50">
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
              What We Do
            </span>
          </div>

          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-[1.1] tracking-tight max-w-4xl mb-8"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            AI-Native
            <br />
            Product Studio
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
            We build intelligent products that push boundaries. No templates, no limitations—just ambitious ideas brought to life with AI-powered precision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={service.path} className="block">
                {/* Icon */}
                <div className="mb-6 text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-3xl md:text-4xl font-light text-gray-900 mb-4 leading-tight group-hover:text-gray-600 transition-colors"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-light text-gray-900 group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-24 pt-24 border-t border-gray-200 text-center"
        >
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            Got an impossible idea? Let's build it together.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light text-lg"
          >
            Start a Project
            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
