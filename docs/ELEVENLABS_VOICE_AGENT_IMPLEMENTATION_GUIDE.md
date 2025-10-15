# ElevenLabs Voice Agent - Complete Implementation Guide

> **Use this guide to implement the exact same ElevenLabs voice agent setup in any React/Vite project.**
> Copy this markdown file into your new project, load Claude, and it can implement everything step-by-step.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Environment Setup](#environment-setup)
5. [File Structure](#file-structure)
6. [Component Implementation](#component-implementation)
7. [Integration](#integration)
8. [Styling](#styling)
9. [Testing](#testing)
10. [Troubleshooting](#troubleshooting)

---

## Overview

This implementation includes:
- **InlineVoiceAgent**: A compact inline version with waveform visualization (uses `@elevenlabs/react` hook)
- **VoiceAgentOverlay**: A full-screen overlay with animated orb (uses `@elevenlabs/client` SDK)
- **VoiceOrb**: Canvas-based animated orb with particle effects
- **LanguageSelector**: Multi-language support with dropdown UI
- **Sound Effects Hook**: Optional audio feedback for interactions

### Key Features
- Real-time waveform animation
- Multi-language support (English, Spanish, French, Italian, Danish, Arabic)
- Canvas-based orb with particle system
- State-aware animations (listening/speaking)
- Framer Motion transitions
- Keyboard controls (ESC to close)
- Mobile responsive

---

## Prerequisites

- React 18+
- Vite (or Create React App/Next.js)
- TypeScript (recommended)
- TailwindCSS
- Framer Motion
- ElevenLabs account with API key and Agent ID

---

## Installation

### 1. Install Dependencies

```bash
npm install @elevenlabs/client @elevenlabs/react framer-motion lucide-react
```

**Dependencies breakdown:**
- `@elevenlabs/client` (v0.7.1+): ElevenLabs SDK for conversational AI
- `@elevenlabs/react` (v0.7.1+): React hooks for ElevenLabs
- `framer-motion` (v11.0.8+): Animation library
- `lucide-react` (v0.344.0+): Icon library

### 2. Verify Package.json

Your `package.json` should include:

```json
{
  "dependencies": {
    "@elevenlabs/client": "^0.7.1",
    "@elevenlabs/react": "^0.7.1",
    "framer-motion": "^11.0.8",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

---

## Environment Setup

### 1. Get ElevenLabs Credentials

1. Sign up at [elevenlabs.io](https://elevenlabs.io)
2. Navigate to **Conversational AI** section
3. Create a new agent or use existing one
4. Copy your **Agent ID**
5. Generate an **API Key** from account settings

### 2. Create Environment Variables

Create or update `.env` file:

```bash
# ElevenLabs Voice Agent Configuration
VITE_ELEVENLABS_AGENT_ID=your_agent_id_here
VITE_ELEVENLABS_API_KEY=your_api_key_here
```

### 3. Update .env.example

```bash
# ElevenLabs Voice Agent Configuration
VITE_ELEVENLABS_AGENT_ID=agent_xxxxxxxxxxxxxxxxxxxxx
VITE_ELEVENLABS_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Add to .gitignore

Ensure `.env` is in your `.gitignore`:

```
.env
.env.local
```

---

## File Structure

Create this folder structure in your project:

```
src/
├── components/
│   └── voice-agent/
│       ├── InlineVoiceAgent.tsx          # Inline waveform version
│       ├── VoiceAgentOverlay.tsx         # Full-screen overlay version
│       ├── VoiceOrb.tsx                  # Canvas-based animated orb
│       ├── LanguageSelector.tsx          # Language picker component
│       ├── useSoundEffects.ts            # Optional sound effects hook
│       └── README.md                     # Component documentation
```

---

## Component Implementation

### 1. InlineVoiceAgent.tsx

**Purpose:** Compact inline voice agent with real-time waveform visualization.

**File:** `src/components/voice-agent/InlineVoiceAgent.tsx`

```tsx
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useConversation } from '@elevenlabs/react';
import { X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

interface InlineVoiceAgentProps {
  isActive: boolean;
  onClose: () => void;
  agentId: string;
}

export default function InlineVoiceAgent({ isActive, onClose, agentId }: InlineVoiceAgentProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const conversation = useConversation();

  // Handle language change - must restart session
  const handleLanguageChange = (newLanguage: string) => {
    const wasActive = conversation.status === 'connected';
    if (wasActive) {
      conversation.endSession();
    }
    setSelectedLanguage(newLanguage);
  };

  const [barHeights, setBarHeights] = useState<number[]>(new Array(60).fill(0));
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (isActive && conversation.status !== 'connected' && conversation.status !== 'connecting') {
      const config: any = { agentId };

      // Add overrides for language if not English
      if (selectedLanguage !== 'en') {
        config.overrides = {
          agent: {
            language: selectedLanguage,
          },
        };
      }

      console.log('Starting session with config:', config);
      conversation.startSession(config);
    }

    return () => {
      if (conversation.status === 'connected') {
        conversation.endSession();
      }
    };
  }, [isActive, conversation.status, selectedLanguage]);

  // Animate waveform based on audio frequency data
  useEffect(() => {
    if (conversation.status !== 'connected') {
      setBarHeights(new Array(60).fill(0));
      return;
    }

    const updateWaveform = () => {
      const frequencyData = conversation.getOutputByteFrequencyData();
      if (frequencyData) {
        const step = Math.floor(frequencyData.length / 60);
        const heights = Array.from({ length: 60 }, (_, i) => {
          const value = frequencyData[i * step] || 0;
          return (value / 255) * 100;
        });
        setBarHeights(heights);
      }
      animationFrameRef.current = requestAnimationFrame(updateWaveform);
    };

    updateWaveform();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [conversation.status]);

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-visible"
    >
      <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-lg border-t border-white/10">
        {/* Header with language selector and close button */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-[9999]">
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
            disabled={false}
          />

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-white/70" />
          </button>
        </div>

        <div className="space-y-4 mt-12 overflow-hidden">
          {/* Live Waveform */}
          <div className="flex items-center justify-center gap-[2px] h-20">
            {barHeights.map((height, i) => (
              <motion.div
                key={i}
                animate={{
                  height: conversation.isSpeaking ? `${Math.max(height, 8)}%` : '8%',
                  opacity: conversation.status === 'connected' ? 1 : 0.3,
                }}
                transition={{
                  duration: 0.1,
                  ease: 'easeOut',
                }}
                className="w-[3px] bg-white/60 rounded-full"
                style={{
                  minHeight: '8%',
                }}
              />
            ))}
          </div>

          {/* Status text */}
          <div className="text-center">
            <p className="text-white/90 font-light text-sm">
              {conversation.status === 'connecting' && 'Connecting...'}
              {conversation.status === 'connected' && !conversation.isSpeaking && 'Listening...'}
              {conversation.status === 'connected' && conversation.isSpeaking && 'Speaking...'}
              {conversation.status === 'disconnected' && 'Disconnected'}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
```

**Key Features:**
- Uses `useConversation()` hook from `@elevenlabs/react`
- Real-time waveform with 60 animated bars
- Reads audio frequency data via `conversation.getOutputByteFrequencyData()`
- Language selection support
- Auto-cleanup on unmount

---

### 2. VoiceAgentOverlay.tsx

**Purpose:** Full-screen overlay with animated orb visualization.

**File:** `src/components/voice-agent/VoiceAgentOverlay.tsx`

```tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Conversation } from '@elevenlabs/client';
import VoiceOrb from './VoiceOrb';
import LanguageSelector from './LanguageSelector';

interface VoiceAgentOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  agentId: string;
  apiKey: string;
}

export default function VoiceAgentOverlay({ isOpen, onClose, agentId, apiKey }: VoiceAgentOverlayProps) {
  const [isActive, setIsActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const [error, setError] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const conversationRef = useRef<Conversation | null>(null);

  // Start conversation
  const startConversation = useCallback(async () => {
    if (!agentId || isActive) return;

    try {
      setConnectionStatus('connecting');
      setError(null);

      // Initialize ElevenLabs conversation with language override
      const conversation = await Conversation.startSession({
        agentId,
        apiKey,
        overrides: {
          agent: {
            language: selectedLanguage,
          },
        },
        onConnect: () => {
          console.log('Connected to ElevenLabs with language:', selectedLanguage);
          setConnectionStatus('connected');
          setIsActive(true);
        },
        onDisconnect: () => {
          console.log('Disconnected from ElevenLabs');
          setConnectionStatus('disconnected');
          setIsActive(false);
          setIsListening(false);
          setIsSpeaking(false);
        },
        onError: (error) => {
          console.error('Conversation error:', error);
          setError('Connection error. Please try again.');
          setConnectionStatus('disconnected');
        },
        onModeChange: (mode) => {
          console.log('Mode changed:', mode);
          setIsListening(mode.mode === 'listening');
          setIsSpeaking(mode.mode === 'speaking');
        }
      });

      conversationRef.current = conversation;

    } catch (err) {
      console.error('Failed to start conversation:', err);
      setError('Failed to start conversation. Please try again.');
      setConnectionStatus('disconnected');
    }
  }, [agentId, apiKey, isActive, selectedLanguage]);

  // End conversation
  const endConversation = useCallback(async () => {
    if (conversationRef.current) {
      try {
        await conversationRef.current.endSession();
      } catch (err) {
        console.error('Error ending conversation:', err);
      }
      conversationRef.current = null;
    }
    setIsActive(false);
    setIsListening(false);
    setIsSpeaking(false);
    setConnectionStatus('disconnected');
  }, []);

  // Handle orb click
  const handleOrbClick = useCallback(() => {
    if (isActive) {
      endConversation();
    } else {
      startConversation();
    }
  }, [isActive, startConversation, endConversation]);

  // Cleanup on unmount or close
  useEffect(() => {
    if (!isOpen && isActive) {
      endConversation();
    }
  }, [isOpen, isActive, endConversation]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Get status text
  const getStatusText = () => {
    if (error) return error;
    if (connectionStatus === 'connecting') return 'Connecting...';
    if (isSpeaking) return 'Speaking...';
    if (isListening) return 'Listening...';
    if (isActive) return 'Tap to end conversation';
    return 'Tap to start talking';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
        >
          {/* Top bar with language selector and close button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.1 }}
            className="absolute top-6 left-6 right-6 md:top-8 md:left-8 md:right-8 flex justify-between items-center"
          >
            {/* Language selector - disabled during active conversation */}
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              disabled={isActive || connectionStatus === 'connecting'}
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Close"
            >
              <X size={28} strokeWidth={2} />
            </button>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="flex flex-col items-center justify-center space-y-8 px-4"
          >
            {/* Orb */}
            <motion.button
              onClick={handleOrbClick}
              disabled={connectionStatus === 'connecting'}
              className="relative cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <VoiceOrb
                isListening={isListening}
                isSpeaking={isSpeaking}
                isActive={isActive}
              />
            </motion.button>

            {/* Status text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center space-y-2"
            >
              <p
                className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${
                  error
                    ? 'text-red-400'
                    : isSpeaking
                    ? 'text-orange-400'
                    : isListening
                    ? 'text-blue-400'
                    : 'text-white'
                }`}
              >
                {getStatusText()}
              </p>

              {/* Subtle instruction */}
              {!isActive && !error && (
                <p className="text-sm text-white/60">
                  Press ESC to close
                </p>
              )}

              {/* Active status indicator */}
              {isActive && (
                <div className="flex items-center justify-center space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full animate-pulse ${
                      isSpeaking ? 'bg-orange-400' : 'bg-blue-400'
                    }`}
                  />
                  <span className="text-xs text-white/70 uppercase tracking-wider">
                    Connected
                  </span>
                </div>
              )}
            </motion.div>

            {/* Error retry button */}
            {error && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={startConversation}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                Try Again
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

**Key Features:**
- Uses `Conversation` class from `@elevenlabs/client`
- Full-screen dark overlay (85% opacity)
- Keyboard ESC support
- Error handling with retry button
- Language selection before starting
- Animated orb visualization

---

### 3. VoiceOrb.tsx

**Purpose:** Canvas-based animated orb with particle effects.

**File:** `src/components/voice-agent/VoiceOrb.tsx`

```tsx
import React, { useEffect, useRef } from 'react';

interface VoiceOrbProps {
  isListening: boolean;
  isSpeaking: boolean;
  isActive: boolean;
}

export default function VoiceOrb({ isListening, isSpeaking, isActive }: VoiceOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const baseRadius = 80;

    let frame = 0;
    const particles: Array<{
      angle: number;
      distance: number;
      speed: number;
      size: number;
      opacity: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        angle: (Math.PI * 2 * i) / 30,
        distance: baseRadius + Math.random() * 20,
        speed: 0.5 + Math.random() * 0.5,
        size: 2 + Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.7
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      frame += 0.02;

      // Determine visual state
      let primaryColor = '#0066FF'; // Electric blue
      let pulseIntensity = 0.3;
      let particleActivity = 0.5;

      if (isSpeaking) {
        primaryColor = '#FF6B35'; // Orange when speaking
        pulseIntensity = 0.8;
        particleActivity = 1.2;
      } else if (isListening) {
        primaryColor = '#0066FF'; // Blue when listening
        pulseIntensity = 0.6;
        particleActivity = 0.9;
      }

      // Breathing/pulsing animation
      const breathe = Math.sin(frame * 2) * pulseIntensity;
      const currentRadius = baseRadius + breathe * 15;

      // Draw outer glow
      const gradient = ctx.createRadialGradient(
        centerX, centerY, currentRadius * 0.5,
        centerX, centerY, currentRadius * 1.5
      );
      gradient.addColorStop(0, `${primaryColor}40`);
      gradient.addColorStop(0.5, `${primaryColor}20`);
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Draw main orb
      const mainGradient = ctx.createRadialGradient(
        centerX - 20, centerY - 20, 0,
        centerX, centerY, currentRadius
      );
      mainGradient.addColorStop(0, '#FFFFFF80');
      mainGradient.addColorStop(0.3, primaryColor);
      mainGradient.addColorStop(1, `${primaryColor}CC`);

      ctx.fillStyle = mainGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius, 0, Math.PI * 2);
      ctx.fill();

      // Draw particles
      particles.forEach((particle, i) => {
        particle.angle += particle.speed * 0.01 * particleActivity;

        const x = centerX + Math.cos(particle.angle) * particle.distance;
        const y = centerY + Math.sin(particle.angle) * particle.distance;

        const particleOpacity = particle.opacity * (isSpeaking ? 1 : 0.6);

        ctx.fillStyle = `rgba(255, 255, 255, ${particleOpacity})`;
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Particle trails when speaking
        if (isSpeaking) {
          const trailLength = 3;
          for (let j = 1; j <= trailLength; j++) {
            const trailAngle = particle.angle - (j * 0.1);
            const trailX = centerX + Math.cos(trailAngle) * particle.distance;
            const trailY = centerY + Math.sin(trailAngle) * particle.distance;
            const trailOpacity = particleOpacity * (1 - j / trailLength);

            ctx.fillStyle = `rgba(255, 107, 53, ${trailOpacity * 0.5})`;
            ctx.beginPath();
            ctx.arc(trailX, trailY, particle.size * (1 - j / trailLength / 2), 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Inner shimmer
      const shimmerGradient = ctx.createRadialGradient(
        centerX - 30, centerY - 30, 0,
        centerX, centerY, currentRadius * 0.6
      );
      shimmerGradient.addColorStop(0, `rgba(255, 255, 255, ${0.4 + breathe * 0.2})`);
      shimmerGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = shimmerGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius * 0.6, 0, Math.PI * 2);
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isListening, isSpeaking, isActive]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ width: '300px', height: '300px' }}
    />
  );
}
```

**Key Features:**
- Canvas-based animation with `requestAnimationFrame`
- 30 rotating particles around orb
- Breathing/pulsing effect
- Color transitions: Blue (#0066FF) → Orange (#FF6B35)
- Particle trails when speaking
- High-DPI support

---

### 4. LanguageSelector.tsx

**Purpose:** Dropdown language picker with flag emojis.

**File:** `src/components/voice-agent/LanguageSelector.tsx`

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
];

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (languageCode: string) => void;
  disabled?: boolean;
}

export default function LanguageSelector({
  selectedLanguage,
  onLanguageChange,
  disabled = false
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [buttonRect, setButtonRect] = React.useState<DOMRect | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const selectedLang = SUPPORTED_LANGUAGES.find(lang => lang.code === selectedLanguage) || SUPPORTED_LANGUAGES[0];

  const handleSelect = (languageCode: string) => {
    onLanguageChange(languageCode);
    setIsOpen(false);
  };

  const handleToggle = () => {
    if (!disabled) {
      if (!isOpen && buttonRef.current) {
        setButtonRect(buttonRef.current.getBoundingClientRect());
      }
      setIsOpen(!isOpen);
    }
  };

  // Handle scroll prevention
  React.useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const dropdown = document.getElementById('language-dropdown');
      if (dropdown && dropdown.contains(e.target as Node)) {
        e.stopPropagation();
      }
    };

    if (isOpen) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isOpen]);

  return (
    <>
      {/* Selected language button */}
      <motion.button
        ref={buttonRef}
        onClick={handleToggle}
        disabled={disabled}
        className={`
          flex items-center space-x-2 px-4 py-2 rounded-lg
          bg-white/10 hover:bg-white/20 backdrop-blur-sm
          border border-white/20 transition-all
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
      >
        <Globe className="w-4 h-4 text-white/80" />
        <span className="text-white/90 font-medium text-sm">
          {selectedLang.flag} {selectedLang.nativeName}
        </span>
      </motion.button>

      {/* Dropdown menu - rendered via portal */}
      {isOpen && !disabled && buttonRect && ReactDOM.createPortal(
        <>
          {/* Backdrop to close dropdown */}
          <div
            className="fixed inset-0 z-[9998]"
            onClick={() => setIsOpen(false)}
          />

          {/* Language options */}
          <motion.div
            id="language-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed',
              top: buttonRect.bottom + 8,
              left: buttonRect.left,
            }}
            className="z-[10000] min-w-[200px] max-h-[300px] rounded-lg bg-gray-900/95 backdrop-blur-md border border-white/20 shadow-xl overflow-y-scroll"
            onWheel={(e) => {
              e.stopPropagation();
              const target = e.currentTarget;
              const atTop = target.scrollTop === 0;
              const atBottom = target.scrollHeight - target.scrollTop === target.clientHeight;

              if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
                e.preventDefault();
              }
            }}
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <button
                key={language.code}
                onClick={() => handleSelect(language.code)}
                className={`
                  w-full px-4 py-3 text-left flex items-center space-x-3
                  transition-colors hover:bg-white/10
                  ${language.code === selectedLanguage ? 'bg-white/10' : ''}
                `}
              >
                <span className="text-2xl">{language.flag}</span>
                <div className="flex-1">
                  <div className="text-white/90 font-medium text-sm">
                    {language.nativeName}
                  </div>
                  <div className="text-white/60 text-xs">
                    {language.name}
                  </div>
                </div>
                {language.code === selectedLanguage && (
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                )}
              </button>
            ))}
          </motion.div>
        </>,
        document.body
      )}
    </>
  );
}
```

**Key Features:**
- React Portal dropdown (avoids z-index issues)
- 6 supported languages with flags
- Disabled state during active conversation
- Smooth animations with Framer Motion
- Mobile-friendly touch interactions

---

### 5. useSoundEffects.ts (Optional)

**Purpose:** Optional sound effects hook for audio feedback.

**File:** `src/components/voice-agent/useSoundEffects.ts`

```tsx
import { useEffect, useRef } from 'react';

interface SoundEffectsConfig {
  enabled?: boolean;
  volume?: number; // 0.0 to 1.0
}

export function useSoundEffects(config: SoundEffectsConfig = {}) {
  const { enabled = false, volume = 0.3 } = config;
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!enabled) return;

    if (typeof window !== 'undefined' && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, [enabled]);

  const playTone = (frequency: number, duration: number) => {
    if (!enabled || !audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  };

  return {
    playOpen: () => playTone(440, 0.2),        // A4 note
    playConnect: () => playTone(523.25, 0.15), // C5 note
    playDisconnect: () => playTone(392, 0.2),  // G4 note
    playResponse: () => playTone(659.25, 0.1), // E5 note
    playError: () => playTone(220, 0.3),       // A3 note
  };
}
```

**Usage Example:**
```tsx
// In VoiceAgentOverlay.tsx
const sounds = useSoundEffects({ enabled: true, volume: 0.2 });

useEffect(() => {
  if (isOpen) sounds.playOpen();
}, [isOpen]);

useEffect(() => {
  if (connectionStatus === 'connected') sounds.playConnect();
}, [connectionStatus]);
```

---

## Integration

### Example 1: Inline Voice Agent

**File:** `src/pages/HomePage.tsx` (or any page)

```tsx
import React, { useState } from 'react';
import InlineVoiceAgent from '../components/voice-agent/InlineVoiceAgent';

export default function HomePage() {
  const [showVoiceAgent, setShowVoiceAgent] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Your page content */}
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome to Our App
        </h1>

        {/* Voice Agent Toggle Button */}
        <button
          onClick={() => setShowVoiceAgent(!showVoiceAgent)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          {showVoiceAgent ? 'Close Voice Agent' : 'Talk to AI'}
        </button>

        {/* Inline Voice Agent */}
        <div className="mt-8">
          <InlineVoiceAgent
            isActive={showVoiceAgent}
            onClose={() => setShowVoiceAgent(false)}
            agentId={import.meta.env.VITE_ELEVENLABS_AGENT_ID}
          />
        </div>
      </div>
    </div>
  );
}
```

---

### Example 2: Full-Screen Overlay

**File:** `src/pages/HomePage.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import VoiceAgentOverlay from '../components/voice-agent/VoiceAgentOverlay';

export default function HomePage() {
  const [showOverlay, setShowOverlay] = useState(false);

  // Auto-trigger after 2.5 seconds (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Your page content */}
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome to Our App
        </h1>

        {/* Manual trigger button */}
        <button
          onClick={() => setShowOverlay(true)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          Talk to AI
        </button>
      </div>

      {/* Full-screen overlay */}
      <VoiceAgentOverlay
        isOpen={showOverlay}
        onClose={() => setShowOverlay(false)}
        agentId={import.meta.env.VITE_ELEVENLABS_AGENT_ID}
        apiKey={import.meta.env.VITE_ELEVENLABS_API_KEY}
      />
    </div>
  );
}
```

---

## Styling

This implementation uses **TailwindCSS**. Ensure your `tailwind.config.js` includes:

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#0066FF', // Electric blue
        },
        orange: {
          400: '#FF6B35', // Speaking state
        }
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
      }
    },
  },
  plugins: [],
}
```

### CSS Variables (Alternative)

If not using Tailwind, add these CSS variables:

```css
:root {
  --color-blue-primary: #0066FF;
  --color-orange-speaking: #FF6B35;
  --color-white-transparent-10: rgba(255, 255, 255, 0.1);
  --color-white-transparent-20: rgba(255, 255, 255, 0.2);
  --color-dark-overlay: rgba(0, 0, 0, 0.85);
}
```

---

## Testing

### 1. Build Test

```bash
npm run build
```

Expected output:
```
✓ built in 10-15s
```

### 2. Development Test

```bash
npm run dev
```

Visit the page with voice agent and:
1. Click "Talk to AI" button
2. Allow microphone permissions
3. Verify orb appears and animates
4. Speak to test listening state
5. Verify AI response triggers speaking state
6. Test language selector
7. Test ESC key to close
8. Test mobile responsiveness

### 3. Browser Console Checks

Open DevTools console and verify:
- No errors on load
- `Connected to ElevenLabs with language: en` message
- `Mode changed: listening` / `Mode changed: speaking` messages

---

## Troubleshooting

### Issue: "Failed to start conversation"

**Causes:**
- Invalid `VITE_ELEVENLABS_AGENT_ID`
- Invalid `VITE_ELEVENLABS_API_KEY`
- Microphone permission denied
- Network issues

**Solutions:**
1. Verify `.env` file has correct credentials
2. Restart dev server after updating `.env`
3. Check browser console for specific error
4. Verify agent exists in ElevenLabs dashboard
5. Test with `curl`:
   ```bash
   curl -X GET "https://api.elevenlabs.io/v1/convai/conversations/agents" \
     -H "xi-api-key: YOUR_API_KEY"
   ```

---

### Issue: Waveform not animating

**Causes:**
- `conversation.getOutputByteFrequencyData()` returns null
- Animation frame not running

**Solutions:**
1. Verify `conversation.status === 'connected'`
2. Check console for errors
3. Ensure `requestAnimationFrame` is supported

---

### Issue: Canvas orb not rendering

**Causes:**
- Canvas not supported
- High-DPI scaling issues

**Solutions:**
1. Check `canvas.getContext('2d')` is not null
2. Verify `devicePixelRatio` calculation
3. Test on different browsers

---

### Issue: Language not changing

**Causes:**
- Session not restarting
- Language code invalid

**Solutions:**
1. Ensure `conversation.endSession()` is called before language change
2. Verify language code matches ElevenLabs supported languages
3. Check `overrides.agent.language` is being passed correctly

---

### Issue: Microphone permissions not requested

**Causes:**
- Browser blocking microphone access
- HTTPS required

**Solutions:**
1. Use HTTPS (required for microphone access)
2. Check browser microphone settings
3. Test on localhost (HTTP allowed)
4. Verify `getUserMedia()` is available

---

## Configuration Options

### Customizing Colors

Edit `VoiceOrb.tsx` line 57:

```tsx
// Change primary colors
let primaryColor = '#0066FF'; // Your brand color
// ...
if (isSpeaking) {
  primaryColor = '#FF6B35'; // Your speaking color
}
```

### Customizing Waveform Bars

Edit `InlineVoiceAgent.tsx` line 27:

```tsx
// Change number of bars (default: 60)
const [barHeights, setBarHeights] = useState<number[]>(new Array(80).fill(0));
```

### Customizing Particles

Edit `VoiceOrb.tsx` line 42:

```tsx
// Change particle count (default: 30)
for (let i = 0; i < 50; i++) {
  // ...
}
```

### Adding More Languages

Edit `LanguageSelector.tsx` line 13:

```tsx
export const SUPPORTED_LANGUAGES: Language[] = [
  // ... existing languages
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
];
```

---

## Performance Optimization

### 1. Lazy Load Components

```tsx
import { lazy, Suspense } from 'react';

const VoiceAgentOverlay = lazy(() => import('../components/voice-agent/VoiceAgentOverlay'));

// Usage:
<Suspense fallback={<div>Loading...</div>}>
  <VoiceAgentOverlay {...props} />
</Suspense>
```

### 2. Throttle Waveform Updates

```tsx
// In InlineVoiceAgent.tsx
const throttledUpdate = throttle(() => {
  const frequencyData = conversation.getOutputByteFrequencyData();
  // ... update logic
}, 50); // Update every 50ms instead of every frame
```

### 3. Reduce Particle Count on Mobile

```tsx
// In VoiceOrb.tsx
const isMobile = window.innerWidth < 768;
const particleCount = isMobile ? 15 : 30;

for (let i = 0; i < particleCount; i++) {
  // ...
}
```

---

## Security Best Practices

1. **Never commit `.env` file** - Always use `.env.example`
2. **Use environment variables** - Never hardcode API keys
3. **Validate agent ID** - Check format before passing to SDK
4. **Handle errors gracefully** - Don't expose API keys in error messages
5. **Rate limit requests** - Prevent abuse with debouncing/throttling

---

## Additional Resources

- [ElevenLabs Conversational AI Docs](https://elevenlabs.io/docs/conversational-ai/overview)
- [ElevenLabs React SDK](https://www.npmjs.com/package/@elevenlabs/react)
- [ElevenLabs Client SDK](https://www.npmjs.com/package/@elevenlabs/client)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Canvas API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

## Checklist for New Project

- [ ] Install dependencies (`@elevenlabs/client`, `@elevenlabs/react`, `framer-motion`, `lucide-react`)
- [ ] Create `.env` file with `VITE_ELEVENLABS_AGENT_ID` and `VITE_ELEVENLABS_API_KEY`
- [ ] Create folder structure: `src/components/voice-agent/`
- [ ] Copy all 5 component files:
  - [ ] `InlineVoiceAgent.tsx`
  - [ ] `VoiceAgentOverlay.tsx`
  - [ ] `VoiceOrb.tsx`
  - [ ] `LanguageSelector.tsx`
  - [ ] `useSoundEffects.ts` (optional)
- [ ] Integrate into your page (inline or overlay)
- [ ] Test microphone permissions
- [ ] Test language switching
- [ ] Test mobile responsiveness
- [ ] Build and deploy

---

## Summary

This implementation provides two flavors of ElevenLabs voice agent:
1. **InlineVoiceAgent** - Compact, waveform-based, perfect for inline placement
2. **VoiceAgentOverlay** - Full-screen, orb-based, cinematic experience

Both include:
- Multi-language support
- Real-time visual feedback
- Mobile responsiveness
- Error handling
- TypeScript support

**Total files:** 5 components + environment setup
**Total lines of code:** ~800 lines
**Implementation time:** 30-60 minutes

---

## License & Credits

This implementation guide is provided as-is for educational and commercial use.
Built with ElevenLabs SDK, Framer Motion, and React.

**Author:** P0STMAN AI Platform
**Last Updated:** January 2025
