import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, CheckCircle, Bot, ArrowRight } from 'lucide-react';

interface AIAgent {
  name: string;
  description: string;
  screenshot: string;
  gradient: string;
  features: string[];
}

const aiAgents: AIAgent[] = [
  {
    name: 'Clarity',
    description: 'Mental wellness & mindfulness coach',
    screenshot: '/agents/clarity.png',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Daily check-ins', 'Mood tracking', 'Guided exercises']
  },
  {
    name: 'FitLink',
    description: 'Personal fitness & nutrition companion',
    screenshot: '/agents/fitlink.png',
    gradient: 'from-green-500 to-emerald-500',
    features: ['Workout plans', 'Meal tracking', 'Progress insights']
  },
  {
    name: 'Mamori',
    description: 'AI guardian for child safety online',
    screenshot: '/agents/mamori.png',
    gradient: 'from-purple-500 to-pink-500',
    features: ['Content filtering', 'Activity monitoring', 'Safe browsing']
  },
  {
    name: 'Pathfinder',
    description: 'Career guidance & skill development',
    screenshot: '/agents/pathfinder.png',
    gradient: 'from-orange-500 to-red-500',
    features: ['Career planning', 'Skill assessments', 'Job matching']
  }
];

export default function AIAgentShowcaseV3() {
  return (
    <section className="py-40 md:py-48 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-24"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smartphone className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-medium text-sm">AI Agents in Action</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 leading-tight">
            Production-Ready AI Experiences
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            From concept to production. Built with cutting-edge models, designed for real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {aiAgents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Mobile phone frame */}
              <div className="relative mx-auto" style={{ maxWidth: '280px' }}>
                {/* Phone bezel/frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10" />

                  {/* Screen */}
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-10`} />

                    {/* Screenshot */}
                    <img
                      src={agent.screenshot}
                      alt={`${agent.name} AI Agent`}
                      className="w-full h-full object-cover object-top"
                    />

                    {/* Hover overlay with info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white font-semibold text-lg mb-2">{agent.name}</h3>
                      <p className="text-white/90 text-sm mb-3">{agent.description}</p>
                      <ul className="space-y-1">
                        {agent.features.map((feature, i) => (
                          <li key={i} className="text-white/80 text-xs flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
                </div>

                {/* Agent name below phone */}
                <div className="mt-6 text-center">
                  <h3 className="text-gray-900 font-semibold text-lg mb-1">{agent.name}</h3>
                  <p className="text-gray-600 text-sm font-light">{agent.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 font-light"
          >
            <Bot className="w-5 h-5" />
            Build Your AI Agent
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
