import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowDown, Menu, X, ArrowRight, Briefcase, Target, Zap, Users, Mail, Sparkles, Ship, Heart } from 'lucide-react';

interface CaseHeroLuxuryProps {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  logo?: string;
  logoInvert?: boolean;
  icon?: 'ship' | 'heart' | string;
  industry?: string;
  timeline?: string;
  teamSize?: string;
  technologies?: string[];
  features?: string[];
  results?: string[];
  theme?: 'light' | 'dark';
  overlayColor?: string;
  stats?: Array<{ label: string; value: string; color?: string }>;
  prevCase?: { title: string; path: string };
  nextCase?: { title: string; path: string };
  liveUrl?: string;
}

const navigationItems = [
  { label: 'Work', href: '/case-studies', icon: Briefcase },
  { label: 'Services', href: '/services', icon: Target },
  { label: 'Process', href: '/process', icon: Zap },
  { label: 'About', href: '/about', icon: Users },
  { label: 'Contact', href: '/contact', icon: Mail }
];

export default function CaseHeroLuxury({
  title,
  subtitle,
  description,
  image,
  backgroundImage,
  backgroundVideo,
  logo,
  logoInvert = true,
  icon,
  industry,
  timeline,
  teamSize,
  stats,
  prevCase,
  nextCase,
  liveUrl
}: CaseHeroLuxuryProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && prevCase) {
        navigate(prevCase.path);
      } else if (event.key === 'ArrowRight' && nextCase) {
        navigate(nextCase.path);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, prevCase, nextCase]);

  useEffect(() => {
    const handleScroll = () => {
      // Show header background when scrolled past hero (viewport height)
      setScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Transparent Header - HeaderV3Global Style */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-gradient-to-b from-black/60 to-black/20' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-0 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-light tracking-tight text-white drop-shadow-lg">
              P0STMAN
            </span>
          </Link>

          {/* Hamburger Menu - Desktop & Mobile */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
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
                className="fixed inset-0 z-40 bg-black/60"
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

      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* Full-Bleed Background - Luxury Magazine Style */}
      <div className="absolute inset-0">
        {backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : (backgroundImage || image) ? (
          <img
            src={backgroundImage || image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
        )}

        {/* Enhanced Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60" />

        {/* Additional dark vignette for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Navigation Arrows - Minimal */}
      {(prevCase || nextCase) && (
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 pointer-events-none">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="flex justify-between items-center">
              {prevCase ? (
                <Link
                  to={prevCase.path}
                  className="pointer-events-auto w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all group"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </Link>
              ) : <div className="w-14 h-14" />}

              {nextCase ? (
                <Link
                  to={nextCase.path}
                  className="pointer-events-auto w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all group"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ) : <div className="w-14 h-14" />}
            </div>
          </div>
        </div>
      )}

      {/* Content - Magazine Editorial Style */}
      <div className="relative z-10 px-8 w-full max-w-[90rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Icon - Elegant Placement */}
          {icon && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-16 mt-8 flex justify-center"
            >
              {icon === 'ship' && <Ship className="w-12 h-12 md:w-16 md:h-16 text-white opacity-90" strokeWidth={1.5} />}
              {icon === 'heart' && <Heart className="w-12 h-12 md:w-16 md:h-16 text-white opacity-90" strokeWidth={1.5} />}
            </motion.div>
          )}
          {/* Logo - Elegant Placement (fallback for image logos) */}
          {!icon && logo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-16 mt-8 flex justify-center"
            >
              <img
                src={logo}
                alt={`${title} Logo`}
                className={`h-12 md:h-16 ${logoInvert ? 'filter brightness-0 invert' : ''} opacity-90`}
              />
            </motion.div>
          )}

          {/* Subtitle - Luxury Badge */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-light"
                style={{
                  color: '#FFFFFF',
                  textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)'
                }}>
                {subtitle}
              </span>
            </motion.div>
          )}

          {/* Title - Large Serif Editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.95] tracking-tight"
            style={{
              color: '#FFFFFF',
              fontFamily: "'Playfair Display', 'Georgia', serif",
              textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)'
            }}
          >
            {title}
          </motion.h1>

          {/* Description - Elegant Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-12"
            style={{
              color: '#FFFFFF',
              textShadow: '0 2px 15px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)'
            }}
          >
            {description}
          </motion.p>

          {/* Metadata - Minimal Pills */}
          {(industry || timeline || teamSize) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {industry && (
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-light rounded-full">
                  {industry}
                </span>
              )}
              {timeline && (
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-light rounded-full">
                  {timeline}
                </span>
              )}
              {teamSize && (
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-light rounded-full">
                  {teamSize}
                </span>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  View Live
                </a>
              )}
            </motion.div>
          )}

          {/* Stats - Magazine-Style Large Numbers */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + (0.1 * index) }}
                  className="border-l-2 border-white/60 pl-4"
                >
                  <div
                    className="text-4xl md:text-5xl font-light mb-2 text-white"
                    style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm font-light tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60"
        >
          <ArrowDown className="w-6 h-6" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
    </>
  );
}
