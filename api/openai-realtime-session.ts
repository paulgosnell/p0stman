import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * OpenAI Realtime Session API Route
 *
 * Creates ephemeral tokens for OpenAI Realtime API.
 * These tokens are short-lived (60 seconds) and safe to expose to the browser.
 *
 * This keeps the OPENAI_API_KEY secure on the server.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error('OPENAI_API_KEY not configured');
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Get optional voice preference from request body
    const { voice = 'coral' } = req.body || {};

    // OpenAI Realtime model - GA version (20% cheaper than preview)
    const OPENAI_REALTIME_MODEL = 'gpt-4o-realtime-preview-2024-12-17';

    // Create ephemeral session token from OpenAI
    const response = await fetch('https://api.openai.com/v1/realtime/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: OPENAI_REALTIME_MODEL,
        voice: voice
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI session creation failed:', response.status, errorText);
      return res.status(response.status).json({
        error: 'Failed to create session',
        details: errorText
      });
    }

    const data = await response.json();

    // Return only the client_secret to the browser
    return res.status(200).json({
      client_secret: data.client_secret
    });

  } catch (error) {
    console.error('OpenAI session error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
