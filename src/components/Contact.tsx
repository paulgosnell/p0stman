import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageSquare, FileText, CheckCircle, Loader2, Twitter, Linkedin, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { sendEmail } from '../lib/emailjs';
import RFPForm from './contact/RFPForm';

interface ContactProps {
  isModalOpen?: boolean;
  setIsModalOpen?: (open: boolean) => void;
  initialProjectType?: string;
}

export default function Contact({ isModalOpen: propIsModalOpen, setIsModalOpen: propSetIsModalOpen, initialProjectType }: ContactProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<'message' | 'rfp'>('message');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: initialProjectType || '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use props if provided, otherwise use local state
  const modalOpen = propIsModalOpen !== undefined ? propIsModalOpen : isModalOpen;
  const setModalOpen = propSetIsModalOpen || setIsModalOpen;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendEmail({
        name: formState.name,
        email: formState.email,
        form_type: 'general_contact',
        project_type: formState.projectType, // Ensure this field name matches
        description: formState.description
      });

      setSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setModalOpen(false);
        setFormState({
          name: '',
          email: '',
          projectType: '',
          description: ''
        });
        setSubmitted(false);
      }, 2000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenMessageForm = () => {
    setFormType('message');
    setModalOpen(true);
    setFormState(prev => ({
      ...prev,
      projectType: initialProjectType || ''
    }));
  };

  const handleOpenRFPForm = () => {
    setFormType('rfp');
    setModalOpen(true);
  };

  const inputClasses = "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-500 transition-colors";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <section ref={ref} className="py-24 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Mail className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-medium">Contact</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-light mb-6 text-white">
              Get in Touch
            </h2>
            
            <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
              Let's build something great together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
              <button
                onClick={handleOpenMessageForm}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Send a Message
              </button>
              
              <button
                onClick={handleOpenRFPForm}
                className="inline-flex items-center px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-700"
              >
                <FileText className="w-5 h-5 mr-2" />
                Submit RFP
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-6">
              <a 
                href="https://twitter.com/paulgosnell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5 text-blue-400" />
                <span>Follow on Twitter</span>
              </a>
              <a 
                href="https://linkedin.com/in/pgosnell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <Dialog
        open={modalOpen}
        onClose={() => !isSubmitting && setModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            {formType === 'message' ? (
              submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll review your message and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-light text-white">Send a Message</h3>
                    <button
                      onClick={() => setModalOpen(false)}
                      className="text-gray-400 hover:text-gray-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 mb-6">
                    <p className="text-gray-300 text-sm">
                      For fastest response, DM me directly on 
                      <a 
                        href="https://twitter.com/paulgosnell" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 mx-1"
                      >
                        Twitter
                      </a>
                      or
                      <a 
                        href="https://linkedin.com/in/pgosnell" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 mx-1"
                      >
                        LinkedIn
                      </a>
                    </p>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200 mb-6">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className={labelClasses} htmlFor="contact_name">Name</label>
                    <input
                      type="text"
                      id="contact_name"
                      name="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className={inputClasses}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClasses} htmlFor="contact_email">Email</label>
                    <input
                      type="email"
                      id="contact_email"
                      name="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className={inputClasses}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClasses} htmlFor="contact_project_type">Project Type</label>
                    <select
                      id="contact_project_type"
                      name="projectType"
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className={inputClasses}
                      required>
                      <option value="">Select project type</option>
                      <option value="AI Agents">AI Agents ($5,000)</option>
                      <option value="Retainer Service">Retainer Service ($5,000/mo)</option>
                      <option value="Mobile App">Mobile App ($20,000)</option>
                      <option value="Custom Website">Custom Website ($10,000)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClasses} htmlFor="contact_description">Message</label>
                    <textarea
                      id="contact_description"
                      name="description"
                      value={formState.description}
                      onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                      rows={4}
                      className={inputClasses}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )
            ) : (
              <RFPForm 
                onClose={() => setModalOpen(false)}
              />
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}