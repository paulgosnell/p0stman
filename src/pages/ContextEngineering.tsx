import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  PenLine,
  Search,
  Minimize2,
  Split,
  MessageSquare,
  CheckCircle,
  X
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import { FooterCTA } from '../components/service-pages';

const contextPillars = [
  {
    icon: PenLine,
    title: 'Writing (External Memory)',
    description: "Don't force models to remember everything. Persist critical information outside the context window.",
    details: 'Scratchpads, structured memory, state management. The model focuses on reasoning, not retention.'
  },
  {
    icon: Search,
    title: 'Selecting (Intelligent Retrieval)',
    description: "Not just RAG. Knowing what information serves each task.",
    details: 'Understanding when to pull from short-term vs long-term memory. Dynamic context loading based on task requirements.'
  },
  {
    icon: Minimize2,
    title: 'Compressing (Token Efficiency)',
    description: "Long context isn't free. Every token costs time and money.",
    details: 'Summarization, trimming, structured compression. Keeping context informative yet tight.'
  },
  {
    icon: Split,
    title: 'Isolating (Compartmentalized Workflows)',
    description: 'Multi-agent systems need clean handoffs.',
    details: 'Agent-specific context. Tool isolation. State boundaries. Each agent gets exactly what it needs.'
  }
];

const withoutVsWith = [
  { without: 'AI hallucinates under load', with: 'Consistent, reliable outputs' },
  { without: 'Errors compound over turns', with: 'Self-correcting workflows' },
  { without: 'Bloated token costs', with: 'Optimized inference spend' },
  { without: 'Agents get "lost in the middle"', with: 'Focused, relevant reasoning' },
  { without: 'One-shot prompts only', with: 'Long-running agent sessions' }
];

const ourApproach = [
  'Multi-agent orchestration with clean context boundaries',
  'Sequential workflows (Search → Extract → Validate → Rank)',
  'Dynamic retrieval based on task requirements',
  'Confidence scoring and validation layers',
  'Production-grade state management'
];

export default function ContextEngineering() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Context Engineering | The Discipline That Makes AI Work | POSTMAN</title>
          <meta name="description" content="Context engineering is what separates AI toys from AI products. Memory, tools, knowledge, state management - architecting information ecosystems for production AI." />
          <meta name="keywords" content="context engineering, AI context management, LLM engineering, prompt engineering, AI architecture, RAG" />
          <link rel="canonical" href="https://p0stman.com/context-engineering" />
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
                  Technical Deep Dive
                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8">
                  Context
                  <br />
                  Engineering
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                  The discipline that makes AI systems actually work
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Beyond Prompts Section */}
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
                  Beyond Prompts
                </h2>

                <div className="prose prose-lg font-light text-gray-700 space-y-6">
                  <p className="text-xl">
                    Prompt engineering was 2023.
                  </p>

                  <p>
                    Context engineering is what separates AI toys from AI products. It's not about
                    finding magic words. It's about architecting the entire information ecosystem
                    that surrounds your AI — memory, tools, knowledge, state management.
                  </p>

                  <p>
                    At Anthropic, they call it "the natural progression of prompt engineering."
                    At Google, it's "first-class system architecture."
                  </p>

                  <p className="text-2xl text-gray-900 font-light">
                    We've been doing it since before it had a name.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Four Pillars */}
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
                <h2 className="text-4xl font-light text-gray-900 mb-4">
                  What Context Engineering Actually Means
                </h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  Four disciplines that make the difference
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {contextPillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-8 border-t border-gray-200 hover:shadow-xl transition-all"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-black text-white">
                          <Icon className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-light text-gray-900">{pillar.title}</h3>
                      </div>

                      <p className="text-gray-700 font-light mb-4 leading-relaxed">
                        {pillar.description}
                      </p>

                      <p className="text-sm text-gray-500 font-light">
                        {pillar.details}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-light text-gray-900 mb-4">Why It Matters</h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  The difference between demos and production
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Without Column */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 border-t border-gray-300"
                >
                  <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 font-light mb-6">
                    Without Context Engineering
                  </h3>
                  <div className="space-y-4">
                    {withoutVsWith.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-gray-600 font-light">{item.without}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* With Column */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black p-8 border-t border-gray-700"
                >
                  <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 font-light mb-6">
                    With Context Engineering
                  </h3>
                  <div className="space-y-4">
                    {withoutVsWith.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-white font-light">{item.with}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl font-light text-gray-900">Our Approach</h2>

                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  We architect context-aware systems from day one:
                </p>

                <div className="space-y-4">
                  {ourApproach.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 bg-white p-4 border-t border-gray-200"
                    >
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-700 font-light">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-500 font-light pt-4">
                  This isn't theory. It's how we've shipped 20+ production AI systems.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <FooterCTA
          headline="Context is king in the agentic world"
          description="Let's engineer yours."
          buttonText="Talk context"
          buttonHref="/contact"
          dark={true}
        />

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
