import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, DollarSign, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import CommissionTiers from '../components/affiliate/CommissionTiers';
import BenefitsSection from '../components/affiliate/BenefitsSection';
import HowItWorks from '../components/affiliate/HowItWorks';
import FAQ from '../components/affiliate/FAQ';
import SignupModal from '../components/affiliate/SignupModal';
import FooterV3 from '../components/v3/FooterV3';

export default function Affiliate() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Partner Program | AI-Powered Product Studio</title>
          <meta name="description" content="Join our Partner Program and earn up 20% commission on all sales with monthly payouts and marketing resources provided." />
          <meta name="keywords" content="partner program, referral program, passive income, tech partner" />
          <meta property="og:title" content="Partner Program | AI-Powered Product Studio" />
          <meta property="og:description" content="Earn 20% per referral with our partner program." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Partner Program | AI-Powered Product Studio" />
          <meta name="twitter:description" content="Earn 20% per referral with our partner program." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/affiliate" />
        </Helmet>

        <HeaderV3Global />

        <section ref={ref} className="relative min-h-screen flex items-center bg-white text-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
          </div>

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Users className="w-6 h-6 text-pink-400" />
                      <span className="text-pink-400 font-medium">Partner Program</span>
                    </div>

                    <h1 className="text-5xl font-thin mb-6">
                      Earn 20% on all Sales
                    </h1>
                    
                    <p className="text-xl text-gray-300 mb-8">
                      Join our partner program and earn generous commissions by promoting our AI-powered product studio.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-400" />
                        <span>Up to $8,000 per referral</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-400" />
                        <span>Long tracking period</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-400" />
                        <span>Regular payouts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-400" />
                        <span>Support provided</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-3xl font-light mb-1">20%</div>
                      <div className="text-gray-400">Commission rate</div>
                    </div>
                    <button
                      onClick={() => setShowSignupModal(true)}
                      className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                    >
                      Join Now
                      <ArrowRight className="ml-2 inline-block w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-3xl transform rotate-6" />
                  <div className="relative z-10 bg-gray-800 rounded-3xl p-8">
                    <div className="space-y-6">
                      <div className="p-6 bg-gray-700/50 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                          <DollarSign className="w-6 h-6 text-pink-400" />
                          <h3 className="text-lg font-light">Example Earnings</h3>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm text-gray-400">Training ($500)</div>
                            <div className="text-xl font-light">$100 commission</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Website ($6k)</div>
                            <div className="text-xl font-light">$1.2k commission</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Mobile App ($40k)</div>
                            <div className="text-xl font-light">$8k commission</div>
                          </div>                        
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 text-center">
                        No limit on earnings • Regular payouts • Instant approval
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CommissionTiers />
        <BenefitsSection />
        <HowItWorks />
        <FAQ />

        <FooterV3 />

        <SignupModal
          isOpen={showSignupModal}
          onClose={() => setShowSignupModal(false)}
        />
      </div>
    </HelmetProvider>
  );
}