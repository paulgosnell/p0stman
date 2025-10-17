import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

// Type definitions for ElevenLabs webhook payload
interface TranscriptEntry {
  role: 'user' | 'agent';
  message: string | null;
  time_in_call_secs: number;
  source_medium?: 'audio' | 'text';
  interrupted?: boolean;
  tool_calls?: any[];
  tool_results?: any[];
}

interface DataCollection {
  user_email?: string;
  user_name?: string;
  company_name?: string;
  phone_number?: string;
  interest_level?: 'high' | 'medium' | 'low' | 'none';
  budget_range?: string;
  timeline?: string;
  specific_interest?: string;
  page_section?: string;
  [key: string]: any;
}

interface WebhookPayload {
  conversation_id: string;
  agent_id: string;
  status: 'initiated' | 'in-progress' | 'processing' | 'done' | 'failed';
  transcript: TranscriptEntry[];
  analysis: {
    call_successful: string;
    data_collection: DataCollection;
    evaluation_criteria_results?: any;
  } | null;
  metadata: {
    start_time_unix_secs: number;
    call_duration_secs: number;
    main_language: string | null;
    termination_reason?: string;
  };
  has_audio?: boolean;
  has_user_audio?: boolean;
  has_response_audio?: boolean;
}

// HMAC signature verification for webhook security
function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  try {
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(payload);
    const expectedSignature = hmac.digest('hex');

    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}

// Save conversation data to Supabase
async function saveToSupabase(data: WebhookPayload) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase configuration');
    return;
  }

  const collectedData = data.analysis?.data_collection || {};

  const conversationRecord = {
    conversation_id: data.conversation_id,
    agent_id: data.agent_id,
    status: data.status,
    email: collectedData.user_email || null,
    name: collectedData.user_name || null,
    company: collectedData.company_name || null,
    phone: collectedData.phone_number || null,
    interest_level: collectedData.interest_level || null,
    budget_range: collectedData.budget_range || null,
    timeline: collectedData.timeline || null,
    specific_interest: collectedData.specific_interest || null,
    page_section: collectedData.page_section || null,
    call_duration_secs: data.metadata.call_duration_secs,
    main_language: data.metadata.main_language || null,
    call_successful: data.analysis?.call_successful === 'success',
    transcript: data.transcript,
    full_data: collectedData,
    created_at: new Date(data.metadata.start_time_unix_secs * 1000).toISOString()
  };

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/elevenlabs_conversations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseServiceKey,
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(conversationRecord)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Supabase insert failed: ${response.status} - ${errorText}`);
    }

    console.log('Successfully saved to Supabase:', data.conversation_id);
  } catch (error) {
    console.error('Failed to save to Supabase:', error);
    // Don't throw - we don't want to fail the webhook
  }
}

// Send follow-up email via EmailJS
async function sendFollowUpEmail(data: DataCollection, conversationId: string) {
  if (!data.user_email) {
    console.log('No email to send follow-up to');
    return;
  }

  // EmailJS public endpoint
  const emailJsServiceId = process.env.EMAILJS_SERVICE_ID || 'service_4kl2tlf';
  const emailJsTemplateId = process.env.EMAILJS_TEMPLATE_ID || 'template_e1jmkqa';
  const emailJsPublicKey = process.env.EMAILJS_PUBLIC_KEY || '83jOrcigOwx0BxhWm';

  const templateParams = {
    to_email: data.user_email,
    to_name: data.user_name || 'there',
    name: data.user_name || 'there',
    email: data.user_email,
    company: data.company_name || 'N/A',
    interest: data.specific_interest || 'AI solutions',
    interest_level: data.interest_level || 'medium',
    conversation_id: conversationId,
    form_type: 'voice_agent_follow_up',
    message: `Thank you for your interest in our AI solutions. We received your inquiry about ${data.specific_interest || 'our services'}.`,
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: emailJsServiceId,
        template_id: emailJsTemplateId,
        user_id: emailJsPublicKey,
        template_params: templateParams,
      }),
    });

    if (!response.ok) {
      throw new Error(`EmailJS failed: ${response.status}`);
    }

    console.log('Follow-up email sent to:', data.user_email);
  } catch (error) {
    console.error('Failed to send email:', error);
    // Don't throw - email is not critical for webhook success
  }
}

// Send Slack notification for high-interest leads
async function notifySlack(data: DataCollection, conversationId: string) {
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

  // Only notify for high-interest leads
  if (!slackWebhookUrl || data.interest_level !== 'high') {
    return;
  }

  const message = {
    text: '🔥 Hot Lead from Voice Agent!',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*🔥 Hot Lead from Voice Agent*\n\n*Email:* ${data.user_email}\n*Name:* ${data.user_name || 'Not provided'}\n*Company:* ${data.company_name || 'Not provided'}\n*Interest:* ${data.specific_interest || 'General inquiry'}\n*Interest Level:* ${data.interest_level}`
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Budget Range:*\n${data.budget_range || 'Not discussed'}`
          },
          {
            type: 'mrkdwn',
            text: `*Timeline:*\n${data.timeline || 'Not discussed'}`
          }
        ]
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'View Details'
            },
            url: `https://aupnsxzkwispcjniacqo.supabase.co/project/default/editor/28881?schema=public`,
            style: 'primary'
          }
        ]
      }
    ]
  };

  try {
    const response = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    });

    if (!response.ok) {
      throw new Error(`Slack notification failed: ${response.status}`);
    }

    console.log('Slack notification sent for high-interest lead');
  } catch (error) {
    console.error('Failed to send Slack notification:', error);
  }
}

// Main webhook handler
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Webhook received from ElevenLabs');

  try {
    // Verify webhook signature for security
    const signature = req.headers['x-elevenlabs-signature'] as string;
    const webhookSecret = process.env.ELEVENLABS_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error('ELEVENLABS_WEBHOOK_SECRET not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    if (!signature) {
      console.warn('Missing signature header');
      return res.status(401).json({ error: 'Missing signature' });
    }

    const payload = JSON.stringify(req.body);

    if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
      console.error('Invalid webhook signature');
      return res.status(401).json({ error: 'Invalid signature' });
    }

    console.log('Signature verified successfully');

    // Parse the payload
    const data: WebhookPayload = req.body;

    console.log('Processing conversation:', data.conversation_id, 'Status:', data.status);

    // Only process completed conversations
    if (data.status !== 'done') {
      console.log('Conversation not complete yet, skipping processing');
      return res.status(200).json({ message: 'Conversation not complete yet' });
    }

    // Extract collected data
    const collectedData = data.analysis?.data_collection || {};

    console.log('Data collected:', {
      hasEmail: !!collectedData.user_email,
      hasName: !!collectedData.user_name,
      interestLevel: collectedData.interest_level
    });

    // Process in parallel for speed (non-blocking)
    const promises = [
      // Save to database
      saveToSupabase(data),
    ];

    // Send follow-up email if we have an email
    if (collectedData.user_email) {
      promises.push(
        sendFollowUpEmail(collectedData, data.conversation_id),
        notifySlack(collectedData, data.conversation_id)
      );
    }

    // Execute all operations in parallel
    await Promise.allSettled(promises);

    // IMPORTANT: Always return 200 OK to prevent webhook auto-disable
    return res.status(200).json({
      success: true,
      message: 'Webhook processed successfully',
      conversation_id: data.conversation_id,
      email_collected: !!collectedData.user_email
    });

  } catch (error) {
    console.error('Webhook processing error:', error);

    // IMPORTANT: Still return 200 to prevent auto-disable
    // Log the error for debugging but don't fail the webhook
    return res.status(200).json({
      success: false,
      message: 'Webhook received but processing encountered errors',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
