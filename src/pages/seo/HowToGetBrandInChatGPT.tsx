import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Award,
  CheckCircle,
  ArrowRight,
  Plus,
  Minus,
  HelpCircle,
  Search,
  FileText,
  BarChart3,
  Code2,
  RefreshCw,
  Target,
  TrendingUp,
  MessageSquare,
  Database,
  Clock,
  Zap
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "How long does it take to start getting mentions?",
    answer: "Typically 2-4 weeks after implementing optimizations. This is often faster than traditional SEO because AI models pull from structured, authoritative content more readily than search engines index new pages."
  },
  {
    question: "Can I pay to get mentioned?",
    answer: "Not directly. AI citations are earned through content quality and structure, not advertising. Paid ads exist separately within some AI platforms but don't influence organic citations in responses."
  },
  {
    question: "What if competitors are mentioned but not me?",
    answer: "Analyze why they're being cited. Usually it's a content structure issue - they likely have better Q&A formatting, more specific data, or clearer entity signals. Audit their content and apply the same principles to yours."
  },
  {
    question: "Does this work for Claude and Perplexity too?",
    answer: "Yes, the same principles apply across all major AI assistants. Structured content, specific data, and clear entity signals help you get cited by ChatGPT, Claude, Perplexity, Gemini, and other AI systems."
  },
  {
    question: "Should I create new content or optimize existing?",
    answer: "Start with existing content that already performs well. Add Q&A structures, FAQ schema, and specific data points. Once optimized, identify gaps and create new content to fill them."
  }
];

const tldrPoints = [
  "Q&A formatted content is 40% more likely to be cited by AI",
  "FAQ schema markup directly feeds into AI responses",
  "Specific numbers beat vague claims every time",
  "86% of AI citations come from brand-owned sources"
];

const citationSteps = [
  {
    step: 1,
    title: "Audit Current AI Visibility",
    description: "Ask ChatGPT about your industry and see who gets mentioned. Note the patterns in how competitors are cited."
  },
  {
    step: 2,
    title: "Identify Citable Content",
    description: "Find your most authoritative pages - product pages, how-to guides, pricing, comparisons. These are your citation candidates."
  },
  {
    step: 3,
    title: "Restructure for Q&A Format",
    description: "Rewrite key sections as questions and answers. Use H2 headings as questions, with direct answers immediately following."
  },
  {
    step: 4,
    title: "Implement FAQ Schema",
    description: "Add JSON-LD FAQPage schema to all pages with Q&A content. This structured data is directly consumed by AI systems."
  },
  {
    step: 5,
    title: "Add Specific Data Points",
    description: "Replace vague claims with exact figures. '40% faster' beats 'much faster'. Include dates, percentages, and measurable outcomes."
  },
  {
    step: 6,
    title: "Strengthen Entity Signals",
    description: "Use consistent brand terminology. Add Organization schema. Link to authoritative sources and earn backlinks from recognized sites."
  },
  {
    step: 7,
    title: "Add Visible Date Stamps",
    description: "Include 'Last updated: [date]' on all key pages. AI systems favor fresh content with clear recency signals."
  }
];

const contentFormats = [
  { format: "FAQ Pages", citationRate: "40%", icon: HelpCircle, description: "Q&A format matches how AI responds to queries" },
  { format: "Comparison Tables", citationRate: "35%", icon: BarChart3, description: "Structured data AI can easily parse and cite" },
  { format: "Pricing Pages", citationRate: "30%", icon: Target, description: "Specific numbers AI uses for recommendations" },
  { format: "How-to Guides", citationRate: "28%", icon: FileText, description: "Step-by-step content AI can reference" },
  { format: "Definitions", citationRate: "25%", icon: MessageSquare, description: "Clear explanations AI quotes directly" },
  { format: "Statistics Pages", citationRate: "32%", icon: TrendingUp, description: "Original data AI needs to cite sources" }
];

const decisionFactors = [
  { factor: "Structured", description: "Q&A format, clear headings, organized content", icon: Database },
  { factor: "Specific", description: "Exact numbers, dates, measurable claims", icon: Target },
  { factor: "Consistent", description: "Same terminology across all pages", icon: RefreshCw },
  { factor: "Recent", description: "Visible update dates, fresh content", icon: Clock },
  { factor: "Authoritative", description: "Backlinks, citations, recognized sources", icon: Award }
];

export default function HowToGetBrandInChatGPT() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [howRef, howInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formatsRef, formatsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [technicalRef, technicalInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Get Your Brand Mentioned in ChatGPT (2026 Guide)",
    "description": "Practical guide to getting ChatGPT to cite and recommend your brand. Learn the content structures, schema markup, and optimization techniques that earn AI citations.",
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
    "datePublished": "2026-01-18",
    "dateModified": "2026-01-18",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://p0stman.com/guides/how-to-get-your-brand-in-chatgpt"
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
    "name": "How to Get Your Brand Cited by ChatGPT",
    "description": "A step-by-step guide to optimizing your content for AI citations",
    "step": citationSteps.map(step => ({
      "@type": "HowToStep",
      "position": step.step,
      "name": step.title,
      "text": step.description
    }))
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>How to Get Your Brand Mentioned in ChatGPT (2026 Guide) | P0STMAN</title>
          <meta name="description" content="Practical guide to getting ChatGPT to cite and recommend your brand. Learn the content structures, schema markup, and optimization techniques that earn AI citations." />
          <meta name="keywords" content="how to get your brand in ChatGPT, ChatGPT brand mentions, AI citations, LLM optimization, ChatGPT SEO, AI visibility" />
          <meta property="og:title" content="How to Get Your Brand Mentioned in ChatGPT (2026 Guide) | P0STMAN" />
          <meta property="og:description" content="Practical guide to getting ChatGPT to cite and recommend your brand. Learn the content structures, schema markup, and optimization techniques that earn AI citations." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="How to Get Your Brand Mentioned in ChatGPT (2026 Guide)" />
          <meta name="twitter:description" content="Practical guide to getting ChatGPT to cite and recommend your brand." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/guides/how-to-get-your-brand-in-chatgpt" />
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
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
                  <Award className="w-5 h-5 text-teal-500" />
                  <span className="text-teal-500 font-medium text-sm tracking-wide">2026 Guide</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  How to Get Your Brand<br />Mentioned in ChatGPT
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  To get your brand mentioned in ChatGPT: structure content in Q&A format (40% more likely to be cited), implement FAQ schema, include specific statistics, use consistent terminology, and keep content fresh with visible update dates. 86% of AI citations come from brand-owned content.
                </p>

                {/* TL;DR Box */}
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-8 text-left max-w-2xl mx-auto">
                  <h2 className="text-lg font-medium text-teal-800 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    TL;DR
                  </h2>
                  <ul className="space-y-2">
                    {tldrPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-teal-700">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                  >
                    Get AI Visibility Help
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why ChatGPT Brand Mentions Matter */}
        <section ref={whyRef} className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Search className="w-6 h-6 text-teal-400" />
                  <h2 className="text-3xl md:text-4xl font-thin">Why ChatGPT Brand Mentions Matter</h2>
                </div>

                <div className="space-y-6 text-gray-300">
                  <p className="text-xl text-white">
                    700 million people use ChatGPT every week.
                  </p>
                  <p>
                    When they ask for product recommendations, service providers, or solutions to problems, ChatGPT responds with specific brand names. These aren't ads - they're earned citations based on content quality and structure.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="p-6 bg-gray-800 rounded-xl">
                      <div className="text-3xl font-light text-teal-400 mb-2">700M</div>
                      <p className="text-gray-400">Weekly active users asking questions</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl">
                      <div className="text-3xl font-light text-teal-400 mb-2">Direct</div>
                      <p className="text-gray-400">Answers with brand names, not link lists</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-xl">
                      <div className="text-3xl font-light text-teal-400 mb-2">Earned</div>
                      <p className="text-gray-400">Visibility through content, not paid ads</p>
                    </div>
                  </div>
                  <p className="text-teal-400 font-medium mt-8">
                    If you're not being mentioned, your competitors are. And users trust AI recommendations like they trust expert advice.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How ChatGPT Decides What to Cite */}
        <section ref={howRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={howInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8 text-center">How ChatGPT Decides What to Cite</h2>

                <p className="text-lg text-gray-600 mb-8 text-center">
                  AI systems favor content with these five characteristics:
                </p>

                <div className="grid md:grid-cols-5 gap-4">
                  {decisionFactors.map((factor, index) => (
                    <div key={index} className="p-6 bg-teal-50 rounded-xl border border-teal-100 text-center">
                      <factor.icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                      <h3 className="font-medium text-gray-900 mb-2">{factor.factor}</h3>
                      <p className="text-gray-600 text-sm">{factor.description}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-lg text-gray-700 text-center">
                  Content that checks all five boxes gets cited. Content that's missing any becomes invisible to AI.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7 Steps to Get Your Brand Cited */}
        <section ref={stepsRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8 text-center">7 Steps to Get Your Brand Cited by ChatGPT</h2>

                <div className="space-y-6">
                  {citationSteps.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={stepsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-6 p-6 bg-white rounded-xl border border-gray-200"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-medium text-lg">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Formats That Get Cited Most */}
        <section ref={formatsRef} className="py-24 bg-teal-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8 text-center">Content Formats That Get Cited Most</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {contentFormats.map((item, index) => (
                    <div key={index} className="p-6 bg-teal-800 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <item.icon className="w-6 h-6 text-cyan-400" />
                        <h3 className="font-medium text-white text-lg">{item.format}</h3>
                        <span className="ml-auto text-cyan-400 font-medium">+{item.citationRate}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-center text-gray-300">
                  Citation rates shown are relative improvements over unstructured content. FAQ pages lead because they match the question-answer format AI uses to respond.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Schema Implementation (Technical) */}
        <section ref={technicalRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={technicalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-6 h-6 text-teal-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">FAQ Schema Implementation (Technical)</h2>
                </div>

                <p className="text-lg text-gray-600 mb-6">
                  Add this JSON-LD to your pages with Q&A content. This structured data is directly consumed by AI systems:
                </p>

                <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is [your product/service]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct, specific answer with measurable claims..."
      }
    },
    {
      "@type": "Question",
      "name": "How does [your product] compare to [competitor]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Comparison with specific data points..."
      }
    }
  ]
}
</script>`}
                  </pre>
                </div>

                <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                  <h4 className="font-medium text-teal-800 mb-2">Implementation Tips:</h4>
                  <ul className="space-y-2 text-teal-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Place in the head section of your HTML</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Keep answers concise but complete (50-150 words ideal)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Include your brand name in at least one answer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Validate with Google's Rich Results Test</span>
                    </li>
                  </ul>
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
                  <HelpCircle className="w-6 h-6 text-teal-500" />
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
                Ready to Get Your Brand Cited?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We help brands optimize for AI visibility. From content audits to full implementation, we'll get you mentioned where it matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                >
                  Get AI Visibility Audit
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
                <Link to="/services/llm-visibility-services" className="text-teal-500 hover:text-teal-600 underline">
                  LLM Visibility Services
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/services/chatgpt-advertising-services" className="text-teal-500 hover:text-teal-600 underline">
                  ChatGPT Advertising Services
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/guides/llm-seo-complete-guide-2026" className="text-teal-500 hover:text-teal-600 underline">
                  LLM SEO Complete Guide
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/compare/chatgpt-ads-vs-google-ads" className="text-teal-500 hover:text-teal-600 underline">
                  ChatGPT Ads vs Google Ads
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
