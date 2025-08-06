import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Code, Brain, Users, Wrench, Zap } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

const services = [
  {
    icon: <Bot className="w-8 h-8" />,
    titleKey: 'services.aiDev.title',
    descriptionKey: 'services.aiDev.description',
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    titleKey: 'services.solutions.title',
    descriptionKey: 'services.solutions.description',
  },
  {
    icon: <Brain className="w-8 h-8" />,
    titleKey: 'services.consulting.title',
    descriptionKey: 'services.consulting.description',
  },
  {
    icon: <Code className="w-8 h-8" />,
    titleKey: 'services.prompts.title',
    descriptionKey: 'services.prompts.description',
  },
];

export default function BoltPromotion() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t, isRTL } = useLanguage();

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-gray-100" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-medium">{t('services.title')}</span>
          </div>

          <h2 className="text-4xl font-bold mb-6">{t('services.subtitle')}</h2>

          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">{t('services.traditional')}</p>
              <p className="text-sm text-gray-400">{t('services.traditional.subtitle')}</p>
            </div>

            <div className="text-4xl text-blue-600">→</div>

            <div className="text-center">
              <Bot className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-900 font-medium">{t('services.ai')}</p>
              <p className="text-sm text-blue-600">{t('services.ai.subtitle')}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t(service.titleKey)}
                </h3>
                <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t(service.descriptionKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}