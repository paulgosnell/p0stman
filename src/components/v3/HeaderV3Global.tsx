import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Target,
  Zap,
  Users,
  Mail,
  Briefcase,
  Sparkles
} from 'lucide-react';

const navigationItems = [
  {
    label: 'Work',
    href: '/case-studies',
    icon: Briefcase
  },
  {
    label: 'Services',
    href: '/services',
    icon: Target
  },
  {
    label: 'Process',
    href: '/process',
    icon: Zap
  },
  {
    label: 'About',
    href: '/about',
    icon: Users
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Mail
  }
];

export default function HeaderV3Global() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-0 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-light tracking-tight text-gray-900 dark:text-gray-100">
            P0STMAN
          </span>
        </Link>

        {/* Hamburger Menu - Desktop & Mobile */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 dark:bg-black/40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 right-0 left-0 md:right-6 md:left-auto md:w-80 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg z-50 overflow-hidden md:rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              <div className="p-6 space-y-2">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.03 }}
                    >
                      <Link
                        to={item.href}
                        onMouseEnter={() => setHoveredItem(item.href)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="group relative block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                            <Icon size={16} />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-900 dark:text-gray-100 font-light group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {item.label}
                              </span>
                              <motion.div
                                initial={{ opacity: 0, x: -5 }}
                                animate={{
                                  opacity: hoveredItem === item.href ? 1 : 0,
                                  x: hoveredItem === item.href ? 0 : -5
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <ArrowRight size={16} className="text-blue-600" />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Footer CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-6"
                >
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-light hover:from-blue-700 hover:to-purple-700 transition-all group"
                  >
                    <Sparkles size={16} className="group-hover:text-yellow-300 transition-colors" />
                    <span>Get Started</span>
                    <ArrowRight size={16} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
