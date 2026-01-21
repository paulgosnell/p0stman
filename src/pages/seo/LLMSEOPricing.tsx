import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  DollarSign,
  CheckCircle,
  ArrowRight,
  Plus,
  Minus,
  HelpCircle,
  TrendingUp,
  FileSearch,
  Zap,
  BarChart3,
  Target,
  Clock
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "Why is there a price range?",
    answer: "Pricing varies based on several factors: the number of pages requiring optimization, technical complexity of your current setup, competitive landscape in your industry, and the depth of implementation needed. We provide a specific quote after an initial discovery call."
  },
  {
    question: "Are there ongoing costs?",
    answer: "Ongoing retainer is not required, but highly recommended for sustained results. LLMs update their training data and citation patterns regularly. We offer monthly monitoring and optimization packages starting at $2,500/month to ensure your content stays visible."
  },
  {
    question: "How does this compare to hiring in-house?",
    answer: "An in-house LLM SEO specialist commands $80,000-$120,000 salary plus benefits. Our one-time implementation projects at $5,000-$15,000 deliver comparable results without the ongoing overhead. For ongoing needs, our retainers are a fraction of FTE cost."
  },
  {
    question: "Do you guarantee results?",
    answer: "We guarantee our implementation work meets best practices and follows current LLM optimization standards. We cannot guarantee specific citation numbers as AI responses vary by user, query, and time. We do provide before/after tracking and measurable improvements."
  },
  {
    question: "Can I start with an audit and decide later?",
    answer: "Absolutely. That's exactly what the audit tier is designed for. You'll receive a comprehensive analysis and actionable recommendations. You can implement changes yourself or engage us for implementation based on audit findings."
  }
];

const tldrPoints = [
  "LLM SEO audits: $2,500-$5,000",
  "Implementation projects: $5,000-$15,000",
  "Ongoing programs: $15,000-$30,000+",
  "ROI context: LLM traffic converts at 4.4x traditional search"
];

const pricingTiers = [
  {
    name: "LLM SEO Audit",
    price: "$2,500-$5,000",
    timeline: "3-5 days",
    description: "Understand your current AI visibility before committing to optimization.",
    includes: [
      "Current AI citation analysis",
      "Competitor benchmarking",
      "Content gaps identification",
      "Schema audit",
      "Prioritized recommendations",
      "90-day action plan"
    ],
    bestFor: "Companies wanting to understand current AI visibility before committing",
    featured: false
  },
  {
    name: "LLM SEO Implementation",
    price: "$5,000-$15,000",
    timeline: "1-3 weeks",
    description: "Hands-on optimization of your existing content for AI citation.",
    includes: [
      "Everything in Audit",
      "Schema implementation",
      "Content restructuring (15-40 pages)",
      "Entity optimization",
      "Internal linking strategy",
      "Technical recommendations",
      "30-day monitoring"
    ],
    bestFor: "Companies ready to optimize existing content",
    featured: true
  },
  {
    name: "LLM SEO Growth",
    price: "$15,000-$30,000",
    timeline: "3-6 months",
    description: "Comprehensive AI visibility with ongoing optimization and new content.",
    includes: [
      "Everything in Implementation",
      "New content creation",
      "Ongoing monitoring",
      "Monthly optimization sprints",
      "Competitive tracking",
      "Quarterly strategic reviews",
      "Priority support"
    ],
    bestFor: "Companies wanting comprehensive AI visibility with ongoing optimization",
    featured: false
  }
];

const costFactors = [
  {
    icon: FileSearch,
    title: "Number of Pages",
    description: "More pages to optimize means more work. We price based on page count tiers."
  },
  {
    icon: BarChart3,
    title: "Content Quality",
    description: "Well-structured existing content requires less restructuring than poorly organized content."
  },
  {
    icon: Target,
    title: "Competitive Landscape",
    description: "Highly competitive industries require more sophisticated strategies and ongoing optimization."
  },
  {
    icon: Zap,
    title: "Technical Complexity",
    description: "Legacy CMS, custom frameworks, or complex site architectures affect implementation time."
  },
  {
    icon: TrendingUp,
    title: "Monitoring Needs",
    description: "Ongoing tracking and optimization add recurring costs but ensure sustained visibility."
  }
];

const roiStats = [
  { stat: "4.4x", label: "Higher conversion rate from LLM traffic vs traditional search" },
  { stat: "527%", label: "Year-over-year growth in AI search usage" },
  { stat: "86%", label: "Of LLM citations come from brand-owned content" },
  { stat: "12-18mo", label: "Citation authority compounds over time like SEO" }
];

export default function LLMSEOPricing() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [factorsRef, factorsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [comparisonRef, comparisonInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [roiRef, roiInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "LLM SEO Pricing: What AI Search Optimization Costs (2026)",
    "description": "Transparent LLM SEO pricing from POSTMAN. Audits from $2,500, implementation from $5,000, ongoing programs from $15,000. Real costs based on 50+ projects.",
    "author": {
      "@type": "Organization",
      "name": "POSTMAN"
    },
    "publisher": {
      "@type": "Organization",
      "name": "POSTMAN",
      "url": "https://p0stman.com"
    },
    "datePublished": "2026-01-01",
    "dateModified": "2026-01-18"
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
          <title>LLM SEO Pricing: What AI Search Optimization Costs (2026) | POSTMAN</title>
          <meta name="description" content="Transparent LLM SEO pricing from POSTMAN. Audits from $2,500, implementation from $5,000, ongoing programs from $15,000. Real costs based on 50+ projects." />
          <meta name="keywords" content="LLM SEO pricing, AI search optimization cost, LLM optimization pricing, AI SEO services, ChatGPT SEO pricing" />
          <meta property="og:title" content="LLM SEO Pricing: What AI Search Optimization Costs (2026) | POSTMAN" />
          <meta property="og:description" content="Transparent LLM SEO pricing from POSTMAN. Audits from $2,500, implementation from $5,000, ongoing programs from $15,000." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="LLM SEO Pricing: What AI Search Optimization Costs (2026)" />
          <meta name="twitter:description" content="Transparent LLM SEO pricing from POSTMAN. Audits from $2,500, implementation from $5,000, ongoing programs from $15,000." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/pricing/llm-seo-pricing-guide" />
          <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-medium text-sm tracking-wide">LLM SEO Pricing</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  LLM SEO Pricing:<br />What AI Search<br />Optimization Costs
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  LLM SEO pricing ranges from $2,500 for audits to $30,000+ for comprehensive programs. Most projects fall in $5,000-$15,000 range. Cost depends on: number of pages, current content quality, competitive landscape, and ongoing monitoring needs.
                </p>

                {/* TL;DR Box */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 text-left max-w-2xl mx-auto">
                  <h2 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    TL;DR
                  </h2>
                  <ul className="space-y-2">
                    {tldrPoints.map((point, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Get a Custom Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section ref={pricingRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-thin mb-4">LLM SEO Pricing Tiers</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Transparent pricing based on 50+ successful LLM SEO projects. Choose the level that matches your needs.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {pricingTiers.map((tier, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-8 rounded-2xl border ${
                        tier.featured
                          ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300 shadow-lg scale-105'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      {tier.featured && (
                        <div className="text-green-600 text-sm font-medium mb-2">Most Popular</div>
                      )}
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{tier.name}</h3>
                      <div className="text-3xl font-light text-green-600 mb-1">{tier.price}</div>
                      <div className="text-sm text-gray-500 mb-4">{tier.timeline}</div>
                      <p className="text-gray-600 text-sm mb-6">{tier.description}</p>

                      <ul className="space-y-3 mb-6">
                        {tier.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500">
                          <span className="font-medium text-gray-700">Best for:</span> {tier.bestFor}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Determines Cost Section */}
        <section ref={factorsRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={factorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8 text-center">What Determines LLM SEO Cost?</h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                  Five key factors influence your final pricing. Understanding these helps you budget accurately.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {costFactors.map((factor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={factorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-gray-50 rounded-xl border border-gray-100"
                    >
                      <factor.icon className="w-8 h-8 text-green-600 mb-4" />
                      <h3 className="font-medium text-gray-900 mb-2">{factor.title}</h3>
                      <p className="text-gray-600 text-sm">{factor.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LLM SEO vs Traditional SEO Pricing */}
        <section ref={comparisonRef} className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8">LLM SEO vs Traditional SEO Pricing</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="p-6 bg-gray-800 rounded-xl">
                    <h3 className="text-xl font-medium mb-4 text-green-400">LLM SEO Advantages</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>20-40% less expensive than traditional SEO on average</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>Faster results (weeks vs months)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>Less reliance on expensive link building</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span>Content-focused approach is more sustainable</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gray-800 rounded-xl">
                    <h3 className="text-xl font-medium mb-4 text-gray-400">Traditional SEO Typical Costs</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-400">
                        <span className="w-4 h-4 bg-gray-600 rounded-full flex-shrink-0 mt-1" />
                        <span>Monthly retainers: $3,000-$10,000/month</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <span className="w-4 h-4 bg-gray-600 rounded-full flex-shrink-0 mt-1" />
                        <span>Link building: $1,000-$5,000/month additional</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <span className="w-4 h-4 bg-gray-600 rounded-full flex-shrink-0 mt-1" />
                        <span>Results timeline: 6-12 months</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <span className="w-4 h-4 bg-gray-600 rounded-full flex-shrink-0 mt-1" />
                        <span>Highly competitive for top positions</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-300 text-center">
                  LLM SEO is currently a blue ocean. Early investment yields outsized returns while competition is still low.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section ref={roiRef} className="py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={roiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-4 text-center">ROI Considerations</h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                  LLM SEO investment pays back quickly. Traffic from AI citations converts at significantly higher rates.
                </p>

                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  {roiStats.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={roiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-white rounded-xl text-center shadow-sm"
                    >
                      <div className="text-3xl font-light text-green-600 mb-2">{item.stat}</div>
                      <p className="text-gray-600 text-sm">{item.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 bg-white rounded-xl border border-green-200">
                  <h3 className="font-medium text-gray-900 mb-3">Why LLM Traffic Converts Better</h3>
                  <p className="text-gray-600">
                    Users who find you through AI recommendations have higher intent. The AI has already vetted and recommended your content as the answer to their specific question. This pre-qualification means visitors arrive ready to engage, not still shopping around.
                  </p>
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
                  <h2 className="text-3xl font-thin">Pricing FAQs</h2>
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
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get a custom quote based on your specific needs. We'll analyze your current AI visibility and recommend the right tier for your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                >
                  Get a Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-all text-lg font-medium"
                >
                  Book a Discovery Call
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
                <Link to="/services/llm-visibility-services" className="text-green-600 hover:text-green-700 underline">
                  LLM Visibility Services
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/services/chatgpt-advertising-services" className="text-green-600 hover:text-green-700 underline">
                  ChatGPT Advertising Services
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/services/generative-engine-optimization-geo" className="text-green-600 hover:text-green-700 underline">
                  GEO Services
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/guides/llm-seo-complete-guide-2026" className="text-green-600 hover:text-green-700 underline">
                  LLM SEO Complete Guide
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
