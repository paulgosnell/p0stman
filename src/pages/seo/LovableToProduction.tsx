import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Heart,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Code2,
  Clock,
  Plus,
  Minus,
  HelpCircle,
  Zap,
  X
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "Can you just fix my Lovable code?",
    answer: "Lovable doesn't export clean code — and even if it did, retrofitting production requirements takes longer than rebuilding. I use your prototype as the spec, not the foundation."
  },
  {
    question: "Do I lose what I built?",
    answer: "No. Your Lovable prototype stays exactly as is. I build something new based on what you've created. You can keep using Lovable for testing while I build production."
  },
  {
    question: "What if I'm still iterating in Lovable?",
    answer: "That's fine. Lock in the core features you know you want, and I'll build those. You can keep experimenting in Lovable for new ideas."
  },
  {
    question: "How is your approach different from other developers?",
    answer: "I actually use these tools. I know Lovable, Bolt, Replit from the inside. Most developers look at vibe-coded projects with confusion or disdain. I look at them as validated specs."
  }
];

const processSteps = [
  {
    step: "1",
    title: "You send me your Lovable project",
    description: "I review what you've built, what works, what doesn't"
  },
  {
    step: "2",
    title: "I understand your intent",
    description: "Not just what's there, but what you were trying to achieve"
  },
  {
    step: "3",
    title: "I rebuild it properly",
    description: "Same functionality, proper architecture. Next.js, Supabase, Vercel, Stripe — built to scale."
  },
  {
    step: "4",
    title: "You get production code you own",
    description: "Deployed, documented, maintainable. Yours forever."
  }
];

const lovableExcels = [
  "Rapid UI generation",
  "Supabase integration for basic data",
  "Visualising ideas quickly",
  "Non-technical founders getting something working"
];

const lovableStruggles = [
  "Complex business logic",
  "Custom payment flows",
  "Third-party integrations",
  "Performance at scale",
  "Code you can maintain long-term",
  "Mobile responsiveness edge cases"
];

const commonProjects = [
  { title: "SaaS dashboards", desc: "Admin panels, user management, analytics" },
  { title: "Booking platforms", desc: "Calendars, payments, notifications" },
  { title: "Marketplaces", desc: "Multi-sided platforms with complex logic" },
  { title: "AI-powered apps", desc: "Chat interfaces, recommendation engines, automation" },
  { title: "Customer portals", desc: "Secure access, data management, integrations" }
];

export default function LovableToProduction() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [problemRef, problemInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [strengthsRef, strengthsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyMeRef, whyMeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Lovable to Production | Take Your Lovable Prototype Live | POSTMAN</title>
          <meta name="description" content="Built something in Lovable.dev but hit a wall? I take Lovable prototypes to production — fast. Vibe coding expert since 2024." />
          <meta name="keywords" content="Lovable to production, Lovable developer, Hire developer after Lovable, Lovable.dev to production, Lovable prototype developer, Take Lovable app live" />
          <meta property="og:title" content="Lovable to Production | Take Your Lovable Prototype Live | POSTMAN" />
          <meta property="og:description" content="Built something in Lovable.dev but hit a wall? I take Lovable prototypes to production — fast." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Lovable to Production | POSTMAN" />
          <meta name="twitter:description" content="Built something in Lovable.dev but hit a wall? I take Lovable prototypes to production — fast." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/lovable-to-production" />
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
                  <Heart className="w-5 h-5 text-pink-500" />
                  <span className="text-pink-500 font-medium text-sm tracking-wide">Lovable to Production</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  Built something in Lovable.<br />Now you need it to actually work.
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Lovable is brilliant for prototyping. But production needs proper architecture, security, and scale. I've shipped dozens of AI-prototyped apps to production. Let's get yours live.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Send Me Your Lovable Project
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
                  <AlertCircle className="w-6 h-6 text-pink-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">Lovable helped you visualise your idea</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  You described what you wanted. Lovable built it. You've got a working prototype that proves your concept. But now you're hitting limits:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { title: "Supabase is getting messy", desc: "Tables you didn't plan for, relationships that don't quite work" },
                    { title: "The UI breaks on mobile", desc: "Or on certain browsers, or when users do unexpected things" },
                    { title: "You need custom features", desc: "Payment flows, integrations, logic that Lovable can't figure out" },
                    { title: "It's slow", desc: "Works fine for you, but won't handle 100 users" },
                    { title: "You can't export the code", desc: "Lovable doesn't let you take it elsewhere" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={problemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200"
                    >
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{item.title}</span>
                        <span className="text-gray-600"> — {item.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg text-gray-600">
                  This is normal. Lovable optimises for speed and validation, not production.
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
                <h2 className="text-3xl md:text-4xl font-thin mb-8">What Lovable Does Well — And where it stops</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Lovable excels at:
                    </h3>
                    <ul className="space-y-3">
                      {lovableExcels.map((item, index) => (
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
                      Lovable struggles with:
                    </h3>
                    <ul className="space-y-3">
                      {lovableStruggles.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <X className="w-4 h-4 text-red-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-lg text-gray-700 text-center">
                  The tool did its job. It validated your idea in days instead of months.<br />
                  <span className="font-medium">Now you need someone who can build the real thing.</span>
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
                  <Zap className="w-6 h-6 text-pink-400" />
                  <h2 className="text-3xl md:text-4xl font-thin">Why I Understand Lovable</h2>
                </div>

                <div className="space-y-6 text-gray-300">
                  <p>
                    I've been vibe coding since before the term existed.
                  </p>
                  <p>
                    When Bolt.new launched in October 2024, I was one of the first to push it to production. Full CRM with database, Stripe, auth — live.
                  </p>
                  <p className="text-white font-medium">
                    The Bolt CEO reached out. Asked how I'd done it.
                  </p>
                  <p>
                    I've since built with Lovable, Replit, and every major vibe coding tool. I know exactly where they break and why.
                  </p>
                  <p className="text-white">
                    More importantly: I know how to take what you've built and turn it into something that scales.
                  </p>
                </div>
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
                  <Code2 className="w-6 h-6 text-pink-500" />
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
                      <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-pink-50 rounded-xl border border-pink-100">
                  <h3 className="font-medium text-gray-900 mb-2">Why rebuild instead of fix?</h3>
                  <p className="text-gray-600">
                    Lovable generates code optimised for speed, not maintainability. Trying to retrofit production requirements into that codebase takes longer and costs more than starting fresh. Your prototype is the spec. I use it to build something solid.
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
              <h2 className="text-2xl font-thin text-center mb-8">What I typically build from Lovable prototypes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {commonProjects.map((project, index) => (
                  <div key={index} className="p-6 bg-white rounded-xl border border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-gray-600">
                If you built it in Lovable, I can probably take it to production.
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
                  <Clock className="w-6 h-6 text-pink-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">From Lovable to live</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 1: Working Demo</h3>
                    <div className="text-3xl font-light text-pink-500 mb-4">$5k-8k</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-pink-500" />
                        <span>1 week</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-pink-500" />
                        <span>Your Lovable prototype rebuilt with proper architecture</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-pink-500" />
                        <span>Functional, testable, ready for feedback</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-pink-50 rounded-2xl border border-pink-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Phase 2: Production Launch</h3>
                    <div className="text-3xl font-light text-pink-500 mb-4">$10k-25k</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-pink-500" />
                        <span>2-3 weeks</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-pink-500" />
                        <span>Fully deployed, scalable, ready for customers</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-pink-500" />
                        <span>30-day bug-free guarantee</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-center text-gray-600">
                  Not sure what you need? Send me your Lovable project link. I'll review it and tell you exactly what it'll take.
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
                  <HelpCircle className="w-6 h-6 text-pink-500" />
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
                Send me your Lovable project. I'll review what you've built and tell you exactly what it'll take to go live.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
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
                <Link to="/from-prototype-to-production" className="text-pink-500 hover:text-pink-600 underline">
                  From Prototype to Production — The full guide
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/bolt-to-production" className="text-pink-500 hover:text-pink-600 underline">
                  Bolt to Production
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/vibe-coding-expert" className="text-pink-500 hover:text-pink-600 underline">
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
