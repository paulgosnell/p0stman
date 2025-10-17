# Section Voice Agent Component Guide

> **Reusable voice agent component that can be deployed on any page section**

## Overview

The `SectionVoiceAgent` component is a flexible, production-ready voice/chat agent that can be customized for different sections of your website. Each instance can have its own:

- Custom AI behavior (system prompt)
- Visual styling (color theme, icon)
- Placement (inline widget or floating button)
- Mode (voice or text-only chat)
- Language support (6+ languages)

## Quick Start

### 1. Basic Implementation

```tsx
import SectionVoiceAgent from '@/components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '@/config/voice-agent-sections';

export default function MyPage() {
  const config = getSectionConfig('cta');

  return (
    <div>
      <h1>Get Started with AI Agents</h1>

      <SectionVoiceAgent
        section="cta"
        prompt={config.prompt}
        firstMessage={config.firstMessage}
        placement="inline"
        color={config.color}
        icon={config.icon}
      />
    </div>
  );
}
```

### 2. Floating Button (Bottom Right)

```tsx
<div className="fixed bottom-6 right-6 z-50">
  <SectionVoiceAgent
    section="services"
    prompt={config.prompt}
    firstMessage={config.firstMessage}
    placement="floating"
    color="purple"
    icon="🛠️"
  />
</div>
```

### 3. Text-Only Chat Mode

```tsx
<SectionVoiceAgent
  section="contact"
  prompt={config.prompt}
  firstMessage={config.firstMessage}
  placement="inline"
  textOnly={true}
  showTranscript={true}
  buttonText="Chat with Us"
/>
```

## Component Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `section` | `string` | Yes | - | Section identifier (e.g., 'cta', 'services') |
| `prompt` | `string` | Yes | - | Custom system prompt for AI behavior |
| `firstMessage` | `string` | No | - | Opening message from the agent |
| `placement` | `'inline' \| 'floating'` | No | `'inline'` | Widget display mode |
| `buttonText` | `string` | No | - | Custom text for trigger button |
| `textOnly` | `boolean` | No | `false` | Enable text-only chat mode (no voice) |
| `showTranscript` | `boolean` | No | `false` | Display live conversation transcript |
| `color` | `'blue' \| 'purple' \| 'green' \| 'orange' \| 'pink'` | No | `'blue'` | Theme color |
| `icon` | `string` | No | `'🎤'` | Emoji icon for button |
| `autoStart` | `boolean` | No | `false` | Auto-start conversation on mount |
| `onConversationStart` | `() => void` | No | - | Callback when conversation starts |
| `onConversationEnd` | `(id?: string) => void` | No | - | Callback when conversation ends |
| `onError` | `(error: any) => void` | No | - | Callback when error occurs |

## Pre-Configured Sections

The component comes with 6 pre-configured sections in `/src/config/voice-agent-sections.ts`:

### 1. CTA Section (`cta`)
**Purpose**: High-conversion focus for getting users started
- **Color**: Blue
- **Icon**: 🤖
- **Focus**: Quick lead capture, demo scheduling
- **Best For**: Landing pages, hero sections, primary CTAs

### 2. Services Section (`services`)
**Purpose**: Deep dive into service offerings
- **Color**: Purple
- **Icon**: 🛠️
- **Focus**: Detailed service explanations, technical Q&A
- **Best For**: Services page, product pages

### 3. Pricing Section (`pricing`)
**Purpose**: Budget guidance and package selection
- **Color**: Green
- **Icon**: 💰
- **Focus**: Pricing tiers, budget discussions, ROI calculations
- **Best For**: Pricing page, package comparison sections

### 4. Process Section (`process`)
**Purpose**: Explain development workflow and timeline
- **Color**: Orange
- **Icon**: 🔄
- **Focus**: Process steps, timeline expectations, client involvement
- **Best For**: How it works pages, process sections

### 5. Case Studies Section (`case-studies`)
**Purpose**: Show successful implementations
- **Color**: Pink
- **Icon**: 📊
- **Focus**: Real examples, ROI stories, industry-specific cases
- **Best For**: Case studies page, testimonials section

### 6. Contact Section (`contact`)
**Purpose**: Direct contact information collection
- **Color**: Blue
- **Icon**: 📧
- **Focus**: Complete contact info gathering, inquiry routing
- **Best For**: Contact page, footer sections

### 7. Home Section (`home`)
**Purpose**: General-purpose homepage assistant
- **Color**: Blue
- **Icon**: 🤖
- **Focus**: Navigation help, general questions, interest assessment
- **Best For**: Homepage, default fallback

## Usage Examples

### Example 1: CTA Section with Analytics

```tsx
import { useState } from 'react';
import SectionVoiceAgent from '@/components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '@/config/voice-agent-sections';

export default function CTASection() {
  const config = getSectionConfig('cta');
  const [isConversing, setIsConversing] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Ready to Build Your AI Agent?
        </h2>

        <div className="max-w-2xl mx-auto">
          <SectionVoiceAgent
            section="cta"
            prompt={config.prompt}
            firstMessage={config.firstMessage}
            placement="inline"
            color="blue"
            icon="🤖"
            buttonText="Talk to Our AI Assistant"
            onConversationStart={() => {
              setIsConversing(true);
              // Track in analytics
              gtag('event', 'voice_agent_start', {
                section: 'cta',
                page: window.location.pathname
              });
            }}
            onConversationEnd={(conversationId) => {
              setIsConversing(false);
              // Track completion
              gtag('event', 'voice_agent_complete', {
                section: 'cta',
                conversation_id: conversationId
              });
            }}
            onError={(error) => {
              console.error('Voice agent error:', error);
              // Show user-friendly message
              toast.error('Connection issue. Please try again or contact us directly.');
            }}
          />
        </div>

        {isConversing && (
          <p className="text-center text-white mt-4 text-sm">
            🎙️ Conversation in progress...
          </p>
        )}
      </div>
    </div>
  );
}
```

### Example 2: Floating Assistant on Services Page

```tsx
import SectionVoiceAgent from '@/components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '@/config/voice-agent-sections';

export default function ServicesPage() {
  const config = getSectionConfig('services');

  return (
    <>
      {/* Main page content */}
      <div className="container mx-auto px-4 py-16">
        <h1>Our AI Development Services</h1>

        {/* Service cards, features, etc. */}
        <div className="grid grid-cols-3 gap-8">
          {/* ... service content ... */}
        </div>
      </div>

      {/* Floating voice assistant - always accessible */}
      <div className="fixed bottom-6 right-6 z-50">
        <SectionVoiceAgent
          section="services"
          prompt={config.prompt}
          firstMessage={config.firstMessage}
          placement="floating"
          color="purple"
          icon="🛠️"
        />
      </div>
    </>
  );
}
```

### Example 3: Text-Only Chat for Mobile

```tsx
import { useState, useEffect } from 'react';
import SectionVoiceAgent from '@/components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '@/config/voice-agent-sections';

export default function ContactPage() {
  const config = getSectionConfig('contact');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1>Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact form on left */}
        <div>
          <ContactForm />
        </div>

        {/* Voice/chat agent on right */}
        <div>
          <h2>Or Chat with Our AI</h2>
          <SectionVoiceAgent
            section="contact"
            prompt={config.prompt}
            firstMessage={config.firstMessage}
            placement="inline"
            textOnly={isMobile} // Text-only on mobile
            showTranscript={true} // Always show transcript
            color="blue"
            icon={isMobile ? '💬' : '🎤'}
            buttonText={isMobile ? 'Start Chat' : 'Start Voice Call'}
          />
        </div>
      </div>
    </div>
  );
}
```

### Example 4: Multiple Agents on One Page

```tsx
import SectionVoiceAgent from '@/components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '@/config/voice-agent-sections';

export default function HomePage() {
  return (
    <div>
      {/* Hero section with CTA agent */}
      <section className="hero">
        <h1>Build Custom AI Agents</h1>
        <div className="mt-8">
          <SectionVoiceAgent
            section="cta"
            prompt={getSectionConfig('cta').prompt}
            firstMessage={getSectionConfig('cta').firstMessage}
            placement="inline"
            color="blue"
          />
        </div>
      </section>

      {/* Services overview section */}
      <section className="services mt-20">
        <h2>Our Services</h2>
        {/* Service cards */}
        <div className="mt-8">
          <SectionVoiceAgent
            section="services"
            prompt={getSectionConfig('services').prompt}
            firstMessage={getSectionConfig('services').firstMessage}
            placement="inline"
            color="purple"
          />
        </div>
      </section>

      {/* Case studies section */}
      <section className="case-studies mt-20">
        <h2>Success Stories</h2>
        {/* Case study cards */}
        <div className="mt-8">
          <SectionVoiceAgent
            section="case-studies"
            prompt={getSectionConfig('case-studies').prompt}
            firstMessage={getSectionConfig('case-studies').firstMessage}
            placement="inline"
            color="pink"
          />
        </div>
      </section>
    </div>
  );
}
```

## Creating Custom Sections

To add a new section configuration:

1. **Edit `/src/config/voice-agent-sections.ts`**:

```typescript
export const SECTION_CONFIGS: Record<string, SectionConfig> = {
  // ... existing configs ...

  'my-custom-section': {
    prompt: `You are a specialized assistant for [purpose].

Your Role:
- [What this agent does]
- [Key responsibilities]

Data Collection:
- [What information to collect]
- [When to ask for it]

Conversation Guidelines:
- [Tone and style]
- [Key points to cover]`,

    firstMessage: "Hi! I'm here to help with [purpose]. How can I assist you?",
    buttonText: "Talk to [Section] AI",
    color: 'green',
    icon: '✨',
  },
};
```

2. **Use in your component**:

```tsx
const config = getSectionConfig('my-custom-section');

<SectionVoiceAgent
  section="my-custom-section"
  prompt={config.prompt}
  firstMessage={config.firstMessage}
  color={config.color}
  icon={config.icon}
/>
```

## Features

### 🎯 Section-Specific Behavior
Each section can have completely different AI behavior, conversation style, and data collection focus.

### 🎨 Flexible Styling
Choose from 5 color themes (blue, purple, green, orange, pink) and any emoji icon.

### 📱 Mobile-Friendly
Responsive design that works on all screen sizes. Use floating mode on mobile for minimal intrusion.

### 🌐 Multi-Language Support
Built-in language selector for:
- English (en) 🇬🇧
- Spanish (es) 🇪🇸
- French (fr) 🇫🇷
- Italian (it) 🇮🇹
- Danish (da) 🇩🇰
- Arabic (ar) 🇸🇦

### 💬 Text-Only Mode
Enable `textOnly={true}` for chat-based interactions without voice.

### 📝 Live Transcript
Enable `showTranscript={true}` to display the conversation in real-time.

### 🎵 Waveform Visualization
Animated waveform that responds to voice frequency data (60 bars inline, 20 bars floating).

### ⚡ Error Handling
Comprehensive error handling with user-friendly messages and retry options.

### 🔗 Callback Hooks
Track conversation lifecycle:
- `onConversationStart`: When user starts talking
- `onConversationEnd`: When conversation ends (includes conversation ID)
- `onError`: When any error occurs

## Configuration Requirements

### Environment Variables

Add to your `.env` file:

```bash
# Required
VITE_ELEVENLABS_AGENT_ID=your_agent_id_here

# Optional (for API key if needed)
VITE_ELEVENLABS_API_KEY=your_api_key_here
```

### ElevenLabs Dashboard Setup

**IMPORTANT**: You must enable conversation overrides in your ElevenLabs dashboard:

1. Go to your Agent Settings
2. Click the **Security** tab
3. Enable these overrides:
   - ✅ System Prompt Override
   - ✅ First Message Override
   - ✅ Language Override
   - ✅ Conversation Settings Override (for textOnly mode)

Without these enabled, the custom prompts and settings will be ignored!

## Best Practices

### 1. Prompt Engineering

**DO**:
- Be specific about the agent's role and objectives
- Include clear data collection instructions
- Specify conversation style (concise, friendly, professional)
- Add example conversations
- Include validation criteria for collected data

**DON'T**:
- Make prompts too long (keep under 1000 words)
- Be vague about what information to collect
- Skip email confirmation instructions
- Forget to handle edge cases

### 2. Placement Strategy

**Inline Mode**:
- Use for dedicated conversation sections
- Good for CTAs, contact forms, consultation areas
- Takes full width, more prominent
- Better for desktop users

**Floating Mode**:
- Use for always-accessible help
- Good for pages with lots of content
- Compact, doesn't interfere with layout
- Better for mobile users

### 3. Mobile Optimization

```tsx
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  setIsMobile(window.innerWidth < 768);
}, []);

<SectionVoiceAgent
  placement={isMobile ? 'floating' : 'inline'}
  textOnly={isMobile} // Consider text-only on mobile
  // ... other props
/>
```

### 4. Analytics Integration

```tsx
<SectionVoiceAgent
  section="services"
  prompt={config.prompt}
  onConversationStart={() => {
    // Google Analytics
    gtag('event', 'voice_agent_start', {
      section: 'services',
      page: window.location.pathname,
      timestamp: Date.now()
    });

    // Or Mixpanel
    mixpanel.track('Voice Agent Started', {
      section: 'services',
      placement: 'inline'
    });
  }}
  onConversationEnd={(conversationId) => {
    gtag('event', 'voice_agent_complete', {
      conversation_id: conversationId
    });
  }}
/>
```

### 5. Error Handling

```tsx
<SectionVoiceAgent
  section="contact"
  prompt={config.prompt}
  onError={(error) => {
    // Log to error tracking
    Sentry.captureException(error);

    // Show user-friendly message
    toast.error('Connection issue. Please try again or contact us at hello@p0stman.com');

    // Track error
    gtag('event', 'voice_agent_error', {
      error_message: error.message
    });
  }}
/>
```

## Troubleshooting

### Agent Not Starting

**Issue**: Button clicks but nothing happens

**Solutions**:
1. Check environment variable: `VITE_ELEVENLABS_AGENT_ID` is set
2. Verify agent ID is correct in ElevenLabs dashboard
3. Check browser console for errors
4. Ensure microphone permissions are granted

### Custom Prompts Not Working

**Issue**: Agent uses default behavior instead of custom prompt

**Solutions**:
1. Enable "System Prompt Override" in ElevenLabs dashboard Security tab
2. Verify prompt is being passed to component
3. Check console logs for configuration errors

### Language Switching Not Working

**Issue**: Changing language doesn't update agent

**Solutions**:
1. Enable "Language Override" in ElevenLabs dashboard Security tab
2. Language change requires conversation restart (this is automatic)

### Text-Only Mode Not Working

**Issue**: textOnly prop doesn't enable chat mode

**Solutions**:
1. Enable "Conversation Settings Override" in ElevenLabs dashboard
2. Verify `textOnly={true}` is set
3. Check console for override errors

## Performance Considerations

### Component Re-renders

The component uses `key` prop to force re-mount when configuration changes. This is intentional for clean state management:

```tsx
<SectionVoiceAgent
  key={`${section}-${placement}-${textOnly}`} // Re-mount on config change
  section={section}
  // ... props
/>
```

### Memory Management

The component properly cleans up:
- Animation frames (waveform visualization)
- Event listeners (language selector)
- Conversation sessions (on unmount)

### Mobile Performance

Consider these optimizations for mobile:
- Use `floating` placement (smaller waveform)
- Enable `textOnly` mode (lower resource usage)
- Lazy load the component (don't render until needed)

## Future Enhancements

Planned features:
- [ ] Voice activity detection indicator
- [ ] Conversation history/resume capability
- [ ] Custom waveform styles
- [ ] Typing indicator for text mode
- [ ] Message read receipts
- [ ] File attachment support
- [ ] Screen reader accessibility improvements

## Support

For issues, questions, or feature requests:
- Check the demo page: `/voice-agent-demo`
- Review the documentation: `docs/ELEVENLABS_API_RESEARCH_2025.md`
- Contact the team: hello@p0stman.com

---

**Built with**: React, TypeScript, Framer Motion, ElevenLabs React SDK
**Version**: 1.0.0
**Last Updated**: January 2025
