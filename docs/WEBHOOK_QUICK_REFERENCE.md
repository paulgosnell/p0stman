# ElevenLabs Webhook - Quick Reference

## 🚀 Quick Deploy Checklist

- [ ] Run Supabase migration: `supabase db push`
- [ ] Set environment variables in Vercel
- [ ] Deploy: `git push` or `vercel --prod`
- [ ] Configure webhook URL in ElevenLabs dashboard
- [ ] Test with real conversation
- [ ] Verify data in Supabase

## 🔑 Required Environment Variables

```bash
# Security
ELEVENLABS_WEBHOOK_SECRET=xxx        # From ElevenLabs dashboard
SUPABASE_SERVICE_KEY=xxx             # From Supabase settings

# Optional
SLACK_WEBHOOK_URL=xxx                # For team notifications
```

## 📍 Webhook URL

```
https://your-domain.vercel.app/api/webhooks/elevenlabs
```

Set in: ElevenLabs Dashboard → Conversational AI → Settings → Webhooks

## 🗄️ Database Tables

### Main Table: `elevenlabs_conversations`

```sql
SELECT * FROM elevenlabs_conversations
ORDER BY created_at DESC LIMIT 10;
```

### Analytics View: `elevenlabs_conversation_analytics`

```sql
SELECT * FROM elevenlabs_conversation_analytics
WHERE date >= CURRENT_DATE - INTERVAL '7 days';
```

## 📊 Common Queries

### Recent High-Interest Leads
```sql
SELECT name, email, company, specific_interest, created_at
FROM elevenlabs_conversations
WHERE interest_level = 'high'
AND created_at >= CURRENT_DATE - INTERVAL '7 days'
ORDER BY created_at DESC;
```

### Email Collection Rate by Section
```sql
SELECT
  page_section,
  COUNT(*) as total,
  COUNT(email) as collected,
  ROUND(COUNT(email)::NUMERIC / COUNT(*) * 100, 2) as collection_rate
FROM elevenlabs_conversations
GROUP BY page_section;
```

### Today's Activity
```sql
SELECT COUNT(*) as conversations_today,
       COUNT(email) as emails_collected,
       COUNT(CASE WHEN interest_level = 'high' THEN 1 END) as hot_leads
FROM elevenlabs_conversations
WHERE created_at::date = CURRENT_DATE;
```

## 🧪 Test Commands

### Test Webhook Endpoint (expect 405)
```bash
curl https://your-domain.vercel.app/api/webhooks/elevenlabs
```

### Test with Sample Payload
```bash
curl -X POST https://your-domain.vercel.app/api/webhooks/elevenlabs \
  -H "Content-Type: application/json" \
  -H "x-elevenlabs-signature: test" \
  -d '{"conversation_id":"test","agent_id":"test","status":"done",...}'
```

### View Vercel Logs
```bash
vercel logs --follow
```

## 🔍 Debugging

### Check if table exists
```sql
SELECT EXISTS (
  SELECT FROM information_schema.tables
  WHERE table_name = 'elevenlabs_conversations'
);
```

### Check webhook deliveries in ElevenLabs
1. Go to ElevenLabs Dashboard
2. Settings → Webhooks
3. View "Recent Deliveries"

### Common Error Fixes

| Error | Solution |
|-------|----------|
| Invalid signature | Check `ELEVENLABS_WEBHOOK_SECRET` |
| Table doesn't exist | Run migration |
| 403 Forbidden | Check RLS policies |
| No email sent | Verify EmailJS config |

## 📧 Email Configuration

EmailJS variables (already set in your code):
```
Service ID: service_4kl2tlf
Template ID: template_e1jmkqa
Public Key: 83jOrcigOwx0BxhWm
```

## 📁 File Locations

- Webhook: `/api/webhooks/elevenlabs.ts`
- Schema: `/supabase/migrations/20250117_elevenlabs_conversations.sql`
- Types: `/src/types/elevenlabs.ts`
- Helpers: `/src/lib/supabase/elevenlabs.ts`
- Email: `/src/lib/emailjs-templates.ts`

## 🎯 Data Collection Fields

Configure in ElevenLabs Dashboard → Agent → Analysis:

- `user_email` (required for follow-ups)
- `user_name`
- `company_name`
- `phone_number`
- `interest_level` (high/medium/low/none)
- `budget_range`
- `timeline`
- `specific_interest`
- `page_section`

## 🔒 Security Checklist

- [x] HMAC signature verification enabled
- [x] Service key never exposed to client
- [x] RLS policies on database
- [x] Webhook secret in environment variables
- [x] Always returns 200 OK (prevents auto-disable)

## 📈 Performance Tips

- Webhook processes in parallel (< 2 seconds)
- Database has optimized indexes
- Email/Slack don't block response
- Uses `Promise.allSettled` for resilience

## 🆘 Support

- Vercel Logs: `vercel logs`
- Supabase Dashboard: https://aupnsxzkwispcjniacqo.supabase.co
- ElevenLabs Dashboard: https://elevenlabs.io/app
- Full docs: `docs/ELEVENLABS_WEBHOOK_SETUP.md`
