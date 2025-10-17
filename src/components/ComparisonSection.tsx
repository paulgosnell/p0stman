import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, DollarSign, Users, X, Check, Zap, Bot, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

export default function ComparisonSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t, isRTL } = useLanguage();
  
  const comparisons = {
    traditional: [
      t('comparison.traditional.cycles'),
      t('comparison.traditional.prices'),
      t('comparison.traditional.teams'),
      t('comparison.traditional.meetings'),
      t('comparison.traditional.deployment'),
      t('comparison.traditional.availability'),
      t('comparison.traditional.costs'),
    ],
    modern: [
      t('comparison.modern.delivery'),
      t('comparison.modern.prices'),
      t('comparison.modern.development'),
      t('comparison.modern.updates'),
      t('comparison.modern.deployment'),
      t('comparison.modern.support'),
      t('comparison.modern.pricing'),
    ]
  };

  return (
    <section ref={ref} className="py-24 md:py-28 bg-white" id="comparison">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className={`flex items-center justify-center gap-2 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Zap className="w-6 h-6 text-blue-600" />
              <span className="text-blue-600 font-medium">How We Work</span>
            </div>
            
            <h2 className="text-4xl font-light mb-6">
              How We Work
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every organisation faces challenges. Here's how we help you overcome them.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 gap-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            {/* Traditional Approach */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative p-10 bg-gray-100 rounded-2xl shadow-sm"
            >
              <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="p-3 bg-gray-200 rounded-lg">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-2xl font-semibold">{t('comparison.traditional.title')}</h3>
              </div>

              <ul className="space-y-5">
                {comparisons.traditional.map((text, index) => (
                  <li key={index} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Modern Approach */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative p-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white shadow-lg transform hover:scale-[1.01] transition-transform duration-300"
            >
              <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="p-3 bg-gray-50 rounded-lg backdrop-blur-sm">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">{t('comparison.modern.title')}</h3>
              </div>

              <ul className="space-y-5">
                {comparisons.modern.map((text, index) => (
                  <motion.li 
                    key={index} 
                    className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white/90 leading-relaxed">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          > 
            <div className={`flex items-center justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('comparison.cta.website')}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
              <Link
                to="/retainer"
                className={`inline-flex items-center gap-2 px-8 py-4 text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('comparison.cta.support')}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}