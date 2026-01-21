import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
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
  selectedAvatar?: SimliFaceKey; // Avatar selected from settings
}

export function VideoCallView({
  isOpen,
  onClose,
  userStream,
  geminiAudioData,
  isGeminiConnected = false,
  isGeminiSpeaking = false,
  audioQueueRef: externalAudioQueueRef,
  selectedAvatar = 'kate',
}: VideoCallViewProps) {
  // Refs for media elements
  const userVideoRef = useRef<HTMLVideoElement>(null);
  const avatarVideoRef = useRef<HTMLVideoElement>(null);
  const avatarAudioRef = useRef<HTMLAudioElement>(null);

  // Local state
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isAvatarMuted, setIsAvatarMuted] = useState(false);

  // Simli avatar hook - uses avatar from settings
  const avatar = useSimliAvatar(avatarVideoRef, avatarAudioRef, {
    faceId: SIMLI_FACES[selectedAvatar].id,
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
      console.log('[VideoCall] Connecting avatar:', selectedAvatar, SIMLI_FACES[selectedAvatar].id);
      avatar.connect();
    }
  }, [isOpen, avatar.isConnected, avatar.isConnecting, selectedAvatar]);

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
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={handleEndCall}
      >
        {/* Modal container - half screen size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", duration: 0.3 }}
          className="relative w-full max-w-3xl h-[70vh] max-h-[600px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
        {/* Main video grid */}
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white font-medium">POSTMAN AI Call</span>
              {avatar.isConnecting && (
                <span className="text-gray-400 text-sm">Connecting avatar...</span>
              )}
            </div>
            {/* Avatar name indicator */}
            <div className="text-sm text-white/60">
              {SIMLI_FACES[selectedAvatar].name}
            </div>
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
                    {SIMLI_FACES[selectedAvatar].name} (AI)
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

        {/* Gesture effects overlay */}
        <GestureEffects gesture={detectedGesture} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
