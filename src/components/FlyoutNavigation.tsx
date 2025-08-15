import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Menu,
  X,
  Bot,
  Rocket,
  Brain,
  Globe,
  Target,
  Code,
  Building2,
  Zap,
  Users,
  ArrowRight,
  Sparkles,
  Star,
  Home
} from 'lucide-react';

// Floating particle for the nav
const NavParticle = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
      initial={{ 
        x: Math.random() * 300, 
        y: Math.random() * 400,
        opacity: 0 
      }}
      animate={{ 
        y: [null, -20, null],
        opacity: [0, 1, 0],
        scale: [0, 1, 0]
      }}
      transition={{ 
        duration: 3,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

const navigationItems = [
  {
    category: "Services",
    items: [
      { 
        label: 'AI Platform Development', 
        href: '/ai-platform-development', 
        icon: Bot, 
        description: 'Custom AI solutions & platforms',
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        label: 'Fractional CPO', 
        href: '/fractional-cpo', 
        icon: Rocket, 
        description: 'Strategic product leadership',
        color: 'from-purple-500 to-pink-500'
      },
      { 
        label: 'Product Strategy', 
        href: '/product-strategy', 
        icon: Brain, 
        description: 'Vision & roadmap development',
        color: 'from-green-500 to-emerald-500'
      },
      { 
        label: 'Digital Transformation', 
        href: '/digital-transformation', 
        icon: Globe, 
        description: 'Enterprise modernization',
        color: 'from-orange-500 to-red-500'
      }
    ]
  },
  {
    category: "Portfolio",
    items: [
      { 
        label: 'All Services', 
        href: '/services', 
        icon: Target, 
        description: 'Complete service portfolio',
        color: 'from-blue-500 to-indigo-500'
      },
      { 
        label: 'Case Studies', 
        href: '/case-studies', 
        icon: Building2, 
        description: 'Real projects & results',
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        label: 'Process', 
        href: '/process', 
        icon: Target, 
        description: 'How I work with clients',
        color: 'from-teal-500 to-blue-500'
      }
    ]
  }
];

export default function FlyoutNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onHoverStart={() => setIsOpen(true)}
        className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5 group-hover:text-blue-300 transition-colors" />
          )}
        </motion.div>
      </motion.button>

      {/* Flyout Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-12 right-0 w-96 bg-gradient-to-br from-gray-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 overflow-hidden"
              onMouseLeave={() => setIsOpen(false)}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Floating Particles */}
                {Array.from({ length: 15 }).map((_, i) => (
                  <NavParticle key={i} delay={i * 0.2} />
                ))}

                {/* Gradient Orbs */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full blur-xl"
                  animate={{ 
                    scale: [1.2, 1, 1.2],
                    rotate: -360
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6"
                >
                  <Link 
                    to="/" 
                    className="flex items-center gap-3 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Home className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold group-hover:text-blue-300 transition-colors">
                        P0STMAN
                      </h3>
                      <p className="text-gray-400 text-xs">AI-Native Product Studio</p>
                    </div>
                  </Link>
                </motion.div>

                {/* Navigation Categories */}
                {navigationItems.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                    className="mb-6 last:mb-0"
                  >
                    <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Star className="w-3 h-3" />
                      {category.category}
                    </h4>
                    
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                        >
                          <Link
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            onMouseEnter={() => setHoveredItem(item.href)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className="group relative block p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                          >
                            <div className="flex items-center gap-3">
                              <motion.div
                                className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <item.icon className="w-5 h-5 text-white" />
                              </motion.div>
                              
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
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
                                    <ArrowRight className="w-4 h-4 text-blue-400" />
                                  </motion.div>
                                </div>
                                <p className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors">
                                  {item.description}
                                </p>
                              </div>
                            </div>

                            {/* Hover Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ 
                                opacity: hoveredItem === item.href ? 1 : 0,
                                scale: hoveredItem === item.href ? 1 : 0.8
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Footer CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4 border-t border-white/10"
                >
                  <motion.a
                    href="mailto:hello@p0stman.com"
                    className="flex items-center justify-center gap-2 w-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Sparkles className="w-4 h-4 group-hover:text-yellow-300 transition-colors" />
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}