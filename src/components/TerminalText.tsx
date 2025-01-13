'use client';
import { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  className?: string;
}

export default function TerminalText({ text, className = '' }: TerminalTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Wait for 1 second before starting to type
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, 1000);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (isTyping && displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping, text]);

  return (
    <div className={className}>
      {displayText}
      <span className="cursor" />
    </div>
  );
}