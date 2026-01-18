import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Search,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Plus,
  Minus,
  TrendingUp,
  Eye,
  BarChart3,
  Target,
  Bot,
  Zap,
  FileText,
  Clock
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Initial visibility improvements typically appear within 2-4 weeks as AI models refresh their knowledge. Full impact across major platforms like ChatGPT, Claude, and Perplexity is usually seen within 8-12 weeks. We provide ongoing monitoring to track your brand's citation growth."
  },
  {
    question: "Which AI platforms will my content appear in?",
    answer: "Our optimization targets all major LLM-powered platforms: ChatGPT (which handles 66% of AI search queries), Google AI Overviews, Perplexity, Claude, and Microsoft Copilot. Each platform has different citation patterns, so we optimize for cross-platform visibility."
  },
  {
    question: "How do you measure success?",
    answer: "We track brand mentions in AI responses, citation frequency, referral traffic from AI platforms, and conversion rates. LLM traffic converts at 4.4x the rate of traditional search, so we focus on both visibility and revenue impact."
  },
  {
    question: "Do I still need traditional SEO?",
    answer: "Yes. LLM visibility complements traditional SEO but doesn't replace it. AI models often pull from sources that rank well in search, so strong SEO foundations help both channels. We recommend running both in parallel for maximum reach."
  },
  {
    question: "What content gets cited most by AI?",
    answer: "FAQ-format content gets cited 40% more than standard prose. AI models also favor specific statistics, data tables, and structured information. We optimize your content structure to match how LLMs process and retrieve information."
  }
];

const tldrPoints = [
  "86% of AI citations come from brand-managed content sources",
  "LLM traffic converts at 4.4x the rate of traditional search",
  "Structured content with specific data gets 27% more AI citations",
  "P0STMAN delivers LLM visibility projects from $5K in 1-2 weeks"
];

const includedItems = [
  {
    title: "LLM Visibility Audit",
    description: "Complete analysis of how your brand currently appears in ChatGPT, Claude, Perplexity, and Google AI Overviews. We identify gaps, competitors who are being cited, and opportunities."
  },
  {
    title: "Schema & Structured Data",
    description: "Implementation of AI-optimized structured data that helps LLMs understand and cite your content correctly. Includes FAQ schema, organization markup, and entity definitions."
  },
  {
    title: "Content Optimization",
    description: "Restructuring existing content into LLM-friendly formats: FAQ sections, data tables, specific statistics, and clear terminology that AI models prefer to cite."
  },
  {
    title: "Entity Building",
    description: "Establishing your brand as a recognized entity across knowledge graphs and sources that LLMs reference. This includes Wikipedia presence strategy and authoritative mentions."
  },
  {
    title: "Ongoing Monitoring",
    description: "Tracking your brand's AI citations over time, measuring traffic from LLM referrals, and identifying new optimization opportunities as models update."
  }
];

const howItWorks = [
  {
    step: "1",
    title: "RAG (Retrieval-Augmented Generation)",
    description: "LLMs like ChatGPT and Perplexity don't just generate answers — they retrieve information from indexed sources. Your content needs to be structured for retrieval, not just readability."
  },
  {
    step: "2",
    title: "Structured Content",
    description: "AI models favor content with clear hierarchies, specific data points, and FAQ formats. Prose that works for humans often gets skipped by retrieval systems."
  },
  {
    step: "3",
    title: "Consistent Terminology",
    description: "LLMs match queries to content using semantic similarity. Using consistent, specific terminology across your content increases the chances of being retrieved for relevant queries."
  },
  {
    step: "4",
    title: "Freshness Signals",
    description: "AI models prioritize recently updated content. Regular content refreshes with current data signal authority and relevance to retrieval systems."
  }
];

const pricingTiers = [
  {
    name: "LLM Audit",
    price: "$2,500",
    timeline: "3-5 days",
    features: [
      "Current AI visibility analysis",
      "Competitor citation mapping",
      "Gap identification report",
      "Priority recommendations"
    ],
    highlighted: false
  },
  {
    name: "LLM Foundation",
    price: "$5,000-$10,000",
    timeline: "1-2 weeks",
    features: [
      "Everything in Audit",
      "Schema implementation",
      "Content restructuring (up to 10 pages)",
      "Entity optimization",
      "30-day monitoring"
    ],
    highlighted: true
  },
  {
    name: "LLM Growth",
    price: "$15,000-$25,000",
    timeline: "4-6 weeks",
    features: [
      "Everything in Foundation",
      "Full site optimization",
      "Wikipedia strategy",
      "Knowledge graph building",
      "Ongoing monitoring & optimization"
    ],
    highlighted: false
  }
];

export default function LLMVisibilityServices() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whatRef, whatInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [howRef, howInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [includedRef, includedInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "LLM Visibility Services: Get Your Brand Cited by AI",
    "description": "Get your brand visible in ChatGPT, Claude, Perplexity and Google AI Overviews. P0STMAN's LLM visibility services help you appear where your customers are searching.",
    "author": {
      "@type": "Organization",
      "name": "P0STMAN"
    },
    "publisher": {
      "@type": "Organization",
      "name": "P0STMAN",
      "url": "https://p0stman.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://p0stman.com/services/llm-visibility-services"
    },
    "keywords": "LLM visibility services, AI search visibility, get cited by ChatGPT, LLM SEO agency, AI brand visibility"
  };

  const jsonLdFaq = {
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
          <title>LLM Visibility Services: Get Your Brand Cited by AI | P0STMAN</title>
          <meta name="description" content="Get your brand visible in ChatGPT, Claude, Perplexity and Google AI Overviews. P0STMAN's LLM visibility services help you appear where your customers are searching. From $5K." />
          <meta name="keywords" content="LLM visibility services, AI search visibility, get cited by ChatGPT, LLM SEO agency, AI brand visibility" />
          <meta property="og:title" content="LLM Visibility Services: Get Your Brand Cited by AI | P0STMAN" />
          <meta property="og:description" content="Get your brand visible in ChatGPT, Claude, Perplexity and Google AI Overviews. P0STMAN's LLM visibility services help you appear where your customers are searching." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="LLM Visibility Services | P0STMAN" />
          <meta name="twitter:description" content="Get your brand visible in ChatGPT, Claude, Perplexity and Google AI Overviews." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/services/llm-visibility-services" />
          <script type="application/ld+json">
            {JSON.stringify(jsonLdArticle)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(jsonLdFaq)}
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
                  <Eye className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-medium text-sm tracking-wide">LLM Visibility Services</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  Get Your Brand<br />Cited by AI
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  LLM visibility services optimize your brand's content to appear in AI-generated responses from ChatGPT, Claude, Perplexity, and Google AI Overviews. With 52% of US adults now using AI for search, this is where your customers are looking.
                </p>

                {/* TL;DR Points */}
                <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto text-left">
                  {tldrPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Get LLM Visible
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Are LLM Visibility Services Section */}
        <section ref={whatRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={whatInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Search className="w-6 h-6 text-green-600" />
                  <h2 className="text-3xl md:text-4xl font-thin">What Are LLM Visibility Services?</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  LLM visibility services are a new category of optimization that helps your brand appear in AI-generated responses. Unlike traditional SEO, which focuses on ranking in search results, LLM visibility focuses on getting cited in the answers AI provides.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Bot className="w-5 h-5 text-green-600" />
                      <h3 className="font-medium text-gray-900">AI-First Discovery</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      More people are asking ChatGPT and Perplexity for recommendations instead of Google. If your brand isn't in those answers, you're invisible to this growing audience.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <h3 className="font-medium text-gray-900">Higher Intent Traffic</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      LLM-referred visitors convert at 4.4x the rate of traditional search. They've already been told by AI that you're the solution — they just need to confirm.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-5 h-5 text-green-600" />
                      <h3 className="font-medium text-gray-900">Brand Authority</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      When AI cites your brand as an authority, it builds trust that traditional advertising can't match. Being the AI's recommendation carries weight.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-5 h-5 text-green-600" />
                      <h3 className="font-medium text-gray-900">Measurable Results</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We track your brand mentions across AI platforms, monitor citation frequency, and measure the traffic and conversions driven by LLM visibility.
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 text-center">
                  LLM visibility isn't optional anymore. It's where your customers are going.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How LLM Visibility Works Section */}
        <section ref={howRef} className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={howInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-green-400" />
                  <h2 className="text-3xl md:text-4xl font-thin">How LLM Visibility Works</h2>
                </div>

                <p className="text-lg text-gray-300 mb-8">
                  Understanding how AI retrieves and cites information is key to getting your brand visible. Here's what drives LLM citations:
                </p>

                <div className="space-y-6">
                  {howItWorks.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={howInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-6 items-start p-6 bg-gray-800 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-medium text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="mt-8 text-lg text-green-400 text-center">
                  We optimize for all of these factors to maximize your AI visibility.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section ref={includedRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={includedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-6 h-6 text-green-600" />
                  <h2 className="text-3xl md:text-4xl font-thin">What's Included in Our LLM Visibility Service</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  A comprehensive approach to getting your brand cited by AI across all major platforms.
                </p>

                <div className="space-y-4">
                  {includedItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={includedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-gray-50 rounded-xl border border-gray-200"
                    >
                      <div className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section ref={pricingRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                  <h2 className="text-3xl md:text-4xl font-thin">Pricing</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  Clear pricing, fast delivery. Choose the level that matches your needs.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {pricingTiers.map((tier, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-8 rounded-2xl border ${
                        tier.highlighted
                          ? 'bg-green-50 border-green-200'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{tier.name}</h3>
                      <div className="text-3xl font-light text-green-600 mb-2">{tier.price}</div>
                      <div className="text-sm text-gray-500 mb-6">{tier.timeline}</div>
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <HelpCircle className="w-6 h-6 text-green-600" />
                  <h2 className="text-3xl font-thin">Frequently Asked Questions</h2>
                </div>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
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
                Ready to Get Cited by AI?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Your customers are asking AI for recommendations. Make sure your brand is the answer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                >
                  Start LLM Visibility Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-all text-lg font-medium"
                >
                  Book a 15-min call
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
                <Link to="/guides/llm-seo-complete-guide-2026" className="text-green-600 hover:text-green-700 underline">
                  LLM SEO Complete Guide
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/guides/how-to-get-your-brand-in-chatgpt" className="text-green-600 hover:text-green-700 underline">
                  How to Get Your Brand in ChatGPT
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/services/generative-engine-optimization-geo" className="text-green-600 hover:text-green-700 underline">
                  GEO Services
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/pricing/llm-seo-pricing-guide" className="text-green-600 hover:text-green-700 underline">
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
