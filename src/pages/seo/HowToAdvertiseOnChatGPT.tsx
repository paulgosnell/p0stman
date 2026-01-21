import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Megaphone,
  CheckCircle,
  ArrowRight,
  Clock,
  Plus,
  Minus,
  HelpCircle,
  Target,
  BarChart3,
  Users,
  Lightbulb,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "When exactly can I start running ChatGPT ads?",
    answer: "OpenAI has confirmed ad testing begins soon, with broader advertiser access expected Q2-Q3 2026. No specific signup date announced yet. Follow OpenAI's business announcements or work with a partner who can get you early access."
  },
  {
    question: "Will ChatGPT ads work for my business?",
    answer: "Yes, if your customers ask questions that ChatGPT answers. Think about what problems your product solves - if people describe those problems conversationally, ChatGPT ads can reach them at the moment of intent."
  },
  {
    question: "Should I stop running Google Ads?",
    answer: "No. ChatGPT ads are additive, not a replacement. Google captures explicit search intent. ChatGPT captures conversational discovery. Different moments, different intents, both valuable. Run both."
  },
  {
    question: "How do I know if ChatGPT mentions my brand?",
    answer: "Three options: manually test common queries about your category, use monitoring tools like Profound or Otterly.ai, or hire an AI visibility audit. We offer this as part of our AI marketing services."
  },
  {
    question: "What if I'm in a sensitive category (health, politics)?",
    answer: "OpenAI has excluded sensitive categories from ads initially. Focus on organic AI visibility instead - ensure your brand appears in ChatGPT responses through quality content, structured data, and entity recognition."
  },
  {
    question: "Can I advertise on Claude or Perplexity?",
    answer: "Not yet. Perplexity tested ads in late 2024 but hasn't opened to all advertisers. Claude (Anthropic) has no announced ad plans. ChatGPT will be first to scale. Prepare for ChatGPT now, and you'll be ready for others when they open."
  }
];

const tldrPoints = [
  "ChatGPT ads launching Q1 2026 (US free/Go tiers only)",
  "Ads shown at bottom of responses based on conversation context",
  "700M weekly users x high-intent conversations = massive opportunity",
  "Prepare now: organic visibility = credibility when ads launch"
];

const comparisonData = [
  { feature: "Targeting", chatgpt: "Full conversation context", google: "Keywords + demographics" },
  { feature: "Placement", chatgpt: "Bottom of AI responses", google: "Search results, display network" },
  { feature: "Intent signal", chatgpt: "Natural problem description", google: "Search query keywords" },
  { feature: "Competition", chatgpt: "Low (new platform)", google: "High (saturated)" },
  { feature: "Expected CPM", chatgpt: "Premium (TBD)", google: "Varies by industry" }
];

const preparationSteps = [
  {
    week: "Week 1",
    title: "Map Your Conversational Intents",
    tasks: [
      "List the questions your customers ask before buying",
      "Test how ChatGPT currently answers those questions",
      "Identify gaps where your brand should appear but doesn't"
    ]
  },
  {
    week: "Week 2-4",
    title: "Build Organic AI Visibility",
    tasks: [
      "Create content that directly answers customer questions",
      "Implement structured data (FAQ, HowTo, Product schema)",
      "Build authoritative backlinks and citations",
      "Ensure your brand has a clear entity in AI training data"
    ]
  },
  {
    week: "Week 3",
    title: "Develop AI-Native Creative",
    tasks: [
      "Write ad copy that fits conversational context",
      "Prepare multiple variations for different question types",
      "Focus on helpful, non-interruptive messaging"
    ]
  },
  {
    week: "Week 4",
    title: "Set Up Measurement Framework",
    tasks: [
      "Define KPIs (brand lift, site traffic, conversions)",
      "Set up attribution for AI-referred traffic",
      "Establish baseline metrics for comparison"
    ]
  }
];

// JSON-LD Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Advertise on ChatGPT: Complete Guide (2026)",
  "description": "Everything you need to know about advertising on ChatGPT. Ad formats, targeting, pricing expectations, and how to prepare your brand for OpenAI's new ad platform.",
  "author": {
    "@type": "Organization",
    "name": "POSTMAN",
    "url": "https://p0stman.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "POSTMAN",
    "url": "https://p0stman.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://p0stman.com/logo.png"
    }
  },
  "datePublished": "2026-01-18",
  "dateModified": "2026-01-18",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://p0stman.com/guides/how-to-advertise-on-chatgpt"
  }
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Prepare for ChatGPT Advertising",
  "description": "Step-by-step guide to preparing your brand for ChatGPT's new advertising platform launching Q1 2026.",
  "totalTime": "P4W",
  "step": preparationSteps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": `${step.week}: ${step.title}`,
    "text": step.tasks.join(". ")
  }))
};

export default function HowToAdvertiseOnChatGPT() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whatWeKnowRef, whatWeKnowInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [targetingRef, targetingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [comparisonRef, comparisonInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [costsRef, costsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>How to Advertise on ChatGPT: Complete Guide (2026) | POSTMAN</title>
          <meta name="description" content="Everything you need to know about advertising on ChatGPT. Ad formats, targeting, pricing expectations, and how to prepare your brand for OpenAI's new ad platform." />
          <meta name="keywords" content="how to advertise on ChatGPT, ChatGPT advertising, OpenAI ads, ChatGPT marketing, AI advertising, ChatGPT ad platform" />
          <meta property="og:title" content="How to Advertise on ChatGPT: Complete Guide (2026) | POSTMAN" />
          <meta property="og:description" content="Everything you need to know about advertising on ChatGPT. Ad formats, targeting, pricing expectations, and how to prepare your brand for OpenAI's new ad platform." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta property="og:url" content="https://p0stman.com/guides/how-to-advertise-on-chatgpt" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="How to Advertise on ChatGPT: Complete Guide (2026)" />
          <meta name="twitter:description" content="Everything you need to know about advertising on ChatGPT. Ad formats, targeting, pricing, and preparation." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/guides/how-to-advertise-on-chatgpt" />
          <script type="application/ld+json">
            {JSON.stringify(articleSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(howToSchema)}
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
                  <Megaphone className="w-5 h-5 text-blue-500" />
                  <span className="text-blue-500 font-medium text-sm tracking-wide">ChatGPT Advertising Guide</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  How to Advertise<br />on ChatGPT
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  ChatGPT advertising launches Q1 2026 for US free and Go tier users. Ads appear at the bottom of AI responses based on conversation context. Here's everything you need to know to prepare.
                </p>

                {/* TL;DR Box */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 mb-8 text-left max-w-2xl mx-auto">
                  <h2 className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">TL;DR</h2>
                  <ul className="space-y-2">
                    {tldrPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Get AI Marketing Help
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Know Section */}
        <section ref={whatWeKnowRef} className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={whatWeKnowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-6 h-6 text-blue-400" />
                  <h2 className="text-3xl md:text-4xl font-thin">What We Know About ChatGPT Ads (January 2026)</h2>
                </div>

                <div className="space-y-8 mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-5 h-5 text-blue-400" />
                        <h3 className="font-medium text-white">Who Sees Ads</h3>
                      </div>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>Free tier users (adults only)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>ChatGPT Go tier users</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>US market initially</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-blue-400" />
                        <h3 className="font-medium text-white">Where Ads Appear</h3>
                      </div>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>Bottom of AI responses</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>Clearly labeled as ads</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>Native to conversation flow</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 bg-red-900/30 rounded-xl border border-red-700">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <h3 className="font-medium text-white">What's Excluded (Initially)</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-gray-300">
                      <p>Users under 18</p>
                      <p>Health/medical topics</p>
                      <p>Political content</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Targeting Works */}
        <section ref={targetingRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={targetingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-6 h-6 text-blue-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">How ChatGPT Ad Targeting Will Work</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  This is the biggest difference from traditional advertising. ChatGPT ads are conversation-context based, not keyword-based.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-medium text-gray-900 mb-4">Traditional Keyword Targeting</h3>
                    <p className="text-gray-600 mb-4">
                      User searches "best running shoes" and sees ads for Nike, Adidas, etc.
                    </p>
                    <p className="text-gray-500 text-sm">
                      Limited to exact query matches.
                    </p>
                  </div>

                  <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <h3 className="font-medium text-gray-900 mb-4">ChatGPT Context Targeting</h3>
                    <p className="text-gray-600 mb-4">
                      User asks "My feet hurt after running, what should I do?" - ChatGPT understands they might need better shoes, orthotics, or a podiatrist visit.
                    </p>
                    <p className="text-blue-600 text-sm font-medium">
                      Full context understanding enables smarter targeting.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">Why This Matters</h3>
                      <p className="text-white/90">
                        ChatGPT captures intent earlier in the customer journey. When someone describes their problem in natural language, they're often more open to solutions than when they've already decided what to search for.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Preparation */}
        <section ref={stepsRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-blue-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">Step-by-Step: Preparing for ChatGPT Ads</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  Don't wait for the platform to launch. Start preparing now so you're ready to move fast when ads become available.
                </p>

                <div className="space-y-6">
                  {preparationSteps.map((step, index) => (
                    <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-blue-600 font-medium">{step.week}</span>
                          </div>
                          <h3 className="text-xl font-medium text-gray-900 mb-4">{step.title}</h3>
                          <ul className="space-y-2">
                            {step.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-start gap-2 text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section ref={comparisonRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">ChatGPT Ads vs Google Ads: Key Differences</h2>
                </div>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        <th className="p-4 text-left font-medium">Feature</th>
                        <th className="p-4 text-left font-medium">ChatGPT Ads</th>
                        <th className="p-4 text-left font-medium">Google Ads</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="p-4 font-medium text-gray-900 border-b border-gray-200">{row.feature}</td>
                          <td className="p-4 text-gray-600 border-b border-gray-200">{row.chatgpt}</td>
                          <td className="p-4 text-gray-600 border-b border-gray-200">{row.google}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expected Costs */}
        <section ref={costsRef} className="py-24 bg-blue-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={costsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-3xl md:text-4xl font-thin">Expected ChatGPT Advertising Costs</h2>
                </div>

                <p className="text-lg text-blue-200 mb-8">
                  OpenAI hasn't announced pricing yet, but here's what we can reasonably expect based on platform dynamics.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-blue-800 rounded-xl">
                    <h3 className="font-medium text-white mb-3">Premium CPMs</h3>
                    <p className="text-blue-200">
                      New platform with high-intent users = premium pricing. Expect higher CPMs than social media, potentially comparable to search.
                    </p>
                  </div>

                  <div className="p-6 bg-blue-800 rounded-xl">
                    <h3 className="font-medium text-white mb-3">Scarcity Factor</h3>
                    <p className="text-blue-200">
                      Limited inventory initially. Ads only shown to free/Go tier users. High demand + limited supply = higher prices.
                    </p>
                  </div>

                  <div className="p-6 bg-blue-800 rounded-xl">
                    <h3 className="font-medium text-white mb-3">Early Mover Advantage</h3>
                    <p className="text-blue-200">
                      New platforms often reward early advertisers with lower costs and better placement as they build their ad ecosystem.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-cyan-500/20 rounded-xl border border-cyan-400/30">
                  <p className="text-white">
                    <strong>Our Recommendation:</strong> Start with organic AI visibility now (free). When ads launch, you'll have credibility established and better understanding of what content resonates in AI conversations.
                  </p>
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
                  <HelpCircle className="w-6 h-6 text-blue-500" />
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
                Ready to Prepare for ChatGPT Ads?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We help brands build AI visibility before the ad platform launches. When ChatGPT ads go live, you'll already have organic credibility and know exactly which conversations to target.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                >
                  Get AI Marketing Strategy
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/ai-agents"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-all text-lg font-medium"
                >
                  Explore AI Services
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
                <Link to="/compare/chatgpt-ads-vs-google-ads" className="text-blue-500 hover:text-blue-600 underline">
                  ChatGPT Ads vs Google Ads
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/services/chatgpt-advertising-services" className="text-blue-500 hover:text-blue-600 underline">
                  ChatGPT Advertising Services
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/guides/how-to-get-your-brand-in-chatgpt" className="text-blue-500 hover:text-blue-600 underline">
                  How to Get Your Brand in ChatGPT
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/pricing/llm-seo-pricing-guide" className="text-blue-500 hover:text-blue-600 underline">
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
