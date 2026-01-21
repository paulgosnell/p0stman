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
    icon: <Smartphone className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
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
    icon: <Globe className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
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
    icon: <BarChart3 className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
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
    icon: <FileText className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
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
    icon: <Palette className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
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
    icon: <DollarSign className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
    title: "Your Runway is Burning",
    description: "Agencies quote 6+ months while funding clock ticks"
  },
  {
    icon: <Users className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
    title: "Juggling Multiple Vendors",
    description: "Different timelines, styles, quality levels"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
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
      <section className="min-h-screen relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-bg.png')] bg-cover bg-center opacity-20" />
        </div>
        <Header />
        <div className="container mx-auto px-8 max-w-[90rem] pt-24 md:pt-40 pb-16 md:pb-20 relative z-10">
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
                  <div className="flex items-center gap-3">
                    <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">Founder Launch Package</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] tracking-tight text-white">
                    Everything You Need to Launch, Raise & Scale in 30 Days
                  </h1>
                </div>

                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-light">
                  Stop cobbling together 5 different freelancers. Get your complete founder package from one expert.
                </p>

                {/* Package Items Grid */}
                <div className="grid grid-cols-1 gap-3 max-w-2xl">
                  <div className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-light">Live MVP - Mobile App or Website or both</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-light">Landing Page - Lead capture + analytics</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-light">Pitch Deck - Professional + data-connected</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-light">Investment Memo - 1-page summary for quick sends</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-light">Unified Branding - Everything looks funded already</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowProjectConfigurator(true)}
                    className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors font-light text-lg inline-flex items-center gap-2"
                  >
                    <Zap className="w-5 h-5" strokeWidth={1.5} />
                    Get A Quote
                    <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                  </motion.button>
                  <a
                    href="#case-studies"
                    className="px-8 py-4 border border-gray-600 text-white hover:bg-gray-900 transition-colors font-light text-lg"
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
                <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
                  <div className="text-center space-y-6">
                    <div className="text-6xl font-light text-white">30</div>
                    <div className="text-xl text-gray-400 font-light">Days to Launch</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-black rounded-lg p-4">
                        <div className="text-3xl font-light text-white">$35-50k</div>
                        <div className="text-gray-400 text-xs font-light">vs $80-150k traditional</div>
                      </div>
                      <div className="bg-black rounded-lg p-4">
                        <div className="text-3xl font-light text-white">1 Expert</div>
                        <div className="text-gray-400 text-xs font-light">vs 5-10 person team</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Package Preview Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <Smartphone className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <div className="text-sm text-white font-light">Live MVP</div>
                    <div className="text-xs text-gray-400">Mobile/Web App</div>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <Globe className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <div className="text-sm text-white font-light">Landing Page</div>
                    <div className="text-xs text-gray-400">+ Analytics</div>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <BarChart3 className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <div className="text-sm text-white font-light">Pitch Deck</div>
                    <div className="text-xs text-gray-400">Data-driven</div>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <Palette className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <div className="text-sm text-white font-light">Branding</div>
                    <div className="text-xs text-gray-400">Unified system</div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-light text-white">20+</div>
                      <div className="text-xs text-gray-400">Apps Shipped</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light text-white">80%</div>
                      <div className="text-xs text-gray-400">Time Saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light text-white">100%</div>
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
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-8 max-w-[90rem]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  The Challenge
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">The Founder's Dilemma</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border-t border-gray-200"
                >
                  <div className="mb-4 flex justify-center">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-light mb-3 text-gray-900">{problem.title}</h3>
                  <p className="text-gray-600 font-light">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Comparison */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-8 max-w-[90rem]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  The Solution
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">Traditional Way vs. POSTMAN Way</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full bg-white rounded-xl overflow-hidden border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-gray-900 font-light">Aspect</th>
                    <th className="px-6 py-4 text-left text-gray-900 font-light">Traditional Approach</th>
                    <th className="px-6 py-4 text-left text-gray-900 font-light">POSTMAN Package</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="px-6 py-4 font-light text-gray-900">{item.aspect}</td>
                      <td className="px-6 py-4 text-gray-600 font-light">{item.traditional}</td>
                      <td className="px-6 py-4 text-gray-900 font-light">{item.postman}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-8 max-w-[90rem]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  What's Included
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">Your Launch Package</h2>
            </motion.div>

            <div className="grid gap-8">
              {packageComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-t border-gray-200 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-1 p-8 bg-gray-50 flex items-center">
                      <div className="space-y-4 text-center lg:text-left w-full">
                        <div className="flex justify-center lg:justify-start">
                          {component.icon}
                        </div>
                        <h3 className="text-2xl font-light text-gray-900">{component.title}</h3>
                        <p className="text-gray-600 font-light">{component.description}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-8">
                      <div className="space-y-4">
                        {component.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                            <span className="text-gray-600 font-light">{feature}</span>
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
      <section id="case-studies" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-8 max-w-[90rem]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Success Stories
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">Recent Founder Launches</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden bg-white border border-gray-200 hover:shadow-sm transition-all cursor-pointer"
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
                      <div className="w-8 h-8 bg-white backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-black" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="p-3">
                    <h5 className="font-light text-gray-900 text-sm mb-1 group-hover:text-gray-600 transition-colors">{study.title}</h5>
                    <p className="text-gray-600 text-xs font-light">{study.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-8 max-w-[90rem]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Get Started
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">Ready to Launch in 30 Days?</h2>

              {/* Pricing Highlight */}
              <div className="bg-white border-t border-gray-200 p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-gray-400 line-through text-xl mb-2 font-light">Traditional: $80-150k + 6 months</div>
                    <div className="text-3xl font-light text-gray-900">
                      POSTMAN Package: $35-50k in 30 days
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                      <span className="font-light text-gray-600">Free 1-hour discovery call</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                      <span className="font-light text-gray-600">Fixed timeline & pricing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                      <span className="font-light text-gray-600">Weekly progress updates</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowProjectConfigurator(true)}
                className="px-12 py-6 bg-black text-white hover:bg-gray-800 transition-colors font-light text-xl inline-flex items-center gap-3"
              >
                <Target className="w-6 h-6" strokeWidth={1.5} />
                Get My Complete Launch Package Quote
                <ArrowRight className="w-6 h-6" strokeWidth={1.5} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterV3 />

      {showProjectConfigurator && (
        <ProjectConfigurator onClose={() => setShowProjectConfigurator(false)} />
      )}
    </div>
  );
}
