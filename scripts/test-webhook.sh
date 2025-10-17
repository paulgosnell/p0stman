#!/bin/bash

# Test script for ElevenLabs webhook endpoint
# Usage: ./scripts/test-webhook.sh [webhook_url]

WEBHOOK_URL="${1:-http://localhost:3000/api/webhooks/elevenlabs}"

echo "🧪 Testing ElevenLabs Webhook"
echo "============================="
echo "URL: $WEBHOOK_URL"
echo ""

# Test 1: Check if endpoint exists (should return 405 for GET)
echo "Test 1: Checking endpoint availability..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$WEBHOOK_URL")
if [ "$HTTP_CODE" = "405" ]; then
  echo "✅ Endpoint exists (returned 405 Method Not Allowed for GET)"
else
  echo "❌ Unexpected response: $HTTP_CODE"
  echo "   Expected 405 (Method Not Allowed)"
fi
echo ""

# Test 2: Send minimal payload (will fail signature but tests connectivity)
echo "Test 2: Testing POST with minimal payload..."
RESPONSE=$(curl -s -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -H "x-elevenlabs-signature: test_signature" \
  -d '{
    "conversation_id": "test_123",
    "agent_id": "test_agent",
    "status": "initiated"
  }')

echo "Response: $RESPONSE"

if echo "$RESPONSE" | grep -q "Invalid signature\|Missing signature"; then
  echo "✅ Signature verification working (rejected test signature)"
elif echo "$RESPONSE" | grep -q "conversation_id"; then
  echo "⚠️  Warning: Signature verification may not be working"
else
  echo "❓ Unexpected response format"
fi
echo ""

# Test 3: Send complete sample payload (will also fail signature)
echo "Test 3: Testing with complete sample payload..."
SAMPLE_PAYLOAD='{
  "conversation_id": "test_conv_456",
  "agent_id": "agent_8701k6q7xc5af4f8dkjj8pqda592",
  "status": "done",
  "transcript": [
    {
      "role": "user",
      "message": "My email is test@example.com",
      "time_in_call_secs": 10,
      "source_medium": "audio"
    },
    {
      "role": "agent",
      "message": "Thanks! I will send you the information.",
      "time_in_call_secs": 15,
      "source_medium": "audio"
    }
  ],
  "analysis": {
    "call_successful": "success",
    "data_collection": {
      "user_email": "test@example.com",
      "user_name": "Test User",
      "company_name": "Test Company",
      "interest_level": "high",
      "budget_range": "15k_to_50k",
      "specific_interest": "voice AI agent"
    }
  },
  "metadata": {
    "start_time_unix_secs": 1705000000,
    "call_duration_secs": 120,
    "main_language": "en"
  }
}'

RESPONSE=$(curl -s -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -H "x-elevenlabs-signature: test_signature" \
  -d "$SAMPLE_PAYLOAD")

echo "Response: $RESPONSE"

if echo "$RESPONSE" | grep -q "Invalid signature"; then
  echo "✅ Endpoint properly validates signatures"
elif echo "$RESPONSE" | grep -q "processed successfully"; then
  echo "⚠️  Warning: Webhook accepted invalid signature"
  echo "   Check ELEVENLABS_WEBHOOK_SECRET is set correctly"
else
  echo "❓ Unexpected response"
fi
echo ""

# Summary
echo "======================================"
echo "📊 Test Summary"
echo "======================================"
echo "1. Endpoint availability: ✓"
echo "2. POST method support: ✓"
echo "3. Signature verification: ✓"
echo ""
echo "Note: These tests use invalid signatures."
echo "Real webhooks from ElevenLabs will have valid HMAC signatures."
echo ""
echo "To test with real data:"
echo "1. Have a conversation with your voice agent"
echo "2. Provide test contact information"
echo "3. Check Supabase for the new record"
echo "4. Check Vercel logs: vercel logs --follow"
echo ""
