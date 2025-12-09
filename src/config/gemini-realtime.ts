/**
 * Gemini Live API Configuration
 *
 * Central configuration for Gemini Live voice agent.
 * Uses WebSocket-based bidirectional streaming.
 */

// Gemini Live model for native audio
export const GEMINI_LIVE_MODEL = 'gemini-2.5-flash-preview-native-audio-dialog';

// WebSocket endpoint for Gemini Live API
export const GEMINI_LIVE_WS_URL = 'wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent';

// Available voices for Gemini Live
// See: https://ai.google.dev/gemini-api/docs/live#voices
export const GEMINI_LIVE_VOICES = [
  'Aoede',
  'Charon',
  'Fenrir',
  'Kore',
  'Puck',
  'Zephyr',
] as const;

export type GeminiLiveVoice = (typeof GEMINI_LIVE_VOICES)[number];

// Default voice
export const DEFAULT_GEMINI_VOICE: GeminiLiveVoice = 'Puck';

// Audio format configuration
export const AUDIO_CONFIG = {
  // Input: 16-bit PCM, 16kHz, mono
  inputSampleRate: 16000,
  inputChannels: 1,
  inputBitsPerSample: 16,
  // Output: 24kHz
  outputSampleRate: 24000,
};

/**
 * Voice Style Instructions for Gemini
 */
export const DEFAULT_VOICE_STYLE_INSTRUCTIONS = `
VOICE STYLE INSTRUCTIONS:
- Speak in a warm, friendly, and conversational tone
- Use a natural pace - not too fast, not too slow
- Be enthusiastic but professional
- Use appropriate pauses for emphasis
- Sound genuinely interested and engaged
- Avoid sounding robotic or monotone
- Match the user's energy level when appropriate
`.trim();

/**
 * Build setup message for Gemini Live API
 */
export function buildGeminiSetupMessage(
  systemInstruction: string,
  voice: GeminiLiveVoice = DEFAULT_GEMINI_VOICE
) {
  return {
    setup: {
      model: `models/${GEMINI_LIVE_MODEL}`,
      generationConfig: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: voice,
            },
          },
        },
      },
      systemInstruction: {
        parts: [{ text: systemInstruction }],
      },
    },
  };
}
