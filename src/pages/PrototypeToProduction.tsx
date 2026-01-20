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
  CheckCircle
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import { PhaseTimeline, FooterCTA } from '../components/service-pages';

const phases = [
  {
    icon: Search,
    title: 'Audit',
    duration: '1-2 days',
    description: 'Review your prototype code. Identify what works, what needs rework. Map the path to production.',
    deliverables: [
      'Code review report',
      'Architecture assessment',
      'Honest timeline',
      'Fixed-price quote'
    ]
  },
  {
    icon: Layers,
    title: 'Architect',
    duration: '2-3 days',
    description: 'Design production-ready stack. Plan database schema. Define API structure with security considerations.',
    deliverables: [
      'Tech stack decision',
      'Database design',
      'API specification',
      'Security plan'
    ]
  },
  {
    icon: Code2,
    title: 'Build',
    duration: '1-3 weeks',
    description: 'Production code, not prototype patches. Using your prototype as the spec with daily visibility.',
    deliverables: [
      'Production codebase',
      'Daily progress updates',
      'Staging environment',
      'Iterative refinement'
    ]
  },
  {
    icon: Rocket,
    title: 'Launch',
    duration: '2-3 days',
    description: 'Production deployment. Monitoring and alerting. Documentation and handoff with support included.',
    deliverables: [
      'Live deployment',
      'Monitoring setup',
      'Documentation',
      '30-day support'
    ]
  }
];

const scenarios = [
  {
    built: 'Lovable landing page + form',
    need: 'Full auth, database, admin panel',
    timeline: '1-2 weeks'
  },
  {
    built: 'Bolt MVP with basic features',
    need: 'Stripe payments, user management, scalability',
    timeline: '2-3 weeks'
  },
  {
    built: 'Replit AI feature prototype',
    need: 'Production AI integration, rate limiting, monitoring',
    timeline: '1-2 weeks'
  },
  {
    built: 'v0 component library',
    need: 'Full app with backend, deployment',
    timeline: '2-4 weeks'
  }
];

const whyItWorks = [
  'Your prototype is a detailed spec written in code',
  'It tells us exactly what you want',
  "You've already invested time and energy",
  'We build on it, not around it'
];

export default function PrototypeToProduction() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Prototype to Production | Bolt, Lovable, Replit to Live | P0STMAN</title>
          <meta name="description" content="Take your Bolt, Lovable, or Replit prototype to production. Your prototype isn't a failure - it's the most valuable discovery artifact you could have." />
          <meta name="keywords" content="prototype to production, bolt to production, lovable production, replit production, MVP development, startup development" />
          <link rel="canonical" href="https://p0stman.com/prototype-to-production" />
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
                  For Founders & Builders
                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8">
                  Your Prototype
                  <br />
                  Isn't a Failure
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                  You built something in Bolt, Lovable, or Replit. It works. Now make it real.
                </p>

                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all font-light text-lg inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Send it over
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Gap Section */}
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
                  The Gap
                </h2>

                <div className="prose prose-lg font-light text-gray-700 space-y-6">
                  <p className="text-xl">
                    AI coding tools changed everything.
                  </p>

                  <p>
                    Founders are building prototypes in hours. Testing ideas in days.
                    Getting to "it works!" faster than ever.
                  </p>

                  <p>
                    Then they hit the wall:
                  </p>

                  <ul className="list-none pl-0 space-y-2">
                    <li className="text-gray-600">"It's not scalable"</li>
                    <li className="text-gray-600">"The code is spaghetti"</li>
                    <li className="text-gray-600">"It won't pass security review"</li>
                    <li className="text-gray-600">"I can't add the features I need"</li>
                  </ul>

                  <p>
                    Sound familiar?
                  </p>

                  <p className="text-2xl text-gray-900 font-light">
                    Your prototype isn't wasted work. It's the most valuable discovery
                    artifact you could have.
                  </p>

                  <p>
                    It shows exactly what you want. We can read it, understand it,
                    and build the production version in weeks.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do - Timeline */}
        <PhaseTimeline
          title="What We Do"
          subtitle="From prototype to production in weeks, not months"
          phases={phases}
        />

        {/* Common Scenarios */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-light text-gray-900 mb-4">Common Scenarios</h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  We've seen these patterns hundreds of times
                </p>
              </motion.div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-xs tracking-[0.2em] uppercase text-gray-400 font-light">
                        You Built
                      </th>
                      <th className="text-left py-4 px-4 text-xs tracking-[0.2em] uppercase text-gray-400 font-light">
                        You Need
                      </th>
                      <th className="text-left py-4 px-4 text-xs tracking-[0.2em] uppercase text-gray-400 font-light">
                        Timeline
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarios.map((scenario, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border-b border-gray-100"
                      >
                        <td className="py-4 px-4 text-gray-900 font-light">{scenario.built}</td>
                        <td className="py-4 px-4 text-gray-600 font-light">{scenario.need}</td>
                        <td className="py-4 px-4 text-gray-500 font-light">{scenario.timeline}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Works */}
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
                <h2 className="text-4xl font-light text-gray-900">Why This Works</h2>

                <div className="prose prose-lg font-light text-gray-700 space-y-6">
                  <p>
                    Traditional agencies want you to throw away your prototype and start fresh.
                    "That's not how we work." They charge you for discovery you already did.
                  </p>

                  <p>
                    We see your prototype differently:
                  </p>
                </div>

                <div className="space-y-4">
                  {whyItWorks.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 bg-white p-4 border-t border-gray-200"
                    >
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-700 font-light">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <FooterCTA
          headline="Got a prototype that needs to become real?"
          description="Send us the link. We'll tell you honestly what it takes to make it production-ready."
          buttonText="Send it over"
          buttonHref="/contact"
          dark={true}
        />

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
