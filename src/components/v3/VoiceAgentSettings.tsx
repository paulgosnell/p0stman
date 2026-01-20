import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mic, Video } from 'lucide-react';
import { GEMINI_LIVE_VOICES, type GeminiLiveVoice } from '../../config/gemini-realtime';
import { SIMLI_FACES, type SimliFaceKey } from '../../hooks/useSimliAvatar';

export interface VoiceSettings {
  voice: GeminiLiveVoice;
  silenceDuration: number;
  threshold: number;
  avatar: SimliFaceKey;
}

interface VoiceAgentSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  settings: VoiceSettings;
  onSettingsChange: (settings: VoiceSettings) => void;
}

const voiceDescriptions: Record<GeminiLiveVoice, string> = {
  Aoede: 'Bright, musical',
  Charon: 'Deep, authoritative',
  Fenrir: 'Strong, confident',
  Kore: 'Warm, nurturing',
  Puck: 'Playful, energetic',
  Zephyr: 'Calm, breeze-like',
};

export default function VoiceAgentSettings({
  isOpen,
  onClose,
  settings,
  onSettingsChange,
}: VoiceAgentSettingsProps) {
  const handleVoiceChange = (voice: GeminiLiveVoice) => {
    onSettingsChange({ ...settings, voice });
  };

  const handleSilenceDurationChange = (silenceDuration: number) => {
    onSettingsChange({ ...settings, silenceDuration });
  };

  const handleThresholdChange = (threshold: number) => {
    onSettingsChange({ ...settings, threshold });
  };

  const handleAvatarChange = (avatar: SimliFaceKey) => {
    onSettingsChange({ ...settings, avatar });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Settings Panel */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-0 top-0 h-full w-full max-w-md bg-gray-950 border-r border-white/10 z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-light text-white">AI Agent Settings</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>
              </div>

              {/* Voice Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Mic className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-medium text-white uppercase tracking-wider">Voice</h3>
                </div>

                {/* Voice Selection */}
                <div className="mb-5">
                  <p className="text-xs text-gray-500 mb-3">
                    Choose the voice personality for your AI assistant
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {GEMINI_LIVE_VOICES.map((voice) => (
                      <button
                        key={voice}
                        onClick={() => handleVoiceChange(voice)}
                        className={`p-3 rounded-lg text-left transition-all ${
                          settings.voice === voice
                            ? 'bg-blue-600 text-white'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-sm font-medium">{voice}</div>
                        <div className={`text-xs ${settings.voice === voice ? 'text-blue-200' : 'text-gray-500'}`}>
                          {voiceDescriptions[voice]}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Microphone Sensitivity */}
                <div className="mb-5">
                  <h4 className="text-xs font-medium text-white/70 mb-2">Microphone Sensitivity</h4>
                  <p className="text-xs text-gray-500 mb-3">
                    Higher = requires louder speech to activate
                  </p>
                  <div className="flex gap-2">
                    {[
                      { value: 0.3, label: 'More Sensitive' },
                      { value: 0.5, label: 'Balanced' },
                      { value: 0.7, label: 'Less Sensitive' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleThresholdChange(option.value)}
                        className={`flex-1 py-2 px-3 rounded-lg text-xs transition-all ${
                          settings.threshold === option.value
                            ? 'bg-blue-600 text-white'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pause Detection */}
                <div>
                  <h4 className="text-xs font-medium text-white/70 mb-2">Pause Detection</h4>
                  <p className="text-xs text-gray-500 mb-3">
                    How long to wait after you stop speaking
                  </p>
                  <div className="flex gap-2">
                    {[
                      { value: 300, label: 'Quick', sublabel: '300ms' },
                      { value: 500, label: 'Balanced', sublabel: '500ms' },
                      { value: 1000, label: 'Patient', sublabel: '1s' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSilenceDurationChange(option.value)}
                        className={`flex-1 py-2 px-3 rounded-lg text-center transition-all ${
                          settings.silenceDuration === option.value
                            ? 'bg-blue-600 text-white'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-xs font-medium">{option.label}</div>
                        <div className={`text-[10px] ${settings.silenceDuration === option.value ? 'text-blue-200' : 'text-gray-500'}`}>
                          {option.sublabel}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-6" />

              {/* Video Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Video className="w-4 h-4 text-purple-400" />
                  <h3 className="text-sm font-medium text-white uppercase tracking-wider">Video</h3>
                </div>

                {/* Avatar Selection */}
                <div>
                  <p className="text-xs text-gray-500 mb-3">
                    Choose an AI teammate to appear on video calls
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {(Object.keys(SIMLI_FACES) as SimliFaceKey[]).slice(0, 9).map((key) => (
                      <button
                        key={key}
                        onClick={() => handleAvatarChange(key)}
                        className={`p-3 rounded-lg text-center transition-all ${
                          settings.avatar === key
                            ? 'bg-purple-600 text-white'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-sm font-medium">{SIMLI_FACES[key].name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info Note */}
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-xs text-gray-400 leading-relaxed">
                  Configure your preferences before starting a voice or video call. Changes won't affect an active session.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
