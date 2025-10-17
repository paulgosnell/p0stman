import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Bot, 
  Zap, 
  ArrowRight, 
  Clock, 
  Code, 
  Rocket, 
  CheckCircle,
  Users,
  Target,
  Lightbulb,
  Settings,
  TrendingUp,
  Shield,
  Globe,
  MessageSquare,
  FileText,
  TestTube,
  Cloud,
  HeadphonesIcon
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import FloatingGuideAgent from '../components/FloatingGuideAgent';

const processSteps = [
  {
    id: 1,
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Discovery & Strategy",
    description: "Deep dive into your vision, goals, and technical requirements",
    duration: "1-2 days",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    activities: [
      {
        icon: <MessageSquare className="w-5 h-5" />,
        title: "Initial Consultation",
        description: "Understanding your business goals and vision"
      },
      {
        icon: <Target className="w-5 h-5" />,
        title: "Requirements Analysis",
        description: "Detailed technical and functional requirements"
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "User Research",
        description: "Understanding your target audience and use cases"
      },
      {
        icon: <FileText className="w-5 h-5" />,
        title: "Project Roadmap",
        description: "Clear timeline and milestone planning"
      }
    ],
    deliverables: [
      "Project specification document",
      "Technical architecture plan",
      "Timeline and milestones",
      "Resource allocation plan"
    ]
  },
  {
    id: 2,
    icon: <Code className="w-8 h-8" />,
    title: "AI-Powered Development",
    description: "Rapid development using cutting-edge AI tools and methodologies",
    duration: "1-4 weeks",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    activities: [
      {
        icon: <Bot className="w-5 h-5" />,
        title: "AI Code Generation",
        description: "Leveraging AI for rapid, high-quality code development"
      },
      {
        icon: <Settings className="w-5 h-5" />,
        title: "Continuous Integration",
        description: "Automated testing and deployment pipelines"
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Daily Progress Updates",
        description: "Transparent communication and regular demos"
      },
      {
        icon: <TestTube className="w-5 h-5" />,
        title: "Quality Assurance",
        description: "Comprehensive testing throughout development"
      }
    ],
    deliverables: [
      "Working application/platform",
      "Clean, documented codebase",
      "Automated test suite",
      "Performance optimization"
    ]
  },
  {
    id: 3,
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch & Optimization",
    description: "Seamless deployment with ongoing support and optimization",
    duration: "2-3 days",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    activities: [
      {
        icon: <Cloud className="w-5 h-5" />,
        title: "Cloud Deployment",
        description: "Secure, scalable deployment to production"
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Security Audit",
        description: "Comprehensive security testing and hardening"
      },
      {
        icon: <Globe className="w-5 h-5" />,
        title: "Performance Testing",
        description: "Load testing and performance optimization"
      },
      {
        icon: <HeadphonesIcon className="w-5 h-5" />,
        title: "Support Setup",
        description: "Documentation and support system setup"
      }
    ],
    deliverables: [
      "Live production deployment",
      "Complete documentation",
      "Training materials",
      "30 days of support"
    ]
  }
];

const benefits = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: "80% Faster Development",
    description: "AI-powered development dramatically reduces time-to-market"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    title: "70% Cost Reduction",
    description: "Efficient processes and AI assistance lower overall costs"
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    title: "100% Success Rate",
    description: "Proven methodology with consistent project delivery"
  },
  {
    icon: <Users className="w-6 h-6 text-purple-500" />,
    title: "Expert Leadership",
    description: "20+ years of experience guiding every project"
  }
];

const testimonials = [
  {
    quote: "Paul's process is incredibly efficient. What would have taken our team 6 months, he delivered in 3 weeks with better quality than we expected.",
    author: "Sarah Johnson",
    role: "CTO, TechStart",
    avatar: "SJ"
  },
  {
    quote: "The transparency and daily updates gave us complete confidence. We knew exactly what was happening at every stage.",
    author: "Michael Chen",
    role: "Founder, InnovateCorp",
    avatar: "MC"
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Helmet>
          <title>Our Process | AI-Powered Development Methodology</title>
          <meta name="description" content="Discover our proven AI-powered development process that delivers exceptional results 80% faster. Transparent, efficient, and cost-effective methodology." />
          <meta name="keywords" content="development process, AI development, agile methodology, rapid development, project management" />
          <meta property="og:title" content="Our Process | AI-Powered Development Methodology" />
          <meta property="og:description" content="Proven AI-powered development process that delivers results 80% faster than traditional methods." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Our Process | AI-Powered Development Methodology" />
          <meta name="twitter:description" content="Proven AI-powered development process that delivers results 80% faster." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/process" />
        </Helmet>

        <HeaderV3Global />

        {/* Enhanced Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
            {/* Animated Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto"
              >
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="p-2 bg-blue-500/20 rounded-xl">
                    <Zap className="w-6 h-6 text-blue-400 dark:text-blue-400" />
                  </div>
                  <span className="text-blue-400 dark:text-blue-400 font-medium text-lg">Our Methodology</span>
                </div>

                <h1 className="text-6xl md:text-7xl font-thin mb-8">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    How We Build
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Better, Faster
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                  Our proven AI-powered development process combines cutting-edge technology
                  with 20+ years of experience to deliver exceptional results in record time.
                </p>

                {/* Enhanced Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-gray-50 dark:bg-gray-800 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="mb-4">{benefit.icon}</div>
                        <div className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">{benefit.title.split(' ')[0]}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">{benefit.title.split(' ').slice(1).join(' ')}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Process Steps */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-gray-100">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Our 3-Step Process
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  From initial consultation to final deployment, every step is designed
                  for maximum efficiency and exceptional results.
                </p>
              </motion.div>

              {/* Process Navigation */}
              <div className="flex justify-center mb-16">
                <div className="flex bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
                  {processSteps.map((step) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all ${
                        activeStep === step.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      Step {step.id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Step Content */}
              {processSteps.map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeStep === step.id ? 1 : 0,
                    y: activeStep === step.id ? 0 : 20,
                    display: activeStep === step.id ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${activeStep === step.id ? 'block' : 'hidden'}`}
                >
                  <div className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 md:p-12 shadow-xl border border-white/50`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Left Column - Content */}
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`p-4 bg-gradient-to-br ${step.color} rounded-2xl text-white shadow-lg`}>
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-3xl font-light text-gray-900 dark:text-gray-100">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">{step.duration}</p>
                          </div>
                        </div>

                        <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Deliverables */}
                        <div className="mb-8">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Key Deliverables</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {step.deliverables.map((deliverable, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-200">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Activities */}
                      <div className="space-y-4">
                        {step.activities.map((activity, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 dark:border-gray-700/50 hover:shadow-xl transition-all transform hover:-translate-y-1"
                          >
                            <div className="flex items-start gap-4">
                              <div className={`p-3 bg-gradient-to-br ${step.color} rounded-xl text-white flex-shrink-0`}>
                                {activity.icon}
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">{activity.title}</h5>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{activity.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-light mb-6 text-gray-900 dark:text-gray-100">
                  What Clients Say About Our Process
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Real feedback from leaders who've experienced our methodology
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">{testimonial.author}</div>
                        <div className="text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-light mb-6">
                  Ready to Experience the Difference?
                </h2>
                
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and show you how our proven process 
                  can deliver exceptional results faster than you thought possible.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:hello@p0stman.com"
                    className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-[1.02] font-medium text-lg inline-flex items-center gap-2"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/case-studies"
                    className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-medium text-lg"
                  >
                    View Case Studies
                  </a>
                </div>

                <div className="mt-8 text-blue-100">
                  <p className="text-sm">✨ Free consultation • No commitment required</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterV3 />
        <FloatingGuideAgent />
      </div>
    </HelmetProvider>
  );
}