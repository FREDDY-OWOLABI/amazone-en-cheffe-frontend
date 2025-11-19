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
      {/* Hero Section pc et tablette  */}
      <section className="bg-brand-earth-dark home-hero-section-bg pb-0 hidden md:block md:relative md:top-0 md:mt-0">

        <div className="container mx-auto px-4 ">


          <div className=" mx-auto w-full pt-8">
            <div className="container mx-auto gap-8 grid grid-cols-1 md:grid-cols-2 ">

              {/* PHOTO GAUCHE */}
              <div className="flex justify-center md:justify-end">
                <img
                  src="/assets/images/cheffe-keith-home-profil.png"
                  alt="Cheffe Keith Sonon"
                  className=" w-auto h-[32rem] "
                />
              </div>


              {/* TEXTE DROITE */}
              <div className="text-center md:text-left flex items-center justify-center md:justify-start">
                <div className="container">
                  <h1 className="font-heading text-5xl md:text-7xl text-white leading-tight mb-4">
                    Découvrez l'Amazone en Cheffe.<br />

                  </h1>

                  <p className="text-white text-lg leading-relaxed mb-6">

                    Je suis Keith SONON et je vais battre le record Guinness du plus long marathon
                    culinaire. Je vous invite à cliquer et à faire partie de mon histoire.


                  </p>

                  <div className="flex flex-col justify-center  items-start gap-6 mb-6">

                    {/* Réseaux sociaux */}
                    <div className="flex items-center gap-5 mb-4 md:mb-0">
                      <img src="/assets/images/Facebook.svg" className="w-7 h-7" />
                      <img src="/assets/images/Instagram.svg" className="w-7 h-7" />
                      <img src="/assets/images/TikTok.svg" className="w-7 h-7" />
                      <img src="/assets/images/WhatsApp.svg" className="w-7 h-7" alt="WhatsApp" />
                      <img src="/assets/images/Phone.svg" className="w-7 h-7" alt="Phone" />
                    </div>

                    {/* CTA */}
                    <ButtonPrimary
                      className="bg-brand-gold hover:bg-brand-gold/80 text-brand-earth-dark font-bold px-6 py-3 rounded-full shadow-md"
                      onClick={() => navigate("/support")}
                    >
                      <div className="flex items-center gap-3">
                        <span>Soutenez-moi</span>
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <img
                            src="/assets/images/streamline-plump_give-gift-solid.svg"
                            alt="Icône de don"
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                    </ButtonPrimary>

                  </div>




                </div>
              </div>

            </div>



          </div>
        </div>
        <div className=" py-10">

        </div>
      </section>
      {/* Hero Section mobile*/}

      <section className="bg-brand-earth-dark home-hero-section-bg pb-0  block md:hidden">
        <div className="container mx-auto px-4 relative">

          {/* Hero Image with decorative background */}
          <div className="relative mx-auto w-full max-w-md pt-8">
            {/* Decorative circular background */}
            <div className="absolute inset-0 top-12 mx-auto w-64 h-96 overflow-hidden">
              <img
                src="assets/images/cheffe-keith-home-profil.png"
                alt="Portrait de Keith Sonon"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-full z-20 opacity-100"
              />
            </div>

            <div className="relative z-10 w-full aspect-[3/2] bg-transparent rounded-t-full flex items-end justify-center">
              <div className="text-center pb-12">


              </div>
            </div>

          </div>
        </div>
        <div className=" w-full bg-brand-yellow-light mb-[10px] border-0">
          <div className=" mx-auto px-4 max-w-md pt-[100px] ">

            <h1 className="font-heading text-5xl text-brand-earth-dark  leading-tight mb-2 pt-6">
              Découvrez l'Amazone en Cheffe.<br />

            </h1>

            <p className="text-brand-earth-dark text-lg leading-relaxed mb-6 ">

              Je suis Keith SONON et je vais battre le record Guinness du plus long marathon
              culinaire. Je vous invite à cliquer et à faire partie de mon histoire.
            </p>

            <div className="flex flex-col justify-center  items-center gap-2 mb-0">

              {/* Réseaux sociaux */}

              <div className="flex justify-center">
                <div className="inline-flex justify-center gap-4 mb-8 mt-0 sm:mt-4 lg:mt-2 bg-brand-gold-dark text-white px-6 py-3 rounded-full">
                  <img src="/assets/images/Facebook.svg" className="w-7 h-7" alt="Facebook" />
                  <img src="/assets/images/Instagram.svg" className="w-7 h-7" alt="Instagram" />
                  <img src="/assets/images/TikTok.svg" className="w-7 h-7" alt="TikTok" />
                  <img src="/assets/images/WhatsApp.svg" className="w-7 h-7" alt="WhatsApp" />
                  <img src="/assets/images/Phone.svg" className="w-7 h-7" alt="Phone" />
                </div>
              </div>

              {/* CTA */}
              <ButtonPrimary
                className="bg-brand-gold hover:bg-brand-gold/80 text-brand-earth-dark font-bold px-6 py-3 rounded-full shadow-md"
                onClick={() => navigate("/support")}
              >
                <div className="flex items-center gap-3">
                  <span>Soutenez-moi</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <img
                      src="/assets/images/streamline-plump_give-gift-solid.svg"
                      alt="Icône de don"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </ButtonPrimary>

            </div>
          </div>



        </div>
      </section>



      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-brand-yellow-light py-4 sm:py-12 lg:py-12"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-justify text-lg md:text-xl text-brand-earth-dark  leading-relaxed mb-2  mt-4 md:mt-0">
              Béninois et béninoises, préparons-nous à vivre un moment historique où passion et détermination
              fusionnent. Cheffe Keith SONON, l’Amazone en Cheffe, se lance dans un défi spécial : battre le record du
              monde Guinness du plus long marathon culinaire.
            </p>
            <p className="text-justify text-brand-earth-dark text-lg md:text-xl leading-relaxed mb-8  mt-2 md:mt-0">
              Du 1er au 15 décembre, elle sera aux fourneaux en enchaînant des plats savoureux qui mêleront
              innovation et culture sous le regard des béninois et du monde. Sur ce site, suivez son aventure, vibrez
              avec elle et soyez témoins d’une page historique de la gastronomie béninoise qui s’écrit.
            </p>




            {/* CTA Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              {/* Groupe Support + Donate */}
              <div className="flex flex-row gap-4 justify-center w-full sm:w-auto">


                {/* <ButtonPrimary
                  onClick={() => navigate('/support')}
                  className="font-bold flex-1 sm:flex-none"
                >
                  {t('cta.support')}
                </ButtonPrimary>  */}

                <a href="/support#donate" className="font-bold flex-2 sm:flex-none">
                  <ButtonPrimary
                    className="w-full"
                  >
                    {t('cta.donate')}
                  </ButtonPrimary>

                </a>



              </div>

              {/* Participate 
              <ButtonOutline
                onClick={() => navigate('/support')}
                className="font-bold w-full sm:w-auto"
              >
                {t('cta.participate')}
              </ButtonOutline>*/}
            </div>









          </div>
        </div>
      </motion.section>


      <section className="bg-brand-yellow-light pb-12">
      </section>
    </Layout>
  );
};

export default Index;
