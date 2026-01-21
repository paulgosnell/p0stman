import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowLeftRight,
  CheckCircle,
  ArrowRight,
  Plus,
  Minus,
  HelpCircle,
  MessageSquare,
  Search,
  Target,
  Users,
  Zap,
  TrendingUp,
  Clock
} from 'lucide-react';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

const faqs = [
  {
    question: "Should I switch from Google to ChatGPT?",
    answer: "No, add ChatGPT Ads to your mix rather than switching. Google handles 5 trillion+ searches annually and remains essential for keyword-based intent. ChatGPT offers a different moment in the customer journey. Use both for comprehensive coverage."
  },
  {
    question: "Which will have better ROI?",
    answer: "Too early to tell definitively. Early data shows 4.4x higher conversion rates in conversational contexts, but ChatGPT Ads pricing isn't finalized. The lack of competition (1 ad per response) suggests strong potential ROI for early adopters."
  },
  {
    question: "Can I advertise on both?",
    answer: "Yes, and you should. ChatGPT captures users in problem-solving mode, while Google captures users at various stages of the funnel. They complement each other rather than compete."
  },
  {
    question: "What about Perplexity and Claude ads?",
    answer: "Perplexity is testing sponsored answers with brands like Indeed and Whole Foods. Claude (Anthropic) has no announced advertising plans yet. The AI search ad space is evolving rapidly."
  }
];

const tldrPoints = [
  "ChatGPT: conversation-context targeting vs Google: keyword targeting",
  "ChatGPT: single ad per response vs Google: multiple ads per query",
  "ChatGPT: 700M weekly users vs Google: 5T+ annual searches",
  "Recommendation: Test ChatGPT ads while maintaining Google Ads"
];

const comparisonData = [
  {
    factor: "Targeting",
    chatgpt: "Conversation context",
    google: "Keywords + audiences",
    winner: "depends"
  },
  {
    factor: "Placement",
    chatgpt: "Bottom of AI response",
    google: "Search results, display",
    winner: "chatgpt"
  },
  {
    factor: "User Intent",
    chatgpt: "High (problem-solving)",
    google: "Varies (early to late funnel)",
    winner: "chatgpt"
  },
  {
    factor: "Competition",
    chatgpt: "1 ad per response",
    google: "10+ ads per query",
    winner: "chatgpt"
  },
  {
    factor: "Audience Size",
    chatgpt: "700M weekly users",
    google: "5T+ searches/year",
    winner: "google"
  },
  {
    factor: "Pricing",
    chatgpt: "TBD (expect premium)",
    google: "Auction-based CPC",
    winner: "tbd"
  },
  {
    factor: "Maturity",
    chatgpt: "New (Q1 2026)",
    google: "20+ years",
    winner: "google"
  }
];

const useGoogleFor = [
  "Massive reach and scale",
  "Established keyword targeting",
  "Proven platform maturity",
  "Full-funnel coverage"
];

const useChatGPTFor = [
  "Contextual, high-intent users",
  "First-mover advantage",
  "Less ad competition",
  "Problem-solving moments"
];

export default function ChatGPTAdsVsGoogleAds() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [tableRef, tableInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [targetingRef, targetingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [placementRef, placementInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [intentRef, intentInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whenRef, whenInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ChatGPT Ads vs Google Ads: Complete Comparison (2026)",
    "description": "ChatGPT ads vs Google Ads: targeting, pricing, placement, and ROI compared. Which platform should you advertise on? Analysis from POSTMAN.",
    "author": {
      "@type": "Organization",
      "name": "POSTMAN"
    },
    "publisher": {
      "@type": "Organization",
      "name": "POSTMAN",
      "logo": {
        "@type": "ImageObject",
        "url": "https://p0stman.com/og-image.png"
      }
    },
    "datePublished": "2026-01-18",
    "dateModified": "2026-01-18",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://p0stman.com/compare/chatgpt-ads-vs-google-ads"
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
          <title>ChatGPT Ads vs Google Ads: Complete Comparison (2026) | POSTMAN</title>
          <meta name="description" content="ChatGPT ads vs Google Ads: targeting, pricing, placement, and ROI compared. Which platform should you advertise on? Analysis from POSTMAN." />
          <meta name="keywords" content="ChatGPT ads vs Google ads, ChatGPT advertising, OpenAI ads, AI search ads, Google Ads comparison, ChatGPT marketing" />
          <meta property="og:title" content="ChatGPT Ads vs Google Ads: Complete Comparison (2026) | POSTMAN" />
          <meta property="og:description" content="ChatGPT ads vs Google Ads: targeting, pricing, placement, and ROI compared. Which platform should you advertise on?" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta property="og:url" content="https://p0stman.com/compare/chatgpt-ads-vs-google-ads" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="ChatGPT Ads vs Google Ads: Complete Comparison (2026) | POSTMAN" />
          <meta name="twitter:description" content="ChatGPT ads vs Google Ads: targeting, pricing, placement, and ROI compared." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/compare/chatgpt-ads-vs-google-ads" />
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
                  <ArrowLeftRight className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500 font-medium text-sm tracking-wide">Platform Comparison</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight">
                  ChatGPT Ads vs<br />Google Ads
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  ChatGPT ads (launching Q1 2026) use conversation-context targeting and appear at the bottom of AI responses. Google Ads use keyword targeting and appear in search results. ChatGPT has 700M weekly users with high intent; Google handles 5T+ annual searches. Both have a place in your media mix.
                </p>

                {/* TL;DR Box */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-6 md:p-8 text-left mb-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-500" />
                    TL;DR
                  </h2>
                  <ul className="space-y-3">
                    {tldrPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
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
                    Get AI Advertising Strategy
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section ref={tableRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={tableInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-4 text-center">Complete Comparison</h2>
                <p className="text-gray-600 text-center mb-12">How the two platforms stack up across key factors</p>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        <th className="text-left p-4 md:p-6 font-medium">Factor</th>
                        <th className="text-center p-4 md:p-6 font-medium">
                          <div className="flex items-center justify-center gap-2">
                            <MessageSquare className="w-5 h-5" />
                            ChatGPT Ads
                          </div>
                        </th>
                        <th className="text-center p-4 md:p-6 font-medium">
                          <div className="flex items-center justify-center gap-2">
                            <Search className="w-5 h-5" />
                            Google Ads
                          </div>
                        </th>
                        <th className="text-center p-4 md:p-6 font-medium">Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-4 md:p-6 font-medium text-gray-900">{row.factor}</td>
                          <td className={`p-4 md:p-6 text-center ${row.winner === 'chatgpt' ? 'bg-orange-50 text-orange-700 font-medium' : 'text-gray-600'}`}>
                            {row.chatgpt}
                          </td>
                          <td className={`p-4 md:p-6 text-center ${row.winner === 'google' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600'}`}>
                            {row.google}
                          </td>
                          <td className="p-4 md:p-6 text-center">
                            {row.winner === 'chatgpt' && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                                <MessageSquare className="w-4 h-4" />
                                ChatGPT
                              </span>
                            )}
                            {row.winner === 'google' && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                <Search className="w-4 h-4" />
                                Google
                              </span>
                            )}
                            {row.winner === 'depends' && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                Depends
                              </span>
                            )}
                            {row.winner === 'tbd' && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                <Clock className="w-4 h-4" />
                                TBD
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Targeting Section */}
        <section ref={targetingRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={targetingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-6 h-6 text-orange-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">Targeting: Conversation vs Keywords</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-orange-500" />
                      ChatGPT: Full Conversation Context
                    </h3>
                    <p className="text-gray-600 mb-4">
                      ChatGPT ads understand the entire conversation, not just keywords. When someone asks about planning a wedding, the AI knows context: budget, location, timeline, and specific needs discussed throughout the chat.
                    </p>
                    <p className="text-gray-700 font-medium">
                      This means more relevant ad placement based on actual intent, not just search terms.
                    </p>
                  </div>

                  <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <Search className="w-5 h-5 text-blue-500" />
                      Google: Keyword + Audience Targeting
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Google targets based on search queries plus audience signals (demographics, interests, behavior). You bid on keywords and Google shows your ad when queries match.
                    </p>
                    <p className="text-gray-700 font-medium">
                      Powerful for capturing explicit intent, but limited to the query itself without deeper context.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Placement and Competition Section */}
        <section ref={placementRef} className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={placementInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-orange-400" />
                  <h2 className="text-3xl md:text-4xl font-thin">Placement and Competition</h2>
                </div>

                <div className="space-y-8 mt-8">
                  <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                    <h3 className="text-xl font-medium mb-3 text-orange-400">ChatGPT: One Ad, Zero Competition</h3>
                    <p className="text-gray-300 mb-4">
                      ChatGPT shows a single, clearly-labeled ad at the bottom of AI responses. No auction against 10+ competitors. No ad blindness from cluttered results. Your message gets undivided attention.
                    </p>
                    <p className="text-white font-medium">
                      Early data suggests this format could drive 4.4x higher conversion rates compared to traditional search ads.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                    <h3 className="text-xl font-medium mb-3 text-blue-400">Google: Competitive Auction Environment</h3>
                    <p className="text-gray-300 mb-4">
                      Google search results typically show 4 ads at the top, organic results, then more ads. Your ad competes with 10+ others for attention. Users have developed ad blindness after years of exposure.
                    </p>
                    <p className="text-white font-medium">
                      Higher competition means higher CPCs and constant optimization to stand out.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* User Intent Section */}
        <section ref={intentRef} className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={intentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                  <h2 className="text-3xl md:text-4xl font-thin">User Intent and Conversion</h2>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  The key difference is when and why users see your ad.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
                    <div className="text-5xl font-light text-orange-500 mb-4">4.4x</div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Higher Conversion (ChatGPT)</h3>
                    <p className="text-gray-600">
                      Users engaging with ChatGPT are actively problem-solving. They're not browsing - they're seeking solutions. Ads appear at the moment of highest intent, after the AI has helped frame their needs.
                    </p>
                  </div>

                  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                    <div className="text-5xl font-light text-gray-400 mb-4">Varies</div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Full Funnel (Google)</h3>
                    <p className="text-gray-600">
                      Google captures users at every stage: awareness ("what is X"), consideration ("X vs Y"), and decision ("buy X"). Intent varies widely based on the search query and where users are in their journey.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* When to Use Each Section */}
        <section ref={whenRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={whenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-thin mb-8 text-center">When to Use Each Platform</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-white rounded-2xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-6">
                      <Search className="w-6 h-6 text-blue-500" />
                      <h3 className="text-xl font-medium text-gray-900">Use Google Ads For</h3>
                    </div>
                    <ul className="space-y-4">
                      {useGoogleFor.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-600">
                          <CheckCircle className="w-5 h-5 text-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
                    <div className="flex items-center gap-2 mb-6">
                      <MessageSquare className="w-6 h-6 text-orange-500" />
                      <h3 className="text-xl font-medium text-gray-900">Use ChatGPT Ads For</h3>
                    </div>
                    <ul className="space-y-4">
                      {useChatGPTFor.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-600">
                          <CheckCircle className="w-5 h-5 text-orange-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-amber-100 rounded-xl border border-amber-200 text-center">
                  <p className="text-lg text-gray-800">
                    <strong>Our recommendation:</strong> Test ChatGPT ads when they launch while maintaining your Google Ads presence. The platforms serve different moments in the customer journey.
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
                  <HelpCircle className="w-6 h-6 text-orange-500" />
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
                Ready to Navigate AI Advertising?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                The AI ads landscape is evolving fast. We help businesses develop strategies that span both traditional and AI-native platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:shadow-lg hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-[1.02] text-lg font-medium"
                >
                  Get AI Strategy Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/ai-agents"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-all text-lg font-medium"
                >
                  Explore AI Solutions
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
                <Link to="/services/chatgpt-advertising-services" className="text-orange-500 hover:text-orange-600 underline">
                  ChatGPT Advertising Services
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/compare/llm-seo-vs-traditional-seo" className="text-orange-500 hover:text-orange-600 underline">
                  LLM SEO vs Traditional SEO
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/guides/llm-seo-complete-guide-2026" className="text-orange-500 hover:text-orange-600 underline">
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
