import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface ChallengeProps {
  title: string;
  description: string;
  points: string[];
  theme?: 'light' | 'dark';
}

export default function Challenge({
  title,
  description,
  points,
  theme = 'light'
}: ChallengeProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-red-100 rounded-full">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-medium">The Challenge</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-700 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Challenge Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-red-100/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {point}
                  </p>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-block p-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl">
              <p className="text-gray-600 font-medium">
                These challenges required a comprehensive solution...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}