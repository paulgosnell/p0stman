import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Sparkles, Zap } from 'lucide-react';

const capabilities = [
  {
    title: "Smart Code Generation",
    description: "AI-powered development that writes clean, efficient code",
    features: [
      "Production-ready code",
      "Best practices built-in",
      "Automated testing",
      "Documentation generation"
    ]
  },
  {
    title: "Intelligent Design",
    description: "AI-assisted UI/UX design for optimal user experience",
    features: [
      "Responsive layouts",
      "Accessibility built-in",
      "Performance optimized",
      "Modern aesthetics"
    ]
  },
  {
    title: "Automated Testing",
    description: "Comprehensive testing powered by AI",
    features: [
      "Unit testing",
      "Integration testing",
      "Performance testing",
      "Security scanning"
    ]
  },
  {
    title: "Smart Optimization",
    description: "AI-driven performance and security enhancements",
    features: [
      "Code optimization",
      "Security hardening",
      "Performance tuning",
      "SEO optimization"
    ]
  }
];

export default function AICapabilitiesSlide() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-purple-900 text-white rounded-3xl p-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
              opacity: [0.5, 0]
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bot className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold">AI-Powered Development</h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the power of AI in every aspect of your project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                {index === 0 ? <Bot className="w-6 h-6 text-purple-400" /> :
                 index === 1 ? <Brain className="w-6 h-6 text-purple-400" /> :
                 index === 2 ? <Sparkles className="w-6 h-6 text-purple-400" /> :
                 <Zap className="w-6 h-6 text-purple-400" />}
                <h3 className="text-xl font-semibold">{capability.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{capability.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {capability.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}