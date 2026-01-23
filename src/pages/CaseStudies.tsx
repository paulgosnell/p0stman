import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Building2,
  Bot,
  Zap,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  Calendar,
  Smartphone,
  DollarSign,
  Target,
  Filter,
  Code,
  Award,
  Heart
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import CaseStudyModal from '../components/modals/CaseStudyModal';
import FooterV3 from '../components/v3/FooterV3';
import { allProjects as projectsData, categories } from '../data/portfolioData';
import PortfolioVideoPlayer from '../components/PortfolioVideoPlayer';

// Map icons to metrics for display (shared data doesn't include JSX icons)
const iconMap: Record<string, React.ReactNode> = {
  'Availability': <Zap className="w-6 h-6" />,
  'Frameworks': <Target className="w-6 h-6" />,
  'Cost Savings': <DollarSign className="w-6 h-6" />,
  'Build Time': <Zap className="w-6 h-6" />,
  'Infrastructure': <DollarSign className="w-6 h-6" />,
  'Lead Context': <TrendingUp className="w-6 h-6" />,
  'Team Size': <Users className="w-6 h-6" />,
  'Team Scale': <Users className="w-6 h-6" />,
  'Duration': <Calendar className="w-6 h-6" />,
  'Efficiency Gain': <TrendingUp className="w-6 h-6" />,
  'Load Speed': <TrendingUp className="w-6 h-6" />,
  'Global Team': <Users className="w-6 h-6" />,
  'Platforms': <Globe className="w-6 h-6" />,
  'Conversion': <TrendingUp className="w-6 h-6" />,
  'Mobile Boost': <Smartphone className="w-6 h-6" />,
  'Launch Time': <Zap className="w-6 h-6" />,
  'Partnership': <Building2 className="w-6 h-6" />,
  'Client': <Award className="w-6 h-6" />,
  'Standards': <TrendingUp className="w-6 h-6" />,
  'Experience': <TrendingUp className="w-6 h-6" />,
  'CMS': <Building2 className="w-6 h-6" />,
  'Praise': <Award className="w-6 h-6" />,
  'Token': <Award className="w-6 h-6" />,
  'Beta': <TrendingUp className="w-6 h-6" />,
  'Crypto': <Zap className="w-6 h-6" />,
  'Success': <Zap className="w-6 h-6" />,
  'Conversions': <TrendingUp className="w-6 h-6" />,
  'Time Saved': <Zap className="w-6 h-6" />,
  'AI Tools': <Bot className="w-6 h-6" />,
  'Response Time': <TrendingUp className="w-6 h-6" />,
  'Sessions': <Users className="w-6 h-6" />,
  'Safety Incidents': <Award className="w-6 h-6" />,
  'Cost/Session': <DollarSign className="w-6 h-6" />,
  'Time to First Site': <Zap className="w-6 h-6" />,
  'Active Users': <Users className="w-6 h-6" />,
  'Websites Built': <Globe className="w-6 h-6" />,
  'Cost Saving': <TrendingUp className="w-6 h-6" />,
  'Performance': <TrendingUp className="w-6 h-6" />,
  'Artists': <Users className="w-6 h-6" />,
  'Efficiency': <TrendingUp className="w-6 h-6" />,
  'User Retention': <Users className="w-6 h-6" />,
  'Countries': <Globe className="w-6 h-6" />,
  'Bookings': <TrendingUp className="w-6 h-6" />,
  'Gift Selection': <TrendingUp className="w-6 h-6" />,
  'Design Style': <Globe className="w-6 h-6" />,
  'Style': <Building2 className="w-6 h-6" />,
  'Category': <TrendingUp className="w-6 h-6" />,
  'Industry': <Target className="w-6 h-6" />,
  'Focus': <Globe className="w-6 h-6" />,
  'Type': <Target className="w-6 h-6" />,
  'Platform': <Smartphone className="w-6 h-6" />,
};

// Transform shared data to include icons for display
const allProjects = projectsData.map(project => ({
  ...project,
  metrics: project.metrics?.map(metric => ({
    ...metric,
    icon: iconMap[metric.label] || <Zap className="w-6 h-6" />,
  })),
}));

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project =>
        project.type === selectedCategory ||
        project.category.includes(selectedCategory)
      );

  const openCaseStudy = (project: typeof allProjects[0]) => {
    if (project.caseStudyUrl) {
      window.location.href = project.caseStudyUrl;
    } else {
      setSelectedProject(project);
      setShowCaseStudyModal(true);
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Helmet>
          <title>Case Studies & Projects | Paul Gosnell - AI Product Development</title>
          <meta name="description" content="Explore Paul Gosnell's portfolio of enterprise transformations and AI-built products. From banking platforms to fitness apps, see real results and measurable impact." />
          <meta name="keywords" content="AI development projects, enterprise transformation, case studies, product development portfolio" />
          <meta property="og:title" content="Case Studies & Projects | Paul Gosnell" />
          <meta property="og:description" content="Portfolio of enterprise transformations and AI-built products with real results and measurable impact." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/case-studies" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Case Studies | POSTMAN Portfolio",
              "description": "Explore our portfolio of AI-powered products, enterprise transformations, and digital solutions delivered for clients worldwide.",
              "url": "https://p0stman.com/case-studies",
              "publisher": { "@type": "Organization", "name": "POSTMAN", "url": "https://p0stman.com" }
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://p0stman.com/" },
                { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://p0stman.com/case-studies" }
              ]
            })}
          </script>
        </Helmet>

        <HeaderV3Global darkMode={true} />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-black text-white overflow-hidden">
          {/* Simple Background */}
          <div className="absolute inset-0 z-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-20"></div>


          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <span className="text-xs tracking-[0.3em] uppercase text-white font-light">Portfolio</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 text-white leading-[1.05] tracking-tight">
                  Case Studies & Projects
                </h1>

                <p className="text-xl md:text-2xl text-white font-light mb-12 leading-relaxed max-w-3xl mx-auto">
                  From enterprise transformations to AI-built products, explore a portfolio of real projects
                  with measurable impact across banking, media, health, and technology sectors.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-16">
                  <div className="text-center">
                    <div className="text-3xl font-light text-white mb-1">12+</div>
                    <div className="text-sm text-white font-light">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-white mb-1">8</div>
                    <div className="text-sm text-white font-light">Industries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-white mb-1">40+</div>
                    <div className="text-sm text-white font-light">Team Members Led</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-white mb-1">80%</div>
                    <div className="text-sm text-white font-light">Faster with AI</div>
                  </div>
                </div>

                {/* Portfolio Video Montage */}
                <PortfolioVideoPlayer />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 font-light transition-all ${
                      selectedCategory === category
                        ? 'bg-black text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section ref={ref} className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Featured Row - 2 Larger Cards */}
              {selectedCategory === 'All' && (
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {filteredProjects.slice(0, 2).map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        y: -8,
                        scale: 1.01,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer bg-white dark:bg-gray-800 flex flex-col border-t border-gray-200 dark:border-gray-700"
                      onClick={() => openCaseStudy(project)}
                    >
                      {/* Project Image - Taller for featured */}
                      <div className="relative overflow-hidden h-72 md:h-80">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/50 transition-transform duration-300 group-hover:scale-110">
                            <ExternalLink className="w-8 h-8 text-white" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>

                      {/* Content - Larger for featured */}
                      <div className="flex-1 flex flex-col p-6">
                        <div className="flex-1">
                          {/* Top row: Category left, Badges right */}
                          <div className="flex justify-between items-start mb-3">
                            <span className="text-sm text-gray-500 dark:text-gray-400 font-light">{project.category}</span>
                            <div className="flex gap-2">
                              <span className="px-2 py-0.5 text-xs font-light bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                {project.type}
                              </span>
                              {project.caseStudyUrl && (
                                <span className="px-2 py-0.5 text-xs font-light bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                  Full Case Study
                                </span>
                              )}
                              <span className="px-2 py-0.5 text-xs font-medium tracking-wide bg-black text-white">
                                LATEST
                              </span>
                            </div>
                          </div>

                          <h3 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-2 transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-300 font-light mb-3">{project.company}</p>

                          <p className="text-gray-700 dark:text-gray-200 text-sm line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        {/* Metrics */}
                        {project.metrics && (
                          <div className="flex gap-4 pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                            {project.metrics.slice(0, 3).map((metric, i) => (
                              <div key={i} className="text-center flex-1">
                                <div className="text-lg font-light text-gray-900 dark:text-gray-100">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 font-light mt-0.5">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Regular Grid - 3 Columns */}
              <div className="grid md:grid-cols-3 gap-4">
                {(selectedCategory === 'All' ? filteredProjects.slice(2) : filteredProjects).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer bg-white dark:bg-gray-800 flex flex-col border-t border-gray-200 dark:border-gray-700"
                    onClick={() => openCaseStudy(project)}
                  >

                      {/* Project Image */}
                      <div className="relative overflow-hidden h-56">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                        />

                        {/* Logo */}
                        {project.logo && (
                          <div className="absolute top-4 right-4 opacity-90 group-hover:opacity-100 transition-opacity">
                            <img
                              src={project.logo}
                              alt={`${project.company} logo`}
                              className="h-6 w-auto filter drop-shadow-lg"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        )}

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/50 transition-transform duration-300 group-hover:scale-110">
                            <ExternalLink className="w-7 h-7 text-white" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col p-4">
                        <div className="flex-1">
                          {/* Badges below image */}
                          <div className="flex gap-2 mb-2">
                            <span className="px-2 py-0.5 text-xs font-light bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                              {project.type}
                            </span>
                            {project.caseStudyUrl && (
                              <span className="px-2 py-0.5 text-xs font-light bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                Full Case Study
                              </span>
                            )}
                          </div>

                          <div className="mb-2">
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-light">{project.category}</span>
                          </div>

                          <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-1 transition-colors line-clamp-2">
                            {project.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-300 font-light mb-2 text-sm">{project.company}</p>

                          <p className="text-gray-700 dark:text-gray-200 text-xs line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Metrics */}
                        {project.metrics && (
                          <div className="flex gap-3 pt-3 mt-3 border-t border-gray-100 dark:border-gray-700">
                            {project.metrics.slice(0, 2).map((metric, i) => (
                              <div
                                key={i}
                                className="text-center flex-1"
                              >
                                <div className="text-base font-light text-gray-900 dark:text-gray-100">
                                  {metric.value}
                                </div>
                                <div className="text-[10px] text-gray-500 dark:text-gray-400 font-light mt-0.5">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
                  Ready to Start Your Next Project?
                </h2>

                <p className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
                  Whether you need enterprise transformation or rapid AI-powered development,
                  let's discuss how we can deliver exceptional results for your organization.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:hello@p0stman.com"
                    className="px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all font-light text-lg inline-flex items-center gap-2"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                  <a
                    href="/about"
                    className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-all font-light text-lg"
                  >
                    Learn More About Me
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterV3 />

        <CaseStudyModal
          isOpen={showCaseStudyModal}
          onClose={() => setShowCaseStudyModal(false)}
          project={selectedProject}
        />
      </div>
    </HelmetProvider>
  );
}