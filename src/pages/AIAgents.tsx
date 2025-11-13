import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Brain, Zap, Check, ArrowRight, Cpu, Network, Settings, Workflow, MessageSquare, Target } from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import Contact from '../components/Contact';
import AIAgentShowcaseSimple from '../components/v3/AIAgentShowcaseSimple';
import FooterV3 from '../components/v3/FooterV3';

const benefits = [
  "Autonomous task execution",
  "24/7 operation capability",
  "Scalable and cost-effective",
  "Continuous learning & improvement",
  "Seamless integration with existing systems"
];

const useCases = [
  {
    icon: <MessageSquare className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
    title: "Sales & Customer Service",
    description: "Automate lead qualification, follow-ups, and customer support with intelligent AI agents"
  },
  {
    icon: <Workflow className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
    title: "HR & Operations",
    description: "Streamline recruitment, onboarding, and operational workflows with autonomous agents"
  },
  {
    icon: <Network className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
    title: "Data Analysis",
    description: "Deploy agents that continuously monitor, analyze, and report on business metrics"
  },
  {
    icon: <Settings className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
    title: "Process Automation",
    description: "Create agents that handle complex business processes with minimal human intervention"
  }
];

const features = [
  {
    title: "Autonomous Decision Making",
    description: "AI agents can independently analyze situations and make informed decisions based on predefined parameters and goals.",
    icon: <Brain className="w-6 h-6" strokeWidth={1.5} />
  },
  {
    title: "Environment Awareness",
    description: "Agents actively monitor their environment, gathering and processing relevant information in real-time.",
    icon: <Cpu className="w-6 h-6" strokeWidth={1.5} />
  },
  {
    title: "Continuous Learning",
    description: "Advanced systems that learn and improve from experience, constantly optimizing their performance.",
    icon: <Zap className="w-6 h-6" strokeWidth={1.5} />
  },
  {
    title: "Goal-Oriented Actions",
    description: "Focused on achieving specific objectives through strategic planning and execution.",
    icon: <Target className="w-6 h-6" strokeWidth={1.5} />
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

        <HeaderV3Global darkMode={false} />

        {/* Hero Section */}
        <section ref={ref} className="py-32 md:py-48 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <div className="mb-8">
                    <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                      Custom AI Agents
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-gray-900 leading-[1.05] tracking-tight mb-8">
                    Supercharge Your Business
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
                    Not just chatbots - autonomous AI specialists that work 24/7 to transform your business operations. Deploy intelligent agents that learn, adapt, and deliver results.
                  </p>

                  <div className="space-y-4 mb-12">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-gray-600 font-light">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-8">
                    <div>
                      <div className="text-4xl font-light mb-2 text-gray-900">From $5,000</div>
                      <div className="text-gray-600 font-light">Custom AI Agent</div>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light"
                    >
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
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
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border-t border-gray-200 p-8"
                  >
                    <div className="flex items-start gap-4">
                      {useCase.icon}
                      <div>
                        <h3 className="text-2xl font-light mb-3 text-gray-900">{useCase.title}</h3>
                        <p className="text-gray-600 font-light leading-relaxed">{useCase.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="max-w-4xl mb-24">
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Capabilities
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight mb-8">
                What Makes AI Agents Different?
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                Unlike traditional chatbots, AI agents are autonomous specialists that can understand context, make decisions, and take actions without constant human input.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border-t border-gray-200"
                >
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 text-gray-900">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-light mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <AIAgentShowcaseSimple />

        {/* Benefits Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-8">
                  <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                    The Future
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight mb-8">
                  The Future is Here
                </h2>

                <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
                  AI agents are revolutionizing how businesses operate. From automating complex workflows to making data-driven decisions, these autonomous systems are delivering unprecedented efficiency and insights.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-2 text-gray-900">Reduce Operational Costs</h3>
                      <p className="text-gray-600 font-light leading-relaxed">AI agents work 24/7 without breaks, significantly reducing operational expenses.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-2 text-gray-900">Improve Efficiency</h3>
                      <p className="text-gray-600 font-light leading-relaxed">Automate complex tasks and processes with intelligent decision-making capabilities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-2 text-gray-900">Scale Operations</h3>
                      <p className="text-gray-600 font-light leading-relaxed">Easily scale your operations without proportionally increasing costs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                  alt="AI Agent Visualization"
                  className="w-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contact">
          <Contact />
        </div>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
