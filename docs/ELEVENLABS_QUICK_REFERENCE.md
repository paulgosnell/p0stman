# ElevenLabs API Quick Reference - 2025

> **TL;DR**: Everything you need to know about ElevenLabs Conversational AI in one page

---

## Email Collection: YES ✅

**How to extract email from voice conversations:**

1. **Configure in Dashboard**
   - Go to Agent Settings → Analysis → Data Collection
   - Add field: name = "user_email", type = "String"
   - Description: "Extract user's email address in format user@domain.com"

2. **Get Data After Conversation**
   ```javascript
   // Method 1: Webhook (recommended)
   app.post('/webhook/elevenlabs', (req, res) => {
     const email = req.body.analysis.data_collection.user_email;
     saveEmail(email);
     res.status(200).send('OK');
   });

   // Method 2: GET API
   const response = await fetch(
     `https://api.elevenlabs.io/v1/convai/conversations/${conversationId}`,
     { headers: { 'xi-api-key': apiKey } }
   );
   const data = await response.json();
   const email = data.analysis.data_collection.user_email;
   ```

3. **Access Full Transcript**
   ```javascript
   const transcript = data.transcript; // Array of messages
   // [{ role: 'user', message: 'My email is...', time_in_call_secs: 15 }]
   ```

**Best Practice**: In system prompt, tell agent to confirm email format before moving on.

---

## Chat vs Voice: ALL SUPPORTED ✅

| Mode | How to Enable |
|------|---------------|
| **Voice-only** | Default (no config needed) |
| **Text-only** | Set `overrides.conversation.textOnly: true` |
| **Hybrid** | Enable text toggle in widget settings |

**Text-Only Example:**
```javascript
const conversation = await Conversation.startSession({
  agentId: 'agent_id',
  apiKey: 'api_key',
  overrides: {
    conversation: { textOnly: true }
  },
  onMessage: (message) => {
    console.log('Message:', message);
  }
});
```

**Important**:
- Enable "Conversation Overrides" in Agent Security tab
- Activate `agent_response` callback
- Widget has built-in text UI, SDK needs custom UI

**Typing Interface**: Use widget with text toggle or implement custom UI with `onMessage` handler.

---

## System Prompts: FULLY CUSTOMIZABLE ✅

**Override per conversation:**

```javascript
const conversation = await Conversation.startSession({
  agentId: 'agent_id',
  apiKey: 'api_key',
  overrides: {
    agent: {
      prompt: {
        prompt: 'You are a specialized AI for the pricing section...'
      },
      firstMessage: 'Let\'s find the right plan for you!',
      language: 'en'
    },
    tts: {
      voiceId: 'custom_voice_id'
    }
  }
});
```

**CRITICAL**: Enable overrides in Agent Settings → Security tab first!

**Available Overrides:**
- System prompt (complete replacement)
- First message
- Language (en, es, fr, it, da, ar, etc.)
- Voice ID

**Dashboard vs API**: API overrides take precedence over dashboard settings.

---

## Conversation Features: COMPREHENSIVE ✅

### Transcripts
- ✅ Full conversation transcript available
- ✅ Includes timestamps, role, source (audio/text)
- ✅ Access via GET API or webhook
- ✅ Available after conversation ends (few seconds processing)

### Structured Data Extraction
- ✅ Define fields in dashboard (String, Boolean, etc.)
- ✅ LLM extracts from conversation
- ✅ Access via `analysis.data_collection`
- ✅ Works for email, name, company, phone, interest level, etc.

### Webhooks
- ✅ Post-call transcription (full data)
- ✅ Post-call audio (base64-encoded recording)
- ✅ HMAC signature authentication
- ✅ Must return 200 status
- ⚠️ Auto-disabled after 10+ consecutive failures

### What's Available After Conversation
```json
{
  "conversation_id": "string",
  "transcript": [...],           // Full conversation
  "analysis": {
    "data_collection": {...},    // YOUR EXTRACTED DATA HERE
    "call_successful": "success"
  },
  "metadata": {
    "call_duration_secs": 120,
    "main_language": "en",
    "charging": {...}
  }
}
```

---

## Mini Voice Agents: PERFECT FIT ✅

**Recommended Approach**: Single agent + dynamic prompts per section

```javascript
const SECTION_PROMPTS = {
  home: 'You are the main P0STMAN assistant...',
  services: 'You explain AI development services...',
  pricing: 'You help users find the right pricing tier...',
  contact: 'You collect contact information...'
};

function SectionAgent({ section }) {
  const prompt = SECTION_PROMPTS[section];

  conversation.startSession({
    agentId: 'single_agent_id',
    overrides: {
      agent: {
        prompt: { prompt: prompt },
        firstMessage: `Welcome to ${section}!`
      }
    }
  });
}
```

**Waveform Widget**: Already implemented! (`InlineVoiceAgent.tsx`)
- 60 animated bars
- Real-time frequency visualization
- `conversation.getOutputByteFrequencyData()`

**Small Widget Example**:
```javascript
<div className="fixed bottom-4 right-4 w-64">
  <InlineVoiceAgent
    isActive={isActive}
    agentId={agentId}
    onClose={() => setIsActive(false)}
  />
</div>
```

---

## API Endpoints

### Get Conversation
```
GET https://api.elevenlabs.io/v1/convai/conversations/{conversation_id}
Header: xi-api-key: your_api_key
```

### List Conversations
```
GET https://api.elevenlabs.io/v1/convai/conversations?agent_id={agent_id}
Header: xi-api-key: your_api_key
```

### Webhook Payload (sent to your endpoint)
```
POST https://your-domain.com/webhook/elevenlabs
Body: { conversation_id, transcript, analysis, metadata }
```

---

## Key Limitations

| Limitation | Workaround |
|------------|------------|
| No explicit `sendMessage()` API | Use widget with text toggle or check SDK source |
| Data collection only post-call | Accept few seconds delay, use webhooks |
| Overrides disabled by default | Enable in Security tab before using |
| Webhooks auto-disable on failures | Always return 200, implement proper error handling |
| Token limits on long prompts | Keep prompts under 1000 words |

---

## Common Issues & Solutions

### Issue: Overrides not working
**Fix**: Enable in Agent Settings → Security → Enable Overrides

### Issue: Email not extracted
**Fix**: Improve data collection description, have agent confirm format

### Issue: Webhook not firing
**Fix**: Check URL correct, return 200, verify HMAC signature

### Issue: Text mode not working
**Fix**: Enable conversation overrides in security settings

---

## Implementation Checklist

**For Email Collection:**
- [ ] Configure data collection field in dashboard
- [ ] Set up webhook endpoint
- [ ] Implement HMAC verification
- [ ] Test email extraction
- [ ] Add to CRM/database

**For Section-Specific Agents:**
- [ ] Define prompts for each section
- [ ] Enable security overrides
- [ ] Create reusable component
- [ ] Test prompt variations
- [ ] Deploy widgets to pages

**For Data Integration:**
- [ ] Set up webhook handler
- [ ] Connect to database
- [ ] CRM integration
- [ ] Email automation
- [ ] Analytics tracking

---

## Code Snippets

### Complete Setup Example
```javascript
// 1. Start conversation with overrides
const conversation = await Conversation.startSession({
  agentId: process.env.ELEVENLABS_AGENT_ID,
  apiKey: process.env.ELEVENLABS_API_KEY,
  overrides: {
    agent: {
      prompt: { prompt: 'Custom prompt for this section...' },
      firstMessage: 'Hi! How can I help?',
      language: 'en'
    },
    conversation: {
      textOnly: false // or true for text-only
    }
  },
  onConnect: () => console.log('Connected'),
  onDisconnect: () => console.log('Disconnected'),
  onModeChange: (mode) => console.log('Mode:', mode.mode)
});

// 2. Webhook handler
app.post('/webhook', async (req, res) => {
  const { conversation_id, analysis } = req.body;
  const email = analysis.data_collection.user_email;

  if (email) {
    await saveToDatabase({ email, conversation_id });
    await sendFollowUpEmail(email);
  }

  res.status(200).json({ success: true });
});

// 3. Get conversation data
const data = await fetch(
  `https://api.elevenlabs.io/v1/convai/conversations/${conversationId}`,
  { headers: { 'xi-api-key': apiKey } }
).then(r => r.json());

console.log('Email:', data.analysis.data_collection.user_email);
console.log('Transcript:', data.transcript);
```

---

## Resources

- **Full Research**: `/docs/ELEVENLABS_API_RESEARCH_2025.md`
- **Implementation Guide**: `/docs/ELEVENLABS_VOICE_AGENT_IMPLEMENTATION_GUIDE.md`
- **ElevenLabs Docs**: https://elevenlabs.io/docs
- **API Reference**: https://elevenlabs.io/docs/api-reference

---

**Last Updated**: January 2025
