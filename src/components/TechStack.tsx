import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: string;
  description: string;
  usage: string;
}

interface TechStackProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

const techStack: TechItem[] = [
  {
    name: 'Claude',
    icon: '/tech-icons/claude.svg',
    description: 'Anthropic Claude AI',
    usage: 'Advanced reasoning, long-context analysis, vision processing, and coding assistance'
  },
  {
    name: 'OpenAI',
    icon: '/tech-icons/openai.svg',
    description: 'OpenAI GPT-4',
    usage: 'Conversational AI, function calling, embeddings, and real-time responses'
  },
  {
    name: 'Google',
    icon: '/tech-icons/google.svg',
    description: 'Google Gemini',
    usage: 'Multi-modal AI, search integration, and enterprise-grade processing'
  },
  {
    name: 'Grok',
    icon: '/tech-icons/grok.svg',
    description: 'xAI Grok',
    usage: 'Real-time data access and conversational AI with personality'
  },
  {
    name: 'ElevenLabs',
    icon: '/tech-icons/elevenlabs.svg',
    description: 'ElevenLabs Voice AI',
    usage: 'Natural voice synthesis, conversational AI agents, and real-time voice processing'
  },
  {
    name: 'Supabase',
    icon: '/tech-icons/supabase.svg',
    description: 'Supabase Platform',
    usage: 'PostgreSQL database, authentication, real-time subscriptions, edge functions, and storage'
  },
  {
    name: 'Vercel',
    icon: '/tech-icons/vercel.svg',
    description: 'Vercel Deployment',
    usage: 'Edge computing, serverless functions, instant deployments, and global CDN'
  }
];

export default function TechStack({
  eyebrow = 'AI Building Blocks',
  title = 'The Technology Stack We Build With',
  description,
  className = ''
}: TechStackProps) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className={`py-24 ${className}`}>
      <div className="container mx-auto px-8 max-w-[90rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Eyebrow */}
          <div className="mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
              {eyebrow}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-gray-100 leading-tight tracking-tight mb-6">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
        </motion.div>

        {/* Tech Icons Row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 overflow-visible">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              style={{ position: 'relative' }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:shadow-lg transition-all duration-300 cursor-pointer">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </div>

              {/* Tooltip */}
              {hoveredTech === tech.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '16px',
                    zIndex: 50,
                    pointerEvents: 'none'
                  }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-4 w-64 border border-gray-200 dark:border-gray-700 relative">
                    {/* Arrow */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                      <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-900"></div>
                    </div>

                    {/* Content */}
                    <div className="text-center whitespace-normal">
                      <h4 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">{tech.description}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {tech.usage}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Helper Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-400 font-light">
            Hover over each icon to learn how we use it
          </p>
        </motion.div>
      </div>
    </section>
  );
}
