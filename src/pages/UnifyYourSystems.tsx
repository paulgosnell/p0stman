import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Search,
  Layers,
  Code2,
  Rocket,
  MessageSquare,
  CheckCircle,
  Unplug,
  LayoutDashboard,
  Zap,
  TrendingUp
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import { PhaseTimeline, FooterCTA } from '../components/service-pages';

const phases = [
  {
    icon: Search,
    title: 'Discovery',
    duration: '1 week',
    description: 'Map your current systems, data flows, and pain points. Identify quick wins and long-term opportunities.',
    deliverables: [
      'Systems audit',
      'Data flow mapping',
      'Integration roadmap',
      'Fixed-price proposal'
    ]
  },
  {
    icon: Layers,
    title: 'Architecture',
    duration: '1 week',
    description: 'Design the unified layer. Define what connects to what, how data flows, and what your team sees.',
    deliverables: [
      'Technical architecture',
      'API integration plan',
      'Dashboard wireframes',
      'Security approach'
    ]
  },
  {
    icon: Code2,
    title: 'Build',
    duration: '3-6 weeks',
    description: 'Connect your systems. Build the unified dashboard. AI handles the complexity, you see simplicity.',
    deliverables: [
      'System integrations',
      'Unified dashboard',
      'Automated workflows',
      'Weekly demos'
    ]
  },
  {
    icon: Rocket,
    title: 'Launch & Iterate',
    duration: '1-2 weeks',
    description: 'Roll out to your team. Train, refine, expand. This is the beginning, not the end.',
    deliverables: [
      'Team training',
      'Documentation',
      'Support period',
      'Growth roadmap'
    ]
  }
];

const painPoints = [
  {
    pain: 'Log into 7 different platforms every morning',
    solution: 'One dashboard. Everything you need.'
  },
  {
    pain: 'Copy-paste data between systems',
    solution: 'Automated sync. Real-time accuracy.'
  },
  {
    pain: 'No single view of the business',
    solution: 'Unified reporting. Instant clarity.'
  },
  {
    pain: 'Hours lost to manual reconciliation',
    solution: 'AI-powered matching. Minutes, not hours.'
  },
  {
    pain: 'Growing fast but systems can\'t keep up',
    solution: 'Built to scale with you.'
  }
];

const typicalClient = [
  '10-100 employees across multiple locations',
  '5-10 disconnected systems (POS, inventory, accounting, scheduling, CRM...)',
  'Finance or ops person who\'s tried to fix it themselves',
  'Growing fast, know the current setup won\'t scale',
  'Ready to invest in doing it properly'
];

export default function UnifyYourSystems() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Unify Your Systems | One Dashboard, All Your Data | POSTMAN</title>
          <meta name="description" content="Stop logging into 10 different platforms. We build AI-powered unified dashboards that connect your systems, automate workflows, and give you a single view of your business." />
          <meta name="keywords" content="unified dashboard, system integration, connect business systems, multi-location business software, legacy system integration, AI operations, business automation" />
          <link rel="canonical" href="https://p0stman.com/unify-your-systems" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Unify Your Systems",
              "description": "Stop logging into 10 different platforms. We build AI-powered unified dashboards that connect your systems, automate workflows, and give you a single view of your business.",
              "provider": { "@type": "Organization", "name": "POSTMAN", "url": "https://p0stman.com" },
              "serviceType": ["System Integration", "Unified Dashboard", "Business Automation", "AI Operations"],
              "areaServed": "Worldwide"
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://p0stman.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://p0stman.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Unify Your Systems", "item": "https://p0stman.com/unify-your-systems" }
              ]
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
                  For Growing Businesses
                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8">
                  Seven Systems.
                  <br />
                  One Dashboard.
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                  You're drowning in disconnected tools. We build the AI layer that unifies everything.
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
                  Sound Familiar?
                </h2>

                <div className="prose prose-lg font-light text-gray-700 space-y-6">
                  <p className="text-xl">
                    Your business runs on a dozen different systems that don't talk to each other.
                  </p>

                  <p>
                    POS. Inventory. Accounting. Scheduling. CRM. Marketing. HR. Reporting.
                    Each one has its own login, its own data, its own way of doing things.
                  </p>

                  <p>
                    You've got someone spending hours every week pulling data from one system,
                    reformatting it, and entering it into another. Or worse, decisions are
                    being made on outdated information because no one has time to reconcile everything.
                  </p>

                  <p className="text-2xl text-gray-900 font-light">
                    You know there's a better way. You might have even tried to build it yourself.
                  </p>

                  <p>
                    Maybe you got pretty far with Lovable or Bolt. Maybe you've got spreadsheets
                    and Zapier holding things together. It works... until it doesn't.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain → Solution Grid */}
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
                <h2 className="text-4xl font-light text-gray-900 mb-4">The Transformation</h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  From operational chaos to unified clarity
                </p>
              </motion.div>

              <div className="space-y-4">
                {painPoints.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-4 bg-white border border-gray-200"
                  >
                    <div className="p-6 flex items-center gap-4">
                      <Unplug className="w-5 h-5 text-red-400 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-gray-600 font-light">{item.pain}</span>
                    </div>
                    <div className="p-6 flex items-center gap-4 bg-gray-50">
                      <Zap className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-gray-900 font-light">{item.solution}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Build Section */}
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
                  What We Build
                </h2>

                <div className="prose prose-lg font-light text-gray-700 space-y-6">
                  <p className="text-xl">
                    A unified command center for your business.
                  </p>

                  <p>
                    We connect your existing systems - we don't replace them.
                    Your team keeps using the tools they know. But now there's
                    a single layer on top that brings everything together.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  <div className="p-6 border border-gray-200">
                    <LayoutDashboard className="w-8 h-8 text-gray-400 mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-light text-gray-900 mb-2">Unified Dashboard</h3>
                    <p className="text-gray-600 font-light">
                      One login. Everything your team needs to see and do. Customized for each role.
                    </p>
                  </div>

                  <div className="p-6 border border-gray-200">
                    <Zap className="w-8 h-8 text-gray-400 mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-light text-gray-900 mb-2">Automated Workflows</h3>
                    <p className="text-gray-600 font-light">
                      Data flows automatically. Updates sync in real-time. No more copy-paste.
                    </p>
                  </div>

                  <div className="p-6 border border-gray-200">
                    <TrendingUp className="w-8 h-8 text-gray-400 mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-light text-gray-900 mb-2">AI-Powered Insights</h3>
                    <p className="text-gray-600 font-light">
                      Ask questions in plain English. Get answers from across all your systems.
                    </p>
                  </div>

                  <div className="p-6 border border-gray-200">
                    <Layers className="w-8 h-8 text-gray-400 mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-light text-gray-900 mb-2">Built to Scale</h3>
                    <p className="text-gray-600 font-light">
                      Add locations, add systems, add users. The platform grows with you.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <PhaseTimeline
          title="How We Work"
          subtitle="From chaos to clarity in weeks, not months"
          phases={phases}
        />

        {/* Who This Is For */}
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
                <h2 className="text-4xl font-light text-gray-900">Who This Is For</h2>

                <div className="prose prose-lg font-light text-gray-700">
                  <p>
                    We work best with businesses that are:
                  </p>
                </div>

                <div className="space-y-4">
                  {typicalClient.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 bg-gray-50 p-4 border-l-2 border-gray-300"
                    >
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-700 font-light">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="prose prose-lg font-light text-gray-700 mt-8">
                  <p>
                    If you're nodding along, we should talk.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <FooterCTA
          headline="Ready to unify your systems?"
          description="Tell us what you're working with. We'll show you what's possible."
          buttonText="Start the conversation"
          buttonHref="/contact"
          dark={true}
        />

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
