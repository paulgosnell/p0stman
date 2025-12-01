import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { OPENAI_REALTIME_VOICES, type OpenAIRealtimeVoice } from '../../config/openai-realtime';

export interface VoiceSettings {
  voice: OpenAIRealtimeVoice;
  silenceDuration: number;
  threshold: number;
}

interface VoiceAgentSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  settings: VoiceSettings;
  onSettingsChange: (settings: VoiceSettings) => void;
}

const voiceDescriptions: Record<OpenAIRealtimeVoice, string> = {
  alloy: 'Neutral, balanced',
  ash: 'Warm, conversational',
  ballad: 'Soft, melodic',
  coral: 'Clear, professional',
  echo: 'Deep, resonant',
  sage: 'Calm, thoughtful',
  shimmer: 'Bright, energetic',
  verse: 'Natural, conversational',
  cedar: 'Rich, assistant-quality',
  marin: 'Friendly, assistant-quality',
};

export default function VoiceAgentSettings({
  isOpen,
  onClose,
  settings,
  onSettingsChange,
}: VoiceAgentSettingsProps) {
  const handleVoiceChange = (voice: OpenAIRealtimeVoice) => {
    onSettingsChange({ ...settings, voice });
  };

  const handleSilenceDurationChange = (silenceDuration: number) => {
    onSettingsChange({ ...settings, silenceDuration });
  };

  const handleThresholdChange = (threshold: number) => {
    onSettingsChange({ ...settings, threshold });
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
                <h2 className="text-xl font-light text-white">Voice Agent Settings</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>
              </div>

              {/* Voice Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-white mb-2">Voice</h3>
                <p className="text-xs text-gray-500 mb-4">
                  Choose the voice personality for your AI assistant
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {OPENAI_REALTIME_VOICES.map((voice) => (
                    <button
                      key={voice}
                      onClick={() => handleVoiceChange(voice)}
                      className={`p-3 rounded-lg text-left transition-all ${
                        settings.voice === voice
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-sm font-medium capitalize">{voice}</div>
                      <div className={`text-xs ${settings.voice === voice ? 'text-blue-200' : 'text-gray-500'}`}>
                        {voiceDescriptions[voice]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Microphone Sensitivity */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-white mb-2">
                  Microphone Sensitivity
                </h3>
                <p className="text-xs text-gray-500 mb-4">
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
                      className={`flex-1 py-3 px-4 rounded-lg text-sm transition-all ${
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
              <div className="mb-8">
                <h3 className="text-sm font-medium text-white mb-2">
                  Pause Detection
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  How long to wait after you stop speaking before the AI responds
                </p>
                <div className="flex gap-2">
                  {[
                    { value: 300, label: 'Quick', sublabel: '300ms' },
                    { value: 500, label: 'Balanced', sublabel: '500ms' },
                    { value: 1000, label: 'Patient', sublabel: '1000ms' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSilenceDurationChange(option.value)}
                      className={`flex-1 py-3 px-4 rounded-lg text-center transition-all ${
                        settings.silenceDuration === option.value
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-sm font-medium">{option.label}</div>
                      <div className={`text-xs ${settings.silenceDuration === option.value ? 'text-blue-200' : 'text-gray-500'}`}>
                        {option.sublabel}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Info Note */}
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-xs text-gray-400 leading-relaxed">
                  Settings will apply to your next voice conversation. Changes won't affect an active session.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
