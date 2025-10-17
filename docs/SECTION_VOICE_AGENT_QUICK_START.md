# Section Voice Agent - Quick Start Guide

> **Get up and running in 5 minutes**

## 1. Install Dependencies

Already installed in this project:
- `@elevenlabs/react`
- `framer-motion`
- `lucide-react`

## 2. Set Environment Variables

Add to `.env`:

```bash
VITE_ELEVENLABS_AGENT_ID=your_agent_id_here
```

## 3. Enable Overrides in ElevenLabs Dashboard

**⚠️ CRITICAL STEP** - Without this, custom prompts won't work!

1. Go to https://elevenlabs.io/app/conversational-ai
2. Select your agent
3. Click **Security** tab
4. Enable:
   - ✅ System Prompt Override
   - ✅ First Message Override
   - ✅ Language Override
   - ✅ Conversation Settings Override

## 4. Use the Component

### Basic Usage (Inline)

```tsx
import SectionVoiceAgent from '@/components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '@/config/voice-agent-sections';

export default function MyPage() {
  const config = getSectionConfig('cta');

  return (
    <SectionVoiceAgent
      section="cta"
      prompt={config.prompt}
      firstMessage={config.firstMessage}
      placement="inline"
    />
  );
}
```

### Floating Button (Bottom Right)

```tsx
<div className="fixed bottom-6 right-6 z-50">
  <SectionVoiceAgent
    section="services"
    prompt={getSectionConfig('services').prompt}
    placement="floating"
    color="purple"
    icon="🛠️"
  />
</div>
```

### Text-Only Chat

```tsx
<SectionVoiceAgent
  section="contact"
  prompt={getSectionConfig('contact').prompt}
  placement="inline"
  textOnly={true}
  showTranscript={true}
/>
```

## 5. Available Pre-Configured Sections

| Section | Purpose | Color | Icon |
|---------|---------|-------|------|
| `cta` | Lead capture, demo scheduling | Blue | 🤖 |
| `services` | Service explanations, technical Q&A | Purple | 🛠️ |
| `pricing` | Budget guidance, package selection | Green | 💰 |
| `process` | Development workflow explanation | Orange | 🔄 |
| `case-studies` | Success stories, ROI examples | Pink | 📊 |
| `contact` | Contact info collection | Blue | 📧 |
| `home` | General purpose homepage assistant | Blue | 🤖 |

## 6. Common Props

```tsx
<SectionVoiceAgent
  // Required
  section="cta"                    // Section identifier
  prompt={config.prompt}            // AI system prompt

  // Optional - Appearance
  placement="inline"                // 'inline' | 'floating'
  color="blue"                      // 'blue' | 'purple' | 'green' | 'orange' | 'pink'
  icon="🤖"                         // Any emoji
  buttonText="Custom Button Text"   // Override button text

  // Optional - Features
  textOnly={false}                  // Enable chat mode (no voice)
  showTranscript={false}            // Show live transcript
  autoStart={false}                 // Auto-start on mount

  // Optional - Callbacks
  onConversationStart={() => {}}    // Track start
  onConversationEnd={(id) => {}}    // Track end
  onError={(error) => {}}           // Handle errors
/>
```

## 7. Create Custom Section

Edit `/src/config/voice-agent-sections.ts`:

```typescript
export const SECTION_CONFIGS: Record<string, SectionConfig> = {
  // ... existing configs ...

  'my-section': {
    prompt: `You are a specialized assistant for [purpose].

Your Role:
- Help users with [task]
- Collect [data] if interested

Style: Friendly, concise, professional`,

    firstMessage: "Hi! How can I help with [purpose]?",
    buttonText: "Talk to AI",
    color: 'green',
    icon: '✨',
  },
};
```

Then use it:

```tsx
const config = getSectionConfig('my-section');

<SectionVoiceAgent
  section="my-section"
  prompt={config.prompt}
  firstMessage={config.firstMessage}
  color={config.color}
  icon={config.icon}
/>
```

## 8. Analytics Integration

```tsx
<SectionVoiceAgent
  section="services"
  prompt={config.prompt}
  onConversationStart={() => {
    // Track in your analytics
    gtag('event', 'voice_agent_start', { section: 'services' });
  }}
  onConversationEnd={(conversationId) => {
    gtag('event', 'voice_agent_complete', { id: conversationId });
  }}
/>
```

## 9. Mobile-Friendly

```tsx
const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

<SectionVoiceAgent
  section="contact"
  prompt={config.prompt}
  placement={isMobile ? 'floating' : 'inline'}
  textOnly={isMobile} // Chat mode on mobile
/>
```

## 10. Troubleshooting

### "Agent not starting"
- ✅ Check `VITE_ELEVENLABS_AGENT_ID` is set
- ✅ Grant microphone permissions
- ✅ Check browser console for errors

### "Custom prompt not working"
- ✅ Enable "System Prompt Override" in ElevenLabs Security tab
- ✅ Verify prompt prop is passed correctly

### "Language switching broken"
- ✅ Enable "Language Override" in ElevenLabs Security tab

## Complete Example

```tsx
import { useState } from 'react';
import SectionVoiceAgent from '@/components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '@/config/voice-agent-sections';

export default function ContactPage() {
  const config = getSectionConfig('contact');
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      {isActive && (
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          🎙️ Conversation in progress...
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        <SectionVoiceAgent
          section="contact"
          prompt={config.prompt}
          firstMessage={config.firstMessage}
          placement="inline"
          color="blue"
          icon="📧"
          buttonText="Chat with Our Team"
          showTranscript={true}
          onConversationStart={() => {
            setIsActive(true);
            gtag('event', 'voice_agent_start', { section: 'contact' });
          }}
          onConversationEnd={(id) => {
            setIsActive(false);
            gtag('event', 'voice_agent_complete', { id });
          }}
          onError={(error) => {
            console.error('Error:', error);
            toast.error('Connection issue. Please try again.');
          }}
        />
      </div>
    </div>
  );
}
```

## Next Steps

1. **View the demo**: `/voice-agent-demo`
2. **Read full guide**: `docs/SECTION_VOICE_AGENT_GUIDE.md`
3. **Check API research**: `docs/ELEVENLABS_API_RESEARCH_2025.md`
4. **Customize prompts**: `src/config/voice-agent-sections.ts`

---

**Need help?** Contact: hello@p0stman.com
