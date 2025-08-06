import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Clock, DollarSign, Users, Shield } from 'lucide-react';

const reasons = [
  {
    icon: <Bot className="w-8 h-8 text-blue-400" />,
    title: "AI-First Approach",
    description: "Leverage cutting-edge AI tools for faster, smarter development"
  },
  {
    icon: <Clock className="w-8 h-8 text-green-400" />,
    title: "Rapid Delivery",
    description: "2-4 week delivery cycles with continuous updates"
  },
  {
    icon: <DollarSign className="w-8 h-8 text-purple-400" />,
    title: "Cost Effective",
    description: "50% cost reduction compared to traditional agencies"
  },
  {
    icon: <Users className="w-8 h-8 text-pink-400" />,
    title: "Expert Team",
    description: "20+ years of product development experience"
  },
  {
    icon: <Shield className="w-8 h-8 text-indigo-400" />,
    title: "Quality First",
    description: "Production-ready code with best practices built-in"
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Future Ready",
    description: "Modern tech stack and scalable architecture"
  }
];

export default function WhyUsSlide() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-3xl p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We combine AI technology with decades of experience to deliver exceptional results.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-300">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}