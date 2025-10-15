# Voice Agent Quickstart - Mamori

> Get the voice agent running in 5 minutes

---

## 🚀 Quick Setup

### 1. Update Config with Your Credentials

Edit **`js/config.js`**:

```javascript
const ELEVENLABS_CONFIG = {
    agentId: 'agent_YOUR_AGENT_ID',
    apiKey: 'sk_YOUR_API_KEY'
};
```

Get credentials from: https://elevenlabs.io/app/conversational-ai

---

### 2. Add to Your HTML

#### Option A: Copy the Example File

```bash
# Copy voice-agent-example.html to index.html
# Or view it directly: http://localhost:8000/voice-agent-example.html
```

#### Option B: Manual Integration

Add to your existing `index.html` (or any page):

**In `<head>`:**
```html
<!-- ElevenLabs SDK -->
<script src="https://cdn.jsdelivr.net/npm/@elevenlabs/client@0.7.1/dist/elevenlabs.umd.js"></script>

<!-- Voice Agent CSS -->
<link rel="stylesheet" href="css/voice-agent.css">
```

**In `<body>` (after hero section):**
```html
<!-- Voice Agent Panel -->
<section class="voice-agent-section">
    <div class="container">
        <div class="voice-agent-card">
            <div class="voice-agent-header">
                <div class="voice-agent-branding">
                    <div class="voice-orb-mini">
                        <div class="orb-core"></div>
                    </div>
                    <div class="voice-agent-title-group">
                        <h3 class="voice-agent-title">Talk to Mamori AI</h3>
                        <p class="voice-agent-subtitle">Ask me anything about health & wellness</p>
                    </div>
                </div>
                <button class="voice-toggle-btn" id="voiceToggleBtn">
                    <i data-lucide="mic"></i>
                    <span>Start Conversation</span>
                </button>
            </div>

            <div class="voice-agent-interface" id="voiceAgentInterface" style="display: none;">
                <div class="voice-language-selector">
                    <i data-lucide="globe"></i>
                    <select id="voiceLanguageSelect" class="language-select">
                        <option value="en">🇬🇧 English</option>
                        <option value="es">🇪🇸 Español</option>
                        <option value="fr">🇫🇷 Français</option>
                        <option value="it">🇮🇹 Italiano</option>
                        <option value="da">🇩🇰 Dansk</option>
                        <option value="ar">🇸🇦 العربية</option>
                    </select>
                </div>

                <div class="voice-waveform" id="voiceWaveform"></div>

                <div class="voice-status" id="voiceStatus">
                    <div class="status-indicator status-indicator--idle"></div>
                    <p class="status-text">Click "Start Conversation" to begin talking</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Before closing `</body>`:**
```html
<!-- Voice Agent Scripts -->
<script src="js/config.js"></script>
<script src="js/voice-agent.js"></script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof MamoriVoiceAgent !== 'undefined') {
            window.mamoriVoice = new MamoriVoiceAgent({
                agentId: ELEVENLABS_CONFIG.agentId,
                apiKey: ELEVENLABS_CONFIG.apiKey,
                containerId: 'voiceAgentInterface',
                toggleBtnId: 'voiceToggleBtn',
                waveformId: 'voiceWaveform',
                statusId: 'voiceStatus',
                languageSelectId: 'voiceLanguageSelect'
            });
        }

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });
</script>
```

---

### 3. Test Locally

```bash
cd /Users/paulgosnell/Sites/p0stman/public/mamori

# Start local server
python3 -m http.server 8000
# OR
npx serve .
```

Visit: `http://localhost:8000/voice-agent-example.html`

---

## ✅ Quick Test

1. Open page in browser
2. Click **"Start Conversation"**
3. Allow microphone permissions
4. Say: *"What is Mamori?"*
5. Wait for AI response

If it works, you're done! 🎉

---

## 📁 Files Created

```
mamori/
├── js/
│   ├── voice-agent.js          ✅ Main voice agent logic
│   └── config.js                ✅ API credentials
├── css/
│   └── voice-agent.css          ✅ Voice agent styles
├── voice-agent-example.html     ✅ Working example
├── VOICE_AGENT_IMPLEMENTATION.md  📖 Full guide
└── VOICE_AGENT_QUICKSTART.md     📖 This file
```

---

## 🐛 Troubleshooting

### "ElevenLabs SDK not loaded"
**Fix:** Add CDN script in `<head>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@elevenlabs/client@0.7.1/dist/elevenlabs.umd.js"></script>
```

### "Failed to connect"
**Fix:** Check `js/config.js` has correct credentials:
```javascript
agentId: 'agent_...' // Must start with "agent_"
apiKey: 'sk_...'     // Must start with "sk_"
```

### "Microphone not working"
**Fix:** Ensure you're using HTTPS (or localhost)
- Microphone requires HTTPS in production
- HTTP works on `localhost` only

### Waveform not animating
**Fix:** This is normal - waveform uses frequency data that may not always be available. The voice agent will still work perfectly.

---

## 🎨 Customization

### Change Colors
Edit `css/voice-agent.css`:

```css
/* Line 48: Primary button color */
background: linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_COLOR_DARK 100%);

/* Line 193: Waveform bars */
background: linear-gradient(180deg, #YOUR_COLOR 0%, #YOUR_COLOR_DARK 100%);
```

### Change Agent Prompt
Edit in ElevenLabs dashboard:
1. Go to https://elevenlabs.io/app/conversational-ai
2. Select your agent
3. Edit system prompt
4. Save changes

---

## 📚 Learn More

- **Full Implementation Guide:** `VOICE_AGENT_IMPLEMENTATION.md`
- **ElevenLabs Docs:** https://elevenlabs.io/docs
- **Mamori Project:** `README.md`

---

## 🎯 Next Steps

1. [ ] Test on mobile devices
2. [ ] Customize colors to match brand
3. [ ] Update agent prompt in ElevenLabs dashboard
4. [ ] Add to production with API key proxy
5. [ ] Set up analytics tracking

---

**Ready to integrate into real index.html?** Just copy the HTML snippets above!
