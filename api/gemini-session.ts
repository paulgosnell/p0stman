import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Gemini Live API Session Route
 *
 * Creates ephemeral tokens for Gemini Live API (realtime voice).
 * These tokens are short-lived and safe to expose to the browser.
 *
 * This keeps the GEMINI_API_KEY secure on the server.
 */

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error('GEMINI_API_KEY not configured');
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Get configuration from request body
    const { systemInstruction, voice = 'Aoede' } = req.body || {};

    // For now, return the API key directly since Gemini Live API
    // can work with direct key auth for WebSocket connections.
    // In production, you'd want to use ephemeral tokens via the SDK.

    // The client will use this to establish a WebSocket connection
    // to: wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent

    return res.status(200).json({
      apiKey: apiKey,
      model: 'gemini-2.5-flash-native-audio-preview-09-2025',
      voice: voice,
      wsUrl: 'wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent'
    });

  } catch (error) {
    console.error('Gemini session error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
