import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, ArrowRight, ChevronLeft, ChevronRight, Clock, Users, DollarSign, ExternalLink, Star, Database, Shield, Cloud } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

// Import images directly
import rhythmDashboard from '../assets/images/case-studies/rhythm-dashboard.png';
import experienceGiftDashboard from '../assets/images/case-studies/experienceagift-dashboard.png';
import chilledCrmDashboard from '../assets/images/case-studies/chilledcrm-dashboard.png';
import harmonyDashboard from '../assets/images/case-studies/harmony-dashboard.png';
import serenityDashboard from '../assets/images/case-studies/serenity-website.png';
import fitlinkDashboard from '../assets/images/case-studies/fitlink-dashboard.png';
import clinicBookDashboard from '../assets/images/case-studies/clinicbook-dashboard.png';
import barberBookingDashboard from '../assets/images/case-studies/barberflow-website.png';

const caseStudies = [
  {
    titleKey: "caseStudies.rhythm.title",
    descriptionKey: "caseStudies.rhythm.description",
    image: rhythmDashboard,
    path: "/case-study/rhythm",
    liveUrl: "https://ai-running-app.netlify.app/",
    mobileOptimized: true,
    aspectRatio: "aspect-square",
    metrics: [
      { icon: <Clock className="w-5 h-5" />, labelKey: 'caseStudies.buildTime', value: '2-4 weeks' },
      { icon: <DollarSign className="w-5 h-5" />, labelKey: 'caseStudies.costSavings', value: '$10,000' },
      { icon: <Users className="w-5 h-5" />, labelKey: 'caseStudies.teamSize', value: '1 Dev' }
    ],
    challenge: "Traditional running apps lack personalized coaching and real-time feedback",
    solution: "AI-powered running coach with adaptive music system and personalized training plans",
    techStack: ["React Native", "TensorFlow.js", "Supabase", "Spotify API", "WebRTC"]
  },
  {
    titleKey: "caseStudies.experienceGift.title",
    descriptionKey: "caseStudies.experienceGift.description",
    image: experienceGiftDashboard,
    path: "/case-study/experience-a-gift",
    liveUrl: "https://experienceagift-staging1.netlify.app/",
    aspectRatio: "aspect-video",
    metrics: [
      { icon: <Clock className="w-5 h-5" />, labelKey: 'caseStudies.buildTime', value: '1 week' },
      { icon: <DollarSign className="w-5 h-5" />, labelKey: 'caseStudies.costSavings', value: '$10k' },
      { icon: <Users className="w-5 h-5" />, labelKey: 'caseStudies.teamSize', value: '1 Dev' }
    ],
    challenge: "Traditional gifting platforms lack personalization and modern digital experiences",
    solution: "AI-powered gift platform with personalized recommendations and seamless booking",
    techStack: ["React", "Supabase", "OpenAI API", "Stripe Payments", "Edge Functions"]
  },
  {
    titleKey: "caseStudies.chilledCRM.title",
    descriptionKey: "caseStudies.chilledCRM.description",
    image: chilledCrmDashboard,
    path: "/case-study/chilled-crm",
    liveUrl: "https://chilledcrm.com",
    aspectRatio: "aspect-video",
    metrics: [
      { icon: <Clock className="w-5 h-5" />, labelKey: 'caseStudies.buildTime', value: '2-4 weeks' },
      { icon: <DollarSign className="w-5 h-5" />, labelKey: 'caseStudies.costSavings', value: '$10,000' },
      { icon: <Users className="w-5 h-5" />, labelKey: 'caseStudies.teamSize', value: '1 Dev' }
    ],
    features: [
      'User Authentication',
      'Stripe Integration',
      'OpenAI Features',
      'Custom UI Components'
    ],
    challenge: "Traditional CRM systems are expensive, complex, and lack AI capabilities",
    solution: "Affordable, intuitive CRM with AI-powered insights and automation features",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe Connect", "OpenAI API", "Supabase Auth"]
  },
  {
    titleKey: "caseStudies.harmony.title",
    descriptionKey: "caseStudies.harmony.description",
    image: harmonyDashboard,
    path: "/case-study/harmony",
    liveUrl: "https://ai-banking-app.netlify.app/",
    mobileOptimized: true,
    aspectRatio: "aspect-[10/9]",
    metrics: [
      { icon: <Clock className="w-5 h-5" />, labelKey: 'caseStudies.buildTime', value: '6-8 weeks' },
      { icon: <DollarSign className="w-5 h-5" />, labelKey: 'caseStudies.costSavings', value: '$40,000' },
      { icon: <Users className="w-5 h-5" />, labelKey: 'caseStudies.teamSize', value: '1 Dev' }
    ],
    challenge: "Traditional financial apps don't connect money management with personal wellbeing",
    solution: "Holistic financial wellness platform with AI-powered insights and personalized guidance",
    techStack: ["React Native", "Firebase", "Supabase", "Plaid API", "TensorFlow.js"]
  },
  {
    titleKey: "caseStudies.serenity.title",
    descriptionKey: "caseStudies.serenity.description",
    image: serenityDashboard,
    path: "/case-study/serenity",
    liveUrl: "https://ai-wellbeing-app.netlify.app/",
    mobileOptimized: true,
    aspectRatio: "aspect-[10/9]",
    metrics: [
      { icon: <Clock className="w-5 h-5" />, labelKey: 'caseStudies.buildTime', value: '2 Weeks' },
      { icon: <DollarSign className="w-5 h-5" />, labelKey: 'caseStudies.costSavings', value: '$20k' },
      { icon: <Users className="w-5 h-5" />, labelKey: 'caseStudies.teamSize', value: '1 Dev' }
    ],
    challenge: "Mental wellness tools often lack personalization and engagement",
    solution: "AI-enhanced mindfulness platform with personalized content and guidance",
    techStack: ["React Native", "WebRTC", "TensorFlow.js", "Firebase", "Edge Functions"]
  },
  {
    titleKey: "caseStudies.fitlink.title",
    descriptionKey: "caseStudies.fitlink.description",
    image: fitlinkDashboard,
    path: "/case-study/fitlink",
    liveUrl: "https://fitlinkteams.com",
    aspectRatio: "aspect-[17/9]",
    metrics: [
      { icon: <Users className="w-5 h-5" />, labelKey: 'caseStudies.activeUsers', value: '60k' },
      { icon: <DollarSign className="w-5 h-5" />, labelKey: 'caseStudies.corporateSavings', value: '35%' },
      { icon: <Clock className="w-5 h-5" />, labelKey: 'caseStudies.teamEngagement', value: '54%' }
    ],
    challenge: "Corporate wellness programs struggle with low engagement and limited impact",
    solution: "Team-based fitness platform with gamification, challenges, and social features",
    techStack: ["React", "Node.js", "GraphQL", "PostgreSQL", "Redis", "AWS Services"]
  },
  {
    titleKey: "caseStudies.clinicBook.title",
    descriptionKey: "caseStudies.clinicBook.description",
    image: clinicBookDashboard,
    path: "/case-study/clinic-book",
    liveUrl: "https://clinic-book.netlify.app/",
    aspectRatio: "aspect-video",
    metrics: [
      { icon: <Clock className="w-5 h-5" />, labelKey: 'caseStudies.buildTime', value: '3 Weeks' },
      { icon: <DollarSign className="w-5 h-5" />, labelKey: 'caseStudies.costSavings', value: '$30k' },
      { icon: <Users className="w-5 h-5" />, labelKey: 'caseStudies.teamSize', value: '1 Dev' }
    ],
    challenge: "Medical clinics struggle with inefficient appointment scheduling and patient management",
    solution: "Comprehensive clinic management system with AI-powered scheduling and patient engagement",
    techStack: ["React", "Node.js", "Supabase", "Stripe", "OpenAI API", "Edge Functions"]
  },
  {
    titleKey: "caseStudies.barberBooking.title",
    descriptionKey: "caseStudies.barberBooking.description",
    image: barberBookingDashboard,
    path: "/case-study/barber-booking",
    liveUrl: "https://barber-booking.netlify.app/",
    aspectRatio: "aspect-video",
    metrics: [
      { icon: <Clock className="w-5 h-5" />, labelKey: 'caseStudies.buildTime', value: '4 Weeks' },
      { icon: <DollarSign className="w-5 h-5" />, labelKey: 'caseStudies.costSavings', value: '$40k' },
      { icon: <Users className="w-5 h-5" />, labelKey: 'caseStudies.teamSize', value: '1 Dev' }
    ],
    challenge: "Barber shops lack modern booking systems and client management tools",
    solution: "Complete barber shop management system with online booking and loyalty features",
    techStack: ["React", "Node.js", "Express", "Supabase", "Stripe", "Edge Functions"]
  }
];

export default function CaseStudy() {
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
    caseStudies.forEach(study => {
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
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
      }, 8000);
    }
    return () => window.clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentIndex];
  const isCurrentImageLoaded = loadedImages.has(currentCase.image);
  
  // Get appropriate icon for technology based on name
  const getTechIcon = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('supabase') || lowerTech.includes('firebase') || lowerTech.includes('postgres') || lowerTech.includes('sql')) 
      return <Database className="w-3.5 h-3.5" />;
    if (lowerTech.includes('aws') || lowerTech.includes('azure') || lowerTech.includes('netlify') || lowerTech.includes('cloud') || lowerTech.includes('edge')) 
      return <Cloud className="w-3.5 h-3.5" />;
    if (lowerTech.includes('stripe') || lowerTech.includes('payment')) 
      return <DollarSign className="w-3.5 h-3.5" />;
    if (lowerTech.includes('auth') || lowerTech.includes('security') || lowerTech.includes('oauth')) 
      return <Shield className="w-3.5 h-3.5" />;
    
    // Default icon
    return <Bot className="w-3.5 h-3.5" />;
  };

  const getBadgeColor = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('react') || lowerTech.includes('native')) 
      return 'bg-blue-900/60 text-blue-300';
    if (lowerTech.includes('supabase')) 
      return 'bg-green-900/60 text-green-300';
    if (lowerTech.includes('stripe')) 
      return 'bg-purple-900/60 text-purple-300';
    if (lowerTech.includes('firebase')) 
      return 'bg-yellow-900/60 text-yellow-300';
    if (lowerTech.includes('openai') || lowerTech.includes('tensorflow') || lowerTech.includes('ai')) 
      return 'bg-indigo-900/60 text-indigo-300';
    if (lowerTech.includes('edge') || lowerTech.includes('function')) 
      return 'bg-cyan-900/60 text-cyan-300';
    if (lowerTech.includes('aws') || lowerTech.includes('azure') || lowerTech.includes('netlify')) 
      return 'bg-indigo-900/60 text-indigo-300';
    if (lowerTech.includes('node') || lowerTech.includes('express')) 
      return 'bg-green-900/60 text-green-300';
    
    // Default color
    return 'bg-gray-800/60 text-gray-300';
  };

  return (
    <section 
      ref={ref} 
      className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-black text-white py-32" 
      id="case-studies"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-16">
            <Bot className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-medium">{t('caseStudies.title')}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">{t('caseStudies.subtitle')}</h2>
            <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
              {t('caseStudies.description')}
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className="relative order-2 lg:order-1">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl transform rotate-3 blur-md animate-pulse" />
                  <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-8 lg:p-12 shadow-2xl border border-gray-700/50">
                    <div className={`relative ${currentCase.aspectRatio || 'aspect-video'} flex items-center justify-center`}>
                      {!isCurrentImageLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                          <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}
                      <img
                        src={currentCase.image}
                        alt={t(currentCase.titleKey)}
                        className="w-full h-full object-contain transition-transform duration-700 hover:scale-105 shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <a 
                          href={currentCase.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
                        >
                          View Live Demo
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 order-1 lg:order-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-3 py-1 bg-blue-600/30 backdrop-blur-sm rounded-full text-blue-400 text-xs font-medium">
                        Case Study {currentIndex + 1}/{caseStudies.length}
                      </div>
                      {currentCase.mobileOptimized && (
                        <div className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-xs font-medium">
                          Mobile Optimized
                        </div>
                      )}
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                      {currentCase.titleKey ? t(currentCase.titleKey) : currentCase.title}
                    </h2>
                    
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {currentCase.descriptionKey ? t(currentCase.descriptionKey) : currentCase.description}
                    </p>

                    {/* Tech Stack Badges */}
                    {currentCase.techStack && (
                      <div className="mb-6">
                        <h3 className="text-sm uppercase text-gray-400 mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {currentCase.techStack.map((tech, index) => (
                            <div 
                              key={`tech-${index}`} 
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${getBadgeColor(tech)}`}
                            >
                              {getTechIcon(tech)}
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <h3 className="font-medium text-gray-100">Challenge & Solution</h3>
                      </div>
                      <div className="space-y-4 text-gray-300">
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 bg-red-500 rounded-full" />
                          <p>{currentCase.challenge}</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 bg-green-500 rounded-full" />
                          <p>{currentCase.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className={`flex flex-wrap items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Link
                        to={currentCase.path}
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all transform hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        {t('caseStudies.viewCase')}
                        <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                      </Link>

                      {currentCase.liveUrl && (
                        <a
                          href={currentCase.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 hover:shadow-lg transition-all transform hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
                        >
                          {t('caseStudies.viewLive')}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {currentCase.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        <div className="text-blue-400 mb-3">{metric.icon}</div>
                        <div className="text-2xl font-bold text-white">
                          {metric.valueKey ? t(metric.valueKey, metric.valueParams) : metric.value}
                        </div>
                        <div className="text-sm text-gray-400">{metric.labelKey ? t(metric.labelKey) : metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {currentCase.features && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {currentCase.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-gray-800/50 p-3 rounded-lg border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
                          >
                            <span className="w-2 h-2 bg-blue-400 rounded-full" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? '-right-6 -left-6' : '-left-6 -right-6'}`}>
              <div className="flex justify-between">
                <button
                  onClick={prevSlide}
                  className={`w-12 h-12 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700 transition-colors shadow-lg ${isRTL ? 'transform rotate-180' : ''}`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className={`w-12 h-12 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700 transition-colors shadow-lg ${isRTL ? 'transform rotate-180' : ''}`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className={`flex justify-center gap-3 mt-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-blue-400 scale-125' : 'bg-gray-700 hover:bg-gray-600'
                  } transform hover:scale-125`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Link 
                to="/case-studies" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all transform hover:scale-105 border border-white/10"
              >
                View All Case Studies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}