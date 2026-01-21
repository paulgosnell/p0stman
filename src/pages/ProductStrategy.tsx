import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Target,
  Brain,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Globe,
  Award,
  Clock,
  DollarSign,
  Building2,
  Zap,
  MessageSquare,
  BarChart,
  Map,
  Compass
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';

const strategicAreas = [
  {
    icon: <Target className="w-8 h-8 text-gray-400" />,
    title: "Product Vision & Roadmapping",
    description: "Define clear product vision and create actionable roadmaps that align with business objectives."
  },
  {
    icon: <Users className="w-8 h-8 text-gray-400" />,
    title: "User Research & Validation",
    description: "Deep user insights and market validation to ensure product-market fit and user satisfaction."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-gray-400" />,
    title: "Growth Strategy & Metrics",
    description: "Data-driven growth strategies with clear KPIs and performance measurement frameworks."
  },
  {
    icon: <Compass className="w-8 h-8 text-gray-400" />,
    title: "Competitive Positioning",
    description: "Strategic market positioning and competitive analysis to differentiate your product."
  }
];

const deliverables = [
  "Product Strategy Document",
  "User Research & Personas",
  "Competitive Analysis Report",
  "Product Roadmap (6-18 months)",
  "Go-to-Market Strategy",
  "Pricing & Positioning Framework",
  "Success Metrics & KPIs",
  "Feature Prioritization Matrix",
  "Stakeholder Alignment Plan",
  "Risk Assessment & Mitigation"
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "Deep dive into your business, users, and market landscape",
    duration: "1-2 weeks",
    activities: ["Stakeholder interviews", "User research", "Market analysis", "Competitive audit"]
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Craft comprehensive product strategy and vision",
    duration: "2-3 weeks",
    activities: ["Vision definition", "Roadmap creation", "Positioning strategy", "Success metrics"]
  },
  {
    step: "03",
    title: "Validation & Refinement",
    description: "Test and validate strategic assumptions",
    duration: "1-2 weeks",
    activities: ["User validation", "Stakeholder feedback", "Strategy refinement", "Risk assessment"]
  },
  {
    step: "04",
    title: "Implementation Planning",
    description: "Create actionable implementation roadmap",
    duration: "1 week",
    activities: ["Resource planning", "Timeline creation", "Team alignment", "Success tracking"]
  }
];

const caseStudies = [
  {
    title: "HealthTech Startup Transformation",
    challenge: "Struggling with product direction and user adoption",
    solution: "Comprehensive product strategy with user-centered approach",
    results: ["300% increase in user engagement", "Clear 18-month roadmap", "Successful Series A funding"],
    industry: "HealthTech"
  },
  {
    title: "Enterprise SaaS Repositioning",
    challenge: "Losing market share to competitors",
    solution: "Strategic repositioning and feature prioritization",
    results: ["40% increase in market share", "Improved customer retention", "New revenue streams"],
    industry: "Enterprise SaaS"
  },
  {
    title: "Consumer App Growth Strategy",
    challenge: "Plateaued growth and unclear next steps",
    solution: "Data-driven growth strategy and product optimization",
    results: ["2x user acquisition", "50% improvement in retention", "International expansion"],
    industry: "Consumer Tech"
  }
];

const pricingOptions = [
  {
    name: "Strategy Sprint",
    price: "$15,000",
    duration: "2-3 weeks",
    description: "Rapid strategic assessment and roadmap creation",
    features: [
      "Product strategy document",
      "6-month roadmap",
      "Competitive analysis",
      "Key metrics framework",
      "2 strategy sessions"
    ],
    ideal: "Early-stage startups needing quick direction"
  },
  {
    name: "Comprehensive Strategy",
    price: "$35,000",
    duration: "4-6 weeks",
    description: "Full strategic transformation with detailed implementation",
    features: [
      "Complete strategy package",
      "18-month roadmap",
      "User research & personas",
      "Go-to-market strategy",
      "Pricing & positioning",
      "Team workshops",
      "3-month follow-up support"
    ],
    ideal: "Scale-ups ready for next growth phase",
    popular: true
  },
  {
    name: "Enterprise Strategy",
    price: "Custom",
    duration: "8-12 weeks",
    description: "Large-scale strategic transformation for enterprise products",
    features: [
      "Multi-product strategy",
      "Organizational alignment",
      "Change management",
      "Executive presentations",
      "Team training",
      "Ongoing advisory",
      "Board-level reporting"
    ],
    ideal: "Enterprise organizations with complex needs"
  }
];

export default function ProductStrategy() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Product Strategy Consulting | Strategic Product Planning | POSTMAN</title>
          <meta name="description" content="Expert product strategy consulting to define vision, create roadmaps, and drive growth. From startups to enterprise, strategic product planning that delivers results." />
          <meta name="keywords" content="product strategy, product roadmap, product planning, strategic consulting, product vision" />
          <link rel="canonical" href="https://p0stman.com/product-strategy" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Product Strategy Consulting",
              "description": "Expert product strategy consulting to define vision, create roadmaps, and drive growth. From startups to enterprise, strategic product planning that delivers results.",
              "provider": { "@type": "Organization", "name": "POSTMAN", "url": "https://p0stman.com" },
              "serviceType": ["Product Strategy", "Strategic Consulting", "Product Roadmapping", "Growth Strategy"],
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
                { "@type": "ListItem", "position": 3, "name": "Product Strategy", "item": "https://p0stman.com/product-strategy" }
              ]
            })}
          </script>
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section className="py-32 md:py-48 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                    Product Strategy Consulting
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 leading-[1.05] tracking-tight text-gray-900">
                  Strategic Product Planning
                  <span className="block">That Drives Real Growth</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 font-light mb-12 leading-relaxed">
                  Transform your product vision into actionable strategy. From market research
                  to roadmap execution, I help organizations build products that users love
                  and businesses thrive on.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="mailto:hello@p0stman.com?subject=Product Strategy Inquiry"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light text-lg inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
                    Start Strategy Discussion
                    <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                  </motion.a>
                  <motion.a
                    href="#case-studies"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-gray-200 text-gray-900 hover:border-gray-300 transition-colors font-light text-lg"
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
                <div className="bg-white p-8 border-t border-gray-200">
                  <h3 className="text-2xl font-light mb-6 text-gray-900">Strategic Outcomes</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Map className="w-6 h-6 text-gray-400 mt-1" strokeWidth={1.5} />
                      <div>
                        <h4 className="font-light text-gray-900">Clear Product Roadmap</h4>
                        <p className="text-gray-600 text-sm font-light">6-18 month strategic roadmap with priorities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BarChart className="w-6 h-6 text-gray-400 mt-1" strokeWidth={1.5} />
                      <div>
                        <h4 className="font-light text-gray-900">Measurable Growth</h4>
                        <p className="text-gray-600 text-sm font-light">Data-driven metrics and KPIs for success</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-gray-400 mt-1" strokeWidth={1.5} />
                      <div>
                        <h4 className="font-light text-gray-900">Team Alignment</h4>
                        <p className="text-gray-600 text-sm font-light">Unified vision across all stakeholders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strategic Areas */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Core Capabilities
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">Strategic Focus Areas</h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl">
                Comprehensive product strategy covering all aspects of successful product development
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {strategicAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border-t border-gray-200"
                >
                  <div className="mb-4">{area.icon}</div>
                  <h3 className="text-xl font-light mb-3 text-gray-900">{area.title}</h3>
                  <p className="text-gray-600 font-light">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Our Approach
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">Strategic Process</h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl">
                Proven methodology for developing winning product strategies
              </p>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 md:p-12 border-t border-gray-200"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-light text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900">{step.title}</h3>
                        <div className="flex items-center gap-2 text-gray-900">
                          <Clock className="w-4 h-4" strokeWidth={1.5} />
                          <span className="font-light">{step.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 font-light mb-4">{step.description}</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {step.activities.map((activity, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                            <span className="text-sm text-gray-700 font-light">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="py-24 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Success Stories
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">Strategy Success Stories</h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl">
                Real results from strategic product planning across industries
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
                  className="bg-white p-8 border-t border-gray-200"
                >
                  <div className="mb-4">
                    <span className="text-xs tracking-[0.2em] uppercase text-gray-400 font-light">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-light mb-6 text-gray-900">{study.title}</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2 font-light">Challenge:</h4>
                      <p className="text-gray-600 text-sm font-light">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2 font-light">Solution:</h4>
                      <p className="text-gray-600 text-sm font-light">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2 font-light">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                            <span className="text-gray-700 text-sm font-light">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                  Investment
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">Strategy Packages</h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl">
                Flexible engagement models to match your strategic needs
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {pricingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white p-8 border-t-2 ${
                    option.popular
                      ? 'border-black'
                      : 'border-gray-200'
                  }`}
                >
                  {option.popular && (
                    <div className="absolute -top-4 left-8">
                      <span className="bg-black text-white px-4 py-2 text-xs tracking-[0.2em] uppercase font-light">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-light mb-2 text-gray-900">{option.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl md:text-5xl font-light text-gray-900">{option.price}</span>
                    </div>
                    <p className="text-gray-600 font-light mb-4">{option.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" strokeWidth={1.5} />
                      <span className="font-light">{option.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {option.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-gray-700 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 font-light mb-4">{option.ideal}</p>
                    <motion.a
                      href="mailto:hello@p0stman.com?subject=Product Strategy Inquiry"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full px-6 py-3 font-light transition-colors inline-flex items-center justify-center gap-2 ${
                        option.popular
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
