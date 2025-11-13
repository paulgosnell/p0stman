import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Zap,
  Users,
  Lightbulb,
  Target,
  ArrowRight,
  Check
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import FloatingGuideAgent from '../components/FloatingGuideAgent';

const values = [
  {
    icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
    title: 'Speed',
    description: 'Deliver in weeks, not months. AI-powered workflows compress timelines by 40-70% without cutting corners. 6-day MVPs. 3-week production systems. Validated across 12+ recent projects.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />,
    title: 'Innovation',
    description: 'We live in the tools: Claude Code, Cursor, ElevenLabs, LiveKit. Multi-model AI orchestration. Voice agents. Code generation platforms. If it\'s cutting-edge and production-ready, we\'ve probably shipped it.'
  },
  {
    icon: <Target className="w-8 h-8" strokeWidth={1.5} />,
    title: 'Results',
    description: 'Measurable outcomes, not vaporware. 89% lead qualification rates. 247 calls/week handled autonomously. <$200/month operating costs. Your ROI is our scorecard.'
  },
  {
    icon: <Users className="w-8 h-8" strokeWidth={1.5} />,
    title: 'Partnership',
    description: 'We challenge your brief. We improve your idea. We don\'t ghost post-launch. You\'re not just getting a vendor—you\'re getting a product team that cares whether your business succeeds.'
  }
];

const capabilities = [
  'AI Voice & Chat Agents',
  'Full-Stack Web & Mobile',
  'Enterprise SaaS Platforms',
  'Product Strategy (CPO/CTO)',
  'Digital Transformation',
  'Multi-Model AI Orchestration',
  'Workflow Automation',
  'Team Scaling & Leadership'
];

const whatWeDo = [
  {
    title: 'AI Agents & Intelligent Systems',
    description: 'Voice agents powered by ElevenLabs and LiveKit. Chat agents using Claude and GPT-4. Workflow automation that saves 40+ hours/month. Not proof-of-concepts—production systems that scale.'
  },
  {
    title: 'MVPs & Digital Products',
    description: 'Booking platforms. SaaS dashboards. Mobile apps. E-commerce systems. 6-day pilots for validation. 3-week builds for commercial launch. We ship, we don\'t theorize.'
  },
  {
    title: 'Strategic Engagements',
    description: 'Fractional CPO/CTO services. Digital transformation roadmaps. White-label builds for agencies. Team scaling support. You get 20 years of product leadership on-demand.'
  },
  {
    title: 'The AI Unlock',
    description: 'AI handles the repetitive work—research, documentation, boilerplate code, testing frameworks. Our team focuses on architecture, validation, and commercial viability. 20 years of pattern recognition means we avoid rookie mistakes.'
  }
];

const whyChoose = [
  {
    title: 'We\'ve Been There Before',
    description: '1,000+ products shipped. Startups to Fortune 500. We know what works, what scales, what dies in production. You\'re not paying us to learn on your dime.'
  },
  {
    title: 'AI-First, Human-Validated',
    description: 'Every AI output is reviewed by experienced builders. We use Claude Sonnet 4.5, OpenAI GPT-4, Google Gemini, and Grok—but we know when to override the AI and when to trust it. That\'s 20 years of judgment you can\'t automate.'
  },
  {
    title: 'Speed Without Sacrifice',
    description: '40-70% faster delivery (validated across 12 projects). Not because we cut corners—because AI handles research, documentation, and boilerplate while we focus on architecture and validation.'
  },
  {
    title: 'Commercially Viable from Day One',
    description: 'We challenge briefs. If your idea won\'t scale, we\'ll tell you before you waste budget. If there\'s a better approach, we\'ll show you. Your success is our reputation.'
  },
  {
    title: 'No Corporate BS',
    description: 'Direct access to decision-makers. No account managers. No 6-layer approval chains. You talk to the people building your product.'
  }
];

export default function About() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>About P0STMAN | AI-Powered Product Studio</title>
          <meta name="description" content="P0STMAN is an AI-powered product studio delivering innovative digital solutions at unprecedented speed." />
          <meta name="keywords" content="AI development studio, product development, innovation, technology partner" />
          <meta property="og:title" content="About P0STMAN | AI-Powered Product Studio" />
          <meta property="og:description" content="P0STMAN delivers innovative digital solutions powered by AI at unprecedented speed." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/about" />
        </Helmet>

        <HeaderV3Global darkMode={false} />

        {/* Hero Section */}
        <section className="py-32 md:py-48 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Eyebrow */}
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  About P0STMAN
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.05] tracking-tight mb-12">
                The Agency
                <br />
                of the Future.
                <br />
                Built Today.
              </h1>

              {/* Description */}
              <div className="space-y-6 max-w-4xl mb-16">
                <p className="text-2xl md:text-3xl text-gray-900 font-light leading-relaxed">
                  We're not a 40-person agency with endless meetings and bloated timelines.
                </p>

                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                  We're an AI-native product studio that delivers agency-quality work at startup speed and scale. 20+ years of product expertise, turbocharged by cutting-edge AI workflows.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-light text-gray-900">1,000+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide font-light">Products Shipped</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-light text-gray-900">20+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide font-light">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-light text-gray-900">40-70%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide font-light">Faster Delivery</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-light text-gray-900">AI-First</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide font-light">Studio Model</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Our Values
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight max-w-4xl">
                Four Principles
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border-t border-gray-200"
                >
                  <div className="text-gray-400 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Left Column */}
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                    Our Expertise
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                  What We Do
                </h2>

                <div className="space-y-6">
                  {whatWeDo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-lg font-light text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Capabilities */}
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-50 p-12 border-t border-gray-200">
                  <h3 className="text-2xl font-light text-gray-900 mb-8">Our Capabilities</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {capabilities.map((capability, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                        <span className="text-gray-700 font-light">{capability}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team & Expertise */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                    The Team
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                  Lean Team.
                  <br />
                  Deep Bench.
                </h2>

                <div className="space-y-6 text-gray-600">
                  <p className="text-lg font-light leading-relaxed">
                    P0STMAN is led by Paul Gosnell—20+ years shipping digital products for startups, enterprises, and agencies. Grew a Dubai-based agency from 1 to 30 contractors, navigated a global pandemic, and emerged with a philosophy: smaller teams, better tools, faster results.
                  </p>

                  <p className="text-lg font-light leading-relaxed">
                    Today, P0STMAN operates as an AI-native studio with a curated network of specialists—designers, engineers, and strategists—who collaborate on projects as needed. No bloat. No bench warmers. Just experienced builders leveraging AI to output like a 30-person agency.
                  </p>

                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-400 mb-4 font-light uppercase tracking-wide">Notable Clients & Projects</p>
                    <p className="text-base font-light leading-relaxed">
                      FAB Bank (scaled 1→40 team in 18 months), Al Arabiya, Etihad Airways, Department of Health Abu Dhabi, Arabian Malls, plus 100+ startups from pre-seed to Series B.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose P0STMAN */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                    Why Us
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-16 leading-tight">
                  Why P0STMAN?
                </h2>

                <div className="space-y-12">
                  {whyChoose.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3">
                        {index + 1}. {item.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
                What's the
                <br />
                Ambitious Version?
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
                Most founders think small because budgets and timelines force them to. AI breaks that constraint. Tell us what you'd build if you had 100 experts and 6 months. Then let's ship a version in 6 weeks.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light text-lg"
                >
                  Schedule a Strategy Call
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors font-light text-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <FooterV3 />
        <FloatingGuideAgent />
      </div>
    </HelmetProvider>
  );
}
