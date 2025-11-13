// src/hooks/useMarathonProgress.ts
import { useState, useEffect } from 'react';

export const useMarathonProgress = (
  startDate: string,
  endDate: string
) => {
  const [state, setState] = useState({
    daysLeft: 0,
    progress: 0,
  });

  useEffect(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const update = () => {
      const now = new Date();

      // Durée totale en ms
      const total = end.getTime() - start.getTime();
      const elapsed = now.getTime() - start.getTime();

      let progress = 0;

      if (now < start) {
        progress = 0;
      } else if (now >= end) {
        progress = 100;
      } else {
        progress = (elapsed / total) * 100;
      }

      const remaining = Math.max(0, end.getTime() - now.getTime());
      const daysLeft = Math.ceil(remaining / (1000 * 60 * 60 * 24));

      setState({
        daysLeft,
        progress: Math.min(100, Math.max(0, progress)),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);

  }, [startDate, endDate]);

  return state;
};
