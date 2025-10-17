import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Code, ImageIcon, ArrowRight } from 'lucide-react';
import ChatAgentDemo from '../agent-demos/ChatAgentDemo';
import CodeAgentDemo from '../agent-demos/CodeAgentDemo';
import ImageVideoAgentDemo from '../agent-demos/ImageVideoAgentDemo';

interface AgentType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  demo: React.ComponentType;
  color: string;
}

const agentTypes: AgentType[] = [
  {
    id: 'chat',
    name: 'Chat Agent',
    description: 'Conversational AI that handles customer inquiries, support tickets, and natural dialogue in real-time.',
    icon: <MessageSquare className="w-6 h-6" />,
    demo: ChatAgentDemo,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'code',
    name: 'Code Agent',
    description: 'Intelligent code generation and debugging agent that writes, reviews, and optimizes code automatically.',
    icon: <Code className="w-6 h-6" />,
    demo: CodeAgentDemo,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'vision',
    name: 'Vision Agent',
    description: 'Image and video analysis agent that processes visual content, extracts data, and generates insights.',
    icon: <ImageIcon className="w-6 h-6" />,
    demo: ImageVideoAgentDemo,
    color: 'from-orange-500 to-red-500'
  }
];

export default function AgentShowcaseV3() {
  const [selectedAgent, setSelectedAgent] = useState('chat');
  const selected = agentTypes.find(a => a.id === selectedAgent)!;
  const DemoComponent = selected.demo;

  return (
    <section className="py-24 md:py-32 px-6 md:px-0 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
            AI Agents in Action
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl">
            See real examples of the intelligent agents we build. Each type is specialized for specific tasks, from customer conversations to code generation.
          </p>
        </div>

        {/* Agent Types Grid & Demo */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Agent Type Cards */}
          <div className="lg:col-span-1 space-y-3">
            {agentTypes.map((agent, index) => (
              <motion.button
                key={agent.id}
                onClick={() => setSelectedAgent(agent.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                  selectedAgent === agent.id
                    ? `bg-gradient-to-br ${agent.color} text-white shadow-lg`
                    : 'bg-white border border-gray-200 text-gray-900 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      selectedAgent === agent.id
                        ? 'bg-white/20'
                        : 'bg-gray-100 group-hover:bg-gray-200 transition-colors'
                    }`}
                  >
                    {agent.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{agent.name}</h3>
                    <p
                      className={`text-sm ${
                        selectedAgent === agent.id ? 'text-white/90' : 'text-gray-600'
                      }`}
                    >
                      {agent.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Demo Area */}
          <motion.div
            key={selectedAgent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
              {/* Header */}
              <div className={`bg-gradient-to-r ${selected.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  {selected.icon}
                  <h3 className="text-2xl font-light">{selected.name}</h3>
                </div>
                <p className="text-sm text-white/80">{selected.description}</p>
              </div>

              {/* Demo Content */}
              <div className="bg-white p-8">
                <div className="mb-6">
                  <DemoComponent />
                </div>

                {/* Info Box */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Real-time Processing</h4>
                  <p className="text-sm text-gray-600">
                    This is a live demonstration of how our {selected.name.toLowerCase()} processes information in real-time with natural language understanding and intelligent responses.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
                <a
                  href="/contact"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${selected.color} text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-[1.02] font-medium`}
                >
                  Build Your Own Agent
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Agent Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: '24/7 Availability',
              description: 'Your agents work round the clock without breaks or downtime'
            },
            {
              title: 'Intelligent Learning',
              description: 'Each interaction trains the agent to perform better and more accurately'
            },
            {
              title: 'Multi-Channel Support',
              description: 'Deploy the same agent across chat, email, voice, and API endpoints'
            }
          ].map((capability, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-light text-blue-600">{i + 1}</span>
              </div>
              <h3 className="text-lg font-light text-gray-900 mb-2">{capability.title}</h3>
              <p className="text-gray-600">{capability.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
