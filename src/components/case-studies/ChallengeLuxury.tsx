import React from 'react';
import { motion } from 'framer-motion';

interface ChallengeLuxuryProps {
  title: string;
  description: string;
  points: string[];
  image?: string;
}

export default function ChallengeLuxury({
  title,
  description,
  points,
  image
}: ChallengeLuxuryProps) {
  return (
    <section className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8 max-w-[90rem]">
        {/* Magazine-Style Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                The Challenge
              </span>
            </motion.div>

            {/* Title - Large Editorial */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-light mb-8 text-gray-900 leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              {title}
            </motion.h2>

            {/* Description - Elegant Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-12 max-w-2xl"
            >
              {description}
            </motion.p>

            {/* Challenge Points - Minimal List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {points.slice(0, 4).map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-1 h-1 bg-gray-400 rounded-full mt-3 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700 text-lg font-light leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image (Optional) */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={image}
                  alt="Challenge visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Pull Quote - Magazine Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 border-l-2 border-gray-200 pl-8 max-w-3xl"
        >
          <p className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed italic">
            "These challenges required a comprehensive, strategic approach to deliver exceptional results."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
