# Voice Agent Prompts Configuration

This directory contains section-specific voice agent prompt configurations for P0STMAN's ElevenLabs voice agent integration.

## Overview

The voice agent prompts are designed to provide context-aware, intelligent conversations that match the specific section of the website where the user interacts with the agent. Each section has tailored prompts that:

- Introduce the agent naturally
- Define section-specific expertise
- Guide email collection organically
- Match P0STMAN's brand voice (professional, technical, friendly)
- Demonstrate AI capabilities through conversation quality

## Files

- **`voiceAgentPrompts.ts`** - Main configuration file with all section prompts
- **`voiceAgentPrompts.example.ts`** - Usage examples and integration patterns
- **`README.md`** - This documentation file

## Available Sections

### 1. CTA (Call to Action)
**Purpose:** Primary conversion point - guide visitors to take the next step

**Expertise:**
- General offerings overview
- Pricing and timelines
- Next steps and follow-up
- Email collection

**First Message:** "Hey! What brings you to P0STMAN today? Got a project in mind, or just exploring what we can build together?"

### 2. Services
**Purpose:** Deep dive into P0STMAN's service offerings

**Expertise:**
- AI agent development (voice, chat, code, automation)
- MVP development
- Digital products (web, mobile apps)
- Pricing and timelines
- Technical details

**First Message:** "Hey! I can walk you through what we build here at P0STMAN. What kind of project are you thinking about - AI agents, an MVP, a full digital product, or something else?"

### 3. Process
**Purpose:** Explain the AI-powered development workflow

**Expertise:**
- Development workflow stages
- AI tools and methodology
- Quality assurance
- Timeline breakdowns
- Project management approach

**First Message:** "Hey! Curious how we build so fast? Let me walk you through our AI-powered process. What stage are you at with your project - just an idea, or do you have requirements ready?"

### 4. Contact
**Purpose:** Facilitate connection with the P0STMAN team

**Expertise:**
- Contact information collection
- Meeting scheduling
- Response time expectations
- Qualification questions

**First Message:** "Hey! Ready to connect with the P0STMAN team? I can help set that up. What kind of project are you looking to discuss?"

### 5. Homepage (General)
**Purpose:** Versatile assistant for any visitor questions

**Expertise:**
- All services overview
- Company information
- Pricing and timelines
- General qualification
- Broad Q&A capability

**First Message:** "Hey! Welcome to P0STMAN. I'm the AI assistant here - kind of meta, right? What brings you by today?"

## Usage

### Basic Usage

```typescript
import { getVoiceAgentConfig } from './config/voiceAgentPrompts';

// Get configuration for a specific section
const ctaConfig = getVoiceAgentConfig('cta');

console.log(ctaConfig.prompt); // Full prompt text
console.log(ctaConfig.firstMessage); // Opening message
console.log(ctaConfig.expertise); // Array of expertise areas
```

### Integration with ElevenLabs

```typescript
import { Conversation } from '@elevenlabs/client';
import { getVoiceAgentConfig } from './config/voiceAgentPrompts';

const config = getVoiceAgentConfig('services');

const conversation = await Conversation.startSession({
  agentId: YOUR_AGENT_ID,
  apiKey: YOUR_API_KEY,
  overrides: {
    agent: {
      prompt: {
        prompt: config.prompt,
        llm: "gpt-4o",
      },
      firstMessage: config.firstMessage,
      language: "en",
    },
  },
});
```

### Helper Functions

```typescript
import {
  getVoiceAgentConfig,
  getAllVoiceAgentConfigs,
  hasSectionConfig,
  getSectionNames,
} from './config/voiceAgentPrompts';

// Get specific section config (falls back to homepage if not found)
const config = getVoiceAgentConfig('cta');

// Get all configurations
const allConfigs = getAllVoiceAgentConfigs();

// Check if section has config
if (hasSectionConfig('services')) {
  // Section exists
}

// Get section names for UI
const sections = getSectionNames();
// Returns: [{ id: 'cta', name: 'Call to Action' }, ...]
```

### Named Exports

For convenience, individual configs are available as named exports:

```typescript
import {
  ctaConfig,
  servicesConfig,
  processConfig,
  contactConfig,
  homepageConfig,
} from './config/voiceAgentPrompts';
```

## Brand Voice Guidelines

All prompts follow P0STMAN's brand voice:

- **Professional yet approachable** - Technical expertise without jargon overload
- **Direct and honest** - No corporate speak, straight talk about capabilities
- **Results-focused** - Tie conversations back to business outcomes
- **AI-forward** - Demonstrate AI capabilities through conversation quality
- **Conversational** - "Helpful engineer at a bar" not "corporate sales bot"

## Email Collection Strategy

Each prompt includes natural email collection approaches:

- **Non-pushy** - Only when conversation warrants follow-up
- **Value-focused** - Frame email collection as enabling next steps
- **Natural timing** - After establishing interest and understanding needs
- **Clear purpose** - Explain what happens after email is provided

Example approaches by section:
- **CTA:** "I can have Paul reach out with a custom proposal. What's the best email to send that to?"
- **Services:** "Want me to have Paul send over a detailed proposal? What's your email?"
- **Process:** "Want me to map out a specific timeline for your project? If you share your email, Paul can send over a detailed project plan."
- **Contact:** "To get the ball rolling, what's the best email for Paul to reach you at?"

## Prompt Structure

Each prompt follows this structure:

1. **Identity & Role** - Who the agent is and what section they're helping with
2. **Context & Offerings** - Relevant P0STMAN information for this section
3. **Conversation Style** - Tone, approach, and guidelines
4. **Email Collection** - When and how to collect contact info
5. **Guardrails** - What not to do, boundaries, fallbacks

## Customization

To add a new section:

1. Add entry to `voiceAgentPrompts` object in `voiceAgentPrompts.ts`
2. Follow the `VoiceAgentConfig` interface structure
3. Write prompt following brand voice guidelines (~200-300 words)
4. Create natural firstMessage
5. Define expertise areas array
6. Test conversation flow

## Key Metrics & Data Points

Prompts include these verified statistics:
- **40% faster** than traditional agencies (12+ project baseline)
- **20+ years** of development experience
- **1000+ products** shipped
- **Pricing ranges:**
  - AI agents: $5k-10k pilots, $25k-50k+ production
  - MVPs: $5k-25k
  - Digital products: $10k-50k+
  - Strategic services: Custom pricing

## Examples

See `voiceAgentPrompts.example.ts` for complete integration examples including:
- Starting conversations with section-specific prompts
- React component integration
- Dynamic agent button placement
- Context-aware homepage implementation
- Analytics and logging patterns

## Notes

- All prompts are ~200-300 words for optimal LLM processing
- Fallback to homepage config for unknown sections
- TypeScript interfaces ensure type safety
- Prompts designed for GPT-4 class models (GPT-4o, Claude, etc.)
- Multi-language support can be added via ElevenLabs language overrides

## Maintenance

When updating prompts:
- Keep brand voice consistent across all sections
- Verify pricing and statistics are current
- Test conversation flows after changes
- Update this README if adding/removing sections
- Consider A/B testing prompt variations for optimization
