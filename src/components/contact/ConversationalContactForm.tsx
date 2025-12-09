import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, User, Bot, ArrowRight } from 'lucide-react';
import { sendEmail } from '../../lib/emailjs';
import { sendContactEmail, supabase } from '../../lib/supabase';
import { useTracking, useTrackForm } from '../../hooks/useTracking';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGES: Record<string, string> = {
  default: "Hey! I'm the P0STMAN AI. What brings you here today? Looking to build something, or interested in joining our roster?",
  careers: "Hey! I see you're interested in joining the P0STMAN roster. That's exciting! What role caught your eye, and what have you been building lately?",
  project: "Hey! Ready to build something fast? Tell me what you're thinking - product idea, timeline, whatever's on your mind. I'll help figure out if we're a good fit."
};

export default function ConversationalContactForm() {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get('role');
  const fromCareers = !!roleParam;

  const [step, setStep] = useState<'intro' | 'chat'>('intro');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Tracking hooks
  const { getSourceData, markConversion } = useTracking();
  const { trackFormStart, trackFormSubmit } = useTrackForm('contact_conversational');

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 150)}px`;
  };

  // Start the conversation
  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    trackFormStart();
    setStep('chat');

    // Add initial AI message
    const initialMessage = fromCareers
      ? INITIAL_MESSAGES.careers
      : INITIAL_MESSAGES.default;

    const aiGreeting: Message = {
      id: 'initial',
      role: 'assistant',
      content: roleParam
        ? `Hey ${name.split(' ')[0]}! I see you're interested in the "${roleParam}" role. That's awesome! Tell me a bit about yourself - what have you been building with AI lately?`
        : `Hey ${name.split(' ')[0]}! ${initialMessage.split('!')[1] || "What brings you here today?"}`,
      timestamp: new Date()
    };

    setMessages([aiGreeting]);

    // Focus the input after transition
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Send a message
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Reset textarea height
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
    }

    try {
      // Build messages array for API
      const apiMessages = messages
        .filter(m => m.id !== 'initial' || m.role === 'assistant')
        .map(m => ({
          role: m.role,
          content: m.content
        }));

      apiMessages.push({ role: 'user', content: userMessage.content });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          userInfo: {
            name,
            email,
            fromCareers,
            role: roleParam
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);

      // Check if this seems like a good point to save the conversation
      // (after 2+ user messages)
      if (messages.filter(m => m.role === 'user').length >= 1 && !hasSubmitted) {
        await saveConversation([...messages, userMessage, aiMessage]);
        setHasSubmitted(true);
      }

    } catch (error) {
      console.error('Chat error:', error);

      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: "Sorry, I hit a snag there. Feel free to email us directly at hello@p0stman.com or try again!",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Save conversation to backend
  const saveConversation = async (allMessages: Message[]) => {
    try {
      const sourceData = await getSourceData();

      // Format conversation for storage
      const conversationText = allMessages
        .map(m => `${m.role === 'user' ? name : 'P0STMAN AI'}: ${m.content}`)
        .join('\n\n');

      // Send via EmailJS
      await sendEmail({
        name,
        email,
        form_type: 'conversational_contact',
        project_type: fromCareers ? 'Careers' : 'General Inquiry',
        message: conversationText,
        description: conversationText,
        source_page: sourceData?.referrer || document.referrer || ''
      });

      // Save to Supabase
      await supabase.from('contacts').insert({
        name,
        email,
        project_type: fromCareers ? 'Careers' : 'Conversational',
        description: conversationText,
        session_id: sourceData?.session_id,
        referrer: sourceData?.referrer,
        referrer_domain: sourceData?.referrer_domain,
        utm_source: sourceData?.utm_source,
        utm_medium: sourceData?.utm_medium,
        utm_campaign: sourceData?.utm_campaign,
        landing_page: sourceData?.landing_page,
        device_type: sourceData?.device_type,
        page_views_before_contact: sourceData?.page_views_before_contact
      });

      // Send email notification
      await sendContactEmail({
        name,
        email,
        projectType: fromCareers ? 'Careers Application' : 'Conversational Inquiry',
        message: conversationText,
        form_type: 'conversational'
      });

      markConversion('conversational_contact');
      trackFormSubmit(true, { type: fromCareers ? 'careers' : 'general' });

    } catch (error) {
      console.error('Failed to save conversation:', error);
      // Don't show error to user - conversation continues
    }
  };

  // Handle Enter key (Shift+Enter for new line)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 'intro' ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-8"
          >
            {/* AI Avatar and Greeting */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-lg text-gray-900 dark:text-gray-100 font-light leading-relaxed">
                  {fromCareers
                    ? `Interested in joining the roster? Let's chat. I'm the P0STMAN AI - I'll get us started and Paul will follow up personally.`
                    : `Hey! I'm the P0STMAN AI. Tell me what you're looking to build and I'll help figure out if we're a good fit.`
                  }
                </p>
              </div>
            </div>

            {/* Simple Name/Email Form */}
            <form onSubmit={handleStartChat} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-light transition-all focus:border-gray-900 dark:focus:border-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-light transition-all focus:border-gray-900 dark:focus:border-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors font-light text-lg rounded-lg"
              >
                Start Conversation
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col h-[500px]"
          >
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">P0STMAN AI</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {hasSubmitted ? "Conversation saved - Paul will follow up" : "Let's figure out how we can help"}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-gray-200 dark:bg-gray-700'
                      : 'bg-gray-900'
                  }`}>
                    {message.role === 'user'
                      ? <User className="w-4 h-4 text-gray-600 dark:text-gray-300" strokeWidth={1.5} />
                      : <Bot className="w-4 h-4 text-white" strokeWidth={1.5} />
                    }
                  </div>
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gray-900 text-white rounded-br-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-md'
                  }`}>
                    <p className="text-sm font-light leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={handleTextareaChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  rows={1}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-light resize-none transition-all focus:border-gray-900 dark:focus:border-gray-400 focus:ring-0 focus:outline-none"
                  style={{ minHeight: '48px', maxHeight: '150px' }}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="p-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isLoading
                    ? <Loader2 className="w-5 h-5 animate-spin" strokeWidth={1.5} />
                    : <Send className="w-5 h-5" strokeWidth={1.5} />
                  }
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Press Enter to send, Shift+Enter for new line
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
