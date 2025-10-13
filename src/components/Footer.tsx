import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import LegalModal from './modals/LegalModal';

const socialLinks = [
  {
    icon: Twitter,
    href: 'https://twitter.com/paulgosnell',
    label: 'Twitter'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/pgosnell',
    label: 'LinkedIn'
  },
  {
    icon: Mail,
    href: 'mailto:hello@p0stman.com',
    label: 'Email'
  }
];

const links = {
  'footer.categories.build': [
    { labelKey: 'footer.build.website', href: '/website' },
    { labelKey: 'footer.build.mobileApp', href: '/mobile-app' },
    { labelKey: 'footer.build.aiAgents', href: '/ai-agents' },
  ],
  'footer.categories.portfolio': [
    { labelKey: 'footer.portfolio.experienceGift', href: '/case-study/experience-a-gift' },
    { labelKey: 'footer.portfolio.chilledCRM', href: '/case-study/chilled-crm' },
    { labelKey: 'footer.portfolio.serenity', href: '/case-study/serenity' },
    { labelKey: 'footer.portfolio.harmony', href: '/case-study/harmony' },
    { labelKey: 'footer.portfolio.fitlink', href: '/case-study/fitlink' },
    { labelKey: 'footer.portfolio.rhythm', href: '/case-study/rhythm' }
  ],
  'footer.categories.about': [
    { labelKey: 'footer.about.caseStudies', href: '/case-studies' },
    { labelKey: 'footer.about.process', href: '/process' },
    { labelKey: 'footer.about.aboutUs', href: '/about' }
  ],
  'footer.categories.contact': [
    { labelKey: 'footer.contact.contactUs', href: '/contact' },
    { labelKey: 'footer.contact.location', href: '/contact' }
  ],
  'footer.categories.resources': [
    { labelKey: 'footer.resources.guides', href: '/guides' },
    { labelKey: 'footer.resources.aiCostGuide', href: '/guides/ai-agent-development-cost-timeline-guide-2025.html' },
    { labelKey: 'footer.resources.voicePlatforms', href: '/guides/voice-ai-platforms-elevenlabs-livekit-custom-comparison-2025.html' },
    { labelKey: 'footer.resources.chatgptVsCustom', href: '/guides/chatgpt-vs-custom-ai-agent-guide-2025.html' },
    { labelKey: 'footer.resources.aiSecurity', href: '/guides/ai-agent-security-data-privacy-guide-2025.html' },
    { labelKey: 'footer.resources.howAIWorks', href: '/guides/how-ai-agents-work-explained-for-non-technical-founders-2025.html' },
    { labelKey: 'footer.resources.hireAgency', href: '/guides/how-to-hire-ai-development-agency-2025.html' },
    { labelKey: 'footer.resources.saasRoadmap', href: '/guides/building-saas-roadmap-2025.html' }
  ]
};

export default function Footer() {
  const [legalModal, setLegalModal] = useState<'terms' | 'privacy' | null>(null);
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 overflow-hidden">
      {/* Purple Swirl Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Logo & Description */}
            <div className="lg:w-1/3">
              <Link to="/" className="mb-4 block">
                <Logo className="text-2xl text-white" />
              </Link>
              <p className="text-gray-400 mb-6">{t('footer.description')}</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:w-2/3">
              {Object.entries(links).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-white mb-4">{t(category)}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item.labelKey}>
                        <Link
                          to={item.href}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {t(item.labelKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              {t('footer.copyright', { year: currentYear })}
            </div>
            <div className="flex items-center gap-6 text-sm divide-x divide-gray-700">
              <button
                onClick={() => setLegalModal('terms')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.terms')}
              </button>
              <button
                onClick={() => setLegalModal('privacy')}
                className="text-gray-400 hover:text-white transition-colors pl-6"
              >
                {t('footer.privacy')}
              </button>
              <div className="pl-6">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={legalModal !== null}
        onClose={() => setLegalModal(null)}
        type={legalModal || 'terms'}
      />
    </footer>
  );
}