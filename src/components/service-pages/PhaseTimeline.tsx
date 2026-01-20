import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, CheckCircle } from 'lucide-react';

interface Phase {
  icon?: LucideIcon;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

interface PhaseTimelineProps {
  title?: string;
  subtitle?: string;
  phases: Phase[];
  className?: string;
}

export function PhaseTimeline({
  title,
  subtitle,
  phases,
  className = ''
}: PhaseTimelineProps) {
  return (
    <section className={`py-24 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {(title || subtitle) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {title && (
                <h2 className="text-4xl font-light text-gray-900 mb-4">{title}</h2>
              )}
              {subtitle && (
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border-t border-gray-200 hover:shadow-xl transition-all relative"
                >
                  {/* Phase Number */}
                  <div className="absolute top-4 right-4 text-6xl font-light text-gray-100">
                    {index + 1}
                  </div>

                  <div className="relative z-10">
                    {Icon && (
                      <div className="p-3 bg-black text-white inline-block mb-4">
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                    )}

                    <h3 className="text-xl font-light text-gray-900 mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light mb-4">
                      {phase.duration}
                    </p>

                    <p className="text-gray-600 font-light mb-6 leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="space-y-2">
                      {phase.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span className="text-gray-700 font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhaseTimeline;
