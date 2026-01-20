import React from 'react';
import { motion } from 'framer-motion';

interface Tool {
  name: string;
  logo?: string;
  category?: string;
}

interface ToolGridProps {
  title?: string;
  subtitle?: string;
  caption?: string;
  tools: Tool[];
  className?: string;
}

export function ToolGrid({
  title,
  subtitle,
  caption,
  tools,
  className = ''
}: ToolGridProps) {
  // Group tools by category if categories exist
  const hasCategories = tools.some(t => t.category);
  const categories = hasCategories
    ? [...new Set(tools.map(t => t.category).filter(Boolean))]
    : null;

  return (
    <section className={`py-24 bg-white ${className}`}>
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

          {categories ? (
            <div className="space-y-12">
              {categories.map((category, catIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 font-light mb-6">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {tools
                      .filter(t => t.category === category)
                      .map((tool, index) => (
                        <div
                          key={tool.name}
                          className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-light hover:bg-gray-100 transition-colors"
                        >
                          {tool.name}
                        </div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-light hover:bg-gray-100 transition-colors"
                >
                  {tool.name}
                </motion.div>
              ))}
            </motion.div>
          )}

          {caption && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center text-gray-500 font-light text-sm mt-10"
            >
              {caption}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ToolGrid;
