import React from 'react';
import { motion } from 'framer-motion';

interface Metric {
  number: string;
  label: string;
}

const metrics: Metric[] = [
  {
    number: '20+',
    label: 'Years\nShipped 1000+ products'
  },
  {
    number: '40%',
    label: 'Faster\nThan traditional agencies'
  },
  {
    number: 'Live',
    label: 'In Production\nNot POCs. Real systems in 3 weeks'
  }
];

export default function MetricsV3() {
  return (
    <section className="py-40 md:py-48 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center px-6"
            >
              {/* Vertical keyline (left side, except first item) */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-24 w-px bg-gray-200 dark:bg-gray-700" />
              )}

              {/* Number */}
              <div className="text-6xl md:text-7xl font-extralight text-gray-600 dark:text-gray-400 mb-6">
                {metric.number}
              </div>

              {/* Horizontal keyline */}
              <div className="w-12 h-px bg-gray-300 dark:bg-gray-600 mb-6" />

              {/* Label */}
              <div className="text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed whitespace-pre-line">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
