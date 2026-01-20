import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mic,
  MessageCircle,
  Workflow,
  Network,
  CheckCircle,
  MessageSquare,
  Search,
  FileText,
  Shield,
  Gauge
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import { PhaseTimeline, PricingTable, FooterCTA } from '../components/service-pages';

const agentTypes = [
  {
    icon: Mic,
    name: 'Voice Agents',
    description: 'Lead generation bots that qualify and book. Customer support with natural conversation. Information agents for high-volume queries.',
    builtOn: 'ElevenLabs + LiveKit',
    example: 'Voice agent handling 500+ calls/day for qualification',
    features: [
      'Natural conversation flow',
      'Real-time transcription',
      'CRM integration',
      'Call analytics'
    ]
  },
  {
    icon: MessageCircle,
    name: 'Chat Agents',
    description: 'Support assistants that actually resolve issues. Interactive product demos. Knowledge base interfaces that understand context.',
    builtOn: 'AI SDK + custom orchestration',
    example: 'Chat agent reducing support tickets by 60%',
    features: [
      'Context persistence',
      'Multi-turn conversations',
      'Handoff to humans',
      'Sentiment detection'
    ]
  },
  {
    icon: Workflow,
    name: 'Workflow Agents',
    description: 'Data processing pipelines. Document analysis and extraction. Multi-step automation that handles edge cases.',
    builtOn: 'Claude + custom tooling',
    example: 'Expert finder scanning 15 platforms, 4 languages',
    features: [
      'Error recovery',
      'Progress tracking',
      'Audit logging',
      'Retry logic'
    ]
  },
  {
    icon: Network,
    name: 'Multi-Agent Systems',
    description: 'Coordinated agent teams. Complex decision workflows. Human-in-the-loop validation for critical paths.',
    builtOn: 'Multi-model orchestration',
    example: 'Research engine with Search → Extract → Validate → Rank',
    features: [
      'Agent coordination',
      'Shared context',
      'Consensus mechanisms',
      'Escalation paths'
    ]
  }
];

const phases = [
  {
    icon: Search,
    title: 'Design',
    duration: '1-2 weeks',
    description: 'Define agent scope and boundaries. Design conversation flows and workflows. Architect context management.',
    deliverables: [
      'Requirements pack',
      'Flow diagrams',
      'Integration plan',
      'Working prototype'
    ]
  },
  {
    icon: FileText,
    title: 'Build',
    duration: '2-4 weeks',
    description: 'Core agent development. Tool and API integrations. Testing on real scenarios with iteration.',
    deliverables: [
      'Working agent',
      'API integrations',
      'Test coverage',
      'Staging deployment'
    ]
  },
  {
    icon: Shield,
    title: 'Production',
    duration: '1-2 weeks',
    description: 'Performance optimization. Security hardening. Monitoring setup and team training.',
    deliverables: [
      'Live agent',
      'Documentation',
      'Training materials',
      'Support handoff'
    ]
  },
  {
    icon: Gauge,
    title: 'Ongoing',
    duration: 'Continuous',
    description: 'Performance monitoring. Iteration based on real usage. Model updates and improvements.',
    deliverables: [
      'Monthly reviews',
      'Performance reports',
      'Continuous optimization',
      'Model updates'
    ]
  }
];

const pricingTiers = [
  {
    name: 'Pilot',
    price: '$5-10k',
    description: 'Single agent, limited scope, proof of concept',
    features: [
      'One agent type',
      'Basic integrations',
      '2-week delivery',
      '30-day support'
    ],
    ctaText: 'Start a pilot'
  },
  {
    name: 'Production',
    price: '$25-50k',
    description: 'Full agent, integrations, training, support',
    features: [
      'Production-ready agent',
      'Full integrations',
      'Team training',
      '90-day support',
      'Documentation'
    ],
    popular: true,
    ctaText: 'Go production'
  },
  {
    name: 'Enterprise',
    price: '$50k+',
    description: 'Multi-agent system, custom orchestration, partnership',
    features: [
      'Multi-agent systems',
      'Custom orchestration',
      'Ongoing partnership',
      'SLA guarantees',
      'Dedicated support'
    ],
    ctaText: 'Talk enterprise'
  }
];

export default function AIAgentsService() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>AI Agent Development | Voice, Chat, Workflow Agents | P0STMAN</title>
          <meta name="description" content="AI agents that actually ship to production. Voice agents, chat agents, workflow automation, multi-agent systems. Built for scale, not PowerPoints." />
          <meta name="keywords" content="AI agent development, voice agent, chat agent, workflow automation, multi-agent systems, AI automation" />
          <link rel="canonical" href="https://p0stman.com/services/ai-agents" />
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden bg-black text-white flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          </div>

          <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light mb-6">
                  AI Agent Development
                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8">
                  AI Agents
                  <br />
                  That Actually Ship
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                  Voice. Chat. Workflow. Multi-agent systems built for production, not PowerPoints.
                </p>

                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all font-light text-lg inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Scope your agent
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Agent Spectrum Visual */}
          <div className="absolute bottom-12 left-0 right-0 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-between text-xs text-gray-500 font-light mb-2">
                <span>Simple</span>
                <span>Complex</span>
              </div>
              <div className="h-1 bg-gradient-to-r from-gray-800 via-gray-600 to-white rounded-full" />
              <div className="flex justify-between mt-3 text-center">
                <div className="text-gray-400 font-light text-sm">
                  <div>Chat Widget</div>
                  <div className="text-xs text-gray-600">$5k</div>
                </div>
                <div className="text-gray-400 font-light text-sm">
                  <div>Voice Bot</div>
                  <div className="text-xs text-gray-600">$10k</div>
                </div>
                <div className="text-gray-300 font-light text-sm">
                  <div>Workflow Agent</div>
                  <div className="text-xs text-gray-600">$25k</div>
                </div>
                <div className="text-white font-light text-sm">
                  <div>Multi-Agent</div>
                  <div className="text-xs text-gray-600">$50k+</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-light text-gray-900 mb-4">What We Build</h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  From simple chat widgets to complex multi-agent orchestration
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {agentTypes.map((agent, index) => {
                  const Icon = agent.icon;
                  return (
                    <motion.div
                      key={agent.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 p-8 border-t border-gray-200 hover:shadow-xl transition-all"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-black text-white">
                          <Icon className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-xl font-light text-gray-900">{agent.name}</h3>
                          <p className="text-sm text-gray-500 font-light">Built on {agent.builtOn}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 font-light mb-6 leading-relaxed">
                        {agent.description}
                      </p>

                      <div className="bg-white p-4 border border-gray-200 mb-6">
                        <p className="text-sm text-gray-500 font-light">
                          <span className="text-gray-900">Example:</span> {agent.example}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {agent.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                            <span className="text-gray-600 font-light">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How We Approach Agent Development */}
        <PhaseTimeline
          title="How We Approach Agent Development"
          subtitle="A proven process from design to continuous improvement"
          phases={phases}
        />

        {/* Pricing */}
        <PricingTable
          title="Investment"
          subtitle="Transparent pricing based on complexity and scope"
          tiers={pricingTiers}
        />

        {/* CTA */}
        <FooterCTA
          headline="What agent could transform your business?"
          description="Every successful agent starts with understanding the problem it solves."
          buttonText="Let's scope it"
          buttonHref="/contact"
          dark={true}
        />

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
