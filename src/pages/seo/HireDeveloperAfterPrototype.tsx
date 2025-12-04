import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  UserSearch,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Code2,
  Clock,
  Plus,
  Minus,
  HelpCircle,
  X,
  Search,
  MessageSquare
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "What if I want to stay with my current developer?",
    answer: "If they're delivering, great. This page is for people who've struggled to find the right fit."
  },
  {
    question: "Can you just consult instead of build?",
    answer: "I can review your prototype and give you a clear scope. But I prefer to build — that's where I add the most value."
  },
  {
    question: "What if my prototype is really basic?",
    answer: "That's fine. Even a simple Lovable demo tells me what you want. I'll build from there."
  },
  {
    question: "What if I'm still iterating on the prototype?",
    answer: "Lock in the core features you know you want. I'll build those while you keep experimenting."
  }
];

const processSteps = [
  {
    step: "1",
    title: "You send me your project",
    description: "Lovable link, Bolt.new project, Replit URL — whatever you've built."
  },
  {
    step: "2",
    title: "I review and scope",
    description: "I'll tell you what works, what's missing, and exactly what it'll take to go production."
  },
  {
    step: "3",
    title: "Rebuild with proper architecture",
    description: "Your prototype becomes the spec. I build production-ready code using Next.js, Supabase, Vercel, Stripe."
  },
  {
    step: "4",
    title: "Deploy and support",
    description: "Deployed, documented, yours. 30-day bug-free guarantee."
  }
];

const lookFor = [
  {
    title: "They actually use vibe coding tools",
    desc: "Not \"I've heard of Bolt\" — actually uses them. Knows the strengths. Knows the limits. Understands why you got stuck where you did."
  },
  {
    title: "They respect your prototype",
    desc: "Your prototype isn't garbage. It's compressed requirements. It's validated assumptions. The right developer sees it as valuable input, not a mess to clean up."
  },
  {
    title: "They start fresh (and explain why)",
    desc: "The right approach is usually to rebuild, not fix. AI-generated code optimises for speed, not maintainability. A developer who wants to \"continue where you left off\" probably doesn't understand the code."
  },
  {
    title: "They've shipped production",
    desc: "Prototyping and production are different skills. Make sure they've actually deployed apps that handle real users, real data, real edge cases."
  },
  {
    title: "They work fast",
    desc: "If they're estimating weeks for basic features, they're probably not using AI-first workflows. The same tools that helped you build fast should help them build fast too."
  }
];

const redFlags = [
  {
    flag: "\"This code is a mess, I'll need to rewrite everything\"",
    why: "True, but if they're saying it with judgment rather than understanding, they won't build what you actually want."
  },
  {
    flag: "\"I've never used Lovable/Bolt but I can figure it out\"",
    why: "They'll spend your money learning. Find someone who already knows."
  },
  {
    flag: "\"Let me continue building on what you have\"",
    why: "Vibe-coded projects aren't designed for continuation. This will cost more and take longer than rebuilding."
  },
  {
    flag: "\"This will take 3 months\"",
    why: "For a prototype-to-production project? Red flag. AI-first development is faster."
  },
  {
    flag: "\"I don't believe in AI coding tools\"",
    why: "Then they're not the right fit for your project. You need someone who lives in this ecosystem."
  }
];

const questionsToAsk = [
  "Have you shipped production apps from Lovable/Bolt/Replit prototypes before?",
  "Will you rebuild or continue my existing code?",
  "How do you use AI in your own workflow?",
  "What's your timeline for a working demo?",
  "Can you show me similar projects you've taken to production?"
];

const comparisonTable = [
  { approach: "Traditional agency", timeline: "8-12 weeks", cost: "$30k-80k", result: "Overbuilt, slow, expensive" },
  { approach: "Freelancer who doesn't get it", timeline: "4-6 weeks", cost: "$15k-25k", result: "Frustrated process, mixed results" },
  { approach: "Continue in Lovable/Bolt", timeline: "Forever", cost: "Credits + time", result: "Never production-ready" },
  { approach: "Developer who knows vibe coding", timeline: "3-4 weeks", cost: "$10k-25k", result: "Production-ready, fast, understood" }
];

export default function HireDeveloperAfterPrototype() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [problemRef, problemInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [lookForRef, lookForInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [redFlagsRef, redFlagsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [questionsRef, questionsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyMeRef, whyMeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [compareRef, compareInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Hire a Developer After Prototyping | Lovable, Bolt, Replit | P0STMAN</title>
          <meta name="description" content="Built a prototype in Lovable, Bolt, or Replit? Here's what to look for when hiring a developer to take it to production." />
          <meta name="keywords" content="Hire developer after Lovable, Hire developer after Bolt, Find developer for prototype, Developer for AI prototype, Hire developer after vibe coding, Take prototype to production developer" />
          <meta property="og:title" content="Hire a Developer After Prototyping | Lovable, Bolt, Replit | P0STMAN" />
          <meta property="og:description" content="Built a prototype in Lovable, Bolt, or Replit? Here's what to look for when hiring a developer." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Hire a Developer After Prototyping | P0STMAN" />
          <meta name="twitter:description" content="Built a prototype in Lovable, Bolt, or Replit? Here's what to look for when hiring a developer." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/hire-developer-after-prototype" />
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
                  <UserSearch className="w-5 h-5 text-teal-500" />
                  <span className="text-teal-500 font-medium text-sm tracking-wide">Hire the Right Developer</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  You've built a prototype.<br />Now you need the right developer.
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Not every developer understands vibe-coded projects. Here's what to look for — and why it matters.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:from-teal-600 hover:to-cyan-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Talk to Someone Who Gets It
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section ref={problemRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">The Wrong Developer Will Waste Your Money</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  Most developers don't understand what you've built.
                </p>

                <div className="space-y-4 p-6 bg-white rounded-xl border border-gray-200">
                  <p className="text-gray-700">
                    You show them your Lovable project. <span className="font-medium">They look confused.</span>
                  </p>
                  <p className="text-gray-700">
                    You explain you built it with AI. <span className="font-medium">They look skeptical.</span>
                  </p>
                  <p className="text-gray-700">
                    They quote you weeks of work to "fix" something they don't really understand.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <p className="text-gray-600">This happens constantly. Traditional developers see vibe-coded projects as:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center gap-2 text-gray-600">
                      <X className="w-4 h-4 text-red-400" />
                      <span>Messy code that needs rewriting (true, but they don't know why)</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <X className="w-4 h-4 text-red-400" />
                      <span>Amateur work (wrong — you validated an idea)</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <X className="w-4 h-4 text-red-400" />
                      <span>Something to judge rather than learn from</span>
                    </li>
                  </ul>
                </div>

                <p className="mt-8 text-lg font-medium text-teal-600">
                  You need someone who actually uses these tools.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Look For Section */}
        <section ref={lookForRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={lookForInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Search className="w-6 h-6 text-teal-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">What to Look For — The right developer for your prototype</h2>
                </div>

                <div className="space-y-6 mt-8">
                  {lookFor.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={lookForInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4 items-start p-6 bg-teal-50 rounded-xl border border-teal-100"
                    >
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Red Flags Section */}
        <section ref={redFlagsRef} className="py-24 bg-red-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={redFlagsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">Red Flags — Developers who will waste your time</h2>
                </div>

                <div className="space-y-4 mt-8">
                  {redFlags.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={redFlagsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-white rounded-xl border border-red-200"
                    >
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 mb-2">{item.flag}</p>
                          <p className="text-gray-600 text-sm">{item.why}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Questions to Ask Section */}
        <section ref={questionsRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={questionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-6 h-6 text-teal-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">Questions to Ask — Before you hire anyone</h2>
                </div>

                <div className="space-y-4 mt-8">
                  {questionsToAsk.map((question, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={questionsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4 items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold flex-shrink-0 text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{question}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="mt-6 text-gray-500 text-sm">
                  Look for specific examples, not theoretical answers. Proof matters more than promises.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Me Section */}
        <section ref={whyMeRef} className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={whyMeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8">Why I'm the Right Fit</h2>

                <p className="text-lg text-gray-300 mb-6">I was vibe coding before it had a name.</p>

                <div className="space-y-4 text-gray-300">
                  <p>
                    <span className="text-white font-medium">October 2024:</span> Bolt.new launches. While others make landing pages, I ship a full CRM. Database, Stripe, auth, deployed live.
                  </p>
                  <p className="text-white font-medium">
                    The result: Bolt's CEO reaches out. Says they have power users, and then there's me. I consult with their team on how I pushed their tool further than anyone else.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-gray-800 rounded-xl">
                  <h3 className="text-white font-medium mb-4">Since then:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-teal-400" />
                      <span>Built production apps from Lovable prototypes</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-teal-400" />
                      <span>Built production apps from Replit Agent projects</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-teal-400" />
                      <span>Helped dozens of founders bridge the prototype-to-production gap</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-teal-400" />
                      <span>20+ years of product development experience</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-teal-400" />
                      <span>1000+ products shipped</span>
                    </li>
                  </ul>
                </div>

                <p className="mt-8 text-lg text-white">
                  I don't look at your prototype with confusion. I look at it with recognition. I know exactly where you got stuck because I've been there.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-6 h-6 text-teal-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">How I Work — From your prototype to production</h2>
                </div>

                <div className="space-y-6 mt-8">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-6 items-start p-6 bg-gray-50 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section ref={compareRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={compareInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8 text-center">Compare Your Options</h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl overflow-hidden border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Approach</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Timeline</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Cost</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {comparisonTable.map((row, index) => (
                        <tr key={index} className={index === comparisonTable.length - 1 ? 'bg-teal-50' : ''}>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">{row.approach}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{row.timeline}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{row.cost}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{row.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 text-center text-gray-600">
                  I'm the last option. Fast because I understand the tools. Affordable because I use AI. Reliable because I've done it before.
                </p>
              </motion.div>
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
                  <Clock className="w-6 h-6 text-teal-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">What to expect</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 1: Working Demo</h3>
                    <div className="text-3xl font-light text-teal-500 mb-4">$5k-8k</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-teal-500" />
                        <span>1 week</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-teal-500" />
                        <span>Your prototype rebuilt properly, ready for testing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-teal-50 rounded-2xl border border-teal-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 2: Production Launch</h3>
                    <div className="text-3xl font-light text-teal-500 mb-4">$10k-25k</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-teal-500" />
                        <span>2-3 weeks</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-teal-500" />
                        <span>Deployed, scalable, customer-ready</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-100 rounded-xl">
                  <p className="text-gray-700 text-center">
                    This is faster than most developers because:
                  </p>
                  <ul className="mt-4 space-y-2 max-w-lg mx-auto">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-teal-500" />
                      <span>I understand vibe-coded projects (no learning curve)</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-teal-500" />
                      <span>I use AI-first workflows myself (same speed you experienced)</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-teal-500" />
                      <span>I've done this many times before (no surprises)</span>
                    </li>
                  </ul>
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
                  <HelpCircle className="w-6 h-6 text-teal-500" />
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
                Ready to Hire the Right Developer?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Send me your prototype. I'll review it and tell you exactly what it'll take to go production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:from-teal-600 hover:to-cyan-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
                >
                  Send Your Project
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
                <Link to="/from-prototype-to-production" className="text-teal-500 hover:text-teal-600 underline">
                  From Prototype to Production — The full guide
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/vibe-coding-expert" className="text-teal-500 hover:text-teal-600 underline">
                  Vibe Coding Expert — My background
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/bolt-to-production" className="text-teal-500 hover:text-teal-600 underline">
                  Bolt to Production
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/lovable-to-production" className="text-teal-500 hover:text-teal-600 underline">
                  Lovable to Production
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
