# ElevenLabs Implementation Examples - Production-Ready Code

> **Ready-to-use code examples** for implementing ElevenLabs features in your P0STMAN project

---

## Table of Contents

1. [Webhook Handler with Email Collection](#webhook-handler-with-email-collection)
2. [Section-Specific Voice Widgets](#section-specific-voice-widgets)
3. [Email Collection System Prompt](#email-collection-system-prompt)
4. [Data Collection Configuration](#data-collection-configuration)
5. [Analytics Dashboard](#analytics-dashboard)
6. [Text-Only Chat Interface](#text-only-chat-interface)
7. [Multi-Language Support](#multi-language-support)

---

## Webhook Handler with Email Collection

**File**: `/api/webhooks/elevenlabs.ts` (Next.js API route)

```typescript
import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import { z } from 'zod';

// Type definitions
const DataCollectionSchema = z.object({
  user_email: z.string().email().optional(),
  user_name: z.string().optional(),
  company_name: z.string().optional(),
  phone_number: z.string().optional(),
  interest_level: z.enum(['high', 'medium', 'low', 'none']).optional(),
  budget_range: z.string().optional(),
  timeline: z.string().optional(),
  specific_interest: z.string().optional(),
});

const WebhookPayloadSchema = z.object({
  conversation_id: z.string(),
  agent_id: z.string(),
  status: z.enum(['initiated', 'in-progress', 'processing', 'done', 'failed']),
  transcript: z.array(z.object({
    role: z.enum(['user', 'agent']),
    message: z.string().nullable(),
    time_in_call_secs: z.number(),
    source_medium: z.enum(['audio', 'text']).optional(),
  })),
  analysis: z.object({
    call_successful: z.string(),
    data_collection: DataCollectionSchema,
  }).nullable(),
  metadata: z.object({
    start_time_unix_secs: z.number(),
    call_duration_secs: z.number(),
    main_language: z.string().nullable(),
  }),
});

type WebhookPayload = z.infer<typeof WebhookPayloadSchema>;
type DataCollection = z.infer<typeof DataCollectionSchema>;

// HMAC signature verification
function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  try {
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(payload);
    const expectedSignature = hmac.digest('hex');

    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}

// Save lead to database
async function saveLeadToDatabase(data: {
  conversationId: string;
  email: string;
  name?: string;
  company?: string;
  phone?: string;
  interestLevel?: string;
  budgetRange?: string;
  timeline?: string;
  specificInterest?: string;
  duration: number;
  language?: string;
  source: string;
  timestamp: number;
}) {
  // TODO: Replace with your actual database call
  // Example with Prisma:
  // await prisma.lead.create({ data: { ... } });

  // Example with Supabase:
  // await supabase.from('leads').insert({ ... });

  console.log('Saving lead to database:', data);
}

// Send to CRM (HubSpot example)
async function sendToHubSpot(data: DataCollection & { conversationId: string }) {
  const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

  if (!HUBSPOT_API_KEY) {
    console.warn('HubSpot API key not configured');
    return;
  }

  try {
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`
      },
      body: JSON.stringify({
        properties: {
          email: data.user_email,
          firstname: data.user_name?.split(' ')[0],
          lastname: data.user_name?.split(' ').slice(1).join(' '),
          company: data.company_name,
          phone: data.phone_number,
          lead_source: 'Voice Agent',
          interest_level: data.interest_level,
          budget_range: data.budget_range,
          timeline: data.timeline,
          hs_lead_status: data.interest_level === 'high' ? 'HOT' : 'WARM',
          notes: `Voice conversation: ${data.conversationId}\nInterest: ${data.specific_interest}`
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HubSpot API error: ${response.statusText}`);
    }

    console.log('Lead sent to HubSpot');
  } catch (error) {
    console.error('Failed to send to HubSpot:', error);
    // Don't throw - we don't want to fail the webhook
  }
}

// Send follow-up email
async function sendFollowUpEmail(data: {
  email: string;
  name?: string;
  interestLevel?: string;
  specificInterest?: string;
  conversationId: string;
}) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

  if (!SENDGRID_API_KEY) {
    console.warn('SendGrid API key not configured');
    return;
  }

  const template = data.interestLevel === 'high'
    ? 'high-interest-follow-up'
    : 'general-follow-up';

  try {
    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SENDGRID_API_KEY}`
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: data.email, name: data.name }],
          dynamic_template_data: {
            name: data.name || 'there',
            interest: data.specificInterest || 'AI solutions',
            conversation_link: `https://app.p0stman.com/conversations/${data.conversationId}`,
            calendar_link: 'https://calendly.com/p0stman/demo'
          }
        }],
        from: {
          email: 'hello@p0stman.com',
          name: 'P0STMAN'
        },
        template_id: process.env[`SENDGRID_TEMPLATE_${template.toUpperCase().replace(/-/g, '_')}`]
      })
    });

    console.log('Follow-up email sent');
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

// Notify team on Slack
async function notifyTeamOnSlack(data: {
  email: string;
  name?: string;
  company?: string;
  interestLevel?: string;
  conversationId: string;
}) {
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

  if (!SLACK_WEBHOOK_URL || data.interestLevel !== 'high') {
    return;
  }

  try {
    await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `🔥 *Hot Lead from Voice Agent*`,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `🔥 *Hot Lead from Voice Agent*\n\n*Email:* ${data.email}\n*Name:* ${data.name || 'Not provided'}\n*Company:* ${data.company || 'Not provided'}\n*Interest Level:* ${data.interestLevel}`
            }
          },
          {
            type: 'actions',
            elements: [
              {
                type: 'button',
                text: { type: 'plain_text', text: 'View Conversation' },
                url: `https://app.p0stman.com/conversations/${data.conversationId}`
              },
              {
                type: 'button',
                text: { type: 'plain_text', text: 'Add to CRM' },
                url: `https://app.hubspot.com/contacts/create?email=${data.email}`
              }
            ]
          }
        ]
      })
    });

    console.log('Team notified on Slack');
  } catch (error) {
    console.error('Failed to notify on Slack:', error);
  }
}

// Log analytics
async function logAnalytics(data: {
  conversationId: string;
  duration: number;
  successful: boolean;
  emailCollected: boolean;
  language?: string;
  agentId: string;
}) {
  // TODO: Send to your analytics platform
  // Examples: Google Analytics, Mixpanel, Amplitude

  console.log('Logging analytics:', data);

  // Example with Google Analytics 4
  if (process.env.GA_MEASUREMENT_ID) {
    try {
      await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${process.env.GA_MEASUREMENT_ID}&api_secret=${process.env.GA_API_SECRET}`, {
        method: 'POST',
        body: JSON.stringify({
          client_id: data.conversationId,
          events: [{
            name: 'voice_conversation_complete',
            params: {
              conversation_id: data.conversationId,
              duration_seconds: data.duration,
              successful: data.successful,
              email_collected: data.emailCollected,
              language: data.language,
              agent_id: data.agentId
            }
          }]
        })
      });
    } catch (error) {
      console.error('Failed to log to GA:', error);
    }
  }
}

// Main webhook handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Verify webhook signature
    const signature = req.headers['x-elevenlabs-signature'] as string;
    const webhookSecret = process.env.ELEVENLABS_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error('ELEVENLABS_WEBHOOK_SECRET not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    if (!signature) {
      return res.status(401).json({ error: 'Missing signature' });
    }

    const payload = JSON.stringify(req.body);

    if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
      console.error('Invalid webhook signature');
      return res.status(401).json({ error: 'Invalid signature' });
    }

    // Parse and validate payload
    const data = WebhookPayloadSchema.parse(req.body);

    // Only process completed conversations
    if (data.status !== 'done') {
      return res.status(200).json({ message: 'Conversation not complete yet' });
    }

    // Extract collected data
    const collectedData = data.analysis?.data_collection;

    if (!collectedData) {
      console.log('No data collected in this conversation');
      return res.status(200).json({ message: 'No data collected' });
    }

    // Process email if collected
    if (collectedData.user_email) {
      console.log(`Processing email: ${collectedData.user_email}`);

      // Run all these in parallel for speed
      await Promise.all([
        // Save to database
        saveLeadToDatabase({
          conversationId: data.conversation_id,
          email: collectedData.user_email,
          name: collectedData.user_name,
          company: collectedData.company_name,
          phone: collectedData.phone_number,
          interestLevel: collectedData.interest_level,
          budgetRange: collectedData.budget_range,
          timeline: collectedData.timeline,
          specificInterest: collectedData.specific_interest,
          duration: data.metadata.call_duration_secs,
          language: data.metadata.main_language || undefined,
          source: 'voice_agent',
          timestamp: data.metadata.start_time_unix_secs
        }),

        // Send to CRM
        sendToHubSpot({
          ...collectedData,
          conversationId: data.conversation_id
        }),

        // Send follow-up email
        sendFollowUpEmail({
          email: collectedData.user_email,
          name: collectedData.user_name,
          interestLevel: collectedData.interest_level,
          specificInterest: collectedData.specific_interest,
          conversationId: data.conversation_id
        }),

        // Notify team if high interest
        notifyTeamOnSlack({
          email: collectedData.user_email,
          name: collectedData.user_name,
          company: collectedData.company_name,
          interestLevel: collectedData.interest_level,
          conversationId: data.conversation_id
        })
      ]);
    }

    // Log analytics
    await logAnalytics({
      conversationId: data.conversation_id,
      duration: data.metadata.call_duration_secs,
      successful: data.analysis?.call_successful === 'success',
      emailCollected: !!collectedData.user_email,
      language: data.metadata.main_language || undefined,
      agentId: data.agent_id
    });

    // Respond quickly to ElevenLabs
    return res.status(200).json({
      message: 'Webhook processed successfully',
      email_collected: !!collectedData.user_email
    });

  } catch (error) {
    console.error('Webhook processing error:', error);

    // Still return 200 to prevent auto-disable
    // Log error for investigation
    return res.status(200).json({
      message: 'Webhook received but processing failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
```

**Environment Variables Required:**
```bash
ELEVENLABS_WEBHOOK_SECRET=your_webhook_secret_here
HUBSPOT_API_KEY=your_hubspot_key (optional)
SENDGRID_API_KEY=your_sendgrid_key (optional)
SLACK_WEBHOOK_URL=your_slack_webhook (optional)
GA_MEASUREMENT_ID=your_ga_id (optional)
GA_API_SECRET=your_ga_secret (optional)
```

---

## Section-Specific Voice Widgets

**File**: `/src/components/voice-agent/SectionVoiceAgent.tsx`

```typescript
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConversation } from '@elevenlabs/react';
import { Mic, X, MessageSquare } from 'lucide-react';

interface SectionVoiceAgentProps {
  section: 'home' | 'services' | 'pricing' | 'case-studies' | 'contact';
  agentId: string;
  position?: 'inline' | 'floating' | 'bottom-right';
  autoStart?: boolean;
  showTranscript?: boolean;
}

// Section configurations with prompts
const SECTION_CONFIGS = {
  home: {
    prompt: `You are P0STMAN's main AI assistant.

About P0STMAN:
- We build custom AI agents and voice assistants for businesses
- Founded in 2024, based in San Francisco
- Specialties: Voice AI, customer support automation, lead generation bots
- Tech stack: ElevenLabs, OpenAI, custom integrations

Your Role:
- Welcome visitors and answer general questions
- Guide them to relevant sections (Services, Pricing, Case Studies)
- Assess their needs and interest level
- Collect contact info if they want to learn more

Conversation Guidelines:
- Be warm and professional
- Keep responses 2-3 sentences
- Ask clarifying questions
- Don't be pushy about contact info

Data Collection:
- If interested: collect email, name, company
- Always confirm email format: "Just to confirm, that's [email]?"
- Note specific interests for follow-up`,
    firstMessage: "Hi! I'm P0STMAN's AI assistant. What brings you here today?",
    color: 'blue',
    icon: '🤖'
  },

  services: {
    prompt: `You specialize in P0STMAN's AI development services.

Our Services:

1. Voice AI Agents ($15k-$50k)
   - Customer support voice bots
   - Lead qualification systems
   - Appointment scheduling agents
   - 24/7 availability
   - CRM integration

2. Chat AI Agents ($10k-$30k)
   - Website chatbots
   - FAQ automation
   - Multi-language support
   - Knowledge base integration

3. Custom AI Solutions ($50k+)
   - Complex workflows
   - Multiple integrations
   - Custom training
   - Ongoing optimization

Timeline: 4-12 weeks depending on complexity

Your Role:
- Understand user's use case
- Recommend appropriate service
- Explain technical capabilities
- Collect requirements if serious

Questions to Ask:
- "What problem are you trying to solve?"
- "How many customers/users would interact with this?"
- "Do you need integration with existing systems?"
- "What's your timeline?"`,
    firstMessage: "Hi! I can tell you all about our AI development services. What are you looking to build?",
    color: 'purple',
    icon: '🛠️'
  },

  pricing: {
    prompt: `You help users understand P0STMAN's pricing and packages.

Pricing Tiers:

💼 Starter ($10k-$15k)
- Single-purpose AI agent
- Basic integrations (1-2 APIs)
- Dashboard setup
- 2 months support
Best for: Simple chatbots, FAQ automation

🚀 Growth ($25k-$50k)
- Multi-purpose AI agent
- Advanced integrations (CRM, webhooks, databases)
- Custom UI design
- Data collection & analytics
- 6 months support
Best for: Lead generation, customer support, scheduling

🏢 Enterprise ($75k+)
- Multiple specialized agents
- Complex workflows
- Full system integration
- Dedicated support team
- Ongoing optimization
- SLA guarantees
Best for: Large companies, mission-critical systems

Your Role:
- Understand budget constraints
- Assess complexity & requirements
- Recommend appropriate tier
- Don't oversell or undersell

Key Questions:
- "What's your budget range?"
- "How complex is your use case?"
- "How many integrations do you need?"
- "When do you need this deployed?"

Data Collection:
- Budget: <15k, 15-50k, 50-75k, 75k+
- Timeline: urgent, normal, flexible
- Requirements: simple, medium, complex`,
    firstMessage: "Let's find the right solution for your budget! What are you looking to build?",
    color: 'green',
    icon: '💰'
  },

  'case-studies': {
    prompt: `You help users explore P0STMAN's successful projects.

Featured Case Studies:

🏥 HealthTech Voice Assistant (Mamori Health)
Client: Mental health platform with 10k users
Problem: 200+ daily calls overwhelming staff
Solution: Voice agent for pre-screening & scheduling
Results: 60% reduction in call volume, 40% faster intake
Tech: ElevenLabs + Healthie API + custom logic
Investment: $25k, 6-week timeline

🏠 Real Estate Lead Qualifier (HomeFinders)
Client: Real estate agency, 500+ leads/month
Problem: Wasting time on unqualified leads
Solution: Voice agent for initial qualification
Results: 3x increase in qualified leads, 50% time saved
Tech: Voice AI + Salesforce integration
Investment: $35k, 8-week timeline

🛍️ E-commerce Support Bot (StyleShop)
Client: Online fashion retailer, 50k monthly visitors
Problem: High support ticket volume, slow response
Solution: 24/7 AI chatbot for common questions
Results: 45% reduction in tickets, 90% satisfaction
Tech: GPT-4 + Shopify + custom knowledge base
Investment: $18k, 5-week timeline

Your Role:
- Ask about their industry & use case
- Share 1-2 most relevant examples
- Highlight ROI and results
- Offer to send detailed case study PDFs

Conversation Flow:
1. "What industry are you in?"
2. Share relevant case study
3. "Does this sound similar to your needs?"
4. "I can send you detailed case studies. What's your email?"`,
    firstMessage: "Want to see what we've built? Tell me about your business!",
    color: 'orange',
    icon: '📊'
  },

  contact: {
    prompt: `You help users connect with P0STMAN's team.

Contact Information:
- Email: hello@p0stman.com
- Phone: +1 (555) AGENTS-1
- Calendar: Book 30-min discovery call
- Response time: Within 24 hours

Your Role:
- Collect complete contact information
- Understand inquiry type
- Route to right team member
- Confirm next steps

Required Information:
1. Full name (first and last)
2. Email address
3. Company name
4. Inquiry type: demo | pricing | technical | partnership | other
5. Phone (optional but helpful)
6. Best time to contact
7. Preferred method: email | phone | video call

Conversation Flow:
1. "I'll make sure the right person gets back to you. What's your name?"
2. "And your email address?"
3. "What company are you with?"
4. "What can we help you with?" (demo/pricing/technical/other)
5. "What's the best phone number to reach you?" (optional)
6. "When's the best time to contact you?"
7. Confirm all information
8. "Perfect! You'll hear from us within 24 hours."

Always Confirm:
- Repeat email back: "Just to confirm, that's [email]?"
- Summarize: "So we'll [action] at [time]. Sound good?"`,
    firstMessage: "I'll help you get in touch with our team. What's your name?",
    color: 'blue',
    icon: '📧'
  }
};

export default function SectionVoiceAgent({
  section,
  agentId,
  position = 'inline',
  autoStart = false,
  showTranscript = false
}: SectionVoiceAgentProps) {
  const [isActive, setIsActive] = useState(false);
  const [messages, setMessages] = useState<Array<{role: string; text: string; timestamp: number}>>([]);
  const config = SECTION_CONFIGS[section];
  const conversation = useConversation();

  // Auto-start if enabled
  useEffect(() => {
    if (autoStart && !isActive) {
      startConversation();
    }
  }, [autoStart]);

  const startConversation = () => {
    conversation.startSession({
      agentId,
      overrides: {
        agent: {
          prompt: { prompt: config.prompt },
          firstMessage: config.firstMessage,
          language: 'en'
        }
      }
    });
    setIsActive(true);
  };

  const endConversation = () => {
    conversation.endSession();
    setIsActive(false);
  };

  // Waveform visualization
  const [waveform, setWaveform] = useState<number[]>(new Array(40).fill(0));

  useEffect(() => {
    if (conversation.status !== 'connected') return;

    const updateWaveform = () => {
      const data = conversation.getOutputByteFrequencyData();
      if (data) {
        const step = Math.floor(data.length / 40);
        const heights = Array.from({ length: 40 }, (_, i) =>
          (data[i * step] || 0) / 255 * 100
        );
        setWaveform(heights);
      }
    };

    const interval = setInterval(updateWaveform, 50);
    return () => clearInterval(interval);
  }, [conversation.status]);

  // Position classes
  const positionClasses = {
    inline: 'w-full max-w-2xl mx-auto',
    floating: 'fixed bottom-20 right-6 w-80 z-50',
    'bottom-right': 'fixed bottom-6 right-6 w-72 z-50'
  };

  return (
    <div className={positionClasses[position]}>
      <AnimatePresence>
        {!isActive ? (
          // Trigger button
          <motion.button
            onClick={startConversation}
            className={`
              flex items-center gap-3 px-6 py-4 rounded-xl
              bg-${config.color}-600 hover:bg-${config.color}-700
              text-white font-semibold shadow-lg
              transition-all duration-300 w-full
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-2xl">{config.icon}</span>
            <div className="flex-1 text-left">
              <div>Talk to {section} AI</div>
              <div className="text-xs opacity-80">Click to start voice conversation</div>
            </div>
            <Mic className="w-5 h-5" />
          </motion.button>
        ) : (
          // Active conversation widget
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className={`bg-${config.color}-600 text-white p-4 flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{config.icon}</span>
                <div>
                  <div className="font-semibold capitalize">{section} AI</div>
                  <div className="text-xs opacity-90">
                    {conversation.status === 'connecting' && 'Connecting...'}
                    {conversation.status === 'connected' && conversation.isSpeaking && 'Speaking...'}
                    {conversation.status === 'connected' && !conversation.isSpeaking && 'Listening...'}
                  </div>
                </div>
              </div>
              <button
                onClick={endConversation}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Waveform */}
              <div className="h-24 flex items-center justify-center gap-0.5 mb-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                {waveform.map((height, i) => (
                  <motion.div
                    key={i}
                    className={`w-1 bg-${config.color}-500 rounded-full`}
                    animate={{
                      height: conversation.isSpeaking ? `${Math.max(height, 8)}%` : '8%'
                    }}
                    transition={{ duration: 0.1 }}
                  />
                ))}
              </div>

              {/* Status */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className={`
                  w-2 h-2 rounded-full animate-pulse
                  ${conversation.isSpeaking ? `bg-orange-500` : `bg-${config.color}-500`}
                `} />
                <span>
                  {conversation.isSpeaking ? 'AI is speaking...' : 'You can speak now'}
                </span>
              </div>

              {/* Transcript (if enabled) */}
              {showTranscript && messages.length > 0 && (
                <div className="mt-4 space-y-2 max-h-48 overflow-y-auto">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`
                        p-3 rounded-lg text-sm
                        ${msg.role === 'user'
                          ? 'bg-blue-50 text-blue-900 ml-8'
                          : 'bg-gray-50 text-gray-900 mr-8'
                        }
                      `}
                    >
                      <div className="font-semibold capitalize mb-1">{msg.role}</div>
                      <div>{msg.text}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

**Usage in Pages:**

```tsx
// Home page
import SectionVoiceAgent from '@/components/voice-agent/SectionVoiceAgent';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <SectionVoiceAgent
        section="home"
        agentId={process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!}
        position="bottom-right"
        autoStart={false}
      />
    </div>
  );
}

// Services page - inline
export default function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>Learn about our AI development offerings...</p>

      <div className="my-12">
        <SectionVoiceAgent
          section="services"
          agentId={process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!}
          position="inline"
          showTranscript={true}
        />
      </div>
    </div>
  );
}
```

---

## Email Collection System Prompt

**Optimized prompt template for maximum email collection success:**

```text
You are P0STMAN's AI assistant for the {SECTION} section.

CRITICAL MISSION: Collect user contact information (especially email) when they show interest.

=== ABOUT P0STMAN ===
- We build custom AI agents and voice assistants
- Founded 2024, San Francisco
- Clients: Tech, healthcare, finance, real estate
- Price range: $10k-$75k+ depending on complexity

=== YOUR OBJECTIVES (IN ORDER) ===
1. Answer user questions professionally
2. Assess genuine interest level
3. Collect contact information from interested users
4. Guide next steps

=== DATA COLLECTION PROTOCOL ===

Interest Signals (When to ask for email):
- User asks about pricing
- User asks "how do I get started"
- User asks for case studies
- User says "this sounds interesting"
- User asks about timeline
- User asks technical questions about implementation

Natural Collection Flow:
1. Don't ask immediately - build rapport first
2. Offer value: "I can send you [resource]"
3. Then request: "What's your email?"
4. ALWAYS confirm: "Just to confirm, that's [repeat email back]?"
5. Collect name: "And your name?"
6. Optional: "What company are you with?"

Example Conversation:
User: "How much does a voice agent cost?"
You: "Prices range from $10k to $75k depending on complexity. I can send you a detailed pricing guide with examples. What's your email?"
User: "sarah@company.com"
You: "Perfect! Just to confirm, that's sarah@company.com - S-A-R-A-H at company dot com?"
User: "Yes"
You: "Great! And what's your name?"
User: "Sarah Johnson"
You: "Thanks Sarah! I'll send the pricing guide to your email. What company are you with?"

Email Validation:
- Must contain @ symbol
- Must have domain (.com, .io, etc.)
- If unclear, ask user to spell it
- Always confirm by repeating back

RED FLAGS (Don't collect if):
- User is just browsing casually
- User explicitly says "just looking"
- User asks vague questions
- No clear interest signal

=== CONVERSATION STYLE ===
- Warm and professional
- Concise (2-3 sentences per response)
- Ask one question at a time
- Don't be pushy or salesy
- Natural, conversational tone

=== WHAT NOT TO DO ===
❌ Don't ask for email immediately
❌ Don't say "to help you better, I need your email"
❌ Don't make it feel like a form
❌ Don't skip email confirmation
❌ Don't collect if no genuine interest

=== DATA TO COLLECT ===
Required:
- Email address (MUST confirm)
- Name (first and last if possible)

Nice to have:
- Company name
- Specific interest (what they want to build)
- Timeline (when they need it)
- Budget range (if discussing pricing)

=== SPECIFIC SECTION INFO: {SECTION} ===
{SECTION_SPECIFIC_DETAILS}

Remember: Your #1 goal is collecting emails from genuinely interested users. Quality over quantity!
```

---

## Data Collection Configuration

**Configure in ElevenLabs Dashboard** → Agent Settings → Analysis → Data Collection

```json
{
  "fields": [
    {
      "name": "user_email",
      "type": "String",
      "description": "Extract the user's email address in the format user@domain.com. The user must explicitly provide their email during the conversation. IMPORTANT: Only extract if the email contains an @ symbol and a valid domain (like .com, .io, .ai, etc.). If the email is unclear or incomplete, mark as null. Examples of valid emails: john@company.com, sarah.smith@startup.io, mike+work@business.co.uk"
    },
    {
      "name": "user_name",
      "type": "String",
      "description": "Extract the user's full name (first and last name if provided). If only first name is given, extract that. If no name is provided, return null. Examples: 'John Smith', 'Sarah Johnson', 'Mike' (if only first name given)"
    },
    {
      "name": "company_name",
      "type": "String",
      "description": "Extract the name of the user's company or organization if mentioned. Return null if not provided. Examples: 'TechStartup Inc', 'Acme Corp', 'Johnson & Associates'"
    },
    {
      "name": "phone_number",
      "type": "String",
      "description": "Extract phone number if provided. Accept any format (with or without country code, dashes, parentheses). Return null if not provided. Examples: '+1 555-123-4567', '(555) 123-4567', '5551234567'"
    },
    {
      "name": "interest_level",
      "type": "String",
      "description": "Assess the user's level of interest based on the conversation. Return one of: 'high' (asked about pricing, timeline, wants demo, ready to start), 'medium' (interested but exploring options, asked several questions), 'low' (casually browsing, vague questions), 'none' (just looking, no clear interest). Default to 'medium' if unclear."
    },
    {
      "name": "budget_range",
      "type": "String",
      "description": "Extract or infer budget range if discussed. Return one of: 'under_15k', '15k_to_50k', '50k_to_75k', 'over_75k', 'not_discussed'. Only include if the user explicitly mentions a budget or asks about specific pricing tiers."
    },
    {
      "name": "timeline",
      "type": "String",
      "description": "Extract when the user needs the solution. Return one of: 'urgent' (ASAP, within 1 month), 'normal' (1-3 months), 'flexible' (3+ months or just exploring), 'not_discussed'. Only include if timeline is mentioned."
    },
    {
      "name": "specific_interest",
      "type": "String",
      "description": "Extract what specific solution or use case the user is interested in. Examples: 'voice agent for customer support', 'chatbot for lead generation', 'appointment scheduling bot', 'voice assistant for healthcare'. Return null if no specific interest mentioned."
    },
    {
      "name": "page_section",
      "type": "String",
      "description": "Which section of the website this conversation occurred in. Return one of: 'home', 'services', 'pricing', 'case-studies', 'contact', 'other'. This helps us understand where users engage most."
    },
    {
      "name": "has_existing_system",
      "type": "Boolean",
      "description": "Whether the user mentioned having an existing system or CRM that needs integration. Return true if they mention Salesforce, HubSpot, Shopify, or any other platform. Return false if not discussed."
    },
    {
      "name": "team_size",
      "type": "String",
      "description": "Size of user's company/team if mentioned. Return one of: 'solo', 'small' (2-10), 'medium' (11-50), 'large' (50+), 'not_discussed'."
    },
    {
      "name": "preferred_contact_method",
      "type": "String",
      "description": "How the user prefers to be contacted. Return one of: 'email', 'phone', 'video_call', 'not_specified'. Only include if explicitly mentioned."
    }
  ]
}
```

---

## Analytics Dashboard

**File**: `/src/pages/admin/voice-analytics.tsx`

```typescript
import { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface ConversationAnalytics {
  total_conversations: number;
  email_collection_rate: number;
  avg_duration_seconds: number;
  interest_breakdown: { level: string; count: number }[];
  conversations_by_section: { section: string; count: number }[];
  conversations_over_time: { date: string; count: number }[];
  top_interests: { interest: string; count: number }[];
  conversion_rate: number;
}

export default function VoiceAnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<ConversationAnalytics | null>(null);
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, [dateRange]);

  async function fetchAnalytics() {
    setLoading(true);
    try {
      // Fetch from your API
      const response = await fetch(`/api/analytics/voice-conversations?range=${dateRange}`);
      const data = await response.json();
      setAnalytics(data);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading || !analytics) {
    return <div>Loading analytics...</div>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Voice Agent Analytics</h1>

      {/* Date range selector */}
      <div className="mb-8 flex gap-2">
        {(['7d', '30d', '90d'] as const).map(range => (
          <button
            key={range}
            onClick={() => setDateRange(range)}
            className={`
              px-4 py-2 rounded-lg font-medium transition-colors
              ${dateRange === range
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            Last {range === '7d' ? '7 days' : range === '30d' ? '30 days' : '90 days'}
          </button>
        ))}
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Conversations"
          value={analytics.total_conversations}
          icon="💬"
        />
        <MetricCard
          title="Email Collection Rate"
          value={`${(analytics.email_collection_rate * 100).toFixed(1)}%`}
          icon="📧"
          trend={analytics.email_collection_rate > 0.5 ? 'up' : 'down'}
        />
        <MetricCard
          title="Avg Duration"
          value={`${Math.floor(analytics.avg_duration_seconds / 60)}m ${analytics.avg_duration_seconds % 60}s`}
          icon="⏱️"
        />
        <MetricCard
          title="Conversion Rate"
          value={`${(analytics.conversion_rate * 100).toFixed(1)}%`}
          icon="🎯"
          trend={analytics.conversion_rate > 0.3 ? 'up' : 'down'}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Conversations over time */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Conversations Over Time</h2>
          <LineChart width={500} height={300} data={analytics.conversations_over_time}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </div>

        {/* Interest level breakdown */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Interest Level Breakdown</h2>
          <PieChart width={500} height={300}>
            <Pie
              data={analytics.interest_breakdown}
              dataKey="count"
              nameKey="level"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>

        {/* Conversations by section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Conversations by Section</h2>
          <BarChart width={500} height={300} data={analytics.conversations_by_section}>
            <XAxis dataKey="section" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#10B981" />
          </BarChart>
        </div>

        {/* Top interests */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Top User Interests</h2>
          <div className="space-y-3">
            {analytics.top_interests.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-gray-700">{item.interest}</span>
                <span className="font-semibold text-blue-600">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent conversations table */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Recent Conversations</h2>
        <RecentConversationsTable />
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon, trend }: {
  title: string;
  value: string | number;
  icon: string;
  trend?: 'up' | 'down';
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-start justify-between mb-2">
        <span className="text-2xl">{icon}</span>
        {trend && (
          <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? '↑' : '↓'}
          </span>
        )}
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-600">{title}</div>
    </div>
  );
}

function RecentConversationsTable() {
  // TODO: Fetch recent conversations
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3">Time</th>
            <th className="text-left p-3">Section</th>
            <th className="text-left p-3">Duration</th>
            <th className="text-left p-3">Email</th>
            <th className="text-left p-3">Interest</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map conversations here */}
        </tbody>
      </table>
    </div>
  );
}
```

---

**More examples available in the full research document!**

---

**Files Created:**
1. `/docs/ELEVENLABS_API_RESEARCH_2025.md` - Comprehensive research
2. `/docs/ELEVENLABS_QUICK_REFERENCE.md` - Quick reference guide
3. `/docs/ELEVENLABS_IMPLEMENTATION_EXAMPLES.md` - Production code examples

**Ready to implement! 🚀**
