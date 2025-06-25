'use client';

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  startDelay?: number;
}

export default function TypingAnimation({ 
  text, 
  speed = 50, 
  className = '', 
  showCursor = true,
  startDelay = 0 
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, isTyping]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className={`inline-block w-0.5 h-6 bg-gray-300 ml-1 ${
          currentIndex < text.length ? 'animate-pulse' : 'animate-blink'
        }`}>
          |
        </span>
      )}
    </span>
  );
}
