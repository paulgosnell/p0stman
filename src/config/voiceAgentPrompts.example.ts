/**
 * EXAMPLE: How to use Voice Agent Prompts Configuration
 *
 * This file demonstrates how to integrate section-specific prompts
 * with the ElevenLabs voice agent implementation.
 */

import { Conversation } from '@elevenlabs/client';
import { getVoiceAgentConfig, hasSectionConfig } from './voiceAgentPrompts';

/**
 * Example 1: Start a conversation with section-specific prompt
 */
export async function startSectionVoiceAgent(
  sectionId: string,
  agentId: string,
  apiKey: string
) {
  // Get the configuration for this section
  const config = getVoiceAgentConfig(sectionId);

  console.log(`Starting voice agent for: ${config.sectionName}`);
  console.log(`Expertise areas:`, config.expertise);

  // Start ElevenLabs conversation with section-specific overrides
  const conversation = await Conversation.startSession({
    agentId,
    apiKey,
    overrides: {
      agent: {
        prompt: {
          prompt: config.prompt,
          llm: "gpt-4o", // or whatever model you're using
        },
        firstMessage: config.firstMessage,
        language: "en", // Can be made dynamic
      },
    },
    onConnect: () => {
      console.log(`Connected to ${config.sectionName} voice agent`);
    },
    onDisconnect: () => {
      console.log(`Disconnected from ${config.sectionName} voice agent`);
    },
    onError: (error) => {
      console.error(`Error in ${config.sectionName} voice agent:`, error);
    },
  });

  return conversation;
}

/**
 * Example 2: React component integration
 */
import React, { useState } from 'react';
import VoiceAgentOverlay from '../components/voice-agent/VoiceAgentOverlay';

interface SectionVoiceAgentProps {
  sectionId: 'cta' | 'services' | 'process' | 'contact' | 'homepage';
  agentId: string;
  apiKey: string;
}

export function SectionVoiceAgent({ sectionId, agentId, apiKey }: SectionVoiceAgentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const config = getVoiceAgentConfig(sectionId);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-full"
      >
        Talk to POSTMAN about {config.sectionName}
      </button>

      {/* You would need to extend VoiceAgentOverlay to accept section config */}
      <VoiceAgentOverlay
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        agentId={agentId}
        apiKey={apiKey}
        // sectionConfig={config} // Pass the config to override prompts
      />
    </div>
  );
}

/**
 * Example 3: Dynamic agent button placement
 */
export function getSectionAgentButton(sectionId: string) {
  if (!hasSectionConfig(sectionId)) {
    console.warn(`No voice agent config for section: ${sectionId}`);
    return null;
  }

  const config = getVoiceAgentConfig(sectionId);

  return {
    label: `Ask about ${config.sectionName}`,
    icon: '🎙️',
    tooltip: config.firstMessage,
    expertise: config.expertise,
    shouldCollectEmail: config.collectEmail,
  };
}

/**
 * Example 4: Homepage with section-aware voice agent
 */
export function HomepageWithContextualAgent() {
  const [currentSection, setCurrentSection] = useState<string>('homepage');
  const [isAgentOpen, setIsAgentOpen] = useState(false);

  // Track which section the user is viewing
  const handleSectionView = (sectionId: string) => {
    setCurrentSection(sectionId);
    console.log(`User viewing: ${sectionId}`);

    const config = getVoiceAgentConfig(sectionId);
    console.log(`Voice agent ready with expertise in:`, config.expertise);
  };

  return (
    <div>
      {/* Your homepage sections */}
      <section id="hero" onMouseEnter={() => handleSectionView('homepage')}>
        {/* Hero content */}
      </section>

      <section id="services" onMouseEnter={() => handleSectionView('services')}>
        {/* Services content */}
      </section>

      <section id="process" onMouseEnter={() => handleSectionView('process')}>
        {/* Process content */}
      </section>

      <section id="cta" onMouseEnter={() => handleSectionView('cta')}>
        {/* CTA content */}
      </section>

      {/* Floating voice agent button - context switches based on section */}
      <button
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 rounded-full"
        onClick={() => setIsAgentOpen(true)}
        title={getVoiceAgentConfig(currentSection).firstMessage}
      >
        🎙️
      </button>
    </div>
  );
}

/**
 * Example 5: Logging conversation context for analytics
 */
export function logAgentInteraction(
  sectionId: string,
  eventType: 'started' | 'ended' | 'email_collected',
  metadata?: Record<string, any>
) {
  const config = getVoiceAgentConfig(sectionId);

  const logData = {
    timestamp: new Date().toISOString(),
    sectionId,
    sectionName: config.sectionName,
    expertise: config.expertise,
    collectsEmail: config.collectEmail,
    eventType,
    ...metadata,
  };

  console.log('Voice agent interaction:', logData);

  // Send to your analytics service
  // analytics.track('voice_agent_interaction', logData);
}
