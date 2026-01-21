import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function HeaderV3() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'AI Agents', href: '#agents' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-0 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-light tracking-tight text-gray-900">
            POSTMAN
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href.slice(1))}
              className="text-sm text-gray-600 hover:text-gray-900 font-light transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('cta')}
            className="px-6 py-2.5 bg-blue-600 text-white text-sm font-light rounded-lg hover:bg-pink-600 transition-colors"
          >
            Let's Build
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <nav className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href.slice(1))}
                className="text-left text-base text-gray-600 hover:text-gray-900 font-light"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('cta')}
              className="w-full px-6 py-2.5 bg-blue-600 text-white text-sm font-light rounded-lg hover:bg-pink-600 transition-colors mt-4"
            >
              Let's Build
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
