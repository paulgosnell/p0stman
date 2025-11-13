import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Activity, Brain, Shield, Database, TrendingUp, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';
import TechStack from '../components/TechStack';

const healthProjects = [
  {
    id: 'mamori-healthos',
    title: 'Mamori HealthOS',
    category: 'AI Health Platform',
    description: 'AI-native health operating system transforming fragmented data into evidence-based guidance. Built in 2-3 weeks with 95% cost reduction.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop',
    tags: ['AI', 'Wearables', 'Health Data', 'Voice AI'],
    metrics: [
      { label: 'Build Time', value: '2-3 weeks' },
      { label: 'Cost Savings', value: '95%' }
    ],
    url: '/case-study/mamori-healthos'
  },
  {
    id: 'doh-health',
    title: 'DoH Abu Dhabi Health App',
    category: 'Government Healthcare',
    description: 'Partnered with IBM to build standout health & fitness app for Abu Dhabi residents. Personalized wellness integrating with Google Fit and Fitbit.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop',
    tags: ['Government', 'Fitness', 'Wearables', 'IBM Partnership'],
    metrics: [
      { label: 'Duration', value: '6 months' },
      { label: 'Team', value: '12 people' }
    ],
    url: '/case-study/doh-health'
  },
  {
    id: 'clinicbook',
    title: 'ClinicBook',
    category: 'Clinic Management',
    description: 'AI-powered clinic management system with smart scheduling, patient management, and automated reminders.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop',
    tags: ['Healthcare', 'AI Scheduling', 'Patient Management'],
    metrics: [
      { label: 'Build Time', value: '3 weeks' },
      { label: 'Efficiency', value: '+80%' }
    ],
    url: '/case-study/clinic-book'
  },
  {
    id: 'fitlink',
    title: 'Fitlink',
    category: 'Social Fitness Platform',
    description: 'Corporate wellness platform serving 60k+ users across 30+ countries with AI-powered workout recommendations.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&auto=format&fit=crop',
    tags: ['Fitness', 'Corporate Wellness', 'Community'],
    metrics: [
      { label: 'Active Users', value: '60K+' },
      { label: 'Countries', value: '30+' }
    ],
    url: '/case-study/fitlink'
  },
  {
    id: 'serenity',
    title: 'Serenity',
    category: 'Mental Wellness',
    description: 'AI-powered wellness and meditation platform with personalized mindfulness programs and mental health tracking.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&auto=format&fit=crop',
    tags: ['Mental Health', 'AI', 'Meditation'],
    metrics: [
      { label: 'Build Time', value: '2 weeks' },
      { label: 'User Retention', value: '85%' }
    ],
    url: '/case-study/serenity'
  },
  {
    id: 'rhythm',
    title: 'Rhythm',
    category: 'AI Running Coach',
    description: 'Revolutionary fitness app with AI-powered coaching and adaptive music. Built in just 1 week.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&auto=format&fit=crop',
    tags: ['Fitness', 'AI', 'Music'],
    metrics: [
      { label: 'Build Time', value: '1 week' },
      { label: 'Performance', value: '+45%' }
    ],
    url: '/case-study/rhythm'
  }
];

const expertise = [
  {
    icon: <Activity className="w-6 h-6" strokeWidth={1.5} />,
    title: 'Wearable Integration',
    description: 'Apple Health, Oura, Whoop, Fitbit, Google Fit - we integrate them all'
  },
  {
    icon: <Brain className="w-6 h-6" strokeWidth={1.5} />,
    title: 'AI-Powered Health',
    description: 'Evidence-based AI, conversational health agents, predictive analytics'
  },
  {
    icon: <Shield className="w-6 h-6" strokeWidth={1.5} />,
    title: 'Privacy & Compliance',
    description: 'HIPAA, GDPR compliant architectures with secure data handling'
  },
  {
    icon: <Database className="w-6 h-6" strokeWidth={1.5} />,
    title: 'Health Data Architecture',
    description: 'Unified health profiles, lab results, behavior tracking, environmental data'
  },
  {
    icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
    title: 'Patient Management',
    description: 'Clinic systems, appointment scheduling, patient records, communications'
  },
  {
    icon: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />,
    title: 'Corporate Wellness',
    description: 'Enterprise health platforms, fitness challenges, team engagement'
  }
];

const capabilities = [
  { text: 'Strategy & Planning', icon: <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} /> },
  { text: 'Product Design & UX', icon: <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} /> },
  { text: 'Full-Stack Development', icon: <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} /> },
  { text: 'AI Integration', icon: <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} /> },
  { text: 'Compliance & Security', icon: <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} /> },
  { text: 'Growth & Optimization', icon: <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} /> }
];

export default function HealthLanding() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Health & Wellness Projects | AI-Powered Healthcare Solutions</title>
          <meta name="description" content="From government health apps to AI-powered wellness platforms. See our healthcare projects spanning wearables, mental health, fitness, clinics, and corporate wellness." />
          <meta name="keywords" content="health app development, AI healthcare, wellness platforms, fitness apps, clinic management, wearable integration" />
          <link rel="canonical" href="https://p0stman.com/health" />
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&auto=format&fit=crop"
              alt="Health & Wellness"
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Heart className="w-4 h-4 text-white" strokeWidth={1.5} />
                <span className="text-white text-sm font-light">Health & Wellness Expertise</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
                Building the Future of{' '}
                <span className="text-white">
                  Digital Health
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white font-light mb-12 leading-relaxed">
                From wearable data integration to AI-powered health platforms, government healthcare apps to mental wellness solutions.
                We've built across the entire health spectrum with speed, precision, and deep domain expertise.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-black text-white rounded-lg font-light hover:bg-gray-900 transition-all flex items-center gap-2 group"
                >
                  Discuss Your Health Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </Link>
                <a
                  href="#projects"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-light hover:bg-white/20 transition-all border border-white/20"
                >
                  View Projects
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                <div className="border-l-2 border-gray-400 pl-4">
                  <div className="text-3xl font-light text-white">6+</div>
                  <div className="text-white/70 text-sm font-light">Health Projects</div>
                </div>
                <div className="border-l-2 border-gray-400 pl-4">
                  <div className="text-3xl font-light text-white">60K+</div>
                  <div className="text-white/70 text-sm font-light">Active Users</div>
                </div>
                <div className="border-l-2 border-gray-400 pl-4">
                  <div className="text-3xl font-light text-white">95%</div>
                  <div className="text-white/70 text-sm font-light">Cost Reduction</div>
                </div>
                <div className="border-l-2 border-gray-400 pl-4">
                  <div className="text-3xl font-light text-white">1-3 wks</div>
                  <div className="text-white/70 text-sm font-light">Typical Build</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                  Deep Health & Wellness Expertise
                </h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  We've built everything from government health apps to AI-powered wellness platforms,
                  accumulating deep expertise across the health technology landscape.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-900 mb-4 group-hover:bg-gray-900 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                  Health & Wellness Projects
                </h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  Real projects, real results. From concept to launch in weeks, not months.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {healthProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={project.url}
                      className="block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all group"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-black text-white text-xs font-light rounded-full">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 font-light mb-4 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-light rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Metrics */}
                        <div className="flex items-center gap-4 text-sm text-gray-600 pt-4 border-t border-gray-100">
                          {project.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center gap-1">
                              <Activity className="w-4 h-4 text-gray-900" strokeWidth={1.5} />
                              <span className="font-light">{metric.value}</span>
                              <span className="text-gray-400 font-light">{metric.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <TechStack
          eyebrow="AI Building Blocks"
          title="Health Tech Built with Cutting-Edge AI"
          description="We leverage the latest AI models and platforms to build health solutions that are fast, intelligent, and scalable."
          className="bg-white"
        />

        {/* Capabilities & CTA */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-light mb-6">
                  End-to-End Health Platform Development
                </h2>
                <p className="text-xl text-white/90 font-light leading-relaxed">
                  Give us a brief, we'll validate it, challenge assumptions, improve where needed,
                  then rapidly execute from strategy through to growth.
                </p>
              </motion.div>

              {/* Capabilities Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                  >
                    <span className="text-gray-400">{capability.icon}</span>
                    <span className="font-light">{capability.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-light hover:bg-gray-100 transition-all group text-lg"
                >
                  Start Your Health Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </Link>
                <p className="mt-4 text-white/70 font-light">
                  Typical projects: 2-8 weeks from brief to launch
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
