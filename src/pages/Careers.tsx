import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Zap,
  Wrench,
  Users,
  ArrowRight,
  Check,
  Code,
  TrendingUp,
  FileText,
  Mail
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import FloatingGuideAgent from '../components/FloatingGuideAgent';

const howWeWork = [
  {
    icon: <Cpu className="w-8 h-8" strokeWidth={1.5} />,
    title: 'Orchestrators, not operators',
    description: "We don't write every line of code manually. We direct AI tools to do the heavy lifting - Claude for full-stack builds, Gemini for multimodal, Cursor for rapid iteration. Our job is context, direction, and taste."
  },
  {
    icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
    title: 'Speed is the product',
    description: "What takes traditional teams 2 weeks takes us 2 hours. Not because we cut corners - because AI changed what's possible and we've figured out how to use it."
  },
  {
    icon: <Wrench className="w-8 h-8" strokeWidth={1.5} />,
    title: "Tools change. Principles don't.",
    description: "We're not precious about frameworks or stacks. We use whatever's fastest and best today. Tomorrow it'll be something different. User-centred design, clean execution, and shipping fast - those stay constant."
  },
  {
    icon: <Users className="w-8 h-8" strokeWidth={1.5} />,
    title: 'No sprints. No standups. No BS.',
    description: "We're async, flexible, and outcome-focused. You'll be judged on what you ship, not when you're online."
  }
];

const roles = [
  {
    id: 'ai-native-builder',
    icon: <Code className="w-8 h-8" strokeWidth={1.5} />,
    title: 'AI-Native Builder / Creative Technologist',
    description: [
      "You blur the line between design and code. You can go from idea to shipped landing page in an afternoon. You're as comfortable in Figma as you are in Claude Code.",
      "Prompt engineering isn't a skill to you - it's table stakes. Context engineering is where it's at. You think in products, not features. Users, not specs.",
      "You've probably dropped an AI tool in the last 6 months because something better came along. Good. That's the mindset."
    ],
    offers: [
      'Flexible contract work',
      'Real projects, real clients, real money',
      'Work with a team that moves at your speed'
    ],
    questions: [
      'Have you shipped a complete product using AI tools in the last 3 months?',
      'Can you deliver a branded landing page with waitlist form in under a day?',
      'Is AI your primary way of working, not just an occasional assist?'
    ]
  },
  {
    id: 'growth-hacker',
    icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} />,
    title: 'Growth Hacker / Vibe Marketeer',
    description: [
      "You don't do \"marketing strategies\" in 40-page decks. You ship campaigns. You test. You iterate. You know what works because you've done it, not because you read about it.",
      "You understand that growth now means AI-assisted content, rapid testing, and building in public. You can write copy, spin up landing pages, run ads, and analyse what's working - all in the same day.",
      "\"Vibe marketing\" isn't a meme to you - it's how you operate. You trust your gut, move fast, and course-correct based on data."
    ],
    offers: [
      'Flexible contract work',
      'Real projects across multiple products (SaaS, client work, internal ventures)',
      'Autonomy to run experiments without 10 approval layers'
    ],
    questions: [
      'Have you grown something (product, audience, revenue) using non-traditional methods in the last year?',
      'Can you write, design, and ship a campaign landing page yourself?',
      'Do you prefer testing 10 small things over planning 1 big thing?'
    ]
  },
  {
    id: 'context-engineer',
    icon: <FileText className="w-8 h-8" strokeWidth={1.5} />,
    title: 'Context Engineer / AI Product Strategist',
    description: [
      "You're the person who knows what to feed the AI - and when. You understand that the quality of output depends on the quality of context.",
      "You probably come from product management, UX strategy, or technical writing. You know how to scope, document, and structure problems so that AI tools can actually execute on them.",
      "You're not a coder, but you understand how products get built. You're the bridge between messy human ideas and clean AI execution."
    ],
    offers: [
      'Flexible contract work',
      'Opportunity to shape how AI-native teams operate',
      'Work on diverse projects across industries'
    ],
    questions: [
      'Have you structured a complex project specifically to be AI-executable?',
      'Do you have experience with product scoping, documentation, or requirements gathering?',
      'Can you break a vague brief into clear, sequenced tasks without hand-holding?'
    ]
  }
];

export default function Careers() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Careers | P0STMAN - AI-Native Builder Jobs</title>
          <meta name="description" content="Join P0STMAN's roster of AI-native builders, creative technologists, and growth hackers. We ship products in days, not months. Flexible contract roles available." />
          <meta name="keywords" content="AI-native jobs, AI builder careers, creative technologist jobs, context engineer role, vibe marketing jobs, AI agency careers, remote AI jobs, freelance AI developer" />
          <meta property="og:title" content="Careers | P0STMAN - AI-Native Builder Jobs" />
          <meta property="og:description" content="Join P0STMAN's roster of AI-native builders, creative technologists, and growth hackers. We ship products in days, not months. Flexible contract roles available." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Careers | P0STMAN - AI-Native Builder Jobs" />
          <meta name="twitter:description" content="Join P0STMAN's roster of AI-native builders, creative technologists, and growth hackers. We ship products in days, not months." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/careers" />
        </Helmet>

        <HeaderV3Global darkMode={false} />

        {/* Hero Section - Manifesto */}
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
                  Join P0STMAN
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.05] tracking-tight mb-12">
                We don't hire.
                <br />
                We assemble.
              </h1>

              {/* Subhead */}
              <p className="text-2xl md:text-3xl text-gray-900 font-light leading-relaxed max-w-4xl mb-12">
                A new kind of team for a new kind of work.
              </p>

              {/* Manifesto Body */}
              <div className="space-y-6 max-w-4xl">
                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                  The 9-5 is dead. So is the traditional agency model.
                </p>

                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                  We're not a team of 50 sitting in an office. We're a small, fast, distributed crew of AI-native operators who ship products in days, not months.
                </p>

                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                  We don't write job specs with "5+ years React experience" because that's not how this works anymore. The tools change monthly. The skills that matter are speed, taste, and knowing how to orchestrate AI to do the heavy lifting.
                </p>

                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                  We're not looking for employees. We're building a roster of people who work the way we do - fast, autonomous, and obsessed with shipping.
                </p>

                <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed pt-4">
                  If that sounds like you, keep reading.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How We Work */}
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
                  The P0STMAN Way
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight max-w-5xl">
                AI works for us.
                <br />
                Not the other way around.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howWeWork.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border-t border-gray-200"
                >
                  <div className="text-gray-400 mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="py-24 md:py-32 bg-white">
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
                  Open Roles
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight max-w-4xl mb-6">
                Current openings
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
                These aren't job descriptions. They're filters.
              </p>
            </motion.div>

            {/* Role Cards */}
            <div className="space-y-16">
              {roles.map((role, index) => (
                <motion.div
                  key={role.id}
                  id={role.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="border-t border-gray-200 pt-12"
                >
                  <div className="grid lg:grid-cols-12 gap-12">
                    {/* Role Header */}
                    <div className="lg:col-span-4">
                      <div className="text-gray-400 mb-6">
                        {role.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                        {role.title}
                      </h3>

                      {/* What we offer */}
                      <div className="mb-8">
                        <h4 className="text-sm uppercase tracking-wide text-gray-400 font-light mb-4">
                          What we offer
                        </h4>
                        <ul className="space-y-3">
                          {role.offers.map((offer, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                              <span className="text-gray-600 font-light">{offer}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Apply Button */}
                      <a
                        href={`mailto:hello@p0stman.com?subject=Application: ${role.title}`}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors font-light text-base"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                      </a>
                    </div>

                    {/* Role Details */}
                    <div className="lg:col-span-8">
                      {/* Description */}
                      <div className="space-y-4 mb-10">
                        {role.description.map((paragraph, i) => (
                          <p key={i} className="text-lg text-gray-600 font-light leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Screening Questions */}
                      <div className="bg-gray-50 p-8 border-t border-gray-200">
                        <h4 className="text-sm uppercase tracking-wide text-gray-400 font-light mb-6">
                          Before you apply, ask yourself
                        </h4>
                        <ul className="space-y-4">
                          {role.questions.map((question, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-gray-900 text-white flex items-center justify-center text-xs font-light flex-shrink-0 mt-0.5">
                                {i + 1}
                              </div>
                              <span className="text-gray-700 font-light">{question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Not Sure Where You Fit */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Something Else?
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Not sure where
                <br />
                you fit?
              </h2>

              <div className="space-y-6 text-gray-600 mb-12">
                <p className="text-lg md:text-xl font-light leading-relaxed">
                  If you read all this and thought "that's me, but none of these roles are quite right" - reach out anyway. We're always looking for people who get it.
                </p>

                <p className="text-lg md:text-xl font-light leading-relaxed">
                  Send a link to something you've built or shipped recently. No CV needed.
                </p>
              </div>

              <a
                href="mailto:hello@p0stman.com?subject=I want to join the roster"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light text-lg"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
                Get in Touch
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
                Want to see
                <br />
                what we build?
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
                Check out our case studies to see the kind of work you'd be part of - products shipped in days, not months.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light text-lg"
                >
                  View Case Studies
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors font-light text-lg"
                >
                  About P0STMAN
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
