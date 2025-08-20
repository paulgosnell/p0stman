import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { OutcomesContent } from '../../types/onepage';

interface OutcomesSectionProps {
  content: OutcomesContent;
}

interface AnimatedCounterProps {
  value: string;
  delay: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-7xl font-thin text-white mb-2"
    >
      {value}
    </motion.div>
  );
};

const OutcomesSection: React.FC<OutcomesSectionProps> = ({ content }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-thin text-white mb-6">
            Proven Outcomes
          </h2>
          <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto">
            Quantified results from AI adoption and implementation across enterprise clients
          </p>
        </motion.div>

        {/* Metrics Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {content.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut" 
              }}
              className="text-center group hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="bg-gray-900/80 border border-gray-800 rounded-lg p-8 hover:border-blue-500/30 transition-colors duration-300">
                <AnimatedCounter 
                  value={metric.value} 
                  delay={index * 200} 
                />
                <div className="text-lg font-light text-gray-300 mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-500">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outcomes Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-thin text-white mb-4">
              Measurable Impact Across Operations
            </h3>
            <p className="text-lg font-light text-gray-300 leading-relaxed">
              Our AI adoption strategies deliver quantifiable improvements in operational efficiency, 
              fraud detection accuracy, and development velocity. These results reflect enterprise-grade 
              implementations across financial services, government, and technology sectors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OutcomesSection;