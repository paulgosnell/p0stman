import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, User, Bot, Mic, MicOff } from 'lucide-react';
import { sendEmail } from '../../lib/emailjs';
import { sendContactEmail, supabase } from '../../lib/supabase';
import { useTracking, useTrackForm } from '../../hooks/useTracking';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ConversationalContactForm() {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get('role');
  const fromCareers = !!roleParam;

  const [step, setStep] = useState<'form' | 'chat'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [initialMessage, setInitialMessage] = useState(
    roleParam ? `I'm interested in the ${roleParam} role.` : ''
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<any>(null);

  // Tracking hooks
  const { getSourceData, markConversion } = useTracking();
  const { trackFormStart, trackFormSubmit } = useTrackForm('contact_conversational');

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Setup speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;

        recognitionRef.current.onresult = (event: any) => {
          const transcript = Array.from(event.results)
            .map((result: any) => result[0].transcript)
            .join('');
          setInputValue(transcript);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Auto-resize textarea
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 150)}px`;
  };

  // Handle initial form submission - transforms into chat
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !initialMessage.trim()) return;

    trackFormStart();
    setStep('chat');
    setIsLoading(true);

    // Add user's initial message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: initialMessage.trim(),
      timestamp: new Date()
    };

    setMessages([userMessage]);

    try {
      // Get AI response to their initial message
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: initialMessage.trim() }],
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

      // Save initial conversation
      await saveConversation([userMessage, aiMessage]);
      setHasSubmitted(true);

    } catch (error) {
      console.error('Chat error:', error);

      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: `Thanks for reaching out, ${name.split(' ')[0]}! I'm having a brief technical moment, but don't worry - Paul will personally review your message and get back to you within 24 hours. Feel free to continue the conversation or email us directly at hello@p0stman.com.`,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  // Send a message in chat mode
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Stop listening if in voice mode
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }

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
      const apiMessages = messages.map(m => ({
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

      // Save updated conversation
      await saveConversation([...messages, userMessage, aiMessage]);

      // Speak the response if in voice mode
      if (isVoiceMode && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(data.message);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
      }

    } catch (error) {
      console.error('Chat error:', error);

      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: "Sorry, I hit a snag there. Feel free to continue typing or email us directly at hello@p0stman.com!",
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
        .map(m => `${m.role === 'user' ? name : 'POSTMAN AI'}: ${m.content}`)
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

      if (!hasSubmitted) {
        markConversion('conversational_contact');
        trackFormSubmit(true, { type: fromCareers ? 'careers' : 'general' });
      }

    } catch (error) {
      console.error('Failed to save conversation:', error);
      // Don't show error to user - conversation continues
    }
  };

  // Handle Enter key (Shift+Enter for new line)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (step === 'form') {
        // Don't submit form on enter in textarea
        return;
      }
      handleSendMessage();
    }
  };

  // Toggle voice mode
  const toggleVoiceMode = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setIsVoiceMode(true);
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 'form' ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-8"
          >
            <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-2">
              Let's Talk
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-6">
              Tell us what you're thinking. Our AI will respond instantly, and Paul will follow up personally.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  What can we help you with?
                </label>
                <textarea
                  id="message"
                  value={initialMessage}
                  onChange={(e) => setInitialMessage(e.target.value)}
                  placeholder={fromCareers
                    ? "Tell us about yourself and what you've been building..."
                    : "I'm looking to build... / I need help with... / I have a question about..."
                  }
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-light transition-all focus:border-gray-900 dark:focus:border-gray-400 focus:ring-0 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!name.trim() || !email.trim() || !initialMessage.trim()}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-light text-lg rounded-lg"
              >
                <Send className="w-5 h-5" strokeWidth={1.5} />
                Send Message
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
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">POSTMAN AI</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {hasSubmitted ? "Conversation saved - Paul will follow up" : "Let's figure out how we can help"}
                  </p>
                </div>
              </div>

              {/* Voice toggle */}
              <button
                onClick={toggleVoiceMode}
                className={`p-2 rounded-lg transition-all ${
                  isListening
                    ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                    : isVoiceMode
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title={isListening ? 'Stop listening' : 'Start voice input'}
              >
                {isListening ? (
                  <MicOff className="w-5 h-5" strokeWidth={1.5} />
                ) : (
                  <Mic className="w-5 h-5" strokeWidth={1.5} />
                )}
              </button>
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
                  placeholder={isListening ? "Listening..." : "Type or speak your message..."}
                  rows={1}
                  className={`flex-1 px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-light resize-none transition-all focus:ring-0 focus:outline-none ${
                    isListening
                      ? 'border-red-300 dark:border-red-700 focus:border-red-500'
                      : 'border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-400'
                  }`}
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
                {isVoiceMode ? 'Voice mode active - click mic to toggle' : 'Press Enter to send, or click the mic for voice'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
