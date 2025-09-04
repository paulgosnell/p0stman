import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import AnimatedFooter from '../components/AnimatedFooter';
import { 
  Bot, 
  Rocket, 
  Brain, 
  Globe, 
  Code, 
  Smartphone, 
  Users, 
  HeadphonesIcon, 
  GraduationCap,
  ArrowRight,
  Zap,
  CheckCircle,
  Target,
  Building2,
  Sparkles
} from 'lucide-react';

const primaryServices = [
  {
    title: 'Fractional Product Leadership',
    href: '/fractional-cpo',
    icon: Brain,
    description: 'Hands-on product direction, leadership, and team support when you need extra firepower.',
    features: ['Product Strategy', 'Team Leadership', 'Stakeholder Management', 'Go-to-Market'],
    color: 'from-blue-500 to-cyan-500',
    featured: true
  },
  {
    title: 'MVP Launches',
    href: '/contact',
    icon: Rocket,
    description: 'Fast, focused builds that validate your idea and get you to market in weeks, not months.',
    features: ['Prototypes', 'Proof-of-Concepts', 'Beta Launches'],
    color: 'from-purple-500 to-pink-500',
    featured: true
  },
  {
    title: 'Websites',
    href: '/website',
    icon: Globe,
    description: 'Modern, responsive websites that convert visitors into customers.',
    features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Performance Focused'],
    color: 'from-green-500 to-emerald-500',
    featured: true
  },
  {
    title: 'Mobile Apps',
    href: '/mobile-app',
    icon: Smartphone,
    description: 'Native-quality mobile apps built with modern cross-platform technology.',
    features: ['iOS & Android', 'Native Performance', 'Push Notifications', 'Offline Support'],
    color: 'from-indigo-500 to-blue-500',
    featured: true
  },
  {
    title: 'Creative Prototypes',
    href: '/contact',
    icon: Zap,
    description: 'Live, interactive demos that win pitches, unlock budget, and excite stakeholders.',
    features: ['Campaign Mockups', 'Pitch Support', 'Innovation Labs'],
    color: 'from-orange-500 to-red-500',
    featured: true
  }
];

const additionalServices = [
  {
    title: 'Enterprise Delivery',
    href: '/contact',
    icon: Building2,
    description: 'Reliable support for large-scale, complex projects with multiple stakeholders.',
    features: ['Scalable Architecture', 'Integration', 'DevOps'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Digital Transformation',
    href: '/digital-transformation',
    icon: Target,
    description: 'Consulting and delivery to modernise systems and teams.',
    features: ['AI Strategy', 'Process Optimisation', 'Roadmaps', 'Change Management'],
    color: 'from-teal-500 to-blue-500'
  },
  {
    title: 'AI-Powered Speed',
    href: '/ai-agents',
    icon: Bot,
    description: 'Smarter, faster delivery with AI tools woven into our process.',
    features: ['Automation', 'Content Generation', 'AI Integrations'],
    color: 'from-cyan-500 to-blue-500'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <SubHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Target className="w-8 h-8 text-blue-400" />
                <span className="text-blue-400 font-medium text-lg">Complete Service Portfolio</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Complete
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Services</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                From strategy to delivery, we cover the full spectrum of digital product development.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>AI-powered delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>Rapid execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Enterprise quality</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Essential services for launching and scaling digital products successfully
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {primaryServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link
                    to={service.href}
                    className="block bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 h-full"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Enterprise & Transformation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced services for large-scale projects and organizational transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link
                    to={service.href}
                    className="block bg-gray-50 rounded-2xl shadow-sm p-8 hover:shadow-lg hover:bg-white transition-all transform hover:-translate-y-1 h-full"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Rocket className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss which services align with your goals and how we can 
                accelerate your project delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get In Touch
                </Link>
                <Link
                  to="/case-studies"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedFooter />
    </div>
  );
}