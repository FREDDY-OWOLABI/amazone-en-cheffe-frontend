//src/pages/GuinnessRecord.tsx

import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const GuinnessRecord = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-earth-dark guinness-hero-section py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl text-white  title-primary"
          >
            {t('guinness.title')}
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-gray-700 leading-relaxed ">
            <p className='text-justify text-brand-earth-dark text-lg md:text-xl'>
              Bien plus qu’une tentative de record, ce marathon culinaire incarne l’aboutissement de ma passion et de
              mon engagement pour la cuisine. Pendant 15 jours, je relève le défi de créer le maximum de plats, mêlant
              tradition et innovation, pour marquer l’histoire et célébrer le partage à travers la gastronomie. Cette
              aventure, rythmée par l’énergie de mon équipe et le soutien du public, symbolise ma vision d’une cuisine
              sans limites.
            </p>

            <p className='text-justify text-brand-earth-dark text-lg md:text-xl'>
              Au-delà des fourneaux, chaque plat servi portera également une dimension solidaire : des plats seront
              distribués et offerts aux plus nécessiteux pendant le challenge. Cette performance culinaire se veut ainsi
              une fête généreuse, où l'audace créative se mêle à l'impact humain, et où chaque saveur raconte une
              histoire de partage et de persévérance. <br />

            </p>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-brand-gold to-brand-honey p-6 rounded-lg my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white font-medium text-justify ">
                Rejoignez-moi dans cette quête exceptionnelle : ensemble, écrivons une page mémorable du patrimoine
                culinaire !
              </p>
              <button className="font-secondary font-medium bg-brand-earth-dark text-white px-6 py-3 rounded-full flex items-center gap-2 whitespace-nowrap hover:bg-brand-earth transition">
                Soutenez-moi

                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="/assets/images/streamline-plump_give-gift-solid.svg"
                    alt="Icône de don"
                    className="w-6 h-6"
                  />
                </div>
              </button>
            </div>


          </div>
        </div>
      </section>

      {/* Marathon de Décembre Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-gold text-center mb-8">
            {t('guinness.marathon_title')}
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className='text-justify text-brand-earth-dark text-lg md:text-xl'>
              À partir du 1er décembre jusqu’au 15 décembre 2025 au Palais des Congrès de Cotonou, je me lance dans
              un défi culinaire hors norme : battre le record du monde Guinness du plus long marathon culinaire.
              Pendant plusieurs jours et nuits, je cuisinerai en créant des plats uniques qui célèbrent la diversité des
              saveurs et la résistance de la passion. Ce marathon est bien plus qu’une performance : c’est un hommage
              à la persévérance, à la créativité et à l’amour du partage. Rejoignez-moi, virtuellement ou en personne,
              pour vivre chaque instant de cette aventure exceptionnelle. Ensemble, écrivons l’histoire.
            </p>

            <p className='text-justify text-brand-earth-dark text-lg md:text-xl'>         
              Chaque plat servi durant ce marathon sera une ode à la passion et à l’amour de la cuisine. Cette épreuve,
              aussi physique qu’émotionnelle, incarne ma vision d’une cuisine engagée et sans frontières. Votre
              soutien, qu’il soit un like, un message ou une présence, sera mon plus grand carburant. Merci de faire
              partie de cette folle tentative où l’art culinaire deviendra légende.
            </p>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold text-brand-earth-dark mb-4">Les détails du défi :</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold font-bold">•</span>
                  <span>Durée : 15 jours consécutifs de cuisine ininterrompue</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-brand-gold font-bold">•</span>
                  <span>Témoins officiels présents en permanence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold font-bold">•</span>
                  <span>Documentation complète (vidéo et photographie)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}

      <section className="bg-brand-yellow-light py-16 relative">
        <div className="container mx-auto px-4 relative pt-16">
          {/* Titre qui dépasse à moitié */}
          <h2 className="absolute  -top-[64px]  md:-top-[54px] left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[28px] sm:text-[35px]  lg:text-[70px] text-center text-outline-section-titre">
            {t('guinness.timeline_title')}
          </h2>

          <p className="text-center text-brand-earth-dark mb-12 max-w-2xl mx-auto mt-5">
            Suivez l’avancée du marathon ici.
          </p>

         







{/* Timeline Visualization */}
<div className="relative max-w-4xl mx-auto ">
  {/* Horizontal line */}
  <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand-earth-dark -translate-y-1/2 hidden md:block" />

  <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
    {/* Start Point */}
    <div className="relative z-10 text-center group">
      <div className="bg-brand-gold w-8 h-8 rounded-full border-4 border-brand-earth-dark mx-auto mb-4 cursor-pointer" />
      {/* Tooltip */}
      <div className="absolute w-40 h-auto bottom-full mb-2 left-1/2 -translate-x-1/2 text-brand-earth-dark bg-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ">
        Début du Marathon (0%)
        </div>
      <p className="text-sm font-medium text-brand-earth-dark">Début du Marathon (0%)</p>
      <p className="text-xs text-brand-earth-dark/70">Décembre 2025</p>
    </div>

    {/* Middle Points */}

    {/* Middle Points */}
    {Array.from({ length: 4 }).map((_, i) => {
      const percent = Math.round(((i + 1) * 100) / 5); // 5 = nombre total de points - 1 pour inclure début/fin
      return (
        <div key={i} className="relative z-10 group text-center">
          <div className="bg-brand-earth-dark w-6 h-6 rounded-full mx-auto cursor-pointer" />
          <div className="absolute w-40 h-auto bottom-full mb-2 left-1/2 -translate-x-1/2 text-brand-earth-dark bg-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Point {i + 1} - {percent}%
          </div>
          <p className="text-sm font-medium text-brand-earth-dark">Point {i + 1} ({percent}%)</p>
        </div>
      );
    })}


  

    {/* End Point */}
    <div className="relative z-10 text-center group">
      <div className="bg-brand-gold w-8 h-8 rounded-full border-4 border-brand-earth-dark mx-auto mb-4 cursor-pointer" />
      <div className="absolute  w-40 h-auto bottom-full mb-2 left-1/2 -translate-x-1/2 bg-brand-earth-dark text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ">
        Fin du Marathon (100%)
      </div>
      <p className="text-sm font-medium text-brand-earth-dark">Fin du Marathon</p>
    </div>
  </div>
</div>



        </div>
      </section>

    </Layout>
  );
};

export default GuinnessRecord;
