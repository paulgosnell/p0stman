import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  Clock,
  Plus,
  Minus,
  HelpCircle,
  Search,
  Bot,
  FileText,
  BarChart3,
  Target,
  Layers
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "Is GEO replacing SEO?",
    answer: "No, GEO complements traditional SEO rather than replacing it. Google still processes over 5 trillion searches annually, and traditional SEO remains essential for ranking in those results. However, with 52% of US adults now using AI chatbots for search tasks, GEO ensures your brand is visible in this growing channel too. The best strategy combines both approaches."
  },
  {
    question: "Which industries benefit most from GEO?",
    answer: "Industries where people research before buying benefit most from GEO. This includes SaaS and technology companies, professional services (legal, accounting, consulting), healthcare and medical practices, financial services, e-commerce brands, and B2B companies. Essentially, any business where customers ask complex questions before making decisions will see significant value from GEO."
  },
  {
    question: "How quickly does GEO work compared to traditional SEO?",
    answer: "GEO typically shows results faster than traditional SEO. While SEO can take 6+ months to see ranking improvements, GEO implementations often start appearing in AI responses within 2-4 weeks. This is because AI systems update their training data and retrieval sources more frequently than Google's search algorithm re-evaluates rankings."
  },
  {
    question: "Can I do GEO myself?",
    answer: "Basic GEO optimizations like adding FAQ sections and clear definitions can be done in-house. However, comprehensive GEO requires understanding how multiple AI systems extract and cite information, which often needs specialized expertise. The technical aspects — structured data implementation, entity optimization, and citation-worthy formatting — typically require professional implementation to be effective."
  },
  {
    question: "What tools do you use for GEO?",
    answer: "We use a combination of specialized tools including Profound for AI visibility tracking, Otterly for monitoring AI citations, schema validators for structured data testing, and manual testing across ChatGPT, Perplexity, Claude, and Google AI Overviews. We also use custom scripts to track how different content structures perform across AI systems."
  }
];

const tldrPoints = [
  "GEO = SEO for AI search engines (ChatGPT, Perplexity, Google AI)",
  "52% of US adults now use AI chatbots for search tasks",
  "Content with FAQ structure gets 40% more AI citations",
  "P0STMAN GEO services start at $2,500 with 3-5 day delivery"
];

const seoVsGeoSame = [
  "Quality content still wins",
  "Authority and expertise matter",
  "User intent drives strategy",
  "Technical foundations are essential"
];

const seoVsGeoDifferent = [
  { seo: "Keywords in titles", geo: "Clear, extractable definitions" },
  { seo: "Link building for authority", geo: "Entity clarity for attribution" },
  { seo: "Ranking on page 1", geo: "Being the cited source" },
  { seo: "Optimizing for crawlers", geo: "Optimizing for extraction" }
];

const coreTechniques = [
  {
    icon: FileText,
    title: "Answer-First Content Structure",
    description: "We restructure content to lead with clear, concise answers that AI systems can easily extract and quote. No burying the answer in paragraph five."
  },
  {
    icon: Layers,
    title: "FAQ Schema Implementation",
    description: "Proper FAQ markup signals to AI systems exactly which questions your content answers. This structured approach gets 40% more AI citations than unstructured content."
  },
  {
    icon: Target,
    title: "Entity Clarity & Attribution",
    description: "AI systems need to understand who you are and why you're authoritative. We optimize your entity presence so AI knows to cite you, not a competitor."
  },
  {
    icon: BarChart3,
    title: "Comparative Data Tables",
    description: "AI loves data it can reference. We create structured comparison tables and statistics that become the go-to source for AI responses in your industry."
  },
  {
    icon: Search,
    title: "Specific Statistics & Citations",
    description: "Vague claims don't get cited. We help you document and present specific, citable statistics that AI systems reference when answering user queries."
  }
];

const pricingTiers = [
  {
    name: "GEO Audit",
    price: "$2,500",
    timeline: "3-5 days",
    description: "Understand your current AI visibility",
    features: [
      "AI visibility assessment across ChatGPT, Perplexity, Claude, Google AI",
      "Competitor citation analysis",
      "Content structure evaluation",
      "Priority recommendations report"
    ],
    highlighted: false
  },
  {
    name: "GEO Implementation",
    price: "$5,000-$12,000",
    timeline: "1-2 weeks",
    description: "Full optimization for AI citation",
    features: [
      "Complete content restructuring",
      "Schema markup implementation",
      "FAQ optimization across key pages",
      "Entity clarity improvements",
      "30-day monitoring included"
    ],
    highlighted: true
  },
  {
    name: "GEO Growth Program",
    price: "$15,000-$30,000",
    timeline: "Ongoing monthly",
    description: "Continuous AI visibility optimization",
    features: [
      "Monthly content optimization",
      "New page GEO from day one",
      "Competitive monitoring",
      "Quarterly strategy reviews",
      "Priority support"
    ],
    highlighted: false
  }
];

// JSON-LD Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Generative Engine Optimization (GEO): The New SEO for AI Search",
  "description": "GEO (Generative Engine Optimization) helps your brand appear in AI-generated search results. Learn how to get cited by ChatGPT, Perplexity, and Google AI.",
  "author": {
    "@type": "Organization",
    "name": "P0STMAN",
    "url": "https://p0stman.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "P0STMAN",
    "url": "https://p0stman.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://p0stman.com/services/generative-engine-optimization-geo"
  },
  "datePublished": "2025-01-18",
  "dateModified": "2025-01-18"
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

export default function GenerativeEngineOptimization() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whatIsRef, whatIsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [comparisonRef, comparisonInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [techniquesRef, techniquesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Generative Engine Optimization (GEO): The New SEO for AI Search | P0STMAN</title>
          <meta name="description" content="GEO (Generative Engine Optimization) helps your brand appear in AI-generated search results. P0STMAN delivers GEO services that get you cited by ChatGPT, Perplexity, and Google AI." />
          <meta name="keywords" content="generative engine optimization, GEO, AI SEO, ChatGPT optimization, Perplexity optimization, Google AI Overviews, AI search optimization" />
          <meta property="og:title" content="Generative Engine Optimization (GEO): The New SEO for AI Search | P0STMAN" />
          <meta property="og:description" content="GEO (Generative Engine Optimization) helps your brand appear in AI-generated search results. Get cited by ChatGPT, Perplexity, and Google AI." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Generative Engine Optimization (GEO) | P0STMAN" />
          <meta name="twitter:description" content="GEO helps your brand appear in AI-generated search results. Get cited by ChatGPT, Perplexity, and Google AI." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/services/generative-engine-optimization-geo" />
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
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-600 font-medium text-sm tracking-wide">Generative Engine Optimization</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  The New SEO<br />for AI Search
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  <strong>Generative Engine Optimization (GEO)</strong> is the practice of optimizing content so AI systems like ChatGPT, Perplexity, and Google AI Overviews cite your brand in their responses. It's SEO evolved for the age of AI-generated answers.
                </p>

                {/* TL;DR Box */}
                <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 mb-8 text-left max-w-2xl mx-auto">
                  <h2 className="font-medium text-purple-800 mb-3 flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    TL;DR - Quick Facts
                  </h2>
                  <ul className="space-y-2">
                    {tldrPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:from-purple-700 hover:to-violet-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Get a GEO Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is GEO Section */}
        <section ref={whatIsRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={whatIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Search className="w-6 h-6 text-purple-600" />
                  <h2 className="text-3xl md:text-4xl font-thin">What is Generative Engine Optimization (GEO)?</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  GEO is the strategic optimization of your digital content to maximize visibility and citation in AI-powered search experiences. While traditional SEO focuses on ranking in Google's blue links, GEO ensures your brand is the source AI systems reference when answering questions.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={whatIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="p-6 bg-white rounded-xl border border-gray-200"
                  >
                    <div className="text-4xl font-light text-purple-600 mb-2">52%</div>
                    <p className="text-gray-600 text-sm">of US adults now use AI chatbots for search tasks</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={whatIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-6 bg-white rounded-xl border border-gray-200"
                  >
                    <div className="text-4xl font-light text-purple-600 mb-2">4.4x</div>
                    <p className="text-gray-600 text-sm">higher conversion rate from AI-referred traffic</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={whatIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="p-6 bg-white rounded-xl border border-gray-200"
                  >
                    <div className="text-4xl font-light text-purple-600 mb-2">40%</div>
                    <p className="text-gray-600 text-sm">more AI citations with proper FAQ structure</p>
                  </motion.div>
                </div>

                <p className="text-lg text-gray-700">
                  When someone asks ChatGPT or Perplexity about your industry, <span className="font-medium">who do they cite?</span> If it's not you, your competitors are capturing that traffic. GEO ensures you're the authoritative source AI systems trust.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GEO vs SEO Section */}
        <section ref={comparisonRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8 text-center">GEO vs Traditional SEO: Key Differences</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      What Stays the Same
                    </h3>
                    <ul className="space-y-3">
                      {seoVsGeoSame.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      What's Different with GEO
                    </h3>
                    <ul className="space-y-3">
                      {seoVsGeoDifferent.map((item, index) => (
                        <li key={index} className="text-gray-600 text-sm">
                          <span className="text-gray-400">{item.seo}</span>
                          <span className="mx-2 text-purple-400">→</span>
                          <span className="font-medium text-gray-900">{item.geo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900 text-white p-8 rounded-2xl">
                  <h3 className="text-xl font-medium mb-4">The Key Insight</h3>
                  <p className="text-gray-300">
                    SEO optimizes for ranking algorithms. GEO optimizes for extraction and citation. AI systems don't rank your content — they <span className="text-purple-400 font-medium">quote it</span>. Your content needs to be structured so AI can easily pull accurate, attributable information.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Techniques Section */}
        <section ref={techniquesRef} className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={techniquesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-6 h-6 text-purple-400" />
                  <h2 className="text-3xl md:text-4xl font-thin">Core GEO Techniques We Implement</h2>
                </div>

                <p className="text-lg text-gray-300 mb-8">
                  Effective GEO requires a systematic approach to content structure, technical markup, and authority building. Here's what we implement:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {coreTechniques.map((technique, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={techniquesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-gray-800 rounded-xl"
                    >
                      <technique.icon className="w-8 h-8 text-purple-400 mb-4" />
                      <h3 className="font-medium text-white mb-2">{technique.title}</h3>
                      <p className="text-gray-400 text-sm">{technique.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section ref={pricingRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <h2 className="text-3xl md:text-4xl font-thin">GEO Services & Pricing</h2>
                </div>

                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                  From quick audits to comprehensive ongoing optimization. All services include monitoring across ChatGPT, Perplexity, Claude, and Google AI Overviews.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  {pricingTiers.map((tier, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-8 rounded-2xl border ${
                        tier.highlighted
                          ? 'bg-purple-50 border-purple-200'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{tier.name}</h3>
                      <div className="text-3xl font-light text-purple-600 mb-2">{tier.price}</div>
                      <div className="text-sm text-gray-500 mb-4">{tier.timeline}</div>
                      <p className="text-gray-600 text-sm mb-6">{tier.description}</p>
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center mt-12">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:from-purple-700 hover:to-violet-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Get Started with GEO
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
                  <HelpCircle className="w-6 h-6 text-purple-600" />
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
                Ready to Get Cited by AI?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                The shift to AI search is happening now. Every day you wait is traffic going to competitors who've already optimized for GEO.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:from-purple-700 hover:to-violet-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                >
                  Start with a GEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-all text-lg font-medium"
                >
                  Book a 15-min Call
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
                <Link to="/guides/llm-seo-complete-guide-2026" className="text-purple-600 hover:text-purple-700 underline">
                  LLM SEO Complete Guide
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/services/llm-visibility-services" className="text-purple-600 hover:text-purple-700 underline">
                  LLM Visibility Services
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/compare/llm-seo-vs-traditional-seo" className="text-purple-600 hover:text-purple-700 underline">
                  LLM SEO vs Traditional SEO
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/pricing/llm-seo-pricing-guide" className="text-purple-600 hover:text-purple-700 underline">
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
