import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Clock, AlertCircle, Zap } from 'lucide-react';
import SectionVoiceAgent from './SectionVoiceAgent';
import { getSectionConfig } from '../../config/voice-agent-sections';

export interface CollectedData {
  useCase?: string;
  companySize?: string;
  budget?: string;
  timeline?: string;
  isDecisionMaker?: string;
  integrations?: string;
  email?: string;
  fullName?: string;
  company?: string;
  demoCallInterest?: string;
}

interface DataField {
  key: keyof CollectedData;
  label: string;
  description?: string;
  icon?: string;
  status: 'pending' | 'collecting' | 'completed';
  patterns: RegExp[];
}

interface Message {
  role: 'user' | 'agent';
  text: string;
  timestamp: number;
}

const QUALIFICATION_FIELDS: DataField[] = [
  {
    key: 'useCase',
    label: 'Use Case',
    description: 'Problem they\'re solving',
    icon: '🎯',
    status: 'pending',
    patterns: [
      /(?:problem|solving|use case|looking|build|automate|automation|lead generation|customer support|scheduling|appointment|data collection|qualification)/i,
    ],
  },
  {
    key: 'companySize',
    label: 'Company Size',
    description: 'Team size',
    icon: '👥',
    status: 'pending',
    patterns: [
      /(?:team|members|people|employees|staff|size|how many|we have|we're|people on|headcount)/i,
      /\b(\d+)\s*(?:people|members|employees|team members|person)\b/i,
    ],
  },
  {
    key: 'budget',
    label: 'Budget Range',
    description: 'Project budget',
    icon: '💰',
    status: 'pending',
    patterns: [
      /(?:budget|cost|price|pricing|investment|spend|range|k|dollars|per|monthly|annual|\$)/i,
      /(?:25k|50k|100k|10k|15k|75k)/i,
    ],
  },
  {
    key: 'timeline',
    label: 'Timeline',
    description: 'Deployment timeline',
    icon: '⏱️',
    status: 'pending',
    patterns: [
      /(?:timeline|timeframe|when|need|deploy|launch|asap|urgent|weeks|months|flexible|soon)/i,
      /(?:q1|q2|q3|q4|this month|this quarter|this year)/i,
    ],
  },
  {
    key: 'isDecisionMaker',
    label: 'Decision Maker',
    description: 'Are they the decision maker?',
    icon: '👤',
    status: 'pending',
    patterns: [
      /(?:decision|maker|authority|approve|budget|sign|yes|no|i am|i'm|we are|we're|part of|committee)/i,
    ],
  },
  {
    key: 'integrations',
    label: 'Integrations',
    description: 'Systems to integrate with',
    icon: '🔌',
    status: 'pending',
    patterns: [
      /(?:integration|integrate|system|crm|salesforce|hubspot|zendesk|api|database|existing|connect)/i,
    ],
  },
  {
    key: 'email',
    label: 'Email Address',
    description: 'Contact email',
    icon: '📧',
    status: 'pending',
    patterns: [
      /[\w\.-]+@[\w\.-]+\.\w+/,
    ],
  },
  {
    key: 'fullName',
    label: 'Full Name',
    description: 'Prospect name',
    icon: '📝',
    status: 'pending',
    patterns: [
      /(?:name|i'm|i am|my name|this is|call me|it's)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/i,
    ],
  },
  {
    key: 'company',
    label: 'Company Name',
    description: 'Company name',
    icon: '🏢',
    status: 'pending',
    patterns: [
      /(?:company|work|work at|at|with|from|from|business|organization)\s+([A-Za-z0-9\s&\.]+)/i,
    ],
  },
  {
    key: 'demoCallInterest',
    label: 'Demo Call',
    description: 'Want a demo call?',
    icon: '📞',
    status: 'pending',
    patterns: [
      /(?:demo|call|meeting|chat|discuss|talk|conversation|interested|yes|sure|sounds good)/i,
    ],
  },
];

// Data extraction function
function extractDataFromMessages(messages: Message[]): CollectedData {
  const data: CollectedData = {};
  const allText = messages.map(m => m.text).join(' ');

  QUALIFICATION_FIELDS.forEach((field) => {
    const fieldFound = field.patterns.some(pattern => {
      const match = allText.match(pattern);
      return match !== null;
    });

    if (fieldFound) {
      // Extract the actual value
      if (field.key === 'email') {
        const emailMatch = allText.match(/([\w\.-]+@[\w\.-]+\.\w+)/);
        if (emailMatch) {
          data[field.key] = emailMatch[1];
        }
      } else if (field.key === 'fullName') {
        const nameMatch = allText.match(/(?:name|i'm|i am|my name|this is|call me)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i);
        if (nameMatch) {
          data[field.key] = nameMatch[1];
        }
      } else if (field.key === 'company') {
        const companyMatch = allText.match(/(?:company|work at|at|from|with)\s+([A-Za-z0-9\s&\.]+?)(?:\.|,|$)/i);
        if (companyMatch) {
          data[field.key] = companyMatch[1].trim();
        }
      } else if (field.key === 'budget') {
        const budgetMatch = allText.match(/(?:budget|range)\s*(?:of|around)?\s*(?:\$)?(\d+k|\d+\s*(?:to|-)?\s*\d+k)/i);
        if (budgetMatch) {
          data[field.key] = budgetMatch[1];
        }
      } else if (field.key === 'companySize') {
        const sizeMatch = allText.match(/(?:team|members|people|employees)\s*(?:of|is|are)?\s*(?:around|about)?\s*(\d+)/i);
        if (sizeMatch) {
          data[field.key] = sizeMatch[1] + ' people';
        }
      } else {
        // For other fields, just mark as found
        const contextMatch = allText.match(new RegExp(`(?:[^.!?]*${field.patterns[0].source}[^.!?]*[.!?])`));
        if (contextMatch) {
          data[field.key] = contextMatch[0].substring(0, 100).trim();
        } else {
          data[field.key] = 'Mentioned in conversation';
        }
      }
    }
  });

  return data;
}

export default function SalesProspectCollector() {
  const [collectedData, setCollectedData] = useState<CollectedData>({});
  const [activeFields, setActiveFields] = useState<Record<string, DataField>>({});
  const [isConversationActive, setIsConversationActive] = useState(false);
  const [missionComplete, setMissionComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const config = getSectionConfig('sales-demo');

  // Initialize active fields
  useEffect(() => {
    const fields: Record<string, DataField> = {};
    QUALIFICATION_FIELDS.forEach((field) => {
      fields[field.key] = { ...field, status: 'pending' };
    });
    setActiveFields(fields);
  }, []);

  // Update data when messages change
  useEffect(() => {
    if (messages.length > 0) {
      const extracted = extractDataFromMessages(messages);
      setCollectedData(extracted);

      // Update field statuses based on what was extracted
      setActiveFields((prev) => {
        const updated = { ...prev };
        Object.keys(extracted).forEach((key) => {
          if (updated[key] && extracted[key as keyof CollectedData]) {
            updated[key].status = 'completed';
          }
        });
        return updated;
      });
    }
  }, [messages]);

  // Check if mission is complete
  useEffect(() => {
    const completedFields = Object.values(activeFields).filter(
      (f) => f.status === 'completed'
    ).length;

    if (completedFields >= 6 && !missionComplete) {
      // Mission complete when at least 6 fields are collected
      setMissionComplete(true);
    } else if (completedFields < 6 && missionComplete) {
      setMissionComplete(false);
    }
  }, [activeFields, missionComplete]);

  const handleMessagesUpdate = useCallback((updatedMessages: Message[]) => {
    setMessages(updatedMessages);
  }, []);

  const handleConversationStart = () => {
    setIsConversationActive(true);
    setMissionComplete(false);
    setError(null);
    setMessages([]);
  };

  const handleConversationEnd = () => {
    setIsConversationActive(false);
  };

  const handleError = (err: any) => {
    setError(err?.message || 'An error occurred');
    setIsConversationActive(false);
  };

  const resetDemo = () => {
    setCollectedData({});
    setMissionComplete(false);
    setError(null);
    setIsConversationActive(false);
    setMessages([]);
    // Reset fields
    const fields: Record<string, DataField> = {};
    QUALIFICATION_FIELDS.forEach((field) => {
      fields[field.key] = { ...field, status: 'pending' };
    });
    setActiveFields(fields);
  };

  const completedCount = Object.values(activeFields).filter(
    (f) => f.status === 'completed'
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Sales Prospect Demo</span>
          </div>
          <h1 className="text-4xl font-bold mb-3">
            AI Sales Agent Demo
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Watch how our AI sales assistant qualifies prospects in real-time. The agent collects structured information while you see it displayed live on the right side.
          </p>
        </motion.div>
      </div>

      {/* Main Demo Section */}
      <div className="pb-12 -mx-4 px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 overflow-hidden shadow-2xl"
          style={{ minHeight: 'calc(100vh - 400px)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
            {/* Left: Voice Agent */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-700/50 flex flex-col bg-gradient-to-br from-gray-900/50 to-gray-800/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Sales Assistant</h2>
                  <p className="text-sm text-gray-400">
                    {isConversationActive ? 'Listening...' : 'Ready to connect'}
                  </p>
                </div>
                <div
                  className={`
                    w-3 h-3 rounded-full
                    ${isConversationActive ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}
                  `}
                />
              </div>

              {/* Voice Agent Component */}
              <div className="mb-4 flex-shrink-0">
                <SectionVoiceAgent
                  key={`sales-demo-${missionComplete ? 'complete' : 'active'}`}
                  section="sales-demo"
                  prompt={config.prompt}
                  firstMessage={config.firstMessage}
                  placement="inline"
                  buttonText={config.buttonText}
                  color={config.color as any}
                  icon={config.icon}
                  onConversationStart={handleConversationStart}
                  onConversationEnd={handleConversationEnd}
                  onError={handleError}
                  onMessagesUpdate={handleMessagesUpdate}
                />
              </div>

              {/* Status Message */}
              <div className="flex-shrink-0 space-y-3 mt-auto">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-400">Connection Error</p>
                      <p className="text-xs text-red-300/80">{error}</p>
                    </div>
                  </motion.div>
                )}

                {missionComplete && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex gap-3"
                  >
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-green-400">Mission Complete! ✨</p>
                      <p className="text-xs text-green-300/80">
                        All prospect information collected. Ready for sales follow-up.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Reset Button */}
                {(missionComplete || error) && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={resetDemo}
                    className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors text-white"
                  >
                    Reset Demo
                  </motion.button>
                )}
              </div>
            </div>

            {/* Right: Real-Time Data Collection - Full Height Edge to Edge */}
            <div className="lg:col-span-1 bg-gray-900/50 flex flex-col h-full p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">Prospect Data</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {completedCount} / {QUALIFICATION_FIELDS.length} fields
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {Math.round((completedCount / QUALIFICATION_FIELDS.length) * 100)}%
                  </div>
                  <div className="text-xs text-gray-500">Complete</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-700 rounded-full mb-6 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(completedCount / QUALIFICATION_FIELDS.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>

              {/* Data Fields Checklist */}
              <div className="space-y-2 flex-1 overflow-y-auto pr-2">
                <AnimatePresence mode="popLayout">
                  {QUALIFICATION_FIELDS.map((field) => {
                    const currentField = activeFields[field.key];
                    if (!currentField) return null;

                    return (
                      <motion.div
                        key={field.key}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className={`
                          p-3 rounded-lg border transition-all
                          ${
                            currentField.status === 'completed'
                              ? 'bg-green-500/10 border-green-500/30'
                              : 'bg-gray-800/30 border-gray-700/30'
                          }
                        `}
                      >
                        <div className="flex items-start gap-3">
                          {/* Status Icon */}
                          <div className="mt-0.5">
                            {currentField.status === 'completed' ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                              >
                                <Check className="w-3 h-3 text-white" />
                              </motion.div>
                            ) : (
                              <Clock className="w-5 h-5 text-gray-500" />
                            )}
                          </div>

                          {/* Field Info */}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">
                              {field.icon && <span className="mr-2">{field.icon}</span>}
                              {field.label}
                            </p>
                            {field.description && (
                              <p className="text-xs text-gray-400 mt-1">{field.description}</p>
                            )}
                            {collectedData[field.key] && (
                              <p className="text-xs text-gray-300 mt-2 font-mono bg-gray-800/50 px-2 py-1 rounded truncate">
                                {String(collectedData[field.key]).substring(0, 40)}
                                {String(collectedData[field.key]).length > 40 ? '...' : ''}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Information Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="font-semibold mb-2">Automated Qualification</h3>
            <p className="text-sm text-gray-400">
              The AI agent asks strategic questions to qualify prospects. Real conversation data is extracted automatically.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="text-2xl mb-3">📊</div>
            <h3 className="font-semibold mb-2">Real-Time Data Capture</h3>
            <p className="text-sm text-gray-400">
              Watch prospect information populate in real-time as the conversation progresses. Data is parsed from actual messages.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="text-2xl mb-3">🚀</div>
            <h3 className="font-semibold mb-2">Immediate Follow-Up</h3>
            <p className="text-sm text-gray-400">
              When the mission is complete, data is ready for immediate sales team follow-up with real prospect information.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
