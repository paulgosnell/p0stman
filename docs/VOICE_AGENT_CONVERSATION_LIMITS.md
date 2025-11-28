# Voice Agent Conversation Limits

## Overview

The voice agent now supports conversation limits to prevent excessively long conversations. You can limit by:

1. **Duration** - Maximum time in seconds (e.g., 3 minutes = 180 seconds)
2. **Turns** - Maximum number of back-and-forth exchanges (e.g., 8 turns)

When a limit is reached, the conversation automatically ends gracefully.

---

## How to Use

### Basic Usage

Add these props to any `SectionVoiceAgent` component:

```tsx
<SectionVoiceAgent
  section="cta"
  prompt={config.prompt}
  firstMessage={config.firstMessage}
  maxDurationSeconds={180}  // 3 minutes
  maxTurns={8}              // 8 conversation exchanges
  // ... other props
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `maxDurationSeconds` | number | 300 (5 min) | Maximum conversation duration in seconds |
| `maxTurns` | number | 10 | Maximum number of conversation turns |

---

## How It Works

### Duration Limit
- Timer starts when conversation connects
- Runs in the background
- Auto-ends conversation when time expires
- Resets when conversation ends

### Turn Limit
- Counts each time the agent responds
- Auto-ends when turn count reaches limit
- Resets when conversation ends

### Graceful Shutdown
When limits are reached:
1. Conversation automatically ends
2. Counters reset to 0
3. Timer clears
4. User can start a new conversation

---

## Recommended Limits by Use Case

### Quick Lead Qualification (Contact Forms)
```tsx
maxDurationSeconds={180}  // 3 minutes
maxTurns={8}              // 8 exchanges
```
Good for: Initial contact, basic questions, lead capture

### Product Demo/Consultation
```tsx
maxDurationSeconds={600}  // 10 minutes
maxTurns={20}             // 20 exchanges
```
Good for: Detailed product discussions, technical questions

### Customer Support
```tsx
maxDurationSeconds={900}  // 15 minutes
maxTurns={30}             // 30 exchanges
```
Good for: Troubleshooting, detailed support conversations

### Quick FAQ
```tsx
maxDurationSeconds={120}  // 2 minutes
maxTurns={5}              // 5 exchanges
```
Good for: Simple questions, pricing inquiries

---

## Current Configuration

### Contact Page (`/contact`)
- **Duration**: 180 seconds (3 minutes)
- **Turns**: 8 exchanges
- **Purpose**: Quick lead qualification

### Other Pages
Default values (if not specified):
- **Duration**: 300 seconds (5 minutes)
- **Turns**: 10 exchanges

---

## Customizing Limits

### Global Defaults
Edit the default values in `SectionVoiceAgent.tsx`:

```tsx
maxDurationSeconds = 300,  // Change default duration
maxTurns = 10,            // Change default turns
```

### Per-Instance
Override defaults when using the component:

```tsx
// Short conversation
<SectionVoiceAgent
  maxDurationSeconds={60}
  maxTurns={3}
/>

// Long conversation
<SectionVoiceAgent
  maxDurationSeconds={1800}
  maxTurns={50}
/>

// Duration only (unlimited turns)
<SectionVoiceAgent
  maxDurationSeconds={300}
  maxTurns={999}
/>

// Turns only (unlimited duration)
<SectionVoiceAgent
  maxDurationSeconds={9999}
  maxTurns={10}
/>
```

---

## Monitoring & Debugging

The component logs when limits are reached:

```javascript
console.log(`Conversation limit reached: ${turnCount} turns`)
console.log(`Conversation duration limit reached: ${maxDurationSeconds}s`)
```

Check browser console to see when/why conversations end.

---

## Testing Limits

### Test Duration Limit
```tsx
<SectionVoiceAgent
  maxDurationSeconds={30}  // 30 seconds for quick testing
  maxTurns={999}
/>
```

### Test Turn Limit
```tsx
<SectionVoiceAgent
  maxDurationSeconds={9999}
  maxTurns={3}  // Only 3 exchanges for quick testing
/>
```

---

## Future Enhancements

Potential additions:
- [ ] Warning message before conversation ends (e.g., "1 minute remaining")
- [ ] Option to extend conversation
- [ ] Visual timer display
- [ ] Analytics tracking for conversation lengths
- [ ] Custom end messages based on why conversation ended

---

## Technical Details

### How Turns Are Counted
- Each agent response = 1 turn
- Triggered by `conversation.isSpeaking` state change
- Does not count user messages separately

### How Duration Is Tracked
- Starts when `conversation.status === 'connected'`
- Uses `setTimeout` with cleanup on unmount
- Cleared when conversation ends manually or automatically

### State Management
```typescript
const [turnCount, setTurnCount] = useState(0);
const [conversationStartTime, setConversationStartTime] = useState<number | null>(null);
const durationTimerRef = useRef<NodeJS.Timeout>();
```

All state resets when conversation ends.

---

**Status**: ✅ Implemented and Working
**Added**: 2025-11-12
**Build Status**: ✅ Success
**Ready to Deploy**: Yes
