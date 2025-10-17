import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Zap,
  Users,
  Lightbulb,
  Target,
  ArrowRight,
  Check
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';

const values = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Speed',
    description: 'Build faster without compromising quality. AI-powered development delivers in weeks, not months.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'Push boundaries with cutting-edge AI agents, Web3 integration, and emerging technologies.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Results',
    description: 'Measurable outcomes. Every project delivers real business impact with clear KPIs.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Partnership',
    description: 'We\'re your extended team. Collaborative approach from discovery to delivery and beyond.'
  }
];

const capabilities = [
  'AI Agent Development',
  'Web3 & Blockchain',
  'Enterprise Platforms',
  'Mobile Applications',
  'Real-time Systems',
  'Cloud Architecture',
  'Product Strategy',
  'Team Scaling'
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Helmet>
          <title>About P0STMAN | AI-Powered Product Studio</title>
          <meta name="description" content="P0STMAN is an AI-powered product studio delivering innovative digital solutions at unprecedented speed." />
          <meta name="keywords" content="AI development studio, product development, innovation, technology partner" />
          <meta property="og:title" content="About P0STMAN | AI-Powered Product Studio" />
          <meta property="og:description" content="P0STMAN delivers innovative digital solutions powered by AI at unprecedented speed." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/about" />
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-lg">About P0STMAN</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-thin leading-tight mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Building the Future of Product Development
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
                  P0STMAN is an AI-powered product studio that combines human creativity with artificial intelligence to deliver innovative digital solutions at unprecedented speed. We help visionary founders, enterprises, and innovators bring their boldest ideas to life.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                  Founded on the belief that AI isn't just a tool—it's a superpower that unlocks new possibilities in product development. We leverage cutting-edge technology to compress timelines, reduce costs, and deliver exceptional outcomes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-thin mb-6 text-gray-900 dark:text-gray-100">Our Core Values</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Everything we do is guided by four fundamental principles
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-thin mb-8 text-gray-900 dark:text-gray-100">What We Do</h2>

                  <div className="space-y-6 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-2">Rapid Development</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Compress months of development into weeks using AI-assisted coding, intelligent architecture patterns, and proven methodologies.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-2">AI Innovation</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Build intelligent agents, implement cutting-edge AI models, and create products that leverage machine learning for competitive advantage.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-2">Strategic Partnership</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We don't just build—we become your extended team, providing guidance from concept through launch and beyond.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-2">Measured Results</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Clear ROI, defined KPIs, and tangible business outcomes. We succeed when you succeed.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl" />
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-8">Our Capabilities</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {capabilities.map((capability, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          <span className="text-gray-700 dark:text-gray-200">{capability}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose P0STMAN */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-thin mb-8">Why Choose P0STMAN?</h2>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="text-4xl font-light text-blue-200 mb-3">50-70%</div>
                    <p className="text-lg">Faster Development</p>
                    <p className="text-sm text-blue-100 mt-2">Months compressed to weeks</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-blue-200 mb-3">2-3x</div>
                    <p className="text-lg">More Efficient</p>
                    <p className="text-sm text-blue-100 mt-2">Reduced resource requirements</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-blue-200 mb-3">100%</div>
                    <p className="text-lg">Committed</p>
                    <p className="text-sm text-blue-100 mt-2">Your success is our success</p>
                  </div>
                </div>

                <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                  We combine the latest AI technology with proven product development expertise. Your vision, our execution, exceptional results.
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all font-medium text-lg"
                >
                  Let's Build Together
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
