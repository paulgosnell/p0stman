import React, { useState, useEffect } from 'react';
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
  Smartphone,
  Sparkles,
  Clock,
  MessageSquare
} from 'lucide-react';
import VideoModal from '../components/modals/VideoModal';

import ProjectConfigurator from '../components/ProjectConfigurator';
import AnimatedFooter from '../components/AnimatedFooter';

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
  { name: "FAB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/First_Abu_Dhabi_Bank_Logo.svg/500px-First_Abu_Dhabi_Bank_Logo.svg.png" },
  { name: "Al Arabiya", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Al-Arabiya_new_logo.svg/500px-Al-Arabiya_new_logo.svg.png" },
  { name: "DoH Abu Dhabi", logo: "https://api.chilledsites.com/storage/v1/object/public/p0stman/doh-logo.png" },
  { name: "Etihad Airways", logo: "https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad-logo.png" },
  { name: "Al-Futtaim Group", logo: "https://api.chilledsites.com/storage/v1/object/public/p0stman/al-futtaim-logo.png" }
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
  // AI-Native Showcase Project - Lead with AI building AI
  {
    id: 'chilled-sites',
    title: 'Chilled Sites — AI Website Builder',
    company: 'Chilled Ventures',
    category: 'AI / SaaS',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites-homepage.png',
    logo: 'https://chilledsites.com/images/logo.svg',
    description: 'AI-powered website builder that turns a prompt, photo, or email into a fully hosted website in minutes — complete with SEO, analytics, and forms.',
    type: 'ai-native',
    caseStudyUrl: '/case-study/chilled-sites',
    metrics: [
      { label: 'Time to First Site', value: '< 10 min', icon: <Clock className="w-6 h-6" /> },
      { label: 'Cost Savings', value: '£5,000+', icon: <DollarSign className="w-6 h-6" /> },
      { label: 'Active Users', value: '1000+', icon: <Users className="w-6 h-6" /> },
      { label: 'Websites Built', value: '2500+', icon: <Globe className="w-6 h-6" /> }
    ]
  },
  // Enterprise Projects
  {
    id: 'fab',
    title: 'Enterprise Digital Transformation',
    company: 'First Abu Dhabi Bank',
    category: 'Banking & Finance',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/First_Abu_Dhabi_Bank_Logo.svg/500px-First_Abu_Dhabi_Bank_Logo.svg.png',
    description: 'Started with Innovation Lab project that impressed multiple departments, leading to 18-month transformation with 40-50 experts across various departments.',
    type: 'enterprise',
    caseStudyUrl: '/case-study/fab-bank',
    challenge: 'FAB needed to modernize their digital infrastructure and create scalable, reusable systems across multiple departments while maintaining security and compliance standards.',
    solution: 'Built enterprise-grade platforms with unified design systems and code libraries. Established cross-functional teams and agile delivery processes to ensure consistent, high-quality output.',
    results: [
      'Scaled from 1 pilot project to 40+ person transformation team',
      'Delivered enterprise-grade platforms across multiple departments',
      'Created reusable design systems and unified code libraries',
      'Established one of the region\'s biggest digital transformations',
      'Improved development efficiency by 60% through standardization',
      'Successfully delivered 18 months of continuous innovation'
    ],
    technologies: ['React', 'Node.js', 'Azure', 'Design Systems', 'Microservices', 'DevOps'],
    timeline: '18 months',
    teamSize: '40+ people',
    metrics: [
      { label: 'Team Scale', value: '1→40', icon: <Users className="w-6 h-6" /> },
      { label: 'Duration', value: '18mo', icon: <Calendar className="w-6 h-6" /> },
      { label: 'Efficiency Gain', value: '60%', icon: <TrendingUp className="w-6 h-6" /> }
    ]
  },
  {
    id: 'doh-health',
    title: 'My Health Coach',
    company: 'Department of Health Abu Dhabi',
    category: 'Government & Healthcare',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png',
    logo: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/doh-logo.png',
    description: 'Partnered with IBM to build standout health & fitness app for Abu Dhabi residents. Personalized wellness app integrating with Google Fit and Fitbit.',
    type: 'enterprise',
    caseStudyUrl: '/case-study/doh-health',
    metrics: [
      { label: 'Partnership', value: 'IBM', icon: <Building2 className="w-6 h-6" /> },
      { label: 'Client', value: 'Government', icon: <Award className="w-6 h-6" /> }
    ]
  },
  {
    id: 'al-arabiya',
    title: 'News Platform Redesign',
    company: 'Al Arabiya',
    category: 'Media & Broadcasting',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Al-Arabiya_new_logo.svg/500px-Al-Arabiya_new_logo.svg.png',
    description: 'Led international team of 20 to modernize leading news brand during COVID-19. Created personalized, customizable news experience from ground up.',
    type: 'enterprise',
    caseStudyUrl: '/case-study/al-arabiya',
    challenge: 'Al Arabiya needed a modern, scalable news platform that could handle high traffic loads while providing a customizable, multi-platform experience during unprecedented global events.',
    solution: 'Led a global team through UX research, development, testing, and content delivery. Implemented a future-ready architecture with customizable components and multi-platform support.',
    results: [
      'Successfully delivered complete platform redesign during pandemic',
      'Led global team across multiple time zones and lockdowns',
      'Created future-ready, customizable multi-platform experience',
      'Achieved high user satisfaction and stakeholder approval',
      'Improved page load speeds by 40%',
      'Implemented real-time content management system'
    ],
    technologies: ['React', 'Next.js', 'GraphQL', 'CMS', 'CDN', 'Real-time APIs'],
    timeline: '8 months',
    teamSize: '15+ global team',
    metrics: [
      { label: 'Load Speed', value: '+40%', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'Global Team', value: '15+', icon: <Users className="w-6 h-6" /> },
      { label: 'Platforms', value: 'Multi', icon: <Globe className="w-6 h-6" /> }
    ]
  },
  {
    id: 'harmony',
    title: 'Harmony',
    company: 'AI Music Platform',
    category: 'Music & AI',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/harmony1.png',
    logo: 'https://img.icons8.com/color/96/music.png',
    description: 'AI-powered music collaboration platform built in 4 weeks. Complete music creation suite with intelligent composition tools and real-time collaboration features.',
    type: 'ai-native',
    caseStudyUrl: '/case-study/harmony',
    metrics: [
      { label: 'Build Time', value: '4 weeks', icon: <Clock className="w-6 h-6" /> },
      { label: 'AI Features', value: '12+', icon: <Bot className="w-6 h-6" /> }
    ]
  }
];

// Additional showcase projects for the smaller cards
const additionalProjects = [
  {
    id: 'etihad-airways',
    title: 'Etihad Airways',
    company: 'Booking System Innovation',
    category: 'Airlines & Travel',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad1.png',
    logo: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad-logo.png',
    description: 'Enhanced booking system and customer experience platform for UAE national airline. Streamlined reservation process with improved user interface and backend optimization.',
    caseStudyUrl: '/case-study/etihad-airways',
    metrics: [
      { label: 'Industry', value: 'Aviation', icon: <Globe className="w-6 h-6" /> },
      { label: 'Focus', value: 'UX/UI', icon: <Target className="w-6 h-6" /> }
    ]
  },
  {
    id: 'arabian-center',
    title: 'Arabian Center',
    company: 'Al-Futtaim Group',
    category: 'Retail & Real Estate',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter1.png',
    logo: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/al-futtaim-logo.png',
    caseStudyUrl: '/case-study/arabian-center'
  },
  {
    id: 'bfit-web3',
    title: 'BFIT Web3',
    company: 'Blockchain Fitness Platform',
    category: 'Web3 & Fitness',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png',
    caseStudyUrl: '/case-study/bfit-web3'
  },
  {
    id: 'genieology',
    title: 'Genieology',
    company: 'Creative Agency',
    category: 'Digital Agency & Design',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/genie1.png',
    logo: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/genieology-logo.webp',
    caseStudyUrl: '/case-study/genieology'
  },
  {
    id: 'rhythm-ai',
    title: 'Rhythm AI',
    company: 'Running Coach App',
    category: 'AI & Fitness',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/rhythm1.png',
    caseStudyUrl: '/case-study/rhythm'
  },
  {
    id: 'chilled-crm',
    title: 'ChilledCRM',
    company: 'Business Management',
    category: 'SaaS & CRM',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledcrm1.png',
    caseStudyUrl: '/case-study/chilledcrm'
  },
  {
    id: 'experience-gift',
    title: 'Experience A Gift',
    company: 'Gift Platform',
    category: 'E-commerce',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/experienceagift.png',
    caseStudyUrl: '/case-study/experience-a-gift'
  }
];

// Force rebuild with environment variables
export default function HomeV2() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");
  const [showProjectConfigurator, setShowProjectConfigurator] = useState(false);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);

  const openVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
    setShowVideoModal(true);
  };

  // Auto-rotate case studies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCaseStudy((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-bg.png')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        <Header />

        <div className="container mx-auto px-4 pt-24 md:pt-40 pb-16 md:pb-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
                    <span className="font-light">Your AI Delivery Partner — On Demand</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl font-thin leading-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      Plug-in expertise for your next big project
                    </span>
                  </h1>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  I work with agencies and corporates to deliver AI-powered products that match your standards,
                  hit your deadlines, and impress your clients.
                </p>

                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  Whether you need a specialist to join your team or a full build from the ground up,
                  I combine AI acceleration with proven delivery expertise to get it done — right, first time.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowProjectConfigurator(true)}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium text-lg inline-flex items-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    Partner With Me
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <a
                    href="#focus"
                    className="px-8 py-4 border border-gray-600 text-white rounded-lg hover:bg-white/10 transition-all font-medium text-lg"
                  >
                    View Expertise
                  </a>
                </div>
              </motion.div>

              {/* Right Column - Value Showcase */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Case Study Mini Carousel */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-4"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-light text-white mb-3">Success Stories</h3>
                    <p className="text-gray-300">Real projects, real results</p>
                  </div>

                  {/* Current Case Study Card - Made Much Bigger */}
                  <motion.div
                    key={currentCaseStudy}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/20 cursor-pointer group min-h-[360px] md:min-h-[480px]"
                    onClick={() => window.location.href = featuredProjects[currentCaseStudy].caseStudyUrl}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={featuredProjects[currentCaseStudy].image}
                        alt={featuredProjects[currentCaseStudy].title}
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>

                    <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                      <div className="space-y-6">
                        {/* Top Section */}
                        <div className="flex items-center gap-3 md:gap-4">
                          {featuredProjects[currentCaseStudy].logo && (
                            <img
                              src={featuredProjects[currentCaseStudy].logo}
                              alt={`${featuredProjects[currentCaseStudy].company} logo`}
                              className="h-10 md:h-12 w-auto filter brightness-0 invert"
                            />
                          )}
                          <div>
                            <h4 className="text-xl md:text-2xl font-bold text-white">{featuredProjects[currentCaseStudy].title}</h4>
                            <p className="text-blue-200 text-base md:text-lg">{featuredProjects[currentCaseStudy].company}</p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/90 text-base leading-relaxed">
                          {featuredProjects[currentCaseStudy].description}
                        </p>

                        {/* Metrics if available */}
                        {featuredProjects[currentCaseStudy].metrics && (
                          <div className="grid grid-cols-2 gap-3 md:gap-4">
                            {featuredProjects[currentCaseStudy].metrics.slice(0, 2).map((metric, i) => (
                              <div key={i} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3">
                                <div className="text-lg md:text-xl font-bold text-white">{metric.value}</div>
                                <div className="text-xs text-white/70">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Bottom Section */}
                      <div className="flex items-center justify-between mt-4">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
                          {featuredProjects[currentCaseStudy].category}
                        </span>
                        <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                          <span className="text-sm">View Case Study</span>
                          <ExternalLink className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Navigation Dots */}
                  <div className="flex justify-center gap-3 mt-6">
                    {featuredProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentCaseStudy(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentCaseStudy
                          ? 'bg-white scale-125'
                          : 'bg-white/40 hover:bg-white/60'
                          }`}
                      />
                    ))}
                  </div>


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
              <p className="text-gray-700 font-medium">Trusted by leading organizations</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
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

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-thin mb-6 text-gray-900" style={{ color: '#111827' }}>Proven Track Record</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Two decades of digital leadership delivering measurable results across industries
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="text-blue-600 mb-4 flex justify-center">{highlight.icon}</div>
                  <div className="text-4xl font-thin mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {highlight.metric}
                  </div>
                  <div className="text-xl font-light mb-2 text-gray-800">{highlight.label}</div>
                  <div className="text-gray-700">{highlight.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-thin mb-6">Problems We Solve</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
                When organizations need to move fast, scale efficiently, and deliver exceptional results
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-red-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-red-100 rounded-2xl">
                    <Clock className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light mb-2 text-gray-900">Time-to-Market Pressure</h3>
                    <p className="text-red-600 font-medium mb-3">AI-accelerated development delivers 80% faster</p>
                    <p className="text-gray-700 font-light">When deadlines are tight and stakes are high, our AI-powered development process cuts months off traditional timelines while maintaining enterprise quality.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-green-100 rounded-2xl">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light mb-2 text-gray-900">Budget & Resource Constraints</h3>
                    <p className="text-green-600 font-medium mb-3">Fractional expertise at 50-70% less cost</p>
                    <p className="text-gray-700 font-light">Get C-level strategic thinking and senior technical execution without the full-time overhead. Scale your capabilities without scaling your costs.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-blue-100 rounded-2xl">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light mb-2 text-gray-900">Complex Technical Challenges</h3>
                    <p className="text-blue-600 font-medium mb-3">Proven track record scaling 1→40 teams</p>
                    <p className="text-gray-700 font-light">From startup MVPs to enterprise transformations, we've solved complex technical and organizational challenges across every scale and industry.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-purple-100 rounded-2xl">
                    <Rocket className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light mb-2 text-gray-900">Digital Transformation Needs</h3>
                    <p className="text-purple-600 font-medium mb-3">End-to-end transformation expertise</p>
                    <p className="text-gray-700 font-light">Navigate the complexity of digital transformation with strategic guidance, technical execution, and change management that delivers measurable results.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-600 mb-6 font-light">
                Ready to solve your biggest challenges?
              </p>
              <motion.a
                href="mailto:paul@p0stman.com?subject=Project Discussion"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium text-lg inline-flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Let's Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas - Updated for better contrast */}
      <section id="focus" className="py-24 bg-gray-50" style={{ color: '#111827' }}>
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
                <span className="text-blue-600 font-light">Focus Areas</span>
              </div>

              <h2 className="text-4xl font-thin mb-6 text-black">
                How I Help Organizations Win with AI
              </h2>

              <p className="text-black max-w-2xl mx-auto text-lg font-semibold">
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
                    <h3 className="text-xl font-semibold mb-3 text-black">{area.title}</h3>
                    <p className="text-black mb-6 font-semibold">{area.description}</p>
                  </div>

                  <div className="space-y-3">
                    {area.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-black font-semibold">{feature}</span>
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
                <span className="text-blue-400 font-light">AI-Native Building</span>
              </div>

              <h2 className="text-4xl font-thin mb-6">
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
                  <h3 className="text-2xl font-light">P0STMAN Agency</h3>
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
                  <h3 className="text-2xl font-light">Chilled Tools</h3>
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
              <h3 className="text-2xl font-light mb-8">See AI Building in Action</h3>
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

              <h2 className="text-4xl font-thin mb-6 text-gray-900" style={{ color: '#111827' }}>
                Strategic Product Delivery Across Industries
              </h2>

              <p className="text-gray-700 max-w-2xl mx-auto text-lg font-light">
                Banking, media, health, retail and Web3. From innovation pilots to
                enterprise transformations, delivering measurable impact at scale.
              </p>
            </motion.div>

            {/* Major Project Highlights - Top 3 Large */}
            <div className="space-y-8 mb-16">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => window.location.href = project.caseStudyUrl}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        {project.logo && (
                          <img
                            src={project.logo}
                            alt={`${project.company} logo`}
                            className="h-12 filter brightness-0 invert"
                          />
                        )}
                      </div>
                    </div>

                    <div className="p-8 lg:p-12">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-light text-gray-900 mb-2">{project.title}</h3>
                          <p className="text-blue-600 font-medium mb-1">{project.company}</p>
                          <p className="text-gray-600 font-light">{project.category}</p>
                        </div>

                        <p className="text-gray-700 font-light leading-relaxed">{project.description}</p>

                        {project.metrics && (
                          <div className="grid grid-cols-3 gap-4">
                            {project.metrics.map((metric, i) => (
                              <div key={i} className="text-center">
                                <div className="text-2xl font-thin text-blue-600 mb-1">{metric.value}</div>
                                <div className="text-xs text-gray-500">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                          <span className="font-medium">View Case Study</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Medium Tall Projects - 2 Cards */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {featuredProjects.slice(3, 4).concat(additionalProjects.slice(0, 1)).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => window.location.href = project.caseStudyUrl}
                >
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      {project.logo && (
                        <img
                          src={project.logo}
                          alt={`${project.company} logo`}
                          className="h-10 filter brightness-0 invert"
                        />
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-light text-gray-900 mb-1">{project.title}</h3>
                        <p className="text-blue-600 font-medium text-sm">{project.company}</p>
                      </div>

                      <p className="text-gray-700 font-light text-sm leading-relaxed">{project.description}</p>

                      {project.metrics && (
                        <div className="grid grid-cols-2 gap-3">
                          {project.metrics.slice(0, 2).map((metric, i) => (
                            <div key={i} className="text-center bg-gray-50 rounded-lg p-3">
                              <div className="text-lg font-thin text-blue-600 mb-1">{metric.value}</div>
                              <div className="text-xs text-gray-500">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                        <span className="font-medium text-sm">View Case Study</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Medium Short Projects - 2 Cards */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {additionalProjects.slice(1, 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => window.location.href = project.caseStudyUrl}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-32 md:h-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        {project.logo && (
                          <img
                            src={project.logo}
                            alt={`${project.company} logo`}
                            className="h-6 filter brightness-0 invert"
                          />
                        )}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-lg font-light text-gray-900 mb-1">{project.title}</h4>
                          <p className="text-blue-600 font-medium text-sm">{project.company}</p>
                        </div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide font-light">
                          {project.category}
                        </div>
                        <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                          <span className="font-medium text-sm">View Project</span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Small Projects - 4 Cards */}
            {additionalProjects.length > 3 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {additionalProjects.slice(3).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer bg-white"
                    onClick={() => window.location.href = project.caseStudyUrl}
                  >
                    <div className="relative h-32 p-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-light rounded-full shadow-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="p-3">
                      <h5 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">{project.title}</h5>
                      <p className="text-gray-600 text-xs font-light">{project.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to="/case-studies"
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
                      <div className="text-gray-700">{testimonial.role}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoId={currentVideoId}
      />



      <AnimatedFooter onOpenProjectConfigurator={() => setShowProjectConfigurator(true)} />

      {showProjectConfigurator && (
        <ProjectConfigurator onClose={() => setShowProjectConfigurator(false)} />
      )}
    </div>
  );
}