# 🎤 Voice Agent Setup Checklist

Complete this checklist to fully configure ElevenLabs voice agents with email collection.

---

## ✅ STEP 1: Create Database Table (2 min)

**Action:** Run the SQL migration in Supabase

1. Open Supabase SQL Editor:
   ```
   https://aupnsxzkwispcjniacqo.supabase.co/project/aupnsxzkwispcjniacqo/sql
   ```

2. Click **"New Query"**

3. Copy the entire contents of `SETUP_DATABASE.sql` (in project root)

4. Paste into SQL Editor

5. Click **"Run"** (or press Cmd+Enter)

6. ✅ You should see: "Success. No rows returned"

**Verify it worked:**
```sql
SELECT * FROM elevenlabs_conversations LIMIT 1;
```

---

## ✅ STEP 2: Get Required Credentials (5 min)

### 2A. Get Supabase Service Role Key

1. Go to Supabase Settings:
   ```
   https://aupnsxzkwispcjniacqo.supabase.co/project/aupnsxzkwispcjniacqo/settings/api
   ```

2. Find **"Project API keys"** section

3. Copy the **`service_role`** key (NOT the anon key)
   - ⚠️ Starts with `eyJhbGc...` and is MUCH longer than anon key
   - ⚠️ Keep this secret! It has full database access

4. Save it temporarily in a secure note

### 2B. Get ElevenLabs Webhook Secret

1. Go to ElevenLabs Dashboard:
   ```
   https://elevenlabs.io/app/conversational-ai
   ```

2. Click on your agent: **P0STMAN Voice Assistant**

3. Go to **Settings** → **Webhooks** section

4. Either:
   - Copy existing webhook secret, OR
   - Click **"Generate Secret"** to create new one

5. Save it temporarily in a secure note

### 2C. (Optional) Get Slack Webhook URL

Only if you want Slack notifications for hot leads:

1. Go to: https://api.slack.com/messaging/webhooks

2. Click **"Create your Slack app"**

3. Choose a workspace and channel (e.g., #hot-leads)

4. Copy the webhook URL (starts with `https://hooks.slack.com/services/`)

5. Save it temporarily

---

## ✅ STEP 3: Add Environment Variables to Vercel (3 min)

1. Go to Vercel Project Settings:
   ```
   https://vercel.com/YOUR-USERNAME/p0stman/settings/environment-variables
   ```

2. Add these THREE variables:

   **Variable 1:**
   - Name: `SUPABASE_SERVICE_KEY`
   - Value: [Paste the service_role key from Step 2A]
   - Environment: Production, Preview, Development (all checked)

   **Variable 2:**
   - Name: `ELEVENLABS_WEBHOOK_SECRET`
   - Value: [Paste the webhook secret from Step 2B]
   - Environment: Production, Preview, Development (all checked)

   **Variable 3 (Optional):**
   - Name: `SLACK_WEBHOOK_URL`
   - Value: [Paste Slack webhook URL from Step 2C]
   - Environment: Production (only)

3. Click **"Save"** for each

4. After saving all, click **"Redeploy"** button

---

## ✅ STEP 4: Configure ElevenLabs Dashboard (5 min)

### 4A. Enable Conversation Overrides

1. Go to ElevenLabs agent settings:
   ```
   https://elevenlabs.io/app/conversational-ai
   ```

2. Click your agent

3. Go to **Security** tab

4. Find **"Conversation Overrides"** section

5. ✅ Toggle **ON** "Allow conversation overrides"

6. Click **"Save"**

### 4B. Configure Data Collection Fields

1. Still in agent settings, go to **Analysis** tab

2. Scroll to **"Data Collection"** section

3. Click **"Add Field"** and add these 9 fields:

   **Field 1: user_email**
   - Type: String
   - Description: `Extract the user's email address in format user@domain.com. Must contain @ and valid domain.`

   **Field 2: user_name**
   - Type: String
   - Description: `Extract user's full name (first and last if provided).`

   **Field 3: company_name**
   - Type: String
   - Description: `Extract company or organization name if mentioned.`

   **Field 4: phone_number**
   - Type: String
   - Description: `Extract phone number if provided in any format.`

   **Field 5: interest_level**
   - Type: String
   - Description: `Assess interest: 'high' (wants demo/pricing), 'medium' (exploring), 'low' (browsing), 'none'`

   **Field 6: budget_range**
   - Type: String
   - Description: `Budget range if discussed: 'under_15k', '15k_to_50k', '50k_to_75k', 'over_75k', 'not_discussed'`

   **Field 7: timeline**
   - Type: String
   - Description: `When needed: 'urgent' (<1 month), 'normal' (1-3 months), 'flexible' (3+ months), 'not_discussed'`

   **Field 8: specific_interest**
   - Type: String
   - Description: `What solution they're interested in: 'voice agent', 'chatbot', 'custom AI', 'mobile app', etc.`

   **Field 9: page_section**
   - Type: String
   - Description: `Which page section: 'home', 'services', 'pricing', 'case-studies', 'contact'`

4. Click **"Save"**

### 4C. Set Up Webhook

1. Still in agent settings, go to **Webhooks** tab

2. Click **"Add Webhook"**

3. Configure:
   - **URL**: `https://p0stman.com/api/webhooks/elevenlabs`
     (Or your actual Vercel domain)

   - **Event Type**: Select `post_call_transcription`

   - **HMAC Authentication**: ✅ Enable

   - **Secret**: [Paste the same webhook secret from Step 2B]

4. Click **"Save"**

5. Click **"Test Webhook"** to verify it's working
   - Should see green checkmark ✅

---

## ✅ STEP 5: Test the Complete Flow (5 min)

### Test 1: Voice Conversation

1. Go to your homepage: `http://localhost:5173` (or deployed site)

2. Scroll to **"Ready to Ship Fast?"** section

3. Click **"Prefer to talk? Try our AI assistant"**

4. Start talking to the agent

5. During conversation, naturally mention:
   - Your email address
   - Your name
   - Your company
   - What you're interested in

6. End the conversation (click X)

### Test 2: Check Database

1. Go to Supabase Table Editor:
   ```
   https://aupnsxzkwispcjniacqo.supabase.co/project/aupnsxzkwispcjniacqo/editor
   ```

2. Find table: `elevenlabs_conversations`

3. ✅ You should see your conversation!

4. Check that it captured:
   - email
   - name
   - company
   - transcript
   - interest_level

### Test 3: Check Email

1. Check your inbox (the email you provided in conversation)

2. ✅ You should receive a follow-up email from P0STMAN

### Test 4: Check Slack (if configured)

1. Check your Slack channel

2. If interest_level was "high", you should see a notification

---

## ✅ STEP 6: Verify Webhook Logs (2 min)

1. Go to Vercel Logs:
   ```
   https://vercel.com/YOUR-USERNAME/p0stman/logs
   ```

2. Filter by: `/api/webhooks/elevenlabs`

3. ✅ You should see successful POST requests (200 OK)

4. Check for any errors

---

## 🎉 Setup Complete!

Once all steps are checked, your voice agent is fully operational with:

✅ Email collection from conversations
✅ Automatic follow-up emails
✅ Data stored in Supabase
✅ Analytics ready
✅ Slack notifications (if configured)

---

## 📊 Next Steps

### Monitor Performance

- **Daily**: Check Vercel logs for errors
- **Weekly**: Review email collection rates
- **Monthly**: Analyze conversation trends

### View Analytics

```sql
-- In Supabase SQL Editor
SELECT * FROM elevenlabs_conversation_analytics
ORDER BY date DESC
LIMIT 30;
```

### Build Admin Dashboard

Next phase: Create admin page to:
- View all conversations
- See analytics charts
- Export to CSV
- Search by email/company
- View transcripts

### Integrate with CRM

Connect to:
- HubSpot
- Salesforce
- Pipedrive
- Or custom CRM

---

## 🆘 Troubleshooting

### Issue: "Invalid signature" error

**Solution:**
- Verify `ELEVENLABS_WEBHOOK_SECRET` in Vercel matches ElevenLabs dashboard
- Redeploy after changing environment variables

### Issue: No data in database

**Solution:**
- Check Vercel logs for errors
- Verify SUPABASE_SERVICE_KEY is set correctly
- Test with SQL: `SELECT * FROM elevenlabs_conversations;`

### Issue: No follow-up email received

**Solution:**
- Check spam folder
- Verify EmailJS is still configured
- Check Vercel logs for email sending errors

### Issue: Webhook test fails in ElevenLabs

**Solution:**
- Verify webhook URL is correct (https://p0stman.com/api/webhooks/elevenlabs)
- Check Vercel deployment is live
- Ensure HMAC secret matches exactly

---

## 📚 Documentation

- **Full Setup Guide**: `/docs/ELEVENLABS_WEBHOOK_SETUP.md`
- **Quick Reference**: `/docs/WEBHOOK_QUICK_REFERENCE.md`
- **Component Guide**: `/docs/SECTION_VOICE_AGENT_GUIDE.md`
- **API Research**: `/docs/ELEVENLABS_API_RESEARCH_2025.md`

---

**Created**: January 17, 2025
**Last Updated**: January 17, 2025
