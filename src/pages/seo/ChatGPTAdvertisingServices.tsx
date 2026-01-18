import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Megaphone,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Users,
  Shield,
  Clock,
  Plus,
  Minus,
  HelpCircle,
  Zap,
  Target,
  TrendingUp,
  Eye
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "When can I start advertising on ChatGPT?",
    answer: "OpenAI announced testing would begin 'in the coming weeks' from January 16, 2026. Expect a limited beta program first, with broader availability likely Q2-Q3 2026. Getting your strategy ready now puts you ahead of competitors."
  },
  {
    question: "How much will ChatGPT ads cost?",
    answer: "OpenAI hasn't announced pricing yet. Given the premium audience (700 million weekly users) and high-intent conversational context, expect premium CPMs. Budget planning should assume higher costs than traditional display but potentially stronger conversion rates."
  },
  {
    question: "Will ChatGPT ads work for B2B?",
    answer: "Absolutely. ChatGPT is heavily used for research, problem-solving, and professional tasks. B2B brands offering solutions to business problems will find relevant conversational contexts. The key is understanding what questions your prospects ask ChatGPT."
  },
  {
    question: "How is this different from Google Ads?",
    answer: "Google Ads targets keywords in search queries. ChatGPT ads target conversational context — the meaning behind multi-turn conversations. This allows for more nuanced targeting based on user intent, problems being solved, and decision stages."
  },
  {
    question: "Should I wait until ads launch to start preparing?",
    answer: "No. Start building organic visibility in AI responses now. Brands that appear organically in ChatGPT have first-mover advantage when ads launch. Our readiness packages help you prepare both organic and paid strategies."
  }
];

const adPrinciples = [
  {
    title: "Mission First",
    description: "Ads support OpenAI's mission to benefit humanity, never compromise it"
  },
  {
    title: "Independence",
    description: "Advertisers cannot influence AI model behavior or responses"
  },
  {
    title: "Privacy",
    description: "No selling of user data; targeting based on conversation context only"
  },
  {
    title: "User Choice",
    description: "Users can opt out; paid tiers remain ad-free"
  },
  {
    title: "Long-term Value",
    description: "Building sustainable advertising that benefits users and advertisers"
  }
];

const preparationSteps = [
  {
    icon: MessageSquare,
    title: "Map Conversational Intent",
    description: "Identify what questions your target customers ask AI assistants. These become your targeting opportunities."
  },
  {
    icon: Target,
    title: "Create AI-Native Creative",
    description: "ChatGPT ads need contextually relevant messaging that adds value to conversations, not interrupts them."
  },
  {
    icon: Eye,
    title: "Build Organic Visibility First",
    description: "Brands already appearing in ChatGPT responses have data and credibility advantages when ads launch."
  },
  {
    icon: TrendingUp,
    title: "Plan Measurement Strategy",
    description: "Attribution for conversational ads is different. Define success metrics before spending."
  }
];

const tldrPoints = [
  "ChatGPT ads launching Q1 2026 in US (free and Go tiers only)",
  "Ads appear at bottom of responses based on conversation context",
  "700 million weekly users — massive new advertising channel",
  "P0STMAN offers ChatGPT ad readiness packages from $3,500"
];

export default function ChatGPTAdvertisingServices() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whatRef, whatInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [principlesRef, principlesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [prepareRef, prepareInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ChatGPT Advertising Services: Get Ready for AI Ads",
    "description": "Prepare your brand for ChatGPT ads launching Q1 2026. P0STMAN helps you develop AI advertising strategy and optimize for the new ChatGPT ad platform.",
    "author": {
      "@type": "Organization",
      "name": "P0STMAN"
    },
    "publisher": {
      "@type": "Organization",
      "name": "P0STMAN",
      "url": "https://p0stman.com"
    },
    "datePublished": "2026-01-18",
    "dateModified": "2026-01-18",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://p0stman.com/services/chatgpt-advertising-services"
    },
    "keywords": "ChatGPT advertising services, ChatGPT ads, OpenAI advertising, AI advertising strategy"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>ChatGPT Advertising Services: Get Ready for AI Ads | P0STMAN</title>
          <meta name="description" content="Prepare your brand for ChatGPT ads launching Q1 2026. P0STMAN helps you develop AI advertising strategy and optimize for the new ChatGPT ad platform." />
          <meta name="keywords" content="ChatGPT advertising services, ChatGPT ads, OpenAI advertising, AI advertising strategy, ChatGPT ad platform, AI ads 2026" />
          <meta property="og:title" content="ChatGPT Advertising Services: Get Ready for AI Ads | P0STMAN" />
          <meta property="og:description" content="Prepare your brand for ChatGPT ads launching Q1 2026. P0STMAN helps you develop AI advertising strategy and optimize for the new ChatGPT ad platform." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="ChatGPT Advertising Services | P0STMAN" />
          <meta name="twitter:description" content="Prepare your brand for ChatGPT ads launching Q1 2026. AI advertising strategy and optimization." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/services/chatgpt-advertising-services" />
          <script type="application/ld+json">
            {JSON.stringify(articleSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center bg-white text-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
          </div>

          <div className="container mx-auto px-4 md:px-6 py-24 md:py-28 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Megaphone className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500 font-medium text-sm tracking-wide">ChatGPT Advertising Services</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  ChatGPT Ads Are Coming.<br />Are You Ready?
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  ChatGPT advertising is launching in Q1 2026 for US free and Go tier users. OpenAI will show sponsored products and services at the bottom of AI responses based on conversation context. P0STMAN helps brands prepare strategy and creative for this new channel.
                </p>

                {/* TL;DR Box */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8 text-left max-w-2xl mx-auto">
                  <h2 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-500" />
                    TL;DR
                  </h2>
                  <ul className="space-y-2">
                    {tldrPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:shadow-lg hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Get ChatGPT Ad Ready
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Are ChatGPT Ads Section */}
        <section ref={whatRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={whatInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-6 h-6 text-orange-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">What Are ChatGPT Ads?</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  On January 16, 2026, OpenAI announced they would begin testing advertisements in ChatGPT. Here's what we know:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Ads will appear at the bottom of ChatGPT responses, clearly marked as sponsored",
                    "Initially available only for US users on free and Go tiers",
                    "Paid tiers (Plus, Pro, Team, Enterprise) remain ad-free",
                    "Targeting based on conversation context, not user profiles or browsing history",
                    "Advertisers cannot influence AI responses or model behavior"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={whatInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200"
                    >
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg text-gray-600">
                  This represents a fundamental shift in digital advertising — from keyword targeting to conversation-context targeting.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why ChatGPT Ads Matter Section */}
        <section ref={whyRef} className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-orange-400" />
                  <h2 className="text-3xl md:text-4xl font-thin">Why ChatGPT Ads Matter</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-6 bg-gray-800 rounded-xl">
                    <div className="text-4xl font-light text-orange-400 mb-2">2.5B</div>
                    <p className="text-gray-300">Messages sent daily on ChatGPT</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-xl">
                    <div className="text-4xl font-light text-orange-400 mb-2">700M</div>
                    <p className="text-gray-300">Weekly active users worldwide</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-xl">
                    <div className="text-4xl font-light text-orange-400 mb-2">#1</div>
                    <p className="text-gray-300">Most used AI assistant globally</p>
                  </div>
                </div>

                <div className="space-y-6 text-gray-300">
                  <p>
                    ChatGPT users aren't passively scrolling. They're actively solving problems, researching products, and making decisions. This is high-intent traffic at scale.
                  </p>
                  <p className="text-white font-medium text-lg">
                    Conversational context targeting means your ads appear when someone is discussing problems your product solves — not just when they search a keyword.
                  </p>
                  <p>
                    For brands, this is the biggest new advertising channel since social media. Early movers who understand AI-native advertising will have significant advantages.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OpenAI's Ad Principles Section */}
        <section ref={principlesRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={principlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-orange-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">OpenAI's Advertising Principles</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  OpenAI outlined five principles guiding their approach to advertising. Understanding these helps brands create effective, compliant campaigns:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {adPrinciples.map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={principlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-orange-50 rounded-xl border border-orange-100"
                    >
                      <h3 className="font-medium text-gray-900 mb-2">{principle.title}</h3>
                      <p className="text-gray-600 text-sm">{principle.description}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="mt-8 text-center text-gray-600">
                  These principles suggest ChatGPT ads will prioritize relevance and user experience — good news for brands focused on genuine value.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How to Prepare Section */}
        <section ref={prepareRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={prepareInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-6 h-6 text-orange-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">How to Prepare for ChatGPT Advertising</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  Don't wait for the platform to launch. Brands preparing now will have data, strategy, and creative ready when ads go live.
                </p>

                <div className="space-y-6">
                  {preparationSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={prepareInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex gap-6 items-start p-6 bg-white rounded-xl border border-gray-200"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section ref={pricingRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">ChatGPT Ad Readiness Packages</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">ChatGPT Ad Readiness Audit</h3>
                    <div className="text-3xl font-light text-orange-500 mb-4">$3,500</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>1 week</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Current AI visibility assessment</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Conversational intent mapping</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Readiness roadmap</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-orange-50 rounded-2xl border border-orange-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">ChatGPT Ad Strategy</h3>
                    <div className="text-3xl font-light text-orange-500 mb-4">$7,500-$12,500</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>2-3 weeks</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Full audit included</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>AI-native creative concepts</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Targeting strategy</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Measurement framework</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Full AI Advertising Package</h3>
                    <div className="text-3xl font-light text-orange-500 mb-4">$15,000-$25,000</div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>4-6 weeks</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Complete strategy package</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Organic AI visibility optimization</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Campaign-ready creative assets</span>
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Launch support when ads go live</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:shadow-lg hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Start Your Readiness Plan
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <HelpCircle className="w-6 h-6 text-orange-500" />
                  <h2 className="text-3xl font-thin">ChatGPT Advertising FAQ</h2>
                </div>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {openFaqIndex === index ? (
                        <Minus className="w-5 h-5 text-gray-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-thin mb-6">
                Be Ready When<br />ChatGPT Ads Launch
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                The brands preparing now will capture first-mover advantage. Let's build your ChatGPT advertising strategy before your competitors do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:shadow-lg hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-all text-lg font-medium"
                >
                  Book a Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-thin text-center mb-6 text-gray-500">Related Resources</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/guides/how-to-advertise-on-chatgpt" className="text-orange-500 hover:text-orange-600 underline">
                  How to Advertise on ChatGPT
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/compare/chatgpt-ads-vs-google-ads" className="text-orange-500 hover:text-orange-600 underline">
                  ChatGPT Ads vs Google Ads
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/services/llm-visibility-services" className="text-orange-500 hover:text-orange-600 underline">
                  LLM Visibility Services
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/pricing/llm-seo-pricing-guide" className="text-orange-500 hover:text-orange-600 underline">
                  LLM SEO Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}
