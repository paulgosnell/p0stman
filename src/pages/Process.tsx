import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Bot,
  Zap,
  ArrowRight,
  Code,
  Rocket,
  Check,
  Users,
  Target,
  Lightbulb,
  Settings,
  TrendingUp,
  Shield,
  MessageSquare,
  FileText,
  TestTube,
  Cloud,
  HeadphonesIcon
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import FloatingGuideAgent from '../components/FloatingGuideAgent';
import TechStack from '../components/TechStack';

const processSteps = [
  {
    id: 1,
    number: "01",
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Discovery & Strategy",
    description: "Deep dive into your vision, goals, and technical requirements",
    duration: "1-2 days",
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
    number: "02",
    icon: <Code className="w-8 h-8" />,
    title: "AI-Powered Development",
    description: "Rapid development using cutting-edge AI tools and methodologies",
    duration: "1-4 weeks",
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
    number: "03",
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch & Optimization",
    description: "Seamless deployment with ongoing support and optimization",
    duration: "2-3 days",
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
        icon: <TrendingUp className="w-5 h-5" />,
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
    icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
    title: "80% Faster",
    subtitle: "Development",
    description: "AI-powered development dramatically reduces time-to-market"
  },
  {
    icon: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />,
    title: "70% Cost",
    subtitle: "Reduction",
    description: "Efficient processes and AI assistance lower overall costs"
  },
  {
    icon: <Shield className="w-6 h-6" strokeWidth={1.5} />,
    title: "100% Success",
    subtitle: "Rate",
    description: "Proven methodology with consistent project delivery"
  },
  {
    icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
    title: "Expert",
    subtitle: "Leadership",
    description: "20+ years of experience guiding every project"
  }
];

const testimonials = [
  {
    quote: "Paul's process is incredibly efficient. What would have taken our team 6 months, he delivered in 3 weeks with better quality than we expected.",
    author: "Sarah Johnson",
    role: "CTO, TechStart"
  },
  {
    quote: "The transparency and daily updates gave us complete confidence. We knew exactly what was happening at every stage.",
    author: "Michael Chen",
    role: "Founder, InnovateCorp"
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
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

        <HeaderV3Global darkMode={false} />

        {/* Hero Section */}
        <section className="py-32 md:py-48 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Eyebrow */}
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Our Methodology
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-gray-900 leading-[1.05] tracking-tight mb-8">
                How We Build
                <br />
                Better, Faster
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mb-16">
                Our proven AI-powered development process combines cutting-edge technology with 20+ years of experience to deliver exceptional results in record time.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                  >
                    <div className="mb-4 text-gray-400 flex justify-center">
                      {benefit.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-light text-gray-900 mb-1">
                      {benefit.title}
                    </div>
                    <div className="text-lg md:text-xl text-gray-500 font-light mb-2">
                      {benefit.subtitle}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Three Steps
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight max-w-4xl mb-8">
                Our Process
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
                From initial consultation to final deployment, every step is designed for maximum efficiency and exceptional results.
              </p>
            </motion.div>

            {/* Process Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {processSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`px-6 py-3 font-light transition-all ${
                    activeStep === step.id
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
                  }`}
                >
                  Step {step.number}
                </button>
              ))}
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
                <div className="bg-white p-8 md:p-12 lg:p-16 border-t border-gray-200">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Left Column - Overview */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="text-gray-400 mb-6">
                        {step.icon}
                      </div>

                      <div>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-xl md:text-2xl text-gray-500 font-light mb-2">
                          {step.description}
                        </p>
                        <p className="text-gray-400 font-light">
                          Duration: {step.duration}
                        </p>
                      </div>

                      {/* Deliverables */}
                      <div className="pt-8">
                        <h4 className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-6">
                          Key Deliverables
                        </h4>
                        <div className="space-y-3">
                          {step.deliverables.map((deliverable, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                              <span className="text-gray-600 font-light">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Activities */}
                    <div className="lg:col-span-7 space-y-4">
                      {step.activities.map((activity, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="bg-gray-50 p-6 border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <div className="text-gray-400 flex-shrink-0">
                              {activity.icon}
                            </div>
                            <div>
                              <h5 className="font-light text-lg text-gray-900 mb-2">{activity.title}</h5>
                              <p className="text-gray-600 font-light text-sm leading-relaxed">{activity.description}</p>
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
        </section>

        {/* Testimonials */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Client Feedback
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight max-w-4xl">
                What Clients Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 lg:p-12 border-t border-gray-200"
                >
                  <p className="text-xl md:text-2xl text-gray-900 font-light mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-light text-gray-900 mb-1">{testimonial.author}</div>
                    <div className="text-gray-500 font-light text-sm">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Building Blocks */}
        <TechStack
          eyebrow="Technology Stack"
          title="AI Building Blocks"
          description="The Technology Stack We Build With"
          className="bg-white"
        />

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
                Ready to Experience
                <br />
                the Difference?
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
                Let's discuss your project and show you how our proven process can deliver exceptional results faster than you thought possible.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light text-lg"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors font-light text-lg"
                >
                  View Case Studies
                </Link>
              </div>

              <div className="mt-8 text-gray-500 font-light">
                <p className="text-sm">Free consultation • No commitment required</p>
              </div>
            </motion.div>
          </div>
        </section>

        <FooterV3 />
        <FloatingGuideAgent />
      </div>
    </HelmetProvider>
  );
}
