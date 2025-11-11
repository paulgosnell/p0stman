import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Rocket,
  Globe,
  Award,
  Clock,
  DollarSign,
  Building2,
  Zap,
  MessageSquare
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';

const benefits = [
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: "Strategic Product Vision",
    description: "Define and execute product strategy that aligns with business objectives and market opportunities."
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Team Leadership & Scaling",
    description: "Build, mentor, and scale high-performing product teams with proven methodologies."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
    title: "Growth & Optimization",
    description: "Drive user acquisition, retention, and revenue growth through data-driven product decisions."
  },
  {
    icon: <Rocket className="w-8 h-8 text-orange-600" />,
    title: "Go-to-Market Excellence",
    description: "Launch products successfully with comprehensive GTM strategies and execution."
  }
];

const services = [
  "Product Strategy & Roadmapping",
  "Team Building & Leadership",
  "Stakeholder Management",
  "User Research & Validation",
  "Competitive Analysis",
  "Pricing & Positioning",
  "Go-to-Market Planning",
  "Performance Metrics & KPIs",
  "Process Optimization",
  "Technology Stack Decisions"
];

const testimonials = [
  {
    quote: "Paul's strategic vision and hands-on leadership transformed our product development. We went from struggling with direction to having a clear roadmap and motivated team.",
    author: "Sarah Chen",
    role: "CEO",
    company: "HealthTech Startup"
  },
  {
    quote: "Having Paul as our Fractional CPO was game-changing. His experience with enterprise clients and AI integration helped us scale from 10K to 100K users.",
    author: "Ahmed Al-Rashid",
    role: "Founder",
    company: "SaaS Platform"
  }
];

const pricingTiers = [
  {
    name: "Strategic Advisory",
    price: "$5,000",
    period: "/month",
    description: "Perfect for early-stage startups needing strategic guidance",
    features: [
      "Monthly strategy sessions",
      "Product roadmap development",
      "Team coaching & mentoring",
      "Stakeholder alignment",
      "Email & Slack support"
    ],
    commitment: "3-month minimum"
  },
  {
    name: "Hands-On Leadership",
    price: "$12,000",
    period: "/month",
    description: "Ideal for scale-ups requiring active product leadership",
    features: [
      "2-3 days per week involvement",
      "Direct team management",
      "Product development oversight",
      "Go-to-market execution",
      "Board & investor reporting",
      "Hiring & team building"
    ],
    commitment: "6-month minimum",
    popular: true
  },
  {
    name: "Transformation Program",
    price: "Custom",
    period: "pricing",
    description: "Enterprise-level product transformation and optimization",
    features: [
      "Full product audit & assessment",
      "Organizational restructuring",
      "Process & system optimization",
      "Team training & development",
      "Technology stack evaluation",
      "Long-term strategic planning"
    ],
    commitment: "12-month engagement"
  }
];

export default function FractionalCPO() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Fractional CPO Services | Strategic Product Leadership | P0STMAN</title>
          <meta name="description" content="Experienced Fractional Chief Product Officer providing strategic product leadership, team building, and growth optimization for startups and scale-ups." />
          <meta name="keywords" content="fractional CPO, chief product officer, product strategy, product leadership, startup advisor" />
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden bg-white text-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            {/* Animated Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-4 pt-24 md:pt-40 pb-16 md:pb-20 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left Column - Hero Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <p className="text-sm text-gray-400 uppercase tracking-wider">Fractional CPO Services</p>

                    <h1 className="text-5xl md:text-6xl font-thin leading-tight">
                      <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Strategic Product Leadership
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Without the Full-Time Cost
                      </span>
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                      Get experienced C-level product leadership to drive strategy, build teams,
                      and accelerate growth. Perfect for startups and scale-ups ready to take
                      their product to the next level.
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="text-2xl font-light text-gray-900 mb-1">50-70%</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="text-2xl font-light text-gray-900 mb-1">Day 1</div>
                      <div className="text-sm text-gray-600">Impact</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="text-2xl font-light text-gray-900 mb-1">20+ yrs</div>
                      <div className="text-sm text-gray-600">Experience</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="mailto:hello@p0stman.com?subject=Fractional CPO Consultation Request"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium text-lg inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Book Discovery Call
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#pricing"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 border border-gray-300 text-gray-900 rounded-xl hover:bg-gray-50 transition-all font-medium text-lg"
                    >
                      View Pricing
                    </motion.a>
                  </div>
                </motion.div>

                {/* Right Column - Value Proposition */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl blur-xl animate-pulse" />

                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-light text-gray-900 mb-3">Why Choose Fractional?</h3>
                        <p className="text-gray-600">Get enterprise-level product leadership without the enterprise cost</p>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-green-600/20 rounded-xl">
                            <DollarSign className="w-6 h-6 text-green-400" />
                          </div>
                          <div>
                            <h4 className="font-light text-gray-900 mb-2">Cost Effective</h4>
                            <p className="text-gray-600 text-sm">Get C-level expertise at 50-70% less than full-time hire</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-600/20 rounded-xl">
                            <Clock className="w-6 h-6 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-light text-gray-900 mb-2">Immediate Impact</h4>
                            <p className="text-gray-600 text-sm">Start making strategic decisions from day one</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-purple-600/20 rounded-xl">
                            <Award className="w-6 h-6 text-purple-400" />
                          </div>
                          <div>
                            <h4 className="font-light text-gray-900 mb-2">Proven Experience</h4>
                            <p className="text-gray-600 text-sm">20+ years across enterprise and startup environments</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-orange-600/20 rounded-xl">
                            <Target className="w-6 h-6 text-orange-400" />
                          </div>
                          <div>
                            <h4 className="font-light text-gray-900 mb-2">Flexible Engagement</h4>
                            <p className="text-gray-600 text-sm">Tailored to your needs, timeline, and budget</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-3">Trusted by enterprise clients including:</p>
                          <div className="flex justify-center items-center gap-4 opacity-60">
                            <span className="text-xs text-gray-500">FAB</span>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-xs text-gray-500">IBM</span>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-xs text-gray-500">Al Arabiya</span>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-xs text-gray-500">Abu Dhabi Gov</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                <h2 className="text-4xl font-thin mb-6">How I Drive Product Success</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Combining strategic vision with hands-on execution to accelerate your product growth
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 rounded-xl hover:shadow-lg transition-all"
                  >
                    <div className="mb-4 flex justify-center">{benefit.icon}</div>
                    <h3 className="text-xl font-light mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
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
                <h2 className="text-4xl font-thin mb-6">Enterprise Success Stories</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                  Real results from fractional product leadership across banking, government, and media sectors
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* FAB Case Study */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => window.location.href = '/case-study/fab-bank'}
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800">
                    <img
                      src="https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png"
                      alt="First Abu Dhabi Bank transformation"
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/First_Abu_Dhabi_Bank_Logo.svg/500px-First_Abu_Dhabi_Bank_Logo.svg.png"
                        alt="FAB Logo"
                        className="h-16 filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-light mb-2">Enterprise Digital Transformation</h3>
                    <p className="text-blue-600 font-medium mb-3">First Abu Dhabi Bank</p>
                    <p className="text-gray-600 mb-4">
                      Led 18-month transformation scaling from 1 pilot project to 40+ person team across multiple departments.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-light text-blue-600">1→40</div>
                        <div className="text-xs text-gray-500">Team Scale</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-light text-blue-600">60%</div>
                        <div className="text-xs text-gray-500">Efficiency Gain</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Banking</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Enterprise</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">18 months</span>
                    </div>
                  </div>
                </motion.div>

                {/* Abu Dhabi DoH Case Study */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => window.location.href = '/case-study/doh-health'}
                >
                  <div className="relative h-48 bg-gradient-to-br from-green-600 to-green-800">
                    <img
                      src="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png"
                      alt="Abu Dhabi Department of Health app"
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh-logo.png"
                        alt="DoH Logo"
                        className="h-16 filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-light mb-2">My Health Coach</h3>
                    <p className="text-green-600 font-medium mb-3">Department of Health Abu Dhabi</p>
                    <p className="text-gray-600 mb-4">
                      Partnered with IBM to build personalized wellness app for Abu Dhabi residents with fitness tracking integration.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-light text-green-600">IBM</div>
                        <div className="text-xs text-gray-500">Partnership</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-light text-green-600">Gov</div>
                        <div className="text-xs text-gray-500">Client Type</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Healthcare</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Government</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Mobile App</span>
                    </div>
                  </div>
                </motion.div>

                {/* Al Arabiya Case Study */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => window.location.href = '/case-study/al-arabiya'}
                >
                  <div className="relative h-48 bg-gradient-to-br from-red-600 to-red-800">
                    <img
                      src="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png"
                      alt="Al Arabiya news platform"
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Al-Arabiya_new_logo.svg/500px-Al-Arabiya_new_logo.svg.png"
                        alt="Al Arabiya Logo"
                        className="h-16 filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-light mb-2">News Platform Redesign</h3>
                    <p className="text-red-600 font-medium mb-3">Al Arabiya</p>
                    <p className="text-gray-600 mb-4">
                      Led global team of 20+ to modernize leading news platform during COVID-19 with multi-platform experience.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-light text-red-600">20+</div>
                        <div className="text-xs text-gray-500">Global Team</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-light text-red-600">40%</div>
                        <div className="text-xs text-gray-500">Speed Boost</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Media</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Global Team</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">8 months</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <p className="text-gray-600 mb-6">
                  Ready to achieve similar results for your organization?
                </p>
                <motion.a
                  href="mailto:hello@p0stman.com?subject=Fractional CPO Case Study Discussion"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium text-lg inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Discuss Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
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
                <h2 className="text-4xl font-thin mb-6">What's Included</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive product leadership across all aspects of your business
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="font-light">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-thin mb-6">My Fractional CPO Process</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A proven methodology that combines strategic thinking with hands-on execution to drive product success
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Discovery & Strategy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white shadow-lg">
                      <Target className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-gray-900">Discovery & Strategy</h3>
                      <p className="text-gray-600 font-medium">Week 1-2</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Deep dive into your business, market, and product challenges to develop a comprehensive strategic foundation.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Business & market analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Product audit & assessment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Team & process evaluation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Strategic roadmap creation</span>
                    </div>
                  </div>
                </motion.div>

                {/* Execution & Leadership */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white shadow-lg">
                      <Users className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-gray-900">Execution & Leadership</h3>
                      <p className="text-gray-600 font-medium">Ongoing</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Hands-on product leadership, team building, and strategic execution to drive measurable results.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Team leadership & mentoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Product development oversight</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Stakeholder management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Performance optimization</span>
                    </div>
                  </div>
                </motion.div>

                {/* Growth & Optimization */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl text-white shadow-lg">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-gray-900">Growth & Optimization</h3>
                      <p className="text-gray-600 font-medium">Month 3+</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Continuous optimization, scaling strategies, and sustainable growth initiatives for long-term success.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Growth strategy execution</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Team scaling & hiring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Process optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Knowledge transfer</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-light text-gray-900 mb-4">Why This Process Works</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-thin text-blue-600 mb-2">80%</div>
                      <div className="text-sm text-gray-600">Faster Decision Making</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-thin text-purple-600 mb-2">3x</div>
                      <div className="text-sm text-gray-600">Team Productivity Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-thin text-green-600 mb-2">60%</div>
                      <div className="text-sm text-gray-600">Reduction in Time-to-Market</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investment & Engagement Section */}
        <section id="pricing" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-thin mb-6">Investment & Engagement Options</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Every engagement is tailored to your specific needs, timeline, and objectives.
                  These are guide investments to help you understand the scope - let's discuss your unique situation.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Monthly Retainer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-600 rounded-2xl">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-gray-900">Monthly Retainer</h3>
                      <p className="text-blue-600 font-medium">Ongoing Strategic Partnership</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-light text-gray-900 mb-2">
                      $8,000 - $15,000
                      <span className="text-lg font-light text-gray-600">/month</span>
                    </div>
                    <p className="text-gray-600">
                      Continuous product leadership and strategic guidance tailored to your growth stage and needs.
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">4-6 days per month dedicated time</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Strategic planning & roadmap development</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Team leadership & mentoring</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Stakeholder management & reporting</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Unlimited strategic consultation</span>
                    </div>
                  </div>

                  <div className="bg-white/60 rounded-xl p-4 text-sm text-gray-600">
                    <strong>Best for:</strong> Scale-ups and established companies needing ongoing product leadership and strategic direction.
                  </div>
                </motion.div>

                {/* Project Sprints */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-600 rounded-2xl">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-gray-900">Strategic Sprints</h3>
                      <p className="text-purple-600 font-medium">Focused Project Engagements</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-light text-gray-900 mb-2">
                      $15,000 - $35,000
                      <span className="text-lg font-light text-gray-600">/project</span>
                    </div>
                    <p className="text-gray-600">
                      Intensive 2-8 week engagements focused on specific strategic initiatives or transformations.
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Product strategy & roadmap creation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Go-to-market strategy development</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Team structure & process optimization</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Product-market fit validation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Comprehensive deliverables & handoff</span>
                    </div>
                  </div>

                  <div className="bg-white/60 rounded-xl p-4 text-sm text-gray-600">
                    <strong>Best for:</strong> Startups and companies needing focused strategic work on specific initiatives or transformations.
                  </div>
                </motion.div>
              </div>

              {/* Consultation Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 text-center"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <MessageSquare className="w-8 h-8 text-gray-600" />
                    <h3 className="text-3xl font-light text-gray-900">Tailored to Your Needs</h3>
                  </div>

                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Every organization is unique. These investment ranges provide a starting point, but the real value
                    comes from understanding your specific challenges, goals, and constraints. Let's have a conversation
                    about what success looks like for you.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <Target className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">Discovery Call</h4>
                      <p className="text-sm text-gray-600">Free 30-minute consultation to understand your needs</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <Brain className="w-8 h-8 text-purple-600" />
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">Custom Proposal</h4>
                      <p className="text-sm text-gray-600">Tailored engagement plan with clear scope and outcomes</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">Flexible Terms</h4>
                      <p className="text-sm text-gray-600">Engagement structure that works for your timeline and budget</p>
                    </div>
                  </div>

                  <Link to="/contact">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all font-medium text-lg inline-flex items-center gap-3"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Book Discovery Call
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>

                  <p className="text-sm text-gray-500 mt-4">
                    ✨ No commitment required • Completely confidential • 20+ years of experience
                  </p>
                </div>
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
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-thin mb-6">Client Success Stories</h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-sm"
                  >
                    <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
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