import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, CheckCircle, ArrowRight, MessageSquare, Mail, Clock, Zap } from 'lucide-react';
import SubHeader from '../components/SubHeader';
import Contact from '../components/Contact';

const benefits = [
  "Dedicated private communication channel",
  "AI development & technical advisory",
  "Growth strategy & product planning",
  "24/7 asynchronous support",
  "No contracts - cancel anytime"
];

const features = [
  {
    icon: <MessageSquare className="w-8 h-8 text-teal-400" />,
    title: "Direct Access",
    description: "Get direct access to expert guidance through your preferred communication channel"
  },
  {
    icon: <Clock className="w-8 h-8 text-teal-400" />,
    title: "Flexible Support",
    description: "Asynchronous communication that works with any timezone"
  },
  {
    icon: <Bot className="w-8 h-8 text-teal-400" />,
    title: "AI Expertise",
    description: "Get guidance on AI implementation, automation, and optimization"
  },
  {
    icon: <Zap className="w-8 h-8 text-teal-400" />,
    title: "Fast Response",
    description: "Priority response times for all your questions and needs"
  }
];

export default function Retainer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Expert Retainer Service | On-Demand Tech Advisory</title>
          <meta name="description" content="Your fractional tech team with 20+ years of expertise. On-demand access to AI development, design, strategy, and advisory services." />
          <meta name="keywords" content="tech advisory, retainer service, expert guidance, technical support, AI development" />
          <meta property="og:title" content="Expert Retainer Service | On-Demand Tech Advisory" />
          <meta property="og:description" content="Your fractional tech team with 20+ years of expertise." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Expert Retainer Service | On-Demand Tech Advisory" />
          <meta name="twitter:description" content="Your fractional tech team with 20+ years of expertise." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/retainer" />
        </Helmet>

        <SubHeader />

        <section ref={ref} className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
          </div>

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Bot className="w-6 h-6 text-teal-400" />
                      <span className="text-teal-400 font-medium">Expert Retainer Service</span>
                    </div>

                    <h1 className="text-5xl font-bold mb-6">
                      Your Fractional Tech Team
                    </h1>
                    
                    <p className="text-xl text-gray-300 mb-8">
                      Get an entire tech team's expertise at a fraction of the cost. Instant access to AI development, design, strategy, and advisory services without the overhead.
                    </p>

                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-teal-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mt-8">
                      <div>
                        <div className="text-3xl font-bold mb-1">$12,000</div>
                        <div className="text-gray-400">per month</div>
                      </div>
                      <a
                        href="#contact"
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                      >
                        Get Started
                        <ArrowRight className="ml-2 inline-block w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>

                <div className="grid gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                    >
                      <div className="flex items-center gap-4">
                        {feature.icon}
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                    <MessageSquare className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold">1. Get Connected</h3>
                  <p className="text-gray-600">Get your private Slack channel or preferred communication method setup</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold">2. Share Your Goals</h3>
                  <p className="text-gray-600">Brief overview of your needs, projects and objectives</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold">3. Start Building</h3>
                  <p className="text-gray-600">Get instant access to expertise, guidance and hands-on support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">What You Get</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-6">Development & Tech</h3>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>AI implementation guidance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Code review & best practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Architecture planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Technical problem solving</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-6">Strategy & Growth</h3>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Product strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Growth planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Technology roadmap</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Innovation advisory</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 text-gray-600">
                <p className="mb-4">All for a fraction of the cost of hiring a full-time team.</p>
                <p className="text-sm">Average cost of a tech team: $40,000+/month<br />Your investment: $12,000/month</p>
              </div>
            </div>
          </div>
        </section>

        
        <div id="contact">
          <Contact />
        </div>
      </div>
    </HelmetProvider>
  );
}