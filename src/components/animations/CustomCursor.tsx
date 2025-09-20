import React, { useEffect, useState, useRef, createElement } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
interface CursorState {
  x: number;
  y: number;
  hovered: boolean;
  clicked: boolean;
  serviceHovered: boolean;
  buttonHovered: boolean;
  ctaHovered: boolean;
}
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRippleRef = useRef<HTMLDivElement>(null);
  // Use motion values for smooth animation
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  // Add spring physics for smooth following
  const springConfig = {
    damping: 25,
    stiffness: 300
  };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const [cursorState, setCursorState] = useState<CursorState>({
    x: -100,
    y: -100,
    hovered: false,
    clicked: false,
    serviceHovered: false,
    buttonHovered: false,
    ctaHovered: false
  });
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const handleMouseDown = () => {
      setCursorState(prev => ({
        ...prev,
        clicked: true
      }));
    };
    const handleMouseUp = () => {
      setCursorState(prev => ({
        ...prev,
        clicked: false
      }));
    };
    // Detect hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over links, buttons or interactive elements
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a') || target.dataset.hoverable === 'true') {
        setCursorState(prev => ({
          ...prev,
          hovered: true
        }));
      }
      // Check if hovering over service cards
      if (target.closest('[data-service-card]')) {
        setCursorState(prev => ({
          ...prev,
          serviceHovered: true
        }));
      }
      // Check if hovering over buttons with fill animation
      if (target.closest('[data-fill-button]')) {
        setCursorState(prev => ({
          ...prev,
          buttonHovered: true
        }));
      }
      // Check if hovering over CTA buttons - special handling to avoid cursor overlap
      if (target.closest('[data-cta-button]') || target.dataset.ctaButton === 'true') {
        setCursorState(prev => ({
          ...prev,
          ctaHovered: true,
          hovered: false,
          buttonHovered: false
        }));
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a') || target.dataset.hoverable === 'true') {
        setCursorState(prev => ({
          ...prev,
          hovered: false
        }));
      }
      if (target.closest('[data-service-card]')) {
        setCursorState(prev => ({
          ...prev,
          serviceHovered: false
        }));
      }
      if (target.closest('[data-fill-button]')) {
        setCursorState(prev => ({
          ...prev,
          buttonHovered: false
        }));
      }
      if (target.closest('[data-cta-button]') || target.dataset.ctaButton === 'true') {
        setCursorState(prev => ({
          ...prev,
          ctaHovered: false
        }));
      }
    };
    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    // Create ripple effect on click
    const handleClick = (e: MouseEvent) => {
      if (cursorRippleRef.current) {
        const ripple = document.createElement('div');
        ripple.className = 'absolute bg-white/30 rounded-full animate-ripple';
        ripple.style.width = '50px';
        ripple.style.height = '50px';
        ripple.style.left = `${e.clientX - 25}px`;
        ripple.style.top = `${e.clientY - 25}px`;
        cursorRippleRef.current.appendChild(ripple);
        setTimeout(() => {
          if (cursorRippleRef.current) {
            cursorRippleRef.current.removeChild(ripple);
          }
        }, 1000);
      }
    };
    document.addEventListener('click', handleClick);
    // Cleanup
    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return <>
      <div ref={cursorRippleRef} className="fixed inset-0 pointer-events-none z-[9999]" />
      <motion.div ref={cursorRef} className={`fixed pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference
          ${cursorState.hovered ? 'bg-white' : 'bg-white/50 border border-white/20'}
          ${cursorState.clicked ? 'scale-90' : ''}
          ${cursorState.serviceHovered ? 'scale-[2] bg-purple-400/50' : ''}
          ${cursorState.buttonHovered ? 'scale-[1.5] bg-blue-400/50' : ''}
          ${cursorState.ctaHovered ? 'scale-[0.5] opacity-30' : ''}
        `} style={{
      x: springX,
      y: springY,
      width: cursorState.hovered ? '50px' : '30px',
      height: cursorState.hovered ? '50px' : '30px',
      translateX: '-50%',
      translateY: '-50%'
    }} transition={{
      type: 'spring',
      damping: 20,
      stiffness: 300,
      mass: 0.5
    }}>
        {cursorState.serviceHovered && <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50" initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} transition={{
        duration: 0.3
      }} />}
        {cursorState.buttonHovered && <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-70" initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} transition={{
        duration: 0.3
      }} />}
      </motion.div>
    </>;
};
export default CustomCursor;