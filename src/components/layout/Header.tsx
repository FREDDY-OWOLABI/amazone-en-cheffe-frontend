//src/components/layout/Header.tsx

import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Heart, Facebook, Youtube } from 'lucide-react';
import { ProgressBarCountdown } from './ProgressBarCountdown';
import { ProgressBarDonationCollected } from './ProgressBarDonationCollected';

import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { useIsMobile } from '../../hooks/use-mobile';


export const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isMobile = useIsMobile();

  let headerBgClass = "bg-brand-earth-dark";

  if (location.pathname === "/") {
    headerBgClass = "home-hero-section-bg";
  } else if (location.pathname === "/guinness-record") {
    headerBgClass = "guinness-hero-section";
  } else if (location.pathname === "/about") {
    headerBgClass = "about-hero-section-bg";
  } else if (location.pathname === "/news") {
    headerBgClass = "news-hero-section-bg";
  }
  else if (location.pathname === "/team") {
    headerBgClass = "team-hero-section-bg";
  }
  else if (location.pathname === "/support") {
    headerBgClass = "support-hero-section-bg";
  }

  return (
    <>
      <header
        className={`sticky top-0 ${headerBgClass} text-white z-40 shadow-lg`}
      >
        {/* Desktop Header */}
        <div className="hidden md:block">
          <div className="container mx-auto px-4 ">
            <div className="flex items-center justify-between py-4 ">





              {/* LEFT: Logo */}
             
                <Link to="/" className="flex-shrink-0 font-heading">
                  <img
                    src={
                      location.pathname === "/support"
                        ? "/assets/images/KEITHSONONLogoNoirPaysage.png"
                        : "/assets/images/KEITHSONONLogoofficielblancPaysage.png"
                    }
                    alt="L'Amazone en Cheffe - Keith SONON"
                    className="h-24 object-contain"
                  />
                </Link>



              
              {/* Navigation Bar */}
              <nav className="py-3">
                <div className="w-full flex justify-center">
                  <div className="inline-flex bg-or-degrade rounded-full px-6 py-2">
                    <ul className="flex justify-center items-center gap-6 text-white text-sm">
                      <li>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? 'font-bold text-sm  bg-brand-earth-dark text-white  rounded-full py-2 px-4' : ' hover:text-brand-earth transition'
                          }
                        >
                          {t('nav.home')}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/guinness-record"
                          className={({ isActive }) =>
                            isActive ? 'font-bold text-sm  bg-brand-earth-dark text-white  rounded-full py-2 px-4' : 'hover:text-brand-earth transition'
                          }
                        >
                          {t('nav.guinness')}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/about"
                          className={({ isActive }) =>
                            isActive ? 'font-bold text-sm  bg-brand-earth-dark text-white  rounded-full py-2 px-4' : 'hover:text-brand-earth transition'
                          }
                        >
                          {t('nav.about')}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/news"
                          className={({ isActive }) =>
                            isActive ? 'font-bold text-sm  bg-brand-earth-dark text-white  rounded-full py-2 px-4' : 'hover:text-brand-earth transition'
                          }
                        >
                          {t('nav.news')}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/team"
                          className={({ isActive }) =>
                            isActive ? 'font-bold text-sm  bg-brand-earth-dark text-white  rounded-full py-2 px-4' : ' hover:text-brand-earth transition'
                          }
                        >
                          {t('nav.team')}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/support"
                          className={({ isActive }) =>
                            `flex items-center text-sm gap-2 border border-brand-earth-dark text-white  rounded-full py-1 px-4  space-x-2 hover:bg-yellow-500 ${isActive ? 'font-bold bg-yellow-200 !text-brand-earth-dark  text-terre-afrique ' : 'hover:text-brand-earth transition'}`
                          }
                        >
                          {t('nav.support')}
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <img
                              src="/assets/images/streamline-plump_give-gift-solid.svg"
                              alt="Icône de don"
                              className="w-4 h-4"
                            />
                          </div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              {/* RIGHT: Progress Bar */}
              <div className="flex gap-6">
                <div className="inline-block">
                  <ProgressBarCountdown />
                </div>

                {location.pathname === "/support" && (
                  <div className="inline-block">

                    {/* <div className="inline-block">
                     <ProgressBarDonationCollected />
                  </div> 
                  */}


                  </div>
                )}
              </div>

              {/* Right: Social + Language */}
              <div className="flex items-center gap-4 ">

                <LanguageSwitcher />
              </div>
            </div>
          </div>


        </div>

        {/* Mobile Header */}
        <div className="md:hidden ">
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
