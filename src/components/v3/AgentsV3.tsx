import React from 'react';
import { Mic, MessageSquare, Code, Zap, Brain, Workflow } from 'lucide-react';
import CardCarousel from './CardCarousel';

interface AgentCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string;
}

const agents: AgentCard[] = [
  {
    icon: <Mic className="w-12 h-12 text-blue-600" />,
    title: 'Voice Agents',
    description: 'ElevenLabs + LiveKit powered. Lead generation, customer support, information delivery. Sounds human, closes deals.',
    tech: 'ElevenLabs, LiveKit'
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
    title: 'Chat Agents',
    description: 'AI SDK + custom integrations. Support assistants, interactive demos, product walkthroughs. Deployed in hours.',
    tech: 'AI SDK, Custom'
  },
  {
    icon: <Code className="w-12 h-12 text-blue-600" />,
    title: 'Code Agents',
    description: 'Multi-model code generation. Website builders, feature automation, database migrations. chilledsites.com is live proof.',
    tech: 'Claude, OpenAI, Gemini, Grok'
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-600" />,
    title: 'Workflow Automation',
    description: 'Intelligent process automation. Data extraction, document processing, task orchestration. Scales to millions of operations.',
    tech: 'N8n, Make, Zapier'
  },
  {
    icon: <Brain className="w-12 h-12 text-blue-600" />,
    title: 'Analysis Agents',
    description: 'Deep learning models for insights. Market research, competitive analysis, trend prediction. Real-time intelligence.',
    tech: 'TensorFlow, PyTorch, Hugging Face'
  },
  {
    icon: <Workflow className="w-12 h-12 text-blue-600" />,
    title: 'Orchestration',
    description: 'Multi-agent coordination systems. Complex workflows, task delegation, result aggregation. Enterprise-ready.',
    tech: 'LangChain, AutoGen, CrewAI'
  }
];

export default function AgentsV3() {
  const cardElements = agents.map((agent, index) => (
    <div
      key={index}
      className="group bg-white rounded-xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 space-y-6 h-full"
    >
      {/* Icon */}
      <div className="flex items-center justify-start">
        {agent.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-light text-gray-900">
        {agent.title}
      </h3>

      {/* Description */}
      <p className="text-base text-gray-600 font-light leading-relaxed">
        {agent.description}
      </p>

      {/* Tech Stack */}
      <div className="pt-4 border-t border-gray-100 mt-auto">
        <p className="text-sm text-gray-500 font-light">
          {agent.tech}
        </p>
      </div>
    </div>
  ));

  return (
    <section id="agents" className="py-40 md:py-48 bg-white">
      {/* Section Heading - Contained */}
      <div className="max-w-6xl mx-auto px-6 md:px-0 mb-20 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
          What We Build
        </h2>
      </div>

      {/* Full-width Carousel */}
      <div className="px-6 md:px-12 lg:px-20">
        <CardCarousel
          cards={cardElements}
          cardsPerView={{
            mobile: 1,
            tablet: 2,
            desktop: 3
          }}
        />
      </div>
    </section>
  );
}
