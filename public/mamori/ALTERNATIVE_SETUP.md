# Alternative Setup - ElevenLabs SDK Issue

The ElevenLabs `@elevenlabs/client` package doesn't have a browser-compatible CDN build. Here are your options:

---

## 🎯 Option 1: Use NPM + Build Tool (Recommended)

This is what the React version uses and it works perfectly.

### Setup

```bash
cd /Users/paulgosnell/Sites/p0stman/public/mamori

# Initialize package.json
npm init -y

# Install dependencies
npm install @elevenlabs/client

# Install bundler
npm install --save-dev esbuild
```

### Create Build Script

Add to `package.json`:

```json
{
  "scripts": {
    "build": "esbuild js/voice-agent-bundled.js --bundle --outfile=js/voice-agent.bundle.js"
  }
}
```

### Build

```bash
npm run build
```

### Use in HTML

```html
<!-- Instead of CDN, use bundled version -->
<script src="js/voice-agent.bundle.js"></script>
```

---

## 🎯 Option 2: Use ElevenLabs React Package (works with CDN)

The `@elevenlabs/react` hook actually works standalone in browser.

### Update HTML

```html
<!-- Use React hook version (works via CDN) -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@elevenlabs/react@latest/dist/index.umd.js"></script>
```

---

## 🎯 Option 3: Use the React Version in P0STMAN

Since you already have the React version working in the main P0STMAN site, you could:

1. **Embed it as an iframe:**
```html
<!-- In Mamori HTML -->
<iframe src="/voice-agent.html" style="width: 100%; height: 400px; border: none;"></iframe>
```

2. **Create a standalone React build:**
```bash
# Build the React voice agent
npm run build

# Copy built files to Mamori
cp dist/voice-agent.js public/mamori/js/
```

---

## 🎯 Option 4: Direct API Integration (No SDK)

Use ElevenLabs WebSocket API directly. This is more complex but has no dependencies.

### Example (simplified):

```javascript
class MamoriVoiceAgentAPI {
    constructor(agentId, apiKey) {
        this.agentId = agentId;
        this.apiKey = apiKey;
    }

    async start() {
        // Connect to ElevenLabs WebSocket
        const ws = new WebSocket(
            `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${this.agentId}`
        );

        ws.onopen = () => {
            // Authenticate
            ws.send(JSON.stringify({
                type: 'auth',
                api_key: this.apiKey
            }));
        };

        // Handle audio streaming...
    }
}
```

---

## 💡 Recommended Solution for Mamori

Since Mamori is a static site, I recommend **Option 3** (use the React version):

### Quick Implementation:

1. **Create a standalone voice agent page in P0STMAN React:**

```bash
# In your React app
# Create src/pages/VoiceAgent.tsx (standalone page)
```

2. **Build it:**
```bash
npm run build
```

3. **Embed in Mamori:**
```html
<iframe
    src="https://your-domain.com/voice-agent"
    style="width: 100%; height: 400px; border: none; border-radius: 24px;"
    allow="microphone">
</iframe>
```

This way you get all the React voice agent functionality working in Mamori without any SDK issues!

---

## 🔧 Quick Fix for Testing

For now, to test the voice agent, use the React version at:
`/Users/paulgosnell/Sites/p0stman/src/components/voice-agent/`

It's already working there with the InlineVoiceAgent component.

---

Want me to:
1. Set up the npm bundling for Mamori?
2. Create an iframe integration?
3. Build a custom WebSocket implementation?

