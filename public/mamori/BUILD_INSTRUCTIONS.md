# Voice Agent Build Instructions

## ✅ Setup Complete!

The voice agent is now fully set up with Option 2 (NPM + Build).

---

## 🎨 UI - Exactly What You Designed

The UI is the same beautiful Nordic design:
- ✅ Glass morphism card
- ✅ Animated orb
- ✅ Live waveform (60 bars)
- ✅ Language selector (6 languages)
- ✅ Status indicators
- ✅ Mobile responsive

**No changes to the look & feel!**

---

## 📦 What Changed

### Before (CDN - didn't work):
```html
<script src="https://cdn.../elevenlabs.js"></script> ❌
<script src="js/voice-agent.js"></script>
```

### After (Bundled - works perfectly):
```html
<script src="js/voice-agent.bundle.js"></script> ✅
```

The bundle includes:
- ElevenLabs SDK (966KB)
- Your voice-agent code

---

## 🚀 How to Use

### 1. View the Working Voice Agent

```bash
# Server is already running
# Visit: http://localhost:8000/voice-agent.html
```

### 2. Test It

1. Click "Start Conversation"
2. Allow microphone
3. Say: *"What supplements help with sleep?"*
4. Listen to AI response

### 3. Integrate into Your Site

Add a link from `index.html`:

```html
<a href="voice-agent.html" class="btn btn--primary">
    Talk to Mamori AI
</a>
```

Or embed the voice panel directly (copy HTML from `voice-agent.html` lines 52-86).

---

## 🔧 Development Commands

```bash
# Build the bundle (already done)
npm run build

# Build and watch for changes
npm run build:watch

# Start local server
npm run serve
```

---

## 📁 Files Created

```
mamori/
├── js/
│   ├── voice-agent-bundled.js    ✅ Source (with imports)
│   └── voice-agent.bundle.js     ✅ Built bundle (966KB)
├── package.json                   ✅ NPM config
├── node_modules/                  ✅ Dependencies
└── voice-agent.html               ✅ Working page
```

---

## 🎯 Next Steps

1. **Test:** http://localhost:8000/voice-agent.html
2. **Link from homepage** or embed panel
3. **Customize** agent prompt in ElevenLabs dashboard
4. **Deploy** with build step

---

## 💡 How the Build Works

```bash
npm run build
```

This runs esbuild which:
1. Reads `js/voice-agent-bundled.js`
2. Finds `import { Conversation } from '@elevenlabs/client'`
3. Bundles ElevenLabs SDK + your code
4. Outputs `js/voice-agent.bundle.js`
5. Works in browser! ✅

---

## 🔄 Making Changes

If you edit the voice agent:

1. Update `js/voice-agent-bundled.js`
2. Run `npm run build`
3. Refresh browser

Or use watch mode:
```bash
npm run build:watch
```

---

**The UI looks exactly the same - just now it works!** 🎉
