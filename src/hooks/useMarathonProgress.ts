// src/hooks/useMarathonProgress.ts
import { useState, useEffect } from 'react';

export const useMarathonProgress = (
  startDate: string,
  endDate: string
) => {
  const [state, setState] = useState({
    daysLeft: 0,
    progress: 0,
    daysUntilStart: 0, // Nouveau : jours avant démarrage
    hasStarted: false,  // Nouveau : statut du marathon
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
      let hasStarted = false;
      let daysUntilStart = 0;

      if (now < start) {
        // Avant le démarrage
        progress = 0;
        hasStarted = false;
        const timeUntilStart = start.getTime() - now.getTime();
        daysUntilStart = Math.ceil(timeUntilStart / (1000 * 60 * 60 * 24));
      } else if (now >= end) {
        // Après la fin
        progress = 100;
        hasStarted = true;
      } else {
        // Pendant le marathon
        progress = (elapsed / total) * 100;
        hasStarted = true;
      }

      const remaining = Math.max(0, end.getTime() - now.getTime());
      const daysLeft = Math.ceil(remaining / (1000 * 60 * 60 * 24));

      setState({
        daysLeft,
        daysUntilStart,
        hasStarted,
        progress: Math.min(100, Math.max(0, progress)),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);

  }, [startDate, endDate]);

  return state;
};