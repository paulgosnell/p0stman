import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ExternalLink, Clock, Users, DollarSign, Database, Cloud, Mail, MessageCircle, Play } from 'lucide-react';

// Import existing case study images
import rhythmDashboard from '../assets/images/case-studies/rhythm-dashboard.png';
import harmonyDashboard from '../assets/images/case-studies/harmony-dashboard.png';
import chilledCrmDashboard from '../assets/images/case-studies/chilledcrm-dashboard.png';
import experienceGiftDashboard from '../assets/images/case-studies/experienceagift-dashboard.png';

const showcaseProjects = [
  {
    title: 'Rhythm AI Running Coach',
    description: 'AI-powered running coach with adaptive music system and personalized training plans',
    image: rhythmDashboard,
    liveUrl: 'https://ai-running-app.netlify.app/',
    metrics: [
      { icon: <Clock className="w-4 h-4" />, label: 'Build Time', value: '2 weeks' },
      { icon: <DollarSign className="w-4 h-4" />, label: 'Cost Savings', value: '$10k' },
      { icon: <Users className="w-4 h-4" />, label: 'Team Size', value: '1 Dev' }
    ],
    techStack: ['React Native', 'TensorFlow.js', 'Supabase', 'Spotify API'],
    category: 'AI Mobile App'
  },
  {
    title: 'Harmony Financial Wellness',
    description: 'Holistic financial wellness platform with AI-powered insights and personalized guidance',
    image: harmonyDashboard,
    liveUrl: 'https://ai-banking-app.netlify.app/',
    metrics: [
      { icon: <Clock className="w-4 h-4" />, label: 'Build Time', value: '6 weeks' },
      { icon: <DollarSign className="w-4 h-4" />, label: 'Cost Savings', value: '$40k' },
      { icon: <Users className="w-4 h-4" />, label: 'Team Size', value: '1 Dev' }
    ],
    techStack: ['React Native', 'Firebase', 'Supabase', 'Plaid API'],
    category: 'FinTech Platform'
  },
  {
    title: 'ChilledCRM',
    description: 'Affordable, intuitive CRM with AI-powered insights and automation features',
    image: chilledCrmDashboard,
    liveUrl: 'https://chilledcrm.com',
    metrics: [
      { icon: <Clock className="w-4 h-4" />, label: 'Build Time', value: '4 weeks' },
      { icon: <DollarSign className="w-4 h-4" />, label: 'Cost Savings', value: '$15k' },
      { icon: <Users className="w-4 h-4" />, label: 'Team Size', value: '1 Dev' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API'],
    category: 'Enterprise CRM'
  },
  {
    title: 'Experience A Gift',
    description: 'AI-powered gift platform with personalized recommendations and seamless booking',
    image: experienceGiftDashboard,
    liveUrl: 'https://experienceagift-staging1.netlify.app/',
    metrics: [
      { icon: <Clock className="w-4 h-4" />, label: 'Build Time', value: '1 week' },
      { icon: <DollarSign className="w-4 h-4" />, label: 'Cost Savings', value: '$8k' },
      { icon: <Users className="w-4 h-4" />, label: 'Team Size', value: '1 Dev' }
    ],
    techStack: ['React', 'Supabase', 'OpenAI API', 'Stripe'],
    category: 'E-commerce Platform'
  }
];

const boltVideos = [
  {
    id: "Y0g_9ZhqiRg",
    title: "How I used Bolt to build a CRM system in one week",
    thumbnail: `https://i.ytimg.com/vi/Y0g_9ZhqiRg/maxresdefault.jpg`
  },
  {
    id: "dxuct08lLyY",
    title: "Add Stripe to your bolt.new app",
    thumbnail: `https://i.ytimg.com/vi/dxuct08lLyY/maxresdefault.jpg`
  }
];

const OnePageApp: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % showcaseProjects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const openVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
    setShowVideoModal(true);
  };

  const getTechIcon = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('supabase') || lowerTech.includes('firebase') || lowerTech.includes('postgres'))
      return <Database className="w-3 h-3" />;
    if (lowerTech.includes('openai') || lowerTech.includes('tensorflow'))
      return <Bot className="w-3 h-3" />;
    if (lowerTech.includes('stripe'))
      return <DollarSign className="w-3 h-3" />;
    return <Cloud className="w-3 h-3" />;
  };

  const getBadgeColor = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('react')) return 'bg-blue-900/60 text-blue-300';
    if (lowerTech.includes('supabase')) return 'bg-green-900/60 text-green-300';
    if (lowerTech.includes('openai')) return 'bg-purple-900/60 text-purple-300';
    if (lowerTech.includes('stripe')) return 'bg-indigo-900/60 text-indigo-300';
    return 'bg-gray-800/60 text-gray-300';
  };

  const project = showcaseProjects[currentProject];

  return (
    <>
      <Helmet>
        <title>P0STMAN + Chilled Sites: The AI-Powered Alternative to Agencies</title>
        <meta name="description" content="AI Adoption • Advisory • Delivery. Get AI-ready and ship on-brand digital in weeks, not quarters." />
        <meta property="og:title" content="P0STMAN + Chilled Sites: The AI-Powered Alternative to Agencies" />
        <meta property="og:description" content="AI Adoption • Advisory • Delivery. Get AI-ready and ship on-brand digital in weeks, not quarters." />
        <meta property="og:image" content="/ai-middle-east-2025-og.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://p0stman.com/one-pager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-bg.png')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Column - Hero Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Bot className="w-8 h-8 text-blue-400" />
                      <span className="text-blue-400 font-medium text-lg">P0STMAN + Chilled Sites</span>
                    </div>

                    <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                        The AI-Powered
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Alternative to Agencies
                      </span>
                    </h1>

                    <p className="text-2xl text-gray-200 leading-relaxed max-w-2xl">
                      AI Adoption • Advisory • Delivery. Get AI-ready and ship on-brand digital in weeks, not quarters.
                    </p>
                  </div>

                  {/* Social Proof */}
                  <div className="flex flex-wrap gap-4">
                    {['20+ yrs in MEA', 'Production-ready code', 'Arabic-first', 'Security/Gov'].map((proof, index) => (
                      <div key={index} className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-200 border border-gray-700/50">
                        {proof}
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:paul@p0stman.com"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium text-lg"
                    >
                      <Mail className="w-5 h-5" />
                      Email Paul
                    </a>
                    <a
                      href="https://wa.me/971501234567?text=Hi Paul, I'm interested in P0STMAN AI adoption services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/80 backdrop-blur-sm text-white rounded-xl hover:bg-gray-700 transition-all transform hover:scale-105 font-medium text-lg border border-gray-700/50"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </div>
                </motion.div>

                {/* Right Column - Project Showcase */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl blur-xl animate-pulse" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProject}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700/50"
                    >
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="px-3 py-1 bg-blue-600/30 backdrop-blur-sm rounded-full text-blue-400 text-sm font-medium">
                            {project.category}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {currentProject + 1}/{showcaseProjects.length}
                          </div>
                        </div>

                        <div className="relative aspect-video rounded-xl overflow-hidden group">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
                            >
                              View Live Demo
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          <p className="text-gray-200 leading-relaxed">{project.description}</p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                              <div
                                key={index}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${getBadgeColor(tech)}`}
                              >
                                {getTechIcon(tech)}
                                {tech}
                              </div>
                            ))}
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-4">
                            {project.metrics.map((metric, index) => (
                              <div key={index} className="text-center">
                                <div className="text-blue-400 mb-1">{metric.icon}</div>
                                <div className="text-lg font-bold text-white">{metric.value}</div>
                                <div className="text-xs text-gray-300">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="flex justify-center gap-2 mt-6">
                    {showcaseProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentProject ? 'bg-blue-400 scale-125' : 'bg-gray-700 hover:bg-gray-600'
                          }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Proven Outcomes
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Quantified results from AI adoption and implementation across enterprise clients
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: '↓ 28%', label: 'Support AHT', description: 'Reduced average handling time' },
                  { value: '↓ 40%', label: 'Fraud FPs', description: 'Decreased false positives' },
                  { value: '↓ 35%', label: 'Dev cycle time', description: 'Faster development cycles' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="text-center group hover:transform hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 hover:border-blue-500/30 transition-colors duration-300">
                      <div className="text-6xl font-thin text-white mb-4">{metric.value}</div>
                      <div className="text-lg font-medium text-gray-200 mb-2">{metric.label}</div>
                      <div className="text-sm text-gray-300">{metric.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bolt AI Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Building the Future with AI
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Leading Bolt power user and ambassador, leveraging the world's most advanced AI development platform
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 flex items-center">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    I build and scale digital ventures, fast. As a leading Bolt power user and ambassador, I leverage cutting-edge AI to deliver exceptional results.
                  </p>
                </div>

                {boltVideos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => openVideo(video.id)}
                  >
                    <div className="relative aspect-video">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800/70 backdrop-blur-sm border-t border-gray-700/50">
                      <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">{video.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-12 mb-16"
              >
                <div className="text-8xl font-thin text-white mb-4">20+ yrs in MEA</div>
                <div className="text-2xl font-light text-gray-200">Enterprise Technology Leadership</div>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {[
                  { value: '50+', label: 'Enterprise Projects' },
                  { value: '15+', label: 'Government Clients' },
                  { value: '100%', label: 'Security Cleared' },
                  { value: '10x', label: 'Faster Delivery' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-900/80 border border-gray-800 rounded-lg p-6 hover:border-blue-500/30 transition-colors duration-300"
                  >
                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-12"
              >
                <h3 className="text-4xl font-bold text-white mb-6">Ready to Get AI-Ready?</h3>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Contact Paul directly for P0STMAN AI adoption advisory and consultation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:paul@p0stman.com"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium text-lg"
                  >
                    <Mail className="w-5 h-5" />
                    Email Paul
                  </a>
                  <a
                    href="https://wa.me/971501234567?text=Hi Paul, I'm interested in P0STMAN AI adoption services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/80 backdrop-blur-sm text-white rounded-xl hover:bg-gray-700 transition-all transform hover:scale-105 font-medium text-lg border border-gray-700/50"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-12 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">© 2024 P0STMAN. All rights reserved.</p>
          </div>
        </footer>

        {/* Video Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-video">
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl"
              >
                ✕
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OnePageApp;