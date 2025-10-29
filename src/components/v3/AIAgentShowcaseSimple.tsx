import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Smartphone } from 'lucide-react';
import CardCarousel from './CardCarousel';

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

export default function AIAgentShowcaseSimple() {
  // Create phone card component
  const createPhoneCard = (agent: AIAgent, index: number) => (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative w-[200px] md:w-[240px] aspect-[9/19.5] rounded-3xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900 border-8 border-gray-900 dark:border-gray-700">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-10`} />

        {/* Screenshot */}
        <img
          src={agent.screenshot}
          alt={`${agent.name} AI Agent`}
          className="w-full h-full object-cover object-top"
        />

        {/* Info overlay */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="bg-white/90 dark:bg-gray-900/90 rounded-lg p-3">
            <h3 className="text-gray-900 dark:text-white font-semibold text-base mb-1">{agent.name}</h3>
            <p className="text-gray-800 dark:text-white/90 text-xs mb-2">{agent.description}</p>
            <ul className="space-y-1">
              {agent.features.map((feature, i) => (
                <li key={i} className="text-gray-700 dark:text-white/80 text-[10px] flex items-center gap-1">
                  <CheckCircle className="w-2.5 h-2.5 text-green-500 dark:text-green-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // Carousel cards for mobile
  const carouselCards = aiAgents.map((agent, index) => (
    <div key={agent.name} className="flex items-center justify-center h-full px-4">
      {createPhoneCard(agent, index)}
    </div>
  ));

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Smartphone className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold">AI Agents in Action</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Production-ready AI agents powered by frontier models. Voice interfaces, multi-API orchestration, and intelligent data processing.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <CardCarousel
              cards={carouselCards}
              cardsPerView={{
                mobile: 1,
                tablet: 1,
                desktop: 1
              }}
            />
          </div>

          {/* Desktop 4-Column Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
        {aiAgents.map((agent, index) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            {createPhoneCard(agent, index)}
          </motion.div>
        ))}
          </div>
        </div>
      </div>
    </section>
  );
}
