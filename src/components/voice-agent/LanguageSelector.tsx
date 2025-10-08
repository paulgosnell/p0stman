import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
];

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (languageCode: string) => void;
  disabled?: boolean;
}

export default function LanguageSelector({
  selectedLanguage,
  onLanguageChange,
  disabled = false
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [buttonRect, setButtonRect] = React.useState<DOMRect | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const selectedLang = SUPPORTED_LANGUAGES.find(lang => lang.code === selectedLanguage) || SUPPORTED_LANGUAGES[0];

  const handleSelect = (languageCode: string) => {
    onLanguageChange(languageCode);
    setIsOpen(false);
  };

  const handleToggle = () => {
    if (!disabled) {
      if (!isOpen && buttonRef.current) {
        setButtonRect(buttonRef.current.getBoundingClientRect());
      }
      setIsOpen(!isOpen);
    }
  };

  // Handle scroll prevention
  React.useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const dropdown = document.getElementById('language-dropdown');
      if (dropdown && dropdown.contains(e.target as Node)) {
        e.stopPropagation();
      }
    };

    if (isOpen) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isOpen]);

  return (
    <>
      {/* Selected language button */}
      <motion.button
        ref={buttonRef}
        onClick={handleToggle}
        disabled={disabled}
        className={`
          flex items-center space-x-2 px-4 py-2 rounded-lg
          bg-white/10 hover:bg-white/20 backdrop-blur-sm
          border border-white/20 transition-all
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
      >
        <Globe className="w-4 h-4 text-white/80" />
        <span className="text-white/90 font-medium text-sm">
          {selectedLang.flag} {selectedLang.nativeName}
        </span>
      </motion.button>

      {/* Dropdown menu - rendered via portal */}
      {isOpen && !disabled && buttonRect && ReactDOM.createPortal(
        <>
          {/* Backdrop to close dropdown */}
          <div
            className="fixed inset-0 z-[9998]"
            onClick={() => setIsOpen(false)}
          />

          {/* Language options */}
          <motion.div
            id="language-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed',
              top: buttonRect.bottom + 8,
              left: buttonRect.left,
            }}
            className="z-[10000] min-w-[200px] max-h-[300px] rounded-lg bg-gray-900/95 backdrop-blur-md border border-white/20 shadow-xl overflow-y-scroll"
            onWheel={(e) => {
              e.stopPropagation();
              const target = e.currentTarget;
              const atTop = target.scrollTop === 0;
              const atBottom = target.scrollHeight - target.scrollTop === target.clientHeight;

              if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
                e.preventDefault();
              }
            }}
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <button
                key={language.code}
                onClick={() => handleSelect(language.code)}
                className={`
                  w-full px-4 py-3 text-left flex items-center space-x-3
                  transition-colors hover:bg-white/10
                  ${language.code === selectedLanguage ? 'bg-white/10' : ''}
                `}
              >
                <span className="text-2xl">{language.flag}</span>
                <div className="flex-1">
                  <div className="text-white/90 font-medium text-sm">
                    {language.nativeName}
                  </div>
                  <div className="text-white/60 text-xs">
                    {language.name}
                  </div>
                </div>
                {language.code === selectedLanguage && (
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                )}
              </button>
            ))}
          </motion.div>
        </>,
        document.body
      )}
    </>
  );
}
