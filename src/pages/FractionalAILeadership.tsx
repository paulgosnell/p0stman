import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  Code2,
  Shield,
  X,
  Check,
  MessageSquare,
  CheckCircle,
  Lightbulb,
  Users,
  FileText
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import { PricingTable, FooterCTA } from '../components/service-pages';

const comparisonItems = [
  { fullTime: '$400-600k/year + equity', fractional: '$10-20k/month' },
  { fullTime: '6-month hiring process', fractional: 'Start next week' },
  { fullTime: 'Single organization focus', fractional: 'Cross-industry perspective' },
  { fullTime: 'One team to upskill', fractional: 'Brings proven playbooks' },
  { fullTime: 'Strategy OR execution', fractional: 'Strategy AND execution' }
];

const whatYouGet = {
  strategy: [
    'AI opportunity assessment',
    'Use case prioritization',
    'Build vs buy decisions',
    'Vendor evaluation',
    'Roadmap development'
  ],
  execution: [
    'Pilot project delivery',
    'Team upskilling',
    'Architecture decisions',
    'Code review and guidance',
    'Production deployment'
  ],
  governance: [
    'AI policy development',
    'Risk assessment',
    'Compliance guidance',
    'Ethics frameworks',
    'Change management'
  ]
};

const engagementModels = [
  {
    name: 'Sprint',
    price: '$15-25k',
    period: '/project',
    description: '2-4 weeks, specific project focus',
    features: [
      'Proof of concept delivery',
      'Specific AI initiative',
      'Defined deliverables',
      'Knowledge transfer'
    ],
    ctaText: 'Start a sprint'
  },
  {
    name: 'Retainer',
    price: '$10-15k',
    period: '/month',
    description: '2-4 days/month, ongoing guidance',
    features: [
      'Strategic guidance',
      'Architecture reviews',
      'Team mentorship',
      'Priority access',
      'Monthly roadmap sessions'
    ],
    popular: true,
    ctaText: 'Start a retainer'
  },
  {
    name: 'Embedded',
    price: '$35-50k',
    period: '/month',
    description: 'Full-time for 1-3 months',
    features: [
      'Full transformation',
      'Team building',
      'Hands-on execution',
      'Culture change',
      'Complete ownership'
    ],
    ctaText: 'Go embedded'
  }
];

export default function FractionalAILeadership() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Fractional AI Leadership | Chief AI Officer on Demand | POSTMAN</title>
          <meta name="description" content="AI strategy and execution without the $500k salary. Fractional CTO, CAO, CPO for AI transformation. Start next week, not in 6 months." />
          <meta name="keywords" content="fractional CTO, fractional CAO, chief AI officer, AI leadership, AI transformation, AI strategy" />
          <link rel="canonical" href="https://p0stman.com/fractional-ai-leadership" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Fractional AI Leadership",
              "description": "AI strategy and execution without the $500k salary. Fractional CTO, CAO, CPO for AI transformation. Start next week, not in 6 months.",
              "provider": {
                "@type": "Organization",
                "name": "POSTMAN",
                "url": "https://p0stman.com"
              },
              "serviceType": ["Fractional CTO", "Fractional CAO", "Chief AI Officer", "AI Strategy"],
              "areaServed": "Worldwide",
              "offers": {
                "@type": "Offer",
                "description": "8 hours/week strategic AI leadership",
                "priceRange": "$5,000-$15,000/month"
              }
            })}
          </script>
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden bg-black text-white flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          </div>

          <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light mb-6">
                  For Growing Companies
                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8">
                  Chief AI Officer
                  <br />
                  on Demand
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                  AI strategy and execution without the $500k salary
                </p>

                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all font-light text-lg inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Let's talk
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                  The Problem
                </h2>

                <div className="prose prose-lg font-light text-gray-700 space-y-6">
                  <p className="text-xl">
                    You know AI matters. Your board knows. Your competitors know.
                  </p>

                  <p>But:</p>

                  <ul className="list-none pl-0 space-y-2">
                    <li className="text-gray-600">Hiring a CAO/CTO takes 6 months</li>
                    <li className="text-gray-600">AI consultants deliver decks, not products</li>
                    <li className="text-gray-600">Your team is learning, but slowly</li>
                    <li className="text-gray-600">Pilots keep dying in Slack</li>
                  </ul>

                  <p className="text-2xl text-gray-900 font-light">
                    You need someone who can see the strategy AND ship the code.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-light text-gray-900 mb-4">What Fractional Means</h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  Enterprise-level leadership without the enterprise cost
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Full-Time Column */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border-t border-gray-300"
                >
                  <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 font-light mb-6">
                    Full-Time CAO
                  </h3>
                  <div className="space-y-4">
                    {comparisonItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-gray-600 font-light">{item.fullTime}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Fractional Column */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black p-8 border-t border-gray-700"
                >
                  <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 font-light mb-6">
                    Fractional AI Leadership
                  </h3>
                  <div className="space-y-4">
                    {comparisonItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-white font-light">{item.fractional}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
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
                <h2 className="text-4xl font-light text-gray-900 mb-4">What You Get</h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  Strategy, execution, and governance — all in one
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Strategy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 border-t border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-black text-white">
                      <Lightbulb className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-light text-gray-900">Strategy Layer</h3>
                  </div>
                  <div className="space-y-3">
                    {whatYouGet.strategy.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-gray-600 font-light text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Execution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 border-t border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-black text-white">
                      <Code2 className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-light text-gray-900">Execution Layer</h3>
                  </div>
                  <div className="space-y-3">
                    {whatYouGet.execution.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-gray-600 font-light text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Governance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 border-t border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-black text-white">
                      <Shield className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-light text-gray-900">Governance Layer</h3>
                  </div>
                  <div className="space-y-3">
                    {whatYouGet.governance.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-gray-600 font-light text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <PricingTable
          title="Engagement Models"
          subtitle="Flexible options to match your needs and timeline"
          tiers={engagementModels}
        />

        {/* Background Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl font-light text-gray-900">Background</h2>

                <div className="prose prose-lg font-light text-gray-700 space-y-6">
                  <p>
                    20+ years building products. Grew an agency from 1 to 30 people.
                    Shipped 1000+ products across startups and enterprises.
                  </p>

                  <p>
                    Now I spend every day in Claude Code, Cursor, and AI tools.
                    I know what works because I'm building with it daily.
                  </p>

                  <p className="text-2xl text-gray-900 font-light">
                    Not a consultant who read about AI. A builder who lives in it.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-light text-gray-900 mb-2">20+</div>
                    <div className="text-sm text-gray-500 font-light">Years building</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-gray-900 mb-2">1000+</div>
                    <div className="text-sm text-gray-500 font-light">Products shipped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-gray-900 mb-2">20+</div>
                    <div className="text-sm text-gray-500 font-light">AI systems live</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <FooterCTA
          headline="Need AI leadership without the overhead?"
          description="Let's talk about what you're trying to build and how I can help."
          buttonText="Let's talk"
          buttonHref="/contact"
          dark={true}
        />

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
