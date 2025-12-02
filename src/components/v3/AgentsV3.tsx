import React, { useMemo } from 'react';
import { Mic, MessageSquare, Code, Globe, Smartphone, Settings } from 'lucide-react';
import CardCarousel from './CardCarousel';

interface AgentCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string;
}

// Shuffle array function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const agents: AgentCard[] = [
  {
    icon: <Mic className="w-10 h-10 text-gray-700" strokeWidth={1.5} />,
    title: 'Voice Agents',
    description: 'ElevenLabs + LiveKit powered. Lead generation, customer support, information delivery. Sounds human, closes deals.',
    tech: 'ElevenLabs, LiveKit'
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-gray-700" strokeWidth={1.5} />,
    title: 'Chat Agents',
    description: 'AI SDK + custom integrations. Support assistants, interactive demos, product walkthroughs. Deployed in hours.',
    tech: 'AI SDK, Custom'
  },
  {
    icon: <Code className="w-10 h-10 text-gray-700" strokeWidth={1.5} />,
    title: 'Code Agents',
    description: 'Multi-model code generation. Website builders, feature automation, database migrations. chilledsites.com is live proof.',
    tech: 'Claude, OpenAI, Gemini, Grok'
  },
  {
    icon: <Globe className="w-10 h-10 text-gray-700" strokeWidth={1.5} />,
    title: 'Websites',
    description: 'SaaS platforms, dashboards, e-commerce, landing pages, CMS. Production-ready in weeks, not months. SEO optimized.',
    tech: 'React, Next.js, Supabase, Tailwind'
  },
  {
    icon: <Smartphone className="w-10 h-10 text-gray-700" strokeWidth={1.5} />,
    title: 'Mobile Apps',
    description: 'PWAs, native apps, mobile web. iOS and Android. Online/offline sync. App store deployment included.',
    tech: 'React Native, PWA, Flutter'
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-700" strokeWidth={1.5} />,
    title: 'RAG Systems',
    description: 'Retrieval-Augmented Generation at scale. Knowledge agents trained on your data — private, secure, and lightning-fast. Turns chaos into context, and context into answers.',
    tech: 'Vector DBs, Custom Knowledge Bases, Private & Secure'
  }
];

export default function AgentsV3() {
  // Shuffle agents on component mount
  const shuffledAgents = useMemo(() => shuffleArray(agents), []);

  const cardElements = shuffledAgents.map((agent, index) => (
    <div
      key={index}
      className="group rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 space-y-6 h-full"
    >
      {/* Icon */}
      <div className="flex items-center justify-start">
        {agent.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100">
        {agent.title}
      </h3>

      {/* Description */}
      <p className="text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
        {agent.description}
      </p>

      {/* Tech Stack */}
      <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
          {agent.tech}
        </p>
      </div>
    </div>
  ));

  return (
    <section id="agents" className="py-40 md:py-48 bg-white dark:bg-gray-900">
      {/* Section Heading - Contained */}
      <div className="max-w-6xl mx-auto px-6 md:px-0 mb-20 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 leading-tight">
          What We Build
        </h2>
      </div>

      {/* Full-width Carousel */}
      <div className="px-6 md:px-12 lg:px-20">
        <CardCarousel
          cards={cardElements}
          cardsPerView={{
            mobile: 1,
            tablet: 3,
            desktop: 3
          }}
        />
      </div>
    </section>
  );
}
