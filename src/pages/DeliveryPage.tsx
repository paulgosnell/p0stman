import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, CheckCircle, ArrowRight, ChevronDown, Calendar, Sparkles, ExternalLink, TrendingUp, Users, Globe, Building2, Clock, Target, DollarSign, Rocket, Send, MessageCircle, Linkedin, Phone, Mail } from 'lucide-react';
import deliveryContent from '../content/delivery.json';

// Quick Action Button Component
const QuickActionButton: React.FC<{
  text: string;
  onClick: () => void;
  isVisible: boolean;
  delay?: number;
  className?: string;
}> = ({ text, onClick, isVisible, delay = 0, className = "" }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`flex justify-end mt-6 ${className}`}
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="group relative px-4 py-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-600/30 text-gray-300 font-light text-sm hover:bg-gray-700/50 hover:border-gray-500/40 hover:text-white transition-all duration-200"
      >
        {/* Button Content */}
        <div className="relative flex items-center gap-2">
          <span>{text}</span>
          <motion.div
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" strokeWidth={1.5}/>
          </motion.div>
        </div>
      </motion.button>
    </motion.div>
  );
};

// Reusable Chat Section Component
const ChatSection: React.FC<{
  messages: string[];
  isVisible: boolean;
  delay?: number;
  showReplyBox?: boolean;
  onReply?: (reply: string) => void;
  className?: string;
  quickActionText?: string;
  onQuickAction?: () => void;
  showQuickAction?: boolean;
}> = ({ messages, isVisible, delay = 0, showReplyBox = false, onReply, className = "", quickActionText, onQuickAction, showQuickAction = false }) => {
  const [showMessages, setShowMessages] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [userReply, setUserReply] = useState('');
  const [hasReplied, setHasReplied] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    // Show all messages at once after delay
    const timer = setTimeout(() => {
      setShowMessages(true);
      if (showReplyBox) {
        setTimeout(() => setShowReply(true), 1000);
      }
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isVisible, delay, showReplyBox]);

  const handleReply = () => {
    if (userReply.trim()) {
      setHasReplied(true);
      setShowReply(false);
      onReply?.(userReply);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`max-w-4xl mx-auto mb-16 ${className}`}
    >
      <div className="flex items-start gap-6">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-gray-700/30 shadow-xl">
            <img
              src="https://api.chilledsites.com/storage/v1/object/public/p0stman/paul.jpg"
              alt="Paul Gosnell"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Single Combined Chat Message */}
        <div className="flex-1 space-y-4">
          {showMessages && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4 border border-gray-700/30 shadow-lg"
            >
              <div className="text-white/90 leading-relaxed space-y-2">
                {messages.map((message, index) => (
                  <p key={index} className="text-sm">{message}</p>
                ))}
              </div>
            </motion.div>
          )}

          {/* User Reply */}
          {hasReplied && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-end"
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl rounded-tr-sm p-4 border border-gray-700/30 max-w-xs shadow-lg">
                <p className="text-white/90 leading-relaxed text-sm">{userReply}</p>
              </div>
            </motion.div>
          )}

          {/* Reply Box */}
          {showReply && !hasReplied && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex gap-3 items-end"
            >
              <input
                type="text"
                value={userReply}
                onChange={(e) => setUserReply(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleReply()}
                placeholder="Type your reply..."
                className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-700/50 focus:ring-2 focus:ring-gray-600/20 text-sm shadow-lg"
              />
              <button
                onClick={handleReply}
                disabled={!userReply.trim()}
                className="p-3 bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl text-gray-400 hover:bg-gray-700/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <Send className="w-4 h-4" strokeWidth={1.5}/>
              </button>
            </motion.div>
          )}

          {/* Quick Action Button */}
          {showQuickAction && quickActionText && onQuickAction && showMessages && (
            <QuickActionButton
              text={quickActionText}
              onClick={onQuickAction}
              isVisible={true}
              delay={1.2}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};


const DeliveryPage: React.FC = () => {
  const { agencySlug } = useParams<{ agencySlug: string }>();
  const [searchParams] = useSearchParams();
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [revealedSections, setRevealedSections] = useState<Set<number>>(new Set([0]));

  const agencyName = searchParams.get('agency') ||
    (agencySlug ? agencySlug.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ') : 'Your Agency');

  const repName = searchParams.get('rep');
  const customCalendly = searchParams.get('cal') || deliveryContent.defaultCalendly;
  const greeting = repName ? `Hey ${repName}!` : `Dear ${agencyName}`;

  const openEnvelope = () => setIsEnvelopeOpen(true);
  const handleCTAClick = () => window.open(customCalendly, '_blank');

  // Function to reveal next section and scroll to it
  const revealNextSection = (sectionNumber: number, elementId?: string) => {
    setRevealedSections(prev => new Set([...prev, sectionNumber]));

    // Scroll to the section after a brief delay for animation
    if (elementId) {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 300);
    }
  };



  return (
    <div>
      <Helmet>
        <title>Special Delivery for {agencyName} | POSTMAN</title>
        <meta name="description" content={`A special delivery from The Postman for ${agencyName}. AI-powered prototypes, product builds, and growth experiments — delivered fast.`} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        <AnimatePresence mode="wait">
          {!isEnvelopeOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex items-center justify-center relative"
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-transparent"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-12"
                >
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center">
                      <Bot className="w-9 h-9 text-white" strokeWidth={1.5}/>
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold bg-gray-700 ">
                        POSTMAN
                      </h1>
                      <p className="text-gray-400 text-sm">AI-Native Product Studio</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  className="relative mx-auto mb-8"
                >
                  <div onClick={openEnvelope} className="cursor-pointer group relative">
                    <div className="absolute inset-0 bg-gray-900/30 rounded-3xl blur-xl transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500"></div>
                    <div className="relative w-[500px] h-[320px] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden group-hover:scale-105 transition-all duration-500">
                      <div className="absolute top-0 left-0 w-full h-32 bg-gray-100 rounded-t-3xl border-b border-gray-300">
                        <div className="absolute inset-0 bg-white/10"></div>
                      </div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-900 rounded-full border-4 border-gray-800 shadow-lg flex items-center justify-center">
                        <div className="text-gray-100 font-bold text-xs">P0ST</div>
                      </div>
                      <div className="absolute bottom-12 left-12 right-12">
                        <div className="text-gray-600 text-lg font-light mb-2">Special Delivery for</div>
                        <div className="text-gray-900 text-4xl font-bold mb-4 tracking-tight">{agencyName}</div>
                        <div className="text-gray-500 text-base">From: POSTMAN (Paul Gosnell)</div>
                      </div>
                      <div className="absolute top-8 right-8 w-24 h-32 bg-gray-900 rounded-xl border-4 border-white shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <div className="flex flex-col items-center justify-center h-full text-white text-center">
                          <Sparkles className="w-6 h-6 mb-1" strokeWidth={1.5}/>
                          <div className="text-xs font-bold leading-tight">SPECIAL<br />DELIVERY<br />2025</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-4"
                >
                  <div className="text-gray-300 text-xl font-light">Click to open your delivery</div>
                  <div className="flex items-center justify-center text-gray-400 text-sm animate-bounce">
                    <ArrowRight className="w-4 h-4 mr-2 rotate-90" strokeWidth={1.5}/>
                    Tap the envelope
                    <ArrowRight className="w-4 h-4 ml-2 rotate-90" strokeWidth={1.5}/>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="min-h-screen relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-bg.png')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.03),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03),transparent_50%)]"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
                {/* Combined Opening Introduction */}
                <ChatSection
                  messages={[
                    `${greeting}, Paul here from POSTMAN.`,
                    `I created POSTMAN to support agencies, teams and start ups in product delivery.`,
                    `Tight deadlines. Limited budgets. Clients and stakeholders who want something real, fast.`,
                    `I can drop in mid-pitch with a live prototype that seals the deal.`,
                    `Also can stay on to lead the full build — from MVP to enterprise rollout.`,
                    `Either way: you get quialty delivery, fast and affordably.`
                  ]}
                  isVisible={revealedSections.has(0)}
                  showQuickAction={true}
                  quickActionText="Show me those problems"
                  onQuickAction={() => revealNextSection(1, 'problems-section')}
                />

                {/* Stunning Problems We Solve Section */}
                {revealedSections.has(1) && (
                  <motion.div
                    id="problems-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-32 pt-20"
                  >
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Time Pressure - Animated Clock */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, rotateY: -15 }}
                        animate={{ opacity: revealedSections.has(1) ? 1 : 0, y: revealedSections.has(1) ? 0 : 30, rotateY: revealedSections.has(1) ? 0 : -15 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl hover:shadow-gray-900/30"
                      >
                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-4 right-4 w-32 h-32 bg-gray-800/30 rounded-full blur-2xl animate-pulse" />
                        <div className="absolute bottom-4 left-4 w-24 h-24 bg-gray-800/30 rounded-full blur-xl animate-pulse delay-1000" />

                        {/* Floating Clock Elements */}
                        <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-16 h-16 border-2 border-gray-400/50 rounded-full flex items-center justify-center"
                          >
                            <motion.div
                              animate={{ rotate: -360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="w-1 h-6 bg-gray-400/70 rounded-full origin-bottom"
                            />
                          </motion.div>
                        </div>

                        <div className="relative p-10 h-full flex flex-col">
                          <div className="flex items-start gap-6 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="p-4 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg"
                            >
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              >
                                <Clock className="w-12 h-12 text-gray-400" strokeWidth={1.5}/>
                              </motion.div>
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors">Time-to-Market Pressure</h3>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: revealedSections.has(1) ? "100%" : 0 }}
                                transition={{ duration: 1, delay: 1 }}
                                className="h-1 bg-gray-700 rounded-full mb-4"
                              />
                            </div>
                          </div>
                          <div className="space-y-4 flex-1">
                            <p className="text-gray-400 font-bold text-lg">AI-accelerated development will compress timelines dramatically (often 2-5x)</p>
                            <p className="text-gray-300 font-light leading-relaxed">AI-powered development process cuts months off traditional timelines while maintaining enterprise quality.</p>
                          </div>

                          {/* Speed Indicator */}
                          <div className="mt-6 flex items-center gap-2 text-gray-400/80">
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                                  className="w-2 h-8 bg-gray-700 rounded-full"
                                />
                              ))}
                            </div>
                            <span className="text-sm font-light">Speed Boost</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Budget Constraints - Money Flow Animation */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, rotateY: 15 }}
                        animate={{ opacity: revealedSections.has(1) ? 1 : 0, y: revealedSections.has(1) ? 0 : 30, rotateY: revealedSections.has(1) ? 0 : 15 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-3 hover:-rotate-1 hover:shadow-2xl hover:shadow-gray-900/30"
                      >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Floating Money Elements */}
                        <div className="absolute inset-0 overflow-hidden">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ y: "100%", x: `${Math.random() * 100}%`, opacity: 0 }}
                              animate={{
                                y: "-100%",
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 4,
                                delay: i * 0.5,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              className="absolute w-6 h-6 text-gray-400/30"
                            >
                              <DollarSign className="w-full h-full" strokeWidth={1.5}/>
                            </motion.div>
                          ))}
                        </div>

                        <div className="relative p-10 h-full flex flex-col">
                          <div className="flex items-start gap-6 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              className="p-4 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg"
                            >
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              >
                                <DollarSign className="w-12 h-12 text-gray-400" strokeWidth={1.5}/>
                              </motion.div>
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors">Budget & Resource Constraints</h3>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: revealedSections.has(1) ? "100%" : 0 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                className="h-1 bg-gray-700 rounded-full mb-4"
                              />
                            </div>
                          </div>
                          <div className="space-y-4 flex-1">
                            <p className="text-gray-400 font-bold text-lg">Fractional senior support at a fraction of the cost of full-time</p>
                            <p className="text-gray-300 font-light leading-relaxed">Get C-level strategic thinking and senior technical execution without the full-time overhead.</p>
                          </div>

                          {/* Cost Savings Indicator */}
                          <div className="mt-6 flex items-center justify-between">
                            <div className="text-gray-400/80">
                              <div className="text-2xl font-bold">70%</div>
                              <div className="text-xs">Cost Savings</div>
                            </div>
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              className="w-8 h-8 border-2 border-gray-700/50 border-t-green-400 rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* Technical Challenges - Code Matrix Effect */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, rotateX: 15 }}
                        animate={{ opacity: revealedSections.has(1) ? 1 : 0, y: revealedSections.has(1) ? 0 : 30, rotateX: revealedSections.has(1) ? 0 : 15 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-900/30"
                      >
                        {/* Matrix Code Background */}
                        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ y: "-100%" }}
                                animate={{ y: "100%" }}
                                transition={{
                                  duration: 3,
                                  delay: i * 0.2,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                                className="absolute text-gray-400/30 text-xs font-mono"
                                style={{ left: `${i * 12.5}%` }}
                              >
                                {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="relative p-10 h-full flex flex-col">
                          <div className="flex items-start gap-6 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="p-4 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg"
                            >
                              <motion.div
                                animate={{ rotateY: [0, 180, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                              >
                                <Target className="w-12 h-12 text-gray-400" strokeWidth={1.5}/>
                              </motion.div>
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors">Complex Technical Challenges</h3>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: revealedSections.has(1) ? "100%" : 0 }}
                                transition={{ duration: 1, delay: 1.4 }}
                                className="h-1 bg-gray-700 rounded-full mb-4"
                              />
                            </div>
                          </div>
                          <div className="space-y-4 flex-1">
                            <p className="text-gray-400 font-bold text-lg">Proven track record scaling 1→40 teams</p>
                            <p className="text-gray-300 font-light leading-relaxed">From startup MVPs to enterprise transformations, I've solved complex technical and organizational challenges across every scale and industry.</p>
                          </div>

                          {/* Complexity Meter */}
                          <div className="mt-6 space-y-2">
                            <div className="flex justify-between text-gray-400/80 text-sm">
                              <span>Complexity Level</span>
                              <span>Production Ready</span>
                            </div>
                            <div className="w-full bg-blue-900/30 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: revealedSections.has(1) ? "95%" : 0 }}
                                transition={{ duration: 2, delay: 1.6 }}
                                className="h-2 bg-gray-700 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Digital Transformation - Rocket Launch */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, rotateX: -15 }}
                        animate={{ opacity: revealedSections.has(1) ? 1 : 0, y: revealedSections.has(1) ? 0 : 30, rotateX: revealedSections.has(1) ? 0 : -15 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-900/30"
                      >
                        {/* Rocket Trail Effect */}
                        <div className="absolute inset-0 overflow-hidden">
                          <motion.div
                            initial={{ x: "-100%", y: "100%" }}
                            animate={{ x: "100%", y: "-100%" }}
                            transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute w-2 h-20 bg-gray-700/50 rounded-full transform rotate-45"
                          />
                        </div>

                        {/* Floating Particles */}
                        <div className="absolute inset-0">
                          {[...Array(12)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{
                                x: `${Math.random() * 100}%`,
                                y: `${Math.random() * 100}%`,
                                scale: 0
                              }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 2,
                                delay: Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
                            />
                          ))}
                        </div>

                        <div className="relative p-10 h-full flex flex-col">
                          <div className="flex items-start gap-6 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1, y: -5 }}
                              className="p-4 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg"
                            >
                              <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              >
                                <Rocket className="w-12 h-12 text-gray-400" strokeWidth={1.5}/>
                              </motion.div>
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors">Digital Transformation</h3>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: revealedSections.has(1) ? "100%" : 0 }}
                                transition={{ duration: 1, delay: 1.6 }}
                                className="h-1 bg-gray-700 rounded-full mb-4"
                              />
                            </div>
                          </div>
                          <div className="space-y-4 flex-1">
                            <p className="text-gray-400 font-bold text-lg">End-to-end transformation expertise</p>
                            <p className="text-gray-300 font-light leading-relaxed">Navigate the complexity of digital transformation with strategic guidance, technical execution, and rollout & adoption that deliver measurable results.</p>
                          </div>

                          {/* Launch Status */}
                          <div className="mt-6 flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="w-3 h-3 bg-purple-400 rounded-full"
                              />
                              <span className="text-gray-400/80 text-sm">Ready for Launch</span>
                            </div>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                              className="w-6 h-6 border border-gray-700/50 border-t-purple-400 rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* How We Fix These - The Process */}
                <ChatSection
                  messages={[
                    `Here's how I deliver — fast and production‑ready.`,
                    `AI‑powered product strategy, design, and build process.`,
                    `I combine strategic thinking with hands‑on execution, using cutting‑edge AI tools to deliver 10x faster than traditional methods.`,
                    `Want to see my exact process breakdown?`
                  ]}
                  isVisible={revealedSections.has(1)}
                  delay={0.2}
                  showQuickAction={true}
                  quickActionText="Break down the process"
                  onQuickAction={() => revealNextSection(2, 'process-section')}
                />

                {/* Detailed Process Section */}
                {revealedSections.has(2) && (
                  <motion.div
                    id="process-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-32 pt-20"
                  >
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Step 1: Strategy & Discovery */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, rotateY: -15 }}
                        animate={{ opacity: revealedSections.has(2) ? 1 : 0, y: revealedSections.has(2) ? 0 : 30, rotateY: revealedSections.has(2) ? 0 : -15 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-900/30"
                      >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-24 h-24 bg-gray-800/30 rounded-full blur-xl animate-pulse" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-500/20 rounded-full blur-lg animate-pulse delay-1000" />

                        <div className="relative p-8 h-full flex flex-col">
                          {/* Step Number */}
                          <div className="flex items-center gap-4 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-16 h-16 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg flex items-center justify-center"
                            >
                              <span className="text-2xl font-bold text-gray-400">1</span>
                            </motion.div>
                            <div className="flex-1">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: revealedSections.has(2) ? "100%" : 0 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="h-1 bg-gray-700 rounded-full"
                              />
                            </div>
                          </div>

                          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors">Strategy & Discovery</h3>

                          <div className="space-y-4 flex-1">
                            <p className="text-gray-400 font-bold text-lg">Deep-dive analysis in 48 hours</p>
                            <ul className="space-y-3 text-gray-300 font-light">
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5}/>
                                <span>Market research & competitive analysis</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5}/>
                                <span>User journey mapping & pain point identification</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5}/>
                                <span>Technical architecture planning</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5}/>
                                <span>AI-powered feature prioritization</span>
                              </li>
                            </ul>
                          </div>

                          {/* Timeline */}
                          <div className="mt-6 flex items-center gap-2 text-gray-400/80">
                            <Clock className="w-4 h-4" strokeWidth={1.5}/>
                            <span className="text-sm font-light">1-2 Days</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Step 2: Design & Prototype */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: revealedSections.has(2) ? 1 : 0, y: revealedSections.has(2) ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-900/30"
                      >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-24 h-24 bg-gray-800/30 rounded-full blur-xl animate-pulse" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-500/20 rounded-full blur-lg animate-pulse delay-1000" />

                        <div className="relative p-8 h-full flex flex-col">
                          {/* Step Number */}
                          <div className="flex items-center gap-4 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              className="w-16 h-16 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg flex items-center justify-center"
                            >
                              <span className="text-2xl font-bold text-gray-400">2</span>
                            </motion.div>
                            <div className="flex-1">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: revealedSections.has(2) ? "100%" : 0 }}
                                transition={{ duration: 1, delay: 1.0 }}
                                className="h-1 bg-gray-700 rounded-full"
                              />
                            </div>
                          </div>

                          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors">Design & Prototype</h3>

                          <div className="space-y-4 flex-1">
                            <p className="text-gray-400 font-bold text-lg">Interactive prototypes in 1 week</p>
                            <ul className="space-y-3 text-gray-300 font-light">
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5}/>
                                <span>AI-generated design systems & components</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5}/>
                                <span>High-fidelity interactive prototypes</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5}/>
                                <span>User testing & feedback integration</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5}/>
                                <span>Pitch-ready demos & presentations</span>
                              </li>
                            </ul>
                          </div>

                          {/* Timeline */}
                          <div className="mt-6 flex items-center gap-2 text-gray-400/80">
                            <Clock className="w-4 h-4" strokeWidth={1.5}/>
                            <span className="text-sm font-light">3-7 Days</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Step 3: Build & Deploy */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, rotateY: 15 }}
                        animate={{ opacity: revealedSections.has(2) ? 1 : 0, y: revealedSections.has(2) ? 0 : 30, rotateY: revealedSections.has(2) ? 0 : 15 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-900/30"
                      >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-24 h-24 bg-gray-800/30 rounded-full blur-xl animate-pulse" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-emerald-500/20 rounded-full blur-lg animate-pulse delay-1000" />

                        <div className="relative p-8 h-full flex flex-col">
                          {/* Step Number */}
                          <div className="flex items-center gap-4 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-16 h-16 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg flex items-center justify-center"
                            >
                              <span className="text-2xl font-bold text-gray-400">3</span>
                            </motion.div>
                            <div className="flex-1">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: revealedSections.has(2) ? "100%" : 0 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                className="h-1 bg-gray-700 rounded-full"
                              />
                            </div>
                          </div>

                          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors">Build & Deploy</h3>

                          <div className="space-y-4 flex-1">
                            <p className="text-gray-400 font-bold text-lg">Production-ready in 2-4 weeks</p>
                            <ul className="space-y-3 text-gray-300 font-light">
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5}/>
                                <span>AI-accelerated full-stack development</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5}/>
                                <span>Enterprise-grade security & scalability</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5}/>
                                <span>Automated testing & CI/CD pipelines</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5}/>
                                <span>Cloud deployment & monitoring setup</span>
                              </li>
                            </ul>
                          </div>

                          {/* Timeline */}
                          <div className="mt-6 flex items-center gap-2 text-gray-400/80">
                            <Clock className="w-4 h-4" strokeWidth={1.5}/>
                            <span className="text-sm font-light">2-4 Weeks</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Process Timeline Connector */}
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: revealedSections.has(2) ? 1 : 0, scaleX: revealedSections.has(2) ? 1 : 0 }}
                      transition={{ duration: 1.5, delay: 1.4 }}
                      className="mt-16 mb-8 flex items-center justify-center"
                    >
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-gray-700/50 flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-400">1</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: revealedSections.has(2) ? "120px" : 0 }}
                          transition={{ duration: 0.8, delay: 1.6 }}
                          className="h-0.5 bg-gray-700"
                        />
                        <div className="w-8 h-8 rounded-full bg-purple-500/30 border-2 border-gray-700/50 flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-400">2</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: revealedSections.has(2) ? "120px" : 0 }}
                          transition={{ duration: 0.8, delay: 1.8 }}
                          className="h-0.5 bg-gray-700"
                        />
                        <div className="w-8 h-8 rounded-full bg-green-500/30 border-2 border-gray-700/50 flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-400">3</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Process Summary */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: revealedSections.has(2) ? 1 : 0, y: revealedSections.has(2) ? 0 : 20 }}
                      transition={{ duration: 0.8, delay: 2.0 }}
                      className="text-center"
                    >
                      <div className="max-w-3xl mx-auto bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
                        <h4 className="text-2xl font-bold text-white mb-4">Total Timeline: 3-6 Weeks</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          From initial strategy to production deployment. Compare that to traditional 6-12 month development cycles.
                          <span className="text-gray-400 font-semibold"> That's 10x faster delivery</span> without compromising on quality or scalability.
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* Case Studies Introduction */}
                <ChatSection
                  messages={[
                    `Want to see it in action?`,
                    `Here are launches and transformations across banking, media, government and startups — from pitch‑winning prototypes to full builds.`,
                    `Whether you're leading a brand, an innovation team, or an agency pitch — I drop in where you need momentum.`
                  ]}
                  isVisible={revealedSections.has(2)}
                  delay={0.5}
                  showQuickAction={true}
                  quickActionText="Show me the case studies"
                  onQuickAction={() => revealNextSection(3, 'case-studies-section')}
                />

                {/* Featured Case Studies - Beautiful Panels */}
                {revealedSections.has(3) && (
                  <motion.div
                    id="case-studies-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-32 pt-20"
                  >

                    {/* Hero Case Study - FAB Bank */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: revealedSections.has(2) ? 1 : 0, y: revealedSections.has(2) ? 0 : 30 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="mb-16"
                    >
                      <div
                        onClick={() => window.open('/case-study/fab-bank', '_blank')}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-gray-700/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-900/30"
                      >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="grid lg:grid-cols-2 gap-0">
                          {/* Content Side */}
                          <div className="relative p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/First_Abu_Dhabi_Bank_Logo.svg/500px-First_Abu_Dhabi_Bank_Logo.svg.png"
                                alt="FAB Bank Logo"
                                className="h-12 w-auto filter brightness-0 invert"
                              />
                              <div className="px-4 py-2 bg-gray-800/40 backdrop-blur-sm text-gray-400 text-sm font-bold rounded-full border border-gray-700/30">ENTERPRISE</div>
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-4">First Abu Dhabi Bank</h3>
                            <p className="text-xl text-gray-400 mb-6 font-light">Digital Transformation</p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                              Scaled from Innovation Lab project to 18-month enterprise transformation with 40+ experts across multiple departments. One of the region's biggest digital transformations.
                            </p>
                            <div className="grid grid-cols-3 gap-4 mb-8">
                              <div className="text-center bg-gray-50 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                                <div className="text-2xl font-bold text-white">40+</div>
                                <div className="text-sm text-gray-600">Team Size</div>
                              </div>
                              <div className="text-center bg-gray-50 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                                <div className="text-2xl font-bold text-white">18mo</div>
                                <div className="text-sm text-gray-600">Duration</div>
                              </div>
                              <div className="text-center bg-gray-50 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                                <div className="text-2xl font-bold text-white">60%</div>
                                <div className="text-sm text-gray-600">Efficiency</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-400 transition-colors">
                              <span className="font-light">View Full Case Study</span>
                              <ExternalLink className="w-5 h-5" strokeWidth={1.5}/>
                            </div>
                          </div>

                          {/* Image Side */}
                          <div className="relative aspect-video lg:aspect-auto">
                            <img
                              src="https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png"
                              alt="FAB Bank Project"
                              className="w-full h-full object-cover rounded-r-3xl group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-900/20 rounded-r-3xl" />
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Grid of Case Studies */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                      {/* Al Arabiya - Enterprise */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: revealedSections.has(2) ? 1 : 0, y: revealedSections.has(2) ? 0 : 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onClick={() => window.open('/case-study/al-arabiya', '_blank')}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-gray-700/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-900/30"
                      >
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src="https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png"
                            alt="Al Arabiya Project"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                          <div className="absolute top-4 left-4 flex items-center gap-3">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Al-Arabiya_new_logo.svg/500px-Al-Arabiya_new_logo.svg.png"
                              alt="Al Arabiya Logo"
                              className="h-8 w-auto filter brightness-0 invert"
                            />
                            <div className="px-3 py-1 bg-red-500/30 backdrop-blur-sm text-gray-400 text-xs font-bold rounded-full border border-gray-700/30">ENTERPRISE</div>
                          </div>
                        </div>

                        <div className="relative p-8">
                          <h3 className="text-2xl font-bold text-white mb-2">Al Arabiya News Platform</h3>
                          <p className="text-gray-400 mb-4 font-light">Media & Broadcasting</p>
                          <p className="text-gray-300 leading-relaxed mb-6">
                            Led international team of 20 to modernize leading news brand during COVID-19. Created personalized, customizable news experience from ground up.
                          </p>
                          <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-400 transition-colors">
                            <span className="font-light">View Case Study</span>
                            <ExternalLink className="w-4 h-4" strokeWidth={1.5}/>
                          </div>
                        </div>
                      </motion.div>

                      {/* Harmony - AI Built */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: revealedSections.has(2) ? 1 : 0, y: revealedSections.has(2) ? 0 : 30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        onClick={() => window.open('/case-study/harmony', '_blank')}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-gray-700/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-900/30"
                      >
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src="https://api.chilledsites.com/storage/v1/object/public/p0stman/harmony1.png"
                            alt="Harmony AI Music Platform"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                          <div className="absolute top-4 left-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-500/30 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-700/30">
                              <Bot className="w-5 h-5 text-gray-400" strokeWidth={1.5}/>
                            </div>
                            <div className="px-3 py-1 bg-purple-500/30 backdrop-blur-sm text-gray-400 text-xs font-bold rounded-full border border-gray-700/30">AI-BUILT</div>
                          </div>
                        </div>

                        <div className="relative p-8">
                          <h3 className="text-2xl font-bold text-white mb-2">Harmony AI Music Platform</h3>
                          <p className="text-gray-400 mb-4 font-light">AI-Powered Music Creation</p>
                          <p className="text-gray-300 leading-relaxed mb-6">
                            AI-powered music collaboration platform built in 4 weeks. Complete music creation suite with intelligent composition tools and real-time collaboration.
                          </p>
                          <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-400 transition-colors">
                            <span className="font-light">View Case Study</span>
                            <ExternalLink className="w-4 h-4" strokeWidth={1.5}/>
                          </div>
                        </div>
                      </motion.div>

                      {/* DoH Health - Enterprise */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: revealedSections.has(2) ? 1 : 0, y: revealedSections.has(2) ? 0 : 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        onClick={() => window.open('/case-study/doh-health', '_blank')}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-gray-700/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-900/30"
                      >
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png"
                            alt="DoH Health Project"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                          <div className="absolute top-4 left-4 flex items-center gap-3">
                            <img
                              src="https://api.chilledsites.com/storage/v1/object/public/p0stman/doh-logo.png"
                              alt="DoH Logo"
                              className="h-8 w-auto filter brightness-0 invert"
                            />
                            <div className="px-3 py-1 bg-green-500/30 backdrop-blur-sm text-gray-400 text-xs font-bold rounded-full border border-gray-700/30">GOVERNMENT</div>
                          </div>
                        </div>

                        <div className="relative p-8">
                          <h3 className="text-2xl font-bold text-white mb-2">My Health Coach</h3>
                          <p className="text-gray-400 mb-4 font-light">Department of Health Abu Dhabi</p>
                          <p className="text-gray-300 leading-relaxed mb-6">
                            Partnered with IBM to build standout health & fitness app for Abu Dhabi residents. Personalized wellness app integrating with Google Fit and Fitbit.
                          </p>
                          <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-400 transition-colors">
                            <span className="font-light">View Case Study</span>
                            <ExternalLink className="w-4 h-4" strokeWidth={1.5}/>
                          </div>
                        </div>
                      </motion.div>

                      {/* Rhythm AI - AI Built */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: revealedSections.has(2) ? 1 : 0, y: revealedSections.has(2) ? 0 : 30 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        onClick={() => window.open('/case-study/rhythm', '_blank')}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-gray-700/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-900/30"
                      >
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src="https://api.chilledsites.com/storage/v1/object/public/p0stman/rhythm1.png"
                            alt="Rhythm AI Running Coach"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                          <div className="absolute top-4 left-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-cyan-500/30 backdrop-blur-sm rounded-lg flex items-center justify-center border border-cyan-400/30">
                              <Bot className="w-5 h-5 text-gray-400" strokeWidth={1.5}/>
                            </div>
                            <div className="px-3 py-1 bg-cyan-500/30 backdrop-blur-sm text-gray-400 text-xs font-bold rounded-full border border-cyan-400/30">AI-BUILT</div>
                          </div>
                        </div>

                        <div className="relative p-8">
                          <h3 className="text-2xl font-bold text-white mb-2">Rhythm AI Running Coach</h3>
                          <p className="text-gray-400 mb-4 font-light">AI-Powered Fitness Coaching</p>
                          <p className="text-gray-300 leading-relaxed mb-6">
                            Intelligent running coach app with AI-powered training plans, real-time form analysis, and personalized coaching that adapts to your progress.
                          </p>
                          <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-400 transition-colors">
                            <span className="font-light">View Case Study</span>
                            <ExternalLink className="w-4 h-4" strokeWidth={1.5}/>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Enterprise Clients Introduction */}
                <ChatSection
                  messages={[
                    `Here are some clients I've delivered for.`,
                    `If you recognise these names, you'll recognise the standards I work to.`
                  ]}
                  isVisible={revealedSections.has(3)}
                  delay={0.6}
                  showQuickAction={true}
                  quickActionText="Show me the client roster"
                  onQuickAction={() => revealNextSection(4, 'clients-section')}
                />

                {/* Enterprise Clients Showcase - Stunning Visual */}
                {revealedSections.has(4) && (
                  <motion.div
                    id="clients-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/40 shadow-2xl mb-16 overflow-hidden pt-20"
                  >
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gray-900/10 rounded-3xl blur-xl" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.02),transparent_50%)]" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.02),transparent_50%)]" />

                    {/* Floating Particles */}
                    <div className="absolute inset-0">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            scale: 0
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 0.3, 0]
                          }}
                          transition={{
                            duration: 3,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
                        />
                      ))}
                    </div>

                    <div className="relative">
                      {/* Premium Client Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        {/* HSBC */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                          animate={{ opacity: revealedSections.has(2) ? 1 : 0, scale: revealedSections.has(2) ? 1 : 0.8, rotateY: revealedSections.has(2) ? 0 : -15 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="group relative bg-gray-900/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:border-gray-700/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-900/30"
                        >
                          <div className="flex items-center justify-center h-16 mb-3">
                            <img
                              src="https://api.chilledsites.com/storage/v1/object/public/p0stman/hsbc-logo.png"
                              alt="HSBC"
                              className="h-8 w-auto object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-500"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-white/90 font-bold text-sm group-hover:text-gray-400 transition-colors">HSBC</div>
                            <div className="text-gray-400 text-xs mt-1">Global Banking</div>
                          </div>
                        </motion.div>

                        {/* Visa */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                          animate={{ opacity: revealedSections.has(2) ? 1 : 0, scale: revealedSections.has(2) ? 1 : 0.8, rotateY: revealedSections.has(2) ? 0 : -15 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          className="group relative bg-gray-900/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:border-gray-700/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-900/30"
                        >
                          <div className="flex items-center justify-center h-16 mb-3">
                            <img
                              src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png"
                              alt="Visa"
                              className="h-8 w-auto object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-500"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-white/90 font-bold text-sm group-hover:text-gray-400 transition-colors">Visa</div>
                            <div className="text-gray-400 text-xs mt-1">Payments</div>
                          </div>
                        </motion.div>

                        {/* FAB */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                          animate={{ opacity: revealedSections.has(2) ? 1 : 0, scale: revealedSections.has(2) ? 1 : 0.8, rotateY: revealedSections.has(2) ? 0 : -15 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                          className="group relative bg-gray-900/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:border-gray-700/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-900/30"
                        >
                          <div className="flex items-center justify-center h-16 mb-3">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/First_Abu_Dhabi_Bank_Logo.svg/500px-First_Abu_Dhabi_Bank_Logo.svg.png"
                              alt="FAB"
                              className="h-10 w-auto object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-500"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-white/90 font-bold text-sm group-hover:text-gray-400 transition-colors">FAB</div>
                            <div className="text-gray-400 text-xs mt-1">Banking</div>
                          </div>
                        </motion.div>

                        {/* Al Arabiya */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                          animate={{ opacity: revealedSections.has(2) ? 1 : 0, scale: revealedSections.has(2) ? 1 : 0.8, rotateY: revealedSections.has(2) ? 0 : -15 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                          className="group relative bg-gray-900/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:border-gray-700/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-900/30"
                        >
                          <div className="flex items-center justify-center h-16 mb-3">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Al-Arabiya_new_logo.svg/500px-Al-Arabiya_new_logo.svg.png"
                              alt="Al Arabiya"
                              className="h-8 w-auto object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-500"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-white/90 font-bold text-sm group-hover:text-gray-400 transition-colors">Al Arabiya</div>
                            <div className="text-gray-400 text-xs mt-1">Media</div>
                          </div>
                        </motion.div>

                        {/* Al Futtaim */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                          animate={{ opacity: revealedSections.has(2) ? 1 : 0, scale: revealedSections.has(2) ? 1 : 0.8, rotateY: revealedSections.has(2) ? 0 : 15 }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                          className="group relative bg-gray-900/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:border-gray-700/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-900/30"
                        >
                          <div className="flex items-center justify-center h-16 mb-3">
                            <img
                              src="https://api.chilledsites.com/storage/v1/object/public/p0stman/al-futtaim-logo.png"
                              alt="Al Futtaim"
                              className="h-8 w-auto object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-500"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-white/90 font-bold text-sm group-hover:text-gray-400 transition-colors">Al Futtaim</div>
                            <div className="text-gray-400 text-xs mt-1">Conglomerate</div>
                          </div>
                        </motion.div>

                        {/* Coutts */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                          animate={{ opacity: revealedSections.has(2) ? 1 : 0, scale: revealedSections.has(2) ? 1 : 0.8, rotateY: revealedSections.has(2) ? 0 : 15 }}
                          transition={{ duration: 0.6, delay: 1.0 }}
                          className="group relative bg-gray-900/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:border-gray-700/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-900/30"
                        >
                          <div className="flex items-center justify-center h-16 mb-3">
                            <img
                              src="https://api.chilledsites.com/storage/v1/object/public/p0stman/coutts-logo.png"
                              alt="Coutts"
                              className="h-10 w-auto object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-500"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-white/90 font-bold text-sm group-hover:text-gray-400 transition-colors">Coutts</div>
                            <div className="text-gray-400 text-xs mt-1">Private Banking</div>
                          </div>
                        </motion.div>

                        {/* Ferrari World */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                          animate={{ opacity: revealedSections.has(2) ? 1 : 0, scale: revealedSections.has(2) ? 1 : 0.8, rotateY: revealedSections.has(2) ? 0 : 15 }}
                          transition={{ duration: 0.6, delay: 1.1 }}
                          className="group relative bg-gray-900/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:border-gray-700/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-900/30"
                        >
                          <div className="flex items-center justify-center h-16 mb-3">
                            <img
                              src="https://api.chilledsites.com/storage/v1/object/public/p0stman/yas-island-logo.png"
                              alt="Ferrari World"
                              className="h-12 w-auto object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-500"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-white/90 font-bold text-sm group-hover:text-gray-400 transition-colors">Ferrari World</div>
                            <div className="text-gray-400 text-xs mt-1">Entertainment</div>
                          </div>
                        </motion.div>

                        {/* Saudi Football */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                          animate={{ opacity: revealedSections.has(2) ? 1 : 0, scale: revealedSections.has(2) ? 1 : 0.8, rotateY: revealedSections.has(2) ? 0 : 15 }}
                          transition={{ duration: 0.6, delay: 1.2 }}
                          className="group relative bg-gray-900/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:border-gray-700/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-900/30"
                        >
                          <div className="flex items-center justify-center h-16 mb-3">
                            <img
                              src="https://api.chilledsites.com/storage/v1/object/public/p0stman/saudi-football.png"
                              alt="Saudi Football"
                              className="h-12 w-auto object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-500"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-white/90 font-bold text-sm group-hover:text-gray-400 transition-colors">Saudi Football</div>
                            <div className="text-gray-400 text-xs mt-1">Sports</div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Trust Indicators */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: revealedSections.has(2) ? 1 : 0, y: revealedSections.has(2) ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-600/30"
                      >
                        <div className="flex items-center gap-6 mb-4 md:mb-0">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-400">$2B+</div>
                            <div className="text-gray-400 text-xs">Combined Market Cap</div>
                          </div>
                          <div className="w-px h-12 bg-gray-600/50" />
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-400">50M+</div>
                            <div className="text-gray-400 text-xs">Users Impacted</div>
                          </div>
                          <div className="w-px h-12 bg-gray-600/50" />
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-400">15+</div>
                            <div className="text-gray-400 text-xs">Countries</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400">
                          <Sparkles className="w-4 h-4 text-gray-400" strokeWidth={1.5}/>
                          <span className="text-sm">Enterprise-grade delivery</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Recent Wins Introduction */}
                <ChatSection
                  messages={[
                    `Recent wins worth highlighting:`,
                    `Power user/ambassador for Bolt.new, and builder of my own AI platform.`,
                    `Ready to see my recent wins and achievements?`
                  ]}
                  isVisible={revealedSections.has(4)}
                  delay={0.2}
                  showQuickAction={true}
                  quickActionText="Show me those wins"
                  onQuickAction={() => revealNextSection(5, 'recent-wins-section')}
                />

                {/* Recent Wins - Stunning Visual Showcase */}
                {revealedSections.has(5) && (
                  <motion.div
                    id="recent-wins-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-32 pt-20"
                  >
                    <div className="grid lg:grid-cols-2 gap-8">

                      {/* Genieology - Founded & Acquired */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, rotateX: -10 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        onClick={() => window.open('/case-study/genieology', '_blank')}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-900/30 cursor-pointer"
                      >
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Success Badge */}
                        <div className="absolute top-6 right-6 z-10">
                          <div className="px-4 py-2 bg-green-500/30 backdrop-blur-sm text-gray-400 text-sm font-bold rounded-full border border-gray-700/30">
                            ACQUIRED ✓
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-16 h-16 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg flex items-center justify-center overflow-hidden"
                            >
                              <img
                                src="https://api.chilledsites.com/storage/v1/object/public/p0stman/genieology-logo.webp"
                                alt="Genieology"
                                className="w-12 h-12 object-contain"
                              />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">Genieology</h3>
                              <p className="text-gray-400 font-light">Creative Agency • Founded → Acquired</p>
                            </div>
                          </div>

                          <div className="space-y-4 mb-6">
                            <p className="text-gray-400 font-bold text-lg">Founded → 30 staff → Acquired</p>
                            <p className="text-gray-300 font-light leading-relaxed">
                              Built from scratch to a 30-person creative agency, then successfully acquired.
                              Full-cycle entrepreneurship with proven exit strategy.
                            </p>
                          </div>

                          {/* Metrics */}
                          <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-400">30</div>
                              <div className="text-xs text-gray-400">Team Size</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-400">5+</div>
                              <div className="text-xs text-gray-400">Years</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-400">EXIT</div>
                              <div className="text-xs text-gray-400">Acquired</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Bolt.new - Power User/Ambassador */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, rotateX: -10 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        onClick={() => window.open('https://bolt.new', '_blank')}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-900/30 cursor-pointer"
                      >
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Power User Badge */}
                        <div className="absolute top-6 right-6 z-10">
                          <div className="px-4 py-2 bg-gray-800/40 backdrop-blur-sm text-gray-400 text-sm font-bold rounded-full border border-gray-700/30">
                            POWER USER ⚡
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-16 h-16 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg flex items-center justify-center p-2"
                            >
                              <img
                                src="https://api.chilledsites.com/storage/v1/object/public/p0stman/bolt.svg"
                                alt="Bolt"
                                className="w-10 h-10 object-contain filter brightness-0 invert"
                              />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">Bolt.new</h3>
                              <p className="text-gray-400 font-light">AI Development Platform • Power User & Ambassador</p>
                            </div>
                          </div>

                          <div className="space-y-4 mb-6">
                            <p className="text-gray-400 font-bold text-lg">Supported through $100m+ hypergrowth</p>
                            <p className="text-gray-300 font-light leading-relaxed">
                              Power user and ambassador for Bolt.new during their explosive growth phase.
                              Deep expertise in AI-powered development workflows.
                            </p>
                          </div>

                          {/* Metrics */}
                          <div className="flex items-center justify-between pt-4 border-t border-blue-500/20">
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-400">$100M+</div>
                              <div className="text-xs text-gray-400">Funding Round</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-400">AI</div>
                              <div className="text-xs text-gray-400">Platform</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-400">GROWTH</div>
                              <div className="text-xs text-gray-400">Hypergrowth</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Vibe Gaming - World's Largest Hackathon */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, rotateX: 10 }}
                        animate={{ opacity: revealedSections.has(3) ? 1 : 0, y: revealedSections.has(3) ? 0 : 30, rotateX: revealedSections.has(3) ? 0 : 10 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-900/30 cursor-pointer"
                      >
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* World Record Badge */}
                        <div className="absolute top-6 right-6 z-10">
                          <div className="px-4 py-2 bg-yellow-500/30 backdrop-blur-sm text-gray-400 text-sm font-bold rounded-full border border-gray-700/30">
                            WORLD'S LARGEST 🏆
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-16 h-16 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg flex items-center justify-center"
                            >
                              <span className="text-white font-bold text-2xl">🎮</span>
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">Vibe Gaming</h3>
                              <p className="text-gray-400 font-light">Sponsorship • World's Largest Hackathon</p>
                            </div>
                          </div>

                          <div className="space-y-4 mb-6">
                            <p className="text-gray-400 font-bold text-lg">World's largest hackathon & AI builders community</p>
                            <p className="text-gray-300 font-light leading-relaxed">
                              Created and executed sponsorship strategy for record-breaking hackathon event.
                              Built massive AI builders community around gaming innovation.
                            </p>
                          </div>

                          {/* Metrics */}
                          <div className="flex items-center justify-between pt-4 border-t border-green-500/20">
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-400">WORLD</div>
                              <div className="text-xs text-gray-400">Record</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-400">AI</div>
                              <div className="text-xs text-gray-400">Community</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-400">HACK</div>
                              <div className="text-xs text-gray-400">Event</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* POSTMAN & Chilled Sites - AI Products */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, rotateX: 10 }}
                        animate={{ opacity: revealedSections.has(3) ? 1 : 0, y: revealedSections.has(3) ? 0 : 30, rotateX: revealedSections.has(3) ? 0 : 10 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        onClick={() => window.open('https://chilledsites.com', '_blank')}
                        className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-900/30 cursor-pointer"
                      >
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gray-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* AI Products Badge */}
                        <div className="absolute top-6 right-6 z-10">
                          <div className="px-4 py-2 bg-orange-500/30 backdrop-blur-sm text-gray-400 text-sm font-bold rounded-full border border-gray-700/30">
                            AI PRODUCTS 🤖
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-16 h-16 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-orange-400/50 shadow-lg flex items-center justify-center"
                            >
                              <Bot className="w-8 h-8 text-gray-400" strokeWidth={1.5}/>
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">POSTMAN & Chilled Sites</h3>
                              <p className="text-gray-400 font-light">AI Platform • SaaS Products</p>
                            </div>
                          </div>

                          <div className="space-y-4 mb-6">
                            <p className="text-gray-400 font-bold text-lg">Built POSTMAN & Chilled Sites (AI products)</p>
                            <p className="text-gray-300 font-light leading-relaxed">
                              Created AI-native product studio and website builder platform.
                              Full-stack AI products serving agencies and businesses globally.
                            </p>
                          </div>

                          {/* Metrics */}
                          <div className="flex items-center justify-between pt-4 border-t border-orange-500/20">
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-400">2</div>
                              <div className="text-xs text-gray-400">AI Products</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-400">SAAS</div>
                              <div className="text-xs text-gray-400">Platform</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-400">LIVE</div>
                              <div className="text-xs text-gray-400">Production</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                    </div>

                    {/* Summary Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="mt-16 text-center"
                    >
                      <div className="max-w-4xl mx-auto bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
                        <h4 className="text-2xl font-bold text-white mb-6">Track Record Summary</h4>
                        <div className="grid md:grid-cols-4 gap-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-gray-400 mb-2">1</div>
                            <div className="text-gray-300 text-sm">Successful Exit</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-gray-400 mb-2">$100M+</div>
                            <div className="text-gray-300 text-sm">Funding Supported</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-gray-400 mb-2">WORLD</div>
                            <div className="text-gray-300 text-sm">Record Event</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-gray-400 mb-2">2</div>
                            <div className="text-gray-300 text-sm">AI Products Built</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* Final Pitch with Chat Reply Option */}
                <ChatSection
                  messages={[
                    `So here's the deal…`,
                    `Whether you need a killer prototype for a pitch or a full‑stack build that scales, I'm your freelance secret weapon.`,
                    `Prototypes. Activations. Production products. Delivered.`,
                    `Ready to move? Book a call or just reply here.`
                  ]}
                  isVisible={revealedSections.has(5)}
                  delay={0.2}
                  showReplyBox={false}
                  onReply={(reply) => console.log('Final reply:', reply)}
                  showQuickAction={true}
                  quickActionText="Contact me"
                  onQuickAction={() => revealNextSection(6, 'contact-methods-section')}
                />

                {/* Contact Methods */}
                {revealedSections.has(6) && (
                  <motion.div
                    id="contact-methods-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-32 pt-20"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                      {/* X/Twitter */}
                      <motion.a
                        href="https://x.com/paulgosnell"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 text-center"
                      >
                        <div className="absolute inset-0 bg-gray-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                          <MessageCircle className="w-8 h-8 text-gray-300 mx-auto mb-3 group-hover:text-white transition-colors" strokeWidth={1.5}/>
                          <div className="text-white font-light text-sm mb-1">X (Twitter)</div>
                          <div className="text-gray-400 text-xs">@paulgosnell</div>
                        </div>
                      </motion.a>

                      {/* LinkedIn */}
                      <motion.a
                        href="https://www.linkedin.com/in/pgosnell/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 text-center"
                      >
                        <div className="absolute inset-0 bg-gray-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                          <Linkedin className="w-8 h-8 text-gray-400 mx-auto mb-3 group-hover:text-gray-400 transition-colors" strokeWidth={1.5}/>
                          <div className="text-white font-light text-sm mb-1">LinkedIn</div>
                          <div className="text-gray-400 text-xs">Profile</div>
                        </div>
                      </motion.a>

                      {/* Telegram */}
                      <motion.a
                        href="https://t.me/g00zzy"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-blue-300/50 transition-all duration-300 text-center"
                      >
                        <div className="absolute inset-0 bg-gray-900/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                          <Send className="w-8 h-8 text-gray-400 mx-auto mb-3 group-hover:text-gray-400 transition-colors" strokeWidth={1.5}/>
                          <div className="text-white font-light text-sm mb-1">Telegram</div>
                          <div className="text-gray-400 text-xs">@g00zzy</div>
                        </div>
                      </motion.a>

                      {/* WhatsApp */}
                      <motion.a
                        href="https://wa.me/971568471173"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative bg-green-600/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 text-center"
                      >
                        <div className="absolute inset-0 bg-gray-900/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                          <Phone className="w-8 h-8 text-gray-400 mx-auto mb-3 group-hover:text-gray-400 transition-colors" strokeWidth={1.5}/>
                          <div className="text-white font-light text-sm mb-1">WhatsApp</div>
                          <div className="text-gray-400 text-xs">056 8471 173</div>
                        </div>
                      </motion.a>

                      {/* Email */}
                      <motion.a
                        href="mailto:hello@p0stman.com"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative bg-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-gray-700/50 transition-all duration-300 text-center"
                      >
                        <div className="absolute inset-0 bg-gray-900/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                          <Mail className="w-8 h-8 text-gray-400 mx-auto mb-3 group-hover:text-gray-400 transition-colors" strokeWidth={1.5}/>
                          <div className="text-white font-light text-sm mb-1">Email</div>
                          <div className="text-gray-400 text-xs">hello@p0stman.com</div>
                        </div>
                      </motion.a>
                    </div>
                  </motion.div>
                )}

                {/* Final Sign-off */}
                <ChatSection
                  messages={[
                    `Signed, sealed, delivered… let’s ship something your clients will love.`,
                    `Paul Gosnell • POSTMAN • hello@p0stman.com`
                  ]}
                  isVisible={revealedSections.has(6)}
                  delay={0.2}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DeliveryPage;