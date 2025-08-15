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
  Building2
} from 'lucide-react';

const primaryServices = [
  {
    title: 'AI Platform Development',
    href: '/ai-platform-development',
    icon: Bot,
    description: 'Custom AI solutions & intelligent platforms built from the ground up',
    features: ['Custom AI Models', 'API Integration', 'Scalable Architecture', 'Real-time Processing'],
    color: 'from-blue-500 to-cyan-500',
    featured: true
  },
  {
    title: 'Fractional CPO',
    href: '/fractional-cpo',
    icon: Rocket,
    description: 'Strategic product leadership and team guidance on-demand',
    features: ['Product Strategy', 'Team Leadership', 'Roadmap Planning', 'Stakeholder Management'],
    color: 'from-purple-500 to-pink-500',
    featured: true
  },
  {
    title: 'Product Strategy',
    href: '/product-strategy',
    icon: Brain,
    description: 'Vision & roadmap development for successful product launches',
    features: ['Market Research', 'Competitive Analysis', 'Go-to-Market', 'Product-Market Fit'],
    color: 'from-green-500 to-emerald-500',
    featured: true
  },
  {
    title: 'Digital Transformation',
    href: '/digital-transformation',
    icon: Globe,
    description: 'Enterprise modernization and digital process optimization',
    features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Technology Strategy'],
    color: 'from-orange-500 to-red-500',
    featured: true
  },
  {
    title: 'Website Development',
    href: '/website',
    icon: Code,
    description: 'Custom website development with AI-powered features',
    features: ['Responsive Design', 'AI Integration', 'Performance Optimization', 'SEO Ready'],
    color: 'from-yellow-500 to-orange-500',
    featured: true
  }
];

const additionalServices = [
  {
    title: 'AI Agents',
    href: '/ai-agents',
    icon: Bot,
    description: 'Intelligent automation agents for business processes',
    features: ['Process Automation', 'Custom Workflows', 'Integration Ready', '24/7 Operation'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Mobile App Development',
    href: '/mobile-app',
    icon: Smartphone,
    description: 'Native and cross-platform mobile applications',
    features: ['iOS & Android', 'Cross-platform', 'App Store Ready', 'Push Notifications'],
    color: 'from-teal-500 to-blue-500'
  },
  {
    title: 'Retainer Services',
    href: '/retainer',
    icon: Users,
    description: 'Ongoing development and maintenance partnerships',
    features: ['Monthly Retainer', 'Priority Support', 'Continuous Updates', 'Dedicated Time'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Support & Maintenance',
    href: '/support',
    icon: HeadphonesIcon,
    description: 'Ongoing support and maintenance for your projects',
    features: ['24/7 Monitoring', 'Bug Fixes', 'Performance Optimization', 'Security Updates'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Training & Workshops',
    href: '/training',
    icon: GraduationCap,
    description: 'AI and product development training for teams',
    features: ['Team Training', 'Workshops', 'Best Practices', 'Hands-on Learning'],
    color: 'from-violet-500 to-purple-500'
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
                AI-Powered
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Services</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                From strategic product leadership to hands-on development, 
                I offer comprehensive services to accelerate your digital transformation.
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
                Strategic and development services that form the foundation of successful digital products
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                Specialized Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Additional services to support your ongoing development and growth needs
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