import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Brain, Zap, CheckCircle, ArrowRight, Cpu, Network, Settings, Workflow, Bot as BotIcon, MessageSquare, Target } from 'lucide-react';
import SubHeader from '../components/SubHeader';
import Contact from '../components/Contact';
import ServicesGrid from '../components/ServicesGrid';

const benefits = [
  "Autonomous task execution",
  "24/7 operation capability",
  "Scalable and cost-effective",
  "Continuous learning & improvement",
  "Seamless integration with existing systems"
];

const useCases = [
  {
    icon: <MessageSquare className="w-8 h-8 text-violet-400" />,
    title: "Sales & Customer Service",
    description: "Automate lead qualification, follow-ups, and customer support with intelligent AI agents"
  },
  {
    icon: <Workflow className="w-8 h-8 text-violet-400" />,
    title: "HR & Operations",
    description: "Streamline recruitment, onboarding, and operational workflows with autonomous agents"
  },
  {
    icon: <Network className="w-8 h-8 text-violet-400" />,
    title: "Data Analysis",
    description: "Deploy agents that continuously monitor, analyze, and report on business metrics"
  },
  {
    icon: <Settings className="w-8 h-8 text-violet-400" />,
    title: "Process Automation",
    description: "Create agents that handle complex business processes with minimal human intervention"
  }
];

const features = [
  {
    title: "Autonomous Decision Making",
    description: "AI agents can independently analyze situations and make informed decisions based on predefined parameters and goals.",
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Environment Awareness",
    description: "Agents actively monitor their environment, gathering and processing relevant information in real-time.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Continuous Learning",
    description: "Advanced systems that learn and improve from experience, constantly optimizing their performance.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Goal-Oriented Actions",
    description: "Focused on achieving specific objectives through strategic planning and execution.",
    icon: <Target className="w-6 h-6" />
  }
];

export default function AIAgents() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Custom AI Agents | Autonomous Business Solutions</title>
          <meta name="description" content="Deploy custom AI agents that work autonomously 24/7. Transform your business operations with intelligent automation and continuous learning capabilities." />
          <meta name="keywords" content="AI agents, business automation, intelligent automation, custom AI, autonomous systems" />
          <meta property="og:title" content="Custom AI Agents | Autonomous Business Solutions" />
          <meta property="og:description" content="Transform your business with custom AI agents that work autonomously 24/7." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Custom AI Agents | Autonomous Business Solutions" />
          <meta name="twitter:description" content="Transform your business with custom AI agents that work autonomously 24/7." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/ai-agents" />
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
                      <Bot className="w-6 h-6 text-violet-400" />
                      <span className="text-violet-400 font-medium">Custom AI Agents</span>
                    </div>

                    <h1 className="text-5xl font-bold mb-6">
                      Supercharge Your Business with AI Agents
                    </h1>
                    
                    <p className="text-xl text-gray-300 mb-8">
                      Not just chatbots - autonomous AI specialists that work 24/7 to transform your business operations. Deploy intelligent agents that learn, adapt, and deliver results.
                    </p>

                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-violet-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mt-8">
                      <div>
                        <div className="text-3xl font-bold mb-1">From $5,000</div>
                        <div className="text-gray-400">Custom AI Agent</div>
                      </div>
                      <a
                        href="#contact"
                        className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                      >
                        Schedule Consultation
                        <ArrowRight className="ml-2 inline-block w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>

                <div className="grid gap-6">
                  {useCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                    >
                      <div className="flex items-center gap-4">
                        {useCase.icon}
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                          <p className="text-gray-300">{useCase.description}</p>
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
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">What Makes AI Agents Different?</h2>
              <p className="text-gray-600">
                Unlike traditional chatbots, AI agents are autonomous specialists that can understand context, make decisions, and take actions without constant human input.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4 text-violet-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">The Future is Here</h2>
                  <p className="text-gray-600 mb-8">
                    AI agents are revolutionizing how businesses operate. From automating complex workflows to making data-driven decisions, these autonomous systems are delivering unprecedented efficiency and insights.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Reduce Operational Costs</h3>
                        <p className="text-gray-600">AI agents work 24/7 without breaks, significantly reducing operational expenses.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Improve Efficiency</h3>
                        <p className="text-gray-600">Automate complex tasks and processes with intelligent decision-making capabilities.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Scale Operations</h3>
                        <p className="text-gray-600">Easily scale your operations without proportionally increasing costs.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-3xl transform rotate-6" />
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                    alt="AI Agent Visualization"
                    className="relative z-10 w-full rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesGrid currentService="ai-agents" />
        
        <div id="contact">
          <Contact />
        </div>
      </div>
    </HelmetProvider>
  );
}