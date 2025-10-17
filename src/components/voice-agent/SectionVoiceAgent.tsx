import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConversation } from '@elevenlabs/react';
import { useNavigate } from 'react-router-dom';
import { Mic, X, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

export interface SectionVoiceAgentProps {
  /** The section of the site this agent is for (e.g., 'cta', 'services', 'pricing', 'process') */
  section: string;

  /** Custom system prompt for this section */
  prompt: string;

  /** Optional first message override */
  firstMessage?: string;

  /** Display mode: 'inline' = full inline widget, 'floating' = compact floating button */
  placement?: 'inline' | 'floating';

  /** Optional button text for the trigger button */
  buttonText?: string;

  /** Enable text-only mode (chat mode, no voice) */
  textOnly?: boolean;

  /** Show live transcript of the conversation */
  showTranscript?: boolean;

  /** Theme color for the component */
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'pink';

  /** Icon to display on the button */
  icon?: string;

  /** Auto-start the conversation when component mounts */
  autoStart?: boolean;

  /** Callback when conversation starts */
  onConversationStart?: () => void;

  /** Callback when conversation ends */
  onConversationEnd?: (conversationId?: string) => void;

  /** Callback when error occurs */
  onError?: (error: any) => void;
}

interface Message {
  role: 'user' | 'agent';
  text: string;
  timestamp: number;
}

export default function SectionVoiceAgent({
  section,
  prompt,
  firstMessage,
  placement = 'inline',
  buttonText,
  textOnly = false,
  showTranscript = false,
  color = 'blue',
  icon = '🎤',
  autoStart = false,
  onConversationStart,
  onConversationEnd,
  onError,
}: SectionVoiceAgentProps) {
  const [isActive, setIsActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [error, setError] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | undefined>();

  const navigate = useNavigate();
  const animationFrameRef = useRef<number>();

  // Get agent ID from environment
  const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID;

  // Client tools for agent to invoke
  const clientTools: any = {
    navigateToSection: async (parameters: { section: string }) => {
      const validSections = ['pricing', 'services', 'case-studies', 'contact', 'home'];
      if (validSections.includes(parameters.section)) {
        const path = parameters.section === 'home' ? '/' : `/${parameters.section}`;
        navigate(path);
        return `Navigating to ${parameters.section} page`;
      }
      return `Cannot navigate to ${parameters.section}`;
    },

    scrollToElement: async (parameters: { elementId: string }) => {
      const element = document.getElementById(parameters.elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return `Scrolled to ${parameters.elementId}`;
      }
      return `Element ${parameters.elementId} not found`;
    },

    highlightSection: async (parameters: { sectionId: string }) => {
      const element = document.getElementById(parameters.sectionId);
      if (element) {
        element.classList.add('ring-2', 'ring-blue-500', 'ring-offset-2');
        setTimeout(() => {
          element.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-2');
        }, 3000);
        return `Highlighted ${parameters.sectionId}`;
      }
      return `Section ${parameters.sectionId} not found`;
    },
  };

  // Use conversation with client tools
  const conversation = useConversation({
    clientTools,
    onToolCall: (toolCall) => {
      console.log('🔧 Tool call received:', toolCall.tool_name, 'with params:', toolCall.parameters);
    },
    onUnhandledClientToolCall: (toolCall) => {
      console.warn('⚠️ Unhandled client tool call:', toolCall.tool_name, toolCall.parameters);
    },
  });

  // Auto-start if enabled
  useEffect(() => {
    if (autoStart && !isActive && agentId) {
      startConversation();
    }
  }, [autoStart]);

  // Color theme mappings
  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    green: 'bg-green-600 hover:bg-green-700',
    orange: 'bg-orange-600 hover:bg-orange-700',
    pink: 'bg-pink-600 hover:bg-pink-700',
  };

  const barColorClasses = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    pink: 'bg-pink-500',
  };

  const startConversation = async () => {
    if (!agentId) {
      const errorMsg = 'Agent ID not configured. Please set VITE_ELEVENLABS_AGENT_ID in your environment.';
      setError(errorMsg);
      onError?.(new Error(errorMsg));
      return;
    }

    try {
      setError(null);

      const config: any = { agentId };

      // Build conversation overrides
      const overrides: any = {
        agent: {
          prompt: { prompt },
          language: selectedLanguage,
        },
      };

      // Add first message if provided
      if (firstMessage) {
        overrides.agent.firstMessage = firstMessage;
      }

      // Add text-only mode if enabled
      if (textOnly) {
        overrides.conversation = {
          textOnly: true,
        };
      }

      config.overrides = overrides;

      console.log('Starting conversation with config:', config);
      await conversation.startSession(config);

      setIsActive(true);
      if (placement === 'floating') {
        setIsExpanded(true);
      }

      onConversationStart?.();
    } catch (err) {
      console.error('Failed to start conversation:', err);
      const errorMsg = err instanceof Error ? err.message : 'Failed to start conversation';
      setError(errorMsg);
      onError?.(err);
    }
  };

  const endConversation = () => {
    try {
      if (conversation.status === 'connected') {
        conversation.endSession();
      }
      setIsActive(false);
      setIsExpanded(false);
      onConversationEnd?.(conversationId);
    } catch (err) {
      console.error('Failed to end conversation:', err);
    }
  };

  // Handle language change
  const handleLanguageChange = (newLanguage: string) => {
    const wasActive = conversation.status === 'connected';
    if (wasActive) {
      conversation.endSession();
    }
    setSelectedLanguage(newLanguage);

    // Restart with new language if was active
    if (wasActive) {
      setTimeout(() => startConversation(), 100);
    }
  };

  // Waveform visualization
  const [barHeights, setBarHeights] = useState<number[]>(new Array(placement === 'floating' ? 20 : 60).fill(0));

  useEffect(() => {
    if (conversation.status !== 'connected') {
      setBarHeights(new Array(placement === 'floating' ? 20 : 60).fill(0));
      return;
    }

    const updateWaveform = () => {
      const frequencyData = conversation.getOutputByteFrequencyData();
      if (frequencyData) {
        const barCount = placement === 'floating' ? 20 : 60;
        const step = Math.floor(frequencyData.length / barCount);
        const heights = Array.from({ length: barCount }, (_, i) => {
          const value = frequencyData[i * step] || 0;
          return (value / 255) * 100;
        });
        setBarHeights(heights);
      }
      animationFrameRef.current = requestAnimationFrame(updateWaveform);
    };

    updateWaveform();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [conversation.status, placement]);

  // Get status text
  const getStatusText = () => {
    if (error) return 'Error - Click to retry';
    if (conversation.status === 'connecting') return 'Connecting...';
    if (conversation.status === 'connected' && conversation.isSpeaking) return 'Speaking...';
    if (conversation.status === 'connected' && !conversation.isSpeaking) return 'Listening...';
    if (conversation.status === 'disconnected') return 'Disconnected';
    return 'Ready';
  };

  // Floating mode - compact button
  if (placement === 'floating' && !isExpanded) {
    return (
      <motion.button
        onClick={startConversation}
        className={`
          ${colorClasses[color]} text-white
          rounded-full w-14 h-14 flex items-center justify-center
          shadow-lg hover:shadow-xl transition-all duration-300
          ${error ? 'bg-red-600 hover:bg-red-700' : ''}
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        title={buttonText || `Talk to ${section} assistant`}
      >
        {error ? (
          <AlertCircle className="w-6 h-6" />
        ) : conversation.status === 'connecting' ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : textOnly ? (
          <MessageSquare className="w-6 h-6" />
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
      </motion.button>
    );
  }

  // Floating mode - expanded widget
  if (placement === 'floating' && isExpanded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden w-80"
      >
        {/* Header */}
        <div className={`${colorClasses[color]} text-white p-4 flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{icon}</span>
            <div>
              <div className="font-semibold text-sm">{section} Assistant</div>
              <div className="text-xs opacity-90">{getStatusText()}</div>
            </div>
          </div>
          <button
            onClick={endConversation}
            className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Error message */}
          {error && (
            <div className="mb-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-300">
              {error}
            </div>
          )}

          {/* Waveform */}
          <div className="h-16 flex items-center justify-center gap-[2px] bg-gray-50 dark:bg-gray-900 rounded-lg p-2 mb-3">
            {barHeights.map((height, i) => (
              <motion.div
                key={i}
                animate={{
                  height: conversation.isSpeaking ? `${Math.max(height, 8)}%` : '8%',
                  opacity: conversation.status === 'connected' ? 1 : 0.3,
                }}
                transition={{
                  duration: 0.1,
                  ease: 'easeOut',
                }}
                className={`w-1 ${barColorClasses[color]} rounded-full`}
                style={{
                  minHeight: '8%',
                }}
              />
            ))}
          </div>

          {/* Status indicator */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className={`
              w-2 h-2 rounded-full
              ${conversation.isSpeaking ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}
              ${conversation.status !== 'connected' ? 'bg-gray-400' : ''}
            `} />
            <span>{getStatusText()}</span>
          </div>

          {/* Language selector */}
          {!textOnly && (
            <div className="mt-3 flex justify-center">
              <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                disabled={conversation.status === 'connected'}
              />
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  // Inline mode
  return (
    <div className="w-full">
      {!isActive ? (
        // Trigger button
        <motion.button
          onClick={startConversation}
          className={`
            w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl
            ${colorClasses[color]} text-white font-semibold shadow-lg
            transition-all duration-300
            ${error ? 'bg-red-600 hover:bg-red-700' : ''}
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error ? (
            <>
              <AlertCircle className="w-5 h-5" />
              <span>Retry Connection</span>
            </>
          ) : conversation.status === 'connecting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Connecting...</span>
            </>
          ) : (
            <>
              {textOnly ? (
                <MessageSquare className="w-5 h-5" />
              ) : (
                <Mic className="w-5 h-5" />
              )}
              <span>{buttonText || `Talk to ${section} assistant`}</span>
            </>
          )}
        </motion.button>
      ) : (
        // Active widget
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-visible"
          >
            <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-lg border-t border-gray-200 dark:border-gray-700">
              {/* Header with language selector and close button */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-[9999]">
                {!textOnly && (
                  <LanguageSelector
                    selectedLanguage={selectedLanguage}
                    onLanguageChange={handleLanguageChange}
                    disabled={conversation.status === 'connected'}
                  />
                )}

                <button
                  onClick={endConversation}
                  className="p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full transition-colors ml-auto"
                >
                  <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <div className="space-y-4 mt-12 overflow-hidden">
                {/* Error message */}
                {error && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-300">
                    {error}
                  </div>
                )}

                {/* Live Waveform */}
                <div className="flex items-center justify-center gap-[2px] h-20">
                  {barHeights.map((height, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: conversation.isSpeaking ? `${Math.max(height, 8)}%` : '8%',
                        opacity: conversation.status === 'connected' ? 1 : 0.3,
                      }}
                      transition={{
                        duration: 0.1,
                        ease: 'easeOut',
                      }}
                      className="w-[3px] bg-white/60 rounded-full"
                      style={{
                        minHeight: '8%',
                      }}
                    />
                  ))}
                </div>

                {/* Status text */}
                <div className="text-center">
                  <p className="text-white/90 font-light text-sm">
                    {getStatusText()}
                  </p>
                </div>

                {/* Transcript (if enabled) */}
                {showTranscript && messages.length > 0 && (
                  <div className="mt-4 space-y-2 max-h-64 overflow-y-auto bg-white/5 rounded-lg p-4">
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`
                          p-3 rounded-lg text-sm
                          ${msg.role === 'user'
                            ? 'bg-blue-500/20 text-white ml-8'
                            : 'bg-gray-500/20 text-white/90 mr-8'
                          }
                        `}
                      >
                        <div className="font-semibold capitalize mb-1 text-xs opacity-70">
                          {msg.role}
                        </div>
                        <div>{msg.text}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
