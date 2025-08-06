import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
  Code
} from 'lucide-react';
import SubHeader from '../components/SubHeader';
import CaseStudyModal from '../components/modals/CaseStudyModal';

// All projects data
const allProjects = [
  // Enterprise Projects
  {
    id: 'fab',
    title: 'Enterprise Digital Transformation',
    company: 'First Abu Dhabi Bank',
    category: 'Banking & Finance',
    type: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/First_Abu_Dhabi_Bank_logo.svg/1200px-First_Abu_Dhabi_Bank_logo.svg.png',
    description: 'Led a comprehensive digital transformation initiative that evolved from a single innovation lab project into an 18-month enterprise-wide transformation program.',
    challenge: 'FAB needed to modernize their digital infrastructure and create scalable, reusable systems across multiple departments while maintaining security and compliance standards.',
    solution: 'Built enterprise-grade platforms with unified design systems and code libraries. Established cross-functional teams and agile delivery processes to ensure consistent, high-quality output.',
    results: [
      'Scaled from 1 pilot project to 40+ person transformation team',
      'Delivered enterprise-grade platforms across multiple departments',
      'Created reusable design systems and unified code libraries',
      'Established one of the region\'s biggest digital transformations',
      'Improved development efficiency by 60% through standardization',
      'Successfully delivered 18 months of continuous innovation'
    ],
    metrics: [
      { label: 'Team Scale', value: '1→40', icon: <Users className="w-6 h-6" /> },
      { label: 'Duration', value: '18mo', icon: <Calendar className="w-6 h-6" /> },
      { label: 'Efficiency Gain', value: '60%', icon: <TrendingUp className="w-6 h-6" /> }
    ],
    technologies: ['React', 'Node.js', 'Azure', 'Design Systems', 'Microservices', 'DevOps'],
    timeline: '18 months',
    teamSize: '40+ people'
  },
  {
    id: 'al-arabiya',
    title: 'News Platform Redesign',
    company: 'Al Arabiya',
    category: 'Media & Broadcasting',
    type: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2000&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Al_Arabiya_Logo.svg/1200px-Al_Arabiya_Logo.svg.png',
    description: 'Complete platform redesign and rebuild of Al Arabiya\'s news experience, delivered during the global pandemic with a distributed international team.',
    challenge: 'Al Arabiya needed a modern, scalable news platform that could handle high traffic loads while providing a customizable, multi-platform experience during unprecedented global events.',
    solution: 'Led a global team through UX research, development, testing, and content delivery. Implemented a future-ready architecture with customizable components and multi-platform support.',
    results: [
      'Successfully delivered complete platform redesign during pandemic',
      'Led global team across multiple time zones and lockdowns',
      'Created future-ready, customizable multi-platform experience',
      'Achieved high user satisfaction and stakeholder approval',
      'Improved page load speeds by 40%',
      'Implemented real-time content management system'
    ],
    metrics: [
      { label: 'Load Speed', value: '+40%', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'Global Team', value: '15+', icon: <Users className="w-6 h-6" /> },
      { label: 'Platforms', value: 'Multi', icon: <Globe className="w-6 h-6" /> }
    ],
    technologies: ['React', 'Next.js', 'GraphQL', 'CMS', 'CDN', 'Real-time APIs'],
    timeline: '8 months',
    teamSize: '15+ global team'
  },
  {
    id: 'etihad',
    title: 'Booking Flow Optimization',
    company: 'Etihad Airways',
    category: 'Travel & Aviation',
    type: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Etihad-Airways-Logo.png',
    description: 'Complete overhaul of Etihad Airways\' booking system, replacing legacy flows with a user-centered journey that delivered immediate, measurable results.',
    challenge: 'The existing booking flow was outdated, complex, and didn\'t match how customers actually wanted to book flights, resulting in high abandonment rates.',
    solution: 'Conducted user research to understand booking behaviors, then rebuilt the entire flow with a focus on simplicity, speed, and user intent matching.',
    results: [
      '25% increase in booking conversions overnight',
      'Reduced booking abandonment by 35%',
      'Improved user satisfaction scores by 40%',
      'Decreased support tickets related to booking issues',
      'Faster booking completion times',
      'Mobile-optimized experience with 60% mobile conversion improvement'
    ],
    metrics: [
      { label: 'Conversion', value: '+25%', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'Mobile Boost', value: '+60%', icon: <Smartphone className="w-6 h-6" /> },
      { label: 'Launch Time', value: '1 Day', icon: <Zap className="w-6 h-6" /> }
    ],
    technologies: ['React', 'Node.js', 'Payment APIs', 'A/B Testing', 'Analytics', 'Mobile-First'],
    timeline: '4 months',
    teamSize: '8 people'
  },
  // AI-Built Projects (link to existing case studies)
  {
    id: 'chilled-crm',
    title: 'Chilled CRM',
    company: 'AI-Powered CRM Platform',
    category: 'SaaS & AI',
    type: 'AI-Built',
    image: 'https://mediacdn.carrd.co/assets/images/image06.png',
    logo: 'https://chilledcrm.com/favicon.svg',
    description: 'Next-generation CRM system built with AI at its core, delivering unprecedented efficiency and insights. Built in 4 weeks using AI-powered development.',
    caseStudyUrl: '/case-study/chilled-crm',
    metrics: [
      { label: 'Build Time', value: '4 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'Cost Saving', value: '70%', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'Team Size', value: '1', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'rhythm',
    title: 'Rhythm',
    company: 'AI-Powered Running Coach',
    category: 'HealthTech & AI',
    type: 'AI-Built',
    image: 'https://mediacdn.carrd.co/assets/images/image13.png',
    logo: 'https://ai-running-app.netlify.app/favicon.svg',
    description: 'Find your perfect running rhythm with AI-powered coaching and adaptive music. Revolutionary fitness app built in just 1 week using AI development.',
    caseStudyUrl: '/case-study/rhythm',
    metrics: [
      { label: 'Build Time', value: '1 week', icon: <Zap className="w-6 h-6" /> },
      { label: 'Performance', value: '+45%', icon: <TrendingUp className="w-6 h-6" /> },
      { label: 'Team Size', value: '1', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'harmony',
    title: 'Harmony',
    company: 'Music Collaboration Platform',
    category: 'Music & AI',
    type: 'AI-Built',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2000&q=80',
    description: 'Revolutionary music collaboration platform that connects artists worldwide with AI-powered matching and real-time collaboration tools.',
    caseStudyUrl: '/case-study/harmony',
    metrics: [
      { label: 'Build Time', value: '2 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'Artists', value: '1000+', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'clinic-book',
    title: 'ClinicBook',
    company: 'Healthcare Booking System',
    category: 'HealthTech',
    type: 'AI-Built',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=2000&q=80',
    description: 'Comprehensive healthcare booking and management system with AI-powered scheduling optimization and patient management.',
    caseStudyUrl: '/case-study/clinic-book',
    metrics: [
      { label: 'Build Time', value: '3 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'Efficiency', value: '+80%', icon: <TrendingUp className="w-6 h-6" /> }
    ]
  },
  {
    id: 'serenity',
    title: 'Serenity',
    company: 'Wellness & Meditation App',
    category: 'HealthTech & AI',
    type: 'AI-Built',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80',
    description: 'AI-powered wellness and meditation platform with personalized mindfulness programs and mental health tracking.',
    caseStudyUrl: '/case-study/serenity',
    metrics: [
      { label: 'Build Time', value: '2 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'User Retention', value: '85%', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'fitlink',
    title: 'Fitlink',
    company: 'Social Fitness Platform',
    category: 'HealthTech & Social',
    type: 'AI-Built',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=80',
    description: 'Social fitness platform connecting fitness enthusiasts worldwide with AI-powered workout recommendations and community features.',
    caseStudyUrl: '/case-study/fitlink',
    metrics: [
      { label: 'Countries', value: '30+', icon: <Globe className="w-6 h-6" /> },
      { label: 'Active Users', value: '50K+', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'barber-booking',
    title: 'Barber Booking System',
    company: 'Salon Management Platform',
    category: 'Business Tools',
    type: 'AI-Built',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=80',
    description: 'Complete salon and barber shop management system with AI-powered scheduling, customer management, and business analytics.',
    caseStudyUrl: '/case-study/barber-booking',
    metrics: [
      { label: 'Build Time', value: '2 weeks', icon: <Zap className="w-6 h-6" /> },
      { label: 'Bookings', value: '+200%', icon: <TrendingUp className="w-6 h-6" /> }
    ]
  }
];

const categories = ['All', 'Enterprise', 'AI-Built', 'HealthTech', 'SaaS', 'Media'];

export default function Projects() {
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
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Projects & Case Studies | Paul Gosnell - AI Product Development</title>
          <meta name="description" content="Explore Paul Gosnell's portfolio of enterprise transformations and AI-built products. From banking platforms to fitness apps, see real results and measurable impact." />
          <meta name="keywords" content="AI development projects, enterprise transformation, case studies, product development portfolio" />
          <meta property="og:title" content="Projects & Case Studies | Paul Gosnell" />
          <meta property="og:description" content="Portfolio of enterprise transformations and AI-built products with real results and measurable impact." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/projects" />
        </Helmet>

        <SubHeader />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
          </div>

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Building2 className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-400 font-medium">Portfolio</span>
                </div>

                <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-md">
                  Projects & Case Studies
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                  From enterprise transformations to AI-built products, explore a portfolio of real projects 
                  with measurable impact across banking, media, health, and technology sectors.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-1">12+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-1">8</div>
                    <div className="text-sm text-gray-400">Industries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">40+</div>
                    <div className="text-sm text-gray-400">Team Members Led</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">80%</div>
                    <div className="text-sm text-gray-400">Faster with AI</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-gray-50">
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
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
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
        <section ref={ref} className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer bg-white"
                    onClick={() => openCaseStudy(project)}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          project.type === 'Enterprise' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-purple-600 text-white'
                        }`}>
                          {project.type}
                        </span>
                      </div>

                      {/* Logo */}
                      {project.logo && (
                        <div className="absolute top-4 right-4">
                          <img
                            src={project.logo}
                            alt={`${project.company} logo`}
                            className="h-6 w-auto filter drop-shadow-lg opacity-90"
                          />
                        </div>
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 font-medium mb-3">{project.company}</p>
                      
                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Metrics */}
                      {project.metrics && (
                        <div className="flex gap-4 pt-4 border-t border-gray-100">
                          {project.metrics.slice(0, 2).map((metric, i) => (
                            <div key={i} className="text-center">
                              <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                              <div className="text-xs text-gray-500">{metric.label}</div>
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
        <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  Ready to Start Your Next Project?
                </h2>
                
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Whether you need enterprise transformation or rapid AI-powered development, 
                  let's discuss how we can deliver exceptional results for your organization.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:hello@p0stman.com"
                    className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-[1.02] font-medium text-lg inline-flex items-center gap-2"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="/about"
                    className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-medium text-lg"
                  >
                    Learn More About Me
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CaseStudyModal
          isOpen={showCaseStudyModal}
          onClose={() => setShowCaseStudyModal(false)}
          project={selectedProject}
        />
      </div>
    </HelmetProvider>
  );
}