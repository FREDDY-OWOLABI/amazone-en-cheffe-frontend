//src/components/layout/Header.tsx

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Heart, Facebook, Youtube } from 'lucide-react';
import { ProgressBarCountdown } from './ProgressBarCountdown';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { useIsMobile } from '../../hooks/use-mobile';

export const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  return (
    <>
      <header className="sticky top-0 bg-brand-earth-dark text-white z-40 shadow-lg">
        {/* Desktop Header */}
        <div className="hidden md:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* Left: Progress Bar */}
              <div className="w-40">
                <ProgressBarCountdown />
              </div>

              {/* Center: Logo */}
              <Link to="/" className="flex-shrink-0">
                <img
                  src={
                    isMobile
                      ? "/assets/images/KEITHSONONLogoofficielblancPotrait.png"
                      : "/assets/images/KEITHSONONLogoofficielblancPotrait.png"
                  }
                  alt="L'Amazone en Cheffe - Keith SONON"
                  className="h-24 object-contain"
                />
              </Link>


              {/* Right: Social + Language */}
              <div className="flex items-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition">
                  <Youtube className="w-5 h-5" />
                </a>
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className=" py-3">
            <div className="container mx-auto px-4 bg-brand-gold rounded-full">
              <div className="px-4 py-1">
                <ul className="flex justify-center items-center gap-8 text-brand-earth-dark font-medium">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? 'font-bold border-b-2 border-brand-earth-dark pb-1' : 'hover:text-brand-earth transition'
                      }
                    >
                      {t('nav.home')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/guinness-record"
                      className={({ isActive }) =>
                        isActive ? 'font-bold border-b-2 border-brand-earth-dark pb-1' : 'hover:text-brand-earth transition'
                      }
                    >
                      {t('nav.guinness')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? 'font-bold border-b-2 border-brand-earth-dark pb-1' : 'hover:text-brand-earth transition'
                      }
                    >
                      {t('nav.about')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/news"
                      className={({ isActive }) =>
                        isActive ? 'font-bold border-b-2 border-brand-earth-dark pb-1' : 'hover:text-brand-earth transition'
                      }
                    >
                      {t('nav.news')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/team"
                      className={({ isActive }) =>
                        isActive ? 'font-bold border-b-2 border-brand-earth-dark pb-1' : 'hover:text-brand-earth transition'
                      }
                    >
                      {t('nav.team')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/support"
                      className={({ isActive }) =>
                        `flex items-center gap-2 bg-or-degrade text-terre-afrique font-bold rounded-full py-2 px-4  space-x-2 hover:bg-yellow-500 ${isActive ? 'font-bold border-b-2 border-brand-earth-dark pb-1' : 'hover:text-brand-earth transition'}`
                      }
                    >
                      {t('nav.support')}
                      <Heart className="w-4 h-4 fill-current" />
                    </NavLink>
                  </li>
                </ul>
              </div>


            </div>
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 hover:bg-white/10 rounded-lg transition"
              >
                <Menu className="w-6 h-6" />
              </button>

              <Link to="/" className="flex-shrink-0">
                <img
                  src={
                    isMobile
                      ? "/assets/images/KEITHSONONLogoofficielblancPaysage.png"
                      : "/assets/images/KEITHSONONLogoofficielblancPaysage.png"
                  }
                  alt="L'Amazone en Cheffe - Keith SONON"
                  className="h-24 object-contain"
                />
              </Link>

              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
