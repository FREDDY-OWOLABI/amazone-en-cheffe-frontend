import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ButtonPrimary } from '@/components/ui/ButtonPrimary';
import { ButtonSecondary } from '@/components/ui/ButtonSecondary';
import { ButtonOutline } from '@/components/ui/ButtonOutline';
import { motion } from 'framer-motion';

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-earth-dark pb-0">
        <div className="container mx-auto px-4 relative">

          {/* Hero Image with decorative background */}
          <div className="relative mx-auto w-full max-w-md pt-8">
            {/* Decorative circular background */}
            <div className="absolute inset-0 top-12 mx-auto w-64 h-96 rounded-t-full rounded-b-full overflow-hidden ">
                <img src="assets/images/JU9A1700.PNG" alt="Portrait de Keith Sonon" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-full" />

            </div>

            {/* Placeholder for Keith's photo */}
            <div className="relative z-20 w-full aspect-[3/4] bg-gradient-to-b from-brand-gold-light/20 to-transparent rounded-t-full flex items-end justify-center">
              <div className="text-center pb-12">
                <h1 className="font-heading text-5xl md:text-7xl text-brand-yellow mb-2 relative ">
                  Keith SONON
                </h1>
                <p className="text-xl text-white">
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
            <p className="text-brand-earth-dark text-lg leading-relaxed mb-8">
              {t('mission.text')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonPrimary onClick={() => navigate('/about')}>
                {t('cta.support')}
              </ButtonPrimary>
              <ButtonSecondary onClick={() => navigate('/support')}>
                {t('cta.donate')}
              </ButtonSecondary>
            </div>

            <ButtonOutline className="mt-4 w-full sm:w-auto" onClick={() => navigate('/support')}>
              {t('cta.participate')}
            </ButtonOutline>
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
