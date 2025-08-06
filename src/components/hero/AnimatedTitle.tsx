import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo';
import { useLanguage } from '../../lib/i18n/LanguageContext';

export default function AnimatedTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const words = [
    t('hero.products.website'),
    t('hero.products.mobile app'),
    t('hero.products.mvp'),
    t('hero.products.saas'),
    t('hero.products.ecommerce'),
    t('hero.products.marketplace'),
    t('hero.products.ai agent'),
    t('hero.products.dashboard')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 text-white drop-shadow-md">
        {t('hero.launch')}
      </h1>
      
      <div className="h-[60px] md:h-[80px] flex items-center mb-3 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)', scale: 0.9 }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, x: -50, filter: 'blur(10px)', scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.6
            }}
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 leading-tight"
          >
            {words[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-4xl md:text-5xl font-bold whitespace-nowrap drop-shadow-md">{t('hero.with')}</span>
        <Logo className="text-3xl md:text-5xl" useGradient />
      </div>
    </div>
  );
}