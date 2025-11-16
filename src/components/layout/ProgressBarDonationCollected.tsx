// src/components/layout/ProgressBarDonationCollected.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

type Props = {
  collected: number; // en F CFA, ex: 218000
  target: number; // en F CFA, ex: 1000000
  donors: number; // nombre de donateurs
  className?: string;
};

export const ProgressBarDonationCollected: React.FC<Props> = ({
  collected,
  target,
  donors,
  className = '',
}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const isSupportPage = location.pathname === '/support';

  // Sécurité : éviter division par zéro
  const percentage = target > 0 ? Math.round((collected / target) * 100) : 0;
  const cappedPercentage = Math.max(0, Math.min(100, percentage));

  const formatNumber = (v: number) =>
    new Intl.NumberFormat('fr-FR').format(Math.round(v));

  return (
    <div className={`${className} w-full max-w-2xl`}>
      {/* Ligne barre + pourcentage */}
      <div className="flex items-center gap-3 w-full">
        {/* Barre pleine largeur responsive */}
        <div className="relative flex-1 h-3 bg-white/30 rounded-full overflow-hidden">
          <div
            className={`absolute inset-y-0 left-0 transition-all duration-700 ease-out ${
              isSupportPage ? 'bg-brand-earth-dark' : 'bg-brand-gold'
            }`}
            style={{ width: `${cappedPercentage}%` }}
            aria-valuenow={cappedPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
          />
        </div>

        {/* Pourcentage */}
        <span className="text-white text-xs font-bold whitespace-nowrap">
          {cappedPercentage}%
        </span>
      </div>

      {/* Texte sous la barre */}
      <div className="mt-2 flex justify-between items-center">
        <p className="text-white font-semibold text-sm">
          {formatNumber(collected)} F&nbsp;CFA collectés
        </p>

        <p className="text-white text-sm font-medium">
          {formatNumber(target)} F&nbsp;CFA objectif
          <span className="mx-3">•</span>
          {formatNumber(donors)}&nbsp;donateurs
        </p>
      </div>
    </div>
  );
};

export default ProgressBarDonationCollected;
