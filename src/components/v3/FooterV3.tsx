import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function FooterV3() {
  const currentYear = new Date().getFullYear();

  const footerColumns = [
    {
      title: 'Brand',
      items: [
        { label: 'P0STMAN', href: '/', isLogo: true }
      ],
      social: [
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', external: true },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', external: true },
        { icon: Github, href: 'https://github.com', label: 'GitHub', external: true }
      ]
    },
    {
      title: 'Product',
      items: [
        { label: 'AI Agents', href: '/ai-agents' },
        { label: 'MVP Launch', href: '/website' },
        { label: 'Services', href: '/services' },
        { label: 'Digital Transform', href: '/digital-transformation' },
        { label: 'chilledsites.com', href: 'https://chilledsites.com', external: true }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About', href: '/about' },
        { label: 'Process', href: '/process' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Offerings',
      items: [
        { label: 'Fractional CPO', href: '/fractional-cpo' },
        { label: 'Training', href: '/training' },
        { label: 'Support', href: '/support' },
        { label: 'Affiliate Program', href: '/affiliate' }
      ]
    },
    {
      title: 'Legal',
      items: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: `© ${currentYear} P0STMAN`, href: '#', disabled: true }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 md:py-24 px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-16 mb-16 md:mb-24">
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
                      {item.isLogo ? (
                        <a
                          href={item.href}
                          className="text-lg font-light text-white hover:text-blue-400 transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className={`text-sm font-light transition-colors ${
                            item.disabled
                              ? 'text-gray-500 cursor-default'
                              : 'text-gray-300 hover:text-white hover:underline'
                          }`}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {/* Social Icons */}
              {column.social && (
                <div className="flex gap-4 pt-4">
                  {column.social.map((social, socialIndex) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={socialIndex}
                        href={social.href}
                        target={social.external ? '_blank' : undefined}
                        rel={social.external ? 'noopener noreferrer' : undefined}
                        aria-label={social.label}
                        className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-12 md:pt-16">
          <p className="text-sm text-gray-500 font-light text-center">
            AI-Powered Product Studio. Built for speed. Shipped with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
