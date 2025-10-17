import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const demoConversation: Message[] = [
  { role: 'user', content: 'What are your business hours?' },
  { role: 'assistant', content: 'We\'re available 24/7! Our AI agents work around the clock to help you.' },
  { role: 'user', content: 'Can you help with product recommendations?' },
  { role: 'assistant', content: 'Absolutely! I can analyze your needs and suggest the perfect solution.' },
];

export default function ChatAgentDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= demoConversation.length) {
      // Reset after all messages shown
      const timer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      const nextMessage = demoConversation[currentIndex];

      if (nextMessage.role === 'assistant') {
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev, nextMessage]);
          setIsTyping(false);
          setCurrentIndex(prev => prev + 1);
        }, 800);
      } else {
        setMessages(prev => [...prev, nextMessage]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? 0 : 1500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="space-y-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg max-h-48 overflow-y-auto">
      <AnimatePresence>
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 rounded-lg text-xs ${
                msg.role === 'user'
                  ? 'bg-blue-500/20 text-white/90'
                  : 'bg-gray-50 text-gray-700'
              }`}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Typing indicator */}
      {isTyping && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-start"
        >
          <div className="bg-gray-50 px-4 py-2 rounded-lg flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-1.5 h-1.5 bg-white/60 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
