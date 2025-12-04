import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  Code2,
  Clock,
  Plus,
  Minus,
  HelpCircle,
  Zap,
  Bot,
  Palette,
  X,
  Trophy
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "What's the difference between you and other vibe coders?",
    answer: "Experience. I've shipped 1000+ products over 20 years. I know architecture, scale, security. Most vibe coders are learning to build. I already know — AI just makes me faster."
  },
  {
    question: "Can you teach me to vibe code better?",
    answer: "Not currently offering training, but I'm considering it. For now, I build. Maybe teaching later."
  },
  {
    question: "Do you look down on vibe coding tools?",
    answer: "Opposite. I think they're revolutionary. I was early because I recognised how powerful they were. I just also know their limits."
  },
  {
    question: "What if I want you to just improve my vibe-coded project?",
    answer: "Usually rebuilding is faster and cheaper. But send it over — if building on what you have makes sense, I'll tell you."
  }
];

const aiCodingTools = [
  { name: "Claude Code", primary: true },
  { name: "Cursor", primary: true },
  { name: "Bolt.new", note: "since launch" },
  { name: "Lovable", primary: false },
  { name: "Replit Agent", primary: false }
];

const llmTools = [
  "Anthropic Claude (Sonnet 4.5, Opus)",
  "OpenAI GPT-4",
  "Google Gemini",
  "Grok"
];

const devTools = [
  "Next.js",
  "React",
  "Supabase",
  "Vercel",
  "Stripe"
];

const creativeTools = [
  "Midjourney",
  "Runway",
  "ElevenLabs"
];

const vibeGoodAt = [
  "Rapid prototyping",
  "Idea validation",
  "Visual exploration",
  "First drafts of functionality"
];

const vibeBadAt = [
  "Complex business logic",
  "Security at production level",
  "Performance at scale",
  "Long-term maintainability",
  "Edge cases and error handling"
];

const differentFrom = [
  "Non-technical founders learning to build",
  "Hobbyists experimenting with AI",
  "Developers trying out new tools"
];

const myBackground = [
  "20+ years shipping products",
  "1000+ products delivered",
  "Deep understanding of architecture, scale, security",
  "Builder of chilledsites.com (multi-model code generation platform)",
  "Recognised by the founders of these tools"
];

export default function VibeCodingExpert() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [toolsRef, toolsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [differenceRef, differenceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [limitsRef, limitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Vibe Coding Expert | Professional AI-Assisted Development | P0STMAN</title>
          <meta name="description" content="Vibe coding before it had a name. First to ship production on Bolt.new. 20+ years building products, now with AI. I turn prototypes into production." />
          <meta name="keywords" content="Vibe coding expert, Vibe coding developer, Hire vibe coder, Professional vibe coding, Vibe coding consultant, AI coding expert" />
          <meta property="og:title" content="Vibe Coding Expert | Professional AI-Assisted Development | P0STMAN" />
          <meta property="og:description" content="Vibe coding before it had a name. First to ship production on Bolt.new. 20+ years building products, now with AI." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Vibe Coding Expert | P0STMAN" />
          <meta name="twitter:description" content="Vibe coding before it had a name. First to ship production on Bolt.new." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/vibe-coding-expert" />
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center bg-white text-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
          </div>

          <div className="container mx-auto px-4 md:px-6 py-24 md:py-28 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <span className="text-purple-500 font-medium text-sm tracking-wide">Vibe Coding Expert</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  Vibe coding before<br />it had a name.
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  I've been building with AI coding tools since they launched. Shipped production apps when others were still making landing pages. 20 years of product experience meets cutting-edge AI development.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:from-purple-600 hover:to-violet-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Let's Build Something
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Origin Story Section */}
        <section ref={storyRef} className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-6 h-6 text-purple-400" />
                  <h2 className="text-3xl md:text-4xl font-thin">The Origin Story — October 2024: Bolt.new launches</h2>
                </div>

                <div className="space-y-6 text-gray-300">
                  <p className="text-xl">
                    Everyone was making landing pages and simple demos.
                  </p>
                  <p className="text-2xl text-white font-medium">
                    I built a full CRM.
                  </p>
                  <p>
                    Database. Stripe payments. User authentication. Deployed live.
                  </p>
                  <p className="text-white font-medium text-lg">
                    Eric, Bolt's CEO, reached out. Said they had power users, and then there was me. Nobody else had shipped a production app on their platform.
                  </p>
                  <p>
                    I spent weeks consulting with the Bolt team. Helped them understand how I'd pushed their tool further than expected. Almost launched the Bolt Builders community with them.
                  </p>
                  <p className="text-purple-400 font-medium">
                    That was before "vibe coding" was even a term.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why I Was Ready Section */}
        <section ref={whyRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8">Why I Was Ready — 20 years of the right experience</h2>

                <p className="text-lg text-gray-600 mb-8">
                  Turns out, building products for two decades trains you perfectly for AI-assisted development.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
                    <h3 className="font-medium text-gray-900 mb-3">Prompt engineering?</h3>
                    <p className="text-gray-600 text-sm">
                      I'd been writing clear, contextual briefs for designers and developers for years. Describing features in language everyone understands. Reporting bugs with precise reproduction steps.
                    </p>
                  </div>
                  <div className="p-6 bg-violet-50 rounded-xl border border-violet-100">
                    <h3 className="font-medium text-gray-900 mb-3">Context engineering?</h3>
                    <p className="text-gray-600 text-sm">
                      I'd been doing that every time I onboarded a new team member or handed off a project. Documenting systems so others could pick them up.
                    </p>
                  </div>
                  <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                    <h3 className="font-medium text-gray-900 mb-3">Working with AI?</h3>
                    <p className="text-gray-600 text-sm">
                      It's like working with a brilliant junior developer who needs clear direction. I've managed hundreds of those.
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-lg text-gray-700 text-center">
                  The skills that make AI coding tools work are the same skills that make product development work.<br />
                  <span className="font-medium">I just happened to have 20 years of practice.</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section ref={toolsRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={toolsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8 text-center">The Tools I Use — Current stack</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Bot className="w-5 h-5 text-purple-500" />
                      <h3 className="font-medium text-gray-900">AI Coding</h3>
                    </div>
                    <ul className="space-y-2">
                      {aiCodingTools.map((tool, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          <span>{tool.name} {tool.note && <span className="text-gray-400 text-sm">({tool.note})</span>}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-5 h-5 text-purple-500" />
                      <h3 className="font-medium text-gray-900">LLMs</h3>
                    </div>
                    <ul className="space-y-2">
                      {llmTools.map((tool, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Code2 className="w-5 h-5 text-purple-500" />
                      <h3 className="font-medium text-gray-900">Development</h3>
                    </div>
                    <ul className="space-y-2">
                      {devTools.map((tool, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Palette className="w-5 h-5 text-purple-500" />
                      <h3 className="font-medium text-gray-900">Creative</h3>
                    </div>
                    <ul className="space-y-2">
                      {creativeTools.map((tool, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-center text-gray-600">
                  I don't just use these tools occasionally. <span className="font-medium text-gray-900">I live in them. Daily.</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Makes Me Different Section */}
        <section ref={differenceRef} className="py-24 bg-purple-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={differenceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8">What Makes Me Different — From other vibe coders</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-medium mb-4 text-purple-300">Most vibe coders are:</h3>
                    <ul className="space-y-3">
                      {differentFrom.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <span className="w-2 h-2 bg-purple-400 rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-4 text-green-300">I'm:</h3>
                    <ul className="space-y-3">
                      {myBackground.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-lg text-white text-center">
                  <strong>The difference:</strong> I know where the tools excel and where they break. I can push them further than most. And when they hit their limits, I know how to build the rest properly.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Limits Section */}
        <section ref={limitsRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={limitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8 text-center">What Vibe Coding Can't Do — Being honest about the limits</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Vibe coding is incredible for:
                    </h3>
                    <ul className="space-y-3">
                      {vibeGoodAt.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <X className="w-5 h-5 text-red-500" />
                      Vibe coding struggles with:
                    </h3>
                    <ul className="space-y-3">
                      {vibeBadAt.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <X className="w-4 h-4 text-red-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-lg text-gray-700 text-center">
                  The tools are getting better. Fast. But today, production still needs human expertise layered on top.
                  <span className="block mt-2 font-medium text-purple-600">That's where I come in.</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-thin mb-4">The P0STMAN Approach — AI-first, human-validated</h2>
              <p className="text-gray-600 mb-6">
                Everything I build uses AI tools. Research, planning, code, documentation — AI throughout.
              </p>
              <p className="text-gray-700 mb-6">
                But every output gets human validation. I review, test, refine. The AI does the heavy lifting. I make sure it's actually right.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 bg-white rounded-lg">
                  <p className="font-medium text-gray-900">Speed of AI</p>
                  <p className="text-sm text-gray-500">40% faster than traditional agencies</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="font-medium text-gray-900">Quality of experience</p>
                  <p className="text-sm text-gray-500">20 years of knowing what "good" looks like</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="font-medium text-gray-900">Reliability of human judgment</p>
                  <p className="text-sm text-gray-500">Someone accountable for the result</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section ref={pricingRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-purple-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">What it costs</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 1: Working Demo</h3>
                    <div className="text-3xl font-light text-purple-500 mb-4">$5k-8k</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>1 week</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Your prototype rebuilt properly</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-purple-50 rounded-2xl border border-purple-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 2: Production Launch</h3>
                    <div className="text-3xl font-light text-purple-500 mb-4">$10k-25k</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>2-3 weeks</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Deployed, scalable, customer-ready</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 3: Scale & Polish</h3>
                    <div className="text-3xl font-light text-purple-500 mb-4">Custom</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>2 weeks</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Performance, features, growth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <HelpCircle className="w-6 h-6 text-purple-500" />
                  <h2 className="text-3xl font-thin">Common Questions</h2>
                </div>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {openFaqIndex === index ? (
                        <Minus className="w-5 h-5 text-gray-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-thin mb-6">
                Ready to Build?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Send me your prototype, your idea, or just your problem. I'll tell you how I can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:from-purple-600 hover:to-violet-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-all text-lg font-medium"
                >
                  Book a 15-min call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-thin text-center mb-6 text-gray-500">Related</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/from-prototype-to-production" className="text-purple-500 hover:text-purple-600 underline">
                  From Prototype to Production — The full guide
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/bolt-to-production" className="text-purple-500 hover:text-purple-600 underline">
                  Bolt to Production — My original platform
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/lovable-to-production" className="text-purple-500 hover:text-purple-600 underline">
                  Lovable to Production
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/replit-to-production" className="text-purple-500 hover:text-purple-600 underline">
                  Replit to Production
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
