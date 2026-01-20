import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface ComparisonItem {
  traditional: string;
  modern: string;
}

interface ComparisonTableProps {
  title?: string;
  subtitle?: string;
  traditionalLabel?: string;
  modernLabel?: string;
  items: ComparisonItem[];
  className?: string;
}

export function ComparisonTable({
  title,
  subtitle,
  traditionalLabel = 'Traditional Agency',
  modernLabel = 'P0STMAN',
  items,
  className = ''
}: ComparisonTableProps) {
  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 border-t border-gray-300"
            >
              <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 font-light mb-6">
                {traditionalLabel}
              </h3>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-gray-600 font-light">{item.traditional}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Modern Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black p-8 border-t border-gray-700"
            >
              <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 font-light mb-6">
                {modernLabel}
              </h3>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-white font-light">{item.modern}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComparisonTable;
