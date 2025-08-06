import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { 
  Bot, 
  Zap, 
  TrendingUp, 
  Users, 
  Globe, 
  Award, 
  ArrowRight, 
  Play,
  CheckCircle,
  Building2,
  Rocket,
  Brain,
  Code,
  Target,
  DollarSign,
  ExternalLink,
  Calendar,
  Smartphone
} from 'lucide-react';
import VideoModal from '../components/modals/VideoModal';
import CaseStudyModal from '../components/modals/CaseStudyModal';

const highlights = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    metric: "1→30",
    label: "Team Scale",
    description: "Scaled agency & successful exit"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    metric: "20+",
    label: "AI MVPs",
    description: "Shipped via P0STMAN platform"
  },
  {
    icon: <Users className="w-6 h-6" />,
    metric: "30+",
    label: "Countries",
    description: "Fitlink wellness app reach"
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    metric: "Enterprise",
    label: "Clients",
    description: "IBM iX, FAB, Al Arabiya, Abu Dhabi Gov"
  }
];

const focusAreas = [
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "Fractional Product Leadership",
    description: "Strategic product direction and AI transformation for scale-ups and enterprises",
    features: ["Product Strategy", "Team Leadership", "Stakeholder Management", "Go-to-Market"]
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-600" />,
    title: "AI-Native Platform Delivery",
    description: "End-to-end delivery of production-grade AI-powered platforms and SaaS tools",
    features: ["Full-Stack Development", "AI Integration", "Scalable Architecture", "DevOps"]
  },
  {
    icon: <Target className="w-8 h-8 text-green-600" />,
    title: "Digital Transformation Consulting",
    description: "Strategic consulting for organizations embracing AI and modern development practices",
    features: ["AI Strategy", "Process Optimization", "Technology Roadmaps", "Change Management"]
  }
];

const clientLogos = [
  { name: "IBM iX", logo: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png" },
  { name: "FAB", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/First_Abu_Dhabi_Bank_logo.svg/1200px-First_Abu_Dhabi_Bank_logo.svg.png" },
  { name: "Al Arabiya", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Al_Arabiya_Logo.svg/1200px-Al_Arabiya_Logo.svg.png" },
  { name: "Monstarlab", logo: "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/10/monstar-lab-logo.svg" }
];

const testimonials = [
  {
    quote: "Paul's ability to translate complex AI concepts into actionable business strategy is unmatched. He helped us ship our AI-powered platform 3x faster than projected.",
    author: "Sarah Chen",
    role: "CTO, HealthTech Startup",
    company: "Confidential"
  },
  {
    quote: "Working with Paul was transformative. His deep technical expertise combined with strategic thinking helped us navigate our digital transformation successfully.",
    author: "Ahmed Al-Rashid", 
    role: "Innovation Director",
    company: "Enterprise Client"
  }
];

// Featured projects data - mix of enterprise and AI-built projects
const featuredProjects = [
  // Enterprise Projects
  {
    id: 'fab',
    title: 'Enterprise Digital Transformation',
    company: 'First Abu Dhabi Bank',
    category: 'Banking & Finance',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/First_Abu_Dhabi_Bank_logo.svg/1200px-First_Abu_Dhabi_Bank_logo.svg.png',
    description: 'Led a comprehensive digital transformation initiative that evolved from a single innovation lab project into an 18-month enterprise-wide transformation program.',
    type: 'enterprise',
    metrics: [
      { label: 'Team Scale', value: '1→40', icon: <Users className="w-6 h-6" /> },
      { label: 'Duration', value: '18mo', icon: <Calendar className="w-6 h-6" /> }
    ]
  },
  {
    id: 'chilled-crm',
    title: 'Chilled CRM',
    company: 'AI-Powered CRM Platform',
    category: 'SaaS & AI',
    image: 'https://mediacdn.carrd.co/assets/images/image06.png',
    logo: 'https://chilledcrm.com/favicon.svg',
    description: 'Next-generation CRM system built with AI at its core, delivering unprecedented efficiency and insights. Built in 4 weeks using AI-powered development.',
    type: 'ai-built',
    caseStudyUrl: '/case-study/chilled-crm',
    metrics: [
      { label: 'Build Time', value: '4 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'Cost Saving', value: '70%', icon: <TrendingUp className="w-6 h-6" /> }
    ]
  },
  {
    id: 'al-arabiya',
    title: 'News Platform Redesign',
    company: 'Al Arabiya',
    category: 'Media & Broadcasting',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2000&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Al_Arabiya_Logo.svg/1200px-Al_Arabiya_Logo.svg.png',
    description: 'Complete platform redesign and rebuild of Al Arabiya\'s news experience, delivered during the global pandemic with a distributed international team.',
    type: 'enterprise',
    metrics: [
      { label: 'Load Speed', value: '+40%', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'Global Team', value: '15+', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'rhythm',
    title: 'Rhythm',
    company: 'AI-Powered Running Coach',
    category: 'HealthTech & AI',
    image: 'https://mediacdn.carrd.co/assets/images/image13.png',
    logo: 'https://ai-running-app.netlify.app/favicon.svg',
    description: 'Find your perfect running rhythm with AI-powered coaching and adaptive music. Revolutionary fitness app built in just 1 week using AI development.',
    type: 'ai-built',
    caseStudyUrl: '/case-study/rhythm',
    metrics: [
      { label: 'Build Time', value: '1 week', icon: <Zap className="w-6 h-6" /> },
      { label: 'Performance', value: '+45%', icon: <TrendingUp className="w-6 h-6" /> }
    ]
  }
];

// Additional showcase projects for the smaller cards
const additionalProjects = [
  {
    id: 'harmony',
    title: 'Harmony',
    company: 'Music Collaboration Platform',
    category: 'Music & AI',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=80',
    caseStudyUrl: '/case-study/harmony'
  },
  {
    id: 'clinic-book',
    title: 'ClinicBook',
    company: 'Healthcare Booking System',
    category: 'HealthTech',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1000&q=80',
    caseStudyUrl: '/case-study/clinic-book'
  }
];

export default function HomeV2() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const openVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
    setShowVideoModal(true);
  };

  const openCaseStudy = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setShowCaseStudyModal(true);
  };

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-bg.png')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        
        <Header />
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Hero Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-blue-400">
                    <Bot className="w-6 h-6" />
                    <span className="font-medium">Senior AI Advisor & Digital Leader</span>
                  </div>
                  
                  <h1 className="text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      AI-Native Product Builder
                    </span>
                  </h1>
                  
                  <div className="text-xl text-gray-300 space-y-2">
                    <p className="font-medium">Exited Founder | Fractional CPO</p>
                    <p>SaaS, HealthTech & SportsTech</p>
                  </div>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  I help organizations embrace AI and ship products faster than they thought possible. 
                  With 20+ years in digital, a successful agency exit, and extensive experience leading 
                  teams across the UAE, I bring deep expertise across product, people, and platforms.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#engagement"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] font-medium text-lg inline-flex items-center gap-2"
                  >
                    Let's Work Together
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="#focus"
                    className="px-8 py-4 border border-gray-600 text-white rounded-lg hover:bg-white/10 transition-all font-medium text-lg"
                  >
                    View Expertise
                  </a>
                </div>
              </motion.div>

              {/* Right Column - Metrics & Highlights */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-all"
                    >
                      <div className="text-blue-400 mb-3">{highlight.icon}</div>
                      <div className="text-3xl font-bold mb-1">{highlight.metric}</div>
                      <div className="text-lg font-semibold mb-1">{highlight.label}</div>
                      <div className="text-sm text-gray-400">{highlight.description}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Engagement CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-8 rounded-xl border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-semibold">Ready to Work Together?</h3>
                  </div>
                  <p className="text-gray-300 mb-6">Available for fractional leadership and project-based engagements</p>
                  <a 
                    href="mailto:hello@p0stman.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-[1.02] font-medium"
                  >
                    Get Custom Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-gray-600 font-medium">Trusted by leading organizations</p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="focus" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Target className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600 font-medium">Focus Areas</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                How I Help Organizations Win with AI
              </h2>
              
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Deep operator experience across product leadership, AI-native development, 
                and digital transformation consulting.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="mb-6">
                    <div className="p-3 bg-gray-50 rounded-xl inline-block mb-4">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-6">{area.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {area.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Building Showcase */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Code className="w-6 h-6 text-blue-400" />
                <span className="text-blue-400 font-medium">AI-Native Building</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Building with AI, Not Just Talking About It
              </h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                I'm deeply immersed in the coding revolution - experimenting, testing, and shaping 
                what AI-first development looks like. Through P0STMAN and Chilled Tools, I've shipped 
                20+ production-grade platforms using Claude, GPT-4, and Gemini.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-semibold">P0STMAN Agency</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  AI-powered digital agency delivering production-ready apps in days, not months. 
                  Created an AI-powered stack that cuts dev time by 80%.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>20+ apps shipped in 5 days each</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>80% reduction in development time</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Full-stack AI integration</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-semibold">Chilled Tools</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  B2B SaaS suite empowering solo founders and SMEs with AI-built tools for CRM, 
                  dashboards, and automation - all plug-and-play, no dev team needed.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Chilled CRM used across 4+ markets</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>High-utility SaaS in under 1 week</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI-assist features & automation</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Video Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold mb-8">See AI Building in Action</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div 
                  className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => openVideo("Y0g_9ZhqiRg")}
                >
                  <div className="relative aspect-video">
                    <img 
                      src="https://i.ytimg.com/vi/Y0g_9ZhqiRg/maxresdefault.jpg" 
                      alt="Building CRM with AI"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-800/70 backdrop-blur-sm">
                    <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                      How I built a CRM system in one week with AI
                    </h4>
                  </div>
                </div>

                <div 
                  className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => openVideo("dxuct08lLyY")}
                >
                  <div className="relative aspect-video">
                    <img 
                      src="https://i.ytimg.com/vi/dxuct08lLyY/maxresdefault.jpg" 
                      alt="Adding Stripe to AI apps"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-800/70 backdrop-blur-sm">
                    <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                      Adding Stripe payments to your AI-built app
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Building2 className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600 font-medium">Real Projects, Real Results</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Strategic Product Delivery Across Industries
              </h2>
              
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Banking, media, health, retail and Web3. From innovation pilots to 
                enterprise transformations, delivering measurable impact at scale.
              </p>
            </motion.div>

            {/* Main Projects Grid - Image-Led */}
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => project.caseStudyUrl ? window.location.href = project.caseStudyUrl : openCaseStudy(project)}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Logo Overlay */}
                    {project.logo && (
                      <div className="absolute top-4 left-4">
                        <img
                          src={project.logo}
                          alt={`${project.company} logo`}
                          className="h-8 w-auto filter drop-shadow-lg opacity-90"
                        />
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/90 font-medium mb-2">{project.company}</p>
                    <p className="text-white/80 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Key Metrics Preview */}
                    {project.metrics && (
                      <div className="flex gap-4 mt-4">
                        {project.metrics.slice(0, 2).map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className="text-lg font-bold text-white">{metric.value}</div>
                            <div className="text-xs text-white/70">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Projects - Smaller Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {additionalProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => window.location.href = project.caseStudyUrl}
                >
                  <div className="relative h-32">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="font-bold text-white mb-1">{project.title}</h4>
                      <p className="text-white/90 text-sm">{project.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] font-medium text-lg"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Award className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600 font-medium">Client Success</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                What Leaders Say About Working with Me
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
                >
                  <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement CTA */}
      <section id="engagement" className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Product Development?
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI-native development and strategic product leadership 
                can accelerate your organization's growth.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Fractional Leadership</h3>
                  <p className="text-blue-100 text-sm">Strategic product direction and team leadership</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">AI Platform Delivery</h3>
                  <p className="text-blue-100 text-sm">End-to-end development of AI-powered solutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Transformation Consulting</h3>
                  <p className="text-blue-100 text-sm">Strategic guidance for AI adoption and digital transformation</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:hello@p0stman.com"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-[1.02] font-medium text-lg inline-flex items-center gap-2"
                >
                  Start Conversation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/pgosnell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-medium text-lg"
                >
                  View LinkedIn
                </a>
              </div>

              <div className="mt-8 text-blue-100">
                <p className="text-sm">Available for fractional or project-based engagements</p>
                <p className="font-semibold">Custom quotes based on scope and requirements</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoId={currentVideoId}
      />

      <CaseStudyModal
        isOpen={showCaseStudyModal}
        onClose={() => setShowCaseStudyModal(false)}
        project={selectedProject}
      />
    </div>
  );
}