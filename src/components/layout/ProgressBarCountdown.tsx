import { useCountdown } from '@/hooks/useCountdown';
import { useTranslation } from 'react-i18next';

interface ProgressBarCountdownProps {
  targetDate?: string;
  className?: string;
}

export const ProgressBarCountdown = ({ 
  targetDate = "2025-12-01",
  className = "" 
}: ProgressBarCountdownProps) => {
  const { days, progress } = useCountdown(targetDate);
  const { t } = useTranslation();
  
  return (
    <div className={`space-y-2 ${className}`}>
      {/* Barre de progression */}
      <div className="relative w-full h-2 bg-white/20 rounded-full overflow-hidden">
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-gold to-brand-honey transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Texte */}
      <p className="text-white text-xs sm:text-sm font-medium">
        {days} jours restants
      </p>
    </div>
  );
};
