import { useEffect, useRef, useState, useCallback } from 'react';
import { SimliClient } from 'simli-client';

// Available Simli avatar faces
export const SIMLI_FACES = {
  // Professional
  kate: { id: 'd2a5c7c6-fed9-4f55-bcb3-062f7cd20103', name: 'Kate', gender: 'female' },
  madison: { id: '5fc23ea5-8175-4a82-aaaf-cdd8c88543dc', name: 'Madison', gender: 'female' },
  mark: { id: '804c347a-26c9-4dcf-bb49-13df4bed61e8', name: 'Mark', gender: 'male' },
  sabour: { id: '7e74d6e7-d559-4394-bd56-4923a3ab75ad', name: 'Sabour', gender: 'male' },
  fred: { id: '1c6aa65c-d858-4721-a4d9-bda9fde03141', name: 'Fred', gender: 'male' },
  charlotte: { id: 'b1f6ad8f-ed78-430b-85ef-2ec672728104', name: 'Charlotte', gender: 'female' },
  tony: { id: 'f1abe833-b44c-4650-a01c-191b9c3c43b8', name: 'Tony', gender: 'male' },
  // Character
  tina: { id: 'cace3ef7-a4c4-425d-a8cf-a5358eb0c427', name: 'Tina', gender: 'female' },
  laila: { id: 'b9e5fba3-071a-4e35-896e-211c4d6eaa7b', name: 'Laila', gender: 'female' },
  zahra: { id: 'afdb6a3e-3939-40aa-92df-01604c23101c', name: 'Zahra', gender: 'female' },
  dj: { id: 'c65af549-9105-442a-92a3-dc6c89e34149', name: 'DJ', gender: 'male' },
  doctor: { id: 'f0ba4efe-7946-45de-9955-c04a04c367b9', name: 'Doctor', gender: 'female' },
  hank: { id: 'dd10cb5a-d31d-4f12-b69f-6db3383c006e', name: 'Hank', gender: 'male' },
  // Fun
  einstein: { id: 'c295e3a2-ed11-48d5-a1bd-ff42ac7eac73', name: 'Einstein', gender: 'male' },
  catgirl: { id: '4cce0ca0-550f-42d8-b500-834ffb35e0af', name: 'Catgirl', gender: 'female' },
  cleopatra: { id: 'c7451e55-ea04-41c8-ab47-bdca3e4a03d8', name: 'Cleopatra', gender: 'female' },
  nonna: { id: 'c2f1d5d7-074b-405d-be4c-df52cd52166a', name: 'Nonna', gender: 'female' },
  edna: { id: '121cd5ae-7df7-4ea3-a389-401a9463db52', name: 'Edna', gender: 'female' },
} as const;

export type SimliFaceKey = keyof typeof SIMLI_FACES;

interface UseSimliAvatarOptions {
  faceId?: string;
  onConnected?: () => void;
  onDisconnected?: () => void;
  onSpeakingStart?: () => void;
  onSpeakingEnd?: () => void;
}

interface SimliAvatarState {
  isConnected: boolean;
  isConnecting: boolean;
  isSpeaking: boolean;
  error: string | null;
}

export function useSimliAvatar(
  videoRef: React.RefObject<HTMLVideoElement>,
  audioRef: React.RefObject<HTMLAudioElement>,
  options: UseSimliAvatarOptions = {}
) {
  const {
    faceId = SIMLI_FACES.kate.id, // Default to Kate
    onConnected,
    onDisconnected,
    onSpeakingStart,
    onSpeakingEnd,
  } = options;

  const [state, setState] = useState<SimliAvatarState>({
    isConnected: false,
    isConnecting: false,
    isSpeaking: false,
    error: null,
  });

  const clientRef = useRef<SimliClient | null>(null);
  const isMountedRef = useRef(true);

  // Initialize Simli client
  const connect = useCallback(async () => {
    if (clientRef.current || state.isConnecting) return;

    const apiKey = import.meta.env.VITE_SIMLI_API_KEY;
    if (!apiKey) {
      setState(prev => ({ ...prev, error: 'Simli API key not configured' }));
      console.error('VITE_SIMLI_API_KEY not set');
      return;
    }

    if (!videoRef.current || !audioRef.current) {
      setState(prev => ({ ...prev, error: 'Video/audio elements not ready' }));
      return;
    }

    setState(prev => ({ ...prev, isConnecting: true, error: null }));

    try {
      const client = new SimliClient();
      clientRef.current = client;

      // Configure the client
      client.Initialize({
        apiKey,
        faceID: faceId,
        handleSilence: true,
        maxSessionLength: 3600, // 1 hour max
        maxIdleTime: 300, // 5 min idle timeout
        videoRef: videoRef.current,
        audioRef: audioRef.current,
        enableConsoleLogs: false,
      });

      // Set up event listeners
      client.on('connected', () => {
        if (isMountedRef.current) {
          setState(prev => ({ ...prev, isConnected: true, isConnecting: false }));
          onConnected?.();
        }
      });

      client.on('disconnected', () => {
        if (isMountedRef.current) {
          setState(prev => ({ ...prev, isConnected: false, isConnecting: false }));
          onDisconnected?.();
        }
      });

      client.on('speaking', () => {
        if (isMountedRef.current) {
          setState(prev => ({ ...prev, isSpeaking: true }));
          onSpeakingStart?.();
        }
      });

      client.on('silent', () => {
        if (isMountedRef.current) {
          setState(prev => ({ ...prev, isSpeaking: false }));
          onSpeakingEnd?.();
        }
      });

      // Start the connection
      await client.start();
    } catch (err) {
      console.error('Simli connection error:', err);
      if (isMountedRef.current) {
        setState(prev => ({
          ...prev,
          isConnecting: false,
          error: err instanceof Error ? err.message : 'Connection failed',
        }));
      }
    }
  }, [faceId, videoRef, audioRef, onConnected, onDisconnected, onSpeakingStart, onSpeakingEnd, state.isConnecting]);

  // Disconnect
  const disconnect = useCallback(() => {
    if (clientRef.current) {
      clientRef.current.close();
      clientRef.current = null;
    }
    if (isMountedRef.current) {
      setState({
        isConnected: false,
        isConnecting: false,
        isSpeaking: false,
        error: null,
      });
    }
  }, []);

  // Send audio data to the avatar (PCM16, 16kHz expected)
  const sendAudio = useCallback((audioData: Uint8Array) => {
    if (clientRef.current && state.isConnected) {
      clientRef.current.sendAudioData(audioData);
    }
  }, [state.isConnected]);

  // Send audio from a MediaStreamTrack (e.g., from TTS or Gemini)
  const listenToAudioTrack = useCallback((track: MediaStreamTrack) => {
    if (clientRef.current && state.isConnected) {
      clientRef.current.listenToMediastreamTrack(track);
    }
  }, [state.isConnected]);

  // Clear audio buffer (interrupt avatar speech)
  const clearBuffer = useCallback(() => {
    if (clientRef.current) {
      clientRef.current.ClearBuffer();
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      disconnect();
    };
  }, [disconnect]);

  return {
    ...state,
    connect,
    disconnect,
    sendAudio,
    listenToAudioTrack,
    clearBuffer,
  };
}

// Helper to resample audio from one sample rate to another
export function resampleAudio(
  inputData: Float32Array,
  inputSampleRate: number,
  outputSampleRate: number
): Float32Array {
  if (inputSampleRate === outputSampleRate) {
    return inputData;
  }

  const ratio = inputSampleRate / outputSampleRate;
  const outputLength = Math.floor(inputData.length / ratio);
  const output = new Float32Array(outputLength);

  for (let i = 0; i < outputLength; i++) {
    const srcIndex = i * ratio;
    const srcIndexFloor = Math.floor(srcIndex);
    const srcIndexCeil = Math.min(srcIndexFloor + 1, inputData.length - 1);
    const t = srcIndex - srcIndexFloor;

    // Linear interpolation
    output[i] = inputData[srcIndexFloor] * (1 - t) + inputData[srcIndexCeil] * t;
  }

  return output;
}

// Convert Float32 to PCM16 Uint8Array (for Simli)
export function floatToPcm16(float32Array: Float32Array): Uint8Array {
  const buffer = new ArrayBuffer(float32Array.length * 2);
  const view = new DataView(buffer);

  for (let i = 0; i < float32Array.length; i++) {
    const s = Math.max(-1, Math.min(1, float32Array[i]));
    const val = s < 0 ? s * 0x8000 : s * 0x7fff;
    view.setInt16(i * 2, val, true); // little-endian
  }

  return new Uint8Array(buffer);
}
