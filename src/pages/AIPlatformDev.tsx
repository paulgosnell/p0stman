import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Code, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Globe,
  Shield,
  Clock,
  DollarSign,
  Target,
  Database,
  Cloud,
  MessageSquare,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';

const capabilities = [
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "AI Integration",
    description: "Seamlessly integrate GPT-4, Claude, Gemini, and custom AI models into your platform."
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-600" />,
    title: "Rapid Development",
    description: "Build production-ready platforms in weeks, not months, using AI-powered development."
  },
  {
    icon: <Shield className="w-8 h-8 text-green-600" />,
    title: "Enterprise Security",
    description: "Bank-grade security, compliance, and data protection built into every solution."
  },
  {
    icon: <Globe className="w-8 h-8 text-orange-600" />,
    title: "Scalable Architecture",
    description: "Cloud-native solutions that scale from MVP to millions of users seamlessly."
  }
];

const techStack = [
  { name: "AI Models", items: ["GPT-4", "Claude", "Gemini", "Custom Models"] },
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", items: ["Node.js", "Python", "Supabase", "PostgreSQL"] },
  { name: "Cloud", items: ["Vercel", "AWS", "Azure", "Google Cloud"] },
  { name: "AI Tools", items: ["LangChain", "Vector DBs", "OpenAI API", "Anthropic"] },
  { name: "DevOps", items: ["Docker", "CI/CD", "Monitoring", "Analytics"] }
];

const projectTypes = [
  {
    title: "AI-Powered SaaS",
    description: "Complete SaaS platforms with AI at the core",
    examples: ["CRM with AI insights", "Content generation tools", "Data analysis platforms"],
    timeline: "4-8 weeks",
    price: "$25k - $75k"
  },
  {
    title: "Custom AI Agents",
    description: "Intelligent agents for specific business processes",
    examples: ["Customer support bots", "Sales automation", "Content moderation"],
    timeline: "2-4 weeks",
    price: "$15k - $40k"
  },
  {
    title: "AI-Enhanced Platforms",
    description: "Add AI capabilities to existing systems",
    examples: ["Smart recommendations", "Automated workflows", "Predictive analytics"],
    timeline: "3-6 weeks",
    price: "$20k - $50k"
  },
  {
    title: "Enterprise AI Solutions",
    description: "Large-scale AI transformations",
    examples: ["Document processing", "Decision support systems", "Process automation"],
    timeline: "8-16 weeks",
    price: "$75k - $200k+"
  }
];

const caseStudies = [
  {
    title: "Chilled CRM",
    description: "AI-powered CRM built in 4 weeks with intelligent lead scoring and automated follow-ups",
    results: ["70% faster development", "AI-driven insights", "4+ markets adoption"],
    tech: ["React", "Supabase", "OpenAI", "TypeScript"]
  },
  {
    title: "Content Generation Platform",
    description: "Multi-model AI platform for creating marketing content across channels",
    results: ["10x content output", "90% time savings", "Enterprise clients"],
    tech: ["Next.js", "GPT-4", "Claude", "Vector DB"]
  },
  {
    title: "Document Intelligence System",
    description: "Enterprise document processing with AI extraction and analysis",
    results: ["95% accuracy", "80% cost reduction", "Real-time processing"],
    tech: ["Python", "Azure AI", "PostgreSQL", "React"]
  }
];

const process = [
  {
    step: "01",
    title: "AI Strategy & Planning",
    description: "Define AI use cases, select models, and plan architecture",
    duration: "1-2 days"
  },
  {
    step: "02",
    title: "Rapid Prototyping",
    description: "Build working prototype with core AI functionality",
    duration: "3-5 days"
  },
  {
    step: "03",
    title: "Development & Integration",
    description: "Full platform development with AI model integration",
    duration: "2-6 weeks"
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description: "Performance tuning, security testing, and AI model optimization",
    duration: "3-7 days"
  },
  {
    step: "05",
    title: "Deployment & Support",
    description: "Production deployment with monitoring and ongoing support",
    duration: "1-2 days"
  }
];

export default function AIPlatformDev() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>AI Platform Development | Custom AI Solutions | P0STMAN</title>
          <meta name="description" content="Build production-ready AI platforms in weeks. Custom AI solutions using GPT-4, Claude, and cutting-edge AI technologies for enterprise and startups." />
          <meta name="keywords" content="AI development, AI platform, GPT-4, Claude, custom AI solutions, AI integration" />
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Bot className="w-8 h-8 text-blue-400" />
                    <span className="text-blue-400 font-semibold">AI Platform Development</span>
                  </div>
                  
                  <h1 className="text-5xl font-bold mb-6 leading-tight">
                    Build AI-Powered Platforms
                    <span className="block text-blue-400">That Actually Work</span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    From concept to production in weeks, not months. I build custom AI platforms 
                    using GPT-4, Claude, and cutting-edge AI technologies that deliver real 
                    business value.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="mailto:hello@p0stman.com?subject=AI Platform Development Inquiry"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg inline-flex items-center gap-2"
                    >
                      <Sparkles className="w-5 h-5" />
                      Start Your AI Project
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#case-studies"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 border border-gray-400 text-white rounded-lg hover:bg-gray-50 transition-all font-semibold text-lg"
                    >
                      View Case Studies
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-gray-50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200">
                    <h3 className="text-2xl font-bold mb-6">Why Choose AI-First Development?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Zap className="w-6 h-6 text-yellow-400 mt-1" />
                        <div>
                          <h4 className="font-semibold">10x Faster Development</h4>
                          <p className="text-gray-300 text-sm">AI-powered coding accelerates every phase</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Brain className="w-6 h-6 text-purple-400 mt-1" />
                        <div>
                          <h4 className="font-semibold">Intelligent by Design</h4>
                          <p className="text-gray-300 text-sm">AI capabilities built into the core architecture</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-6 h-6 text-green-400 mt-1" />
                        <div>
                          <h4 className="font-semibold">Future-Proof Technology</h4>
                          <p className="text-gray-300 text-sm">Built with the latest AI models and frameworks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
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
                <h2 className="text-4xl font-bold mb-6">Core Capabilities</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  End-to-end AI platform development with enterprise-grade quality and startup speed
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 rounded-xl hover:shadow-lg transition-all"
                  >
                    <div className="mb-4 flex justify-center">{capability.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                    <p className="text-gray-600">{capability.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">Technology Stack</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Cutting-edge technologies and AI models for maximum performance and scalability
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {techStack.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-sm"
                  >
                    <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                    <div className="space-y-2">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Types Section */}
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
                <h2 className="text-4xl font-bold mb-6">Project Types & Pricing</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From MVP to enterprise solutions, tailored to your needs and budget
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {projectTypes.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-200"
                  >
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Examples:</h4>
                      <ul className="space-y-2">
                        {project.examples.map((example, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{project.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{project.price}</span>
                        </div>
                      </div>
                      <motion.a
                        href="mailto:hello@p0stman.com?subject=AI Platform Development Inquiry"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-sm"
                      >
                        Get Quote
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Real AI platforms delivering measurable business results
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-sm"
                  >
                    <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                    <p className="text-gray-600 mb-6">{study.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {study.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                <h2 className="text-4xl font-bold mb-6">Development Process</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Streamlined process from concept to production deployment
                </p>
              </motion.div>

              <div className="space-y-8">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl"
                  >
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}