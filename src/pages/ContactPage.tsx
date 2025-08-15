import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Mail, MapPin, Clock, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/contact/LocationMap';
import ContactFAQ from '../components/contact/ContactFAQ';
import ServicesGrid from '../components/ServicesGrid';
import AnimatedFooter from '../components/AnimatedFooter';

export default function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Contact P0STMAN | AI-Powered Product Studio</title>
          <meta name="description" content="Contact P0STMAN to discuss your project. Based in Dubai, delivering AI-powered development solutions globally. Expert guidance and support available." />
          <meta name="keywords" content="contact, AI development, Dubai, product development, tech support" />
          <meta property="og:title" content="Contact P0STMAN | AI-Powered Product Studio" />
          <meta property="og:description" content="Get in touch to discuss your project. Based in Dubai, delivering AI-powered solutions globally." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Contact P0STMAN | AI-Powered Product Studio" />
          <meta name="twitter:description" content="Get in touch to discuss your project. Based in Dubai, delivering AI-powered solutions globally." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/contact" />
        </Helmet>

        <SubHeader />

        <section ref={ref} className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-page-bg.png')] bg-cover bg-center opacity-20" />
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
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-400 font-medium">Get in Touch</span>
                </div>

                <h1 className="text-5xl font-bold mb-6">
                  Let's Build Something Amazing Together
                </h1>
                
                <p className="text-xl text-gray-300">
                  Whether you have a project in mind or want to explore possibilities, we're here to help turn your vision into reality.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-center gap-4 mt-8"
                >
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <MapPin className="w-6 h-6 text-blue-400 mb-4" />
                    <h3 className="font-medium mb-2">Location</h3>
                    <p className="text-gray-300">Dubai, UAE</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <Mail className="w-6 h-6 text-blue-400 mb-4" />
                    <h3 className="font-medium mb-2">Email</h3>
                    <a href="mailto:hello@p0stman.com" className="text-gray-300 hover:text-white transition-colors">
                      hello@p0stman.com
                    </a>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <Clock className="w-6 h-6 text-blue-400 mb-4" />
                    <h3 className="font-medium mb-2">Working Hours</h3>
                    <p className="text-gray-300">Mon - Fri, 9am - 6pm GST</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <ContactForm />
                <LocationMap />
              </div>
            </div>
          </div>
        </section>

        <ContactFAQ />
        <ServicesGrid />
        
        <AnimatedFooter />
      </div>
    </HelmetProvider>
  );
}