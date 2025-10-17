import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import {
  CheckCircle,
  DollarSign,
  Users,
  Zap,
  ArrowRight,
  ExternalLink,
  Smartphone,
  Globe,
  FileText,
  Palette,
  BarChart3,
  Target,
  TrendingUp
} from 'lucide-react';
import FooterV3 from '../components/v3/FooterV3';
import ProjectConfigurator from '../components/ProjectConfigurator';

const packageComponents = [
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: "Live MVP Mobile App",
    description: "Mobile web app with core functionality, pre App Store submission.",
    features: [
      "User authentication & onboarding",
      "Core feature set implementation", 
      "Analytics integration",
      "Push notifications ready",
      "Backend and database"
    ]
  },
  {
    icon: <Globe className="w-8 h-8 text-green-600" />,
    title: "Landing Page + Analytics",
    description: "Professional website that captures leads and provides real user data for investor meetings.",
    features: [
      "Conversion-optimized design",
      "Email capture integration",
      "Real-time analytics dashboard",
      "A/B testing ready",
      "SEO optimized"
    ]
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
    title: "Investor Pitch Deck",
    description: "Professional presentation connected to your live data - no more static mockups.",
    features: [
      "Data-driven slides",
      "Live user metrics integration",
      "Professional design system",
      "Multiple formats (PDF, Keynote)",
      "Investor-ready structure"
    ]
  },
  {
    icon: <FileText className="w-8 h-8 text-orange-600" />,
    title: "Investment Memo",
    description: "Concise 1-page summary perfect for quick investor outreach and follow-ups.",
    features: [
      "Executive summary format",
      "Key metrics highlighted",
      "Traction data included",
      "Contact information",
      "Professional layout"
    ]
  },
  {
    icon: <Palette className="w-8 h-8 text-pink-600" />,
    title: "Unified Brand System",
    description: "Consistent branding across all assets so everything looks like it came from a funded startup.",
    features: [
      "Logo & brand guidelines",
      "Color palette & typography",
      "Consistent visual language",
      "Brand assets library",
      "Style guide documentation"
    ]
  }
];

const comparison = [
  { aspect: "Team", traditional: "5-10 person agency team", postman: "One expert + AI acceleration" },
  { aspect: "Timeline", traditional: "6+ months", postman: "30-day delivery" },
  { aspect: "Cost", traditional: "$80-150k total cost", postman: "$35-50k complete package" },
  { aspect: "Communication", traditional: "Multiple handoffs & delays", postman: "Direct communication" },
  { aspect: "Branding", traditional: "Inconsistent branding", postman: "Unified brand system" },
  { aspect: "Coordination", traditional: "Separate contracts & timelines", postman: "Everything coordinated & connected" }
];

const problems = [
  {
    icon: <DollarSign className="w-8 h-8 text-red-500" />,
    title: "Your Runway is Burning",
    description: "Agencies quote 6+ months while funding clock ticks"
  },
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: "Juggling Multiple Vendors", 
    description: "Different timelines, styles, quality levels"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
    title: "No Real Data for Investors",
    description: "Wireframes don't close rounds"
  }
];

const caseStudies = [
  {
    id: 'harmony',
    title: 'Harmony',
    company: 'AI Music Platform',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/harmony1.png',
    url: '/case-study/harmony'
  },
  {
    id: 'bfit-web3',
    title: 'BFIT Web3',
    company: 'Blockchain Fitness Platform',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/bfit1.png',
    url: '/case-study/bfit-web3'
  },
  {
    id: 'clinic-book',
    title: 'Clinic Book',
    company: 'Healthcare Booking',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/clinicbook1.png',
    url: '/case-study/clinic-book'
  },
  {
    id: 'chilled-sites',
    title: 'Chilled Sites',
    company: 'AI Website Builder',
    image: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites-homepage.png',
    url: '/case-study/chilled-sites'
  }
];

export default function FounderLaunchPackage() {
  const [showProjectConfigurator, setShowProjectConfigurator] = useState(false);

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-white text-gray-900">
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
                    <Target className="w-6 h-6" />
                    <span className="font-light">Founder Launch Package</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl font-thin leading-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      Everything You Need to Launch, Raise & Scale in 30 Days
                    </span>
                  </h1>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Stop cobbling together 5 different freelancers. Get your complete founder package from one expert.
                </p>

                {/* Package Items Grid */}
                <div className="grid grid-cols-1 gap-3 max-w-2xl">
                  <div className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Live MVP - Mobile App or Website or both</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Landing Page - Lead capture + analytics</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Pitch Deck - Professional + data-connected</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Investment Memo - 1-page summary for quick sends</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Unified Branding - Everything looks funded already</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowProjectConfigurator(true)}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium text-lg inline-flex items-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    Get A Quote
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <a
                    href="#case-studies"
                    className="px-8 py-4 border border-gray-600 text-white rounded-lg hover:bg-gray-50 transition-all font-medium text-lg"
                  >
                    Recent Launches
                  </a>
                </div>
              </motion.div>

              {/* Right Column - Visual Showcase */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Main Stats Card */}
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-gray-200 rounded-3xl p-8">
                  <div className="text-center space-y-6">
                    <div className="text-6xl font-thin text-white">30</div>
                    <div className="text-xl text-gray-300">Days to Launch</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-3xl font-thin text-white">$35-50k</div>
                        <div className="text-gray-400 text-xs">vs $80-150k traditional</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-3xl font-thin text-white">1 Expert</div>
                        <div className="text-gray-400 text-xs">vs 5-10 person team</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Package Preview Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <Smartphone className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="text-sm text-white font-medium">Live MVP</div>
                    <div className="text-xs text-gray-400">Mobile/Web App</div>
                  </div>
                  <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <Globe className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-sm text-white font-medium">Landing Page</div>
                    <div className="text-xs text-gray-400">+ Analytics</div>
                  </div>
                  <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <BarChart3 className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-sm text-white font-medium">Pitch Deck</div>
                    <div className="text-xs text-gray-400">Data-driven</div>
                  </div>
                  <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <Palette className="w-8 h-8 text-pink-400" />
                    </div>
                    <div className="text-sm text-white font-medium">Branding</div>
                    <div className="text-xs text-gray-400">Unified system</div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-gray-200 rounded-xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-thin text-white">20+</div>
                      <div className="text-xs text-gray-400">Apps Shipped</div>
                    </div>
                    <div>
                      <div className="text-2xl font-thin text-white">80%</div>
                      <div className="text-xs text-gray-400">Time Saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-thin text-white">100%</div>
                      <div className="text-xs text-gray-400">Success Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-thin mb-6 text-gray-900">The Founder's Dilemma</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-red-100"
                >
                  <div className="mb-4 flex justify-center">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-gray-900">{problem.title}</h3>
                  <p className="text-gray-700 font-light">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Comparison */}
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
              <h2 className="text-4xl font-thin mb-6 text-gray-900">Traditional Way vs. P0STMAN Way</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-gray-900 font-medium">Aspect</th>
                    <th className="px-6 py-4 text-left text-red-600 font-medium">Traditional Approach</th>
                    <th className="px-6 py-4 text-left text-green-600 font-medium">P0STMAN Package</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="px-6 py-4 font-medium text-gray-900">{item.aspect}</td>
                      <td className="px-6 py-4 text-gray-700">{item.traditional}</td>
                      <td className="px-6 py-4 text-gray-700 font-medium">{item.postman}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Details Section */}
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
              <h2 className="text-4xl font-thin mb-6 text-gray-900">What's Included in Your Launch Package</h2>
            </motion.div>

            <div className="grid gap-8">
              {packageComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-1 p-8 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
                      <div className="space-y-4 text-center lg:text-left w-full">
                        <div className="flex justify-center lg:justify-start">
                          {component.icon}
                        </div>
                        <h3 className="text-2xl font-light text-gray-900">{component.title}</h3>
                        <p className="text-gray-700 font-light">{component.description}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-8">
                      <div className="space-y-4">
                        {component.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 font-light">{feature}</span>
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

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-thin mb-6 text-gray-900">Recent Founder Success Stories</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer bg-white"
                  onClick={() => window.location.href = study.url}
                >
                  <div className="relative h-32 p-2">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-100 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="p-3">
                    <h5 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">{study.title}</h5>
                    <p className="text-gray-600 text-xs font-light">{study.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-thin">Ready to Launch in 30 Days?</h2>

              {/* Pricing Highlight */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-red-400 line-through text-xl mb-2">Traditional: $80-150k + 6 months</div>
                    <div className="text-3xl font-light text-white">
                      <span className="text-green-400">P0STMAN Package: $35-50k in 30 days</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Free 1-hour discovery call</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Fixed timeline & pricing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Weekly progress updates</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowProjectConfigurator(true)}
                className="px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all font-medium text-xl inline-flex items-center gap-3"
              >
                <Target className="w-6 h-6" />
                Get My Complete Launch Package Quote
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedFooter onOpenProjectConfigurator={() => setShowProjectConfigurator(true)} />

      {showProjectConfigurator && (
        <ProjectConfigurator onClose={() => setShowProjectConfigurator(false)} />
      )}
    </div>
  );
}