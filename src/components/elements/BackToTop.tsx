"use client";

import { useEffect, useState } from 'react';

interface BackToTopProps {
  className?: string;
}

function BackToTop({ className = '' }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
        <button id="back-top" className={`back-to-top ${className}`} onClick={scrollToTop}>
          <i className="fa-regular fa-arrow-up"></i>
        </button>
    )
  );
}

export default BackToTop;