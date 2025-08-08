import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
import SubHeader from '../components/SubHeader';
import AnimatedFooter from '../components/AnimatedFooter';

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

        <SubHeader />

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Brain className="w-8 h-8 text-blue-600" />
                    <span className="text-blue-600 font-semibold">Fractional CPO Services</span>
                  </div>
                  
                  <h1 className="text-5xl font-bold mb-6 leading-tight">
                    Strategic Product Leadership
                    <span className="block text-blue-600">Without the Full-Time Cost</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Get experienced C-level product leadership to drive strategy, build teams, 
                    and accelerate growth. Perfect for startups and scale-ups ready to take 
                    their product to the next level.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="mailto:hello@p0stman.com?subject=Fractional CPO Inquiry"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Discuss Your Needs
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#pricing"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-semibold text-lg"
                    >
                      View Pricing
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                    <h3 className="text-2xl font-bold mb-6">Why Fractional?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-6 h-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Cost Effective</h4>
                          <p className="text-gray-600 text-sm">Get C-level expertise at 30-50% of full-time cost</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Immediate Impact</h4>
                          <p className="text-gray-600 text-sm">Start making strategic decisions from day one</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="w-6 h-6 text-purple-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Proven Experience</h4>
                          <p className="text-gray-600 text-sm">20+ years across enterprise and startup environments</p>
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
                <h2 className="text-4xl font-bold mb-6">How I Drive Product Success</h2>
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
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
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
                <h2 className="text-4xl font-bold mb-6">What's Included</h2>
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
                    <span className="font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
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
                <h2 className="text-4xl font-bold mb-6">Flexible Engagement Models</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choose the level of involvement that matches your needs and budget
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative p-8 rounded-2xl border-2 ${
                      tier.popular 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{tier.price}</span>
                        <span className="text-gray-600">{tier.period}</span>
                      </div>
                      <p className="text-gray-600">{tier.description}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-4">{tier.commitment}</p>
                      <motion.a
                        href="mailto:hello@p0stman.com?subject=Fractional CPO Inquiry"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2 ${
                          tier.popular
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                <h2 className="text-4xl font-bold mb-6">Client Success Stories</h2>
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
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AnimatedFooter />
      </div>
    </HelmetProvider>
  );
}