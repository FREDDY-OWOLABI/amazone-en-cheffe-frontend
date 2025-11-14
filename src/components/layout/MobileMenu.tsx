import { Link,useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { X, Heart, Facebook, Youtube, Instagram } from 'lucide-react';
import { ProgressBarCountdown } from './ProgressBarCountdown';
import { useIsMobile } from '../../hooks/use-mobile';
import { ProgressBarDonationCollected } from './ProgressBarDonationCollected';


interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const location = useLocation();

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-brand-earth-dark text-white z-50 flex flex-col ">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-white/10">
         <img
                  src={
                    isMobile
                      ? "/assets/images/KEITHSONONLogoofficielblancPaysage.png"
                      : "/assets/images/KEITHSONONLogoofficielblancPaysage.png"
                  }
                  alt="L'Amazone en Cheffe - Keith SONON"
                  className="h-24 object-contain"
                />



        <button 
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-lg transition"
        >
          <X className="w-8 h-8" />
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center justify-center gap-6 text-xl px-6 font-bold">
        <Link 
          to="/" 
          onClick={onClose}
          className="hover:text-brand-gold transition"
        >
          {t('nav.home')}
        </Link>
        <Link 
          to="/guinness-record" 
          onClick={onClose}
          className="hover:text-brand-gold transition"
        >
          {t('nav.guinness')}
        </Link>
        <Link 
          to="/about" 
          onClick={onClose}
          className="hover:text-brand-gold transition"
        >
          {t('nav.about')}
        </Link>
        <Link 
          to="/news" 
          onClick={onClose}
          className="hover:text-brand-gold transition"
        >
          {t('nav.news')}
        </Link>
        <Link 
          to="/team" 
          onClick={onClose}
          className="hover:text-brand-gold transition"
        >
          {t('nav.team')}
        </Link>
        
        {/* Support Button with Heart */}
        <Link 
          to="/support" 
          onClick={onClose}
          className="bg-brand-gold  text-white px-8 py-3 rounded-full flex items-center gap-2 font-bold hover:bg-brand-gold-dark transition mt-4"
        >
          {t('nav.support')}
          
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <img
                          src="/assets/images/streamline-plump_give-gift-solid.svg"
                          alt="Icône de don"
                          className="w-6 h-6"
                        />
                      </div>
        </Link>
      </nav>
      
      {/* Countdown Bar */}
      <div className="px-6 pb-8">
         <div className="flex gap-6">
                        <div className="inline-block">
                          <ProgressBarCountdown />
                        </div>
        
                       
                      </div>
      </div>
      
      {/* Social Icons */}
      <div className="flex justify-center gap-6 pb-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition">
          <Facebook className="w-6 h-6 " />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition">
          <Instagram className="w-6 h-6 " />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition">
          <Youtube className="w-6 h-6 " />
        </a>
      </div>
    </div>
  );
};
