import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { Download, Play } from 'lucide-react';
import { useState } from "react";
import { ButtonOutline } from '@/components/ui/ButtonOutline';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();
  const [isDownloading, setIsDownloading] = useState(false);
  const images = [1, 2, 3, 4];
  const videos = [1, 2, 3, 4];
  const handleDownload = async () => {
  try {
    setIsDownloading(true);

    const link = document.createElement("a");
    link.href = "/pressbook.pdf"; 
    link.download = "pressbook-keith-sonon.pdf";
    document.body.appendChild(link);

    // Petit délai (optionnel mais améliore le ressenti)
    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 600);

  } catch (error) {
    console.error("Erreur téléchargement :", error);
    setIsDownloading(false);
  }
};

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
          <div className=" text-gray-700 leading-relaxed mt-16 text-lg md:text-xl">
            <div className="space-y-4">
              <p className='text-justify text-brand-earth-dark'>
                Je suis<strong> Keith SONON </strong> et j’ai 22 ans. Je suis une cheffe d’origine béninoise portée par une passion
                particulière pour la cuisine et une ambition sans limites.
              </p>
              <p className='text-justify text-brand-earth-dark'>
                Aujourd’hui, elle va à l’assaut du Record mondial Guinness du marathon culinaire le plus long et tout
                porte à croire que je suis née pour le battre.
              </p>
                <p className='text-justify text-brand-earth-dark'>
                Sa cuisine se définit en trois mots : <strong className="text-brand-gold">Fusionnelle</strong>,
                <strong className="text-brand-gold"> Savoureuse</strong> et
                <strong className="text-brand-gold"> Généreuse</strong>.
              </p>
              <p className='text-justify text-brand-earth-dark'>
                Si vous voulez en savoir plus sur moi, découvrez-moi à travers mon pressbook en téléchargement cidessous.
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
                
                <ButtonOutline
  onClick={handleDownload}
  disabled={isDownloading}
  className={`text-sm border-0 font-bold cursor-pointer flex items-center justify-center gap-2 ${
    isDownloading ? "opacity-60 cursor-not-allowed" : ""
  }`}
>
  {isDownloading ? (
    <>
      <span className="w-4 h-4 border-2 border-brand-earth-dark border-t-transparent rounded-full animate-spin"></span>
      {t('about.loading') ?? "Téléchargement..."}
    </>
  ) : (
    <>
      <Download className="w-5 h-5 text-brand-earth-dark opacity-100 inline" />
      {t('about.download')}
    </>
  )}
</ButtonOutline>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="bg-brand-yellow-light py-12">

        <div className="max-w-6xl mx-auto">






          <div className="relative container mx-auto px-4 pt-16">
            {/* Titre qui dépasse à moitié */}
            <h2 className="absolute text-outline-section-titre -top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[54px] md:text-[77px] text-brand-gold text-center">
              Galerie média
            </h2>

            {/* Photos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8  md:mt-16 mt-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-video p-0 rounded-2xl overflow-hidden bg-gray-300 cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src="/assets/images/galerie-media-aspect-img.png"
                    alt={`Image ${i}`}
                    className="w-full h-full object-cover block relative left-[-1px]"
                  />
                </div>
              ))}
            </div>

            {/* Photos Progress Bar */}
            <div className="mb-12 px-[20%]">
              <div className="h-1 w-full bg-white/80 rounded relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1/5 bg-brand-earth-dark rounded transition-all duration-500"></div>
              </div>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col cursor-pointer group">
                  {/* Video card */}
                  <div className="aspect-video rounded-2xl overflow-hidden bg-gray-300 relative hover:scale-105 transition-transform duration-300">
                    <img
                      src="/assets/images/galerie-media-aspect-img.png"
                      alt={`Vidéo ${i}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-transparent/30 flex items-center justify-center group-hover:bg-transparent/10 transition">
                      <div className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center">
                        <img
                          src="/assets/images/Play.png"
                          alt="Play"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Title below video */}
                  <p className="mt-2 text-sm font-semibold text-brand-earth-dark-800 text-left px-2">
                    Titre de la vidéo
                  </p>
                </div>
              ))}
            </div>

            {/* Videos Progress Bar */}
            <div className="mt-12 px-[20%]">
              <div className="h-1 w-full bg-white/80 rounded relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1/5 bg-brand-earth-dark rounded transition-all duration-500"></div>
              </div>
            </div>
          </div>




        </div>
      </section>
    </Layout>
  );
};

export default About;
