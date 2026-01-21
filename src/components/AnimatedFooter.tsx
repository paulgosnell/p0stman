import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  MapPin, 
  Phone, 
  Zap, 
  Bot, 
  Sparkles, 
  ArrowUp,
  ExternalLink,
  Code,
  Rocket,
  Brain,
  Globe,
  Calendar,
  MessageSquare,
  Monitor,
  Smartphone,
  HeadphonesIcon,
  RefreshCw,
  BookOpen
} from 'lucide-react';
import SpaceEasterEgg from './SpaceEasterEgg';

// Floating particle component
const FloatingParticle = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
      initial={{ 
        x: Math.random() * window.innerWidth, 
        y: window.innerHeight + 100,
        opacity: 0 
      }}
      animate={{ 
        y: -100, 
        opacity: [0, 1, 0],
        x: Math.random() * window.innerWidth
      }}
      transition={{ 
        duration: Math.random() * 10 + 15,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

// Neural network connection lines
const NeuralConnection = ({ startX, startY, endX, endY, delay = 0 }) => {
  return (
    <motion.line
      x1={startX}
      y1={startY}
      x2={endX}
      y2={endY}
      stroke="url(#gradient)"
      strokeWidth="1"
      opacity="0.3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ 
        duration: 2,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
};

// Animated background grid
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Neural network connections */}
        <NeuralConnection startX={100} startY={100} endX={300} endY={200} delay={0} />
        <NeuralConnection startX={300} startY={200} endX={500} endY={150} delay={0.5} />
        <NeuralConnection startX={500} startY={150} endX={700} endY={250} delay={1} />
        <NeuralConnection startX={200} startY={300} endX={400} endY={100} delay={1.5} />
        <NeuralConnection startX={600} startY={300} endX={800} endY={180} delay={2} />
      </svg>
    </div>
  );
};

// Floating tech icons
const FloatingIcon = ({ icon: Icon, delay = 0, x = 0, y = 0 }) => {
  return (
    <motion.div
      className="absolute text-blue-400/20"
      initial={{ x, y, rotate: 0 }}
      animate={{ 
        y: y - 20,
        rotate: 360,
        scale: [1, 1.2, 1]
      }}
      transition={{ 
        duration: 8,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Icon className="w-8 h-8" />
    </motion.div>
  );
};

export default function AnimatedFooter({ onOpenProjectConfigurator }: { onOpenProjectConfigurator?: () => void }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSpaceEasterEgg, setShowSpaceEasterEgg] = useState(false);
  const [easterEggClicks, setEasterEggClicks] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:hello@p0stman.com', label: 'Email', color: 'hover:text-red-400' },
    { icon: Linkedin, href: 'https://linkedin.com/in/pgosnell', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Github, href: 'https://github.com/paulgosnell', label: 'GitHub', color: 'hover:text-purple-400' },
    { icon: Twitter, href: 'https://twitter.com/pgosnell', label: 'Twitter', color: 'hover:text-cyan-400' }
  ];

  const quickLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Process', href: '/process' },
    { label: 'Proposals', href: '/proposals' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  const services = [
    { label: 'Founder Launch Package', icon: Zap, href: '/founder-launch-package' },
    { label: 'AI Platform Development', icon: Bot, href: '/ai-platform-development' },
    { label: 'Fractional CPO', icon: Rocket, href: '/fractional-cpo' },
    { label: 'Product Strategy', icon: Brain, href: '/product-strategy' },
    { label: 'Digital Transformation', icon: Globe, href: '/digital-transformation' },
    { label: 'Website Development', icon: Monitor, href: '/website' },
    { label: 'AI Agents', icon: Bot, href: '/ai-agents' },
    { label: 'Mobile App Development', icon: Smartphone, href: '/mobile-app' },
    { label: 'Retainer Services', icon: RefreshCw, href: '/retainer' },
    { label: 'Support Services', icon: HeadphonesIcon, href: '/support' }
  ];

  const guides = [
    { label: 'All Guides', href: '/guides' },
    { label: 'AI Development Costs', href: '/guides/ai-agent-development-cost-timeline-guide-2025.html' },
    { label: 'How AI Agents Work', href: '/guides/how-ai-agents-work-explained-for-non-technical-founders-2025.html' },
    { label: 'ChatGPT vs Custom AI', href: '/guides/chatgpt-vs-custom-ai-agent-guide-2025.html' },
    { label: 'Voice AI Platforms', href: '/guides/voice-ai-platforms-elevenlabs-livekit-custom-comparison-2025.html' },
    { label: 'AI Security & Privacy', href: '/guides/ai-agent-security-data-privacy-guide-2025.html' },
    { label: 'How to Hire AI Agency', href: '/guides/how-to-hire-ai-development-agency-2025.html' },
    { label: 'Building SaaS Roadmap', href: '/guides/building-saas-roadmap-2025.html' },
    { label: 'AI Agent vs Chatbot', href: '/guides/ai-agent-vs-chatbot-comparison-guide-2025.html' },
    { label: 'AI Model Selection', href: '/guides/ai-model-selection-guide-claude-gpt4-gemini-2025.html' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <AnimatedGrid />
      
      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.5} />
      ))}

      {/* Floating Tech Icons */}
      <FloatingIcon icon={Bot} delay={0} x={100} y={100} />
      <FloatingIcon icon={Code} delay={2} x={300} y={150} />
      <FloatingIcon icon={Zap} delay={4} x={500} y={120} />
      <FloatingIcon icon={Sparkles} delay={6} x={700} y={180} />
      <FloatingIcon icon={Brain} delay={8} x={900} y={140} />

      {/* Mouse follower effect */}
      <motion.div
        className="absolute pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <div className="w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12 mb-16">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      POSTMAN
                    </h3>
                    <p className="text-gray-400 text-sm">AI-Native Product Studio</p>
                  </div>
                </motion.div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Transforming ideas into AI-powered products. From MVP to enterprise scale, 
                  I help organizations embrace the future of development.
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full border border-gray-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-300">Available for Projects</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full border border-gray-200">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">Dubai, UAE</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full border border-gray-200">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">Norwich, UK</span>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.a
                  href="mailto:hello@p0stman.com"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-4 rounded-xl border border-gray-200 hover:border-blue-400/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email Me</p>
                      <p className="text-sm text-gray-400">hello@p0stman.com</p>
                    </div>
                  </div>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm p-4 rounded-xl border border-gray-200 hover:border-green-400/50 transition-all group"
                  onClick={() => {
                    if (onOpenProjectConfigurator) {
                      onOpenProjectConfigurator();
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <Sparkles className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Start Project</p>
                      <p className="text-sm text-gray-400">Build with AI</p>
                    </div>
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-purple-400" />
                Services
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service.label}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Link to={service.href} className="flex items-center gap-3 hover:text-white transition-colors">
                      <service.icon className="w-4 h-4 text-blue-400" />
                      <span>{service.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Guides */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-400" />
                Guides
              </h4>
              <div className="space-y-3">
                {guides.map((guide, index) => (
                  <motion.a
                    key={guide.label}
                    href={guide.href}
                    whileHover={{ x: 5 }}
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {guide.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-200"
          >
            <div className="flex items-center gap-6 mb-4 sm:mb-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-gray-200 hover:border-white/30 transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="text-center sm:text-right">
              <motion.p 
                className="text-gray-400 text-sm cursor-pointer hover:text-blue-400 transition-colors"
                onClick={() => {
                  const newClicks = easterEggClicks + 1;
                  setEasterEggClicks(newClicks);
                  if (newClicks >= 5) {
                    setShowSpaceEasterEgg(true);
                    setEasterEggClicks(0);
                  }
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={easterEggClicks > 0 ? { 
                  color: ['#9CA3AF', '#3B82F6', '#9CA3AF'],
                  scale: [1, 1.05, 1]
                } : {}}
                transition={{ duration: 0.3 }}
              >
                © 2025 POSTMAN. Built with AI, designed for the future.
                {easterEggClicks > 0 && easterEggClicks < 5 && (
                  <span className="ml-2 text-blue-400">
                    {'✨'.repeat(easterEggClicks)}
                  </span>
                )}
              </motion.p>
              <p className="text-gray-500 text-xs mt-1">
                Chilled Ventures L.L.C-FZ • Dubai, UAE
              </p>
            </div>
          </motion.div>


        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Easter Egg Trigger Button */}
      <motion.button
        onClick={() => setShowSpaceEasterEgg(true)}
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-30 group"
        whileHover={{ 
          scale: 1.1,
          rotate: 360,
          boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)"
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-6 h-6 text-white group-hover:text-yellow-300 transition-colors" />
        </motion.div>
        
        {/* Pulsing ring */}
        <motion.div
          className="absolute inset-0 border-2 border-purple-400 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.8, 0, 0.8]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </motion.button>

      {/* Space Easter Egg */}
      <SpaceEasterEgg 
        isOpen={showSpaceEasterEgg} 
        onClose={() => setShowSpaceEasterEgg(false)} 
      />
    </footer>
  );
}