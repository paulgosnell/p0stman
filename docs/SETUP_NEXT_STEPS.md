# 🚀 Voice Agent Setup - Next Steps Only

**Status:** All code deployed ✅ | Database ready ✅ | Webhook endpoint live ✅

---

## What's Done Automatically ✅

- ✅ Database schema deployed to Supabase (table: `elevenlabs_conversations`)
- ✅ Webhook endpoint live at `/api/webhooks/elevenlabs`
- ✅ Voice agent component ready in all page sections
- ✅ EmailJS follow-up automation configured
- ✅ Slack notifications for hot leads ready

---

## 3 Quick Steps to Go Live

### Step 1: Get Supabase Service Key (1 min)

**Go here:** https://aupnsxzkwispcjniacqo.supabase.co/project/aupnsxzkwispcjniacqo/settings/api

**Copy this:** The long key in "Project API Keys" section labeled `service_role` (the longer one ~200+ chars)

**Paste here:**
```bash
# In .env.local
SUPABASE_SERVICE_KEY=<paste_here>

# In Vercel dashboard:
# Settings → Environment Variables → Add Variable
# Name: SUPABASE_SERVICE_KEY
# Value: <paste_here>
```

### Step 2: Get ElevenLabs Webhook Secret (1 min)

**Go here:** https://elevenlabs.io/app/conversational-ai

**Click:** Your agent → Settings → Webhooks

**Copy or Generate:** The webhook secret (you can generate a new one if needed)

**Paste here:**
```bash
# In .env.local
ELEVENLABS_WEBHOOK_SECRET=<paste_here>

# In Vercel dashboard:
# Settings → Environment Variables → Add Variable
# Name: ELEVENLABS_WEBHOOK_SECRET
# Value: <paste_here>
```

### Step 3: Redeploy to Vercel (2 min)

1. Go to: https://vercel.com/paulgosnell/p0stman/settings/environment-variables
2. Verify both variables added with Environment: ✓ Production ✓ Preview ✓ Development
3. Click **Deployments** tab
4. Click **"Redeploy"** on latest deployment

---

## ElevenLabs Dashboard Config (5 min)

These are one-time dashboard settings:

### 1. Enable Overrides
- Agent Settings → Security tab
- Toggle ON: "Allow conversation overrides"
- Save

### 2. Add Data Collection Fields
- Agent Settings → Analysis tab
- Click "Add Field" for each:

| Field | Type | Description |
|-------|------|-------------|
| `user_email` | String | Extract the user's email address in format user@domain.com |
| `user_name` | String | Extract user's full name (first and last if provided) |
| `company_name` | String | Extract company or organization name if mentioned |
| `phone_number` | String | Extract phone number if provided in any format |
| `interest_level` | String | Assess interest: 'high', 'medium', 'low', 'none' |
| `budget_range` | String | Budget range if discussed: 'under_15k', '15k_to_50k', 'over_75k' |
| `timeline` | String | When needed: 'urgent', 'normal', 'flexible', 'not_discussed' |
| `specific_interest` | String | What solution: 'voice agent', 'chatbot', 'custom AI', 'mobile app', etc |
| `page_section` | String | Which page section: 'home', 'services', 'pricing', 'case-studies', 'contact' |

### 3. Set Webhook URL
- Agent Settings → Webhooks tab
- Click "Add Webhook"
- URL: `https://p0stman.com/api/webhooks/elevenlabs`
- Event Type: `post_call_transcription`
- HMAC: Enable
- Secret: (same webhook secret from Step 2 above)
- Save
- Click "Test Webhook" - should see ✅

---

## Test It (2 min)

1. Go to https://p0stman.com
2. Scroll to "Ready to Ship Fast?" section
3. Click "Prefer to talk? Try our AI assistant"
4. Have a conversation - mention your email
5. End the conversation
6. Check Supabase:
   - Go to https://aupnsxzkwispcjniacqo.supabase.co/project/aupnsxzkwispcjniacqo/editor
   - Click `elevenlabs_conversations` table
   - See your data! 🎉

---

## Total Time: ~10 minutes

That's literally it. Everything else is automated. 🚀
