// src/hooks/useCountdown.ts
import { useState, useEffect } from 'react';

export const useCountdown = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    progress: 0,
  });

  useEffect(() => {
    const start = new Date(); // point de départ
    const target = new Date(targetDate);
    const totalTime = target.getTime() - start.getTime();
    const totalDays = totalTime / (1000 * 60 * 60 * 24);

    const calculateTimeLeft = () => {
      const now = new Date();
      const diffTime = target.getTime() - now.getTime();

      if (diffTime <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, progress: 100 });
        return;
      }

      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

      const elapsedDays = totalDays - days;
      const progress = Math.min(100, (elapsedDays / totalDays) * 100);

      setTimeLeft({ days, hours, minutes, seconds, progress });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};
