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
