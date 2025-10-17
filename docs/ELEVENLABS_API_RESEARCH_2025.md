# ElevenLabs API Comprehensive Research - January 2025

> **Research Date**: January 2025
> **Conducted for**: P0STMAN Project
> **Focus Areas**: Email collection, Chat/Voice options, System prompts, Conversation data, Use case feasibility

---

## Table of Contents

1. [Email Collection from Voice Conversations](#1-email-collection-from-voice-conversations)
2. [Chat vs Voice Options](#2-chat-vs-voice-options)
3. [System Prompts & Custom Instructions](#3-system-prompts--custom-instructions)
4. [Conversation Features](#4-conversation-features)
5. [Use Case Feasibility](#5-use-case-feasibility)
6. [Implementation Examples](#6-implementation-examples)
7. [API Endpoints Reference](#7-api-endpoints-reference)
8. [Limitations & Considerations](#8-limitations--considerations)

---

## 1. Email Collection from Voice Conversations

### ✅ YES - You Can Extract Email Addresses and Other Data

ElevenLabs provides a **Data Collection** feature that analyzes conversation transcripts to identify and extract specific information you define.

### How It Works

**Configuration Location**: Agent Settings → Analysis Tab → Data Collection Section

**Setup Process**:
1. Click "Add item" to create a new data extraction rule
2. Define what data to extract (e.g., "email address")
3. Specify the data type (String, Boolean, etc.)
4. Provide detailed description for the LLM

### Supported Data Types

| Data Type | Use Case | Example |
|-----------|----------|---------|
| **String** | Text-based information | Names, emails, addresses, company names |
| **Boolean** | True/false values | Agreement status, eligibility, interest level |
| **Number** | Numeric data | Age, quantity, price (implied from docs) |
| **Object** | Complex structures | Multiple related fields (implied from docs) |

### Best Practices for Email Extraction

```javascript
// Example Data Collection Configuration
{
  "field_name": "user_email",
  "data_type": "String",
  "description": "Extract the user's email address in the format user@domain.com. If the user provides multiple emails, extract the primary one. If no email is provided, return null. Validate that the email contains @ symbol and a domain."
}
```

**Key Recommendations**:
- Be explicit about expected format (e.g., "user@domain.com")
- Specify what to do when information is missing or unclear
- Include validation criteria in the description
- The description field is passed to the LLM, so be specific

### Accessing Collected Data

#### Method 1: POST-CALL WEBHOOKS (Recommended for Automation)

ElevenLabs sends a POST request to your endpoint when conversation analysis is complete.

**Webhook Types**:
- `post_call_transcription`: Full conversation data + analysis + collected data
- `post_call_audio`: Minimal data + base64-encoded audio

**Configuration**:
- Workspace level: Conversational AI settings
- Agent level: Individual agent webhook overrides

**Security**: Webhooks support HMAC signature authentication

**Important**: Webhooks must return 200 status. Auto-disabled after 10+ consecutive failures spanning 7+ days.

#### Method 2: GET CONVERSATION API

**Endpoint**: `GET https://api.elevenlabs.io/v1/convai/conversations/{conversation_id}`

**Authentication**:
```bash
xi-api-key: your_api_key_here
```

**Response Structure**:
```json
{
  "conversation_id": "string",
  "agent_id": "string",
  "status": "done",
  "transcript": [
    {
      "role": "user",
      "message": "My email is john@example.com",
      "time_in_call_secs": 15,
      "source_medium": "audio"
    },
    {
      "role": "agent",
      "message": "Thank you, I've saved your email as john@example.com",
      "time_in_call_secs": 18,
      "source_medium": "audio"
    }
  ],
  "analysis": {
    "call_successful": "success",
    "evaluation_criteria_results": {},
    "data_collection": {
      "user_email": "john@example.com"
    }
  },
  "metadata": {
    "start_time_unix_secs": 1705000000,
    "call_duration_secs": 120,
    "main_language": "en"
  }
}
```

**Key Fields for Data Extraction**:
- `transcript[]`: Full conversation with timestamps
- `analysis.data_collection`: Structured extracted data (YOUR EMAIL IS HERE!)
- `status`: "done" indicates analysis complete
- `metadata`: Call duration, language, charging info

### 2025 Update (August 15, 2025)

Post-call transcription webhooks will be updated to match the exact format of GET Conversation response, adding:
- `has_audio` (boolean)
- `has_user_audio` (boolean)
- `has_response_audio` (boolean)

### Practical Email Collection Flow

```javascript
// 1. Configure agent with data collection rule for email
// (Done in ElevenLabs dashboard)

// 2. User has voice conversation
// User: "My email is sarah@company.com"
// Agent: "Got it, I'll send the information to sarah@company.com"

// 3. Conversation ends, ElevenLabs processes transcript

// 4A. Webhook receives data (if configured)
app.post('/webhook/elevenlabs', (req, res) => {
  const { conversation_id, analysis } = req.body;
  const email = analysis.data_collection.user_email;

  // Save to database
  await saveUserEmail(email, conversation_id);

  res.status(200).send('OK');
});

// 4B. Or poll for conversation data
const conversation = await fetch(
  `https://api.elevenlabs.io/v1/convai/conversations/${conversationId}`,
  {
    headers: { 'xi-api-key': apiKey }
  }
);
const data = await conversation.json();
const email = data.analysis.data_collection.user_email;
```

### Can You Parse the Conversation? YES

**Transcript Access**:
- Full conversation transcript available in `transcript[]` array
- Each message includes role (user/agent), text, timestamp
- Source medium tracked (audio vs text)
- Tool calls and results captured
- Interruption tracking included

**Use Cases**:
- Email extraction
- Phone number collection
- Lead qualification data
- Sentiment analysis
- Conversation analytics
- Follow-up automation

---

## 2. Chat vs Voice Options

### ✅ YES - ElevenLabs Supports Multiple Modalities

### Voice-Only Mode (Default)

**What It Is**: Traditional voice conversation using microphone and speakers

**Configuration**: Default mode, no special setup required

**Use Cases**:
- Phone calls
- Voice assistants
- Hands-free interactions
- Accessibility

### Text-Only Mode (Chat Mode)

**What It Is**: Text-based conversations without audio input/output

**Configuration**: Set `textOnly: true` in conversation overrides

**JavaScript SDK Example**:
```javascript
import { Conversation } from '@elevenlabs/client';

const conversation = await Conversation.startSession({
  agentId: 'your_agent_id',
  apiKey: 'your_api_key',
  overrides: {
    conversation: {
      textOnly: true
    }
  },
  onMessage: (message) => {
    console.log('Message:', message);
    // Handle incoming messages (user input, agent responses, etc.)
  }
});
```

**React SDK Example**:
```javascript
import { useConversation } from '@elevenlabs/react';

const conversation = useConversation({
  overrides: {
    conversation: {
      textOnly: true
    }
  }
});

// Start conversation
conversation.startSession({ agentId: 'your_agent_id' });
```

**Important Requirements**:
- Enable "Conversation Overrides" in Agent Security tab
- Activate `agent_response` event/callback
- Without proper callback configuration, agent responses won't be sent

**Use Cases**:
- Chat interfaces
- Testing agents without audio
- Text-based customer support
- When audio is not required

### Hybrid Mode (Voice + Text)

**What It Is**: Multimodal conversations supporting both voice and text input/output

**Configuration**: ElevenLabs agents support multimodal interactions natively

**Pricing Note**: Text message pricing per message in multimodal mode (additional cost)

**Use Cases**:
- Users can speak or type
- Agent can respond with voice or text
- Accessibility for hearing/speech impaired
- Flexible user preference

### Widget Mode Options

**The ElevenLabs widget supports three modes**:

1. **Voice-only** (default): Traditional voice conversations
2. **Text toggle enabled**: Users can switch between voice and text
3. **Text-only**: Pure chat interface

**Widget Configuration**:
```html
<!-- Voice + Text Toggle -->
<div
  data-elevenlabs-agent-id="your_agent_id"
  data-elevenlabs-text-input="true"
></div>

<!-- Text-only -->
<div
  data-elevenlabs-agent-id="your_agent_id"
  data-elevenlabs-text-only="true"
></div>
```

### Capability Comparison

| Feature | Voice-Only | Text-Only | Hybrid |
|---------|-----------|-----------|--------|
| **Audio Input** | ✅ | ❌ | ✅ |
| **Text Input** | ❌ | ✅ | ✅ |
| **Audio Output** | ✅ | ❌ | ✅ |
| **Text Output** | ❌ | ✅ | ✅ |
| **Transcripts** | ✅ | ✅ | ✅ |
| **Data Collection** | ✅ | ✅ | ✅ |
| **Tools/Functions** | ✅ | ✅ | ✅ |
| **Webhooks** | ✅ | ✅ | ✅ |
| **Real-time** | ✅ | ✅ | ✅ |
| **Pricing** | Standard | Per message | Standard + per text msg |

### Text Input Interface Details

**Widget Implementation**:
- Text input field appears at bottom of widget
- Toggle button to switch between voice/text
- Send button for text messages
- Real-time message display

**SDK Implementation**:
- Use `onMessage` callback to receive all messages
- Message types include:
  - User voice transcription (tentative/final)
  - User text input
  - Agent responses
  - Debug messages
- Source medium tracked in transcript (`"audio"` or `"text"`)

### Typing/Text Input Methods

**For Custom UI** (not using widget):

You'll need to implement your own UI, but the SDK handles the conversation:

```javascript
const conversation = await Conversation.startSession({
  agentId: 'agent_id',
  apiKey: 'api_key',
  overrides: {
    conversation: { textOnly: true }
  },
  onMessage: (message) => {
    // message.role: 'user' | 'agent'
    // message.message: the text content
    displayMessage(message);
  }
});

// When user types and hits send
async function handleUserInput(text) {
  // The SDK doesn't expose a direct sendMessage method in docs
  // Text input is handled via the onMessage callback when textOnly is enabled
  // You may need to use the widget or check SDK source for text sending
}
```

**Note**: The official documentation doesn't explicitly show a `sendMessage()` method. Text-only mode seems primarily designed for the widget or for receiving text responses. For fully custom chat UIs, you may need to:
1. Use the widget with custom styling
2. Check the SDK source code on GitHub
3. Contact ElevenLabs support for custom text sending

---

## 3. System Prompts & Custom Instructions

### ✅ YES - You Can Override System Prompts Programmatically

### Available Override Parameters

ElevenLabs allows complete override of agent configuration at runtime:

| Parameter | Type | Description |
|-----------|------|-------------|
| `agent.prompt.prompt` | string | Complete system prompt replacement |
| `agent.firstMessage` | string | Agent's opening message |
| `agent.language` | string | Conversation language (en, es, fr, it, da, ar, etc.) |
| `tts.voiceId` | string | Voice ID for text-to-speech |

### Security Requirements (IMPORTANT!)

**Overrides are DISABLED by default for security**

**To enable**:
1. Navigate to Agent Settings
2. Click "Security" tab
3. Enable specific overrides:
   - ✅ System Prompt Override
   - ✅ First Message Override
   - ✅ Language Override (if needed)
   - ✅ Voice ID Override (if needed)

**Why this matters**: If you try to use overrides without enabling them in security settings, the API will ignore them or return errors.

### JavaScript SDK Implementation

```javascript
import { Conversation } from '@elevenlabs/client';

const conversation = await Conversation.startSession({
  agentId: 'your_agent_id',
  apiKey: 'your_api_key',
  overrides: {
    agent: {
      prompt: {
        prompt: `You are a specialized AI assistant for the ${siteSection} section of our website.

Your role is to help users with ${specificTask}.

Guidelines:
- Be concise and helpful
- Focus on ${specificFeature}
- If asked about other topics, politely redirect to relevant section
- Collect user email if they express interest

Important context:
- Current page: ${pageName}
- User type: ${userType}
- Previous interaction: ${hasPreviousInteraction}
`
      },
      firstMessage: `Hi! I'm your AI assistant for ${siteSection}. How can I help you today?`,
      language: 'en'
    },
    tts: {
      voiceId: 'custom_voice_id' // Optional: different voice per section
    }
  },
  onConnect: () => {
    console.log('Connected with custom prompt');
  }
});
```

### React SDK Implementation

```javascript
import { useConversation } from '@elevenlabs/react';

function SectionVoiceAgent({ section, context }) {
  const [customPrompt, setCustomPrompt] = useState('');

  useEffect(() => {
    // Build prompt based on section
    const prompt = buildPromptForSection(section, context);
    setCustomPrompt(prompt);
  }, [section, context]);

  const conversation = useConversation();

  const startConversation = () => {
    const config = {
      agentId: 'your_agent_id',
      overrides: {
        agent: {
          prompt: { prompt: customPrompt },
          firstMessage: `Welcome to ${section}! How can I assist you?`,
          language: 'en'
        }
      }
    };

    conversation.startSession(config);
  };

  return (
    <button onClick={startConversation}>
      Talk to {section} AI
    </button>
  );
}
```

### Python SDK Implementation

```python
from elevenlabs.client import Conversation

conversation_override = {
    "agent": {
        "prompt": {
            "prompt": "Your custom system prompt here"
        },
        "first_message": "Custom opening message",
        "language": "en"
    },
    "tts": {
        "voice_id": "custom_voice_id"
    }
}

conversation = Conversation.start_session(
    agent_id="your_agent_id",
    api_key="your_api_key",
    overrides=conversation_override
)
```

### Swift SDK Implementation

```swift
import ElevenLabs

let agentPrompt = AgentPrompt(prompt: "Custom system prompt")
let agentConfig = AgentConfig(
    prompt: agentPrompt,
    firstMessage: "Custom opening",
    language: "en"
)
let override = ConversationConfigOverride(agent: agentConfig)

let conversation = try await Conversation.startSession(
    agentId: "your_agent_id",
    overrides: override
)
```

### HTML Widget Implementation

```html
<div
  data-elevenlabs-agent-id="your_agent_id"
  data-elevenlabs-override-prompt="Custom system prompt for this page"
  data-elevenlabs-override-first-message="Welcome to this section!"
  data-elevenlabs-override-language="en"
  data-elevenlabs-override-voice-id="custom_voice_id"
></div>
```

### Dynamic Prompt Building (Best Practice)

```javascript
function buildDynamicPrompt(context) {
  const {
    pageSection,
    userType,
    userName,
    productInterest,
    hasAccount
  } = context;

  return `You are a specialized AI assistant for ${pageSection}.

User Context:
- Name: ${userName || 'Guest'}
- Type: ${userType}
- Has Account: ${hasAccount}
- Interested in: ${productInterest}

Your Objectives:
1. Answer questions about ${pageSection}
2. ${hasAccount ? 'Help with account-specific tasks' : 'Encourage sign-up'}
3. Collect email if user shows interest
4. Direct users to relevant resources

Conversation Style:
- Professional but friendly
- Concise responses (2-3 sentences)
- Ask clarifying questions when needed
- Always confirm collected information

Data Collection:
- If user provides email, confirm format
- If user asks for demo, collect name and company
- Track interest level for follow-up
`;
}

// Usage
const prompt = buildDynamicPrompt({
  pageSection: 'AI Agent Development',
  userType: 'founder',
  userName: 'John',
  productInterest: 'custom AI agents',
  hasAccount: false
});
```

### Alternative: Dynamic Variables (Recommended by ElevenLabs)

Instead of completely overriding the system prompt, ElevenLabs recommends using **Dynamic Variables** for better maintainability:

**What are Dynamic Variables?**
- Placeholders in your agent's system prompt
- Injected at runtime with real values
- Defined in dashboard, values provided via API
- Better for structured personalization

**Example**:
```javascript
// In dashboard, set system prompt:
"You are an AI assistant. The user's name is {{user_name}} and they are interested in {{interest}}."

// In code:
const conversation = await Conversation.startSession({
  agentId: 'your_agent_id',
  dynamicVariables: {
    user_name: 'Sarah',
    interest: 'AI development'
  }
});

// Result:
"You are an AI assistant. The user's name is Sarah and they are interested in AI development."
```

### When to Use Overrides vs Dynamic Variables

| Use Case | Use Overrides | Use Dynamic Variables |
|----------|--------------|----------------------|
| Completely different agent per section | ✅ | ❌ |
| Small personalization tweaks | ❌ | ✅ |
| A/B testing prompts | ✅ | ❌ |
| User-specific context | ❌ | ✅ |
| Different languages | ✅ | ❌ |
| Temporary behavior changes | ✅ | ❌ |
| Maintainable at scale | ❌ | ✅ |

### Best Practices

1. **Omit fields you don't override** - Don't set to null/empty
2. **Enable security settings first** - Overrides won't work otherwise
3. **Test prompt variations** - Different sections need different approaches
4. **Keep prompts concise** - Agents perform better with clear, focused instructions
5. **Include data collection instructions** - Remind agent to collect email/info
6. **Version your prompts** - Track what works best

### Can You Override Dashboard Prompts? YES

- Dashboard settings are defaults
- API overrides take precedence
- Widget overrides take precedence over UI
- You can completely replace dashboard prompts per conversation

---

## 4. Conversation Features

### Conversation Transcripts/Logs: ✅ YES

**Full transcript access via**:
- GET /v1/convai/conversations/{conversation_id}
- Post-call webhooks

**Transcript Structure**:
```json
{
  "transcript": [
    {
      "role": "user",
      "message": "What services do you offer?",
      "time_in_call_secs": 5,
      "source_medium": "audio",
      "interrupted": false
    },
    {
      "role": "agent",
      "message": "We offer custom AI agent development...",
      "time_in_call_secs": 8,
      "source_medium": "audio",
      "interrupted": false,
      "tool_calls": [],
      "tool_results": []
    }
  ]
}
```

**Available Data**:
- Role (user/agent)
- Message text
- Timestamp in conversation
- Source medium (audio/text)
- Interruption status
- Tool calls and results
- Multi-voice data (if using multiple voices)

### Structured Data Extraction: ✅ YES

**Configure in Dashboard** → Agent Settings → Analysis → Data Collection

**Example Configuration**:
```json
{
  "fields": [
    {
      "name": "user_email",
      "type": "String",
      "description": "User's email address in format user@domain.com"
    },
    {
      "name": "user_name",
      "type": "String",
      "description": "User's full name"
    },
    {
      "name": "company_name",
      "type": "String",
      "description": "User's company or organization name"
    },
    {
      "name": "interested_in_demo",
      "type": "Boolean",
      "description": "Whether user expressed interest in a demo or trial"
    },
    {
      "name": "budget_range",
      "type": "String",
      "description": "Mentioned budget range or size (small/medium/large)"
    },
    {
      "name": "urgency",
      "type": "String",
      "description": "Timeline mentioned (ASAP, this month, this quarter, exploring)"
    }
  ]
}
```

**Accessing Extracted Data**:
```javascript
// Via API
const response = await fetch(
  `https://api.elevenlabs.io/v1/convai/conversations/${conversationId}`,
  { headers: { 'xi-api-key': apiKey } }
);
const data = await response.json();

// Extracted structured data
const collectedData = data.analysis.data_collection;
console.log(collectedData);
// {
//   user_email: "sarah@startup.com",
//   user_name: "Sarah Johnson",
//   company_name: "TechStartup Inc",
//   interested_in_demo: true,
//   budget_range: "medium",
//   urgency: "this month"
// }
```

### Data Available After Conversation Ends

**Immediately Available**:
- Conversation ID
- Start/end timestamps
- Connection status

**Available After Processing** (few seconds delay):
- Full transcript
- Analysis results
- Extracted data
- Call success/failure
- Evaluation criteria results
- Metadata (duration, language, costs)

**Metadata Object**:
```json
{
  "metadata": {
    "start_time_unix_secs": 1705000000,
    "call_duration_secs": 180,
    "main_language": "en",
    "termination_reason": "user_ended",
    "charging": {
      "total_tokens": 1500,
      "total_cost_cents": 25
    },
    "features_usage": {
      "language_detection_enabled": true,
      "language_detection_used": true,
      "transfers_enabled": false,
      "multivoice_enabled": false,
      "dtmf_enabled": false
    }
  }
}
```

### Webhooks / Callbacks: ✅ YES

**Two Types of Webhooks**:

#### 1. Post-Call Transcription Webhook
**Purpose**: Full conversation data when analysis complete

**Configuration**:
- Workspace level: Settings → Conversational AI → Webhooks
- Agent level: Agent Settings → Webhooks

**What You Receive**:
```json
{
  "conversation_id": "conv_123abc",
  "agent_id": "agent_456def",
  "status": "done",
  "transcript": [...],
  "analysis": {
    "call_successful": "success",
    "data_collection": {...},
    "evaluation_criteria_results": {...}
  },
  "metadata": {...},
  "has_audio": true,
  "has_user_audio": true,
  "has_response_audio": true
}
```

**Your Endpoint Should**:
- Return 200 status code
- Process data asynchronously (respond quickly)
- Validate HMAC signature for security
- Handle retries gracefully

**Auto-Disable Rules**:
- 10+ consecutive failures
- Last successful delivery >7 days ago
- Never successfully delivered after many attempts

#### 2. Post-Call Audio Webhook
**Purpose**: Receive base64-encoded audio recording

**What You Receive**:
```json
{
  "conversation_id": "conv_123abc",
  "agent_id": "agent_456def",
  "audio_base64": "SGVsbG8gd29ybGQ...",
  "metadata": {...}
}
```

**Use Cases**:
- Audio archival
- Quality assurance
- Training data
- Compliance recording

### Real-Time Callbacks (During Conversation)

**JavaScript SDK Callbacks**:
```javascript
const conversation = await Conversation.startSession({
  agentId: 'agent_id',
  apiKey: 'api_key',

  // Connection lifecycle
  onConnect: () => {
    console.log('Connected');
  },
  onDisconnect: () => {
    console.log('Disconnected');
  },
  onError: (error) => {
    console.error('Error:', error);
  },

  // Mode changes
  onModeChange: (mode) => {
    console.log('Mode:', mode.mode); // 'listening' | 'speaking'
  },

  // Messages
  onMessage: (message) => {
    // Real-time message stream
    console.log('Message:', message);
  }
});
```

**React SDK Callbacks**:
```javascript
const conversation = useConversation();

// Access status
console.log(conversation.status); // 'connecting' | 'connected' | 'disconnected'
console.log(conversation.isSpeaking); // boolean
console.log(conversation.isListening); // boolean

// Get audio data for visualizations
const frequencyData = conversation.getOutputByteFrequencyData();
```

### List All Conversations

**Endpoint**: `GET https://api.elevenlabs.io/v1/convai/conversations`

**Parameters**:
- `agent_id` (optional): Filter by agent
- `limit`: Number of results
- `offset`: Pagination offset

**Response**:
```json
{
  "conversations": [
    {
      "conversation_id": "conv_123",
      "agent_id": "agent_456",
      "status": "done",
      "start_time_unix_secs": 1705000000,
      "call_duration_secs": 120
    }
  ],
  "total": 50
}
```

### Conversation Status Values

| Status | Meaning |
|--------|---------|
| `initiated` | Conversation created, not started |
| `in-progress` | Currently active |
| `processing` | Ended, analyzing transcript |
| `done` | Complete, data available |
| `failed` | Error occurred |

---

## 5. Use Case Feasibility

### Use Case 1: Mini Voice Agents for Different Site Sections

#### Feasibility: ✅ HIGHLY FEASIBLE

**Approach 1: Single Agent with Dynamic Prompts (Recommended)**

Create one ElevenLabs agent, override system prompt per section:

```javascript
// Section-specific configurations
const sectionConfigs = {
  'home': {
    prompt: 'You are P0STMAN\'s main AI assistant...',
    firstMessage: 'Welcome to P0STMAN! How can I help you today?',
    voiceId: 'professional_voice'
  },
  'services': {
    prompt: 'You specialize in explaining P0STMAN\'s AI development services...',
    firstMessage: 'Hi! Let me tell you about our services.',
    voiceId: 'professional_voice'
  },
  'case-studies': {
    prompt: 'You help users explore P0STMAN\'s successful AI implementations...',
    firstMessage: 'Want to see what we\'ve built? Ask me anything!',
    voiceId: 'friendly_voice'
  },
  'pricing': {
    prompt: 'You assist with pricing, packages, and budget questions...',
    firstMessage: 'Let\'s find the right plan for you!',
    voiceId: 'professional_voice'
  }
};

// Component for each section
function SectionVoiceAgent({ section }) {
  const config = sectionConfigs[section];

  const conversation = await Conversation.startSession({
    agentId: process.env.VITE_ELEVENLABS_AGENT_ID,
    apiKey: process.env.VITE_ELEVENLABS_API_KEY,
    overrides: {
      agent: {
        prompt: { prompt: config.prompt },
        firstMessage: config.firstMessage,
        language: 'en'
      },
      tts: {
        voiceId: config.voiceId
      }
    }
  });
}
```

**Pros**:
- Single agent to manage
- Consistent base configuration
- Easy to update globally
- Cost-effective (one agent)

**Cons**:
- Must enable security overrides
- All sections share usage limits
- Prompt size limits per call

**Approach 2: Multiple Agents (For Very Different Behaviors)**

Create separate agents in ElevenLabs dashboard:

```javascript
const agentIds = {
  'home': 'agent_home_123',
  'services': 'agent_services_456',
  'case-studies': 'agent_cases_789',
  'pricing': 'agent_pricing_abc'
};

function SectionVoiceAgent({ section }) {
  const agentId = agentIds[section];
  // No overrides needed, uses dashboard config
}
```

**Pros**:
- Complete customization per section
- Separate analytics per agent
- No security override needed
- Independent rate limits

**Cons**:
- More agents to manage
- Updates need dashboard changes
- Higher complexity

### Use Case 2: Small Waveform Widget

#### Feasibility: ✅ FULLY FEASIBLE (Already Implemented!)

**Your Current Implementation** (from InlineVoiceAgent.tsx):

```javascript
// Real-time waveform visualization
const updateWaveform = () => {
  const frequencyData = conversation.getOutputByteFrequencyData();
  if (frequencyData) {
    const step = Math.floor(frequencyData.length / 60);
    const heights = Array.from({ length: 60 }, (_, i) => {
      const value = frequencyData[i * step] || 0;
      return (value / 255) * 100;
    });
    setBarHeights(heights);
  }
  animationFrameRef.current = requestAnimationFrame(updateWaveform);
};
```

**Widget Variations for Different Sections**:

```javascript
// Compact waveform widget
<div className="fixed bottom-4 right-4 w-64 h-20">
  <InlineVoiceAgent
    isActive={isActive}
    onClose={() => setIsActive(false)}
    agentId={agentIds[currentSection]}
  />
</div>

// Inline section widget
<div className="my-8 max-w-xl mx-auto">
  <h3>Talk to Our {sectionName} AI</h3>
  <InlineVoiceAgent
    isActive={isActive}
    onClose={() => setIsActive(false)}
    agentId={agentId}
  />
</div>

// Floating action button
<button
  className="fixed bottom-6 right-6 w-14 h-14 rounded-full"
  onClick={() => setShowWidget(!showWidget)}
>
  🎤
</button>
{showWidget && <InlineVoiceAgent ... />}
```

**Customization Options**:
- Size: Adjust container dimensions
- Position: Fixed, absolute, inline
- Color scheme: Match section branding
- Bar count: Modify from 60 to any number
- Animation style: Customize motion transitions

### Use Case 3: Collect User Information via Voice

#### Feasibility: ✅ FULLY SUPPORTED

**Implementation Flow**:

```javascript
// 1. Configure data collection in dashboard
// Fields: email, name, company, interest_level, budget_range

// 2. Design conversation flow in system prompt
const prompt = `
You are P0STMAN's AI assistant specializing in ${section}.

Your objectives:
1. Answer user questions about ${section}
2. Assess user interest level
3. Collect contact information if interested

Data Collection Protocol:
- If user shows interest, ask: "Would you like me to send you more information?"
- If yes, say: "Great! What's the best email to reach you?"
- Confirm email: "Just to confirm, that's {email}?"
- If user asks about pricing/demo, collect: name, company, email

Natural Collection (DO NOT):
- Don't ask for email immediately
- Don't make it feel like a form
- Don't be pushy

Natural Collection (DO):
- Wait for interest signals
- Offer value first ("I can send you a detailed guide...")
- Make it conversational
- Always confirm information
`;

// 3. User has conversation
// User: "This sounds interesting, how do I get started?"
// Agent: "I'd be happy to help! I can send you a getting started guide. What's your email?"
// User: "It's john@startup.com"
// Agent: "Perfect, john@startup.com. I'll send that over. What's your name?"
// User: "John Smith"
// Agent: "Thanks John! You'll receive the guide shortly."

// 4. Conversation ends, data is extracted

// 5. Webhook receives data
app.post('/webhook/elevenlabs', async (req, res) => {
  const { conversation_id, analysis } = req.body;

  const {
    user_email,
    user_name,
    company_name,
    interest_level,
    budget_range
  } = analysis.data_collection;

  // Save to CRM
  await saveLead({
    email: user_email,
    name: user_name,
    company: company_name,
    source: 'voice_agent',
    section: req.body.metadata.page_section,
    interest: interest_level,
    budget: budget_range,
    transcript_url: `/conversations/${conversation_id}`
  });

  // Send follow-up email
  if (user_email) {
    await sendEmail({
      to: user_email,
      subject: 'Thanks for chatting with P0STMAN!',
      body: buildEmailContent(analysis)
    });
  }

  res.status(200).send('OK');
});
```

**Best Practices for Voice Collection**:

1. **Be Natural**: Don't make it feel like a form
2. **Offer Value**: "I can send you X" before asking for email
3. **Confirm Everything**: "Just to confirm, that's john@company.com?"
4. **Handle Errors**: "Sorry, I didn't catch that. Could you repeat your email?"
5. **Validate in Prompt**: "Ensure email contains @ and valid domain"
6. **Privacy First**: "Your information is secure and won't be shared"

### Use Case 4: Showcase Capabilities Through Interface

#### Feasibility: ✅ EXCELLENT OPPORTUNITY

**Visual Showcase Ideas**:

1. **Real-time Waveform** (Already Implemented)
   - Shows AI is "listening" and "speaking"
   - 60 animated bars responding to voice
   - Professional visual feedback

2. **Transcript Display** (Easy to Add)
```javascript
function VoiceAgentWithTranscript() {
  const [messages, setMessages] = useState([]);

  const conversation = await Conversation.startSession({
    agentId: 'agent_id',
    onMessage: (message) => {
      if (message.type === 'transcript') {
        setMessages(prev => [...prev, {
          role: message.role,
          text: message.message,
          timestamp: Date.now()
        }]);
      }
    }
  });

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <InlineVoiceAgent />
      </div>
      <div className="flex-1 bg-gray-50 p-4 rounded">
        <h3>Live Transcript</h3>
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'text-blue-600' : 'text-gray-800'}>
            <strong>{msg.role}:</strong> {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}
```

3. **Capability Badges** (Show What AI Can Do)
```javascript
<div className="capabilities">
  {conversation.isListening && <Badge>🎤 Listening</Badge>}
  {conversation.isSpeaking && <Badge>🔊 Speaking</Badge>}
  {toolsUsed.length > 0 && <Badge>🛠️ Using Tools</Badge>}
  {dataCollected.email && <Badge>✅ Email Collected</Badge>}
</div>
```

4. **Multi-Language Demo**
```javascript
<div className="language-demo">
  <h3>Try in Different Languages</h3>
  <button onClick={() => startWithLanguage('en')}>English 🇬🇧</button>
  <button onClick={() => startWithLanguage('es')}>Español 🇪🇸</button>
  <button onClick={() => startWithLanguage('fr')}>Français 🇫🇷</button>
  <button onClick={() => startWithLanguage('it')}>Italiano 🇮🇹</button>
</div>
```

5. **Behind-the-Scenes View** (For Demo Pages)
```javascript
<div className="demo-panel">
  <h3>What the AI Sees</h3>
  <pre>{JSON.stringify({
    currentSection: 'services',
    systemPrompt: promptPreview,
    userContext: {
      visitCount: 3,
      previousQuestions: ['pricing', 'timeline']
    },
    dataCollectionFields: ['email', 'name', 'company']
  }, null, 2)}</pre>
</div>
```

### Implementation Roadmap

#### Phase 1: Foundation (1-2 weeks)
- ✅ Already Done: Basic voice agent with overlay
- ✅ Already Done: Waveform visualization
- ✅ Already Done: Language support
- [ ] Set up post-call webhooks
- [ ] Configure data collection fields
- [ ] Test email extraction

#### Phase 2: Section-Specific Agents (1 week)
- [ ] Define prompts for each section
- [ ] Enable security overrides
- [ ] Create section agent components
- [ ] Add inline widgets to key pages

#### Phase 3: Data Collection (1 week)
- [ ] Webhook endpoint for conversation data
- [ ] Database schema for leads
- [ ] CRM integration
- [ ] Follow-up email automation

#### Phase 4: Advanced Features (2 weeks)
- [ ] Live transcript display
- [ ] Text-only chat option
- [ ] Conversation analytics dashboard
- [ ] A/B testing different prompts

#### Phase 5: Polish & Optimize (1 week)
- [ ] Mobile optimization
- [ ] Performance tuning
- [ ] Error handling improvements
- [ ] Documentation

### Cost Estimation

**ElevenLabs Pricing** (as of 2025):
- Conversational AI: Per-minute pricing
- Text messages: Per-message pricing (hybrid mode)
- Data collection: Included
- Webhooks: Included
- API calls: Included

**Estimated Monthly Cost** (for 1000 conversations):
- Average 2 min per conversation
- Voice-only: ~$X per conversation
- With text: +$Y per text message
- Total: ~$Z/month (check current ElevenLabs pricing)

**Cost Optimization**:
- Use single agent with overrides (not multiple agents)
- Voice-only mode is cheaper than hybrid
- Cache common responses when possible
- Set max conversation duration

---

## 6. Implementation Examples

### Example 1: Section-Specific Voice Widget

**File**: `/src/components/voice-agent/SectionVoiceWidget.tsx`

```typescript
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useConversation } from '@elevenlabs/react';
import { Mic, MicOff, X } from 'lucide-react';

interface SectionVoiceWidgetProps {
  section: string;
  position?: 'inline' | 'floating' | 'bottom-right';
  agentId: string;
}

// Section configurations
const SECTION_CONFIGS = {
  home: {
    prompt: `You are P0STMAN's main AI assistant. You help visitors understand what P0STMAN does...`,
    firstMessage: 'Welcome to P0STMAN! How can I help you today?',
    colorScheme: 'blue'
  },
  services: {
    prompt: `You specialize in explaining P0STMAN's AI development services...`,
    firstMessage: 'Hi! Let me tell you about our services.',
    colorScheme: 'purple'
  },
  'case-studies': {
    prompt: `You help users explore P0STMAN's successful AI implementations...`,
    firstMessage: 'Want to see what we\'ve built? Ask me anything!',
    colorScheme: 'green'
  }
};

export default function SectionVoiceWidget({
  section,
  position = 'inline',
  agentId
}: SectionVoiceWidgetProps) {
  const [isActive, setIsActive] = useState(false);
  const [messages, setMessages] = useState<Array<{role: string, message: string}>>([]);
  const config = SECTION_CONFIGS[section] || SECTION_CONFIGS.home;

  const conversation = useConversation();

  const startConversation = () => {
    const sessionConfig = {
      agentId,
      overrides: {
        agent: {
          prompt: { prompt: config.prompt },
          firstMessage: config.firstMessage,
          language: 'en'
        }
      }
    };

    conversation.startSession(sessionConfig);
    setIsActive(true);
  };

  const endConversation = () => {
    conversation.endSession();
    setIsActive(false);
  };

  // Listen for messages
  useEffect(() => {
    if (conversation.status === 'connected') {
      // Track messages for transcript display
      // Note: Actual implementation depends on SDK message events
    }
  }, [conversation.status]);

  // Waveform data
  const [waveformData, setWaveformData] = useState<number[]>(new Array(40).fill(0));

  useEffect(() => {
    if (conversation.status === 'connected') {
      const updateWaveform = () => {
        const frequencyData = conversation.getOutputByteFrequencyData();
        if (frequencyData) {
          const step = Math.floor(frequencyData.length / 40);
          const heights = Array.from({ length: 40 }, (_, i) => {
            const value = frequencyData[i * step] || 0;
            return (value / 255) * 100;
          });
          setWaveformData(heights);
        }
      };
      const interval = setInterval(updateWaveform, 50);
      return () => clearInterval(interval);
    }
  }, [conversation.status]);

  // Position-specific styling
  const positionClasses = {
    inline: 'w-full max-w-2xl mx-auto',
    floating: 'fixed bottom-20 right-6 w-80',
    'bottom-right': 'fixed bottom-6 right-6 w-72'
  };

  return (
    <div className={positionClasses[position]}>
      {!isActive ? (
        // Activation button
        <motion.button
          onClick={startConversation}
          className={`
            flex items-center gap-3 px-6 py-4 rounded-xl
            bg-${config.colorScheme}-600 hover:bg-${config.colorScheme}-700
            text-white font-medium shadow-lg
            transition-all duration-300
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mic className="w-5 h-5" />
          <span>Talk to {section} AI</span>
        </motion.button>
      ) : (
        // Active widget
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-2xl p-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-gray-800">
                {section} AI Assistant
              </h3>
              <p className="text-sm text-gray-500">
                {conversation.status === 'connected' && conversation.isSpeaking && 'Speaking...'}
                {conversation.status === 'connected' && !conversation.isSpeaking && 'Listening...'}
                {conversation.status === 'connecting' && 'Connecting...'}
              </p>
            </div>
            <button
              onClick={endConversation}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Waveform visualization */}
          <div className="h-24 flex items-center justify-center gap-1 mb-4">
            {waveformData.map((height, i) => (
              <motion.div
                key={i}
                className={`w-1 bg-${config.colorScheme}-500 rounded-full`}
                animate={{
                  height: conversation.isSpeaking ? `${Math.max(height, 10)}%` : '10%'
                }}
                transition={{ duration: 0.1 }}
              />
            ))}
          </div>

          {/* Status indicator */}
          <div className="flex items-center justify-center gap-2">
            <div className={`
              w-3 h-3 rounded-full animate-pulse
              ${conversation.isSpeaking ? 'bg-orange-500' : 'bg-blue-500'}
            `} />
            <span className="text-sm text-gray-600">
              {conversation.isSpeaking ? 'AI is speaking' : 'You can speak now'}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
```

### Example 2: Email Collection Flow

**File**: `/src/lib/elevenlabs-webhook-handler.ts`

```typescript
import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

interface ElevenLabsWebhookPayload {
  conversation_id: string;
  agent_id: string;
  status: string;
  transcript: Array<{
    role: string;
    message: string;
    time_in_call_secs: number;
  }>;
  analysis: {
    call_successful: string;
    data_collection: {
      user_email?: string;
      user_name?: string;
      company_name?: string;
      interest_level?: string;
      budget_range?: string;
      contact_preference?: string;
    };
  };
  metadata: {
    start_time_unix_secs: number;
    call_duration_secs: number;
    main_language: string;
  };
}

// Verify webhook signature
function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const expectedSignature = hmac.digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

// Process webhook
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Verify signature
    const signature = req.headers['x-elevenlabs-signature'] as string;
    const webhookSecret = process.env.ELEVENLABS_WEBHOOK_SECRET!;
    const payload = JSON.stringify(req.body);

    if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
      return res.status(401).json({ error: 'Invalid signature' });
    }

    const data: ElevenLabsWebhookPayload = req.body;

    // Only process completed conversations
    if (data.status !== 'done') {
      return res.status(200).json({ message: 'Not ready yet' });
    }

    // Extract collected data
    const collectedData = data.analysis.data_collection;

    if (collectedData.user_email) {
      // Save to database
      await saveLeadToDatabase({
        email: collectedData.user_email,
        name: collectedData.user_name,
        company: collectedData.company_name,
        interestLevel: collectedData.interest_level,
        budgetRange: collectedData.budget_range,
        contactPreference: collectedData.contact_preference,
        conversationId: data.conversation_id,
        duration: data.metadata.call_duration_secs,
        language: data.metadata.main_language,
        source: 'voice_agent',
        timestamp: data.metadata.start_time_unix_secs
      });

      // Send to CRM (e.g., HubSpot, Salesforce)
      await sendToCRM({
        email: collectedData.user_email,
        firstName: collectedData.user_name?.split(' ')[0],
        lastName: collectedData.user_name?.split(' ').slice(1).join(' '),
        company: collectedData.company_name,
        leadSource: 'Voice Agent',
        interestLevel: collectedData.interest_level,
        notes: `Voice conversation: ${data.conversation_id}`,
        customFields: {
          budgetRange: collectedData.budget_range,
          conversationDuration: data.metadata.call_duration_secs
        }
      });

      // Send follow-up email
      await sendFollowUpEmail({
        to: collectedData.user_email,
        name: collectedData.user_name,
        subject: 'Thanks for chatting with P0STMAN!',
        template: 'voice-agent-follow-up',
        data: {
          conversationSummary: generateSummary(data.transcript),
          nextSteps: getNextSteps(collectedData.interest_level),
          calendarLink: 'https://calendly.com/p0stman/demo'
        }
      });

      // Trigger internal notifications
      if (collectedData.interest_level === 'high') {
        await notifyTeam({
          channel: '#hot-leads',
          message: `🔥 High-interest lead from voice agent: ${collectedData.user_email}`,
          conversationUrl: `https://app.p0stman.com/conversations/${data.conversation_id}`
        });
      }
    }

    // Log for analytics
    await logConversationMetrics({
      conversationId: data.conversation_id,
      duration: data.metadata.call_duration_secs,
      successful: data.analysis.call_successful === 'success',
      emailCollected: !!collectedData.user_email,
      language: data.metadata.main_language
    });

    // Respond quickly (process rest async if needed)
    return res.status(200).json({ message: 'Processed' });

  } catch (error) {
    console.error('Webhook processing error:', error);
    return res.status(500).json({ error: 'Processing failed' });
  }
}

// Helper functions
async function saveLeadToDatabase(lead: any) {
  // Your database logic
}

async function sendToCRM(contact: any) {
  // Your CRM integration
}

async function sendFollowUpEmail(email: any) {
  // Your email service (SendGrid, Mailgun, etc.)
}

async function notifyTeam(notification: any) {
  // Slack, Discord, or internal notification
}

async function logConversationMetrics(metrics: any) {
  // Analytics service
}

function generateSummary(transcript: any[]): string {
  // Generate conversation summary
  const userMessages = transcript.filter(m => m.role === 'user');
  return `You asked about: ${userMessages.map(m => m.message).join(', ')}`;
}

function getNextSteps(interestLevel?: string): string[] {
  if (interestLevel === 'high') {
    return [
      'Schedule a demo call',
      'Review our case studies',
      'Get a custom proposal'
    ];
  }
  return [
    'Explore our services',
    'Read our blog',
    'Join our newsletter'
  ];
}
```

### Example 3: Multi-Agent Setup for Different Sections

**File**: `/src/config/voice-agents.ts`

```typescript
// Configuration for section-specific voice agents
export const VOICE_AGENT_CONFIGS = {
  home: {
    agentId: process.env.VITE_ELEVENLABS_AGENT_ID,
    prompt: `You are P0STMAN's main AI assistant.

About P0STMAN:
- We build custom AI agents for businesses
- Specialties: Voice AI, customer support bots, lead generation
- Founded in 2024, San Francisco-based
- Clients across tech, healthcare, finance

Your Role:
- Welcome visitors warmly
- Answer general questions about P0STMAN
- Guide them to relevant sections
- Collect email if they want to learn more

Conversation Style:
- Friendly and professional
- Concise (2-3 sentences per response)
- Ask one question at a time
- Natural, not robotic

Data Collection:
- If interested: collect email, name, company
- If asking about pricing: offer to send proposal
- Always confirm information accuracy
`,
    firstMessage: "Hi! I'm P0STMAN's AI assistant. What brings you here today?",
    voiceId: 'professional_voice_id'
  },

  services: {
    agentId: process.env.VITE_ELEVENLABS_AGENT_ID,
    prompt: `You are an expert on P0STMAN's AI development services.

Our Services:
1. Custom AI Agents
   - Voice agents for customer support
   - Lead qualification bots
   - Internal productivity assistants

2. Integration Services
   - CRM integration (Salesforce, HubSpot)
   - API development
   - Webhook setup

3. Consulting & Strategy
   - AI readiness assessment
   - Use case discovery
   - ROI analysis

Pricing:
- Small projects: $10k-$25k
- Medium projects: $25k-$75k
- Enterprise: Custom pricing

Your Role:
- Explain services in detail
- Understand user needs
- Recommend appropriate service
- Collect requirements if interested

Questions to Ask:
- "What problem are you trying to solve?"
- "How many users/customers would this serve?"
- "Do you have an existing system to integrate with?"
`,
    firstMessage: "Hi! I can tell you all about our AI development services. What are you looking to build?",
    voiceId: 'professional_voice_id'
  },

  'case-studies': {
    agentId: process.env.VITE_ELEVENLABS_AGENT_ID,
    prompt: `You help users explore P0STMAN's successful AI implementations.

Featured Case Studies:

1. HealthTech Voice Assistant (Mamori)
   - Built voice agent for patient pre-screening
   - Reduced call center load by 60%
   - Integration with Healthie EHR
   - $25k project, 6-week timeline

2. Real Estate Lead Qualifier (HomeFinders)
   - AI voice agent for lead pre-qualification
   - Collects budget, location, timeline
   - CRM integration with automatic follow-up
   - Increased qualified leads by 3x

3. E-commerce Support Bot (StyleShop)
   - 24/7 customer support chatbot
   - Order tracking, returns, product questions
   - Reduced support tickets by 45%
   - Multilingual support

Your Role:
- Share relevant case studies
- Highlight results and ROI
- Connect to user's needs
- Offer similar solution

Conversation Flow:
- Ask about their industry/use case
- Share 1-2 relevant examples
- Explain how we could help them
- Collect email to send case study PDFs
`,
    firstMessage: "Want to see what we've built? Tell me about your business and I'll share relevant case studies!",
    voiceId: 'friendly_voice_id'
  },

  pricing: {
    agentId: process.env.VITE_ELEVENLABS_AGENT_ID,
    prompt: `You help users understand P0STMAN's pricing and find the right package.

Pricing Tiers:

Starter Package ($10k-$15k):
- Single-purpose AI agent
- Basic integrations (1-2 APIs)
- Dashboard setup
- 2 months support
- Best for: Simple chatbots, FAQs

Growth Package ($25k-$50k):
- Multi-purpose AI agent
- Advanced integrations (CRM, webhooks)
- Custom UI/UX
- Data collection & analysis
- 6 months support
- Best for: Lead generation, customer support

Enterprise Package ($75k+):
- Multiple agents
- Complex workflows
- Full system integration
- Dedicated support
- Ongoing optimization
- Best for: Large companies, complex needs

Your Role:
- Understand budget constraints
- Ask about complexity & requirements
- Recommend appropriate tier
- Explain what's included
- Offer to send custom proposal

Questions to Ask:
- "What's your budget range?"
- "Is this for one use case or multiple?"
- "How many integrations do you need?"
- "When do you need this deployed?"

Data Collection:
- Budget range: <15k, 15-50k, 50k+
- Timeline: urgent (<1 month), normal (1-3 months), flexible
- Complexity: simple, medium, complex
- Contact info: email, name, company
`,
    firstMessage: "Let's find the right solution for your budget. What are you looking to build?",
    voiceId: 'professional_voice_id'
  },

  contact: {
    agentId: process.env.VITE_ELEVENLABS_AGENT_ID,
    prompt: `You help users get in touch with P0STMAN's team.

Contact Methods:
- Email: hello@p0stman.com
- Phone: +1 (555) AGENTS-1
- Calendar: Schedule 30-min call
- Form: Leave message for callback

Your Role:
- Collect contact information
- Understand inquiry type
- Route to appropriate team member
- Schedule calls if requested

Data Collection (Required):
- Name (first and last)
- Email
- Phone (optional)
- Company name
- Inquiry type: demo, pricing, technical, partnership
- Best time to contact
- Preferred contact method

Conversation Flow:
1. "I'll make sure the right person contacts you. First, what's your name?"
2. "And your email address?"
3. "What company are you with?"
4. "What can we help you with?" (demo/pricing/technical/other)
5. "When's the best time to reach you?"
6. Confirm all information
7. "Perfect! Expect to hear from us within 24 hours."
`,
    firstMessage: "I'll help you get in touch with our team. What's your name?",
    voiceId: 'professional_voice_id'
  }
};

// Export function to get config by section
export function getVoiceAgentConfig(section: string) {
  return VOICE_AGENT_CONFIGS[section] || VOICE_AGENT_CONFIGS.home;
}
```

### Example 4: Conversation Analytics Dashboard

```typescript
// Fetch and display conversation analytics
async function getConversationAnalytics(agentId: string, dateRange: DateRange) {
  const conversations = await fetch(
    `https://api.elevenlabs.io/v1/convai/conversations?agent_id=${agentId}`,
    {
      headers: { 'xi-api-key': process.env.ELEVENLABS_API_KEY }
    }
  );

  const data = await conversations.json();

  // Analyze data
  const analytics = {
    totalConversations: data.conversations.length,
    avgDuration: calculateAverage(data.conversations.map(c => c.call_duration_secs)),
    emailCollectionRate: calculateRate(data.conversations, 'email_collected'),
    successRate: calculateRate(data.conversations, 'call_successful'),
    topLanguages: getTopLanguages(data.conversations),
    peakHours: calculatePeakHours(data.conversations),
    conversionsBySection: groupBySection(data.conversations)
  };

  return analytics;
}
```

---

## 7. API Endpoints Reference

### Conversations API

#### Get Conversation Details
```
GET https://api.elevenlabs.io/v1/convai/conversations/{conversation_id}
```

**Headers:**
- `xi-api-key: your_api_key`

**Response:**
```json
{
  "conversation_id": "string",
  "agent_id": "string",
  "status": "done",
  "user_id": "string | null",
  "transcript": [...],
  "analysis": {...},
  "metadata": {...},
  "has_audio": true,
  "has_user_audio": true,
  "has_response_audio": true
}
```

#### List Conversations
```
GET https://api.elevenlabs.io/v1/convai/conversations
```

**Query Parameters:**
- `agent_id` (optional): Filter by agent
- `limit`: Number of results
- `offset`: Pagination

**Response:**
```json
{
  "conversations": [...],
  "total": 100
}
```

### Agent Configuration

#### Conversation with Overrides (SDK)
```javascript
const conversation = await Conversation.startSession({
  agentId: 'agent_id',
  apiKey: 'api_key',
  overrides: {
    agent: {
      prompt: { prompt: 'Custom prompt' },
      firstMessage: 'Custom opening',
      language: 'en'
    },
    tts: {
      voiceId: 'voice_id'
    },
    conversation: {
      textOnly: false
    }
  }
});
```

### Webhooks

#### Post-Call Transcription Webhook
**Your Endpoint**: `POST https://your-domain.com/webhook/elevenlabs`

**Payload** (sent by ElevenLabs):
```json
{
  "conversation_id": "string",
  "agent_id": "string",
  "status": "done",
  "transcript": [...],
  "analysis": {
    "call_successful": "success",
    "data_collection": {...}
  },
  "metadata": {...}
}
```

**Your Response:**
```json
{ "status": 200 }
```

---

## 8. Limitations & Considerations

### Current Limitations

#### 1. Text-Only Mode Limitations
- **No native sendMessage method**: Documentation doesn't show explicit text sending API
- **Widget-centric**: Text mode seems designed primarily for widget use
- **Workaround**: Use widget with custom styling or contact ElevenLabs for custom implementation

#### 2. Data Collection
- **LLM-based extraction**: Accuracy depends on prompt quality and conversation clarity
- **No real-time access**: Must wait for post-call analysis (few seconds delay)
- **Limited validation**: Basic validation only, may need additional checks

#### 3. Security Overrides
- **Must be enabled**: Overrides disabled by default, easy to forget
- **Per-agent setting**: Must enable for each agent separately
- **No runtime enable**: Can't enable overrides via API, must use dashboard

#### 4. Webhooks
- **Auto-disable**: 10+ consecutive failures causes auto-disable
- **No retry config**: Can't configure retry behavior
- **HMAC only**: Only HMAC signature authentication, no OAuth

#### 5. Multiple Agents on Same Page
- **Not explicitly documented**: ElevenLabs docs don't confirm multiple simultaneous agents
- **Likely supported**: Based on widget architecture, but test thoroughly
- **Resource usage**: Multiple active conversations may impact performance

#### 6. Conversation Length
- **Token limits**: Large system prompts count against limits
- **Cost scaling**: Longer conversations cost more
- **No explicit max**: No documented maximum duration, but likely has practical limits

### Best Practices

#### 1. Prompt Engineering
- Keep system prompts under 1000 words
- Be explicit about data collection
- Include example conversations
- Test with various user inputs
- Version your prompts

#### 2. Error Handling
```javascript
const conversation = await Conversation.startSession({
  agentId: 'agent_id',
  onError: (error) => {
    // Log error
    logError(error);

    // Show user-friendly message
    showNotification('Connection issue. Please try again.');

    // Attempt reconnection
    if (error.code === 'CONNECTION_LOST') {
      setTimeout(() => retryConnection(), 3000);
    }

    // Fallback to text form
    if (error.code === 'MICROPHONE_DENIED') {
      showTextForm();
    }
  }
});
```

#### 3. Performance Optimization
- Lazy load voice components
- Preload agent configurations
- Cache frequently used data
- Throttle waveform updates
- Clean up on unmount

#### 4. User Experience
- Clear visual feedback for all states
- Explain microphone permissions
- Provide text alternative
- Show what data is collected
- Allow conversation download

#### 5. Privacy & Compliance
- Display privacy policy before conversation
- Get consent for data collection
- Allow data deletion requests
- Secure webhook endpoints
- Encrypt stored transcripts
- GDPR compliance for EU users

### Known Issues & Workarounds

#### Issue: Overrides Not Working
**Symptom**: System prompt not changing despite override
**Cause**: Security settings not enabled
**Solution**: Enable in Agent Settings → Security tab

#### Issue: Email Not Extracted
**Symptom**: Data collection returns null for email
**Cause**: Prompt not specific enough or user didn't provide clear email
**Solution**:
- Improve data collection description
- Have agent confirm email format
- Add validation to prompt

#### Issue: Webhook Not Receiving Data
**Symptom**: Conversations complete but webhook not called
**Cause**: Webhook URL wrong, auto-disabled, or signature validation failing
**Solution**:
- Verify URL in settings
- Check webhook wasn't auto-disabled
- Implement proper HMAC verification
- Return 200 quickly

#### Issue: Multiple Agents Conflict
**Symptom**: Only one agent works when multiple embedded
**Cause**: Resource sharing or z-index issues
**Workaround**:
- Use single agent with dynamic prompts instead
- Ensure agents don't start simultaneously
- Test thoroughly before production

---

## Conclusion

### What You CAN Do ✅

1. **Email Collection**: Full support via Data Collection feature + webhooks
2. **Chat Mode**: Text-only conversations supported via `textOnly` override
3. **Hybrid Mode**: Voice + text multimodal support available
4. **System Prompts**: Complete override capability per conversation
5. **Transcripts**: Full access to conversation history
6. **Structured Data**: Extract any defined fields from conversations
7. **Webhooks**: Post-call data delivery with full payload
8. **Multi-Language**: 6+ languages supported
9. **Section-Specific Agents**: Dynamic prompts per site section
10. **Waveform Widgets**: Real-time visual feedback (already implemented!)

### What's Challenging ⚠️

1. **Custom Text UI**: No explicit sendMessage API in docs (use widget or check SDK source)
2. **Real-time Data**: Collection data only after conversation ends
3. **Multiple Simultaneous Agents**: Not explicitly documented, needs testing
4. **Override Configuration**: Must enable security settings first (easy to miss)

### Recommended Implementation

**For P0STMAN Use Case:**

1. **Use Single Agent with Dynamic Prompts**
   - More maintainable
   - Cost-effective
   - Flexible per section

2. **Implement Webhook Handler**
   - Critical for email collection
   - Enable CRM integration
   - Power follow-up automation

3. **Start with Voice-Only**
   - Simpler implementation
   - Better showcase
   - Lower cost

4. **Add Text Mode Later**
   - Use widget text toggle
   - Good for accessibility
   - Optional enhancement

5. **Deploy Incrementally**
   - Homepage first
   - Then key sections
   - Monitor and optimize

### Next Steps

1. ✅ Review this research
2. [ ] Test webhook setup locally
3. [ ] Configure data collection fields in dashboard
4. [ ] Create section-specific prompts
5. [ ] Enable security overrides
6. [ ] Implement webhook handler
7. [ ] Deploy to staging
8. [ ] Test email collection flow
9. [ ] Monitor analytics
10. [ ] Optimize based on data

---

## Resources

- **ElevenLabs Docs**: https://elevenlabs.io/docs
- **JavaScript SDK**: https://github.com/elevenlabs/elevenlabs-js
- **API Reference**: https://elevenlabs.io/docs/api-reference
- **Your Implementation**: `/Users/paulgosnell/Sites/p0stman/docs/ELEVENLABS_VOICE_AGENT_IMPLEMENTATION_GUIDE.md`

---

**Research completed**: January 2025
**Researcher**: Claude (Anthropic)
**Client**: P0STMAN
