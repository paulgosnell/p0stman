import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Zap, 
  Brain, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Building2,
  Users,
  Award,
  Clock,
  DollarSign,
  Target,
  MessageSquare,
  TrendingUp,
  Shield,
  Code,
  Database,
  Cloud,
  Settings,
  BarChart
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';

const transformationAreas = [
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "AI Integration & Automation",
    description: "Implement AI-powered solutions to automate processes and enhance decision-making capabilities."
  },
  {
    icon: <Cloud className="w-8 h-8 text-green-600" />,
    title: "Cloud Migration & Modernization",
    description: "Migrate legacy systems to modern cloud infrastructure for scalability and efficiency."
  },
  {
    icon: <Code className="w-8 h-8 text-purple-600" />,
    title: "Technology Stack Upgrade",
    description: "Modernize development practices with cutting-edge technologies and frameworks."
  },
  {
    icon: <Users className="w-8 h-8 text-orange-600" />,
    title: "Team & Process Transformation",
    description: "Transform organizational culture and processes to embrace digital-first methodologies."
  }
];

const industries = [
  {
    name: "Banking & Finance",
    icon: <Building2 className="w-6 h-6" />,
    challenges: ["Legacy system modernization", "Regulatory compliance", "Digital customer experience"],
    solutions: ["AI-powered analytics", "Cloud-native architecture", "Mobile-first platforms"]
  },
  {
    name: "Healthcare",
    icon: <Shield className="w-6 h-6" />,
    challenges: ["Data security", "System integration", "Patient experience"],
    solutions: ["HIPAA-compliant platforms", "AI diagnostics", "Telemedicine solutions"]
  },
  {
    name: "Retail & E-commerce",
    icon: <Globe className="w-6 h-6" />,
    challenges: ["Omnichannel experience", "Inventory management", "Customer personalization"],
    solutions: ["AI recommendations", "Real-time analytics", "Unified commerce platforms"]
  },
  {
    name: "Manufacturing",
    icon: <Settings className="w-6 h-6" />,
    challenges: ["Process optimization", "Supply chain visibility", "Predictive maintenance"],
    solutions: ["IoT integration", "AI-powered insights", "Digital twin technology"]
  }
];

const transformationProcess = [
  {
    phase: "01",
    title: "Digital Assessment",
    description: "Comprehensive audit of current systems, processes, and capabilities",
    duration: "2-4 weeks",
    deliverables: ["Current state analysis", "Gap assessment", "Technology audit", "Risk evaluation"]
  },
  {
    phase: "02",
    title: "Strategy & Roadmap",
    description: "Develop transformation strategy and implementation roadmap",
    duration: "3-4 weeks",
    deliverables: ["Digital strategy", "Technology roadmap", "Change management plan", "ROI projections"]
  },
  {
    phase: "03",
    title: "Pilot Implementation",
    description: "Execute pilot projects to validate approach and build momentum",
    duration: "6-12 weeks",
    deliverables: ["Pilot solutions", "Performance metrics", "User feedback", "Lessons learned"]
  },
  {
    phase: "04",
    title: "Full-Scale Rollout",
    description: "Scale successful pilots across the organization",
    duration: "3-12 months",
    deliverables: ["Production systems", "Team training", "Process documentation", "Success metrics"]
  },
  {
    phase: "05",
    title: "Optimization & Support",
    description: "Continuous improvement and ongoing support",
    duration: "Ongoing",
    deliverables: ["Performance monitoring", "System optimization", "Team support", "Future planning"]
  }
];

const successStories = [
  {
    client: "Regional Bank",
    industry: "Financial Services",
    challenge: "Legacy core banking system limiting growth and customer experience",
    transformation: "Complete digital banking platform with AI-powered insights and mobile-first experience",
    results: [
      "60% reduction in processing time",
      "300% increase in digital adoption",
      "40% improvement in customer satisfaction",
      "$2M annual cost savings"
    ],
    timeline: "18 months"
  },
  {
    client: "Healthcare Network",
    industry: "Healthcare",
    challenge: "Fragmented systems and poor patient data visibility",
    transformation: "Unified patient management system with AI-powered diagnostics and telemedicine",
    results: [
      "90% improvement in data accuracy",
      "50% reduction in administrative overhead",
      "200% increase in telemedicine usage",
      "Enhanced patient outcomes"
    ],
    timeline: "12 months"
  },
  {
    client: "Manufacturing Group",
    industry: "Manufacturing",
    challenge: "Inefficient processes and lack of real-time visibility",
    transformation: "IoT-enabled smart factory with predictive maintenance and AI optimization",
    results: [
      "35% increase in operational efficiency",
      "25% reduction in maintenance costs",
      "Real-time production visibility",
      "Predictive quality control"
    ],
    timeline: "24 months"
  }
];

const servicePackages = [
  {
    name: "Digital Assessment",
    price: "$25,000",
    duration: "4-6 weeks",
    description: "Comprehensive digital readiness assessment and strategy development",
    features: [
      "Current state analysis",
      "Technology audit",
      "Digital maturity assessment",
      "Transformation roadmap",
      "ROI projections",
      "Executive presentation"
    ],
    ideal: "Organizations starting their digital journey"
  },
  {
    name: "Pilot Transformation",
    price: "$75,000",
    duration: "3-4 months",
    description: "End-to-end pilot implementation with measurable outcomes",
    features: [
      "Complete assessment package",
      "Pilot project implementation",
      "Team training & support",
      "Performance measurement",
      "Change management",
      "Scale-up planning",
      "3-month post-launch support"
    ],
    ideal: "Mid-size companies ready for transformation",
    popular: true
  },
  {
    name: "Enterprise Transformation",
    price: "Custom",
    duration: "6-18 months",
    description: "Large-scale digital transformation for enterprise organizations",
    features: [
      "Multi-phase transformation",
      "Cross-functional team integration",
      "Executive coaching",
      "Organizational change management",
      "Technology implementation",
      "Performance optimization",
      "Ongoing advisory support"
    ],
    ideal: "Large enterprises with complex needs"
  }
];

export default function DigitalTransformation() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Digital Transformation Consulting | Enterprise Modernization | P0STMAN</title>
          <meta name="description" content="Expert digital transformation consulting for enterprises. AI integration, cloud migration, and organizational change management to drive digital success." />
          <meta name="keywords" content="digital transformation, enterprise modernization, AI integration, cloud migration, organizational change" />
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-8 h-8 text-blue-400" />
                    <span className="text-blue-400 font-semibold">Digital Transformation</span>
                  </div>
                  
                  <h1 className="text-5xl font-thin mb-6 leading-tight">
                    Transform Your Organization
                    <span className="block text-blue-400">For the Digital Future</span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Navigate digital transformation with confidence. From AI integration to 
                    cloud modernization, I help enterprises embrace technology that drives 
                    real business value and competitive advantage.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="mailto:hello@p0stman.com?subject=Digital Transformation Inquiry"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg inline-flex items-center gap-2"
                    >
                      <Rocket className="w-5 h-5" />
                      Start Transformation
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#success-stories"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 border border-gray-400 text-white rounded-lg hover:bg-gray-50 transition-all font-semibold text-lg"
                    >
                      View Success Stories
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
                    <h3 className="text-2xl font-light mb-6">Transformation Impact</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-6 h-6 text-green-400 mt-1" />
                        <div>
                          <h4 className="font-light">Measurable ROI</h4>
                          <p className="text-gray-300 text-sm">Average 300% ROI within 18 months</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-6 h-6 text-yellow-400 mt-1" />
                        <div>
                          <h4 className="font-light">Accelerated Innovation</h4>
                          <p className="text-gray-300 text-sm">10x faster product development cycles</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-6 h-6 text-purple-400 mt-1" />
                        <div>
                          <h4 className="font-light">Team Empowerment</h4>
                          <p className="text-gray-300 text-sm">Enhanced productivity and job satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Areas */}
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
                <h2 className="text-4xl font-light mb-6">Transformation Focus Areas</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive digital transformation across technology, processes, and people
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {transformationAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 rounded-xl hover:shadow-lg transition-all"
                  >
                    <div className="mb-4 flex justify-center">{area.icon}</div>
                    <h3 className="text-xl font-light mb-3">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
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
                <h2 className="text-4xl font-light mb-6">Industry-Specific Solutions</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Tailored transformation approaches for different industry challenges
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      {industry.icon}
                      <h3 className="text-2xl font-light">{industry.name}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-light text-red-600 mb-3">Common Challenges:</h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-light text-green-600 mb-3">Our Solutions:</h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Process */}
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
                <h2 className="text-4xl font-light mb-6">Transformation Process</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Structured approach to ensure successful digital transformation
                </p>
              </motion.div>

              <div className="space-y-8">
                {transformationProcess.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-200"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {phase.phase}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <h3 className="text-2xl font-light">{phase.title}</h3>
                          <div className="flex items-center gap-2 text-blue-600">
                            <Clock className="w-4 h-4" />
                            <span className="font-light">{phase.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{phase.description}</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                          {phase.deliverables.map((deliverable, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-gray-700">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section id="success-stories" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-light mb-6">Transformation Success Stories</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Real results from digital transformation initiatives across industries
                </p>
              </motion.div>

              <div className="space-y-8">
                {successStories.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-sm"
                  >
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
                        <div className="mb-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {story.industry}
                          </span>
                        </div>
                        <h3 className="text-2xl font-light mb-4">{story.client}</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-light text-red-600 mb-2">Challenge:</h4>
                            <p className="text-gray-600 text-sm">{story.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-light text-blue-600 mb-2">Transformation:</h4>
                            <p className="text-gray-600 text-sm">{story.transformation}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-purple-600">
                            <Clock className="w-4 h-4" />
                            <span className="font-light">{story.timeline}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <h4 className="font-light text-green-600 mb-4">Results Achieved:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {story.results.map((result, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                              <BarChart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 font-light">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages */}
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
                <h2 className="text-4xl font-light mb-6">Transformation Packages</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Flexible engagement models to match your transformation needs
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {servicePackages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative bg-white p-8 rounded-2xl border-2 ${
                      pkg.popular 
                        ? 'border-blue-500 shadow-lg' 
                        : 'border-gray-200'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-light mb-2">{pkg.name}</h3>
                      <div className="mb-2">
                        <span className="text-4xl font-light">{pkg.price}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{pkg.description}</p>
                      <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-4">{pkg.ideal}</p>
                      <motion.a
                        href="mailto:hello@p0stman.com?subject=Digital Transformation Inquiry"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center justify-center gap-2 ${
                          pkg.popular
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

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}