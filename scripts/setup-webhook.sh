#!/bin/bash

# ElevenLabs Webhook Setup Script
# This script helps set up the webhook endpoint step by step

set -e

echo "🚀 ElevenLabs Webhook Setup Script"
echo "===================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
  echo "❌ Error: package.json not found. Please run this script from the project root."
  exit 1
fi

# Check if required files exist
echo "📁 Checking required files..."
required_files=(
  "api/webhooks/elevenlabs.ts"
  "supabase/migrations/20250117_elevenlabs_conversations.sql"
  "src/types/elevenlabs.ts"
  "src/lib/supabase/elevenlabs.ts"
)

missing_files=()
for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    missing_files+=("$file")
  fi
done

if [ ${#missing_files[@]} -ne 0 ]; then
  echo "❌ Missing required files:"
  printf '   - %s\n' "${missing_files[@]}"
  exit 1
fi

echo "✅ All required files present"
echo ""

# Check for Supabase CLI
echo "🔍 Checking for Supabase CLI..."
if command -v supabase &> /dev/null; then
  echo "✅ Supabase CLI installed"
  HAS_SUPABASE_CLI=true
else
  echo "⚠️  Supabase CLI not found"
  echo "   You'll need to run the migration manually in Supabase dashboard"
  HAS_SUPABASE_CLI=false
fi
echo ""

# Check for Vercel CLI
echo "🔍 Checking for Vercel CLI..."
if command -v vercel &> /dev/null; then
  echo "✅ Vercel CLI installed"
  HAS_VERCEL_CLI=true
else
  echo "⚠️  Vercel CLI not found"
  echo "   Install with: npm install -g vercel"
  HAS_VERCEL_CLI=false
fi
echo ""

# Check environment variables
echo "🔑 Checking environment variables..."
if [ -f ".env.local" ]; then
  echo "✅ .env.local exists"

  # Check for required variables
  required_vars=(
    "ELEVENLABS_WEBHOOK_SECRET"
    "SUPABASE_SERVICE_KEY"
  )

  missing_vars=()
  for var in "${required_vars[@]}"; do
    if ! grep -q "^${var}=" .env.local; then
      missing_vars+=("$var")
    fi
  done

  if [ ${#missing_vars[@]} -ne 0 ]; then
    echo "⚠️  Missing required variables in .env.local:"
    printf '   - %s\n' "${missing_vars[@]}"
    echo ""
    echo "   Copy .env.webhook.example to .env.local and fill in values"
  else
    echo "✅ All required environment variables present"
  fi
else
  echo "⚠️  .env.local not found"
  echo "   Copy .env.webhook.example to .env.local and fill in values:"
  echo "   cp .env.webhook.example .env.local"
fi
echo ""

# Offer to run migration
if [ "$HAS_SUPABASE_CLI" = true ]; then
  echo "📊 Database Migration"
  echo "-------------------"
  read -p "Run Supabase migration now? (y/n) " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Running migration..."
    supabase db push
    echo "✅ Migration complete"
  else
    echo "⏭️  Skipped migration"
    echo "   Run manually with: supabase db push"
  fi
else
  echo "📊 Database Migration"
  echo "-------------------"
  echo "⚠️  Run migration manually in Supabase dashboard:"
  echo "   1. Go to: https://aupnsxzkwispcjniacqo.supabase.co/project/default/sql"
  echo "   2. Paste contents of: supabase/migrations/20250117_elevenlabs_conversations.sql"
  echo "   3. Click 'Run'"
fi
echo ""

# Offer to deploy
if [ "$HAS_VERCEL_CLI" = true ]; then
  echo "🚀 Deployment"
  echo "------------"
  read -p "Deploy to Vercel now? (y/n) " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Deploying..."
    vercel --prod
    echo "✅ Deployment complete"
  else
    echo "⏭️  Skipped deployment"
    echo "   Deploy manually with: vercel --prod"
    echo "   Or push to git if using automatic deployments"
  fi
else
  echo "🚀 Deployment"
  echo "------------"
  echo "Deploy using one of these methods:"
  echo "   1. Push to git (if automatic deployments enabled)"
  echo "   2. Install Vercel CLI: npm install -g vercel"
  echo "   3. Use Vercel dashboard"
fi
echo ""

# Next steps
echo "📋 Next Steps"
echo "============"
echo ""
echo "1. Configure environment variables in Vercel:"
echo "   https://vercel.com/your-project/settings/environment-variables"
echo ""
echo "2. Add webhook URL in ElevenLabs dashboard:"
echo "   https://elevenlabs.io/app"
echo "   Settings → Webhooks → Add webhook"
echo "   URL: https://your-domain.vercel.app/api/webhooks/elevenlabs"
echo ""
echo "3. Configure data collection fields in ElevenLabs agent:"
echo "   Agent Settings → Analysis → Data Collection"
echo "   (See docs/ELEVENLABS_WEBHOOK_SETUP.md for field configuration)"
echo ""
echo "4. Test the webhook:"
echo "   - Have a conversation with the voice agent"
echo "   - Provide test email/contact info"
echo "   - Check Supabase for new record"
echo "   - Check Vercel logs: vercel logs"
echo ""
echo "5. Read the full documentation:"
echo "   docs/ELEVENLABS_WEBHOOK_SETUP.md"
echo "   docs/WEBHOOK_QUICK_REFERENCE.md"
echo ""

echo "✅ Setup script complete!"
echo ""
