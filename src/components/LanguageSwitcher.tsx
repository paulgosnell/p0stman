import React from 'react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' }
];

export default function LanguageSwitcher() {
  const { language, setLanguage, t, isRTL } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'ar')}
        className="bg-transparent text-gray-400 hover:text-white transition-colors appearance-none cursor-pointer text-sm focus:outline-none"
      >
        {languages.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className="bg-gray-900 text-white"
          >
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}