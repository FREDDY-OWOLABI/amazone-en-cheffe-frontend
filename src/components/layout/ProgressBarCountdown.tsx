// src/components/layout/ProgressBarCountdown.tsx
import { useMarathonProgress } from "@/hooks/useMarathonProgress";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

interface ProgressBarCountdownProps {
  className?: string;
}

export const ProgressBarCountdown = ({ className = "" }: ProgressBarCountdownProps) => {
  const { t } = useTranslation();
  const location = useLocation();

  const isSupport = location.pathname === "/contribution";

  // Début et fin du marathon
  const start = "2025-12-01T00:00:00";
  const end = "2025-12-15T00:00:00"; // 15 jours après

  const { daysLeft, daysUntilStart, hasStarted, progress } = useMarathonProgress(start, end);

  // Fonction pour gérer le pluriel
  const getDaysText = (days: number) => {
    return days > 1 ? "jours" : "jour";
  };

  // Déterminer le texte à afficher
  const getCountdownText = () => {
    if (!hasStarted) {
      // Avant le démarrage
      return `${daysUntilStart} ${getDaysText(daysUntilStart)} restants avant le démarrage`;
    } else if (daysLeft > 0) {
      // Pendant le marathon
      return `${daysLeft} ${getDaysText(daysLeft)} restants avant la fin`;
    } else {
      // Après la fin
      return "Marathon terminé";
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Barre */}
      <div className="relative w-40 h-2 bg-white/80 rounded-full overflow-hidden mt-1">
        <div
          className={`absolute inset-y-0 left-0 transition-all duration-500 ${
            isSupport ? "bg-brand-earth-dark" : "bg-brand-gold"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Texte dynamique */}
      <p className="text-white font-semibold text-left text-[10px] py-1">
        {getCountdownText()}
      </p>
    </div>
  );
};