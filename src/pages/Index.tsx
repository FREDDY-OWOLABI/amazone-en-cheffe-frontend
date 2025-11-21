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

        <div className="container mx-auto px-4 max-w-3xl border-0 border-white">


          <div className=" mx-auto w-full pt-8">
            <div className="container mx-auto gap-6 flex flex-col md:flex-row  border-0 border-black">

              {/* PHOTO GAUCHE */}
              <div className="flex justify-start w-[38%] border-0 border-white">
                <img
                  src="/assets/images/cheffe-keith-home-profil.png"
                  alt="Cheffe Keith Sonon"
                  className=" w-auto h-[21rem] rounded-t-full rounded-b-full"
                />
              </div>


              {/* TEXTE DROITE */}
              <div className="text-center md:text-left flex items-center justify-center md:justify-start  w-[59%]">
                <div className="container text-left border-0 border-white pr-[50px]">
                  <h1 className="font-heading text-[40px] text-white leading-tight mb-4 border-0 border-black pr-[10px]">
                    Découvrez l'Amazone en Cheffe.<br />

                  </h1>

                  <p className="text-white text-[12px] lext-left leading-relaxed mb-4 border-0 border-black pr-[10px]">

                    Je suis Keith SONON et je vais battre le record Guinness du plus long marathon
                    culinaire. <br />Je vous invite à cliquer et à faire partie de mon histoire.


                  </p>

                  <div className="flex flex-col justify-center  items-start gap-6 mb-2">

                    {/* Réseaux sociaux */}

                    <div className="flex items-center gap-5 mb-0 ">
                      <a href="https://www.facebook.com/profile.php?id=61582118773479" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/Facebook.svg" className="w-5 h-5" alt="Facebook" />
                      </a>
                      <a href="https://www.instagram.com/keithsonon_?igsh=MTk5aGdrempmZnpj" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/Instagram.svg" className="w-5 h-5" alt="Instagram" />
                      </a>
                      <a href="https://www.tiktok.com/@keith_sonon?_r=1&_t=ZM-91aDQGo62bU" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/TikTok.svg" className="w-5 h-5" alt="TikTok" />
                      </a>
                      <a href="https://wa.me/2290166288282" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/WhatsApp.svg" className="w-5 h-5" alt="WhatsApp" />
                      </a>
                      <a href="tel:0166288282">
                        <img src="/assets/images/Phone.svg" className="w-5 h-5" alt="Phone" />
                      </a>
                    </div>


                    {/* CTA */}
                    <ButtonPrimary
                      className="bg-brand-gold hover:bg-brand-gold/80 text-brand-earth-dark font-bold px-4 py-2 rounded-full shadow-md"
                      onClick={() => navigate("/contribution")}
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
            <div className="absolute inset-0 top-12 mx-auto w-[300px] h-96 overflow-hidden">
              <img
                src="assets/images/cheffe-keith-home-profil.png"
                alt="Portrait de Keith Sonon"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-full z-20 opacity-100 rounded-t-full rounded-b-full"
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
              culinaire.<br />
              Je vous invite à cliquer et à faire partie de mon histoire.
            </p>

            <div className="flex flex-col justify-center  items-center gap-2 mb-0">

              {/* Réseaux sociaux */}

              <div className="flex justify-center">
                <div className="inline-flex justify-center gap-4 mb-8 mt-0 sm:mt-4 lg:mt-2 bg-brand-gold-dark text-white px-6 py-3 rounded-full">

                  <a href="https://www.facebook.com/profile.php?id=61582118773479" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/Facebook.svg" className="w-7 h-7" alt="Facebook" />
                  </a>
                  <a href="https://www.instagram.com/keithsonon_?igsh=MTk5aGdrempmZnpj" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/Instagram.svg" className="w-7 h-7" alt="Instagram" />
                  </a>
                  <a href="https://www.tiktok.com/@keith_sonon?_r=1&_t=ZM-91aDQGo62bU" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/TikTok.svg" className="w-7 h-7" alt="TikTok" />
                  </a>
                  <a href="https://wa.me/2290166288282" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/WhatsApp.svg" className="w-7 h-7" alt="WhatsApp" />
                  </a>
                  <a href="tel:0166288282">
                    <img src="/assets/images/Phone.svg" className="w-7 h-7" alt="Phone" />
                  </a>


                </div>
              </div>

              {/* CTA */}
              <ButtonPrimary
                className="bg-brand-gold hover:bg-brand-gold/80 text-brand-earth-dark font-bold px-6 py-3 rounded-full shadow-md"
                onClick={() => navigate("/contribution")}
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
          <div className="max-w-2xl mx-auto lg:pr-12 text-justify">
            <p className=" text-lg md:text-xl text-brand-earth-dark  leading-relaxed mb-2  mt-4 md:mt-0">
              Béninois et béninoises, préparons-nous à vivre un moment historique où passion et détermination
              fusionnent. Cheffe Keith SONON, l’Amazone en Cheffe, se lance dans un défi spécial : battre le record du
              monde Guinness du plus long marathon culinaire.
            </p>
            <p className=" text-brand-earth-dark text-lg md:text-xl leading-relaxed mb-8  mt-2 md:mt-0">
              Du 1er au 15 décembre, elle sera aux fourneaux en enchaînant des plats savoureux qui mêleront
              innovation et culture sous le regard des béninois et du monde. Sur ce site, suivez son aventure, vibrez
              avec elle et soyez témoins d’une page historique de la gastronomie béninoise qui s’écrit.
            </p>




            {/* CTA Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              {/* Donate */}
              <a href="/contribution#donate" className="font-bold sm:flex-none">
                <ButtonPrimary
                  className="w-[20rem]"
                >
                  {t('cta.donate')}
                </ButtonPrimary>
              </a>
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
