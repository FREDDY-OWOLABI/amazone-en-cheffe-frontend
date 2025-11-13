// src/components/layout/ProgressBarDonationCollected.tsx
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const ProgressBarDonationCollected = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isSupportPage = location.pathname === "/support";

  // Exemple : 51%
  const percentage = 51;

  return (
    <div className="space-y-2">
      
      {/* Barre + pourcentage (sur la même ligne */}
      <div className="flex items-center gap-2 w-fit">
        
        {/* Barre seule (largeur fixe w-40) */}
        <div className="relative w-40 h-2 bg-white/80 rounded-full overflow-hidden">
          <div
            className={`absolute inset-y-0 left-0 transition-all duration-500 ${
              isSupportPage ? 'bg-brand-earth-dark' : 'bg-brand-gold'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Pourcentage indépendant */}
        <span className="text-white text-[10px] font-bold whitespace-nowrap">
          {percentage}%
        </span>
      </div>

      {/* Texte sous la barre */}
      <p className="text-white font-semibold text-left text-[9.6px]">
        200K F CFA collectés
      </p>
    </div>
  );
};
