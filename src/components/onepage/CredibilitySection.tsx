import React from 'react';
import { motion } from 'framer-motion';
import { CredibilityContent } from '../../types/onepage';

interface CredibilitySectionProps {
  content: CredibilityContent;
}

const CredibilitySection: React.FC<CredibilitySectionProps> = ({ content }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
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
            Proven Expertise
          </h2>
          <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto">
            Two decades of enterprise technology leadership in the Middle East and Africa
          </p>
        </motion.div>

        {/* Experience Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-12 max-w-4xl mx-auto">
            <div className="text-8xl font-thin text-white mb-4">
              {content.experience}
            </div>
            <div className="text-2xl font-light text-gray-300">
              Enterprise Technology Leadership
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {content.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              className="group"
            >
              <div className="bg-gray-900/80 border border-gray-800 rounded-lg p-6 text-center hover:border-blue-500/30 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-lg font-light text-gray-900 mb-2">
                  {highlight}
                </div>
                <div className="w-8 h-0.5 bg-blue-500 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-thin text-white mb-6">
              Trusted by Enterprise Leaders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-thin text-blue-400 mb-2">50+</div>
                <div className="text-sm font-light text-gray-400">Enterprise Projects</div>
              </div>
              <div className="group">
                <div className="text-4xl font-thin text-purple-400 mb-2">15+</div>
                <div className="text-sm font-light text-gray-400">Government Clients</div>
              </div>
              <div className="group">
                <div className="text-4xl font-thin text-cyan-400 mb-2">100%</div>
                <div className="text-sm font-light text-gray-400">Security Cleared</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section (if available) */}
        {content.testimonials && content.testimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-900/80 border border-gray-800 rounded-lg p-6"
                >
                  <div className="text-lg font-light text-gray-300 mb-4 italic">
                    "{testimonial.quote}"
                  </div>
                  <div className="text-sm text-gray-400">
                    <div className="font-medium text-white">{testimonial.author}</div>
                    <div>{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CredibilitySection;