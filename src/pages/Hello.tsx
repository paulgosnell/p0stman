import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bot, 
  Zap, 
  Rocket, 
  Brain, 
  Code, 
  Users, 
  Globe, 
  Award,
  ExternalLink,
  Mail,
  Play,
  Pause,
  Building2,
  Target,
  Sparkles,
  Smartphone,
  Heart,
  Music,
  Calendar,
  Scissors,
  Gift,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Palette,
  Headphones,
  Activity
} from 'lucide-react';

const slides = [
  {
    id: 'intro',
    title: 'Meet P0STMAN',
    subtitle: 'AI-Powered Product Studio',
    content: 'Where agencies and consultancies find their perfect development partner',
    visual: 'hero',
    autoAdvance: 4000
  },
  {
    id: 'problem',
    title: 'The Challenge',
    subtitle: 'Traditional Development is Broken',
    content: 'Long timelines, high costs, and unpredictable outcomes are killing great ideas',
    visual: 'problem',
    autoAdvance: 3500
  },
  {
    id: 'solution',
    title: 'The AI Revolution',
    subtitle: '10x Faster Development',
    content: 'We leverage cutting-edge AI tools to deliver exceptional results in record time',
    visual: 'ai-revolution',
    autoAdvance: 4000
  },
  {
    id: 'ai-tools',
    title: 'How We Build',
    subtitle: 'Cutting-Edge AI Arsenal',
    content: 'Powered by the most advanced AI development tools and models available today',
    visual: 'ai-tools-showcase',
    autoAdvance: 5000
  },
  {
    id: 'services',
    title: 'What We Build',
    subtitle: 'Full-Stack Solutions',
    content: 'From AI agents to mobile apps, we handle the entire technical delivery',
    visual: 'services-showcase',
    autoAdvance: 4500
  },
  {
    id: 'case-chilled',
    title: 'My Health Coach (DoH)',
    subtitle: 'Government Health App',
    content: 'Partnered with IBM to build standout wellness app for Abu Dhabi residents',
    visual: 'case-chilled',
    autoAdvance: 5000
  },
  {
    id: 'case-rhythm',
    title: 'Genieology',
    subtitle: 'Creative Agency Transformation',
    content: 'Responsive website with API-powered CMS, instant success with increased conversions',
    visual: 'case-rhythm',
    autoAdvance: 5000
  },
  {
    id: 'case-harmony',
    title: 'Harmony',
    subtitle: 'Music Collaboration Platform',
    content: 'Connect artists worldwide with AI-powered matching and real-time collaboration',
    visual: 'case-harmony',
    autoAdvance: 5000
  },
  {
    id: 'case-serenity',
    title: 'Etihad Airways',
    subtitle: 'Booking Flow Innovation',
    content: 'Custom booking system delivered 25% overnight increase in bookings',
    visual: 'case-serenity',
    autoAdvance: 5000
  },
  {
    id: 'case-fitlink',
    title: 'First Abu Dhabi Bank',
    subtitle: 'Digital Transformation at Scale',
    content: 'Led 18-month transformation with 40-50 experts across multiple departments',
    visual: 'case-fitlink',
    autoAdvance: 5000
  },
  {
    id: 'case-clinicbook',
    title: 'BFIT by Fitlink',
    subtitle: 'Web 3.0 Fitness Revolution',
    content: 'Blockchain-powered fitness app with native token and cryptocurrency rewards',
    visual: 'case-clinicbook',
    autoAdvance: 5000
  },
  {
    id: 'case-arabiancenter',
    title: 'Arabian Malls',
    subtitle: 'Premium Brand Experience',
    content: 'Redesigned website with custom CMS, enhancing premium feel and user experience',
    visual: 'case-arabiancenter',
    autoAdvance: 5000
  },
  {
    id: 'case-alarabiya',
    title: 'Al Arabiya',
    subtitle: 'News Platform Modernization',
    content: 'Led international team of 20 to modernize leading news brand during COVID-19',
    visual: 'case-alarabiya',
    autoAdvance: 5000
  },
  {
    id: 'case-experience',
    title: 'Experience A Gift',
    subtitle: 'AI-Powered Gifting',
    content: 'Revolutionizing personalized gifting with AI-driven design and experiences',
    visual: 'case-experience',
    autoAdvance: 5000
  },
  {
    id: 'portfolio-overview',
    title: 'The Portfolio',
    subtitle: '20+ AI-Powered MVPs',
    content: 'Real products, real users, real impact across multiple industries',
    visual: 'portfolio-matrix',
    autoAdvance: 4000
  },
  {
    id: 'about-paul',
    title: 'Meet Paul Gosnell',
    subtitle: 'Serial Entrepreneur & AI Pioneer',
    content: 'Based between UK and UAE, working globally with agencies and consultancies worldwide',
    visual: 'about-paul',
    autoAdvance: 5000
  },
  {
    id: 'cta',
    title: 'Ready to Transform?',
    subtitle: 'Let\'s Build Something Amazing',
    content: 'Partner with us and deliver impossible timelines with exceptional quality',
    visual: 'cta-spectacular',
    autoAdvance: 8000
  },
  {
    id: 'space-finale',
    title: 'Welcome to the P0STMAN Universe',
    subtitle: 'Where AI Meets Infinite Possibilities',
    content: 'Thank you for joining us on this journey through the future of development',
    visual: 'space-universe',
    autoAdvance: 0
  }
];

const Hello: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying || slides[currentSlide].autoAdvance === 0) return;

    const duration = slides[currentSlide].autoAdvance;
    const interval = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);

      if (elapsed >= duration) {
        setProgress(0);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide, isPlaying]);

  const nextSlide = () => {
    setProgress(0);
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length;
      return next;
    });
  };

  const prevSlide = () => {
    setProgress(0);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setProgress(0);
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      setProgress(0);
    }
  };

  const renderVisual = (visual: string) => {
    switch (visual) {
      case 'hero':
        return (
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`
                  }}
                />
              ))}
              
              <div className="flex items-center justify-center space-x-4 mb-6 relative z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Bot className="w-12 h-12" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-8 h-8" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Rocket className="w-10 h-10" />
                </motion.div>
              </div>
              <div className="text-center relative z-10">
                <motion.div 
                  className="text-2xl font-bold mb-2"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    background: "linear-gradient(90deg, #fff, #fbbf24, #fff)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  P0STMAN
                </motion.div>
                <div className="text-lg opacity-90">AI-Powered Product Studio</div>
              </div>
            </motion.div>
          </div>
        );

      case 'problem':
        return (
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Building2 className="w-8 h-8" />, label: 'Slow Delivery', color: 'bg-red-500' },
              { icon: <Target className="w-8 h-8" />, label: 'High Costs', color: 'bg-orange-500' },
              { icon: <Users className="w-8 h-8" />, label: 'Poor Communication', color: 'bg-yellow-500' },
              { icon: <Code className="w-8 h-8" />, label: 'Technical Debt', color: 'bg-red-600' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`${item.color} rounded-2xl p-6 text-white text-center`}
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <div className="font-semibold">{item.label}</div>
              </motion.div>
            ))}
          </div>
        );

      case 'ai-revolution':
        return (
          <div className="relative">
            <motion.div
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              {/* Neural network background */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}
              </div>
              
              <div className="flex items-center justify-center mb-6 relative z-10">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <Brain className="w-16 h-16" />
                </motion.div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center relative z-10">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="text-3xl font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  >
                    10x
                  </motion.div>
                  <div className="text-sm opacity-90">Faster</div>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div 
                    className="text-3xl font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                  >
                    50%
                  </motion.div>
                  <div className="text-sm opacity-90">Lower Cost</div>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div 
                    className="text-3xl font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
                  >
                    100%
                  </motion.div>
                  <div className="text-sm opacity-90">Quality</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      case 'ai-tools-showcase':
        return (
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              {/* Matrix-style background */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-green-400 font-mono text-xs"
                    animate={{
                      y: [-20, 400],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: '-20px'
                    }}
                  >
                    {Math.random().toString(36).substring(7)}
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center mb-8"
                >
                  <div className="text-2xl font-bold mb-2">AI Development Stack</div>
                  <div className="text-lg opacity-90">Next-Generation Tools & Models</div>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { 
                      name: 'Claude Sonnet', 
                      type: 'AI Model', 
                      color: 'from-orange-500 to-red-500',
                      logo: '🧠'
                    },
                    { 
                      name: 'GPT-4o', 
                      type: 'AI Model', 
                      color: 'from-green-500 to-teal-500',
                      logo: '⚡'
                    },
                    { 
                      name: 'Gemini 2.0', 
                      type: 'AI Model', 
                      color: 'from-blue-500 to-indigo-500',
                      logo: '💎'
                    },
                    { 
                      name: 'Cursor', 
                      type: 'AI IDE', 
                      color: 'from-purple-500 to-pink-500',
                      logo: '🎯'
                    },
                    { 
                      name: 'Kiro', 
                      type: 'AI Assistant', 
                      color: 'from-cyan-500 to-blue-500',
                      logo: '🤖'
                    },
                    { 
                      name: 'Bolt.new', 
                      type: 'AI Builder', 
                      color: 'from-yellow-500 to-orange-500',
                      logo: '⚡'
                    },
                    { 
                      name: 'Claude Artifacts', 
                      type: 'AI Code', 
                      color: 'from-indigo-500 to-purple-500',
                      logo: '🔧'
                    },
                    { 
                      name: 'V0 by Vercel', 
                      type: 'AI UI', 
                      color: 'from-gray-600 to-gray-800',
                      logo: '🎨'
                    }
                  ].map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ 
                        y: 50, 
                        opacity: 0,
                        rotateX: -90
                      }}
                      animate={{ 
                        y: 0, 
                        opacity: 1,
                        rotateX: 0
                      }}
                      transition={{ 
                        delay: 0.5 + index * 0.1,
                        duration: 0.6,
                        type: "spring"
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 10,
                        transition: { duration: 0.2 }
                      }}
                      className={`bg-gradient-to-br ${tool.color} rounded-xl p-4 text-center relative overflow-hidden cursor-pointer`}
                    >
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                        whileHover={{
                          opacity: [0, 0.2, 0],
                          x: [-100, 100]
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      <motion.div 
                        className="text-2xl mb-2"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2 + index * 0.2, 
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      >
                        {tool.logo}
                      </motion.div>
                      <div className="font-semibold text-sm mb-1 relative z-10">{tool.name}</div>
                      <div className="text-xs opacity-90 relative z-10">{tool.type}</div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="mt-8 text-center"
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 inline-block">
                    <div className="flex items-center space-x-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="w-6 h-6 text-white" />
                      </motion.div>
                      <span className="font-bold text-white">Bolt.new Ambassador</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      case 'services-showcase':
        return (
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Bot className="w-6 h-6" />, title: 'AI Agents', desc: 'Autonomous business automation', color: 'from-blue-500 to-cyan-500' },
              { icon: <Globe className="w-6 h-6" />, title: 'Web Apps', desc: 'Modern, responsive platforms', color: 'from-green-500 to-emerald-500' },
              { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile Apps', desc: 'Native iOS & Android', color: 'from-purple-500 to-pink-500' },
              { icon: <Sparkles className="w-6 h-6" />, title: 'Retainer', desc: 'Ongoing expert support', color: 'from-orange-500 to-red-500' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ 
                  y: 50, 
                  opacity: 0,
                  rotateX: -90
                }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  rotateX: 0
                }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.6,
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
                className={`bg-gradient-to-br ${service.color} rounded-xl p-4 shadow-lg text-white relative overflow-hidden`}
              >
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />
                
                <div className="flex items-center space-x-3 mb-2 relative z-10">
                  <motion.div 
                    className="bg-white bg-opacity-20 p-2 rounded-lg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    {service.icon}
                  </motion.div>
                  <div className="font-semibold">{service.title}</div>
                </div>
                <div className="text-sm opacity-90 relative z-10">{service.desc}</div>
              </motion.div>
            ))}
          </div>
        );

      case 'portfolio':
        return (
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: 'ChilledCRM', type: 'AI CRM Platform', color: 'bg-blue-500' },
              { name: 'Rhythm', type: 'AI Running Coach', color: 'bg-green-500' },
              { name: 'Fitlink', type: 'Wellness Platform', color: 'bg-purple-500' },
              { name: 'Harmony', type: 'Music Collab', color: 'bg-pink-500' },
              { name: 'ClinicBook', type: 'Healthcare', color: 'bg-teal-500' },
              { name: 'Serenity', type: 'Meditation App', color: 'bg-indigo-500' }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`${project.color} rounded-xl p-4 text-white text-center`}
              >
                <div className="font-semibold text-sm mb-1">{project.name}</div>
                <div className="text-xs opacity-90">{project.type}</div>
              </motion.div>
            ))}
          </div>
        );

      case 'expertise':
        return (
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 text-white"
            >
              <div className="flex justify-center mb-6">
                <Award className="w-16 h-16 text-yellow-400" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">20+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">3</div>
                    <div className="text-sm opacity-90">Successful Exits</div>
                  </div>
                </div>
                <div className="text-lg font-semibold">Bolt.new Ambassador</div>
                <div className="text-sm opacity-90">AI Development Pioneer</div>
              </div>
            </motion.div>
          </div>
        );

      case 'case-chilled':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Product Screenshot */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <img 
                src="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png" 
                alt="ChilledCRM Dashboard"
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Stats & Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm opacity-90">Weeks Build</div>
                </div>
                <div className="bg-green-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Healthcare</div>
                  <div className="text-sm opacity-90">Platform</div>
                </div>
                <div className="bg-purple-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">AI</div>
                  <div className="text-sm opacity-90">Analytics</div>
                </div>
                <div className="bg-orange-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Patient</div>
                  <div className="text-sm opacity-90">Management</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Healthcare Innovation</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Digital health transformation</li>
                  <li>• AI-powered diagnostics</li>
                  <li>• Patient data analytics</li>
                  <li>• Integrated care management</li>
                  <li>• Real-time health monitoring</li>
                </ul>
              </div>
            </motion.div>
          </div>
        );

      case 'case-rhythm':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Product Screenshot */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <img 
                src="https://api.chilledsites.com/storage/v1/object/public/p0stman/genie1.png" 
                alt="Rhythm AI Running Coach"
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Stats & Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm opacity-90">Weeks Build</div>
                </div>
                <div className="bg-blue-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">AI</div>
                  <div className="text-sm opacity-90">Assistant</div>
                </div>
                <div className="bg-purple-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Natural</div>
                  <div className="text-sm opacity-90">Language</div>
                </div>
                <div className="bg-pink-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Smart</div>
                  <div className="text-sm opacity-90">Automation</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2">AI Innovation</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Advanced natural language processing</li>
                  <li>• Intelligent task automation</li>
                  <li>• Contextual understanding</li>
                  <li>• Multi-platform integration</li>
                  <li>• Continuous learning capabilities</li>
                </ul>
              </div>
            </motion.div>
          </div>
        );

      case 'case-fitlink':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Product Screenshot */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <img 
                src="https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png" 
                alt="Fitlink Wellness Platform"
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Stats & Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">18</div>
                  <div className="text-sm opacity-90">Months</div>
                </div>
                <div className="bg-pink-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">40-50</div>
                  <div className="text-sm opacity-90">Experts</div>
                </div>
                <div className="bg-indigo-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Multiple</div>
                  <div className="text-sm opacity-90">Departments</div>
                </div>
                <div className="bg-teal-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Digital</div>
                  <div className="text-sm opacity-90">Transform</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Enterprise Success</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Started with Innovation Lab project</li>
                  <li>• Impressed multiple departments</li>
                  <li>• Assembled large expert team</li>
                  <li>• 18-month transformation program</li>
                  <li>• Ongoing successful partnership</li>
                </ul>
              </div>
            </motion.div>
          </div>
        );

      case 'case-harmony':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Product Screenshot */}
            <motion.div
              initial={{ x: -50, opacity: 0, rotateY: -15 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <img 
                src="https://api.chilledsites.com/storage/v1/object/public/p0stman/harmony1.png" 
                alt="Harmony Music Platform"
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Stats & Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="bg-pink-500 rounded-xl p-4 text-white text-center"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm opacity-90">Weeks Build</div>
                </motion.div>
                <motion.div 
                  className="bg-purple-500 rounded-xl p-4 text-white text-center"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <div className="text-2xl font-bold">Global</div>
                  <div className="text-sm opacity-90">Artists</div>
                </motion.div>
                <motion.div 
                  className="bg-indigo-500 rounded-xl p-4 text-white text-center"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="text-2xl font-bold">Real</div>
                  <div className="text-sm opacity-90">Time Collab</div>
                </motion.div>
                <motion.div 
                  className="bg-blue-500 rounded-xl p-4 text-white text-center"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <div className="text-2xl font-bold">AI</div>
                  <div className="text-sm opacity-90">Matching</div>
                </motion.div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Music Revolution</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AI-powered artist matching</li>
                  <li>• Real-time collaboration tools</li>
                  <li>• Global music community</li>
                  <li>• Advanced audio processing</li>
                  <li>• Rights management system</li>
                </ul>
              </div>
            </motion.div>
          </div>
        );

      case 'case-serenity':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Product Screenshot */}
            <motion.div
              initial={{ x: -50, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <img 
                src="https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad1.png" 
                alt="Serenity Wellness Platform"
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Stats & Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="bg-indigo-500 rounded-xl p-4 text-white text-center"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(99, 102, 241, 0.4)",
                      "0 0 0 10px rgba(99, 102, 241, 0)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-2xl font-bold">25%</div>
                  <div className="text-sm opacity-90">Booking Boost</div>
                </motion.div>
                <div className="bg-purple-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Custom</div>
                  <div className="text-sm opacity-90">Solution</div>
                </div>
                <div className="bg-blue-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Overnight</div>
                  <div className="text-sm opacity-90">Results</div>
                </div>
                <div className="bg-teal-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Global</div>
                  <div className="text-sm opacity-90">Airline</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Booking Innovation</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Replaced failing off-the-shelf solution</li>
                  <li>• Custom booking flow design</li>
                  <li>• Enhanced customer experience</li>
                  <li>• 25% overnight booking increase</li>
                  <li>• Immediate impactful results</li>
                </ul>
              </div>
            </motion.div>
          </div>
        );

      case 'case-clinicbook':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Product Screenshot */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <img 
                src="https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png" 
                alt="ClinicBook Healthcare Platform"
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Stats & Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Web3</div>
                  <div className="text-sm opacity-90">Blockchain</div>
                </div>
                <div className="bg-cyan-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Token</div>
                  <div className="text-sm opacity-90">Economy</div>
                </div>
                <div className="bg-blue-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Crypto</div>
                  <div className="text-sm opacity-90">Rewards</div>
                </div>
                <div className="bg-indigo-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Beta</div>
                  <div className="text-sm opacity-90">Live</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Web3 Innovation</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Blockchain fitness tracking</li>
                  <li>• Native token creation</li>
                  <li>• Tokenomics model design</li>
                  <li>• Cryptocurrency earning system</li>
                  <li>• Successfully launched in beta</li>
                </ul>
              </div>
            </motion.div>
          </div>
        );

      case 'case-arabiancenter':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Product Screenshot */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <img 
                src="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter1.png" 
                alt="Arabian Center Digital Mall"
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Stats & Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm opacity-90">Weeks Build</div>
                </div>
                <div className="bg-red-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Digital</div>
                  <div className="text-sm opacity-90">Mall</div>
                </div>
                <div className="bg-pink-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">AI</div>
                  <div className="text-sm opacity-90">Experience</div>
                </div>
                <div className="bg-purple-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Customer</div>
                  <div className="text-sm opacity-90">Journey</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Mall Innovation</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Digital mall transformation</li>
                  <li>• AI-powered customer experience</li>
                  <li>• Interactive shopping journey</li>
                  <li>• Real-time analytics dashboard</li>
                  <li>• Omnichannel integration</li>
                </ul>
              </div>
            </motion.div>
          </div>
        );

      case 'case-alarabiya':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Product Screenshot */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <img 
                src="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png" 
                alt="Al Arabiya News Platform"
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Stats & Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">20</div>
                  <div className="text-sm opacity-90">Team Members</div>
                </div>
                <div className="bg-orange-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">COVID</div>
                  <div className="text-sm opacity-90">Remote Work</div>
                </div>
                <div className="bg-blue-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">News</div>
                  <div className="text-sm opacity-90">Platform</div>
                </div>
                <div className="bg-green-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">IBM</div>
                  <div className="text-sm opacity-90">Partnership</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2">News Innovation</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Led international team of 20</li>
                  <li>• Personalized news experience</li>
                  <li>• Ground-up platform redesign</li>
                  <li>• Adapted to remote work during COVID</li>
                  <li>• Enhanced brand loyalty</li>
                </ul>
              </div>
            </motion.div>
          </div>
        );

      case 'case-experience':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Product Screenshot */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <img 
                src="https://api.chilledsites.com/storage/v1/object/public/p0stman/experienceagift.png" 
                alt="Experience A Gift Platform"
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Stats & Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-yellow-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-sm opacity-90">Week Build</div>
                </div>
                <div className="bg-orange-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">AI</div>
                  <div className="text-sm opacity-90">Gifting</div>
                </div>
                <div className="bg-red-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Personal</div>
                  <div className="text-sm opacity-90">Design</div>
                </div>
                <div className="bg-pink-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">Experience</div>
                  <div className="text-sm opacity-90">Platform</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Gifting Revolution</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AI-driven personalized design</li>
                  <li>• Seamless booking experiences</li>
                  <li>• Custom gift recommendations</li>
                  <li>• Experience marketplace</li>
                  <li>• Social sharing features</li>
                </ul>
              </div>
            </motion.div>
          </div>
        );

      case 'portfolio-matrix':
        return (
          <div className="grid grid-cols-4 gap-3">
            {[
              { name: 'DoH Health', type: 'Gov Health', color: 'bg-blue-500', icon: <Bot className="w-4 h-4" /> },
              { name: 'Genieology', type: 'Agency', color: 'bg-green-500', icon: <Activity className="w-4 h-4" /> },
              { name: 'Harmony', type: 'Music', color: 'bg-pink-500', icon: <Music className="w-4 h-4" /> },
              { name: 'Etihad', type: 'Airlines', color: 'bg-indigo-500', icon: <Heart className="w-4 h-4" /> },
              { name: 'FAB Bank', type: 'Banking', color: 'bg-purple-500', icon: <TrendingUp className="w-4 h-4" /> },
              { name: 'BFIT Web3', type: 'Blockchain', color: 'bg-teal-500', icon: <Calendar className="w-4 h-4" /> },
              { name: 'Arabian Malls', type: 'Retail', color: 'bg-orange-500', icon: <Scissors className="w-4 h-4" /> },
              { name: 'Al Arabiya', type: 'News Media', color: 'bg-red-500', icon: <Globe className="w-4 h-4" /> }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ 
                  scale: 0, 
                  opacity: 0,
                  rotateY: -180
                }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  rotateY: 0
                }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  z: 50
                }}
                className={`${project.color} rounded-xl p-3 text-white text-center relative overflow-hidden cursor-pointer`}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-0"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.2 }}
                />
                
                <motion.div 
                  className="flex justify-center mb-2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  {project.icon}
                </motion.div>
                <div className="font-semibold text-xs mb-1">{project.name}</div>
                <div className="text-xs opacity-90">{project.type}</div>
              </motion.div>
            ))}
          </div>
        );

      case 'about-paul':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Photo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-2">
                  <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                    {/* Placeholder for Paul's photo */}
                    <Users className="w-24 h-24" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-3">
                  <Award className="w-8 h-8 text-yellow-800" />
                </div>
              </div>
            </motion.div>
            
            {/* Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• 20+ years product development</div>
                    <div>• Serial entrepreneur (3 exits)</div>
                    <div>• Bolt.new Ambassador</div>
                    <div>• AI development pioneer</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
                  <h4 className="font-semibold mb-2">Global Reach</h4>
                  <div className="text-sm space-y-1">
                    <div>🇬🇧 Based in UK</div>
                    <div>🇦🇪 Working from UAE</div>
                    <div>🌍 Serving clients worldwide</div>
                    <div>💻 100% remote collaboration</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );

      case 'cta-spectacular':
        return (
          <div className="text-center space-y-6 relative">
            {/* Fireworks effect */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 200],
                  y: [0, (Math.random() - 0.5) * 200]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                style={{
                  left: '50%',
                  top: '50%'
                }}
              />
            ))}
            
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity
                }}
                style={{
                  backgroundImage: "linear-gradient(45deg, transparent 30%, white 50%, transparent 70%)",
                  backgroundSize: "200% 200%"
                }}
              />
              
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 360]
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity },
                  rotateY: { duration: 4, repeat: Infinity }
                }}
              >
                <Rocket className="w-16 h-16 mx-auto mb-4" />
              </motion.div>
              
              <motion.div 
                className="text-3xl font-bold mb-4"
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 0px rgba(255,255,255,0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Ready to Launch?
              </motion.div>
              
              <div className="space-y-4 relative z-10">
                <motion.a
                  href="https://p0stman.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(255,255,255,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <span>Visit P0STMAN.com</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </motion.a>
                
                <motion.a
                  href="mailto:paul@p0stman.com"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors ml-4 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span>paul@p0stman.com</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        );

      case 'space-universe':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black overflow-hidden rounded-3xl">
            {/* Animated Grid */}
            <div className="absolute inset-0">
              <svg className="w-full h-full">
                <defs>
                  <pattern
                    id="space-grid"
                    width="100"
                    height="100"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 100 0 L 0 0 0 100"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.05)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#space-grid)" />
              </svg>
            </div>

            {/* Floating Stars */}
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute bg-white rounded-full ${i % 3 === 0 ? 'w-2 h-2' : 'w-1 h-1'}`}
                initial={{ 
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  opacity: [0, 1, 0.5, 1, 0],
                  scale: [0, 1, 0.8, 1.2, 0],
                  rotate: 360
                }}
                transition={{ 
                  duration: Math.random() * 8 + 4,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%'
                }}
              />
            ))}

            {/* Shooting Stars */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ 
                  x: -100, 
                  y: Math.random() * 200 + 50,
                  opacity: 0
                }}
                animate={{ 
                  x: 600,
                  y: Math.random() * 200 + 150,
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 3,
                  repeat: Infinity,
                  repeatDelay: 8,
                  ease: "linear"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-20 h-0.5 -translate-y-0.5" />
              </motion.div>
            ))}

            {/* Planets */}
            <motion.div
              className="absolute w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-2xl"
              style={{ left: '15%', top: '25%' }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
            </motion.div>

            <motion.div
              className="absolute w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-2xl"
              style={{ left: '75%', top: '15%' }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
            </motion.div>

            <motion.div
              className="absolute w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-2xl"
              style={{ left: '60%', top: '70%' }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
            </motion.div>

            {/* Nebula Clouds */}
            <motion.div
              className="absolute w-48 h-48 rounded-full opacity-20 blur-xl bg-gradient-to-br from-pink-500 to-purple-500"
              style={{ left: '20%', top: '40%' }}
              animate={{ 
                scale: [1, 1.2, 0.8, 1],
                opacity: [0.2, 0.4, 0.1, 0.2]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute w-32 h-32 rounded-full opacity-20 blur-xl bg-gradient-to-br from-blue-500 to-cyan-500"
              style={{ left: '70%', top: '20%' }}
              animate={{ 
                scale: [1, 1.3, 0.7, 1],
                opacity: [0.2, 0.3, 0.1, 0.2]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Central P0STMAN Logo */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: [0, 1.2, 1],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 2,
                ease: "easeOut"
              }}
            >
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Rocket className="w-16 h-16 text-white" />
                </div>
                
                {/* Orbiting Icons */}
                {[Sparkles, Zap, Globe, Bot].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0'
                    }}
                    animate={{
                      rotate: 360,
                      x: Math.cos((i * Math.PI) / 2) * 80 - 16,
                      y: Math.sin((i * Math.PI) / 2) * 80 - 16
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5
                    }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pulsing Rings */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ 
                  scale: [0, 3, 4],
                  opacity: [1, 0.5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: "easeOut"
                }}
                style={{
                  width: '200px',
                  height: '200px'
                }}
              />
            ))}

            {/* Floating Messages */}
            {[
              "🚀 Built with AI",
              "✨ Infinite Possibilities", 
              "🌟 Future of Development",
              "🛸 P0STMAN Universe"
            ].map((message, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-white text-sm"
                style={{ 
                  left: `${20 + i * 20}%`, 
                  top: `${30 + (i % 2) * 40}%` 
                }}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1, 1, 0],
                  y: [20, 0, 0, -20]
                }}
                transition={{ 
                  duration: 6,
                  delay: 2 + i * 1.5,
                  repeat: Infinity,
                  repeatDelay: 10
                }}
              >
                {message}
              </motion.div>
            ))}

            {/* Thank You Message */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4 }}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white max-w-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold mb-2">🌌 Thank You!</h3>
                <p className="text-sm opacity-80 mb-4">
                  Ready to build something amazing together?
                </p>
                <div className="flex items-center justify-center gap-4">
                  <motion.a
                    href="https://p0stman.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-500/20 px-4 py-2 rounded-lg text-sm hover:bg-blue-500/30 transition-colors"
                  >
                    Visit P0STMAN.com
                  </motion.a>
                  <motion.a
                    href="mailto:paul@p0stman.com"
                    whileHover={{ scale: 1.1 }}
                    className="bg-purple-500/20 px-4 py-2 rounded-lg text-sm hover:bg-purple-500/30 transition-colors"
                  >
                    Get In Touch
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">P0STMAN</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlayPause}
            className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <div className="text-sm text-gray-600">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 mb-4">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <motion.div
            className="bg-blue-600 h-1 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className={`w-full ${slides[currentSlide].id.startsWith('case-') || slides[currentSlide].id === 'about-paul' ? 'max-w-7xl' : 'max-w-6xl'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={slides[currentSlide].id.startsWith('case-') || slides[currentSlide].id === 'about-paul' ? 'h-full' : 'grid lg:grid-cols-2 gap-12 items-center'}
            >
              {/* Case Study Full Screen Layout */}
              {(slides[currentSlide].id.startsWith('case-') || slides[currentSlide].id === 'about-paul') ? (
                <div className="space-y-8">
                  {/* Header */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                      {slides[currentSlide].subtitle}
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                      {slides[currentSlide].title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                      {slides[currentSlide].content}
                    </p>
                  </motion.div>
                  
                  {/* Visual Content */}
                  <div className="flex justify-center">
                    <div className="w-full">
                      {renderVisual(slides[currentSlide].visual)}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Regular Layout for Other Slides */}
                  <div className="space-y-6">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                        {slides[currentSlide].subtitle}
                      </div>
                      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {slides[currentSlide].title}
                      </h1>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {slides[currentSlide].content}
                      </p>
                    </motion.div>

                    {currentSlide === slides.length - 1 && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
                      >
                        <a
                          href="https://p0stman.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                        >
                          <span>Explore P0STMAN</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href="mailto:paul@p0stman.com"
                          className="inline-flex items-center justify-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Get In Touch</span>
                        </a>
                      </motion.div>
                    )}
                  </div>

                  {/* Visual Content */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-md">
                      {renderVisual(slides[currentSlide].visual)}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center p-6">
        <button
          onClick={prevSlide}
          className="p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-50"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-50"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Hello;