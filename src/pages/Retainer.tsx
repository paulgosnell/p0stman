import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, CheckCircle, ArrowRight, MessageSquare, Mail, Clock, Zap } from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import Contact from '../components/Contact';
import FooterV3 from '../components/v3/FooterV3';

const benefits = [
  "Dedicated private communication channel",
  "AI development & technical advisory",
  "Growth strategy & product planning",
  "24/7 asynchronous support",
  "No contracts - cancel anytime"
];

const features = [
  {
    icon: <MessageSquare className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
    title: "Direct Access",
    description: "Get direct access to expert guidance through your preferred communication channel"
  },
  {
    icon: <Clock className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
    title: "Flexible Support",
    description: "Asynchronous communication that works with any timezone"
  },
  {
    icon: <Bot className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
    title: "AI Expertise",
    description: "Get guidance on AI implementation, automation, and optimization"
  },
  {
    icon: <Zap className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
    title: "Fast Response",
    description: "Priority response times for all your questions and needs"
  }
];

export default function Retainer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Expert Retainer Service | On-Demand Tech Advisory</title>
          <meta name="description" content="Your fractional tech team with 20+ years of expertise. On-demand access to AI development, design, strategy, and advisory services." />
          <meta name="keywords" content="tech advisory, retainer service, expert guidance, technical support, AI development" />
          <meta property="og:title" content="Expert Retainer Service | On-Demand Tech Advisory" />
          <meta property="og:description" content="Your fractional tech team with 20+ years of expertise." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Expert Retainer Service | On-Demand Tech Advisory" />
          <meta name="twitter:description" content="Your fractional tech team with 20+ years of expertise." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/retainer" />
        </Helmet>

        <HeaderV3Global />

        <section ref={ref} className="relative min-h-screen flex items-center bg-white text-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
          </div>

          <div className="container mx-auto px-8 py-32 md:py-48 relative z-10 max-w-[90rem]">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light mb-8">Expert Retainer Service</p>

                  <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-gray-900 leading-[1.05] tracking-tight mb-8">
                    Your Fractional Tech Team
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8">
                    Get an entire tech team's expertise at a fraction of the cost. Instant access to AI development, design, strategy, and advisory services without the overhead.
                  </p>

                  <div className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                        <span className="text-gray-600 font-light">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
                    <div>
                      <div className="text-4xl md:text-5xl font-light text-gray-900 mb-1">$12,000</div>
                      <div className="text-gray-400 font-light">per month</div>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border-t border-gray-200 p-8"
                  >
                    <div className="flex items-start gap-4">
                      {feature.icon}
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="max-w-4xl mx-auto text-center">
              {/* Section Header */}
              <div className="mb-16">
                <p className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light mb-8">The Process</p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8">How It Works</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto">
                    <MessageSquare className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-gray-900">1. Get Connected</h3>
                  <p className="text-gray-600 font-light leading-relaxed">Get your private Slack channel or preferred communication method setup</p>
                </div>
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-gray-900">2. Share Your Goals</h3>
                  <p className="text-gray-600 font-light leading-relaxed">Brief overview of your needs, projects and objectives</p>
                </div>
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-gray-900">3. Start Building</h3>
                  <p className="text-gray-600 font-light leading-relaxed">Get instant access to expertise, guidance and hands-on support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="max-w-5xl mx-auto text-center">
              {/* Section Header */}
              <div className="mb-16">
                <p className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light mb-8">Value Proposition</p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8">What You Get</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                <div className="bg-white border-t border-gray-200 p-8 md:p-12 text-left">
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Development & Tech</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-600 font-light leading-relaxed">AI implementation guidance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-600 font-light leading-relaxed">Code review & best practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-600 font-light leading-relaxed">Architecture planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-600 font-light leading-relaxed">Technical problem solving</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-t border-gray-200 p-8 md:p-12 text-left">
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Strategy & Growth</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-600 font-light leading-relaxed">Product strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-600 font-light leading-relaxed">Growth planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-600 font-light leading-relaxed">Technology roadmap</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-600 font-light leading-relaxed">Innovation advisory</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-16 text-gray-600 font-light leading-relaxed">
                <p className="mb-4 text-lg">All for a fraction of the cost of hiring a full-time team.</p>
                <p className="text-base text-gray-500">Average cost of a tech team: $40,000+/month<br />Your investment: $12,000/month</p>
              </div>
            </div>
          </div>
        </section>


        <div id="contact">
          <Contact />
        </div>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
