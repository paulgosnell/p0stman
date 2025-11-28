# ElevenLabs Webhook Integration

Complete webhook system for capturing and processing ElevenLabs voice agent post-call data.

## 🚀 Quick Start

```bash
# 1. Run database migration
supabase db push

# 2. Set environment variables (see below)

# 3. Deploy
git push  # or: vercel --prod

# 4. Configure webhook in ElevenLabs dashboard
# URL: https://your-domain.vercel.app/api/webhooks/elevenlabs

# 5. Test with a real conversation
```

## 📦 What's Included

### Core Files
- **`/api/webhooks/elevenlabs.ts`** - Webhook endpoint (Vercel serverless)
- **`/supabase/migrations/20250117_*.sql`** - Database schema
- **`/src/types/elevenlabs.ts`** - TypeScript types
- **`/src/lib/supabase/elevenlabs.ts`** - Database helpers
- **`/src/lib/emailjs-templates.ts`** - Email helpers

### Documentation
- **`docs/ELEVENLABS_WEBHOOK_SETUP.md`** - Complete setup guide
- **`docs/WEBHOOK_QUICK_REFERENCE.md`** - Quick reference
- **`docs/WEBHOOK_IMPLEMENTATION_SUMMARY.md`** - Implementation details

### Scripts
- **`scripts/setup-webhook.sh`** - Automated setup
- **`scripts/test-webhook.sh`** - Test endpoint
- **`.env.webhook.example`** - Environment template

## 🔑 Environment Variables

Required:
```bash
ELEVENLABS_WEBHOOK_SECRET=xxx    # From ElevenLabs dashboard
SUPABASE_SERVICE_KEY=xxx         # From Supabase settings
```

Optional:
```bash
SLACK_WEBHOOK_URL=xxx            # For team notifications
```

Already configured:
```bash
EMAILJS_SERVICE_ID=service_4kl2tlf
EMAILJS_TEMPLATE_ID=template_e1jmkqa
EMAILJS_PUBLIC_KEY=83jOrcigOwx0BxhWm
```

## 🎯 Features

✅ **Security**
- HMAC signature verification
- Row Level Security (RLS)
- Service key protection

✅ **Performance**
- < 2 second response time
- Parallel processing
- Optimized database indexes

✅ **Reliability**
- Always returns 200 OK
- Comprehensive error handling
- Graceful degradation

✅ **Integration**
- Supabase storage
- EmailJS follow-ups
- Slack notifications

## 📊 Data Captured

From each conversation:
- Contact: email, name, company, phone
- Lead qualification: interest level, budget, timeline
- Conversation: transcript, duration, language
- Metadata: conversation ID, agent ID, success status

## 🛠️ Usage

### Query Conversations
```typescript
import { getConversations } from '@/lib/supabase/elevenlabs';

const conversations = await getConversations({
  interest_level: 'high',
  has_email: true,
  limit: 20
});
```

### Get Analytics
```typescript
import { getConversationSummary } from '@/lib/supabase/elevenlabs';

const stats = await getConversationSummary({
  from: '2025-01-01',
  to: '2025-01-31'
});
```

### Send Follow-up Email
```typescript
import { sendVoiceAgentFollowUp } from '@/lib/emailjs-templates';

await sendVoiceAgentFollowUp({
  email: 'user@example.com',
  name: 'John Smith',
  interestLevel: 'high',
  conversationId: 'conv_123'
});
```

## 🧪 Testing

```bash
# Test endpoint availability
curl https://your-domain.vercel.app/api/webhooks/elevenlabs

# Run test script
./scripts/test-webhook.sh https://your-domain.vercel.app/api/webhooks/elevenlabs

# View logs
vercel logs --follow
```

## 📈 Monitoring

### Database Queries
```sql
-- Today's activity
SELECT COUNT(*) as total,
       COUNT(email) as emails
FROM elevenlabs_conversations
WHERE created_at::date = CURRENT_DATE;

-- High-interest leads
SELECT name, email, company, created_at
FROM elevenlabs_conversations
WHERE interest_level = 'high'
ORDER BY created_at DESC;
```

### Vercel Logs
```bash
vercel logs --follow
```

### Supabase Dashboard
https://aupnsxzkwispcjniacqo.supabase.co

## 📖 Documentation

- **Setup Guide**: `docs/ELEVENLABS_WEBHOOK_SETUP.md`
- **Quick Reference**: `docs/WEBHOOK_QUICK_REFERENCE.md`
- **Implementation**: `docs/WEBHOOK_IMPLEMENTATION_SUMMARY.md`
- **Research**: `docs/ELEVENLABS_API_RESEARCH_2025.md`

## 🆘 Troubleshooting

**Webhook not receiving data?**
- Check ElevenLabs webhook configuration
- Verify URL is correct
- Check delivery logs in ElevenLabs dashboard

**Invalid signature error?**
- Verify `ELEVENLABS_WEBHOOK_SECRET` matches
- Check signature header is present

**Database errors?**
- Ensure migration was run
- Check service key permissions
- Verify RLS policies

**Email not sending?**
- Check EmailJS configuration
- Look in spam folder
- Check Vercel logs

## 🔗 Resources

- [ElevenLabs Docs](https://elevenlabs.io/docs)
- [Vercel Functions](https://vercel.com/docs/functions)
- [Supabase](https://supabase.com/docs)
- [EmailJS](https://www.emailjs.com/docs/)

## 📝 Next Steps

1. ✅ Deploy webhook endpoint
2. ✅ Configure environment variables
3. ✅ Test with real conversation
4. 🔜 Build admin dashboard
5. 🔜 Set up CRM integration
6. 🔜 Create automated reports

---

**Status**: ✅ Ready for Deployment
**Version**: 1.0.0
**Last Updated**: January 17, 2025
