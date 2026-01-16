import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  Settings,
  Volume2,
  VolumeX,
  User,
  Bot,
} from 'lucide-react';
import { useSimliAvatar, SIMLI_FACES, SimliFaceKey } from '../../hooks/useSimliAvatar';
import { useGestureDetection } from '../../hooks/useGestureDetection';
import { GestureEffects, GestureIndicator } from '../effects/GestureEffects';

interface VideoCallViewProps {
  isOpen: boolean;
  onClose: () => void;
  userStream: MediaStream | null;
  onAudioData?: (data: Uint8Array) => void; // Callback to receive audio from Gemini
  geminiAudioData?: ArrayBuffer | null; // Audio data from Gemini to send to avatar
  isGeminiConnected?: boolean;
  isGeminiSpeaking?: boolean;
  audioQueueRef?: React.MutableRefObject<ArrayBuffer[]>; // Direct ref to audio queue (bypasses React state)
}

export function VideoCallView({
  isOpen,
  onClose,
  userStream,
  geminiAudioData,
  isGeminiConnected = false,
  isGeminiSpeaking = false,
  audioQueueRef: externalAudioQueueRef,
}: VideoCallViewProps) {
  // Refs for media elements
  const userVideoRef = useRef<HTMLVideoElement>(null);
  const avatarVideoRef = useRef<HTMLVideoElement>(null);
  const avatarAudioRef = useRef<HTMLAudioElement>(null);

  // Local state
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isAvatarMuted, setIsAvatarMuted] = useState(false);
  const [selectedFace, setSelectedFace] = useState<SimliFaceKey>('kate');
  const [showSettings, setShowSettings] = useState(false);

  // Simli avatar hook
  const avatar = useSimliAvatar(avatarVideoRef, avatarAudioRef, {
    faceId: SIMLI_FACES[selectedFace].id,
    onConnected: () => console.log('Avatar connected'),
    onDisconnected: () => console.log('Avatar disconnected'),
  });

  // Gesture detection for user video
  const { currentGesture } = useGestureDetection(
    isOpen && userVideoRef.current ? userVideoRef.current : null,
    { minConfidence: 0.75, cooldownMs: 2000 }
  );
  const [detectedGesture, setDetectedGesture] = useState(currentGesture);

  useEffect(() => {
    if (currentGesture) {
      setDetectedGesture(currentGesture);
    }
  }, [currentGesture]);

  // Single audio queue - use external ref if provided (bypasses React state batching)
  const internalAudioQueueRef = useRef<ArrayBuffer[]>([]);
  const audioQueueRef = externalAudioQueueRef || internalAudioQueueRef;
  const isProcessingRef = useRef(false);
  const processIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Connect user stream to video element
  useEffect(() => {
    if (userVideoRef.current && userStream) {
      userVideoRef.current.srcObject = userStream;
    }
  }, [userStream]);

  // Connect avatar when view opens
  useEffect(() => {
    if (isOpen && !avatar.isConnected && !avatar.isConnecting) {
      // Clear any stale audio from previous session
      audioQueueRef.current = [];
      avatar.connect();
    }
  }, [isOpen, avatar.isConnected, avatar.isConnecting]);

  // Resample 24kHz to 16kHz (Simli's expected format)
  const resampleTo16k = useCallback((audioData: ArrayBuffer): Uint8Array => {
    const input = new Int16Array(audioData);
    const outputLen = Math.floor(input.length / 1.5);
    const output = new Int16Array(outputLen);

    for (let i = 0; i < outputLen; i++) {
      const srcIdx = i * 1.5;
      const floor = Math.floor(srcIdx);
      const ceil = Math.min(floor + 1, input.length - 1);
      const t = srcIdx - floor;
      output[i] = Math.round(input[floor] * (1 - t) + input[ceil] * t);
    }

    return new Uint8Array(output.buffer);
  }, []);

  // Process queue: send chunks to Simli at controlled rate
  const processAudioQueue = useCallback(() => {
    if (!avatar.isConnected || audioQueueRef.current.length === 0) return;

    // Take first chunk from queue (FIFO order)
    const chunk = audioQueueRef.current.shift();
    if (chunk) {
      avatar.sendAudio(resampleTo16k(chunk));
    }
  }, [avatar.isConnected, avatar.sendAudio, resampleTo16k]);

  // Start processing when avatar connects
  useEffect(() => {
    if (avatar.isConnected && !isProcessingRef.current) {
      isProcessingRef.current = true;
      // Process queue every 30ms (~match Gemini's chunk rate)
      processIntervalRef.current = setInterval(processAudioQueue, 30);
    }

    if (!avatar.isConnected) {
      isProcessingRef.current = false;
      if (processIntervalRef.current) {
        clearInterval(processIntervalRef.current);
        processIntervalRef.current = null;
      }
    }
  }, [avatar.isConnected, processAudioQueue]);

  // Add audio to queue as it arrives (only if using legacy prop, not external ref)
  // When using external ref, parent pushes directly to skip React state batching
  useEffect(() => {
    if (externalAudioQueueRef) return; // Skip if using external ref
    if (!geminiAudioData) return;
    audioQueueRef.current.push(geminiAudioData);
  }, [geminiAudioData, externalAudioQueueRef]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (processIntervalRef.current) {
        clearInterval(processIntervalRef.current);
      }
      audioQueueRef.current = [];
      isProcessingRef.current = false;
    };
  }, []);

  // Handle mute toggle
  const toggleMute = useCallback(() => {
    if (userStream) {
      userStream.getAudioTracks().forEach(track => {
        track.enabled = isMuted;
      });
      setIsMuted(!isMuted);
    }
  }, [userStream, isMuted]);

  // Handle video toggle
  const toggleVideo = useCallback(() => {
    if (userStream) {
      userStream.getVideoTracks().forEach(track => {
        track.enabled = isVideoOff;
      });
      setIsVideoOff(!isVideoOff);
    }
  }, [userStream, isVideoOff]);

  // Handle end call
  const handleEndCall = useCallback(() => {
    avatar.disconnect();
    onClose();
  }, [avatar, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-gray-900"
      >
        {/* Main video grid */}
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white font-medium">P0STMAN AI Call</span>
              {avatar.isConnecting && (
                <span className="text-gray-400 text-sm">Connecting avatar...</span>
              )}
            </div>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Settings className="w-5 h-5 text-white/70" />
            </button>
          </div>

          {/* Video panels */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* AI Avatar Panel */}
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden">
              {/* Avatar video */}
              <video
                ref={avatarVideoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              <audio ref={avatarAudioRef} autoPlay muted={isAvatarMuted} />

              {/* Avatar overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Loading state */}
                {!avatar.isConnected && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                        <Bot className="w-8 h-8 text-white" />
                      </div>
                      {avatar.isConnecting ? (
                        <p className="text-white">Connecting AI Avatar...</p>
                      ) : avatar.error ? (
                        <p className="text-red-400">{avatar.error}</p>
                      ) : (
                        <p className="text-gray-400">Avatar ready</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Speaking indicator */}
                {(avatar.isSpeaking || isGeminiSpeaking) && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-blue-500/80 backdrop-blur-sm rounded-full">
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [8, 16, 8] }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                          className="w-1 bg-white rounded-full"
                        />
                      ))}
                    </div>
                    <span className="text-white text-sm font-medium">Speaking</span>
                  </div>
                )}

                {/* Name tag */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg">
                  <span className="text-white text-sm font-medium">
                    {SIMLI_FACES[selectedFace].name} (AI)
                  </span>
                </div>
              </div>

              {/* Avatar mute button */}
              <button
                onClick={() => setIsAvatarMuted(!isAvatarMuted)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                {isAvatarMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>

            {/* User Video Panel */}
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden">
              {/* User video */}
              <video
                ref={userVideoRef}
                autoPlay
                playsInline
                muted
                className={`w-full h-full object-cover transform -scale-x-100 ${
                  isVideoOff ? 'hidden' : ''
                }`}
              />

              {/* Video off state */}
              {isVideoOff && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
              )}

              {/* Gesture indicator */}
              <AnimatePresence>
                {currentGesture && <GestureIndicator gesture={currentGesture} />}
              </AnimatePresence>

              {/* Name tag */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg">
                <span className="text-white text-sm font-medium">You</span>
              </div>

              {/* Connection status */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
                <div className={`w-2 h-2 rounded-full ${isGeminiConnected ? 'bg-green-500' : 'bg-yellow-500'}`} />
                <span className="text-white text-xs">
                  {isGeminiConnected ? 'Voice Connected' : 'Connecting...'}
                </span>
              </div>
            </div>
          </div>

          {/* Controls bar */}
          <div className="flex items-center justify-center gap-4 py-6 bg-gray-800/50 backdrop-blur-sm">
            {/* Mute button */}
            <button
              onClick={toggleMute}
              className={`p-4 rounded-full transition-colors ${
                isMuted
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {isMuted ? (
                <MicOff className="w-6 h-6 text-white" />
              ) : (
                <Mic className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Video toggle */}
            <button
              onClick={toggleVideo}
              className={`p-4 rounded-full transition-colors ${
                isVideoOff
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {isVideoOff ? (
                <VideoOff className="w-6 h-6 text-white" />
              ) : (
                <Video className="w-6 h-6 text-white" />
              )}
            </button>

            {/* End call */}
            <button
              onClick={handleEndCall}
              className="p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            >
              <Phone className="w-6 h-6 text-white rotate-[135deg]" />
            </button>
          </div>
        </div>

        {/* Settings panel */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="absolute top-0 right-0 h-full w-80 bg-gray-800 border-l border-gray-700 p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold">Settings</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1 rounded hover:bg-white/10"
                >
                  <X className="w-5 h-5 text-white/70" />
                </button>
              </div>

              {/* Avatar selection */}
              <div className="mb-6">
                <label className="text-white/70 text-sm mb-3 block">AI Avatar</label>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(SIMLI_FACES) as SimliFaceKey[]).slice(0, 9).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedFace(key)}
                      className={`p-2 rounded-lg text-center transition-colors ${
                        selectedFace === key
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <span className="text-xs">{SIMLI_FACES[key].name}</span>
                    </button>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-2">
                  Changing avatar requires reconnecting
                </p>
              </div>

              {/* Reconnect button */}
              <button
                onClick={() => {
                  avatar.disconnect();
                  setTimeout(() => avatar.connect(), 500);
                }}
                disabled={avatar.isConnecting}
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 rounded-lg text-white text-sm font-medium transition-colors"
              >
                {avatar.isConnecting ? 'Connecting...' : 'Reconnect Avatar'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gesture effects overlay */}
        <GestureEffects gesture={detectedGesture} />
      </motion.div>
    </AnimatePresence>
  );
}
