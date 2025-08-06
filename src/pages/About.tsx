import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, BriefcaseIcon, MapPin, User, Award, Zap, Code, Brain, Rocket, CheckCircle } from 'lucide-react';
import SubHeader from '../components/SubHeader';

const highlights = [
  {
    icon: <BriefcaseIcon className="w-6 h-6 text-blue-600" />,
    label: '20+ Years Experience',
    description: 'Building innovative digital products'
  },
  {
    icon: <Bot className="w-6 h-6 text-blue-600" />,
    label: 'AI Expert',
    description: 'Pioneering AI-powered development'
  },
  {
    icon: <User className="w-6 h-6 text-blue-600" />,
    label: 'Serial Entrepreneur',
    description: 'Founded multiple successful startups'
  }
];

const expertise = [
  {
    title: 'AI Development',
    icon: <Bot className="w-8 h-8 text-blue-600" />,
    points: [
      'AI-powered code generation',
      'Machine learning integration',
      'Natural language processing',
      'Computer vision systems',
      'Automated testing & QA',
      'AI model optimization'
    ]
  },
  {
    title: 'Product Strategy',
    icon: <Brain className="w-8 h-8 text-purple-600" />,
    points: [
      'Market analysis',
      'Product roadmapping',
      'Feature prioritization',
      'Growth strategy',
      'User experience design',
      'Go-to-market planning'
    ]
  },
  {
    title: 'Technical Leadership',
    icon: <Code className="w-8 h-8 text-green-600" />,
    points: [
      'Architecture design',
      'Team mentoring',
      'Best practices',
      'Code quality',
      'Performance optimization',
      'Security implementation'
    ]
  },
  {
    title: 'Innovation',
    icon: <Rocket className="w-8 h-8 text-pink-600" />,
    points: [
      'Emerging technologies',
      'Process optimization',
      'Digital transformation',
      'Future-ready solutions',
      'Rapid prototyping',
      'Innovation workshops'
    ]
  }
];

export default function About() {
  const [expertiseRef, expertiseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [achievementsRef, achievementsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>About Paul Gosnell | AI Product Development Expert</title>
          <meta name="description" content="Meet Paul Gosnell - 20+ years of experience in AI-powered product development. Expert in building innovative solutions faster and more efficiently than traditional methods." />
          <meta name="keywords" content="Paul Gosnell, AI expert, product development, tech innovation, Dubai" />
          <meta property="og:title" content="About Paul Gosnell | AI Product Development Expert" />
          <meta property="og:description" content="20+ years of experience in AI-powered product development. Learn about my journey and expertise." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="About Paul Gosnell | AI Product Development Expert" />
          <meta name="twitter:description" content="20+ years of experience in AI-powered product development." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/about" />
        </Helmet>

        <SubHeader />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
          </div>

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <User className="w-6 h-6 text-blue-400" />
                    <span className="text-blue-400 font-medium">About Me</span>
                  </div>

                  <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-md">
                    Transforming Ideas into Reality with AI
                  </h1>

                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    With over two decades of experience in product development, I specialize in using AI to build innovative solutions faster and more efficiently than traditional methods.
                  </p>

                  <div className="grid grid-cols-3 gap-6">
                    {highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                      >
                        <div className="text-blue-400 mb-3">{highlight.icon}</div>
                        <div className="text-lg font-semibold mb-1">{highlight.label}</div>
                        <div className="text-sm text-gray-400">{highlight.description}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-6 blur-xl animate-pulse" />
                  <img
                    src="https://mediacdn.carrd.co/assets/images/image02.jpg"
                    alt="Paul Gosnell"
                    className="relative z-10 w-full aspect-square object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
                    <div className="flex items-center gap-3">
                      <Bot className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">AI Expert</p>
                        <p className="text-blue-600 font-bold">Bolt Builder</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section ref={expertiseRef} className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                  <h2 className="text-3xl font-bold">Areas of Expertise</h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Combining deep technical knowledge with strategic thinking to deliver exceptional results.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {expertise.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white rounded-xl shadow-sm">
                        {area.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{area.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {area.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

       

        {/* Location Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80"
                  alt="Dubai"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <div className="flex items-center gap-2 text-white/80 mb-4">
                    <MapPin className="w-6 h-6" />
                    <span className="text-lg">Working from</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white">Dubai, UAE</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
}