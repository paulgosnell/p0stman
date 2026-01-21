import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Zap, LineChart, Shield } from 'lucide-react';

const challenges = [
  {
    icon: Layers,
    title: 'Disconnected Systems',
    description: 'Your team logs into 7 different platforms before lunch. Data lives in silos.',
  },
  {
    icon: Zap,
    title: 'Manual Processes',
    description: 'Copy-paste between spreadsheets. Double-entry. Human bottlenecks everywhere.',
  },
  {
    icon: LineChart,
    title: 'No Visibility',
    description: 'Getting a clear picture of your business takes days of pulling reports.',
  },
  {
    icon: Shield,
    title: 'Growing Pains',
    description: 'What worked at 10 employees breaks at 50. Your systems can\'t scale with you.',
  },
];

export default function OperationsTransformationV3() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light mb-4 block">
            For Growing Businesses
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1] tracking-tight mb-6 max-w-4xl">
            Your Business Runs on
            <br className="hidden sm:block" />
            <span className="text-gray-400">Seven Systems.</span>
            <br className="hidden sm:block" />
            It Should Run on One.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
            AI has changed what's possible. Custom dashboards that unify your operations,
            automate the repetitive work, and give you real-time visibility—built in weeks,
            not years.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 md:p-8 bg-gray-50 hover:bg-gray-100 transition-colors h-full">
                <challenge.icon
                  className="w-8 h-8 text-gray-900 mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg md:text-xl font-light text-gray-900 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Solution */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="bg-black text-white p-8 md:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 leading-tight">
                The AI-Native Solution
              </h3>
              <p className="text-white/80 font-light leading-relaxed mb-6">
                We build unified platforms that connect your existing systems—POS, inventory,
                scheduling, finance, CRM—into one intelligent dashboard. AI handles the
                data sync, the reporting, and the automation. Your team focuses on
                growing the business.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Connect all your systems with one API layer',
                  'Automate manual data entry and reporting',
                  'Real-time dashboards for every department',
                  'Voice-enabled commands and queries',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-white/60 mt-1">→</span>
                    <span className="text-white/90 font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/unify-your-systems"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black hover:bg-gray-100 transition-colors font-light group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="hidden lg:block">
              {/* Simple visual representation */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-3">
                  {['POS', 'Inventory', 'Scheduling', 'Finance', 'CRM', 'HR'].map((system, i) => (
                    <div
                      key={i}
                      className="bg-white/10 border border-white/20 p-4 text-center"
                    >
                      <span className="text-white/60 text-sm font-light">{system}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-center">
                  <div className="w-px h-8 bg-white/30" />
                </div>
                <div className="bg-white/20 border border-white/30 p-6 text-center">
                  <span className="text-white font-light text-lg">Unified Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats/Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 font-light">
            From retail chains to service businesses. 10 employees to 100.
            <br className="hidden sm:block" />
            <span className="text-gray-900">If you're drowning in disconnected systems, we can help.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
