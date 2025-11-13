import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { Download } from 'lucide-react';
import { ButtonOutline } from '@/components/ui/ButtonOutline';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-earth-dark about-hero-section-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className=" text-5xl md:text-7xl text-white title-primary"
          >
            {t('nav.about')}
          </motion.h1>
        </div>
      </section>

      {/* Biography Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Photo with decorative frame */}
          <div className="relative w-64 mx-auto mb-12">
            {/* Decorative golden frame */}
            <div className="relative">
              <div className="aspect-[3/4]  rounded-lg p-1">
                <div className="w-full h-full bg-gray-200 rounded-[34px] flex items-center justify-center  overflow-hidden">
                  <img src="assets/images/JU9A1787.PNG" alt="Portrait de Keith Sonon" className="relative bottom-0 left-1/2 -translate-x-1/2 h-auto w-full" />

                </div>
              </div>

              {/* "Qui suis-je ?" Badge */}
              <div className="absolute -bottom-8 left-1/2 w-full -translate-x-1/2  px-2 py-2  z-20 ">
                <p className="font-heading text-brand-gold  text-[40px]  w-full text-center">
                  {t('about.whoami')}
                </p>
              </div>
            </div>
          </div>

          {/* Biography Text */}
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed mt-16">
            <div className="space-y-4">
              <p>
                <strong>Keith Vanessa Yabo SONON</strong>, {t('about.age')}, est une {t('about.origin')},
                {t('about.intro')}.
              </p>
              <p>
                Sa couleur préférée, le blanc, symbolise à ses yeux la pureté, le commencement
                et la page blanche sur laquelle elle écrit chaque jour son histoire culinaire.
              </p>
              <p>
                Née avec l'amour des saveurs, Keith a très tôt passé son temps en cuisine
                « derrière les tatas » plutôt que sur ses cahiers.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                En 2022, elle réalise que sa place n'est nulle part ailleurs que derrière
                les fourneaux. Elle passe alors un marché avec sa mère : tenter sérieusement
                sa chance dans la cuisine avant de reprendre éventuellement ses études.
              </p>
              <p>
                Keith intègre alors une école d'art culinaire où elle décroche un CAP et un
                BP en deux ans. Rapidement repérée pour son talent, elle se voit confier les
                clés de cuisines professionnelles.
              </p>
              <p>
                Sa cuisine se définit en trois mots : <strong className="text-brand-gold">Fusionnelle</strong>,
                <strong className="text-brand-gold"> Savoureuse</strong> et
                <strong className="text-brand-gold"> Généreuse</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pressbook Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 flex justify-center mb-20">
          <div className="bg-brand-earth-dark rounded-2xl p-2 pt-0 flex items-center gap-6 max-w-md">
            <div className="relative h-40  translate-y-1/4  about-pressbooke-download-bg px-6 py-2 mt-0  rounded-lg z-20 shadow-lg">
              <div className="w-20 h-20 mt-6 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 opacity-0">
                
              </div></div>

            <div className="text-white -top-6 ">
              <h3 className="font-heading text-2xl mr-6 mb-4 text-[#F2DF80]">{t('about.pressbook')}</h3>
              <div className="container mx-auto px-4 text-center">
                <ButtonOutline className="text-sm border-0  font-bold">
                 <Download className="w-5 h-5 text-brand-earth-dark opacity-100 inline" /> {t('about.download')}
                </ButtonOutline>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="bg-brand-yellow-light py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-gold text-center mb-12">
            Galerie média
          </h2>

          {/* Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden bg-gray-200 cursor-pointer hover:scale-105 transition"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Photo {i}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden bg-gray-300 relative cursor-pointer group"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Vidéo {i}</span>
                </div>
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[20px] border-l-brand-gold border-y-[12px] border-y-transparent ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
