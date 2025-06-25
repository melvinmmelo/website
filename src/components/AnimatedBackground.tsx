'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    // Use global mouse tracking instead of canvas-specific
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000); // Slightly more particles
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // Slower initial velocity
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
        });
      }
      
      particlesRef.current = particles;
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Mouse attraction force
        if (mouse.x > 0 && mouse.y > 0) {
          const mouseDx = mouse.x - particle.x;
          const mouseDy = mouse.y - particle.y;
          const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
          
          // Apply attraction force when mouse is within range
          if (mouseDistance < 250 && mouseDistance > 0) {
            const force = (250 - mouseDistance) / 250 * 0.05; // Stronger force
            const forceX = (mouseDx / mouseDistance) * force;
            const forceY = (mouseDy / mouseDistance) * force;
            
            particle.vx += forceX;
            particle.vy += forceY;
          }
        }
        
        // Apply friction to prevent particles from moving too fast
        particle.vx *= 0.95; // Less friction for more responsive movement
        particle.vy *= 0.95;
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Keep particles within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(156, 163, 175, 0.6)'; // gray-400 with opacity
        ctx.fill();
        
        // Draw connections to other particles
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (120 - distance) / 120 * 0.3;
            ctx.strokeStyle = `rgba(156, 163, 175, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      // Draw mouse cursor indicator
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(156, 163, 175, 0.8)';
        ctx.fill();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMounted]);

  return (
    <>
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 z-0"
          style={{ background: 'transparent' }}
        />
      )}
    </>
  );
}
