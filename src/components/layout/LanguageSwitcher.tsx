import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLang = i18n.language === 'fr' ? 'FR' : 'EN';
  const flagIcon = i18n.language === 'fr' ? '🇫🇷' : '🇬🇧';
  
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition text-white"
      >
        <span>{flagIcon}</span>
        <span className="font-medium">{currentLang}</span>
      </button>
      
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
              <span className="text-brand-earth-dark">🇫🇷</span>
              <span className="text-brand-earth-dark">Français</span>
            </button>
            <button 
              onClick={() => changeLang('en')}
              className="flex items-center gap-2 px-4 py-2 hover:bg-muted w-full text-left"
            >
              <span className="text-brand-earth-dark">🇬🇧</span>
              <span className="text-brand-earth-dark">English</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
