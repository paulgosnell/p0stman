import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Bot,
  MapPin,
  Zap,
  Building2,
  Rocket,
  Heart,
  Lightbulb,
  Target,
  Users,
  Globe
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';

const journeyMilestones = [
  {
    year: '1997-2007',
    title: 'Motorsport & Events',
    description: 'Started in the fast lane with MSV Trackdays, then founded UK Trackdays. Ten years of high-octane event management taught me about logistics, customer experience, and running operations under pressure.',
    icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
    type: 'start'
  },
  {
    year: '2007-2014',
    title: 'Digital Awakening',
    description: 'Founded Whatonline, my first digital agency. Also launched Nearby Deals, a location-based rewards app ahead of its time. Some ventures worked, others didn\'t, but I was hooked on digital.',
    icon: <Lightbulb className="w-6 h-6" strokeWidth={1.5} />,
    type: 'learning'
  },
  {
    year: '2013-2018',
    title: 'Going Global',
    description: 'Technical Director at GRAMPY expanding into MENA. Head of Growth at Liftshare. Senior HealthTech Advisor at IBM iX. Learning to scale across cultures and continents.',
    icon: <Globe className="w-6 h-6" strokeWidth={1.5} />,
    type: 'growth'
  },
  {
    year: '2017-2021',
    title: 'The Agency Years',
    description: 'Founded Fitlink health platform, then Tent & Bear (later Genieology). Scaled from solo founder to 30-person team. The grind, the growth, the eventual acquisition by Monstarlab.',
    icon: <Building2 className="w-6 h-6" strokeWidth={1.5} />,
    type: 'success'
  },
  {
    year: '2023-2024',
    title: 'Corporate Leadership',
    description: 'Product Leader at Monstarlab, Director of Innovation at Belong Interactive. Learned how big organizations think and move. Valuable perspective, but I missed the startup energy.',
    icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
    type: 'corporate'
  },
  {
    year: '2024-Present',
    title: 'AI-Native Era',
    description: 'Founded POSTMAN and Chilled Tools. Community leader at Bolt.new. AI isn\'t just a tool—it\'s a superpower that lets me build at the speed of thought. The future is here.',
    icon: <Bot className="w-6 h-6" strokeWidth={1.5} />,
    type: 'transformation'
  }
];

const personalStats = [
  {
    number: '27+',
    label: 'Years Experience',
    description: 'From motorsport events to AI development'
  },
  {
    number: '8+',
    label: 'Companies Founded',
    description: 'From UK Trackdays to POSTMAN'
  },
  {
    number: '1→30',
    label: 'Team I Scaled',
    description: 'Genieology from solo to acquisition'
  },
  {
    number: '3',
    label: 'Continents',
    description: 'UK, Middle East, global remote teams'
  }
];

const lessonsLearned = [
  {
    title: 'Every Failure is Data',
    description: 'Nearby Deals was ahead of its time. Whatonline taught me about client management. Each "failure" was actually expensive market research that shaped everything that came after.',
    icon: <Lightbulb className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
  },
  {
    title: 'Culture Eats Strategy',
    description: 'Scaling Genieology from 1 to 30 people across multiple countries taught me that team culture and communication matter more than any business plan.',
    icon: <Heart className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
  },
  {
    title: 'Timing is Everything',
    description: 'I built location-based apps before smartphones were ready. I learned that being too early is often worse than being too late. Market timing beats perfect execution.',
    icon: <Target className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
  },
  {
    title: 'AI Changes the Game',
    description: 'After 25+ years of traditional development, AI feels like discovering fire. I can now build, test, and iterate at speeds that would have seemed impossible just two years ago.',
    icon: <Bot className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
  }
];

const location = {
  title: 'Norfolk, UK',
  description: 'Based in the Norfolk countryside where rolling green fields meet ancient market towns. The slower pace creates space to think clearly and build thoughtfully—the perfect environment for deep work and creative problem-solving.',
  media: {
    type: 'video' as const,
    src: 'https://videos.pexels.com/video-files/33559166/14268243_1920_1080_30fps.mp4'
  }
};

export default function PaulGosnell() {
  const [journeyRef, journeyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [lessonsRef, lessonsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>About Paul Gosnell | My Journey Through 20 Years of Tech</title>
          <meta name="description" content="The story of Paul Gosnell - 20 years of building startups, failing fast, learning hard, and discovering how AI became my superpower." />
          <meta name="keywords" content="Paul Gosnell, entrepreneur story, startup journey, AI development, Norfolk UK" />
          <meta property="og:title" content="About Paul Gosnell | My Journey Through 20 Years of Tech" />
          <meta property="og:description" content="The story of 20 years building startups, failing fast, learning hard, and discovering AI as a superpower." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/about" />
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-white text-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
          </div>

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-6 font-light">The Real Story</p>

                  <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-gray-900">
                    20 Years of Building, Breaking & Learning
                  </h1>

                  <p className="text-xl text-gray-600 mb-6 leading-relaxed font-light">
                    Started with motorsport events in '97, pivoted to digital in '07, and never looked back.
                    I've founded 8+ companies across three continents—from UK Trackdays to Fitlink to Genieology.
                    Some crashed and burned, others got acquired. All taught me something crucial.
                  </p>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                    Built Genieology from a solo operation to 30+ people before Monstarlab acquired us.
                    Now with AI as my co-pilot, I can ship products faster than my entire former team.
                    It's not about replacing humans—it's about amplifying 27 years of hard-won experience.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {personalStats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-50 backdrop-blur-sm p-4 rounded-xl border border-gray-200 text-center"
                      >
                        <div className="text-2xl font-light text-gray-900 mb-1">{stat.number}</div>
                        <div className="text-sm text-gray-600 mb-1 font-light">{stat.label}</div>
                        <div className="text-xs text-gray-600 font-light">{stat.description}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-gray-200 shadow-lg">
                        <img
                          src="https://mediacdn.carrd.co/assets/images/image02.jpg"
                          alt="Paul Gosnell"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-light text-gray-900 mb-2">Paul Gosnell</h3>
                      <p className="text-gray-600 font-light">Serial Entrepreneur & AI Enthusiast</p>
                    </div>

                    <div className="space-y-4 text-gray-600">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                        <span className="font-light">Norfolk, UK</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Building2 className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                        <span className="font-light">POSTMAN & Chilled Tools Founder</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Bot className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                        <span className="font-light">AI-Powered Development</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section ref={journeyRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-light mb-6">The Journey</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                  Two decades of ups, downs, and everything in between. Here's the real story.
                </p>
              </motion.div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

                <div className="space-y-12">
                  {journeyMilestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={journeyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-400 rounded-full z-10"></div>

                      {/* Content */}
                      <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-gray-50 text-gray-400">
                              {milestone.icon}
                            </div>
                            <div>
                              <div className="text-sm font-light text-gray-500">{milestone.year}</div>
                              <h3 className="text-xl font-light text-gray-900">{milestone.title}</h3>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed font-light">{milestone.description}</p>
                        </div>
                      </div>

                      {/* Empty space for alternating layout */}
                      <div className="hidden lg:block w-5/12"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section ref={lessonsRef} className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-light mb-6">Hard-Won Lessons</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                  Twenty years of mistakes, failures, and breakthroughs distilled into what actually matters.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {lessonsLearned.map((lesson, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={lessonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-200"
                  >
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-white rounded-2xl shadow-sm">
                        {lesson.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-light text-gray-900 mb-3">{lesson.title}</h3>
                        <p className="text-gray-700 leading-relaxed font-light">{lesson.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The AI Superpower Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Bot className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
                  <h2 className="text-4xl font-light">The AI Superpower</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
                  After 27 years of building companies the traditional way, AI feels like discovering a cheat code.
                  The same complex platforms that took my 30-person Genieology team months to deliver, I can now
                  prototype and build in weeks. It's not about replacing the human element—it's about amplifying
                  decades of hard-won experience with superhuman speed.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200"
                >
                  <Zap className="w-12 h-12 text-gray-400 mb-6" strokeWidth={1.5} />
                  <h3 className="text-2xl font-light mb-4">Speed</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    I can now build MVPs in days, not months. AI handles the repetitive coding while I focus on strategy and user experience.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200"
                >
                  <Target className="w-12 h-12 text-gray-400 mb-6" strokeWidth={1.5} />
                  <h3 className="text-2xl font-light mb-4">Precision</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    20 years of experience combined with AI's capabilities means I can spot problems early and solve them efficiently.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200"
                >
                  <Rocket className="w-12 h-12 text-gray-400 mb-6" strokeWidth={1.5} />
                  <h3 className="text-2xl font-light mb-4">Scale</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    I can take on projects that would have required entire teams, delivering enterprise-quality results as a one-person operation.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                {/* Media Container */}
                <div className="relative w-full aspect-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={location.media.src} type="video/mp4" />
                  </video>
                </div>

                {/* Overlay and Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-6 h-6" style={{ color: '#ffffff', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,1))' }} strokeWidth={1.5} />
                      <span className="text-lg font-light" style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,1), 0 4px 16px rgba(0,0,0,0.8)' }}>
                        Based in
                      </span>
                    </div>
                    <h3 className="text-4xl font-light mb-4" style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,1), 0 4px 16px rgba(0,0,0,0.8)' }}>
                      {location.title}
                    </h3>
                    <p className="text-lg max-w-2xl font-light leading-relaxed" style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,1), 0 4px 16px rgba(0,0,0,0.8)' }}>
                      {location.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
