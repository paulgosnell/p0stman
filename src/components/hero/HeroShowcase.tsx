import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import harmonyDashboard from '../../assets/images/case-studies/harmony-dashboard.png';
import serenityDashboard from '../../assets/images/case-studies/serenity-website.png';
import clinicBookDashboard from '../../assets/images/case-studies/clinicbook-website.png';
import barberBookingDashboard from '../../assets/images/case-studies/barberflow-website.png';

const cases = [
  {
    titleKey: "caseStudies.harmony.title",
    descriptionKey: "caseStudies.harmony.description",
    image: harmonyDashboard,
    path: "/case-study/harmony",
    stats: [
      { labelKey: 'caseStudies.buildTime', valueKey: 'caseStudies.stats.weeks', valueParams: { count: 4 } },
      { labelKey: 'caseStudies.costSavings', valueKey: 'caseStudies.stats.cost', valueParams: { amount: 40 } },
      { labelKey: 'caseStudies.teamSize', valueKey: 'caseStudies.stats.dev' }
    ]
  },
  {
    titleKey: "caseStudies.serenity.title",
    descriptionKey: "caseStudies.serenity.description",
    image: serenityDashboard,
    path: "/case-study/serenity",
    stats: [
      { labelKey: 'caseStudies.buildTime', valueKey: 'caseStudies.stats.weeks', valueParams: { count: 4 } },
      { labelKey: 'caseStudies.costSavings', valueKey: 'caseStudies.stats.cost', valueParams: { amount: 40 } },
      { labelKey: 'caseStudies.teamSize', valueKey: 'caseStudies.stats.dev' }
    ]
  },
  {
    titleKey: "caseStudies.clinicBook.title",
    descriptionKey: "caseStudies.clinicBook.description",
    image: clinicBookDashboard,
    path: "/case-study/clinic-book",
    stats: [
      { labelKey: 'caseStudies.buildTime', valueKey: 'caseStudies.stats.weeks', valueParams: { count: 3 } },
      { labelKey: 'caseStudies.costSavings', valueKey: 'caseStudies.stats.cost', valueParams: { amount: 30 } },
      { labelKey: 'caseStudies.teamSize', valueKey: 'caseStudies.stats.dev' }
    ]
  },
  {
    titleKey: "caseStudies.barberBooking.title",
    descriptionKey: "caseStudies.barberBooking.description",
    image: barberBookingDashboard,
    path: "/case-study/barber-booking",
    stats: [
      { labelKey: 'caseStudies.buildTime', valueKey: 'caseStudies.stats.weeks', valueParams: { count: 4 } },
      { labelKey: 'caseStudies.costSavings', valueKey: 'caseStudies.stats.cost', valueParams: { amount: 40 } },
      { labelKey: 'caseStudies.teamSize', valueKey: 'caseStudies.stats.dev' }
    ]
  }
];

export default function HeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t, isRTL } = useLanguage();

  useEffect(() => {
    // Preload all case study images
    cases.forEach(study => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(study.image));
      };
      img.src = study.image;
    });

    // Auto-advance carousel if not hovered
    let interval: number;
    if (!isHovered) {
      interval = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cases.length);
      }, 8000);
    }
    return () => window.clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCase = cases[currentIndex];
  const isCurrentImageLoaded = loadedImages.has(currentCase.image);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isCurrentImageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <div className="relative aspect-[16/9] mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-2" />
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={currentCase.image}
            alt={t(currentCase.titleKey)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 w-full h-full object-contain rounded-2xl shadow-md border border-gray-700/50"
          />
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-3 -right-3 flex justify-between pointer-events-none">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors shadow-lg pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors shadow-lg pointer-events-auto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Overlay for link */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-2xl z-20">
          <div className="absolute bottom-6 left-6">
            <Link 
              to={currentCase.path}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              View Case Study
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-20"
        >
          <Link 
            to={currentCase.path}
            className="block group"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="px-2 py-0.5 bg-blue-600/40 backdrop-blur-sm rounded-full text-blue-300 text-xs">
                Case Study {currentIndex + 1}/{cases.length}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
              {t(currentCase.titleKey)}
            </h3>
            <p className="text-gray-300 mb-4 line-clamp-1">
              {t(currentCase.descriptionKey)}
            </p>
          </Link>

          <div className="grid grid-cols-3 gap-3">
            {currentCase.stats.map((stat, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/30 hover:border-gray-700/60 transition-all duration-300">
                <div className="text-base font-bold text-white">
                  {stat.valueKey ? t(stat.valueKey, stat.valueParams) : stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.labelKey ? t(stat.labelKey) : stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {cases.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-blue-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
            } transform hover:scale-125`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}