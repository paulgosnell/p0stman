import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Chat API Route for Conversational Contact Form
 *
 * Uses Google Gemini 2.5 Flash for intelligent responses to visitor messages.
 * This is a text-based chat endpoint (not realtime voice).
 */

const SYSTEM_PROMPT = `You are the AI assistant for P0STMAN, an AI-powered product studio that ships products at 10-20x the speed of traditional teams.

Your role is to have a natural conversation with visitors who want to:
1. Discuss a potential project (most common)
2. Apply to join our roster (careers)
3. Ask questions about our services

BE CONVERSATIONAL AND BRIEF. Keep responses under 3 sentences unless they ask for details.

Key facts about P0STMAN:
- We ship MVPs in 6 days, full products in 3 weeks
- AI-native workflows (Claude Code, Cursor, etc.)
- Led by Paul Gosnell (20+ years product experience)
- Based in London, work globally
- Pricing: AI agents from $5K, websites from $10K, apps from $20K
- We're always looking for AI-native builders to join our roster

For PROJECT inquiries:
- Ask what they want to build
- Understand their timeline
- Get a sense of budget range
- Offer to schedule a call or have Paul reach out

For CAREERS inquiries:
- We hire AI-native builders, growth hackers, and context engineers
- Flexible contract work
- Ask what they've built recently with AI
- Invite them to share their work

Always be direct, confident, no corporate fluff. Match P0STMAN's tone: we're builders, not salespeople.

If they've shared enough info for us to follow up, say something like "Perfect, we've got what we need. Paul will reach out within 24 hours." or similar.

IMPORTANT: You're chatting in a contact form. Be helpful but concise. Don't write essays.`;

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

    const { messages, userInfo } = req.body || {};

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array required' });
    }

    // Build context about the user if we have it
    let userContext = '';
    if (userInfo?.name) {
      userContext += `\nVisitor's name: ${userInfo.name}`;
    }
    if (userInfo?.email) {
      userContext += `\nVisitor's email: ${userInfo.email}`;
    }
    if (userInfo?.fromCareers) {
      userContext += `\nNote: Visitor came from the Careers page - they're likely interested in joining the roster.`;
    }
    if (userInfo?.role) {
      userContext += `\nThey're interested in the "${userInfo.role}" role.`;
    }

    const systemInstruction = SYSTEM_PROMPT + (userContext ? `\n\nCONTEXT ABOUT THIS VISITOR:${userContext}` : '');

    // Convert messages to Gemini format
    const geminiContents = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: geminiContents,
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          },
          generationConfig: {
            maxOutputTokens: 300,
            temperature: 0.7
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini chat failed:', response.status, errorText);
      return res.status(response.status).json({
        error: 'Failed to get response',
        details: errorText
      });
    }

    const data = await response.json();
    const assistantMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response. Please try again.";

    return res.status(200).json({
      message: assistantMessage
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
