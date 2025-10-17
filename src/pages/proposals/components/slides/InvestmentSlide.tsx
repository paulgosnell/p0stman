import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Users, ArrowRight, Bot, Zap, Code } from 'lucide-react';

const comparisons = [
  {
    title: "Traditional Agency",
    cost: "$50,000+",
    time: "3-6 months",
    team: "3-5 developers",
    features: [
      "Multiple meetings",
      "Complex processes",
      "High overhead",
      "Slow iterations"
    ]
  },
  {
    title: "Freelancer",
    cost: "$15,000+",
    time: "2-4 months",
    team: "1 developer",
    features: [
      "Variable quality",
      "Limited availability",
      "Basic features",
      "Minimal support"
    ]
  },
  {
    title: "Our Solution",
    cost: "$3,000-$10,000",
    time: "2-4 weeks",
    team: "AI-powered team",
    features: [
      "Rapid development",
      "Premium quality",
      "AI automation",
      "30 days support"
    ],
    highlighted: true
  }
];

export default function InvestmentSlide() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-green-900 text-white rounded-3xl p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <DollarSign className="w-8 h-8 text-green-400" />
          <h2 className="text-3xl font-bold">Investment & ROI</h2>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Compare our AI-powered approach with traditional development methods.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {comparisons.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative ${option.highlighted ? 'mt-[-2rem] mb-[-2rem]' : ''}`}
          >
            {option.highlighted && (
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl transform rotate-3 animate-pulse" />
            )}
            <div className={`relative h-full bg-gray-50 backdrop-blur-sm rounded-xl p-6 border ${option.highlighted ? 'border-green-500/50' : 'border-gray-200'}`}>
              <div className="flex items-center gap-3 mb-6">
                {index === 0 ? <Users className="w-6 h-6 text-blue-400" /> :
                 index === 1 ? <Code className="w-6 h-6 text-purple-400" /> :
                 <Bot className="w-6 h-6 text-green-400" />}
                <h3 className="text-xl font-semibold">{option.title}</h3>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-400">Investment</div>
                    <div className="text-2xl font-bold">{option.cost}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-400">Timeline</div>
                    <div className="text-2xl font-bold">{option.time}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-400">Team</div>
                    <div className="text-2xl font-bold">{option.team}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {option.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${option.highlighted ? 'bg-green-400' : 'bg-gray-400'}`} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {option.highlighted && (
                <div className="mt-8">
                  <button
                    onClick={() => {}}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}