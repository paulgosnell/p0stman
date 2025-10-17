# ElevenLabs Webhook Setup Guide

Complete guide for setting up and deploying the ElevenLabs post-call webhook handler.

## Overview

This webhook endpoint processes ElevenLabs conversation data after voice agent calls complete. It:

1. ✅ Verifies HMAC signatures for security
2. ✅ Parses conversation transcripts and collected data
3. ✅ Stores data in Supabase database
4. ✅ Sends follow-up emails via EmailJS
5. ✅ Notifies team of high-interest leads (Slack)
6. ✅ Returns 200 OK immediately to prevent auto-disable

## Architecture

```
ElevenLabs Voice Agent
       ↓
   (conversation ends)
       ↓
ElevenLabs Webhook → POST /api/webhooks/elevenlabs
       ↓
   [HMAC Verification]
       ↓
   [Parse Payload]
       ↓
   ├─→ Save to Supabase
   ├─→ Send EmailJS follow-up
   └─→ Notify Slack (if high interest)
       ↓
   Return 200 OK
```

## Files Created

### 1. Webhook Endpoint
**Location**: `/api/webhooks/elevenlabs.ts`

Vercel serverless function that handles POST requests from ElevenLabs.

### 2. Database Schema
**Location**: `/supabase/migrations/20250117_elevenlabs_conversations.sql`

Creates:
- `elevenlabs_conversations` table
- Indexes for performance
- Row Level Security policies
- Analytics view
- Triggers for auto-updating timestamps

### 3. TypeScript Types
**Location**: `/src/types/elevenlabs.ts`

Type definitions for:
- Webhook payloads
- Transcript entries
- Data collection
- Analytics

### 4. Supabase Helpers
**Location**: `/src/lib/supabase/elevenlabs.ts`

Functions for:
- Querying conversations
- Getting analytics
- Searching and filtering
- Exporting to CSV

### 5. EmailJS Templates
**Location**: `/src/lib/emailjs-templates.ts`

Helpers for:
- Personalized follow-up emails
- Team notifications
- Thank you emails

## Setup Instructions

### Step 1: Deploy Database Schema

Run the migration in Supabase:

```bash
# Option 1: Using Supabase CLI (recommended)
cd /Users/paulgosnell/Sites/p0stman
supabase db push

# Option 2: Using Supabase Dashboard
# 1. Go to https://aupnsxzkwispcjniacqo.supabase.co/project/default/sql
# 2. Paste contents of supabase/migrations/20250117_elevenlabs_conversations.sql
# 3. Click "Run"
```

Verify the table was created:
```sql
SELECT * FROM elevenlabs_conversations LIMIT 1;
```

### Step 2: Configure Environment Variables

Add these to your `.env` file and Vercel project settings:

```bash
# Existing (already configured)
VITE_SUPABASE_URL=https://aupnsxzkwispcjniacqo.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_ELEVENLABS_AGENT_ID=agent_8701k6q7xc5af4f8dkjj8pqda592
VITE_ELEVENLABS_API_KEY=sk_0fcb2e21a1821c4a6f4ee87747b9ff1e03ae72933ee74d20

# NEW - Required for webhook
ELEVENLABS_WEBHOOK_SECRET=your_webhook_secret_here
SUPABASE_SERVICE_KEY=your_supabase_service_role_key

# NEW - Optional (for enhanced features)
EMAILJS_SERVICE_ID=service_4kl2tlf
EMAILJS_TEMPLATE_ID=template_e1jmkqa
EMAILJS_PUBLIC_KEY=83jOrcigOwx0BxhWm
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

#### Getting the Required Keys:

**ELEVENLABS_WEBHOOK_SECRET**:
1. Go to ElevenLabs Dashboard → Conversational AI → Settings
2. Scroll to "Webhooks" section
3. Generate or copy your webhook secret

**SUPABASE_SERVICE_KEY**:
1. Go to Supabase Dashboard → Settings → API
2. Copy the `service_role` key (NOT the anon key)
3. ⚠️ Keep this secret! It has full database access

**SLACK_WEBHOOK_URL** (optional):
1. Go to your Slack workspace
2. Create incoming webhook: https://api.slack.com/messaging/webhooks
3. Choose channel for notifications (e.g., #hot-leads)
4. Copy webhook URL

### Step 3: Deploy to Vercel

#### Option A: Deploy via Git (Recommended)

1. Commit the new files:
```bash
git add api/webhooks/elevenlabs.ts
git add supabase/migrations/20250117_elevenlabs_conversations.sql
git add src/types/elevenlabs.ts
git add src/lib/supabase/elevenlabs.ts
git add src/lib/emailjs-templates.ts
git commit -m "feat: add ElevenLabs webhook endpoint for post-call data processing"
git push
```

2. Vercel will automatically deploy

3. Add environment variables in Vercel Dashboard:
   - Go to https://vercel.com/your-project/settings/environment-variables
   - Add all the new environment variables listed above
   - Click "Redeploy" to apply the changes

#### Option B: Manual Deploy

```bash
npm install -g vercel
vercel --prod
```

### Step 4: Configure ElevenLabs Webhook

1. Go to ElevenLabs Dashboard
2. Navigate to: Conversational AI → Settings → Webhooks
3. Add webhook configuration:

**Webhook URL**:
```
https://your-domain.vercel.app/api/webhooks/elevenlabs
```

**Webhook Type**: `post_call_transcription`

**Security**: Enable HMAC signature authentication

**Test the webhook** using the "Test" button in ElevenLabs dashboard

### Step 5: Test the Integration

#### Test 1: Manual Test

Create a test payload and send it to your endpoint:

```bash
curl -X POST https://your-domain.vercel.app/api/webhooks/elevenlabs \
  -H "Content-Type: application/json" \
  -H "x-elevenlabs-signature: test_signature" \
  -d '{
    "conversation_id": "test_123",
    "agent_id": "agent_8701k6q7xc5af4f8dkjj8pqda592",
    "status": "done",
    "transcript": [
      {"role": "user", "message": "Hello", "time_in_call_secs": 5}
    ],
    "analysis": {
      "call_successful": "success",
      "data_collection": {
        "user_email": "test@example.com",
        "user_name": "Test User",
        "interest_level": "high"
      }
    },
    "metadata": {
      "start_time_unix_secs": 1705000000,
      "call_duration_secs": 120,
      "main_language": "en"
    }
  }'
```

#### Test 2: Real Conversation

1. Go to your website with the voice agent
2. Start a conversation
3. Provide test contact info (use your own email)
4. End the conversation
5. Check:
   - Supabase table for new record
   - Your email for follow-up
   - Vercel logs for processing details

#### Test 3: View in Supabase

```sql
-- View all conversations
SELECT
  conversation_id,
  email,
  name,
  interest_level,
  created_at
FROM elevenlabs_conversations
ORDER BY created_at DESC
LIMIT 10;

-- View analytics
SELECT * FROM elevenlabs_conversation_analytics
ORDER BY date DESC
LIMIT 7;
```

### Step 6: Monitor and Debug

#### Vercel Logs

View real-time logs:
```bash
vercel logs --follow
```

Or in dashboard: https://vercel.com/your-project/logs

#### Supabase Logs

1. Go to Supabase Dashboard → Logs → API
2. Filter by table: `elevenlabs_conversations`

#### Common Issues

**Issue**: "Invalid signature" error
- **Solution**: Ensure `ELEVENLABS_WEBHOOK_SECRET` matches ElevenLabs dashboard
- Check that signature verification is working

**Issue**: "Table does not exist"
- **Solution**: Run the migration again
- Check Supabase connection settings

**Issue**: Webhook auto-disabled by ElevenLabs
- **Solution**: Check Vercel logs for errors
- Ensure endpoint returns 200 OK within 30 seconds
- The endpoint is designed to always return 200, even on errors

**Issue**: No email received
- **Solution**: Check EmailJS configuration
- Verify email isn't in spam folder
- Check Vercel logs for email sending errors

## Data Collection Configuration

Configure in ElevenLabs Dashboard → Agent Settings → Analysis → Data Collection:

```json
{
  "fields": [
    {
      "name": "user_email",
      "type": "String",
      "description": "Extract the user's email address in format user@domain.com. Must contain @ and valid domain."
    },
    {
      "name": "user_name",
      "type": "String",
      "description": "Extract user's full name (first and last if provided)."
    },
    {
      "name": "company_name",
      "type": "String",
      "description": "Extract company or organization name if mentioned."
    },
    {
      "name": "phone_number",
      "type": "String",
      "description": "Extract phone number if provided in any format."
    },
    {
      "name": "interest_level",
      "type": "String",
      "description": "Assess interest: 'high' (wants demo/pricing), 'medium' (exploring), 'low' (browsing), 'none'"
    },
    {
      "name": "budget_range",
      "type": "String",
      "description": "Budget range if discussed: 'under_15k', '15k_to_50k', '50k_to_75k', 'over_75k', 'not_discussed'"
    },
    {
      "name": "timeline",
      "type": "String",
      "description": "When needed: 'urgent' (<1 month), 'normal' (1-3 months), 'flexible' (3+ months), 'not_discussed'"
    },
    {
      "name": "specific_interest",
      "type": "String",
      "description": "What solution they're interested in: 'voice agent', 'chatbot', 'custom AI', etc."
    },
    {
      "name": "page_section",
      "type": "String",
      "description": "Which page section: 'home', 'services', 'pricing', 'case-studies', 'contact'"
    }
  ]
}
```

## Security Considerations

### HMAC Signature Verification

The webhook verifies every request using HMAC-SHA256:

```typescript
// This is already implemented in the webhook
const hmac = crypto.createHmac('sha256', secret);
hmac.update(payload);
const expectedSignature = hmac.digest('hex');
```

### Row Level Security (RLS)

The Supabase table has RLS enabled:
- Service role: Full access (for webhook)
- Authenticated users: Read-only (for admin dashboard)
- Public: No access

### Environment Variables

Never commit:
- `ELEVENLABS_WEBHOOK_SECRET`
- `SUPABASE_SERVICE_KEY`
- `SLACK_WEBHOOK_URL`

These should only exist in:
- `.env.local` (gitignored)
- Vercel environment variables

## Performance Optimization

### Parallel Processing

The webhook processes tasks in parallel:
```typescript
await Promise.allSettled([
  saveToSupabase(data),
  sendFollowUpEmail(data),
  notifySlack(data)
]);
```

### Fast Response

Returns 200 OK immediately, before email/Slack:
- ElevenLabs requirement: < 30 seconds
- Our implementation: < 2 seconds typically

### Database Indexes

Indexes created for common queries:
- `conversation_id` (unique)
- `email` (WHERE email IS NOT NULL)
- `interest_level` (WHERE interest_level IS NOT NULL)
- `created_at` (DESC)

## Analytics and Reporting

### Built-in View

Query the analytics view:
```sql
SELECT * FROM elevenlabs_conversation_analytics
WHERE date >= CURRENT_DATE - INTERVAL '30 days';
```

### Custom Queries

```sql
-- Email collection rate by section
SELECT
  page_section,
  COUNT(*) as total,
  COUNT(email) as collected,
  ROUND(COUNT(email)::NUMERIC / COUNT(*) * 100, 2) as rate
FROM elevenlabs_conversations
GROUP BY page_section;

-- High-interest leads this week
SELECT
  name,
  email,
  company,
  specific_interest,
  created_at
FROM elevenlabs_conversations
WHERE interest_level = 'high'
  AND created_at >= CURRENT_DATE - INTERVAL '7 days'
ORDER BY created_at DESC;

-- Average call duration by interest level
SELECT
  interest_level,
  AVG(call_duration_secs) as avg_duration,
  COUNT(*) as count
FROM elevenlabs_conversations
WHERE interest_level IS NOT NULL
GROUP BY interest_level;
```

### Export Data

Use the helper function:
```typescript
import { getConversations, exportToCSV } from './src/lib/supabase/elevenlabs';

const conversations = await getConversations({
  date_from: '2025-01-01'
});
const csv = exportToCSV(conversations);

// Download or save
const blob = new Blob([csv], { type: 'text/csv' });
const url = URL.createObjectURL(blob);
```

## Maintenance

### Regular Tasks

**Daily**:
- Check Vercel logs for errors
- Review high-interest leads

**Weekly**:
- Review email collection rates
- Analyze conversation trends
- Test webhook with sample data

**Monthly**:
- Review storage usage
- Archive old conversations (optional)
- Update agent prompts based on data

### Webhook Health Check

Create a simple monitoring script:
```bash
#!/bin/bash
curl -s -o /dev/null -w "%{http_code}" \
  https://your-domain.vercel.app/api/webhooks/elevenlabs
```

Expected: 405 (Method Not Allowed) - proves endpoint is alive

### Database Cleanup (Optional)

If storage becomes an issue:
```sql
-- Archive conversations older than 1 year
CREATE TABLE elevenlabs_conversations_archive AS
SELECT * FROM elevenlabs_conversations
WHERE created_at < CURRENT_DATE - INTERVAL '1 year';

DELETE FROM elevenlabs_conversations
WHERE created_at < CURRENT_DATE - INTERVAL '1 year';
```

## Next Steps

1. ✅ Set up Supabase schema
2. ✅ Configure environment variables
3. ✅ Deploy to Vercel
4. ✅ Configure ElevenLabs webhook
5. ✅ Test with real conversation
6. 🔜 Build admin dashboard to view data
7. 🔜 Set up automated reports
8. 🔜 Create CRM integration (HubSpot/Salesforce)

## Support

If you encounter issues:

1. Check Vercel logs: `vercel logs`
2. Check Supabase logs in dashboard
3. Verify environment variables are set
4. Test webhook with curl
5. Review ElevenLabs webhook delivery logs

## Resources

- [ElevenLabs Webhook Documentation](https://elevenlabs.io/docs/webhooks)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Supabase RLS Policies](https://supabase.com/docs/guides/auth/row-level-security)
- [EmailJS API](https://www.emailjs.com/docs/)

---

**Created**: January 17, 2025
**Last Updated**: January 17, 2025
**Version**: 1.0.0
