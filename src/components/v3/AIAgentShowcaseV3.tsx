import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CheckCircle } from 'lucide-react';

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
    description: 'Get AI clarity in 5 minutes',
    screenshot: '/agents/clarity.png',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Voice agent lead gen', 'Victoria AI coach', 'Hidden value discovery']
  },
  {
    name: 'FitLink',
    description: 'AI-tailored health coaching via Telegram',
    screenshot: '/agents/fitlink.png',
    gradient: 'from-green-500 to-emerald-500',
    features: ['Oura & Strava integration', 'Wearable data insights', 'Personalized coaching']
  },
  {
    name: 'Mamori',
    description: 'Clear, trustworthy health information for everyone',
    screenshot: '/agents/mamori.png',
    gradient: 'from-purple-500 to-pink-500',
    features: ['Analyzes health questions', 'Food labels & blood tests', 'Plain English insights']
  },
  {
    name: 'Pathfinder',
    description: 'AI coach for parents of ADHD children',
    screenshot: '/agents/pathfinder.png',
    gradient: 'from-orange-500 to-red-500',
    features: ['Evidence-based support', 'Crisis-safe', 'GDPR compliant']
  }
];

export default function AIAgentShowcaseV3() {
  return (
    <section className="py-40 md:py-48 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-24"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">AI Agents in Action</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-gray-100 leading-tight">
            Production-Ready AI Experiences
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg font-light max-w-3xl mx-auto leading-relaxed">
            Frontier AI systems in production. Voice agents with ElevenLabs, reasoning models from Claude and OpenAI, RAG with extended memory, multi-API orchestration across Telegram, Oura, Strava.
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
              {/* Plain image container */}
              <div className="relative overflow-hidden rounded-xl aspect-[9/19.5] shadow-lg">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
