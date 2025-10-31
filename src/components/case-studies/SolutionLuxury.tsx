import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface SolutionLuxuryProps {
  title: string;
  description: string;
  approach?: string[];
  outcome?: string;
  image?: string;
  secondaryImage?: string;
  technologies?: string[];
  features?: string[];
  liveUrl?: string;
}

export default function SolutionLuxury({
  title,
  description,
  approach,
  outcome,
  image,
  secondaryImage,
  technologies,
  features,
  liveUrl
}: SolutionLuxuryProps) {
  return (
    <>
      {/* Solution Section - Full Bleed Image */}
      <section className="relative overflow-hidden bg-gray-50">
        {/* Large Hero Image - Magazine Style */}
        {image && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="aspect-[4/3] md:aspect-[16/9] w-full">
              <img
                src={image}
                alt="Solution"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* Content Overlay on Image Bottom */}
        <div className="container mx-auto px-8 max-w-[90rem] -mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-16 max-w-4xl shadow-2xl"
          >
            {/* Label */}
            <div className="mb-8">
              <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                The Solution
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-5xl md:text-7xl font-light mb-8 text-gray-900 leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              {title}
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-12">
              {description}
            </p>

            {/* Approach - Minimal Numbers */}
            {approach && approach.length > 0 && (
              <div className="space-y-6 mb-12">
                {approach.slice(0, 4).map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div
                      className="text-3xl font-light text-gray-300 flex-shrink-0"
                      style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <p className="text-gray-700 text-lg font-light leading-relaxed pt-1">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Outcome */}
            {outcome && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="border-l-2 border-gray-200 pl-8 mb-12"
              >
                <p className="text-xl text-gray-800 leading-relaxed font-light italic">
                  {outcome}
                </p>
              </motion.div>
            )}

            {/* Live URL Button */}
            {liveUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light"
                >
                  View Live Project
                  <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Secondary Image - Full Width */}
      {secondaryImage && (
        <section className="py-0 bg-white">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[16/9] md:aspect-[21/9]"
          >
            <img
              src={secondaryImage}
              alt="Solution detail"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>
      )}

      {/* Tech Stack - Optional Accordion at Bottom */}
      {(technologies && technologies.length > 0) || (features && features.length > 0) ? (
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="max-w-4xl">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Technical Details
                </span>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-16">
                {/* Technologies */}
                {technologies && technologies.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-sm font-medium text-gray-900 mb-6 tracking-wide">
                      BUILT WITH
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm text-gray-600 font-light border-b border-gray-200 pb-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Features */}
                {features && features.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-sm font-medium text-gray-900 mb-6 tracking-wide">
                      KEY FEATURES
                    </h3>
                    <div className="space-y-3">
                      {features.slice(0, 6).map((feature, index) => (
                        <div key={index} className="text-sm text-gray-600 font-light">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
