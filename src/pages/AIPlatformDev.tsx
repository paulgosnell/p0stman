import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';

const capabilities = [
  {
    title: "AI Integration",
    description: "Seamlessly integrate GPT-4, Claude, Gemini, and custom AI models into your platform."
  },
  {
    title: "Rapid Development",
    description: "Build production-ready platforms in weeks, not months, using AI-powered development."
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security, compliance, and data protection built into every solution."
  },
  {
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
          <title>AI Platform Development | Custom AI Solutions | POSTMAN</title>
          <meta name="description" content="Build production-ready AI platforms in weeks. Custom AI solutions using GPT-4, Claude, and cutting-edge AI technologies for enterprise and startups." />
          <meta name="keywords" content="AI development, AI platform, GPT-4, Claude, custom AI solutions, AI integration" />
          <link rel="canonical" href="https://p0stman.com/ai-platform-development" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Platform Development",
              "description": "Build production-ready AI platforms in weeks. Custom AI solutions using GPT-4, Claude, and cutting-edge AI technologies for enterprise and startups.",
              "provider": { "@type": "Organization", "name": "POSTMAN", "url": "https://p0stman.com" },
              "serviceType": ["AI Development", "Custom AI Solutions", "AI Integration", "Enterprise AI"],
              "areaServed": "Worldwide",
              "offers": { "@type": "Offer", "price": "15000", "priceCurrency": "USD", "description": "Starting from $15,000" }
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://p0stman.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://p0stman.com/services" },
                { "@type": "ListItem", "position": 3, "name": "AI Platform Development", "item": "https://p0stman.com/ai-platform-development" }
              ]
            })}
          </script>
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section className="py-32 md:py-48 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <div className="mb-8">
                  <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                    AI Platform Development
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.05] tracking-tight mb-8">
                  Build AI-Powered Platforms
                  <span className="block">That Actually Work</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
                  From concept to production in weeks, not months. I build custom AI platforms
                  using GPT-4, Claude, and cutting-edge AI technologies that deliver real
                  business value.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="mailto:hello@p0stman.com?subject=AI Platform Development Inquiry"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light text-lg"
                  >
                    Start Your AI Project
                    <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                  </motion.a>
                  <motion.a
                    href="#case-studies"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors font-light text-lg"
                  >
                    View Case Studies
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="bg-gray-50 p-8 lg:p-12 border-t border-gray-200">
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Why Choose AI-First Development?</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="text-gray-900 font-light mb-1">10x Faster Development</h4>
                        <p className="text-gray-600 text-sm font-light">AI-powered coding accelerates every phase</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="text-gray-900 font-light mb-1">Intelligent by Design</h4>
                        <p className="text-gray-600 text-sm font-light">AI capabilities built into the core architecture</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="text-gray-900 font-light mb-1">Future-Proof Technology</h4>
                        <p className="text-gray-600 text-sm font-light">Built with the latest AI models and frameworks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Core Capabilities
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight mb-8">
                End-to-end AI platform development
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
                Enterprise-grade quality with startup speed
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border-t border-gray-200"
                >
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">{capability.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Technology Stack
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight mb-8">
                Cutting-edge technologies
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
                AI models and frameworks for maximum performance and scalability
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStack.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 border-t border-gray-200"
                >
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6">{category.name}</h3>
                  <div className="space-y-3">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-gray-600 font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Project Types & Pricing
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight mb-8">
                From MVP to enterprise
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
                Tailored to your needs and budget
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {projectTypes.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-white p-8 lg:p-12 border-t border-gray-200"
                >
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-8">{project.description}</p>

                  <div className="mb-8">
                    <h4 className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-4">Examples:</h4>
                    <ul className="space-y-3">
                      {project.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                          <span className="text-gray-600 font-light">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-8 border-t border-gray-200">
                    <div className="space-y-2">
                      <div className="text-sm text-gray-400 uppercase tracking-[0.2em]">Timeline</div>
                      <div className="text-gray-900 font-light">{project.timeline}</div>
                      <div className="text-sm text-gray-400 uppercase tracking-[0.2em] mt-3">Investment</div>
                      <div className="text-gray-900 font-light">{project.price}</div>
                    </div>
                    <motion.a
                      href="mailto:hello@p0stman.com?subject=AI Platform Development Inquiry"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors font-light"
                    >
                      Get Quote
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-24 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Success Stories
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight mb-8">
                Real AI platforms
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
                Delivering measurable business results
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 border-t border-gray-200"
                >
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-8">{study.description}</p>

                  <div className="mb-8">
                    <h4 className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-4">Results:</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                          <span className="text-gray-600 font-light text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white text-gray-600 border border-gray-200 text-xs font-light">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Development Process
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight mb-8">
                Concept to production
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
                Streamlined process from planning to deployment
              </p>
            </motion.div>

            <div className="space-y-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="flex items-start gap-8 p-8 lg:p-12 bg-white border-t border-gray-200"
                >
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-light text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed mb-4">{step.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400 uppercase tracking-[0.2em]">Duration:</span>
                      <span className="text-gray-900 font-light">{step.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-black text-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
                Ready to Build Your AI Platform?
              </h2>

              <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12">
                Let's discuss your AI project. We'll provide honest guidance on feasibility, timeline, and investment.
              </p>

              <motion.a
                href="mailto:hello@p0stman.com?subject=AI Platform Development Inquiry"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors font-light text-lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
