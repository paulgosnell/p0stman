import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  title: string;
  company: string;
  category: string;
  image: string;
  path: string;
  description: string;
}

const featuredCaseStudies: CaseStudy[] = [
  {
    title: 'YachtOS Command',
    company: 'Voice-Powered Maritime Intelligence',
    category: 'Maritime Technology',
    image: '/agents/yachtos-1.png',
    path: '/case-study/yachtos',
    description: 'AI-native operating system for superyacht captains saving 10+ hours weekly'
  },
  {
    title: 'Pathfinder',
    company: 'Professional ADHD Parent Coaching',
    category: 'Healthcare Technology',
    image: '/agents/pathfinder-1.png',
    path: '/case-study/pathfinder',
    description: 'Evidence-based AI coaching platform with 162+ therapeutic sessions'
  },
  {
    title: 'FAB Bank',
    company: 'Enterprise Digital Transformation',
    category: 'Banking & Finance',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png',
    path: '/case-study/fab-bank',
    description: '18-month transformation with 40+ experts across multiple departments'
  },
  {
    title: 'ChilledSites',
    company: 'AI Website Builder',
    category: 'AI Development',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites-homepage.png',
    path: '/case-study/chilled-sites',
    description: '2500+ websites created in under 10 minutes with AI-powered platform'
  }
];

export default function CaseStudiesLuxury() {
  return (
    <section id="selected-work" className="py-32 md:py-48 bg-white">
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
              Selected Work
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-[1.1] tracking-tight max-w-4xl">
              Building the
              <br />
              Impossible
            </h2>

            <Link
              to="/case-studies"
              className="inline-flex items-center gap-3 text-lg font-light text-gray-900 hover:gap-5 transition-all group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </div>
        </motion.div>

        {/* Magazine-Style Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {featuredCaseStudies.map((study, index) => (
            <motion.div
              key={study.path}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <Link
                to={study.path}
                className="group block"
              >
                {/* Image */}
                <div className="relative overflow-hidden mb-6 aspect-[16/10]">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {/* Category */}
                  <div className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                    {study.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">
                    {study.title}
                  </h3>

                  {/* Company */}
                  <div className="text-lg text-gray-600 font-light">
                    {study.company}
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 font-light leading-relaxed">
                    {study.description}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-sm font-light text-gray-900 group-hover:gap-4 transition-all pt-2">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
