# Voice Agent Troubleshooting Guide

## 🔴 "Could not authorize the conversation" Error

### Error Details
```
CloseEvent {
  code: 3000,
  reason: 'Could not authorize the conversation.'
}
```

This is the most common error when setting up the ElevenLabs voice agent. Here's how to fix it:

---

## ✅ Solution Checklist

### 1. Check Environment Variables

Make sure your `.env` file exists and has the correct keys:

```bash
# .env file
VITE_ELEVENLABS_AGENT_ID=agent_8701k6q7xc5af4f8dkjj8pqda592
VITE_ELEVENLABS_API_KEY=sk_0fcb2e21a1821c4a6f4ee87747b9ff1e03ae72933ee74d20
```

**Verify:**
```bash
# Check if .env exists
cat .env | grep ELEVENLABS

# Restart dev server to pick up .env changes
npm run dev
```

### 2. Enable Overrides in ElevenLabs Dashboard

⚠️ **CRITICAL STEP** - This is required for language selection to work:

1. Go to [ElevenLabs Dashboard](https://elevenlabs.io/app/conversational-ai)
2. Select your agent
3. Click **Settings** → **Security** tab
4. Enable these overrides:
   - ✅ **Language overrides** (for multi-language support)
   - ✅ **System prompt overrides** (optional, if customizing prompts)
   - ✅ **First message overrides** (optional, if customizing greetings)

**Without enabling these, you'll get the authorization error!**

### 3. Verify API Key Permissions

Make sure your API key:
- Is from the correct ElevenLabs account
- Has access to the agent ID you're using
- Hasn't expired or been revoked
- Has "Conversational AI" permissions enabled

**Test your credentials:**
```bash
# Test API key (replace with your actual key)
curl -X GET "https://api.elevenlabs.io/v1/user" \
  -H "xi-api-key: YOUR_API_KEY_HERE"
```

### 4. Check Agent ID

Verify the agent ID is correct:
1. Go to [ElevenLabs Dashboard](https://elevenlabs.io/app/conversational-ai)
2. Click on your agent
3. Copy the **Agent ID** from the URL or settings
4. Update your `.env` file

### 5. Restart Development Server

After any `.env` changes:
```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

**Important:** Vite only reads `.env` on startup, not during hot reload!

---

## 🔍 Debugging Steps

### Check Browser Console

Open DevTools (F12) and look for:

**Good signs:**
```
Connected with language: en
```

**Bad signs:**
```
CloseEvent { code: 3000, reason: 'Could not authorize...' }
Conversation error: [error details]
```

### Verify Props Are Passed

Check that both `agentId` and `apiKey` are passed:

```typescript
// ✅ Correct - Both props passed
<InlineVoiceAgent
  isActive={true}
  onClose={() => {}}
  agentId={import.meta.env.VITE_ELEVENLABS_AGENT_ID}
  apiKey={import.meta.env.VITE_ELEVENLABS_API_KEY}
/>

// ❌ Wrong - Missing apiKey
<InlineVoiceAgent
  isActive={true}
  onClose={() => {}}
  agentId={import.meta.env.VITE_ELEVENLABS_AGENT_ID}
/>
```

### Check Network Tab

1. Open DevTools → Network tab
2. Filter by "WS" (WebSocket)
3. Look for connections to ElevenLabs
4. Check the connection status and any error messages

---

## 🚨 Common Mistakes

### Mistake 1: Forgetting to Enable Overrides
**Error:** Authorization fails even with valid credentials
**Fix:** Enable overrides in ElevenLabs Dashboard → Security tab

### Mistake 2: Not Restarting Dev Server
**Error:** Changes to `.env` don't take effect
**Fix:** Stop (Ctrl+C) and restart `npm run dev`

### Mistake 3: Using Wrong Environment Variable Names
**Error:** `undefined` values for agentId or apiKey
**Fix:** Use exact names: `VITE_ELEVENLABS_AGENT_ID` and `VITE_ELEVENLABS_API_KEY`

### Mistake 4: API Key Without Prefix
**Error:** API key doesn't work
**Fix:** ElevenLabs API keys should start with `sk_`

### Mistake 5: Testing with Hardcoded Credentials
**Error:** Works locally but fails in production
**Fix:** Always use environment variables

---

## 🔐 Security Best Practices

### DO ✅
- Store credentials in `.env` file
- Add `.env` to `.gitignore`
- Use `.env.example` for team reference
- Rotate API keys regularly
- Use different keys for dev/prod

### DON'T ❌
- Commit `.env` to git
- Hardcode API keys in code
- Share API keys publicly
- Use production keys in development
- Expose API keys in client-side code (use backend proxy for production)

---

## 🧪 Test Configuration

Create a test component to verify setup:

```typescript
// TestVoiceAgent.tsx
import { useEffect } from 'react';

export default function TestVoiceAgent() {
  useEffect(() => {
    console.log('Agent ID:', import.meta.env.VITE_ELEVENLABS_AGENT_ID);
    console.log('API Key (first 10 chars):',
      import.meta.env.VITE_ELEVENLABS_API_KEY?.substring(0, 10) + '...'
    );

    // Check if values are defined
    if (!import.meta.env.VITE_ELEVENLABS_AGENT_ID) {
      console.error('❌ VITE_ELEVENLABS_AGENT_ID is not defined!');
    }
    if (!import.meta.env.VITE_ELEVENLABS_API_KEY) {
      console.error('❌ VITE_ELEVENLABS_API_KEY is not defined!');
    }
  }, []);

  return <div>Check console for configuration status</div>;
}
```

---

## 📞 Still Having Issues?

### ElevenLabs Support
- [ElevenLabs Documentation](https://elevenlabs.io/docs)
- [Support Portal](https://help.elevenlabs.io/)
- [Discord Community](https://discord.gg/elevenlabs)

### Check Agent Status
1. Go to ElevenLabs Dashboard
2. Check if agent is **Active**
3. Verify agent has a voice assigned
4. Test agent directly in dashboard first

### Billing/Subscription
- Verify your ElevenLabs plan includes Conversational AI
- Check if you have available API credits
- Ensure subscription is active

---

## 🎉 Success Indicators

When everything works correctly, you should see:

**Console logs:**
```
Connected with language: en
```

**Visual indicators:**
- Language selector appears (top-left)
- Voice orb or waveform is visible
- Status shows "Listening..." or "Speaking..."
- No red error messages

**Interaction:**
- Clicking language selector shows 6 languages
- Clicking orb/waveform starts conversation
- Speaking is detected and processed
- Agent responds in selected language

---

## 📝 Quick Fix Summary

```bash
# 1. Check .env file exists with correct values
cat .env | grep ELEVENLABS

# 2. Enable overrides in ElevenLabs Dashboard
# → Settings → Security → Enable "Language overrides"

# 3. Restart dev server
npm run dev

# 4. Test in browser
# → Open DevTools console
# → Click voice agent
# → Check for "Connected with language: en" message
```

If all else fails, reach out with:
- Browser console errors
- Network tab screenshots
- Your ElevenLabs plan type
- Whether overrides are enabled
