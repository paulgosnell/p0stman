# ElevenLabs Voice Agent Overlay

A sleek, futuristic voice AI agent overlay for the P0STMAN homepage with animated orb visualization.

## Features

- **Animated Orb Visualization**: Canvas-based pulsing sphere with particle effects
- **State-aware Animations**:
  - Blue pulsing when idle/listening
  - Orange glow when AI is speaking
  - Particle trails during active conversation
- **Framer Motion Overlay**: Smooth entrance/exit animations
- **Keyboard Controls**: Press ESC to close
- **Mobile Responsive**: Works seamlessly on all devices
- **Auto-trigger**: Appears 2.5 seconds after homepage loads

## Color Scheme

- **Primary (Electric Blue)**: `#0066FF` - Idle/Listening state
- **Speaking (Orange)**: `#FF6B35` - When AI is speaking
- **White**: Accents and text
- **Dark Backdrop**: `rgba(0, 0, 0, 0.85)` - Semi-transparent overlay

## Components

### VoiceOrb.tsx
Canvas-based animated orb with:
- Breathing/pulsing animation
- Rotating particles
- Gradient glow effects
- Speaking state particle trails
- Smooth color transitions

### VoiceAgentOverlay.tsx
Main overlay component with:
- ElevenLabs SDK integration
- Conversation state management
- Error handling and retry logic
- Connection status indicators
- Framer Motion animations

## Configuration

Set these environment variables in `.env`:

```bash
VITE_ELEVENLABS_AGENT_ID=your_agent_id
VITE_ELEVENLABS_API_KEY=your_api_key
```

## Usage

```tsx
import VoiceAgentOverlay from './components/voice-agent/VoiceAgentOverlay';

function HomePage() {
  const [showVoiceAgent, setShowVoiceAgent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVoiceAgent(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Your content */}
      <VoiceAgentOverlay
        isOpen={showVoiceAgent}
        onClose={() => setShowVoiceAgent(false)}
        agentId={import.meta.env.VITE_ELEVENLABS_AGENT_ID}
        apiKey={import.meta.env.VITE_ELEVENLABS_API_KEY}
      />
    </>
  );
}
```

## Design Philosophy

**Tesla meets GitHub**: Clean, minimal, tech-forward aesthetic without being gimmicky.

- Professional dark theme
- Subtle animations that enhance UX
- Clear visual feedback for all states
- Accessible and intuitive controls

## ElevenLabs Integration

Uses the official `@elevenlabs/client` SDK for:
- Real-time voice conversation
- Automatic mode detection (listening/speaking)
- Connection lifecycle management
- Error handling and reconnection

## Browser Compatibility

Requires modern browsers with:
- Canvas API support
- Web Audio API
- ES6+ JavaScript
- WebRTC (for ElevenLabs conversation)

## Performance

- Optimized canvas rendering with requestAnimationFrame
- Cleanup on unmount to prevent memory leaks
- Lightweight particle system (30 particles)
- Efficient state management

## Accessibility

- Keyboard navigation (ESC to close)
- Clear visual state indicators
- ARIA labels on interactive elements
- Focus management
