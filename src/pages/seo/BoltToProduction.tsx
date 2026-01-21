import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Zap,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Code2,
  Clock,
  Plus,
  Minus,
  HelpCircle,
  Trophy,
  X
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "Can you just continue building in Bolt?",
    answer: "I could, but you'd hit the same ceilings again. Bolt is great for 0-to-prototype. Production needs different foundations."
  },
  {
    question: "Do you use Bolt in your own workflow?",
    answer: "I did extensively in 2024. Now I primarily use Claude Code and Cursor — more control, better for production work. But I still understand Bolt deeply."
  },
  {
    question: "What if my Bolt project is almost working?",
    answer: "Send it over. If it genuinely makes sense to build on what you have, I'll tell you. But usually, a clean rebuild is faster and cheaper."
  },
  {
    question: "Can you help me understand where I went wrong?",
    answer: "You didn't go wrong. You used the tool correctly — you just reached its limits. That's exactly what the tool is for: getting to the point where you know what you need."
  }
];

const processSteps = [
  {
    step: "1",
    title: "You share your Bolt project",
    description: "I review the code, understand what you've built, identify the gaps"
  },
  {
    step: "2",
    title: "I map out what's needed",
    description: "Security, scale, integrations, features Bolt couldn't handle"
  },
  {
    step: "3",
    title: "I rebuild with proper architecture",
    description: "Same functionality, production-ready code. Next.js, Supabase, Vercel, Stripe."
  },
  {
    step: "4",
    title: "You get code you own",
    description: "Deployed, documented, maintainable. Full GitHub access."
  }
];

const boltExcels = [
  "Rapid full-stack scaffolding",
  "React + Tailwind generation",
  "Supabase integration",
  "Letting developers see and edit the code",
  "Fast iteration on UI and basic features"
];

const boltBreaks = [
  "Complex state management — Multi-step flows, conditional logic, real-time updates",
  "Backend complexity — Bolt handles basic CRUD but struggles with complex business logic",
  "Third-party integrations — Payment flows, external APIs, webhooks",
  "Performance at scale — Fine for demos, struggles under real load",
  "Code maintainability — Generated code is functional but not architected for long-term development"
];

const builtProjects = [
  { title: "Chilled CRM", desc: "Full CRM system, my original Bolt build that got the CEO's attention" },
  { title: "Booking platforms", desc: "Calendar, payments, notifications, multi-user" },
  { title: "SaaS dashboards", desc: "Admin panels, user management, analytics" },
  { title: "AI-integrated apps", desc: "Chat interfaces, workflow automation" },
  { title: "Marketplaces", desc: "Multi-sided platforms with complex transaction logic" }
];

export default function BoltToProduction() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [problemRef, problemInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [strengthsRef, strengthsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Bolt to Production | Take Your Bolt.new App Live | POSTMAN</title>
          <meta name="description" content="Built something in Bolt.new but need it production-ready? I was one of Bolt's first power users — shipped a full CRM before anyone else. Let's get yours live." />
          <meta name="keywords" content="Bolt to production, Bolt.new developer, Bolt.new to production, Hire developer after Bolt, Bolt prototype to MVP, Bolt.new production ready" />
          <meta property="og:title" content="Bolt to Production | Take Your Bolt.new App Live | POSTMAN" />
          <meta property="og:description" content="Built something in Bolt.new but need it production-ready? I was one of Bolt's first power users." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Bolt to Production | POSTMAN" />
          <meta name="twitter:description" content="Built something in Bolt.new but need it production-ready? I was one of Bolt's first power users." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/bolt-to-production" />
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
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-yellow-600 font-medium text-sm tracking-wide">Bolt to Production</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  I shipped production on Bolt<br />before anyone else.
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  In October 2024, I built a full CRM on Bolt.new — database, Stripe, auth, deployed live. The CEO reached out to ask how. I've been pushing these tools to their limits ever since.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:shadow-lg hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Send Me Your Bolt Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section ref={storyRef} className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-3xl md:text-4xl font-thin">The Bolt Story — I was there from day one</h2>
                </div>

                <div className="space-y-6 text-gray-300">
                  <p>
                    When Bolt.new launched, I was one of the first to go beyond landing pages.
                  </p>
                  <p>
                    I built <span className="text-white font-medium">Chilled CRM</span> — a full customer relationship management system with:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-400" />
                      <span>Supabase database</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-400" />
                      <span>Stripe payment integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-400" />
                      <span>User authentication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-400" />
                      <span>Production deployment</span>
                    </li>
                  </ul>
                  <p className="text-white font-medium text-lg">
                    Eric, Bolt's CEO, reached out personally. Said they had power users, and then there was me. Nobody else had shipped a production app on their platform at that point.
                  </p>
                  <p>
                    I spent time consulting with the Bolt team, helping them understand how I'd done it. Almost launched the Bolt Builders community with them.
                  </p>
                  <p className="text-white">
                    Point is: I know Bolt inside and out. I know where it excels. I know exactly where it breaks.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section ref={problemRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-6 h-6 text-yellow-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">Where Bolt Breaks — The limits you've probably hit</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  Bolt is the most developer-friendly vibe coding tool. But it still has ceilings:
                </p>

                <div className="space-y-4 mb-8">
                  {boltBreaks.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={problemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-100"
                    >
                      <X className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg text-gray-600">
                  If you've hit these walls, you're not doing anything wrong. You've just reached the edge of what the tool was designed for.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section ref={strengthsRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={strengthsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-4">What Bolt Does Right</h2>
                <p className="text-lg text-gray-600 mb-8">And why your prototype matters</p>

                <div className="p-6 bg-white rounded-xl border border-gray-200 mb-8">
                  <h3 className="font-medium text-gray-900 mb-4">Bolt excels at:</h3>
                  <ul className="space-y-3">
                    {boltExcels.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-yellow-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg text-gray-700 text-center">
                  Your Bolt prototype isn't a failure. It's a validated spec.<br />
                  <span className="font-medium">You've proven the idea works. You've figured out what you want. That's months of discovery — compressed into days.</span>
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
                  <Code2 className="w-6 h-6 text-yellow-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">From prototype to production</h2>
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
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-100">
                  <h3 className="font-medium text-gray-900 mb-2">Why rebuild instead of continuing in Bolt?</h3>
                  <p className="text-gray-600">
                    Bolt generates functional code, but it's not architected for production. The patterns work for prototyping — they don't work for scale, security, and long-term maintenance. I use your Bolt project as the spec. Then I build something solid.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Built Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-thin text-center mb-8">What I've Built From Bolt Prototypes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {builtProjects.map((project, index) => (
                  <div key={index} className="p-6 bg-white rounded-xl border border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-gray-600">
                If you've built it in Bolt, I can take it to production.
              </p>
            </div>
          </div>
        </section>

        {/* Bolt Advantage Section */}
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-thin mb-4">The Bolt Advantage</h2>
              <p className="text-gray-600 mb-6">Why Bolt projects are easier to work with</p>
              <p className="text-gray-700">
                Compared to other vibe coding tools, Bolt has an edge: <span className="font-medium">you can see and edit the code.</span>
              </p>
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">I can review exactly what you've built</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">I understand your intent from the code itself</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">The transition to production is cleaner</p>
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
                  <Clock className="w-6 h-6 text-yellow-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">From Bolt to live</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 1: Working Demo</h3>
                    <div className="text-3xl font-light text-yellow-600 mb-4">$5k-8k</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-yellow-500" />
                        <span>1 week</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-yellow-500" />
                        <span>Your Bolt prototype rebuilt with proper architecture</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-yellow-500" />
                        <span>Functional, testable, ready for feedback</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-yellow-50 rounded-2xl border border-yellow-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 2: Production Launch</h3>
                    <div className="text-3xl font-light text-yellow-600 mb-4">$10k-25k</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-yellow-500" />
                        <span>2-3 weeks</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-yellow-500" />
                        <span>Fully deployed, scalable, ready for customers</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-yellow-500" />
                        <span>30-day bug-free guarantee</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-center text-gray-600">
                  Not sure what you need? Send me your Bolt project. I'll tell you exactly what it'll take.
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
                  <HelpCircle className="w-6 h-6 text-yellow-500" />
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
                Send me your Bolt project. I'll review what you've built and give you a clear path to launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:shadow-lg hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
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
                <Link to="/from-prototype-to-production" className="text-yellow-600 hover:text-yellow-700 underline">
                  From Prototype to Production — The full guide
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/lovable-to-production" className="text-yellow-600 hover:text-yellow-700 underline">
                  Lovable to Production
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/vibe-coding-expert" className="text-yellow-600 hover:text-yellow-700 underline">
                  Vibe Coding Expert
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
