import React from 'react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

export default function AnimatedTitle() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl md:text-6xl font-thin leading-tight mb-6 text-white drop-shadow-md">
        {t('hero.launch')}
      </h1>
      
      <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90 drop-shadow-md">
        {t('hero.with')}
      </p>
    </div>
  );
}