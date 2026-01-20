import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  className?: string;
  dark?: boolean;
}

export function StatsBar({ stats, className = '', dark = false }: StatsBarProps) {
  const bgClass = dark ? 'bg-black' : 'bg-gray-50';
  const textClass = dark ? 'text-white' : 'text-gray-900';
  const labelClass = dark ? 'text-gray-400' : 'text-gray-600';
  const borderClass = dark ? 'border-gray-800' : 'border-gray-200';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${bgClass} border-t ${borderClass} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`text-3xl md:text-4xl font-light ${textClass} mb-2`}>
                {stat.value}
              </div>
              <div className={`text-sm ${labelClass} font-light`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default StatsBar;
