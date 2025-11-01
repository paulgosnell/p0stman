import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import FooterV3 from '../v3/FooterV3';

interface FooterLuxuryProps {
  prevCase?: {
    title: string;
    path: string;
  };
  nextCase?: {
    title: string;
    path: string;
  };
}

export default function FooterLuxury({ prevCase, nextCase }: FooterLuxuryProps) {
  return (
    <>
      {/* Case Study Navigation */}
      {(prevCase || nextCase) && (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Previous Case */}
              {prevCase ? (
                <Link to={prevCase.path} className="group">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="border-t-2 border-gray-900 pt-6 hover:border-black transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4 text-gray-400 group-hover:text-gray-900 transition-colors">
                      <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                      <span className="text-xs tracking-[0.3em] uppercase font-light">
                        Previous Case
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 group-hover:text-black transition-colors"
                      style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                      {prevCase.title}
                    </h3>
                  </motion.div>
                </Link>
              ) : (
                <div />
              )}

              {/* Next Case */}
              {nextCase ? (
                <Link to={nextCase.path} className="group">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="border-t-2 border-gray-900 pt-6 hover:border-black transition-colors text-right"
                  >
                    <div className="flex items-center justify-end gap-3 mb-4 text-gray-400 group-hover:text-gray-900 transition-colors">
                      <span className="text-xs tracking-[0.3em] uppercase font-light">
                        Next Case
                      </span>
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 group-hover:text-black transition-colors"
                      style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                      {nextCase.title}
                    </h3>
                  </motion.div>
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* View All Cases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors font-light"
              >
                <span className="text-sm tracking-wider">View All Case Studies</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-8 max-w-[90rem]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2
              className="text-5xl md:text-7xl font-light mb-8 leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Let's create something exceptional together
            </h2>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-12 max-w-2xl">
              Whether you need enterprise transformation or rapid AI-powered development,
              let's discuss how we can deliver exceptional results.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors font-light"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Global Footer */}
      <FooterV3 />
    </>
  );
}
