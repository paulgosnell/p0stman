import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Layers, Rocket, Repeat } from 'lucide-react';

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: <Lightbulb className="w-10 h-10" />,
    title: 'Discovery & Strategy',
    description: 'Deep dive into your vision. We map requirements, identify risks, validate technical feasibility.',
    deliverables: ['Product roadmap', 'Technical architecture', 'Cost & timeline estimate'],
    timeline: '2-3 days'
  },
  {
    number: '02',
    icon: <Layers className="w-10 h-10" />,
    title: 'Design & Prototype',
    description: 'Rapid prototyping with real data. Interactive demos you can click through and test.',
    deliverables: ['Clickable prototype', 'User flows', 'Design system'],
    timeline: '3-5 days'
  },
  {
    number: '03',
    icon: <Rocket className="w-10 h-10" />,
    title: 'Build & Deploy',
    description: 'AI-accelerated development with human validation. Daily progress updates, live staging environment.',
    deliverables: ['Production deployment', 'Documentation', 'Training materials'],
    timeline: '1-3 weeks'
  },
  {
    number: '04',
    icon: <Repeat className="w-10 h-10" />,
    title: 'Iterate & Scale',
    description: 'Monitor, measure, improve. Real user feedback drives rapid iteration cycles.',
    deliverables: ['Analytics dashboard', 'Performance optimization', 'Feature updates'],
    timeline: 'Ongoing'
  }
];

export default function ServicesV3() {
  return (
    <section id="services" className="py-48 md:py-52 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 leading-tight mb-4">
            How We Work
          </h2>
          <p className="text-lg font-light text-gray-600 dark:text-gray-300 max-w-2xl">
            From concept to production in weeks, not months. A proven process that moves fast without breaking things.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-gray-900 dark:text-gray-100 font-light text-sm">{step.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-light text-gray-900 dark:text-gray-100 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  {step.deliverables.map((deliverable, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-600" />
                      <span className="text-xs font-light text-gray-500 dark:text-gray-400">
                        {deliverable}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-xs font-light text-blue-600 dark:text-blue-400">
                    {step.timeline}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
