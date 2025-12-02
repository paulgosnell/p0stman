import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

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

interface TooltipState {
  tech: TechItem;
  x: number;
  y: number;
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
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const handleMouseEnter = (tech: TechItem, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      tech,
      x: rect.left + rect.width / 2,
      y: rect.top
    });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

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
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Icon Container - event handlers on this element */}
              <div
                className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:shadow-lg transition-all duration-300 cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(tech, e)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tooltip rendered via portal */}
        {tooltip && createPortal(
          <div
            style={{
              position: 'fixed',
              bottom: window.innerHeight - tooltip.y + 12,
              left: tooltip.x,
              transform: 'translateX(-50%)',
              zIndex: 9999,
              pointerEvents: 'none'
            }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-4 w-64 border border-gray-200 dark:border-gray-700">
              {/* Arrow */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderTop: '8px solid white'
                }}
              />
              {/* Content */}
              <div className="text-center">
                <h4 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">{tooltip.tech.description}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {tooltip.tech.usage}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}

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
