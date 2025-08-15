import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import AnimatedFooter from '../components/AnimatedFooter';
import { 
  FileText, 
  Upload, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Target,
  Users
} from 'lucide-react';

const proposalOptions = [
  {
    id: 'rfp',
    title: 'Submit Your RFP/Brief',
    description: 'Already have a detailed project brief or RFP? Upload it here for a custom proposal.',
    icon: <Upload className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
    features: [
      'Upload existing RFP documents',
      'Detailed project specifications',
      'Custom proposal within 24 hours',
      'Professional project analysis'
    ],
    cta: 'Upload RFP',
    action: 'upload'
  },
  {
    id: 'builder',
    title: 'Proposal Builder',
    description: 'Answer a few simple questions and get a tailored proposal within hours.',
    icon: <Target className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-600',
    features: [
      'Step-by-step project builder',
      'AI-powered requirements analysis',
      'Instant cost estimation',
      'Proposal delivered in 2-4 hours'
    ],
    cta: 'Start Builder',
    action: 'builder'
  }
];

const recentProposals = [
  {
    title: 'Work Order Management Platform',
    client: 'Enterprise Client',
    type: 'SaaS Platform',
    status: 'Completed',
    link: '/proposals/documents/work-order-proposal'
  },
  {
    title: 'AI-Powered CRM System',
    client: 'Tech Startup',
    type: 'Custom Development',
    status: 'In Progress',
    link: '/proposals/generic'
  }
];

export default function Proposals() {
  const [showRFPForm, setShowRFPForm] = useState(false);
  const [showBuilder, setShowBuilder] = useState(false);

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
                <FileText className="w-8 h-8 text-blue-400" />
                <span className="text-blue-400 font-medium text-lg">Project Proposals</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get Your Custom
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Proposal</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Whether you have a detailed RFP or just an idea, get a professional proposal 
                tailored to your project needs within hours.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Fast turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Personalized approach</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proposal Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Choose Your Path
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select the option that best fits your current project stage
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {proposalOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                    {option.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => {
                      if (option.action === 'upload') {
                        setShowRFPForm(true);
                      } else {
                        setShowBuilder(true);
                      }
                    }}
                    className={`w-full bg-gradient-to-r ${option.color} text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                  >
                    {option.cta}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Proposals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Sample Proposals
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See examples of detailed proposals we've created for various project types
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {recentProposals.map((proposal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {proposal.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {proposal.client} • {proposal.type}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      proposal.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {proposal.status}
                    </span>
                  </div>
                  
                  <Link
                    to={proposal.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Proposal
                    <ArrowRight className="w-4 h-4" />
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
              <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a detailed, professional proposal tailored to your specific needs. 
                No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowRFPForm(true)}
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Submit RFP
                </button>
                <button
                  onClick={() => setShowBuilder(true)}
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Use Proposal Builder
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedFooter />

      {/* Modals would go here - for now just placeholder */}
      {showRFPForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">RFP Upload</h3>
            <p className="text-gray-600 mb-6">
              This feature is coming soon. For now, please email your RFP to paul@p0stman.com
            </p>
            <button
              onClick={() => setShowRFPForm(false)}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showBuilder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Proposal Builder</h3>
            <p className="text-gray-600 mb-6">
              This feature is coming soon. For now, please contact paul@p0stman.com to discuss your project.
            </p>
            <button
              onClick={() => setShowBuilder(false)}
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}