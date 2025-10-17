import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Bot, Sparkles } from 'lucide-react';

interface PhaseTitleSlideProps {
  phase: 1 | 2 | 3;
}

const phaseData = {
  1: {
    icon: Zap,
    title: "Phase 1: Minimum Viable Product",
    subtitle: "Internal Staff & Vendors",
    gradient: "from-blue-600 to-indigo-600",
    iconColor: "text-blue-400"
  },
  2: {
    icon: Bot,
    title: "Phase 2: Intermediate Enhancements",
    subtitle: "Advanced Features & AI Integration",
    gradient: "from-purple-600 to-pink-600",
    iconColor: "text-purple-400"
  },
  3: {
    icon: Sparkles,
    title: "Phase 3: Advanced Features",
    subtitle: "Comprehensive Platform Completion",
    gradient: "from-green-600 to-teal-600",
    iconColor: "text-green-400"
  }
};

export default function PhaseTitleSlide({ phase }: PhaseTitleSlideProps) {
  const { icon: Icon, title, subtitle, gradient, iconColor } = phaseData[phase];

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-6">
          <Icon className={`w-10 h-10 ${iconColor}`} />
        </div>
        
        <h2 className={`text-5xl font-bold bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}>
          {title}
        </h2>
        
        <p className="text-2xl text-gray-400">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
}