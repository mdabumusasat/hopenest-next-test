import React, { useState, useRef, useEffect, useCallback } from "react";
import CountUp from "react-countup";

interface CounterUpProps {
  count?: number;
  time?: number;
  suffix?: string;
  threshold?: number;
  className?: string;
}

const CounterUp: React.FC<CounterUpProps> = ({
  count = 100,
  time = 2,
  suffix = "",
  threshold = 0.5,
  className = "",
}) => {
  const [counterOn, setCounterOn] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entry.isIntersecting && !hasTriggered.current) {
      setCounterOn(true);
      hasTriggered.current = true;
      observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(handleIntersection, { threshold });

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => observer.disconnect();
    } else {
      // Fallback for SSR or unsupported browsers
      setCounterOn(true);
    }
  }, [handleIntersection, threshold]);

  return (
    <div
      ref={counterRef}
      className={`count-up ${className}`}
      aria-live="polite"
    >
      {counterOn && <CountUp end={count} duration={time} suffix={suffix} />}
    </div>
  );
};

export default CounterUp;
