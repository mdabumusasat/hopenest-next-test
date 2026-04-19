import React, { useEffect, useState } from "react";

const msInSecond = 1000;
const msInMinute = 60 * msInSecond;
const msInHour = 60 * msInMinute;
const msInDay = 24 * msInHour;

interface TimeParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getPartsOfTimeDuration = (duration: number): TimeParts => {
  const days = Math.floor(duration / msInDay);
  const hours = Math.floor((duration % msInDay) / msInHour);
  const minutes = Math.floor((duration % msInHour) / msInMinute);
  const seconds = Math.floor((duration % msInMinute) / msInSecond);
  return { days, hours, minutes, seconds };
};

interface CountDownProps {
  endDateTime: string | Date;
}

const CountDown: React.FC<CountDownProps> = ({ endDateTime }) => {
  const endTime =
    endDateTime instanceof Date ? endDateTime.getTime() : new Date(endDateTime).getTime();

  const [timeParts, setTimeParts] = useState<TimeParts>(
    getPartsOfTimeDuration(Math.max(endTime - Date.now(), 0))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const timeDiff = Math.max(endTime - now, 0);
      setTimeParts(getPartsOfTimeDuration(timeDiff));
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="time-countdown">
      <div className="counter-column">
        <span className="count">{timeParts.days}</span>
        <span className="title">Days</span>
      </div>
      <div className="counter-column">
        <span className="count">{timeParts.hours}</span>
        <span className="title">Hours</span>
      </div>
      <div className="counter-column">
        <span className="count">{timeParts.minutes}</span>
        <span className="title">Minutes</span>
      </div>
      <div className="counter-column">
        <span className="count">{timeParts.seconds}</span>
        <span className="title">Seconds</span>
      </div>
    </div>
  );
};

export default CountDown;