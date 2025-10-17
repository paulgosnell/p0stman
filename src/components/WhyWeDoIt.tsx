import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Zap } from 'lucide-react';

export default function WhyWeDoIt() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 md:py-28 bg-gray-50" id="why-we-do-it">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-red-500 font-medium">Why We Do It</span>
            </div>
            
            <h2 className="text-4xl font-light mb-8 text-gray-900">
              Why We Do It
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We believe bold ideas deserve to be built. P0STMAN is our product studio, and Chilled Tools are the AI products we've created to help founders, brands, and agencies go faster.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}