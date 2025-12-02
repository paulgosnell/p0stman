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
    title: 'Coach OS',
    company: 'AI-Powered Executive Coaching',
    category: 'AI & Leadership',
    image: 'https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/coachos-home.png',
    path: '/case-study/coach-os',
    description: 'On-demand business coaching with voice interface, long-term memory, and GROW model frameworks.'
  },
  {
    title: 'Luxury Travel Sweden',
    company: 'AI-Powered Luxury Travel Platform',
    category: 'Travel & Hospitality',
    image: 'https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/lts-homepage-casestudy.png',
    path: '/case-study/luxury-travel-sweden',
    description: 'Interactive destination mapping, AI concierge (LIV), and comprehensive CMS. Built in 8 weeks.'
  },
  {
    title: 'Mamori HealthOS',
    company: 'AI-Powered Health Operating System',
    category: 'HealthTech & AI Agents',
    image: 'https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/mamori-homepage.png',
    path: '/case-study/mamori-healthos',
    description: 'AI-native health platform transforming fragmented data into evidence-based guidance. 95% cost reduction.'
  },
  {
    title: 'YachtOS Command',
    company: 'Voice-Powered Maritime Intelligence',
    category: 'Maritime Technology',
    image: '/agents/yachtos-home.png',
    path: '/case-study/yachtos',
    description: 'AI-native operating system for superyacht captains saving 10+ hours weekly'
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
              className="inline-flex items-center gap-3 text-lg font-light text-gray-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:gap-5 transition-all duration-300 group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 text-gray-900 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" strokeWidth={1.5} />
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
                {/* Browser Mockup */}
                <div className="relative mb-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                    {/* Traffic Lights */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    {/* URL Bar */}
                    <div className="flex-1 ml-3">
                      <div className="bg-white dark:bg-gray-900 rounded px-3 py-1 text-xs text-gray-400 font-light truncate max-w-[200px]">
                        {study.path.replace('/case-study/', '') + '.com'}
                      </div>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
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
