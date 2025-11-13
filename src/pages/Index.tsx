import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ButtonPrimary } from '@/components/ui/ButtonPrimary';
import { ButtonSecondary } from '@/components/ui/ButtonSecondary';
import { ButtonOutline } from '@/components/ui/ButtonOutline';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Layout >
      {/* Hero Section */}
      <section className="bg-brand-earth-dark home-hero-section-bg pb-0 md:relative md:top-0 md:mt-0">
        <div className="container mx-auto px-4 relative">

          {/* Hero Image with decorative background */}
          <div className="relative mx-auto w-full max-w-md pt-8">
            {/* Decorative circular background */}
            <div className="absolute inset-0 top-12 mx-auto w-64 h-96  overflow-hidden ">
              <img src="assets/images/cheffe-keith-home-profil.png" alt="Portrait de Keith Sonon" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-full z-20 opacity-100" />

            </div>

            {/* Placeholder for Keith's photo */}
            <div className="relative z-10 w-full  aspect-[3/2] md:aspect-[3/4] bg-transparent md:bg-gradient-to-b md:from-brand-gold-light/15 md:to-transparent rounded-t-full flex items-end justify-center">
              <div className="text-center pb-12">
                <h1 className="hidden md:block font-heading text-5xl md:text-7xl text-brand-yellow mb-2 relative ">
                  Keith SONON
                </h1>
                <p className="hidden md:block text-xl text-white">
                  {t('hero.tagline')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-brand-yellow-light py-12"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-brand-earth-dark text-lg leading-relaxed mb-8  mt-20 md:mt-0">
              {t('mission.text')}
            </p>


            {/* CTA Buttons */}
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              {/* Groupe Support + Donate */}
              <div className="flex flex-row gap-4 justify-center w-full sm:w-auto">
                <ButtonPrimary
                  onClick={() => navigate('/about')}
                  className="font-bold flex-1 sm:flex-none"
                >
                  {t('cta.support')}
                </ButtonPrimary>

                <ButtonPrimary
                  onClick={() => navigate('/support')}
                  className="font-bold flex-1 sm:flex-none"
                >
                  {t('cta.donate')}
                </ButtonPrimary>
              </div>

              {/* Participate */}
              <ButtonOutline
                onClick={() => navigate('/support')}
                className="font-bold w-full sm:w-auto"
              >
                {t('cta.participate')}
              </ButtonOutline>
            </div>









          </div>
        </div>
      </motion.section>

      {/* Logo Section */}
      <section className="bg-brand-yellow-light pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block">
            <h2 className="font-heading text-6xl md:text-8xl text-brand-gold">
              L'Amazone
            </h2>
            <h3 className="font-heading text-4xl md:text-6xl text-brand-honey -mt-4">
              en Cheffe
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
