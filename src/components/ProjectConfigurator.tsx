import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Zap, 
  Target, 
  Clock, 
  DollarSign,
  CheckCircle,
  Sparkles,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface ProjectConfig {
  type: string;
  timeline: string;
  budget: string;
  features: string[];
  industry: string;
}

const projectTypes = [
  { id: 'mvp', label: 'MVP/Prototype', icon: <Zap className="w-6 h-6" />, desc: 'Validate your idea quickly' },
  { id: 'webapp', label: 'Web Application', icon: <Target className="w-6 h-6" />, desc: 'Full-featured platform' },
  { id: 'ai-tool', label: 'AI-Powered Tool', icon: <Sparkles className="w-6 h-6" />, desc: 'Intelligent automation' },
  { id: 'ecommerce', label: 'E-commerce', icon: <DollarSign className="w-6 h-6" />, desc: 'Online store & payments' }
];

const timelines = [
  { id: '2-4weeks', label: '2-4 weeks', desc: 'Rapid MVP delivery' },
  { id: '1-2months', label: '1-2 months', desc: 'Full-featured build' },
  { id: '3-6months', label: '3-6 months', desc: 'Complex platform' }
];

const budgets = [
  { id: '10-25k', label: '$10k - $25k', desc: 'MVP & validation' },
  { id: '25-50k', label: '$25k - $50k', desc: 'Production-ready' },
  { id: '50k+', label: '$50k+', desc: 'Enterprise scale' }
];

const features = [
  'User Authentication', 'Payment Processing', 'AI Integration', 'Real-time Updates',
  'Mobile Responsive', 'Admin Dashboard', 'API Integration', 'Analytics',
  'Email Automation', 'File Upload', 'Search Functionality', 'Multi-language'
];

export default function ProjectConfigurator({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState<ProjectConfig>({
    type: '',
    timeline: '',
    budget: '',
    features: [],
    industry: ''
  });
  const [showResults, setShowResults] = useState(false);

  const handleFeatureToggle = (feature: string) => {
    setConfig(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const generateEstimate = () => {
    const baseWeeks = config.timeline === '2-4weeks' ? 3 : config.timeline === '1-2months' ? 6 : 12;
    const complexityMultiplier = config.features.length * 0.1 + 1;
    const estimatedWeeks = Math.ceil(baseWeeks * complexityMultiplier);
    
    return {
      timeline: `${estimatedWeeks} weeks`,
      confidence: '85%',
      approach: config.type === 'ai-tool' ? 'AI-First Development' : 'Rapid Prototyping'
    };
  };

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (showResults) {
    const estimate = generateEstimate();
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Your Project Blueprint</h3>
            <p className="text-gray-300">AI-generated estimate based on your requirements</p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Project Overview</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-400 text-sm">Type</span>
                  <p className="text-white font-medium">{projectTypes.find(t => t.id === config.type)?.label}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Timeline</span>
                  <p className="text-white font-medium">{estimate.timeline}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Budget Range</span>
                  <p className="text-white font-medium">{config.budget}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Confidence</span>
                  <p className="text-green-400 font-medium">{estimate.confidence}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Selected Features ({config.features.length})</h4>
              <div className="flex flex-wrap gap-2">
                {config.features.map(feature => (
                  <span key={feature} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h4 className="text-lg font-semibold text-white">Recommended Approach</h4>
              </div>
              <p className="text-gray-300">{estimate.approach} with iterative delivery and weekly demos</p>
            </div>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all"
              onClick={() => window.open('https://calendly.com/your-link', '_blank')}
            >
              <Calendar className="w-5 h-5" />
              Book Strategy Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-white/10 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-all border border-white/20"
              onClick={() => window.open('mailto:hello@p0stman.com?subject=Project Inquiry&body=Hi Paul, I used your project configurator and would like to discuss my project.', '_blank')}
            >
              <MessageSquare className="w-5 h-5" />
              Send Details
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Project Configurator</h3>
            <p className="text-gray-400">Step {step} of 4</p>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i <= step ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">What type of project are you building?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {projectTypes.map(type => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      config.type === type.id
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}
                    onClick={() => setConfig(prev => ({ ...prev, type: type.id }))}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {type.icon}
                      <span className="font-semibold text-white">{type.label}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{type.desc}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">What's your timeline?</h4>
              <div className="space-y-4 mb-8">
                {timelines.map(timeline => (
                  <motion.button
                    key={timeline.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      config.timeline === timeline.id
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}
                    onClick={() => setConfig(prev => ({ ...prev, timeline: timeline.id }))}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-white">{timeline.label}</span>
                        <p className="text-gray-400 text-sm">{timeline.desc}</p>
                      </div>
                      <Clock className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">What's your budget range?</h4>
              <div className="space-y-4 mb-8">
                {budgets.map(budget => (
                  <motion.button
                    key={budget.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      config.budget === budget.id
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}
                    onClick={() => setConfig(prev => ({ ...prev, budget: budget.id }))}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-white">{budget.label}</span>
                        <p className="text-gray-400 text-sm">{budget.desc}</p>
                      </div>
                      <DollarSign className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">Which features do you need?</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {features.map(feature => (
                  <motion.button
                    key={feature}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-3 rounded-lg border transition-all text-sm ${
                      config.features.includes(feature)
                        ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                        : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                    }`}
                    onClick={() => handleFeatureToggle(feature)}
                  >
                    {feature}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 ${
              step === 1
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }`}
            onClick={prevStep}
            disabled={step === 1}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={nextStep}
            disabled={
              (step === 1 && !config.type) ||
              (step === 2 && !config.timeline) ||
              (step === 3 && !config.budget) ||
              (step === 4 && config.features.length === 0)
            }
          >
            {step === 4 ? 'Generate Estimate' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}