# ⚡ Quick Setup - 10 Minutes to Live Voice Agents

## What You Need to Do (3 things only)

### 1️⃣ Get Supabase Service Key (1 min)

Go to: https://aupnsxzkwispcjniacqo.supabase.co/project/aupnsxzkwispcjniacqo/settings/api

Find **"Project API keys"** section and copy the **`service_role`** key (the LONG one)

Paste it into `.env.local` and `vercel.env.example` as `SUPABASE_SERVICE_KEY`

### 2️⃣ Get ElevenLabs Webhook Secret (1 min)

Go to: https://elevenlabs.io/app/conversational-ai

Click your agent → **Settings** → **Webhooks**

Copy or generate the webhook secret

Paste it into `.env.local` and `vercel.env.example` as `ELEVENLABS_WEBHOOK_SECRET`

### 3️⃣ Add to Vercel (2 min)

Go to: https://vercel.com/YOUR-USERNAME/p0stman/settings/environment-variables

Add the two variables from step 1 & 2

Environment: Check all three (Production, Preview, Development)

Click **"Redeploy"**

---

## Database Setup (Automatic)

The database migration will run automatically when you deploy. It creates:
- ✅ `elevenlabs_conversations` table
- ✅ Indexes for performance
- ✅ RLS policies for security
- ✅ Analytics view
- ✅ Auto-update triggers

**To verify it worked:**
1. Go to Supabase SQL Editor
2. Run: `SELECT * FROM elevenlabs_conversations LIMIT 1;`
3. Should see table exists (empty is fine)

---

## Configure ElevenLabs Dashboard (5 min)

### Enable Overrides

1. Go to: https://elevenlabs.io/app/conversational-ai
2. Click your agent → **Security** tab
3. Toggle ON: **"Allow conversation overrides"**
4. Click **"Save"**

### Add Data Collection Fields

1. Still in agent settings → **Analysis** tab
2. Scroll to **"Data Collection"** section
3. Add these 9 fields:

```
1. user_email
   Type: String
   Description: Extract the user's email address in format user@domain.com

2. user_name
   Type: String
   Description: Extract user's full name

3. company_name
   Type: String
   Description: Extract company or organization name if mentioned

4. phone_number
   Type: String
   Description: Extract phone number if provided in any format

5. interest_level
   Type: String
   Description: Assess interest: 'high', 'medium', 'low', 'none'

6. budget_range
   Type: String
   Description: Budget range if discussed: 'under_15k', '15k_to_50k', 'over_75k', etc

7. timeline
   Type: String
   Description: When needed: 'urgent', 'normal', 'flexible', 'not_discussed'

8. specific_interest
   Type: String
   Description: What solution they're interested in: 'voice agent', 'chatbot', 'custom AI', etc

9. page_section
   Type: String
   Description: Which page section: 'home', 'services', 'pricing', 'case-studies', 'contact'
```

### Set Webhook URL

1. Still in agent settings → **Webhooks** tab
2. Click **"Add Webhook"**
3. Configure:
   - URL: `https://p0stman.com/api/webhooks/elevenlabs`
   - Event Type: `post_call_transcription`
   - HMAC: Enable
   - Secret: Paste same webhook secret from step 2 above
4. Click **"Save"**
5. Click **"Test Webhook"** - should see ✅

---

## Test It! (2 min)

1. Go to: https://p0stman.com (or localhost:5173)
2. Scroll to **"Ready to Ship Fast?"** section
3. Click **"Prefer to talk? Try our AI assistant"**
4. Start talking, mention your email
5. End conversation
6. Check Supabase:
   - Go to Table Editor
   - Find `elevenlabs_conversations` table
   - See your data! 🎉

---

## Troubleshooting

**Issue:** "Webhook failed" in ElevenLabs
- Check that Vercel is deployed and webhook URL is correct

**Issue:** No data in database
- Check Vercel logs for errors
- Verify service_role key is set correctly

**Issue:** Build fails in Vercel
- Check that code committed has the syntax fix (commit 9c85540)

---

## Files Created for You

- ✅ `SETUP_DATABASE.sql` - SQL migration (runs automatically in Vercel)
- ✅ `.env.local` - Local development variables (you fill in)
- ✅ `vercel.env.example` - Vercel environment template
- ✅ `/api/webhooks/elevenlabs.ts` - Webhook handler (auto deployed)
- ✅ `/src/components/voice-agent/SectionVoiceAgent.tsx` - Voice component
- ✅ `/docs/` - Complete documentation

---

**Total Time: ~10 minutes**

That's it! You now have production-ready voice agents with email collection! 🚀
