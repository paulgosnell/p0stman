/**
 * OpenAI Realtime Configuration
 *
 * Central configuration for OpenAI Realtime voice agent.
 * Update the model here when new versions are released.
 */

// OpenAI Realtime model - GA version
// See: https://platform.openai.com/docs/guides/realtime
export const OPENAI_REALTIME_MODEL = 'gpt-4o-realtime-preview-2024-12-17';

// WebRTC endpoint for OpenAI Realtime
export const OPENAI_REALTIME_URL = `https://api.openai.com/v1/realtime?model=${OPENAI_REALTIME_MODEL}`;

// Available voices for OpenAI Realtime
// Note: cedar and marin are exclusive to Realtime API
export const OPENAI_REALTIME_VOICES = [
  'alloy',
  'ash',
  'ballad',
  'coral',
  'echo',
  'sage',
  'shimmer',
  'verse',
  'cedar',  // Realtime API exclusive - recommended for assistant quality
  'marin',  // Realtime API exclusive - recommended for assistant quality
] as const;

export type OpenAIRealtimeVoice = (typeof OPENAI_REALTIME_VOICES)[number];

// Default voice (cedar recommended for best assistant quality)
export const DEFAULT_VOICE: OpenAIRealtimeVoice = 'coral';

// Voice Activity Detection (VAD) defaults
export const DEFAULT_VAD_CONFIG = {
  type: 'server_vad' as const,
  threshold: 0.5,
  prefix_padding_ms: 300,
  silence_duration_ms: 500,
};

// Transcription model
export const TRANSCRIPTION_MODEL = 'whisper-1';

/**
 * Voice Style Instructions
 *
 * These instructions are appended to the system prompt to control
 * how the AI speaks. gpt-realtime is trained to follow fine-grained
 * voice instructions like pace, tone, and emotional expression.
 *
 * Examples from OpenAI:
 * - "speak quickly and professionally"
 * - "speak empathetically in a French accent"
 * - "talk slowly and clearly"
 * - "inject emotion into your voice"
 * - "laugh frequently"
 *
 * @see https://openai.com/index/introducing-gpt-realtime/
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
 * Build complete instructions with voice style
 * Combines the section-specific prompt with voice style instructions
 */
export function buildInstructionsWithVoiceStyle(
  sectionPrompt: string,
  voiceStyleOverride?: string
): string {
  const voiceStyle = voiceStyleOverride || DEFAULT_VOICE_STYLE_INSTRUCTIONS;
  return `${sectionPrompt}

${voiceStyle}`;
}
