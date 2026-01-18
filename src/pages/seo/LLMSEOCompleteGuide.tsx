import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Search,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Plus,
  Minus,
  HelpCircle,
  Zap,
  BarChart3,
  Clock,
  FileText,
  Target,
  TrendingUp,
  BookOpen,
  Settings,
  RefreshCw,
  CheckSquare,
  Square
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "Is LLM SEO worth investing in?",
    answer: "Yes. LLM traffic converts at 4.4x the rate of traditional search traffic. AI search usage is growing 527% year-over-year, and early movers are capturing significant market share. The investment in LLM SEO pays dividends as AI-generated citations compound over time."
  },
  {
    question: "How do I know if my LLM SEO is working?",
    answer: "Three methods: Manual testing by querying AI assistants for your target topics, tracking analytics for referral traffic from AI sources (perplexity.ai, chat.openai.com, etc.), and using specialized monitoring tools like Profound or Otterly to track citation frequency."
  },
  {
    question: "What's the ROI of LLM SEO?",
    answer: "LLM traffic converts at 4.4x the rate of traditional search. 86% of AI citations come from brand-managed content sources, meaning your owned content is your best asset. Unlike traditional SEO where rankings fluctuate, AI citations tend to compound over time."
  },
  {
    question: "Can small businesses do LLM SEO?",
    answer: "Absolutely. The fundamentals of LLM SEO — Q&A content structure, clear formatting, specific statistics, and freshness signals — don't require big budgets. Small businesses with niche expertise often outperform larger competitors in AI citations for their specialty topics."
  },
  {
    question: "How long until I see results from LLM SEO?",
    answer: "Initial visibility improvements can appear within 2-4 weeks as AI models re-index your content. Full results typically emerge within 8-12 weeks. This is actually faster than traditional SEO, where rankings can take 6-12 months to materialize."
  }
];

const comparisonData = [
  { aspect: "Goal", traditional: "Rank in search results", llm: "Get cited in AI answers" },
  { aspect: "Focus", traditional: "Keywords and backlinks", llm: "Questions and answers" },
  { aspect: "Content Style", traditional: "Keyword-optimized prose", llm: "Direct, specific answers" },
  { aspect: "Structure", traditional: "SEO-friendly HTML", llm: "Q&A format, clear hierarchies" },
  { aspect: "Schema", traditional: "Optional enhancement", llm: "Critical for extraction" },
  { aspect: "Timeline", traditional: "6-12 months", llm: "2-12 weeks" },
  { aspect: "Metrics", traditional: "Rankings, traffic", llm: "Citations, referral traffic" },
  { aspect: "Backlinks", traditional: "Critical ranking factor", llm: "Less important than content quality" },
  { aspect: "Freshness", traditional: "Helps some queries", llm: "Essential for all content" },
  { aspect: "Specificity", traditional: "Broad keyword targeting", llm: "Precise facts and figures" }
];

const checklistItems = {
  contentStructure: [
    "Lead with the direct answer in first 50 words",
    "Use Q&A format for main content sections",
    "Include specific statistics with sources",
    "Add 'Quick Answer' or 'TL;DR' at the top",
    "Structure content with clear H2/H3 hierarchies",
    "Use bullet points and numbered lists",
    "Include comparison tables where relevant"
  ],
  technical: [
    "Implement FAQPage schema markup",
    "Add Article schema with author and date",
    "Include visible 'Last Updated' dates",
    "Ensure fast page load times",
    "Use descriptive, question-based URLs",
    "Add proper meta descriptions with answers"
  ],
  entitySignals: [
    "Maintain consistent brand terminology",
    "Link to authoritative sources",
    "Include author credentials and expertise",
    "Reference industry-standard definitions",
    "Cross-reference with your other content"
  ],
  maintenance: [
    "Update statistics quarterly",
    "Refresh content when industry changes",
    "Add new FAQs based on search queries",
    "Monitor AI citation performance",
    "Test content against AI assistants monthly"
  ]
};

const tools = [
  {
    category: "Citation Monitoring",
    items: [
      { name: "Profound", description: "Track AI citations across ChatGPT, Claude, Perplexity" },
      { name: "Otterly", description: "Monitor brand mentions in AI responses" },
      { name: "Brand24", description: "AI-powered brand monitoring with LLM tracking" }
    ]
  },
  {
    category: "Content Optimization",
    items: [
      { name: "Clearscope", description: "Content optimization with AI-friendly signals" },
      { name: "Frase", description: "Q&A focused content briefs and optimization" },
      { name: "Surfer SEO", description: "Content structure analysis for better extraction" }
    ]
  },
  {
    category: "Schema & Technical",
    items: [
      { name: "Schema.org Validator", description: "Test FAQPage and Article markup" },
      { name: "Google Rich Results Test", description: "Verify schema implementation" },
      { name: "Screaming Frog", description: "Audit schema across your site" }
    ]
  }
];

export default function LLMSEOCompleteGuide() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whatIsRef, whatIsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [comparisonRef, comparisonInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [principlesRef, principlesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [checklistRef, checklistInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [toolsRef, toolsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleCheckItem = (item: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(item)) {
      newChecked.delete(item);
    } else {
      newChecked.add(item);
    }
    setCheckedItems(newChecked);
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "LLM SEO: The Complete Guide to AI Search Optimization (2026)",
    "description": "Master LLM SEO with this comprehensive guide. Learn how to optimize content for ChatGPT, Claude, Perplexity, and Google AI Overviews. Strategies, tools, and implementation.",
    "author": {
      "@type": "Person",
      "name": "Paul Gosnell",
      "url": "https://p0stman.com/about"
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
      "@id": "https://p0stman.com/guides/llm-seo-complete-guide-2026"
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

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>LLM SEO: The Complete Guide to AI Search Optimization (2026) | P0STMAN</title>
          <meta name="description" content="Master LLM SEO with this comprehensive guide. Learn how to optimize content for ChatGPT, Claude, Perplexity, and Google AI Overviews. Strategies, tools, and implementation." />
          <meta name="keywords" content="LLM SEO, AI search optimization, ChatGPT SEO, Claude optimization, Perplexity SEO, AI Overviews, generative engine optimization, GEO" />
          <meta property="og:title" content="LLM SEO: The Complete Guide to AI Search Optimization (2026)" />
          <meta property="og:description" content="Master LLM SEO with this comprehensive guide. Learn how to optimize content for ChatGPT, Claude, Perplexity, and Google AI Overviews." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="LLM SEO: The Complete Guide to AI Search Optimization (2026)" />
          <meta name="twitter:description" content="Master LLM SEO with this comprehensive guide. Learn how to optimize content for ChatGPT, Claude, Perplexity, and Google AI Overviews." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/guides/llm-seo-complete-guide-2026" />
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
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
                  <Search className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-medium text-sm tracking-wide">Complete Guide</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  LLM SEO: The Complete Guide to AI Search Optimization
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Learn how to optimize your content for ChatGPT, Claude, Perplexity, and Google AI Overviews. Strategies, tools, and implementation for 2026.
                </p>

                {/* Quick Answer Box */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 text-left max-w-3xl mx-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">Quick Answer</span>
                  </div>
                  <p className="text-gray-700">
                    LLM SEO is the practice of optimizing content so Large Language Models can find, understand, and cite it in AI-generated responses. Key tactics: Q&A content structure, FAQ schema, specific statistics, consistent terminology, and visible freshness signals.
                  </p>
                </div>

                {/* TL;DR */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left max-w-3xl mx-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-800">TL;DR</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>LLM SEO = optimizing for AI-generated answers, not just rankings</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>86% of AI citations come from brand-managed sources</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Q&A format content gets 40% more AI citations</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>LLM traffic converts at 4.4x rate of traditional search</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is LLM SEO Section */}
        <section ref={whatIsRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={whatIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                  <h2 className="text-3xl md:text-4xl font-thin">What is LLM SEO?</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  LLM SEO (Large Language Model Search Engine Optimization) is the practice of optimizing content so AI assistants like ChatGPT, Claude, and Perplexity can find, understand, and cite your content in their responses.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-3xl font-light text-green-600">52%</div>
                        <div className="text-sm text-gray-500">of users now use AI for search</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      More than half of internet users now turn to AI assistants for information before traditional search engines.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Target className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-3xl font-light text-green-600">60%</div>
                        <div className="text-sm text-gray-500">zero-click searches</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      60% of Google searches now end without a click. AI Overviews answer the question directly on the results page.
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-600">
                  Unlike traditional SEO where you optimize to rank in a list, LLM SEO optimizes your content to be the source AI models cite when answering questions. The goal shifts from "getting clicked" to "getting cited."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section ref={comparisonRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                  <h2 className="text-3xl md:text-4xl font-thin">LLM SEO vs Traditional SEO</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  Understanding the differences helps you prioritize the right tactics for each channel.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-4 border border-gray-200 font-medium text-gray-900">Aspect</th>
                        <th className="text-left p-4 border border-gray-200 font-medium text-gray-900">Traditional SEO</th>
                        <th className="text-left p-4 border border-gray-200 font-medium text-green-700 bg-green-50">LLM SEO</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={comparisonInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          className="hover:bg-gray-50"
                        >
                          <td className="p-4 border border-gray-200 font-medium text-gray-900">{row.aspect}</td>
                          <td className="p-4 border border-gray-200 text-gray-600">{row.traditional}</td>
                          <td className="p-4 border border-gray-200 text-gray-700 bg-green-50/50">{row.llm}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Principles Section */}
        <section ref={principlesRef} className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={principlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-6 h-6 text-green-400" />
                  <h2 className="text-3xl md:text-4xl font-thin">Core LLM SEO Principles</h2>
                </div>

                <p className="text-lg text-gray-300 mb-8">
                  These six principles form the foundation of effective LLM SEO.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Lead with the Answer",
                      description: "Put the direct answer in your first 50 words. LLMs extract content from the beginning of articles.",
                      icon: Target
                    },
                    {
                      title: "Structure for Extraction",
                      description: "Use Q&A format, clear hierarchies, and bullet points. Make it easy for AI to pull specific facts.",
                      icon: FileText
                    },
                    {
                      title: "Be Specific",
                      description: "Include exact numbers, dates, and statistics. Vague content doesn't get cited.",
                      icon: BarChart3
                    },
                    {
                      title: "Consistent Terminology",
                      description: "Use the same terms your audience uses. Inconsistent vocabulary confuses LLM entity recognition.",
                      icon: BookOpen
                    },
                    {
                      title: "Schema Markup",
                      description: "Implement FAQPage and Article schema. Structured data helps AI understand your content structure.",
                      icon: Settings
                    },
                    {
                      title: "Freshness Signals",
                      description: "Show visible 'Last Updated' dates. LLMs prefer recent, maintained content.",
                      icon: RefreshCw
                    }
                  ].map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={principlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-gray-800 rounded-xl"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                          <principle.icon className="w-5 h-5 text-green-400" />
                        </div>
                        <h3 className="font-medium text-white">{principle.title}</h3>
                      </div>
                      <p className="text-gray-400">{principle.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Checklist Section */}
        <section ref={checklistRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={checklistInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckSquare className="w-6 h-6 text-green-600" />
                  <h2 className="text-3xl md:text-4xl font-thin">LLM SEO Implementation Checklist</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  Use this interactive checklist to audit and optimize your content for AI search.
                </p>

                <div className="space-y-8">
                  {Object.entries(checklistItems).map(([category, items], categoryIndex) => {
                    const categoryTitles: Record<string, string> = {
                      contentStructure: "Content Structure",
                      technical: "Technical SEO",
                      entitySignals: "Entity Signals",
                      maintenance: "Ongoing Maintenance"
                    };

                    return (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={checklistInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        className="p-6 bg-gray-50 rounded-xl"
                      >
                        <h3 className="font-medium text-gray-900 mb-4">{categoryTitles[category]}</h3>
                        <div className="space-y-3">
                          {items.map((item, index) => {
                            const itemKey = `${category}-${index}`;
                            const isChecked = checkedItems.has(itemKey);
                            return (
                              <button
                                key={index}
                                onClick={() => toggleCheckItem(itemKey)}
                                className="w-full flex items-start gap-3 text-left hover:bg-white p-2 rounded-lg transition-colors"
                              >
                                {isChecked ? (
                                  <CheckSquare className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                ) : (
                                  <Square className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                )}
                                <span className={isChecked ? "text-gray-500 line-through" : "text-gray-700"}>
                                  {item}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section ref={toolsRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={toolsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="w-6 h-6 text-green-600" />
                  <h2 className="text-3xl md:text-4xl font-thin">LLM SEO Tools</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  Essential tools for monitoring, optimizing, and measuring your LLM SEO performance.
                </p>

                <div className="space-y-8">
                  {tools.map((category, categoryIndex) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={toolsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    >
                      <h3 className="font-medium text-gray-900 mb-4">{category.category}</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {category.items.map((tool, index) => (
                          <div
                            key={index}
                            className="p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 transition-colors"
                          >
                            <h4 className="font-medium text-gray-900 mb-2">{tool.name}</h4>
                            <p className="text-sm text-gray-600">{tool.description}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
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
                Ready to optimize for AI search?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                LLM SEO is the future of organic visibility. Start implementing these strategies today, or let us help you build an AI-optimized content strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
                >
                  Get LLM SEO Help
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-all text-lg font-medium"
                >
                  View Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
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
