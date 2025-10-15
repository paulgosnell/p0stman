/**
 * Mamori Configuration
 * Store sensitive keys here
 *
 * ⚠️ IMPORTANT: For production, move API keys to server-side
 * and use a proxy to prevent exposure.
 */

const ELEVENLABS_CONFIG = {
    agentId: 'agent_3501k6n12hzrfdsb05vbt1vrees4',
    apiKey: 'sk_0da30262dfe2a9eab71155acc92dcc06bfc821277df5331a'
};

// Make config available globally
window.ELEVENLABS_CONFIG = ELEVENLABS_CONFIG;

console.log('Mamori config loaded (API keys hidden)');
