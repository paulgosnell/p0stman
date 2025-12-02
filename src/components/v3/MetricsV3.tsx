import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Metric {
  number: string;
  label: string;
  sublabel: string;
}

const metrics: Metric[] = [
  {
    number: '20+',
    label: 'Years Experience',
    sublabel: '1000+ products shipped'
  },
  {
    number: '40%',
    label: 'Faster Delivery',
    sublabel: 'Than traditional agencies'
  },
  {
    number: '3wks',
    label: 'To Production',
    sublabel: 'Real systems, not POCs'
  }
];

export default function MetricsV3() {
  return (
    <section className="relative py-24 md:py-32 bg-gray-950 overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-950/20 to-transparent" />

      <div className="container mx-auto px-8 max-w-[90rem] relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Bold statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-light mb-6 block">
              Why Work With Us
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-6">
              We ship products that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                actually work
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-8 max-w-lg">
              Two decades of building for enterprise and startups. AI-augmented development means we move fast without cutting corners.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-900 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white transition-all duration-300 font-light group"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </motion.div>

          {/* Right side - Metrics */}
          <div className="grid grid-cols-1 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group relative pl-8 border-l-2 border-gray-800 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-5xl md:text-6xl font-light text-white tracking-tight">
                    {metric.number}
                  </span>
                  <span className="text-lg md:text-xl text-gray-300 font-light">
                    {metric.label}
                  </span>
                </div>
                <p className="text-gray-500 font-light">
                  {metric.sublabel}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
