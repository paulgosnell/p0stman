import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Sparkles,
  Rocket,
  Users,
  Zap,
  Code2,
  Cpu,
  MessageSquare
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import { StatsBar, ComparisonTable, ToolGrid, ServiceCard, FooterCTA } from '../components/service-pages';

const services = [
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Voice agents, chat agents, workflow automation, and multi-agent systems that actually ship to production.',
    features: [
      'Voice agents (ElevenLabs, LiveKit)',
      'Chat agents (AI SDK + custom)',
      'Workflow automation',
      'Multi-agent systems'
    ],
    pricing: '$5-10k pilots → $25-50k+ production'
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Products',
    description: 'SaaS platforms with AI features, recommendation engines, content generation tools, and intelligent apps.',
    features: [
      'SaaS platforms with AI features',
      'Travel concierges, wellness apps',
      'Recommendation engines',
      'Content generation tools'
    ],
    pricing: 'MVP in 6 days → Production in 3 weeks'
  },
  {
    icon: Rocket,
    title: 'Prototype-to-Production',
    description: 'Take your Bolt, Lovable, or Replit build live with architecture that scales and production security.',
    features: [
      'Take your prototype live',
      'Architecture that scales',
      'Production security & reliability',
      'Ongoing maintenance'
    ],
    pricing: "Don't throw away your prototype work"
  },
  {
    icon: Users,
    title: 'Fractional AI Leadership',
    description: 'CPO, CTO, or Chief AI Officer expertise without the full-time cost. Strategy and execution combined.',
    features: [
      'AI strategy & roadmapping',
      'Team upskilling',
      'Transformation execution',
      'Build vs buy decisions'
    ],
    pricing: 'AI leadership without the full-time cost'
  }
];

const comparisonItems = [
  { traditional: '6-week discovery → 200-slide deck', modern: '30-day audit → actionable roadmap' },
  { traditional: 'Separate strategy and execution', modern: 'Strategy married to execution' },
  { traditional: 'Hourly billing incentivizes slowness', modern: 'Outcome-based pricing' },
  { traditional: 'Junior devs, senior prices', modern: 'Senior builder, direct access' },
  { traditional: 'Build to spec, ship and ghost', modern: 'Challenge the brief, improve the outcome' }
];

const tools = [
  { name: 'Claude', category: 'LLMs' },
  { name: 'GPT-4', category: 'LLMs' },
  { name: 'Gemini', category: 'LLMs' },
  { name: 'Grok', category: 'LLMs' },
  { name: 'ElevenLabs', category: 'Voice' },
  { name: 'LiveKit', category: 'Voice' },
  { name: 'Claude Code', category: 'Dev Tools' },
  { name: 'Cursor', category: 'Dev Tools' },
  { name: 'VS Code', category: 'Dev Tools' },
  { name: 'Midjourney', category: 'Image' },
  { name: 'DALL-E', category: 'Image' },
  { name: 'Stable Diffusion', category: 'Image' },
  { name: 'Runway', category: 'Video' },
  { name: 'Pika', category: 'Video' },
  { name: 'Kling', category: 'Video' },
  { name: 'Suno', category: 'Music' },
  { name: 'Udio', category: 'Music' }
];

const stats = [
  { value: '20+', label: 'Years shipping products' },
  { value: '1000+', label: 'Products delivered' },
  { value: '40%', label: 'Faster than traditional' },
  { value: '20+', label: 'Production AI systems' }
];

export default function AIProductStudio() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>AI Product Studio | Ship AI Products in Days | POSTMAN</title>
          <meta name="description" content="AI-native development studio. Context engineering, multi-model orchestration, production-ready AI products in weeks. Voice agents, chat agents, AI-powered SaaS." />
          <meta name="keywords" content="AI product studio, AI development agency, AI product development, context engineering, AI agents, voice agents" />
          <link rel="canonical" href="https://p0stman.com/ai-product-studio" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Product Studio",
              "description": "AI-native development studio. Context engineering, multi-model orchestration, production-ready AI products in weeks. Voice agents, chat agents, AI-powered SaaS.",
              "provider": { "@type": "Organization", "name": "POSTMAN", "url": "https://p0stman.com" },
              "serviceType": ["AI Product Development", "Voice Agents", "Chat Agents", "AI SaaS"],
              "areaServed": "Worldwide"
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://p0stman.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://p0stman.com/services" },
                { "@type": "ListItem", "position": 3, "name": "AI Product Studio", "item": "https://p0stman.com/ai-product-studio" }
              ]
            })}
          </script>
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
                  AI Product Studio
                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8">
                  Ship AI products
                  <br />
                  in days, not months
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                  AI-native development studio. Context engineering. Multi-model orchestration.
                  Production-ready in weeks.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all font-light text-lg inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Start a conversation
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The New Rules Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                  The New Rules
                </h2>

                <div className="prose prose-lg font-light text-gray-700 space-y-6">
                  <p className="text-xl">
                    The old agency model is dead.
                  </p>

                  <p>
                    Speed OR quality OR price — pick two. That was the constraint.
                  </p>

                  <p>
                    AI broke it. Context engineering, multi-model orchestration, and AI-first workflows
                    mean we deliver all three. Not by cutting corners. By removing the time tax on ambition.
                  </p>

                  <p>
                    Discovery goes deeper. Creative goes further. Tech goes bigger.
                  </p>

                  <p className="text-2xl text-gray-900 font-light">
                    Because now we have TIME BACK.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Build Section */}
        <section className="py-24 bg-gray-50">
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
                  From voice agents to production-ready AI platforms
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    pricing={service.pricing}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Differently */}
        <ComparisonTable
          title="How We Work Differently"
          subtitle="The old way vs. the AI-native way"
          traditionalLabel="Traditional Agency"
          modernLabel="POSTMAN"
          items={comparisonItems}
        />

        {/* The Arsenal */}
        <ToolGrid
          title="The Arsenal"
          subtitle="Human in the loop. AI does the heavy lifting. We direct the output."
          tools={tools}
          caption="Multi-model fluency means we pick the right tool for each task"
        />

        {/* Stats */}
        <StatsBar stats={stats} dark={true} />

        {/* CTA */}
        <FooterCTA
          headline="What's the ambitious version?"
          description="Every project starts with a conversation about what you actually want to build — not what seems 'realistic.'"
          buttonText="Let's build it"
          buttonHref="/contact"
          dark={false}
        />

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
