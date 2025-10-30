import React from 'react';
import { motion } from 'framer-motion';

interface BenefitsLuxuryProps {
  title: string;
  description: string;
  items?: Array<{
    title: string;
    description: string;
    metric: string;
  }>;
  points?: string[];
  image?: string;
  secondaryImage?: string;
}

export default function BenefitsLuxury({
  title,
  description,
  items,
  points,
  image,
  secondaryImage
}: BenefitsLuxuryProps) {
  // Use items or points
  const displayItems = items || (points ? points.map(point => ({
    title: '',
    description: point,
    metric: ''
  })) : []);

  return (
    <section className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8 max-w-[90rem]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
              Impact & Results
            </span>
          </div>

          <h2
            className="text-5xl md:text-7xl font-light mb-8 text-gray-900 leading-[1.1] tracking-tight max-w-4xl"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            {title}
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl">
            {description}
          </p>
        </motion.div>

        {/* Stats Grid - Large Magazine-Style Numbers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-32">
          {displayItems.slice(0, 6).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-t-2 border-gray-900 pt-6"
            >
              {/* Metric - Large Number */}
              {item.metric && (
                <div
                  className="text-5xl md:text-6xl font-light mb-4 text-gray-900"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  {item.metric}
                </div>
              )}

              {/* Title */}
              {item.title && (
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {item.title}
                </h3>
              )}

              {/* Description */}
              <p className="text-gray-600 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery - Magazine Layout */}
        {(image || secondaryImage) && (
          <div className="grid md:grid-cols-2 gap-8">
            {image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img
                  src={image}
                  alt="Result"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            )}

            {secondaryImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="aspect-[4/5] overflow-hidden md:mt-16"
              >
                <img
                  src={secondaryImage}
                  alt="Result detail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            )}
          </div>
        )}

        {/* Pull Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32 text-center max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-4xl font-light text-gray-900 leading-relaxed italic">
            "Delivering measurable impact across every metric."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
