import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import AnimatedTitle from './AnimatedTitle';

export default function HeroHeading() {
  const { t } = useLanguage();
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }}
        className="flex items-center gap-2 mb-4"
      >
        <Bot className="w-5 h-5 text-blue-400" />
        <span className="text-blue-400 font-medium text-sm tracking-wide">AI-Powered Digital Agency</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="transform-gpu"
      >
        <AnimatedTitle />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="space-y-4"
      >
        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          Get your digital product built in weeks, not months,
          using AI-powered development. Save up to 70% compared to traditional agencies while getting 
          better results faster.
        </p>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/15">
            <div className="text-2xl md:text-2xl font-bold text-blue-400">50+</div>
            <div className="text-xs text-gray-400">Projects Delivered</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/15">
            <div className="text-2xl md:text-2xl font-bold text-purple-400">70%</div>
            <div className="text-xs text-gray-400">Cost Savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/15">
            <div className="text-2xl md:text-2xl font-bold text-green-400">100%</div>
            <div className="text-xs text-gray-400">Success Rate</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}