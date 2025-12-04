import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Rocket,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Lightbulb,
  Code2,
  Clock,
  Shield,
  Plus,
  Minus,
  HelpCircle,
  Zap
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "Can't you just fix my existing code?",
    answer: "I could, but it would take longer and cost more. Vibe-coded apps aren't built for maintainability. Retrofitting production requirements creates more problems than starting fresh."
  },
  {
    question: "What if my prototype is really close?",
    answer: "Send it over. If building on it makes sense, I'll tell you. But 90% of the time, a clean rebuild is faster."
  },
  {
    question: "What tech stack do you use?",
    answer: "Next.js, React, Supabase, Vercel, Stripe. Modern, scalable, maintainable. Same tools under the hood — just architected properly."
  },
  {
    question: "How fast can you start?",
    answer: "Usually within a week. Sometimes sooner."
  }
];

const processSteps = [
  {
    step: "1",
    title: "Review your prototype",
    description: "I look at what you built, understand the intent, identify what's missing"
  },
  {
    step: "2",
    title: "Start fresh with proper architecture",
    description: "Your prototype becomes the spec. I build production-ready code that scales."
  },
  {
    step: "3",
    title: "Ship fast",
    description: "AI-first workflows mean 40% faster than traditional agencies. MVPs in 6 days. Production apps in 3 weeks."
  },
  {
    step: "4",
    title: "Stay involved",
    description: "30-day bug-free guarantee. I don't build and ghost."
  }
];

export default function FromPrototypeToProduction() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [problemRef, problemInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [reframeRef, reframeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyMeRef, whyMeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>From Prototype to Production | AI-Built Apps to Production | P0STMAN</title>
          <meta name="description" content="Built a prototype in Bolt, Lovable, or Replit? I take AI-built prototypes to production — fast. 20+ years experience, vibe coding expert since day one." />
          <meta name="keywords" content="prototype to production developer, AI prototype to production, vibe coding to production, MVP from prototype, Bolt to production, Lovable to production" />
          <meta property="og:title" content="From Prototype to Production | AI-Built Apps to Production | P0STMAN" />
          <meta property="og:description" content="Built a prototype in Bolt, Lovable, or Replit? I take AI-built prototypes to production — fast." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="From Prototype to Production | P0STMAN" />
          <meta name="twitter:description" content="Built a prototype in Bolt, Lovable, or Replit? I take AI-built prototypes to production — fast." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/from-prototype-to-production" />
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
                  <Rocket className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-medium text-sm tracking-wide">Prototype to Production</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  Built a prototype.<br />Now what?
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Bolt, Lovable, Replit — these tools are incredible for validation. But production needs something more. I've been vibe coding since before it had a name. I know exactly where you got stuck.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Let's Talk
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
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">You've hit the wall</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  You built something real. A working prototype that proves your idea has legs. But now:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "The database is getting messy",
                    "Auth breaks in weird ways",
                    "You need features the AI can't handle",
                    "The code works but won't scale",
                    "You've spent 40 hours prompting and you're further from launch than when you started"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={problemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg text-gray-600">
                  This is the prototype-to-production gap. It's where most vibe coding projects stall.
                  <span className="block mt-2 font-medium text-gray-900">And it's completely normal.</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reframe Section */}
        <section ref={reframeRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={reframeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">Your prototype isn't a failure. It's discovery.</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  That thing you built? It's not wasted work.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { title: "Visualised", desc: "Your vision is now tangible" },
                    { title: "Tested", desc: "Assumptions have been validated" },
                    { title: "Clarified", desc: "You know what you actually want" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={reframeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-green-50 rounded-xl border border-green-100"
                    >
                      <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg text-gray-700">
                  That's months of traditional requirements gathering — done in days.<br />
                  <span className="font-medium">The prototype did its job. Now you need someone who can take it from here.</span>
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
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-green-400" />
                  <h2 className="text-3xl md:text-4xl font-thin">I was vibe coding before it had a name</h2>
                </div>

                <div className="space-y-6 text-gray-300">
                  <p>
                    In October 2024, Bolt.new launched. I was one of the first power users.
                  </p>
                  <p>
                    While others made landing pages, I shipped a full CRM — database, Stripe payments, auth, the works. Live. Production.
                  </p>
                  <p className="text-white font-medium">
                    The Bolt CEO reached out. Asked how I'd done it. Said they had power users, and then there was me.
                  </p>
                  <p>
                    20 years of building products had trained me for this. The way I describe features, report bugs, and give context is what we now call prompt engineering and context engineering. I was doing it before the terms existed.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-gray-800 rounded-xl">
                  <h3 className="text-white font-medium mb-4">I've built production apps with:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {["Bolt.new", "Lovable", "Replit", "Claude Code", "Cursor"].map((tool, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-lg text-white">
                  I know where these tools break. I know why you got stuck. I know how to get past it.
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
                  <Code2 className="w-6 h-6 text-green-600" />
                  <h2 className="text-3xl md:text-4xl font-thin">I don't fix vibe code. I start fresh.</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  It's faster, cheaper, and cleaner to rebuild than reverse-engineer what Bolt or Lovable generated. AI-generated code optimises for speed, not maintainability. Fixing it creates more problems than starting with solid foundations.
                </p>

                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-6 items-start p-6 bg-gray-50 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
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

        {/* Platform Links Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-thin text-center mb-8">Looking for help with a specific tool?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Lovable to Production", desc: "Taking Lovable prototypes to launch", href: "/lovable-to-production" },
                  { title: "Bolt to Production", desc: "From Bolt.new to scalable apps", href: "/bolt-to-production" },
                  { title: "Replit to Production", desc: "Moving beyond Replit Agent", href: "/replit-to-production" },
                  { title: "Hire a Developer", desc: "What to look for after prototyping", href: "/hire-developer-after-prototype" }
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all group"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">{link.title}</h3>
                      <p className="text-sm text-gray-500">{link.desc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </Link>
                ))}
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
                  <Clock className="w-6 h-6 text-green-600" />
                  <h2 className="text-3xl md:text-4xl font-thin">Two phases, clear costs</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 1: Working Demo</h3>
                    <div className="text-3xl font-light text-green-600 mb-4">$5k-8k</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>1 week</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Functional build you can test with real users</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-green-50 rounded-2xl border border-green-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 2: Production Launch</h3>
                    <div className="text-3xl font-light text-green-600 mb-4">$10k-25k</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>2-3 weeks</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Fully deployed, scalable, ready for customers</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-center text-gray-600">
                  Not sure where you fit? Send me your project link. I'll tell you what it'll take.
                </p>

                <div className="flex justify-center mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
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
                  <HelpCircle className="w-6 h-6 text-green-600" />
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
                Your prototype proved the idea.<br />Let's build the product.
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Send me your Bolt, Lovable, or Replit project. I'll review it and tell you exactly what it'll take.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
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

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
