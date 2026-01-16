import { useEffect, useRef, useState, useCallback } from 'react';
import {
  GestureRecognizer,
  FilesetResolver,
  GestureRecognizerResult,
} from '@mediapipe/tasks-vision';

// Gesture types that MediaPipe can detect
export type GestureType =
  | 'Thumb_Up'
  | 'Thumb_Down'
  | 'Victory' // Peace sign
  | 'ILoveYou'
  | 'Pointing_Up'
  | 'Open_Palm' // Wave/high five
  | 'Closed_Fist'
  | 'None';

export interface DetectedGesture {
  gesture: GestureType;
  confidence: number;
  handedness: 'Left' | 'Right';
}

interface UseGestureDetectionOptions {
  onGestureDetected?: (gesture: DetectedGesture) => void;
  minConfidence?: number;
  cooldownMs?: number; // Prevent rapid-fire events
}

export function useGestureDetection(
  videoElement: HTMLVideoElement | null,
  options: UseGestureDetectionOptions = {}
) {
  const {
    onGestureDetected,
    minConfidence = 0.7,
    cooldownMs = 1500,
  } = options;

  const [isReady, setIsReady] = useState(false);
  const [currentGesture, setCurrentGesture] = useState<DetectedGesture | null>(null);
  const [error, setError] = useState<string | null>(null);

  const gestureRecognizerRef = useRef<GestureRecognizer | null>(null);
  const lastGestureTimeRef = useRef<Record<string, number>>({});
  const animationFrameRef = useRef<number | null>(null);
  const isProcessingRef = useRef(false);

  // Initialize MediaPipe GestureRecognizer
  useEffect(() => {
    let isMounted = true;

    async function initGestureRecognizer() {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
        );

        const recognizer = await GestureRecognizer.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              'https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task',
            delegate: 'GPU',
          },
          runningMode: 'VIDEO',
          numHands: 2,
        });

        if (isMounted) {
          gestureRecognizerRef.current = recognizer;
          setIsReady(true);
        }
      } catch (err) {
        console.error('Failed to initialize gesture recognizer:', err);
        if (isMounted) {
          setError('Failed to load gesture recognition');
        }
      }
    }

    initGestureRecognizer();

    return () => {
      isMounted = false;
      if (gestureRecognizerRef.current) {
        gestureRecognizerRef.current.close();
        gestureRecognizerRef.current = null;
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Process video frames for gesture detection
  const processFrame = useCallback(() => {
    if (
      !gestureRecognizerRef.current ||
      !videoElement ||
      videoElement.paused ||
      videoElement.ended ||
      isProcessingRef.current
    ) {
      animationFrameRef.current = requestAnimationFrame(processFrame);
      return;
    }

    isProcessingRef.current = true;

    try {
      const nowMs = performance.now();
      const results: GestureRecognizerResult =
        gestureRecognizerRef.current.recognizeForVideo(videoElement, nowMs);

      if (results.gestures && results.gestures.length > 0) {
        // Get the first detected gesture
        const gestureData = results.gestures[0][0];
        const handedness = results.handedness[0][0];

        if (gestureData.score >= minConfidence) {
          const gestureName = gestureData.categoryName as GestureType;

          // Check cooldown to prevent rapid-fire
          const lastTime = lastGestureTimeRef.current[gestureName] || 0;
          if (nowMs - lastTime > cooldownMs) {
            lastGestureTimeRef.current[gestureName] = nowMs;

            const detected: DetectedGesture = {
              gesture: gestureName,
              confidence: gestureData.score,
              handedness: handedness.categoryName as 'Left' | 'Right',
            };

            setCurrentGesture(detected);
            onGestureDetected?.(detected);

            // Clear gesture after a short delay
            setTimeout(() => setCurrentGesture(null), 500);
          }
        }
      }
    } catch (err) {
      // Silently handle frame processing errors
    }

    isProcessingRef.current = false;
    animationFrameRef.current = requestAnimationFrame(processFrame);
  }, [videoElement, minConfidence, cooldownMs, onGestureDetected]);

  // Start/stop detection based on video element
  useEffect(() => {
    if (isReady && videoElement) {
      animationFrameRef.current = requestAnimationFrame(processFrame);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isReady, videoElement, processFrame]);

  return {
    isReady,
    currentGesture,
    error,
  };
}
