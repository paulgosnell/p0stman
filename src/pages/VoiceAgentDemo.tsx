import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GeminiVoiceAgent from '../components/voice-agent/GeminiVoiceAgent';
import { getSectionConfig, getAvailableSections } from '../config/voice-agent-sections';

/**
 * Demo page showing how to use SectionVoiceAgent component in different ways
 */
export default function VoiceAgentDemo() {
  const [selectedSection, setSelectedSection] = useState('cta');
  const [placement, setPlacement] = useState<'inline' | 'floating'>('inline');
  const [textOnly, setTextOnly] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showFloatingAgent, setShowFloatingAgent] = useState(true);

  const config = getSectionConfig(selectedSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            Section Voice Agent Demo
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Reusable voice agent component that can be deployed anywhere on your site
          </p>
        </motion.div>

        {/* Configuration Panel */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20">
          <h2 className="text-2xl font-bold mb-6">Component Configuration</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Section Selector */}
            <div>
              <label className="block text-sm font-medium mb-2">Section</label>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {getAvailableSections().map((section) => (
                  <option key={section} value={section}>
                    {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>

            {/* Placement Selector */}
            <div>
              <label className="block text-sm font-medium mb-2">Placement</label>
              <select
                value={placement}
                onChange={(e) => setPlacement(e.target.value as 'inline' | 'floating')}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="inline">Inline (full width)</option>
                <option value="floating">Floating (compact)</option>
              </select>
            </div>

            {/* Text Only Toggle */}
            <div>
              <label className="block text-sm font-medium mb-2">Mode</label>
              <button
                onClick={() => setTextOnly(!textOnly)}
                className={`
                  w-full px-4 py-2 rounded-lg font-medium transition-colors
                  ${textOnly
                    ? 'bg-purple-600 hover:bg-purple-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                  }
                `}
              >
                {textOnly ? 'Text-Only Mode' : 'Voice Mode'}
              </button>
            </div>

            {/* Show Transcript Toggle */}
            <div>
              <label className="block text-sm font-medium mb-2">Transcript</label>
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className={`
                  w-full px-4 py-2 rounded-lg font-medium transition-colors
                  ${showTranscript
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gray-600 hover:bg-gray-700'
                  }
                `}
              >
                {showTranscript ? 'Transcript ON' : 'Transcript OFF'}
              </button>
            </div>
          </div>

          {/* Current Config Display */}
          <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
            <h3 className="text-sm font-semibold mb-2 text-gray-400">Current Configuration:</h3>
            <div className="text-sm font-mono text-gray-300 space-y-1">
              <div>Section: <span className="text-blue-400">{selectedSection}</span></div>
              <div>Placement: <span className="text-blue-400">{placement}</span></div>
              <div>Text-Only: <span className="text-blue-400">{textOnly ? 'true' : 'false'}</span></div>
              <div>Show Transcript: <span className="text-blue-400">{showTranscript ? 'true' : 'false'}</span></div>
              <div>Color: <span className="text-blue-400">{config.color}</span></div>
            </div>
          </div>
        </div>

        {/* Live Demo */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20">
          <h2 className="text-2xl font-bold mb-6">Live Demo</h2>

          <div className="max-w-3xl mx-auto">
            <GeminiVoiceAgent
              key={`${selectedSection}-${placement}-${showTranscript}`}
              section={selectedSection}
              prompt={config.prompt}
              firstMessage={config.firstMessage}
              placement={placement}
              buttonText={config.buttonText}
              showTranscript={showTranscript}
              color={config.color}
              icon={config.icon}
              onConversationStart={() => {
                console.log('Conversation started');
              }}
              onConversationEnd={(conversationId) => {
                console.log('Conversation ended:', conversationId);
              }}
              onError={(error) => {
                console.error('Voice agent error:', error);
              }}
            />
          </div>
        </div>

        {/* Code Examples */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20">
          <h2 className="text-2xl font-bold mb-6">Implementation Examples</h2>

          {/* Example 1: CTA Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">1. CTA Section (Inline)</h3>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-gray-300">{`import SectionVoiceAgent from '@/components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '@/config/voice-agent-sections';

export default function CTASection() {
  const config = getSectionConfig('cta');

  return (
    <div className="container mx-auto px-4 py-16">
      <h2>Ready to Get Started?</h2>
      <p>Talk to our AI assistant to learn more</p>

      <SectionVoiceAgent
        section="cta"
        prompt={config.prompt}
        firstMessage={config.firstMessage}
        placement="inline"
        color={config.color}
        icon={config.icon}
        buttonText={config.buttonText}
      />
    </div>
  );
}`}</code>
            </pre>
          </div>

          {/* Example 2: Floating Button */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">2. Floating Button (Any Page)</h3>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-gray-300">{`import SectionVoiceAgent from '@/components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '@/config/voice-agent-sections';

export default function PricingPage() {
  const config = getSectionConfig('pricing');

  return (
    <>
      {/* Your page content */}
      <div className="container mx-auto px-4 py-16">
        <h1>Pricing</h1>
        {/* ... pricing content ... */}
      </div>

      {/* Floating voice agent - fixed to bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <SectionVoiceAgent
          section="pricing"
          prompt={config.prompt}
          firstMessage={config.firstMessage}
          placement="floating"
          color="green"
          icon="💰"
        />
      </div>
    </>
  );
}`}</code>
            </pre>
          </div>

          {/* Example 3: Text-Only Chat */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-green-400">3. Text-Only Chat Mode</h3>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-gray-300">{`import SectionVoiceAgent from '@/components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '@/config/voice-agent-sections';

export default function ContactPage() {
  const config = getSectionConfig('contact');

  return (
    <div className="container mx-auto px-4 py-16">
      <h2>Contact Us</h2>

      {/* Text-only chat for mobile or accessibility */}
      <SectionVoiceAgent
        section="contact"
        prompt={config.prompt}
        firstMessage={config.firstMessage}
        placement="inline"
        textOnly={true}
        showTranscript={true}
        color="blue"
        icon="💬"
        buttonText="Chat with Us"
      />
    </div>
  );
}`}</code>
            </pre>
          </div>

          {/* Example 4: Custom Callbacks */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">4. With Custom Callbacks</h3>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-gray-300">{`import { useState } from 'react';
import SectionVoiceAgent from '@/components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '@/config/voice-agent-sections';

export default function ServicesPage() {
  const [conversationActive, setConversationActive] = useState(false);
  const config = getSectionConfig('services');

  return (
    <div className="container mx-auto px-4 py-16">
      {conversationActive && (
        <div className="bg-blue-100 p-4 rounded-lg mb-4">
          Active conversation in progress...
        </div>
      )}

      <SectionVoiceAgent
        section="services"
        prompt={config.prompt}
        firstMessage={config.firstMessage}
        placement="inline"
        onConversationStart={() => {
          setConversationActive(true);
          console.log('Conversation started');
          // Track in analytics
          // gtag('event', 'voice_agent_start', { section: 'services' });
        }}
        onConversationEnd={(conversationId) => {
          setConversationActive(false);
          console.log('Conversation ended:', conversationId);
          // Track in analytics
          // gtag('event', 'voice_agent_end', { conversation_id: conversationId });
        }}
        onError={(error) => {
          console.error('Error:', error);
          // Show user-friendly error message
          // toast.error('Failed to connect. Please try again.');
        }}
      />
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold mb-6">Component Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <FeatureItem
                icon="🎯"
                title="Section-Specific Prompts"
                description="Each section can have its own custom AI behavior and conversation style"
              />
              <FeatureItem
                icon="🎨"
                title="Flexible Placement"
                description="Use inline for full-width integration or floating for compact button"
              />
              <FeatureItem
                icon="💬"
                title="Text-Only Mode"
                description="Enable chat mode for mobile users or accessibility requirements"
              />
              <FeatureItem
                icon="🌐"
                title="Multi-Language Support"
                description="Built-in language selector for 6+ languages (en, es, fr, it, da, ar)"
              />
            </div>

            <div className="space-y-4">
              <FeatureItem
                icon="📝"
                title="Live Transcript"
                description="Optional transcript display to show conversation in real-time"
              />
              <FeatureItem
                icon="🎵"
                title="Waveform Visualization"
                description="Animated waveform that responds to voice frequency data"
              />
              <FeatureItem
                icon="⚡"
                title="Error Handling"
                description="Comprehensive error handling with user-friendly messages"
              />
              <FeatureItem
                icon="📊"
                title="Callback Hooks"
                description="Track conversation lifecycle with onStart, onEnd, and onError callbacks"
              />
            </div>
          </div>
        </div>

        {/* Props Documentation */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mt-12 border border-white/20">
          <h2 className="text-2xl font-bold mb-6">Component Props</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-3 px-4">Prop</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Required</th>
                  <th className="text-left py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <PropRow
                  name="section"
                  type="string"
                  required={true}
                  description="Section identifier (e.g., 'cta', 'services', 'pricing')"
                />
                <PropRow
                  name="prompt"
                  type="string"
                  required={true}
                  description="Custom system prompt for this section"
                />
                <PropRow
                  name="firstMessage"
                  type="string"
                  required={false}
                  description="Optional first message override"
                />
                <PropRow
                  name="placement"
                  type="'inline' | 'floating'"
                  required={false}
                  description="Display mode (default: 'inline')"
                />
                <PropRow
                  name="buttonText"
                  type="string"
                  required={false}
                  description="Optional button text"
                />
                <PropRow
                  name="textOnly"
                  type="boolean"
                  required={false}
                  description="Enable text-only chat mode (default: false)"
                />
                <PropRow
                  name="showTranscript"
                  type="boolean"
                  required={false}
                  description="Show live transcript (default: false)"
                />
                <PropRow
                  name="color"
                  type="'blue' | 'purple' | 'green' | 'orange' | 'pink'"
                  required={false}
                  description="Theme color (default: 'blue')"
                />
                <PropRow
                  name="icon"
                  type="string"
                  required={false}
                  description="Emoji icon for button (default: '🎤')"
                />
                <PropRow
                  name="autoStart"
                  type="boolean"
                  required={false}
                  description="Auto-start on mount (default: false)"
                />
                <PropRow
                  name="onConversationStart"
                  type="() => void"
                  required={false}
                  description="Callback when conversation starts"
                />
                <PropRow
                  name="onConversationEnd"
                  type="(conversationId?: string) => void"
                  required={false}
                  description="Callback when conversation ends"
                />
                <PropRow
                  name="onError"
                  type="(error: any) => void"
                  required={false}
                  description="Callback when error occurs"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Floating Agent Demo - Always visible */}
      {showFloatingAgent && (
        <div className="fixed bottom-6 right-6 z-50">
          <SectionVoiceAgent
            section="home"
            prompt={getSectionConfig('home').prompt}
            firstMessage={getSectionConfig('home').firstMessage}
            placement="floating"
            color="blue"
            icon="🤖"
          />
        </div>
      )}

      {/* Toggle floating agent */}
      <button
        onClick={() => setShowFloatingAgent(!showFloatingAgent)}
        className="fixed bottom-6 left-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors border border-gray-600"
      >
        {showFloatingAgent ? 'Hide' : 'Show'} Floating Agent
      </button>
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function PropRow({ name, type, required, description }: {
  name: string;
  type: string;
  required: boolean;
  description: string;
}) {
  return (
    <tr>
      <td className="py-3 px-4 font-mono text-blue-400">{name}</td>
      <td className="py-3 px-4 font-mono text-xs text-gray-400">{type}</td>
      <td className="py-3 px-4">
        {required ? (
          <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">Required</span>
        ) : (
          <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">Optional</span>
        )}
      </td>
      <td className="py-3 px-4 text-gray-300">{description}</td>
    </tr>
  );
}
