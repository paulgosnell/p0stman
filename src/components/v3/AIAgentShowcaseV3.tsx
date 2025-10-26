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
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className="py-40 md:py-48 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split Layout: Cards on Left, Text on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Fanned Out Cards */}
          <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
            {aiAgents.map((agent, index) => {
              // Calculate fan positions and rotations
              const totalCards = aiAgents.length;
              const centerIndex = (totalCards - 1) / 2;
              const offset = index - centerIndex;
              const rotation = offset * 8; // Degrees of rotation per card
              const translateX = offset * 80; // Horizontal spread
              const translateY = Math.abs(offset) * 20; // Slight vertical offset for depth

              return (
                <motion.div
                  key={agent.name}
                  initial={{
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 0.9,
                    opacity: 0
                  }}
                  whileInView={{
                    x: translateX,
                    y: -translateY,
                    rotate: rotation,
                    scale: 1,
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{
                    scale: 1.1,
                    y: -translateY - 30,
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group absolute"
                  style={{ zIndex: hoveredIndex === index ? 100 : index }}
                >
                  {/* Phone Card */}
                  <div className="relative w-[200px] md:w-[240px] aspect-[9/19.5] rounded-3xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900 border-8 border-gray-900 dark:border-gray-700">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-10`} />

                    {/* Screenshot */}
                    <img
                      src={agent.screenshot}
                      alt={`${agent.name} AI Agent`}
                      className="w-full h-full object-cover object-top"
                    />

                    {/* Hover overlay with info */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
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
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">AI Agents in Action</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 leading-tight">
              Production-Ready AI Experiences
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed">
              Frontier AI systems in production. Voice agents with ElevenLabs, reasoning models from Claude and OpenAI, RAG with extended memory, multi-API orchestration across Telegram, Oura, Strava.
            </p>

            {/* Agent List */}
            <div className="space-y-6 pt-4">
              {aiAgents.map((agent, index) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-transparent hover:border-blue-600 dark:hover:border-blue-400 pl-4 transition-all duration-200"
                >
                  <h3 className="text-xl font-light text-gray-900 dark:text-gray-100 mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {agent.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {agent.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
