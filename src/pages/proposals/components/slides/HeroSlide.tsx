import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Rocket } from 'lucide-react';

const stats = [
  { value: '70%', label: 'Faster Development', icon: <Zap className="w-6 h-6" /> },
  { value: '50%', label: 'Cost Reduction', icon: <Bot className="w-6 h-6" /> },
  { value: '100%', label: 'Success Rate', icon: <Rocket className="w-6 h-6" /> }
];

export default function HeroSlide() {
  return (
    <div className="min-h-[60vh] relative overflow-hidden rounded-3xl">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-blue-900/70" />
      </div>

      <div className="relative z-10 p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Transform Your Ideas Into
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Reality</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Using AI-powered development, we deliver high-quality digital products in weeks, not months. Experience the future of software development.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="text-blue-400 mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated gradient orb */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] transform -translate-y-1/2 translate-x-1/2">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  );
}