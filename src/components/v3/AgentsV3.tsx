import React from 'react';
import { Mic, MessageSquare, Code } from 'lucide-react';

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
  }
];

export default function AgentsV3() {
  return (
    <section id="agents" className="py-32 md:py-40 px-6 md:px-0 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            What We Build
          </h2>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 space-y-6"
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
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 font-light">
                  {agent.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
