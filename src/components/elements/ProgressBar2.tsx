import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  title?: string;
  count?: number;
}

const ProgressBar2: React.FC<ProgressBarProps> = ({ title = 'Progress', count = 30 }) => {
  const [percentage, setPercentage] = useState(0);
  const animationDuration = 1000; // in ms

  useEffect(() => {
    let start = 0;
    const stepTime = 10; // interval in ms
    const increment = count / (animationDuration / stepTime);

    const interval = setInterval(() => {
      start += increment;
      if (start >= count) {
        setPercentage(count);
        clearInterval(interval);
      } else {
        setPercentage(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="progress-area mb-30">
      <div className="progress__title">
        <h4>{title}</h4>
        <span>
          <span className="progress-count">{percentage}</span>%
        </span>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${percentage}%`, transition: 'width 0.1s linear' }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar2;
