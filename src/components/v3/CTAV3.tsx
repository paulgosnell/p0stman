import React, { useState } from 'react';
import { ArrowRight, Mic, X, Volume2, Loader } from 'lucide-react';
import { sendEmail } from '../../lib/emailjs';
import { useVoiceWaveform } from '../../hooks/useVoiceWaveform';
import { motion, AnimatePresence } from 'framer-motion';

const AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'agent_8701k6q7xc5af4f8dkjj8pqda592';

export default function CTAV3() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const voiceAgent = useVoiceWaveform(AGENT_ID);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await sendEmail({
        name: email, // Using email as the name for this simple form
        email: email,
        form_type: 'cta_homepage'
      });

      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send. Please try again or email hello@p0stman.com');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartVoice = () => {
    setIsVoiceActive(true);
    voiceAgent.startConversation();
  };

  const handleStopVoice = () => {
    setIsVoiceActive(false);
    voiceAgent.stopConversation();
  };

  return (
    <section id="cta" className="py-40 md:py-48 px-6 md:px-0 bg-white">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
            Ready to Ship Fast?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Tell us what you're building. We'll tell you the timeline and price.
          </p>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm font-light">
              {error}
            </div>
          )}

          {submitted ? (
            <p className="text-base text-green-600 font-light">
              Thanks! Check your email for next steps.
            </p>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-3.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 font-light focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-light text-base hover:bg-blue-700 disabled:bg-gray-400 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isLoading ? 'Sending...' : 'Get Started'}
                {!isLoading && <ArrowRight size={18} />}
              </button>
            </div>
          )}
        </form>

        {/* Voice Agent Option */}
        <div className="space-y-4">
          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-400 font-light">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Voice Agent Button/Widget */}
          {!isVoiceActive ? (
            <button
              onClick={handleStartVoice}
              disabled={voiceAgent.isActive}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-gray-700 font-light text-base transition-colors group"
            >
              <Mic size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
              <span>Prefer to talk? Try our AI assistant</span>
            </button>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg border border-blue-200 space-y-4">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Mic size={16} className="text-blue-600" />
                      <span className="text-sm font-light text-gray-700">Voice Assistant</span>
                    </div>
                    <button
                      onClick={handleStopVoice}
                      className="p-1.5 hover:bg-white/50 rounded-full transition-colors"
                    >
                      <X size={16} className="text-gray-600" />
                    </button>
                  </div>

                  {/* Waveform Visualization */}
                  <div className="flex items-center justify-center gap-[2px] h-16">
                    {voiceAgent.frequencyData.map((height, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: voiceAgent.isSpeaking ? `${Math.max(height, 8)}%` : '8%',
                          opacity: voiceAgent.isConnected ? 1 : 0.3,
                        }}
                        transition={{
                          duration: 0.1,
                          ease: 'easeOut',
                        }}
                        className="w-[2px] bg-blue-600 rounded-full"
                        style={{
                          minHeight: '8%',
                        }}
                      />
                    ))}
                  </div>

                  {/* Status */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-sm font-light text-gray-700">
                      {voiceAgent.isConnecting && (
                        <>
                          <Loader size={16} className="animate-spin text-blue-600" />
                          <span>Connecting...</span>
                        </>
                      )}
                      {voiceAgent.isConnected && !voiceAgent.isSpeaking && (
                        <>
                          <Mic size={16} className="text-blue-600" />
                          <span>Listening... speak now</span>
                        </>
                      )}
                      {voiceAgent.isConnected && voiceAgent.isSpeaking && (
                        <>
                          <Volume2 size={16} className="text-blue-600 animate-pulse" />
                          <span>AI is speaking...</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Alternative CTA */}
        <div className="pt-4">
          <a
            href="/contact"
            className="text-blue-600 hover:text-blue-700 font-light text-base transition-colors inline-block"
          >
            Or schedule a call →
          </a>
        </div>
      </div>
    </section>
  );
}
