import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Terminal,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Code2,
  Clock,
  Plus,
  Minus,
  HelpCircle,
  Zap,
  X,
  Shield,
  Gauge,
  Wrench,
  Server
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "Can you continue building in Replit?",
    answer: "Replit's infrastructure isn't designed for production scale. Even if the code were perfect, you'd hit deployment and performance limits."
  },
  {
    question: "What if I've already deployed on Replit?",
    answer: "That works for testing and demos. For real users and real traffic, you need infrastructure designed for it."
  },
  {
    question: "Is Replit Agent code really that different from production code?",
    answer: "It's functional but not architected. Production code needs patterns for security, error handling, testing, monitoring, and maintenance. Agent-generated code skips most of that."
  },
  {
    question: "How long does the transition take?",
    answer: "For most projects, 1 week to working demo, 2-3 weeks to production. Depends on complexity."
  }
];

const processSteps = [
  {
    step: "1",
    title: "Share your Replit project",
    description: "I review the code, understand your intent, identify gaps"
  },
  {
    step: "2",
    title: "Map the production requirements",
    description: "What needs security? What needs scale? What features are missing?"
  },
  {
    step: "3",
    title: "Rebuild with proper architecture",
    description: "Next.js, Supabase, Vercel, Stripe — modern stack, production-ready"
  },
  {
    step: "4",
    title: "Deploy and document",
    description: "You get code you own, deployed, maintainable"
  }
];

const replitExcels = [
  "Zero environment setup",
  "Real-time collaboration",
  "Quick iteration and testing",
  "Learning and experimentation",
  "Proving concepts fast"
];

const replitAgentExcels = [
  "Taking natural language and producing working code",
  "Multi-file project generation",
  "Basic full-stack applications"
];

const replitWalls = [
  { icon: Gauge, title: "Performance issues", desc: "Replit's infrastructure isn't built for production scale" },
  { icon: Server, title: "Deployment limitations", desc: "Moving off Replit is harder than it should be" },
  { icon: Code2, title: "Code complexity", desc: "Agent-generated code works but isn't architected for long-term maintenance" },
  { icon: Shield, title: "Security gaps", desc: "Prototyping tools optimise for speed, not security" },
  { icon: Wrench, title: "Integration challenges", desc: "Connecting to external services, handling webhooks, complex auth" }
];

const productionRequires = [
  { title: "Performance", desc: "Handle real traffic, real data, real users" },
  { title: "Security", desc: "Protect user data, prevent attacks" },
  { title: "Maintainability", desc: "Code that can be updated and extended" },
  { title: "Reliability", desc: "Uptime, error handling, monitoring" },
  { title: "Scalability", desc: "Grow without rebuilding" }
];

const commonProjects = [
  { title: "SaaS applications", desc: "User management, subscriptions, dashboards" },
  { title: "Internal tools", desc: "Admin panels, data management, automation" },
  { title: "API services", desc: "Backend systems, integrations, data processing" },
  { title: "Web applications", desc: "Customer-facing apps with complex logic" },
  { title: "AI-powered tools", desc: "Chat interfaces, recommendation systems, automation" }
];

export default function ReplitToProduction() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [problemRef, problemInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [strengthsRef, strengthsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [gapRef, gapInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Replit to Production | Take Your Replit Agent App Live | P0STMAN</title>
          <meta name="description" content="Built something with Replit Agent but need it production-ready? I take Replit prototypes to production — fast. Vibe coding expert since 2024." />
          <meta name="keywords" content="Replit to production, Replit Agent developer, Replit prototype to production, Hire developer after Replit, Replit Agent to MVP, Replit production ready" />
          <meta property="og:title" content="Replit to Production | Take Your Replit Agent App Live | P0STMAN" />
          <meta property="og:description" content="Built something with Replit Agent but need it production-ready? I take Replit prototypes to production — fast." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Replit to Production | P0STMAN" />
          <meta name="twitter:description" content="Built something with Replit Agent but need it production-ready? I take Replit prototypes to production — fast." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/replit-to-production" />
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
                  <Terminal className="w-5 h-5 text-blue-500" />
                  <span className="text-blue-500 font-medium text-sm tracking-wide">Replit to Production</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  Replit got you started.<br />Now let's get you launched.
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Replit Agent is powerful for prototyping. But production needs security, scale, and architecture that sticks. I've been shipping AI-built apps since before vibe coding had a name.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Send Me Your Replit Project
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
                  <AlertCircle className="w-6 h-6 text-blue-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">The Replit Reality — Great for starting. Hard to finish.</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  Replit Agent lets you describe what you want and watch it build. No environment setup. No configuration headaches. Just describe and go. But then you hit the walls:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {replitWalls.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={problemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200"
                    >
                      <item.icon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{item.title}</span>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg text-gray-600">
                  If you've reached these limits, you've done exactly what Replit is designed for: validated your idea quickly.
                  <span className="block mt-2 font-medium text-gray-900">Now you need someone who can build the production version.</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section ref={strengthsRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={strengthsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8">What Replit Does Well — Credit where it's due</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="font-medium text-gray-900 mb-4">Replit excels at:</h3>
                    <ul className="space-y-3">
                      {replitExcels.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                    <h3 className="font-medium text-gray-900 mb-4">Replit Agent specifically is great at:</h3>
                    <ul className="space-y-3">
                      {replitAgentExcels.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-indigo-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-lg text-gray-700 text-center">
                  Your Replit prototype proved the idea works. That's valuable. Don't dismiss it.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gap Section */}
        <section ref={gapRef} className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={gapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8">Why Replit Projects Need Rebuilding</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-medium mb-4 text-blue-400">Replit optimises for:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-300">
                        <Zap className="w-4 h-4 text-blue-400" />
                        <span><strong>Speed of creation</strong> — Get something working fast</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <Zap className="w-4 h-4 text-blue-400" />
                        <span><strong>Ease of use</strong> — No configuration, no setup</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <Zap className="w-4 h-4 text-blue-400" />
                        <span><strong>Learning</strong> — Great for understanding concepts</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-4 text-green-400">Production requires:</h3>
                    <ul className="space-y-3">
                      {productionRequires.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span><strong>{item.title}</strong> — {item.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-lg text-white text-center">
                  These are different goals. A Replit prototype isn't supposed to be production-ready.<br />
                  <span className="text-gray-300">It's supposed to prove the idea is worth building properly.</span>
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
                  <Code2 className="w-6 h-6 text-blue-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">Your prototype becomes the spec</h2>
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
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h3 className="font-medium text-gray-900 mb-2">Why not just improve the Replit code?</h3>
                  <p className="text-gray-600">
                    Replit Agent generates code that works. But it's not architected for production. Retrofitting security, scale, and maintainability into that codebase takes longer than starting fresh with solid foundations. Your Replit project tells me what you want. I build something that can actually deliver it.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-thin text-center mb-8">What I typically build from Replit prototypes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {commonProjects.map((project, index) => (
                  <div key={index} className="p-6 bg-white rounded-xl border border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-gray-600">
                If Replit Agent built it, I can probably take it to production.
              </p>
            </div>
          </div>
        </section>

        {/* Credibility Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-thin mb-4">I've been in this space since the beginning</h2>
              <p className="text-gray-600 mb-6">
                I've been building with AI coding tools since Bolt.new launched in October 2024. Shipped production apps when nobody else had figured out how.
              </p>
              <p className="text-gray-700">
                The founders of these tools know who I am. I've consulted with Bolt's team, been recognised by Replit's community.
              </p>
              <p className="text-gray-900 font-medium mt-4">
                I'm not a developer who looks at vibe-coded projects with confusion. I'm someone who's pushed these tools further than most — and knows exactly where they stop.
              </p>
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
                  <Clock className="w-6 h-6 text-blue-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">From Replit to live</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 1: Working Demo</h3>
                    <div className="text-3xl font-light text-blue-500 mb-4">$5k-8k</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>1 week</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Your Replit prototype rebuilt with proper architecture</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Functional, testable, ready for feedback</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-blue-50 rounded-2xl border border-blue-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 2: Production Launch</h3>
                    <div className="text-3xl font-light text-blue-500 mb-4">$10k-25k</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>2-3 weeks</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Fully deployed, scalable, ready for customers</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>30-day bug-free guarantee</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-center text-gray-600">
                  Not sure what you need? Share your Replit project. I'll review it and give you a clear path forward.
                </p>
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
                  <HelpCircle className="w-6 h-6 text-blue-500" />
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
                Ready to Go Production?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Send me your Replit project. I'll review what you've built and tell you exactly what it'll take to launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
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
                <Link to="/from-prototype-to-production" className="text-blue-500 hover:text-blue-600 underline">
                  From Prototype to Production — The full guide
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/bolt-to-production" className="text-blue-500 hover:text-blue-600 underline">
                  Bolt to Production
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/lovable-to-production" className="text-blue-500 hover:text-blue-600 underline">
                  Lovable to Production
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
        />

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
