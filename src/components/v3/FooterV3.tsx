import React from 'react';
import { Github, Linkedin, Twitter, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';
import Logo from '../Logo';

export default function FooterV3() {
  const currentYear = new Date().getFullYear();
  const [isDark, setIsDark] = useDarkMode();

  const footerColumns = [
    {
      title: 'Services',
      items: [
        { label: 'AI Product Studio', href: '/ai-product-studio' },
        { label: 'AI Agents', href: '/services/ai-agents' },
        { label: 'Context Engineering', href: '/context-engineering' },
        { label: 'Prototype to Production', href: '/prototype-to-production' },
        { label: 'Fractional AI Leadership', href: '/fractional-ai-leadership' }
      ]
    },
    {
      title: 'LLM SEO',
      items: [
        { label: 'LLM SEO Guide', href: '/guides/llm-seo-complete-guide-2026' },
        { label: 'ChatGPT Advertising', href: '/services/chatgpt-advertising-services' },
        { label: 'GEO Services', href: '/services/generative-engine-optimization-geo' },
        { label: 'Get Your Brand in ChatGPT', href: '/guides/how-to-get-your-brand-in-chatgpt' },
        { label: 'LLM SEO Pricing', href: '/pricing/llm-seo-pricing-guide' }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About', href: '/about' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Process', href: '/process' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Legal',
      items: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/pgosnell', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/paulgosnell', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/paulgosnell', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 md:py-24 px-6 md:px-0 border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24">
          {footerColumns.map((column, index) => (
            <div key={index} className="flex flex-col space-y-6">
              {/* Column Title */}
              <h3 className="text-sm font-light text-gray-400 uppercase tracking-wider">
                {column.title}
              </h3>

              {/* Links */}
              {column.items && (
                <ul className="flex flex-col space-y-4">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-12 md:pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand & Tagline */}
            <div className="text-center md:text-left">
              <a href="/" className="inline-block mb-2">
                <Logo size="small" showStrapline={false} className="text-white" />
              </a>
              <p className="text-sm text-gray-500 font-light">
                AI-Powered Product Studio. Built for speed. Shipped with care.
              </p>
            </div>

            {/* Social Icons & Dark Mode Toggle */}
            <div className="flex gap-4 items-center">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
              <div className="h-4 w-px bg-gray-700 dark:bg-gray-600"></div>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Toggle dark mode"
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500 font-light">
              © {currentYear} P0STMAN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
