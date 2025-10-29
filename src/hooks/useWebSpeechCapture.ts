import { useEffect, useRef, useState } from 'react';

interface Message {
  role: 'user' | 'agent';
  text: string;
  timestamp: number;
}

export function useWebSpeechCapture(isActive: boolean, isAgentSpeaking: boolean = false, onMessagesUpdate?: (messages: Message[]) => void) {
  const recognitionRef = useRef<any>(null);
  const messagesRef = useRef<Message[]>([]);
  const [isListening, setIsListening] = useState(false);
  const interimTranscriptRef = useRef('');
  const isInitializedRef = useRef(false);
  const isAgentSpeakingRef = useRef(isAgentSpeaking); // Keep ref updated
  const onMessagesUpdateRef = useRef(onMessagesUpdate); // Keep ref updated

  // Keep refs updated when props change
  useEffect(() => {
    isAgentSpeakingRef.current = isAgentSpeaking;
    console.log('🔄 isAgentSpeaking updated:', isAgentSpeaking);
  }, [isAgentSpeaking]);

  useEffect(() => {
    onMessagesUpdateRef.current = onMessagesUpdate;
  }, [onMessagesUpdate]);

  // Initialize speech recognition once
  useEffect(() => {
    if (isInitializedRef.current) return;

    const SpeechRecognition = window.webkitSpeechRecognition || (window as any).SpeechRecognition;

    if (!SpeechRecognition) {
      console.warn('Web Speech API not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    isInitializedRef.current = true;

    // Configuration
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    // Handle results
    recognition.onresult = (event: any) => {
      let interimTranscript = '';

      console.log('📊 onresult fired - Agent Speaking:', isAgentSpeakingRef.current, 'Results count:', event.results.length);

      // Only process if agent is NOT speaking
      if (isAgentSpeakingRef.current) {
        console.log('⏸️ Agent speaking - ignoring speech capture');
        return;
      }

      console.log('🎙️ Captured speech, processing...');

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        const confidence = event.results[i][0].confidence;

        console.log(`Result ${i}: "${transcript}" (final: ${event.results[i].isFinal}, confidence: ${confidence})`);

        if (event.results[i].isFinal) {
          // Final transcript - add to messages only if it doesn't sound like agent
          // Filter out agent-like responses
          const isAgentLike = /^(I'm|I am|Here to|Let me|Can you|What|How|When|Where|Would|Should|Could)/i.test(transcript.trim());

          if (isAgentLike) {
            console.log('Filtered out agent-like response:', transcript);
            interimTranscriptRef.current = '';
            return;
          }

          const newMessage: Message = {
            role: 'user',
            text: transcript,
            timestamp: Date.now(),
          };

          // Only add if not already present and not empty
          if (transcript.trim() && !messagesRef.current.some(m => m.text === transcript && m.role === 'user')) {
            messagesRef.current = [...messagesRef.current, newMessage];
            onMessagesUpdateRef.current?.(messagesRef.current);
            console.log('✓ User said:', transcript);
          }

          interimTranscriptRef.current = '';
        } else {
          // Interim transcript (not final yet)
          interimTranscript += transcript;
        }
      }

      // Update interim transcript for UI feedback if needed
      interimTranscriptRef.current = interimTranscript;
    };

    // Handle errors
    recognition.onerror = (event: any) => {
      console.error('🎤 Speech recognition error:', event.error);
      if (event.error === 'no-speech') {
        console.log('ℹ️ No speech detected, continuing to listen...');
      } else if (event.error === 'network') {
        console.error('Network error - check internet connection');
      } else if (event.error === 'permission-denied') {
        console.error('❌ Microphone permission denied. Please allow access to microphone in browser settings.');
      }
    };

    // Handle end - restart if still needed
    recognition.onend = () => {
      console.log('⏹️ Speech recognition ended');
      setIsListening(false);
      // Auto-restart if conversation is still active
      if (isActive && recognitionRef.current) {
        console.log('🔄 Restarting speech recognition...');
        setTimeout(() => {
          try {
            recognitionRef.current?.start();
          } catch (e) {
            console.log('Could not restart:', e);
          }
        }, 100);
      }
    };

    recognition.onstart = () => {
      setIsListening(true);
      console.log('✓ Speech recognition started - listening...');
    };

    return () => {
      try {
        recognition.abort();
      } catch (e) {
        console.log('Cleanup - recognition already stopped');
      }
    };
  }, []); // Only run once on mount

  // Start/stop recognition based on active state
  useEffect(() => {
    if (!recognitionRef.current) return;

    if (isActive) {
      try {
        messagesRef.current = [];
        console.log('▶️ Starting speech recognition');
        recognitionRef.current.start();
      } catch (e: any) {
        console.log('Could not start recognition:', e?.message || e);
      }
    } else {
      try {
        console.log('⏹️ Stopping speech recognition');
        recognitionRef.current.abort();
      } catch (e) {
        console.log('Could not stop recognition:', e);
      }
    }
  }, [isActive]);

  return { isListening, interimTranscript: interimTranscriptRef.current };
}
