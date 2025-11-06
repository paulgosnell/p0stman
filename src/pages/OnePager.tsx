import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OnePager() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>P0STMAN | We Build Fast. You Scale Fast.</title>
        <meta name="description" content="Built a yacht management platform in 4 weeks. Agency quoted 3 months. 1000+ products shipped over 20 years with AI workflows." />
      </Helmet>

      {/* Print Button - Hidden in print */}
      <div className="fixed top-6 right-6 z-50 no-print">
        <button
          onClick={handlePrint}
          className="px-6 py-3 bg-gray-900 text-white rounded-full font-light text-sm hover:bg-black transition-colors flex items-center gap-2"
        >
          <Download size={16} />
          Download PDF
        </button>
      </div>

      <div className="min-h-screen bg-white">
        {/* Hero Section - Luxury Magazine Style */}
        <section className="relative py-32 md:py-48 px-8 overflow-hidden bg-white">
          <div className="container mx-auto max-w-[90rem]">
            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h1 className="text-3xl font-light tracking-tight text-gray-900 mb-3">
                P0STMAN
              </h1>
              <p className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                AI-Powered Product Studio
              </p>
            </motion.div>

            {/* Main Headline - Luxury Serif */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-24 text-center"
            >
              <h2
                className="text-5xl md:text-7xl lg:text-8xl font-light mb-12 text-gray-900 leading-[1.05] tracking-tight max-w-6xl mx-auto"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Built a yacht management platform in 4 weeks.
                <br />
                <span className="text-gray-500">Agency quoted 3 months.</span>
              </h2>

              {/* Stats Bar - Magazine Style */}
              <div className="flex flex-wrap justify-center gap-12 text-gray-600 text-sm font-light mb-16">
                <div className="border-l-2 border-gray-900 pl-4 text-left">
                  <div className="text-2xl font-light text-gray-900" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                    1000+
                  </div>
                  <div className="text-xs tracking-wide">Products Shipped</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-4 text-left">
                  <div className="text-2xl font-light text-gray-900" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                    20
                  </div>
                  <div className="text-xs tracking-wide">Years Experience</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-4 text-left">
                  <div className="text-2xl font-light text-gray-900" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                    40%
                  </div>
                  <div className="text-xs tracking-wide">Faster Delivery</div>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto">
                We've shipped 1000+ products over 20 years. Now we do it with AI workflows — same quality, 40% faster, leaner cost.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Recent Builds Section - Luxury Layout */}
        <section className="py-32 md:py-48 px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light block mb-8">
                Recent Builds
              </span>
              <h3
                className="text-4xl md:text-6xl font-light text-gray-900 leading-tight max-w-4xl"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Production-Ready Platforms
              </h3>
            </motion.div>

            <div className="space-y-32">
              {/* Yacht OS */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="border-t-2 border-gray-200 pt-16"
              >
                {/* Header Row */}
                <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12">
                  <div className="md:col-span-3">
                    <div
                      className="text-5xl md:text-6xl font-light text-gray-900"
                      style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                    >
                      01
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h4 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                      Yacht OS — AI-Native Platform
                    </h4>
                    <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                      <p><span className="text-gray-900 font-medium">What:</span> AI-powered yacht management with vision, voice, and chat integration</p>
                      <p><span className="text-gray-900 font-medium">Timeline:</span> 4 weeks, production-ready</p>
                    </div>
                  </div>
                </div>

                {/* Full-Width Image - Magazine Style */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative aspect-[16/9] overflow-hidden"
                >
                  <img
                    src="/agents/yachtos-2.png"
                    alt="Yacht OS Dashboard"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>

                {/* Pull Quote Below Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-12 gap-8 md:gap-16 mt-12"
                >
                  <div className="md:col-span-3"></div>
                  <div className="md:col-span-9">
                    <div className="border-l-4 border-gray-900 pl-6">
                      <p className="text-xl md:text-2xl text-gray-900 font-light italic leading-relaxed">
                        Agency quoted 3 months with 10-person team. We did it with 3.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* ADHD App - Offset Layout */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="border-t-2 border-gray-200 pt-16"
              >
                {/* Header Row */}
                <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12">
                  <div className="md:col-span-3">
                    <div
                      className="text-5xl md:text-6xl font-light text-gray-900"
                      style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                    >
                      02
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h4 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                      ADHD Coaching App — Mental Health Platform
                    </h4>
                    <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                      <p><span className="text-gray-900 font-medium">What:</span> Mental health app + website, trained on professional coaching frameworks</p>
                      <p><span className="text-gray-900 font-medium">Timeline:</span> 4 weeks (2 sprints)</p>
                    </div>
                  </div>
                </div>

                {/* Offset Image Layout - Editorial Style */}
                <div className="grid md:grid-cols-12 gap-8 md:gap-16">
                  <div className="md:col-span-2"></div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:col-span-10 relative aspect-[16/10] overflow-hidden"
                  >
                    <img
                      src="/agents/pathfinder-1.png"
                      alt="ADHD Coaching Platform"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>

                {/* Pull Quote Below Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-12 gap-8 md:gap-16 mt-12"
                >
                  <div className="md:col-span-3"></div>
                  <div className="md:col-span-9">
                    <div className="border-l-4 border-gray-900 pl-6">
                      <p className="text-xl md:text-2xl text-gray-900 font-light italic leading-relaxed">
                        Live testing, positive feedback from real users already
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Luxury Sweden - Centered Layout */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="border-t-2 border-gray-200 pt-16"
              >
                {/* Header Row */}
                <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12">
                  <div className="md:col-span-3">
                    <div
                      className="text-5xl md:text-6xl font-light text-gray-900"
                      style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                    >
                      03
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h4 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                      Luxury Sweden Travel — AI Concierge Website
                    </h4>
                    <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                      <p><span className="text-gray-900 font-medium">What:</span> Context-aware AI concierge (knows if you clicked map/event/review), auto-populates CRM</p>
                      <p><span className="text-gray-900 font-medium">Timeline:</span> Weeks, not months</p>
                    </div>
                  </div>
                </div>

                {/* Centered Image Placeholder - Editorial Style */}
                <div className="grid md:grid-cols-12 gap-8 md:gap-16">
                  <div className="md:col-span-1"></div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:col-span-10 relative aspect-[16/9] overflow-hidden border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4 text-gray-300">✦</div>
                      <span className="text-gray-400 font-light text-sm tracking-wider uppercase">Coming Soon</span>
                    </div>
                  </motion.div>
                  <div className="md:col-span-1"></div>
                </div>

                {/* Pull Quote Below Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-12 gap-8 md:gap-16 mt-12"
                >
                  <div className="md:col-span-3"></div>
                  <div className="md:col-span-9">
                    <div className="border-l-4 border-gray-900 pl-6">
                      <p className="text-xl md:text-2xl text-gray-900 font-light italic leading-relaxed">
                        Client used it at trade show this week — already getting praise for AI UX
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do Section - Minimal Grid */}
        <section className="py-32 md:py-48 px-8 bg-white border-t-2 border-gray-200">
          <div className="container mx-auto max-w-[90rem]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light block mb-8">
                What We Do
              </span>
              <h3
                className="text-4xl md:text-6xl font-light text-gray-900 leading-tight"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Capabilities
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="border-t-2 border-gray-900 pt-6"
              >
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Websites & Apps
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  MVP to enterprise scale
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="border-t-2 border-gray-900 pt-6"
              >
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  AI Integration
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  Voice, chat, agents, automation
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="border-t-2 border-gray-900 pt-6"
              >
                <h4 className="text-xl font-medium text-gray-900 mb-3">
                  Production-Ready Code
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  In weeks, not months
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section - Elegant Black */}
        <section className="py-32 md:py-48 px-8 bg-gray-900 text-white">
          <div className="container mx-auto max-w-[90rem] text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-5xl md:text-7xl font-light mb-16 leading-tight"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Your timeline. Your budget.
                <br />
                <span className="text-gray-400">Our speed.</span>
              </h3>

              <div className="space-y-6 text-gray-300 mb-16">
                <div className="flex items-center justify-center gap-3 text-lg font-light">
                  <a href="https://p0stman.com" className="hover:text-white transition-colors flex items-center gap-2">
                    p0stman.com
                    <ArrowRight size={18} />
                  </a>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-base font-light">
                  <a href="mailto:contact@p0stman.com" className="hover:text-white transition-colors">
                    contact@p0stman.com
                  </a>
                  <span className="hidden md:block text-gray-600">|</span>
                  <a href="https://linkedin.com/company/p0stman" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="pt-12 border-t border-gray-800">
                <p className="text-xs tracking-[0.3em] uppercase text-gray-500 font-light">
                  P0STMAN — AI-Powered Product Studio
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }

          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          section {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          @page {
            margin: 0.5in;
            size: A4;
          }

          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
