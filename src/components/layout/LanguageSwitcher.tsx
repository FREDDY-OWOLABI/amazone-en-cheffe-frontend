// src/components/layout/LanguageSwitcher.tsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = i18n.language === 'fr' ? 'FR' : 'EN';
  const flagIcon = i18n.language === 'fr' ? 'FR' : 'GB';

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Bouton principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition text-white"
      >
        {/* ✅ Affichage conditionnel du drapeau */}
        {flagIcon === 'GB' ? (
          <img src="/assets/images/anglais-flag.png" alt="English flag" className="w-5 h-5" />
        ) : (
          <img src="/assets/images/france-flag.png" alt="French flag" className="w-5 h-5" />
        )}
        <span className="font-medium">{currentLang}</span>
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50 min-w-[140px]">
            <button
              onClick={() => changeLang('fr')}
              className="flex items-center gap-2 px-4 py-2 hover:bg-muted w-full text-left"
            >
              <img
                src="/assets/images/france-flag.png"
                alt="Drapeau français"
                className="w-5 h-5"
              />
              <span className="text-brand-earth-dark">Français</span>
            </button>

            <button
              onClick={() => changeLang('en')}
              className="flex items-center gap-2 px-4 py-2 hover:bg-muted w-full text-left"
            >
              <img
                src="/assets/images/anglais-flag.png"
                alt="Drapeau anglais"
                className="w-5 h-5"
              />
              <span className="text-brand-earth-dark">English</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
