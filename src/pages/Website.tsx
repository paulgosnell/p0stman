import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Bot, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Code,
  Smartphone,
  Search,
  Shield,
  Rocket,
  Users,
  Clock,
  Star,
  TrendingUp,
  Palette,
  Database,
  Cloud,
  Settings,
  Target,
  Award,
  ExternalLink
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import WebsiteModal from '../components/modals/WebsiteModal';
import FooterV3 from '../components/v3/FooterV3';

// Website portfolio examples
const portfolioExamples = [
  {
    id: 1,
    title: "Arabian Center",
    category: "Retail & Real Estate",
    image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/arabiancenter1.png",
    description: "Premium brand website with custom CMS for Al-Futtaim Group",
    features: ["Custom CMS", "Premium Design", "Content Management"],
    tech: ["React", "Custom CMS", "Responsive Design"],
    caseStudyUrl: "/case-study/arabian-center"
  },
  {
    id: 2,
    title: "Genieology",
    category: "Creative Agency",
    image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/genie1.png",
    description: "Creative agency website transformation with instant success",
    features: ["API-powered CMS", "Enhanced Animations", "Conversion Optimization"],
    tech: ["React", "API CMS", "Animation System"],
    caseStudyUrl: "/case-study/genieology"
  },
  {
    id: 3,
    title: "My Health Coach",
    category: "Government & Healthcare",
    image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png",
    description: "Government health app for Abu Dhabi residents with IBM partnership",
    features: ["Health Tracking", "Government Compliance", "Multi-platform"],
    tech: ["Mobile App", "Health APIs", "Government Standards"],
    caseStudyUrl: "/case-study/doh-health"
  }
];

// Technology stack
const techStack = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />,
    technologies: ["Node.js", "Supabase", "PostgreSQL", "APIs"],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Deployment",
    icon: <Cloud className="w-6 h-6" />,
    technologies: ["Netlify", "Vercel", "AWS", "CDN"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "AI Features",
    icon: <Bot className="w-6 h-6" />,
    technologies: ["OpenAI", "Claude", "Gemini", "Custom AI"],
    color: "from-orange-500 to-red-500"
  }
];

// Process steps
const processSteps = [
  {
    step: 1,
    title: "Discovery & Planning",
    description: "Understanding your business goals and technical requirements",
    duration: "1-2 days",
    activities: ["Business analysis", "Technical planning", "Design mockups", "Project roadmap"],
    icon: <Target className="w-8 h-8" />
  },
  {
    step: 2,
    title: "AI-Powered Development",
    description: "Rapid development using cutting-edge AI tools and frameworks",
    duration: "1-2 weeks",
    activities: ["AI code generation", "Component development", "API integration", "Testing"],
    icon: <Code className="w-8 h-8" />
  },
  {
    step: 3,
    title: "Launch & Optimization",
    description: "Deployment, testing, and performance optimization",
    duration: "2-3 days",
    activities: ["Production deployment", "Performance testing", "SEO optimization", "Training"],
    icon: <Rocket className="w-8 h-8" />
  }
];

// Features included
const includedFeatures = [
  {
    icon: <Palette className="w-6 h-6 text-blue-500" />,
    title: "Custom Design",
    description: "Unique, professional design tailored to your brand"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-green-500" />,
    title: "Mobile Responsive",
    description: "Perfect experience across all devices and screen sizes"
  },
  {
    icon: <Search className="w-6 h-6 text-purple-500" />,
    title: "SEO Optimized",
    description: "Built-in SEO best practices for better search rankings"
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: "Lightning Fast",
    description: "Optimized for speed with modern performance techniques"
  },
  {
    icon: <Shield className="w-6 h-6 text-red-500" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime"
  },
  {
    icon: <Settings className="w-6 h-6 text-gray-500" />,
    title: "Easy Management",
    description: "User-friendly admin panel for content management"
  }
];

// Testimonials
const testimonials = [
  {
    quote: "Paul delivered our website in just 10 days. The quality exceeded our expectations and the AI features are incredible.",
    author: "Sarah Mitchell",
    role: "CEO, TechStart",
    avatar: "SM",
    rating: 5
  },
  {
    quote: "The process was transparent and efficient. We got exactly what we needed at a fraction of the cost of traditional agencies.",
    author: "David Chen",
    role: "Founder, InnovateNow",
    avatar: "DC",
    rating: 5
  }
];

export default function Website() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showWebsiteModal, setShowWebsiteModal] = useState(false);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Professional Website Development | AI-Powered in 2 Weeks</title>
          <meta name="description" content="Get a professional website built in 2 weeks using AI-powered development. Custom design, SEO optimized, mobile responsive. $10,000 fixed price." />
          <meta name="keywords" content="website development, custom website, AI development, professional web design, SEO optimization, mobile responsive" />
          <meta property="og:title" content="Professional Website Development | AI-Powered in 2 Weeks" />
          <meta property="og:description" content="Custom website built in 2 weeks using AI-powered development. Professional design, SEO optimized, $10,000 fixed price." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Professional Website Development | AI-Powered in 2 Weeks" />
          <meta name="twitter:description" content="Custom website built in 2 weeks using AI-powered development." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/website" />
        </Helmet>

        <HeaderV3Global />

        {/* Enhanced Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-white text-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
            {/* Animated Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-6">Professional Website Development</p>

                  <h1 className="text-6xl md:text-7xl font-thin leading-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                      Your Website,
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Built with AI
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                    Professional website design and development in just 2 weeks. 
                    Custom-built using AI-powered development for exceptional results.
                  </p>

                  {/* Key Benefits */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: <Clock className="w-5 h-5" />, text: "2 weeks delivery" },
                      { icon: <Smartphone className="w-5 h-5" />, text: "Mobile responsive" },
                      { icon: <Search className="w-5 h-5" />, text: "SEO optimized" },
                      { icon: <Shield className="w-5 h-5" />, text: "30 days support" }
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="text-blue-400">{benefit.icon}</div>
                        <span>{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                    <div className="text-center sm:text-left">
                      <div className="text-4xl font-light mb-1">$10,000</div>
                      <div className="text-gray-400">Fixed price, no surprises</div>
                    </div>
                    <button
                      onClick={() => setShowWebsiteModal(true)}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] font-medium text-lg inline-flex items-center gap-2 shadow-lg"
                    >
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>

                {/* Right Column - Visual */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-6" />
                  
                  {/* Main Image */}
                  <div className="relative bg-gray-50 backdrop-blur-sm p-6 rounded-3xl border border-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                      alt="Professional Website Development"
                      className="w-full rounded-2xl shadow-2xl"
                    />
                    
                    {/* Floating Stats */}
                    <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                      <div className="text-2xl font-light text-gray-900">2 weeks</div>
                      <div className="text-sm text-gray-600">Delivery time</div>
                    </div>
                    
                    <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                      <div className="text-2xl font-light text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Success rate</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Website Projects
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  See examples of professional websites built using AI-powered development
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {portfolioExamples.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
                    onClick={() => window.location.href = project.caseStudyUrl}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-light text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
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

        {/* Technology Stack */}
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
                <h2 className="text-4xl font-light mb-6 text-gray-900">
                  Built with Modern Technology
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We use the latest technologies and AI tools to build fast, secure, and scalable websites
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {techStack.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-light text-gray-900 mb-4">{category.category}</h3>
                    <div className="space-y-2">
                      {category.technologies.map((tech, i) => (
                        <div key={i} className="text-gray-600">{tech}</div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-light mb-6 text-gray-900">
                  Our Streamlined Process
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From concept to launch in just 2 weeks with our proven AI-powered methodology
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-light">
                          {step.step}
                        </div>
                        <div className="text-blue-600">{step.icon}</div>
                      </div>
                      
                      <h3 className="text-xl font-light text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="text-sm text-blue-600 font-medium mb-4">Duration: {step.duration}</div>
                      
                      <div className="space-y-2">
                        {step.activities.map((activity, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            <span>{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connection Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Included */}
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
                <h2 className="text-4xl font-light mb-6 text-gray-900">
                  Everything You Need Included
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  No hidden costs or surprise fees. Everything you need for a professional website is included
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {includedFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-light mb-6 text-gray-900">
                  What Clients Say
                </h2>
                <p className="text-xl text-gray-600">
                  Real feedback from businesses who chose our website development service
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-2xl shadow-lg"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-light">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{testimonial.author}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-light mb-6">
                  Ready to Launch Your Website?
                </h2>
                
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join hundreds of businesses who've chosen our AI-powered development 
                  for faster, better, and more affordable websites.
                </p>

                <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-light mb-1">$10,000</div>
                      <div className="text-blue-100 text-sm">Fixed Price</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light mb-1">2 weeks</div>
                      <div className="text-blue-100 text-sm">Delivery Time</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light mb-1">30 days</div>
                      <div className="text-blue-100 text-sm">Free Support</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowWebsiteModal(true)}
                    className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-[1.02] font-medium text-lg inline-flex items-center gap-2"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="/case-studies"
                    className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-gray-50 transition-all font-medium text-lg"
                  >
                    View Portfolio
                  </a>
                </div>

                <div className="mt-8 text-blue-100">
                  <p className="text-sm">✨ Free consultation • No commitment required • 100% satisfaction guarantee</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterV3 />

        <WebsiteModal 
          isOpen={showWebsiteModal}
          onClose={() => setShowWebsiteModal(false)}
        />
      </div>
    </HelmetProvider>
  );
}