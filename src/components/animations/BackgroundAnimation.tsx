import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let particles: Particle[] = [];
    // Mouse interaction radius - reduced for subtlety
    const interactionRadius = 120;
    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      setIsActive(true);
      // Reset active state after 2 seconds of no movement
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => setIsActive(false), 2000);
    };
    let mouseTimeout: ReturnType<typeof setTimeout>;
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      originalSpeedX: number;
      originalSpeedY: number;
      color: string;
      glowing: boolean;
      opacity: number;
      initialY: number; // Store initial Y position for parallax effect
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.initialY = this.y; // Store initial position for parallax
        this.baseSize = Math.random() * 1.8 + 0.3; // Smaller particles for subtlety
        this.size = this.baseSize;
        this.speedX = Math.random() * 0.3 - 0.15; // Slower movement
        this.speedY = Math.random() * 0.3 - 0.15; // Slower movement
        this.originalSpeedX = this.speedX;
        this.originalSpeedY = this.speedY;
        this.glowing = Math.random() > 0.9;
        this.opacity = Math.random() * 0.4 + 0.2; // More subtle opacity
        // Colors: deep blue, purple, and indigo with varying opacity for premium feel
        const colors = ['rgba(30, 64, 175, ', 'rgba(139, 92, 246, ', 'rgba(67, 56, 202, ' // indigo
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)] + this.opacity + ')';
      }
      update() {
        // Normal movement - slower for calming effect
        this.x += this.speedX * 0.7;
        this.y += this.speedY * 0.7;
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
        // Subtle parallax effect based on mouse position
        if (isActive) {
          // Parallax effect - particles move slightly opposite to mouse movement
          const parallaxX = (mousePosition.x - window.innerWidth / 2) * 0.01;
          const parallaxY = (mousePosition.y - window.innerHeight / 2) * 0.01;
          this.x -= parallaxX * (this.baseSize / 2);
          this.y -= parallaxY * (this.baseSize / 2);
          const dx = this.x - mousePosition.x;
          const dy = this.y - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < interactionRadius) {
            // Calculate force based on distance (closer = stronger) - more gentle
            const force = (interactionRadius - distance) / interactionRadius * 0.7;
            // Push particle away from mouse - more subtle movement
            const angle = Math.atan2(dy, dx);
            const pushX = Math.cos(angle) * force * 1.5;
            const pushY = Math.sin(angle) * force * 1.5;
            this.x += pushX;
            this.y += pushY;
            // Make particles glow when affected by mouse - ensure size stays positive
            this.size = Math.max(0.1, this.baseSize * (1 + force * 0.8));
          } else {
            // Gradually return to original size
            this.size = this.baseSize;
          }
        } else {
          // Gradually return to original speed and size when not interacting
          this.speedX = this.originalSpeedX;
          this.speedY = this.originalSpeedY;
          this.size = this.baseSize;
        }
        // Make glowing particles pulse - ensure size stays positive and more subtle
        if (this.glowing) {
          this.size = Math.max(0.1, this.baseSize + Math.sin(Date.now() * 0.003) * 0.3);
        }
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    // Initialize particles
    const initParticles = () => {
      particles = [];
      // Fewer particles for a more subtle effect
      const particleCount = Math.floor(canvas.width * canvas.height / 15000);
      for (let index = 0; index < particleCount; index++) {
        particles.push(new Particle());
      }
    };
    // Connect particles with lines - more subtle connections
    const connectParticles = () => {
      const maxDistance = 120; // Shorter connection distance
      for (let index1 = 0; index1 < particles.length; index1++) {
        for (let index2 = index1 + 1; index2 < particles.length; index2++) {
          const dx = particles[index1].x - particles[index2].x;
          const dy = particles[index1].y - particles[index2].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            // Make connections more subtle
            let opacity = 0.08 * (1 - distance / maxDistance);
            // Check if either particle is near mouse
            if (isActive) {
              const d1 = Math.sqrt(Math.pow(particles[index1].x - mousePosition.x, 2) + Math.pow(particles[index1].y - mousePosition.y, 2));
              const d2 = Math.sqrt(Math.pow(particles[index2].x - mousePosition.x, 2) + Math.pow(particles[index2].y - mousePosition.y, 2));
              if (d1 < interactionRadius || d2 < interactionRadius) {
                opacity *= 2; // Make connections near mouse slightly brighter
              }
            }
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 0.4; // Thinner lines
            ctx.moveTo(particles[index1].x, particles[index1].y);
            ctx.lineTo(particles[index2].x, particles[index2].y);
            ctx.stroke();
          }
        }
      }
    };
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw and update particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      // Draw connections between particles
      connectParticles();
      // Draw mouse interaction area when active - more subtle
      if (isActive) {
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, interactionRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)'; // More subtle
        ctx.stroke();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    // Handle touch events for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        });
        setIsActive(true);
        clearTimeout(mouseTimeout);
        mouseTimeout = setTimeout(() => setIsActive(false), 2000);
      }
    };
    window.addEventListener('touchmove', handleTouchMove);
    resizeCanvas();
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      clearTimeout(mouseTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, mousePosition]);
  return <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="opacity-25" />
    </div>;
};
export default BackgroundAnimation;