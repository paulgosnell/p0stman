# ✅ Deployment Checklist - Voice Agent Email Collection

**Status:** ✅ Database setup complete via Supabase MCP

---

## What's Done ✅

- ✅ Voice agent components built and tested
- ✅ Webhook endpoint created (`/api/webhooks/elevenlabs.ts`)
- ✅ Database schema deployed:
  - `elevenlabs_conversations` table
  - `elevenlabs_conversation_analytics` view
  - RLS policies
  - Indexes
  - Triggers
- ✅ Code committed and ready to deploy

---

## Remaining Tasks (3 manual steps)

### Step 1️⃣: Get Supabase Service Key

**Location:** https://aupnsxzkwispcjniacqo.supabase.co/project/aupnsxzkwispcjniacqo/settings/api

**What to copy:**
- Find section: **"Project API keys"**
- Copy the **`service_role`** key (the LONG one, ~200+ characters)
- ⚠️ Keep this secret! It has full database access

**Where to paste:**
1. `.env.local` → `SUPABASE_SERVICE_KEY=...`
2. Vercel → Environment variable `SUPABASE_SERVICE_KEY`

---

### Step 2️⃣: Get ElevenLabs Webhook Secret

**Location:** https://elevenlabs.io/app/conversational-ai

**What to do:**
1. Click your agent (P0STMAN Voice Assistant)
2. Go to **Settings** → **Webhooks**
3. Either copy existing webhook secret OR click **"Generate Secret"**
4. Copy the secret

**Where to paste:**
1. `.env.local` → `ELEVENLABS_WEBHOOK_SECRET=...`
2. Vercel → Environment variable `ELEVENLABS_WEBHOOK_SECRET`

---

### Step 3️⃣: Deploy to Vercel

**Go to:** https://vercel.com/YOUR-USERNAME/p0stman/settings/environment-variables

**Add these variables:**

```
Variable 1:
  Name: SUPABASE_SERVICE_KEY
  Value: [paste from Step 1]
  Environment: ✓ Production ✓ Preview ✓ Development

Variable 2:
  Name: ELEVENLABS_WEBHOOK_SECRET
  Value: [paste from Step 2]
  Environment: ✓ Production ✓ Preview ✓ Development
```

**Then:**
- Click **"Redeploy"** button
- Wait for deployment to complete (2-3 min)
- ✅ Webhook is now live!

---

## Configure ElevenLabs Dashboard (5 min)

### Enable Conversation Overrides

**URL:** https://elevenlabs.io/app/conversational-ai

1. Click your agent
2. Go to **Security** tab
3. Find **"Conversation Overrides"** section
4. Toggle **ON**
5. Click **"Save"**

### Add Data Collection Fields

**Same URL → Agent → Analysis tab → Data Collection section**

Click **"Add Field"** for each:

| # | Name | Type | Description |
|---|------|------|-------------|
| 1 | `user_email` | String | Extract the user's email address in format user@domain.com |
| 2 | `user_name` | String | Extract user's full name (first and last if provided) |
| 3 | `company_name` | String | Extract company or organization name if mentioned |
| 4 | `phone_number` | String | Extract phone number if provided in any format |
| 5 | `interest_level` | String | Assess interest: 'high', 'medium', 'low', 'none' |
| 6 | `budget_range` | String | Budget range: 'under_15k', '15k_to_50k', '50k_to_75k', 'over_75k', 'not_discussed' |
| 7 | `timeline` | String | When needed: 'urgent' (<1 month), 'normal' (1-3 months), 'flexible' (3+ months), 'not_discussed' |
| 8 | `specific_interest` | String | What solution: 'voice agent', 'chatbot', 'custom AI', 'mobile app', 'website', etc |
| 9 | `page_section` | String | Page section: 'home', 'services', 'pricing', 'case-studies', 'contact' |

Click **"Save"** after adding all fields.

### Set Webhook URL

**Same URL → Agent → Webhooks tab**

1. Click **"Add Webhook"**
2. Configure:

```
URL: https://p0stman.com/api/webhooks/elevenlabs
Event Type: post_call_transcription
HMAC Authentication: ✓ Enable
Secret: [paste from Step 2 above]
```

3. Click **"Save"**
4. Click **"Test Webhook"**
5. ✅ Should see green checkmark

---

## Test It! 🧪

### Manual Test

1. **Go to:** https://p0stman.com (or localhost:5173 for dev)
2. **Scroll to:** "Ready to Ship Fast?" section
3. **Click:** "Prefer to talk? Try our AI assistant"
4. **Talk to the agent** and mention:
   - Your email address
   - Your name
   - Your company
   - What you're interested in
5. **End the conversation** (click X)

### Verify Data Collection

**In Supabase:**

1. Go to: https://aupnsxzkwispcjniacqo.supabase.co/project/aupnsxzkwispcjniacqo/editor
2. Select table: `elevenlabs_conversations`
3. ✅ Your conversation should appear!
4. Check columns:
   - `email` - captured
   - `name` - captured
   - `company` - captured
   - `interest_level` - assessed
   - `transcript` - full JSON transcript

### Verify Email Follow-up

1. Check inbox for email from P0STMAN
2. ✅ Should receive personalized follow-up based on interest level

### Verify Webhook Logs

1. Go to: https://vercel.com/YOUR-USERNAME/p0stman/logs
2. Filter by: `/api/webhooks/elevenlabs`
3. ✅ Should see POST requests with 200 OK responses

---

## Troubleshooting

### "Invalid signature" error

**Cause:** Webhook secret doesn't match
**Solution:**
- Verify `ELEVENLABS_WEBHOOK_SECRET` in Vercel exactly matches ElevenLabs dashboard
- Redeploy after fixing

### No data in database

**Cause:** Webhook not executing properly
**Solution:**
- Check Vercel logs for errors
- Verify `SUPABASE_SERVICE_KEY` is set correctly
- Run in Supabase SQL: `SELECT COUNT(*) FROM elevenlabs_conversations;`

### No email received

**Cause:** EmailJS not configured or email in spam
**Solution:**
- Check spam folder
- Verify EmailJS service ID/template ID still configured
- Check Vercel logs for email errors

### Webhook test fails

**Cause:** Endpoint not accessible or configuration wrong
**Solution:**
- Verify webhook URL: `https://p0stman.com/api/webhooks/elevenlabs`
- Check Vercel deployment is live
- Ensure HMAC secret matches exactly

---

## After Deployment ✨

### Daily Monitoring
- Check Vercel logs for errors
- Monitor email collection rate

### Weekly Reviews
- View analytics: https://aupnsxzkwispcjniacqo.supabase.co → SQL Editor
  ```sql
  SELECT * FROM elevenlabs_conversation_analytics
  ORDER BY date DESC LIMIT 7;
  ```
- Check high-interest leads
- Review transcripts

### Next Phases (Future)
- Build admin dashboard to view conversations
- Integrate with CRM (HubSpot, Salesforce, etc.)
- Set up automated reports
- Create performance analytics

---

## Timeline

- **Step 1:** 1 min (copy Supabase key)
- **Step 2:** 1 min (copy ElevenLabs secret)
- **Step 3:** 3 min (add to Vercel + redeploy)
- **Dashboard Config:** 5 min (data collection + webhook)
- **Testing:** 2 min (have conversation + verify)

**Total: ~12 minutes**

---

## Files Reference

| File | Purpose |
|------|---------|
| `QUICK_SETUP.md` | Simplified step-by-step guide |
| `/api/webhooks/elevenlabs.ts` | Webhook handler |
| `/src/components/voice-agent/SectionVoiceAgent.tsx` | Voice component |
| `/src/components/v3/CTAV3.tsx` | Enhanced CTA with voice |
| `/docs/ELEVENLABS_WEBHOOK_SETUP.md` | Detailed technical guide |
| `/docs/SECTION_VOICE_AGENT_GUIDE.md` | Component documentation |
| `SETUP_DATABASE.sql` | Database schema (already deployed) |

---

## Success Indicators ✅

When everything is working:
1. ✅ Voice agent starts when clicked
2. ✅ Waveform animates during conversation
3. ✅ Data appears in Supabase table within 5 seconds of conversation end
4. ✅ Follow-up email received
5. ✅ Vercel logs show 200 OK responses

---

**Last Updated:** January 17, 2025
**Database Status:** ✅ Deployed
**Webhook Status:** ✅ Ready to deploy
**Voice Components:** ✅ Ready to deploy
**Documentation:** ✅ Complete
