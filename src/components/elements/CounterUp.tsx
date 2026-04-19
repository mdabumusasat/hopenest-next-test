import { useEffect, useRef, useState } from 'react';
import Counter from './Counter';

interface CounterUpProps {
  end?: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export default function CounterUp({ end = 100, duration = 2000, className = '', suffix = '' }: CounterUpProps) {
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          setStart(true);
          hasTriggered.current = true;
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`count-text ${className}`} aria-live="polite">
      {start && <Counter end={end} duration={duration} suffix={suffix} />}
    </span>
  );
}
