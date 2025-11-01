import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

const values = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Speed',
    description: 'Deliver in weeks, not months. AI-powered workflows compress timelines by 40-70% without cutting corners. 6-day MVPs. 3-week production systems. Validated across 12+ recent projects.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We live in the tools: Claude Code, Cursor, ElevenLabs, LiveKit. Multi-model AI orchestration. Voice agents. Code generation platforms. If it\'s cutting-edge and production-ready, we\'ve probably shipped it.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Results',
    description: 'Measurable outcomes, not vaporware. 89% lead qualification rates. 247 calls/week handled autonomously. <$200/month operating costs. Your ROI is our scorecard.'
  },
  {
    icon: <Users className="w-8 h-8" />,
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

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
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

        <HeaderV3Global />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-white dark:bg-gray-900 overflow-hidden">
          {/* Premium Titanium Background - Metallic Grid with Gradients */}
          <div className="absolute inset-0 z-0">
            {/* Animated Grid Pattern */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                {/* Precision Grid Pattern */}
                <pattern
                  id="about-titanium-grid"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 80 0 L 0 0 0 80"
                    fill="none"
                    stroke="rgba(100, 116, 139, 0.15)"
                    strokeWidth="0.5"
                  />
                  <circle cx="0" cy="0" r="1.5" fill="rgba(59, 130, 246, 0.3)" />
                </pattern>

                {/* Premium Gradient Overlays */}
                <radialGradient id="titanium-glow-1" cx="30%" cy="30%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="titanium-glow-2" cx="70%" cy="70%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </radialGradient>

                {/* Metallic Shine Effect */}
                <linearGradient id="metallic-shine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <rect width="100%" height="100%" fill="url(#about-titanium-grid)" />
              <rect width="100%" height="100%" fill="url(#titanium-glow-1)" />
              <rect width="100%" height="100%" fill="url(#titanium-glow-2)" />
              <rect width="100%" height="100%" fill="url(#metallic-shine)" />
            </svg>

            {/* Floating Orbs - Titanium Spheres */}
            <motion.div
              className="absolute top-1/4 left-1/5 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 via-purple-400/5 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, -40, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Subtle Scan Lines for Tech Feel */}
            <div className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(100, 116, 139, 0.3) 2px, rgba(100, 116, 139, 0.3) 4px)'
              }}
            />
          </div>

          <div className="container mx-auto px-6 py-32 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Eyebrow */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider font-medium">
                    About P0STMAN
                  </span>
                </motion.div>

                {/* Main Headline - Premium Typography */}
                <motion.h1
                  className="text-6xl md:text-7xl lg:text-8xl font-thin leading-[0.95] mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="block text-gray-900 dark:text-gray-100 mb-4">
                    The Agency
                  </span>
                  <span className="block text-gray-900 dark:text-gray-100 mb-4">
                    of the Future.
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Built Today.
                  </span>
                </motion.h1>

                {/* Description - Refined Spacing */}
                <motion.div
                  className="space-y-6 max-w-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                    We're not a 40-person agency with endless meetings and bloated timelines.
                  </p>

                  <p className="text-xl md:text-2xl font-light text-gray-500 dark:text-gray-400 leading-relaxed">
                    We're an AI-native product studio that delivers agency-quality work at startup speed and scale. <span className="text-gray-600 dark:text-gray-300">20+ years of product expertise, turbocharged by cutting-edge AI workflows.</span>
                  </p>
                </motion.div>

                {/* Stats Bar - Titanium Accent */}
                <motion.div
                  className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="space-y-2">
                      <div className="text-4xl font-thin text-gray-900 dark:text-gray-100">1,000+</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Products Shipped</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-thin text-gray-900 dark:text-gray-100">20+</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Years Experience</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-thin text-gray-900 dark:text-gray-100">40-70%</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Faster Delivery</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-thin text-gray-900 dark:text-gray-100">AI-First</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Studio Model</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-10" />
        </section>

        {/* Core Values */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-thin mb-6 text-gray-900 dark:text-gray-100">Our Core Values</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Everything we do is guided by four fundamental principles
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-thin mb-8 text-gray-900 dark:text-gray-100">What We Do</h2>

                  <div className="space-y-6 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-2">AI Agents & Intelligent Systems</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Voice agents powered by ElevenLabs and LiveKit. Chat agents using Claude and GPT-4. Workflow automation that saves 40+ hours/month. Not proof-of-concepts—production systems that scale.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-2">MVPs & Digital Products</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Booking platforms. SaaS dashboards. Mobile apps. E-commerce systems. 6-day pilots for validation. 3-week builds for commercial launch. We ship, we don't theorize.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-2">Strategic Engagements</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Fractional CPO/CTO services. Digital transformation roadmaps. White-label builds for agencies. Team scaling support. You get 20 years of product leadership on-demand.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-2">The AI Unlock</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          AI handles the repetitive work—research, documentation, boilerplate code, testing frameworks. Our team focuses on architecture, validation, and commercial viability. 20 years of pattern recognition means we avoid rookie mistakes.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl" />
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-8">Our Capabilities</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {capabilities.map((capability, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          <span className="text-gray-700 dark:text-gray-200">{capability}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Team & Expertise */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-thin mb-8 text-gray-900 dark:text-gray-100">Lean Team. Deep Bench.</h2>

                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <p className="text-lg leading-relaxed">
                    P0STMAN is led by Paul Gosnell—20+ years shipping digital products for startups, enterprises, and agencies. Grew a Dubai-based agency from 1 to 30 contractors, navigated a global pandemic, and emerged with a philosophy: smaller teams, better tools, faster results.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Today, P0STMAN operates as an AI-native studio with a curated network of specialists—designers, engineers, and strategists—who collaborate on projects as needed. No bloat. No bench warmers. Just experienced builders leveraging AI to output like a 30-person agency.
                  </p>

                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Notable Clients & Projects:</p>
                    <p className="text-base leading-relaxed">
                      FAB Bank (scaled 1→40 team in 18 months), Al Arabiya, Etihad Airways, Department of Health Abu Dhabi, Arabian Malls, plus 100+ startups from pre-seed to Series B.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose P0STMAN */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-thin mb-12 text-gray-900 dark:text-gray-100">Why P0STMAN?</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-light text-gray-900 dark:text-gray-100 mb-3">1. We've Been There Before</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      1,000+ products shipped. Startups to Fortune 500. We know what works, what scales, what dies in production. You're not paying us to learn on your dime.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-light text-gray-900 dark:text-gray-100 mb-3">2. AI-First, Human-Validated</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Every AI output is reviewed by experienced builders. We use Claude Sonnet 4.5, OpenAI GPT-4, Google Gemini, and Grok—but we know when to override the AI and when to trust it. That's 20 years of judgment you can't automate.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-light text-gray-900 dark:text-gray-100 mb-3">3. Speed Without Sacrifice</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      40-70% faster delivery (validated across 12 projects). Not because we cut corners—because AI handles research, documentation, and boilerplate while we focus on architecture and validation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-light text-gray-900 dark:text-gray-100 mb-3">4. Commercially Viable from Day One</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      We challenge briefs. If your idea won't scale, we'll tell you before you waste budget. If there's a better approach, we'll show you. Your success is our reputation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-light text-gray-900 dark:text-gray-100 mb-3">5. No Corporate BS</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Direct access to decision-makers. No account managers. No 6-layer approval chains. You talk to the people building your product.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-thin mb-6">What's the Ambitious Version?</h2>

                <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Most founders think small because budgets and timelines force them to. AI breaks that constraint. Tell us what you'd build if you had 100 experts and 6 months. Then let's ship a version in 6 weeks.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all font-medium text-lg"
                  >
                    Schedule a Strategy Call
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/case-studies"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all font-medium text-lg"
                  >
                    View Case Studies
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
