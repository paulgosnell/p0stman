import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain, Check, ArrowRight, Database, Ship,
  Briefcase, Heart, GraduationCap, Building2, Users,
  Volume2, MessageCircle, ChevronRight, Code2, Server, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import AnimatedWaveform from '../components/v3/AnimatedWaveform';
import { useVoiceWaveform } from '../hooks/useVoiceWaveform';
import TechStack from '../components/TechStack';

const AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'agent_8701k6q7xc5af4f8dkjj8pqda592';

// Hero agents for fanned display
interface HeroAgent {
  name: string;
  description: string;
  screenshot: string;
  gradient: string;
  features: string[];
}

const heroAgents: HeroAgent[] = [
  {
    name: 'YachtOS',
    description: 'Voice-first maritime operations platform',
    screenshot: '/agents/yachtos-command.png',
    gradient: 'from-blue-600 to-cyan-500',
    features: ['Claude Sonnet 4.5', 'MCP Tools', '5 AI Apps']
  },
  {
    name: 'CoachOS',
    description: 'AI executive coaching with perfect memory',
    screenshot: 'https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/coachos-app1.png',
    gradient: 'from-purple-600 to-pink-500',
    features: ['GPT-4o + Gemini', 'RAG Memory', 'Voice & Chat']
  },
  {
    name: 'Pathfinder',
    description: 'AI coach for parents of ADHD children',
    screenshot: '/agents/pathfinder.png',
    gradient: 'from-orange-500 to-red-500',
    features: ['Evidence-based', 'Crisis-safe', 'GDPR compliant']
  },
  {
    name: 'FitLink',
    description: 'AI health coaching via Telegram',
    screenshot: '/agents/fitlink.png',
    gradient: 'from-green-500 to-emerald-500',
    features: ['Oura & Strava', 'Wearable data', 'Chat-first']
  }
];

// Hero benefits
const benefits = [
  "Frontier reasoning models (Claude, GPT-4o, o1)",
  "Voice & chat interfaces with natural conversation",
  "Intelligent memory that learns over time",
  "Custom-built or AI SDK orchestration",
  "Production-ready, deployed worldwide"
];

// Standalone Agents - The AI agent IS the app
const standaloneAgents = [
  {
    name: "YachtOS",
    tagline: "5 AI-Native Apps, One Platform",
    description: "Voice-first maritime operations with Claude Sonnet 4.5, MCP integration, and 6 specialized AI tools across COMMAND, FLEET, HARBOR, OWNER, and GUEST apps.",
    image: "/agents/yachtos-command.png",
    tech: ["Claude Sonnet 4.5", "ElevenLabs Voice", "MCP Tools", "Vercel AI SDK"],
    features: ["Voice-first operations", "Multi-vessel analytics", "AI cost optimization", "295 global edge locations"],
    link: "/case-study/yachtos",
    gradient: "from-blue-600 to-cyan-500"
  }
];

// Embedded Agents - AI agent lives within a website/app
const embeddedAgents = [
  {
    name: "LIV",
    tagline: "AI Travel Concierge",
    description: "Expert travel concierge embedded in Luxury Travel Sweden. Takes contextual info from the site and user preferences to create bespoke travel packages and itineraries.",
    image: "https://aupnsxzkwispcjniacqo.supabase.co/storage/v1/object/public/img/lts-chat-casestudy.png",
    tech: ["Claude Sonnet", "RAG Context", "Voice & Chat", "Custom Training"],
    features: ["Site-aware context", "Personalized itineraries", "Real-time availability", "Multi-language support"],
    link: "/case-study/luxury-travel-sweden",
    gradient: "from-amber-500 to-orange-500"
  }
];

// Technical approach
const techApproach = [
  {
    title: "Frontier Models That Reason",
    description: "We deploy Claude Sonnet 4.5, GPT-4o, and o1 for complex reasoning tasks. Each model selected for its strengths: Claude for nuanced conversation, GPT-4o for speed, o1 for deep analysis.",
    icon: <Brain className="w-6 h-6" strokeWidth={1.5} />
  },
  {
    title: "Vercel AI SDK & Custom Orchestration",
    description: "Production infrastructure using AI SDK for streaming, tool calling, and multi-model workflows. Custom orchestration when you need complete control.",
    icon: <Code2 className="w-6 h-6" strokeWidth={1.5} />
  },
  {
    title: "MCP Tool Integration",
    description: "Model Context Protocol for seamless tool use. Connect your agents to databases, APIs, and external services with structured, reliable execution.",
    icon: <Server className="w-6 h-6" strokeWidth={1.5} />
  },
  {
    title: "RAG & Semantic Search",
    description: "Vector embeddings with pgvector for semantic retrieval. Your agents understand context, not just keywords, with sub-100ms memory lookups.",
    icon: <Database className="w-6 h-6" strokeWidth={1.5} />
  }
];

// Voice vs Chat comparison
const voiceAdvantages = [
  { feature: "Hands-free operation", voice: true, chat: false },
  { feature: "Emotional tone detection", voice: true, chat: false },
  { feature: "Natural conversation flow", voice: true, chat: true },
  { feature: "Complex data entry", voice: false, chat: true },
  { feature: "Real-time interruption", voice: true, chat: false },
  { feature: "Multi-language support", voice: true, chat: true },
  { feature: "Accessibility (visual impairment)", voice: true, chat: false },
  { feature: "Quiet environments", voice: false, chat: true }
];

// Sector use cases
const sectors = [
  {
    name: "Healthcare",
    icon: <Heart className="w-6 h-6" strokeWidth={1.5} />,
    useCases: ["Patient intake automation", "Health information assistants", "Appointment scheduling", "Symptom triage"],
    example: "Mamori - trustworthy health information"
  },
  {
    name: "Maritime",
    icon: <Ship className="w-6 h-6" strokeWidth={1.5} />,
    useCases: ["Voice-first operations", "Fleet management", "Guest concierge", "Maintenance scheduling"],
    example: "YachtOS - 5 AI-native apps"
  },
  {
    name: "Executive Coaching",
    icon: <Briefcase className="w-6 h-6" strokeWidth={1.5} />,
    useCases: ["On-demand coaching", "Progress tracking", "Framework application", "Accountability automation"],
    example: "CoachOS - AI business coach"
  },
  {
    name: "Education",
    icon: <GraduationCap className="w-6 h-6" strokeWidth={1.5} />,
    useCases: ["Personalized tutoring", "Learning path adaptation", "Progress assessment", "Parent communication"],
    example: "Pathfinder - ADHD coaching"
  },
  {
    name: "Enterprise",
    icon: <Building2 className="w-6 h-6" strokeWidth={1.5} />,
    useCases: ["Internal knowledge base", "HR automation", "Sales qualification", "Customer support"],
    example: "Custom enterprise deployments"
  },
  {
    name: "Fitness & Wellness",
    icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
    useCases: ["Wearable data insights", "Personalized coaching", "Habit tracking", "Recovery optimization"],
    example: "FitLink - Telegram health coach"
  }
];

export default function AIAgents() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Voice agent hook - same as home hero
  const voiceAgent = useVoiceWaveform(AGENT_ID, {
    voice: 'verse',
    threshold: 0.5,
    silenceDuration: 500,
  });

  const handleStartVoice = () => {
    try {
      voiceAgent.startConversation();
    } catch (error) {
      console.error('Failed to start voice conversation:', error);
    }
  };

  const handleStopVoice = () => {
    voiceAgent.stopConversation();
  };

  // Create phone card component for hero fanned display
  const createPhoneCard = (agent: HeroAgent, index: number) => (
    <div className="relative w-[180px] md:w-[200px] aspect-[9/19.5] rounded-3xl shadow-2xl overflow-hidden bg-white border-8 border-gray-900">
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-10`} />

      {/* Screenshot */}
      <img
        src={agent.screenshot}
        alt={`${agent.name} AI Agent`}
        className="w-full h-full object-cover object-top"
      />

      {/* Hover overlay with info */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
        <div className="bg-white/95 rounded-lg p-3">
          <h3 className="text-gray-900 font-semibold text-sm mb-1">{agent.name}</h3>
          <p className="text-gray-700 text-xs mb-2">{agent.description}</p>
          <ul className="space-y-1">
            {agent.features.map((feature, i) => (
              <li key={i} className="text-gray-600 text-[10px] flex items-center gap-1">
                <CheckCircle className="w-2.5 h-2.5 text-green-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>AI Agents | Voice, Memory & Frontier Models | P0STMAN</title>
          <meta name="description" content="Production-ready AI agents with voice interfaces, intelligent memory systems, and frontier reasoning models. See real projects: YachtOS, CoachOS, and more." />
          <meta name="keywords" content="AI agents, voice AI, Claude, GPT-4o, memory systems, RAG, executive coaching AI, maritime AI, healthcare AI" />
          <meta property="og:title" content="AI Agents | Voice, Memory & Frontier Models | P0STMAN" />
          <meta property="og:description" content="Production-ready AI agents with voice interfaces, intelligent memory systems, and frontier reasoning models." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AI Agents | Voice, Memory & Frontier Models | P0STMAN" />
          <meta name="twitter:description" content="Production-ready AI agents with voice interfaces, intelligent memory systems, and frontier reasoning models." />
          <link rel="canonical" href="https://p0stman.com/ai-agents" />
        </Helmet>

        <HeaderV3Global darkMode={false} />

        {/* Hero Section */}
        <section ref={heroRef} className="py-32 md:py-40 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-6">
                  <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                    AI Agent Development
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.05] tracking-tight mb-8">
                  AI Agents That Actually Work
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-10">
                  Not chatbots. Production-ready AI specialists with voice interfaces,
                  intelligent memory, and frontier reasoning models. Built for real businesses,
                  deployed worldwide.
                </p>

                <div className="space-y-3 mb-10">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <Check className="w-5 h-5 text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-gray-600 font-light">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light"
                  >
                    Build Your Agent
                    <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                  </Link>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-3 px-8 py-4 border border-gray-300 text-gray-900 hover:border-gray-900 transition-colors font-light"
                  >
                    See Real Projects
                    <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                </div>
              </motion.div>

              {/* Fanned Agent Cards */}
              <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
                {heroAgents.map((agent, index) => {
                  // Calculate fan positions and rotations
                  const totalCards = heroAgents.length;
                  const centerIndex = (totalCards - 1) / 2;
                  const offset = index - centerIndex;
                  const rotation = offset * 8;
                  const translateX = offset * 70;
                  const translateY = Math.abs(offset) * 15;

                  return (
                    <motion.div
                      key={agent.name}
                      initial={{
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 0.9,
                        opacity: 0
                      }}
                      animate={heroInView ? {
                        x: translateX,
                        y: -translateY,
                        rotate: rotation,
                        scale: 1,
                        opacity: 1
                      } : {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 0.9,
                        opacity: 0
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + index * 0.1,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -translateY - 30,
                        rotate: 0,
                        transition: { duration: 0.3 }
                      }}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      className="group absolute"
                      style={{ zIndex: hoveredIndex === index ? 100 : index }}
                    >
                      {createPhoneCard(agent, index)}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Standalone Agents Section */}
        <section id="projects" className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="max-w-4xl mb-16">
              <div className="mb-6">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Standalone Agents
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-6">
                The AI Agent Is the App
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Full applications where the AI agent is the core product. Native apps, web platforms,
                internal tools — the agent isn't a feature, it's the entire experience.
              </p>
            </div>

            <div className="space-y-16">
              {standaloneAgents.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.gradient} mb-4`}>
                      {project.tagline}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{project.name}</h3>
                    <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-light">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                          <span className="text-sm text-gray-600 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2 text-gray-900 font-light hover:gap-3 transition-all"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </Link>
                  </div>

                  <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative w-[280px] md:w-[320px] aspect-[9/19.5] rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                      <img
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Embedded Agents Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="max-w-4xl mb-16">
              <div className="mb-6">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Embedded Agents
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-6">
                AI Inside Your Product
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Intelligent agents that live within existing websites and applications.
                They have a specific role — concierge, assistant, guide — trained on your context.
              </p>
            </div>

            <div className="space-y-16">
              {embeddedAgents.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.gradient} mb-4`}>
                      {project.tagline}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{project.name}</h3>
                    <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-light">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                          <span className="text-sm text-gray-600 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2 text-gray-900 font-light hover:gap-3 transition-all"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </Link>
                  </div>

                  <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Desktop browser mockup for embedded agents */}
                    <div className="relative w-full max-w-[600px] rounded-lg shadow-2xl overflow-hidden border border-gray-200">
                      {/* Browser chrome */}
                      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 ml-4">
                          <div className="bg-white rounded px-3 py-1 text-xs text-gray-400 max-w-[200px]">
                            luxurytravelsweden.com
                          </div>
                        </div>
                      </div>
                      {/* Screenshot */}
                      <div className="relative aspect-[16/10]">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
                        <img
                          src={project.image}
                          alt={`${project.name} screenshot`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice vs Chat Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="max-w-4xl mb-16">
              <div className="mb-6">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Interface Options
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-6">
                Voice is Getting Good. Really Good.
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Sub-200ms latency. Natural interruption handling. Emotional tone detection.
                Voice AI has crossed the threshold from "impressive demo" to "daily driver."
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Voice Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-black flex items-center justify-center">
                    <Volume2 className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-gray-900">Voice Agents</h3>
                    <p className="text-sm text-gray-500">OpenAI Realtime, ElevenLabs</p>
                  </div>
                </div>

                <p className="text-gray-600 font-light mb-6">
                  Perfect for hands-free operation, accessibility, and natural conversation.
                  YachtOS captains use voice while navigating. CoachOS clients talk while commuting.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                    <span className="text-sm text-gray-700">Real-time interruption (barge-in)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                    <span className="text-sm text-gray-700">Emotional tone detection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                    <span className="text-sm text-gray-700">Multi-language (en, es, fr, it, ar, da)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                    <span className="text-sm text-gray-700">Sub-200ms latency</span>
                  </div>
                </div>

                {/* Inline Voice Waveform - same as home hero */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">Try it now</p>
                  <div className="w-full h-16 flex items-center justify-center cursor-pointer">
                    <AnimatedWaveform
                      barCount={40}
                      color="#111827"
                      hoverColor="#3B82F6"
                      animate={!voiceAgent.isActive}
                      frequencyData={voiceAgent.frequencyData}
                      isLive={voiceAgent.isActive}
                      onVoiceStart={handleStartVoice}
                      onVoiceStop={handleStopVoice}
                      isVoiceActive={voiceAgent.isActive}
                      showControls={true}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Chat Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-gray-900">Chat Agents</h3>
                    <p className="text-sm text-gray-500">Claude, GPT-4o, Gemini</p>
                  </div>
                </div>

                <p className="text-gray-600 font-light mb-6">
                  Better for data-heavy tasks, code review, and quiet environments.
                  FitLink uses Telegram for fitness coaching. Mamori handles health queries via text.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                    <span className="text-sm text-gray-700">Complex data entry & review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                    <span className="text-sm text-gray-700">Code & document analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                    <span className="text-sm text-gray-700">Searchable conversation history</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                    <span className="text-sm text-gray-700">Works in any environment</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 font-light">
                Most of our agents support both. The interface should match the use case, not limit it.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Approach Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="max-w-4xl mb-16">
              <div className="mb-6">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  How We Build
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-6">
                Frontier Models, Production Infrastructure
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                We don't use templates or no-code builders. Every agent is architected for your specific
                use case with the right models, memory systems, and deployment strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {techApproach.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8"
                >
                  <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 text-gray-900">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="max-w-4xl mb-16">
              <div className="mb-6">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Industries
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-6">
                AI Agents for Every Sector
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Different industries need different approaches. We've built agents across healthcare,
                maritime, coaching, education, and enterprise—each with domain-specific optimizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border-t-2 border-transparent hover:border-gray-900 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 flex items-center justify-center text-gray-700">
                      {sector.icon}
                    </div>
                    <h3 className="text-xl font-light text-gray-900">{sector.name}</h3>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {sector.useCases.map((useCase, i) => (
                      <li key={i} className="text-sm text-gray-600 font-light flex items-start gap-2">
                        <span className="text-gray-300 mt-1">•</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-gray-400 font-light">
                    Example: {sector.example}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Building Blocks / Tech Stack */}
        <TechStack />

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-gray-900">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight mb-6">
                Ready to Build Your Agent?
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
                Most agencies build features. We build infrastructure that creates lasting relationships
                between users and technology. Let's discuss what's possible.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors font-light"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </Link>
                <div className="text-gray-500 font-light">
                  From $5,000 for custom agents
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
