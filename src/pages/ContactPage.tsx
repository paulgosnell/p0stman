import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Mail, MapPin, Clock, Twitter, Linkedin, ArrowRight, Users, Zap, Award, Building2 } from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import ConversationalContactForm from '../components/contact/ConversationalContactForm';
import LocationMap from '../components/contact/LocationMap';
import ContactFAQ from '../components/contact/ContactFAQ';
import FooterV3 from '../components/v3/FooterV3';
import SectionVoiceAgent from '../components/voice-agent/SectionVoiceAgent';
import FloatingGuideAgent from '../components/FloatingGuideAgent';
import TestimonialCard from '../components/contact/TestimonialCard';
import ExitIntentPopup from '../components/contact/ExitIntentPopup';
import { getVoiceAgentConfig } from '../config/voiceAgentPrompts';
import { getContactContext } from '../utils/contactContext';

export default function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ctaConfig = getVoiceAgentConfig('cta');

  // Get context-aware messaging
  const [context, setContext] = useState(getContactContext());
  const [showExitIntent, setShowExitIntent] = useState(true);

  useEffect(() => {
    // Get referrer from document
    const referrer = document.referrer;
    setContext(getContactContext(referrer));
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Helmet>
          <title>Contact P0STMAN | AI-Powered Product Studio</title>
          <meta name="description" content="Contact P0STMAN to discuss your project. Based in London, UK, delivering AI-powered development solutions globally. Expert guidance and support available." />
          <meta name="keywords" content="contact, AI development, London, UK, product development, tech support" />
          <meta property="og:title" content="Contact P0STMAN | AI-Powered Product Studio" />
          <meta property="og:description" content="Get in touch to discuss your project. Based in London, UK, delivering AI-powered solutions globally." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Contact P0STMAN | AI-Powered Product Studio" />
          <meta name="twitter:description" content="Get in touch to discuss your project. Based in London, UK, delivering AI-powered solutions globally." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/contact" />
        </Helmet>

        <HeaderV3Global darkMode={true} />

        {/* Context-Aware Hero */}
        <section ref={ref} className="relative min-h-[60vh] flex items-center bg-black text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
          </div>

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Mail className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-400 font-light text-xs tracking-[0.3em] uppercase">Get in Touch</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white leading-tight">
                  {context.title}
                </h1>

                <p className="text-xl text-gray-300 font-light mb-4 leading-relaxed">
                  {context.subtitle}
                </p>

                <p className="text-lg text-gray-400 font-light mb-8">
                  {context.proof}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
                >
                  <a
                    href="#contact-form"
                    className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-all font-light text-lg"
                  >
                    Schedule Free Consultation
                  </a>
                  <a
                    href="/case-studies"
                    className="px-8 py-4 bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all font-light text-lg"
                  >
                    View Our Work
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="py-12 bg-gray-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-8 h-8 text-gray-400 dark:text-gray-400" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 mb-2">
                  2,500+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-light">
                  Projects Delivered
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <Zap className="w-8 h-8 text-gray-400 dark:text-gray-400" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 mb-2">
                  6 Days
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-light">
                  Average MVP Time
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <Award className="w-8 h-8 text-gray-400 dark:text-gray-400" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 mb-2">
                  $5K
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-light">
                  Starting Price
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <Bot className="w-8 h-8 text-gray-400 dark:text-gray-400" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 mb-2">
                  18+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-light">
                  Case Studies
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-3">
                What Our Clients Say
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-light">
                Real results from real projects
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="P0STMAN built our AI website generator in 6 days. We now serve 1000+ active users who have built 2,500+ websites."
                author="Chilled Sites"
                role="Founder"
                result="2,500+ websites built"
              />
              <TestimonialCard
                quote="The healthcare platform reduced our no-show rates by 35% in the first month. Patient satisfaction increased significantly."
                author="DoH Health"
                role="Operations Director"
                result="35% reduced no-shows"
              />
              <TestimonialCard
                quote="Enterprise-grade security, rapid delivery, and seamless integration. Exactly what we needed for our banking platform."
                author="FAB Bank"
                role="Digital Innovation Lead"
                result="Enterprise security certified"
              />
            </div>
          </div>
        </section>

        {/* Contact Form Section - 2 Column Layout */}
        <section id="contact-form" className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column - Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ConversationalContactForm />

                  {/* Voice Agent Alternative */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-8 p-6 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600"
                  >
                    <h3 className="text-lg font-light text-gray-900 dark:text-gray-100 mb-2">
                      Prefer to Talk Instead?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-light text-sm mb-4">
                      Chat with our AI assistant to discuss your project and get instant feedback.
                    </p>
                    <SectionVoiceAgent
                      section="cta"
                      prompt={ctaConfig.prompt}
                      firstMessage={ctaConfig.firstMessage}
                      placement="inline"
                      buttonText="Start Voice Conversation"
                      color="blue"
                      icon="🎤"
                      showTranscript={false}
                      maxDurationSeconds={180}
                      maxTurns={8}
                    />
                  </motion.div>
                </motion.div>

                {/* Right Column - Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {/* Company Info */}
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-light text-gray-900 dark:text-gray-100 mb-6">
                      Contact Information
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Building2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
                        <div>
                          <p className="text-gray-900 dark:text-gray-100 font-light">Thrive Venture Labs Ltd</p>
                          <p className="text-gray-500 dark:text-gray-400 font-light text-sm">trading as P0STMAN</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
                        <div>
                          <p className="text-gray-600 dark:text-gray-300 font-light">3rd Floor, 86-90 Paul Street</p>
                          <p className="text-gray-600 dark:text-gray-300 font-light">London, EC2A 4NE</p>
                          <p className="text-gray-600 dark:text-gray-300 font-light">United Kingdom</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
                        <div>
                          <a href="mailto:hello@p0stman.com" className="text-gray-600 dark:text-gray-300 font-light hover:text-gray-900 dark:hover:text-white transition-colors">
                            hello@p0stman.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
                        <div>
                          <p className="text-gray-600 dark:text-gray-300 font-light">Monday - Friday</p>
                          <p className="text-gray-600 dark:text-gray-300 font-light">9:00 AM - 6:00 PM GMT</p>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-light mb-4">Follow us</p>
                      <div className="flex gap-4">
                        <a
                          href="https://twitter.com/p0stman"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-100 dark:bg-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                        >
                          <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-300" strokeWidth={1.5} />
                        </a>
                        <a
                          href="https://linkedin.com/company/p0stman"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-100 dark:bg-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-6 h-6 text-yellow-500" strokeWidth={1.5} />
                      <h3 className="text-xl font-light text-gray-900 dark:text-gray-100">Quick Response</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-light mb-4">
                      We respond to all enquiries within 24 hours during business days. For urgent matters, start a voice conversation with our AI assistant.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                        <div className="text-2xl font-light text-gray-900 dark:text-gray-100">24h</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-light">Response Time</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                        <div className="text-2xl font-light text-gray-900 dark:text-gray-100">6 days</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-light">Avg. MVP Build</div>
                      </div>
                    </div>
                  </div>

                  {/* Location Map */}
                  <LocationMap />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <ContactFAQ />

        <FooterV3 />
        <FloatingGuideAgent />

        {/* Exit Intent Popup */}
        {showExitIntent && (
          <ExitIntentPopup
            onClose={() => setShowExitIntent(false)}
            onSchedule={() => {
              setShowExitIntent(false);
              // Analytics tracking
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'exit_intent_schedule_clicked');
              }
            }}
          />
        )}
      </div>
    </HelmetProvider>
  );
}