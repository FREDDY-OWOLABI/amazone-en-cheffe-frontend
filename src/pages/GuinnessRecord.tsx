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
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Pendant 15 jours, je m'engage à valoriser la gastronomie béninoise en proposant 
              une variété de plats du Bénin, afin d'inscrire mon pays dans le livre des records. 
              Une consécration personnelle, mais aussi un engagement fort envers mes racines et 
              ma passion pour la cuisine.
            </p>
            
            <p>
              Ce défi représente bien plus qu'un simple record. C'est l'opportunité de mettre 
              en lumière la richesse culinaire du Bénin, de partager mon héritage avec le monde 
              entier, et de prouver que la passion et la détermination peuvent mener aux plus 
              grandes réalisations.
            </p>
            
            {/* CTA Box */}
            <div className="bg-gradient-to-r from-brand-gold to-brand-honey p-6 rounded-lg my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-brand-earth-dark font-medium">
                Soutenez-moi dans ce défi historique et participez à l'aventure !
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
            
            <p>
              Zen et confiante, je vis cette échéance avec sérénité, sans regret, consciente 
              que chaque étape de mon parcours me construit. Je me donne 5 ans pour concrétiser 
              de nouveaux projets après ce record.
            </p>
          </div>
        </div>
      </section>

      {/* Marathon de Décembre Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-script text-4xl md:text-5xl text-brand-gold text-center mb-8">
            {t('guinness.marathon_title')}
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Le marathon culinaire débutera en décembre 2025. Pendant 15 jours consécutifs, 
              je cuisinerai sans interruption, en respectant le protocole strict du Guinness 
              World Records.
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
                  <span>Objectif : Valoriser la gastronomie béninoise</span>
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
      <section className="bg-brand-yellow-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-gold text-center mb-4">
            {t('guinness.timeline_title')}
          </h2>
          <p className="text-center text-brand-earth-dark mb-12 max-w-2xl mx-auto">
            Retrouvez ci-joint le détail étape par étape pour nous suivre dans l'aventure
          </p>
          
          {/* Timeline Visualization */}
          <div className="relative max-w-4xl mx-auto">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand-earth-dark -translate-y-1/2 hidden md:block" />
            
            <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
              {/* Start Point */}
              <div className="relative z-10 text-center">
                <div className="bg-brand-gold w-8 h-8 rounded-full border-4 border-brand-earth-dark mx-auto mb-4" />
                <p className="text-sm font-medium text-brand-earth-dark">Début du Marathon</p>
                <p className="text-xs text-brand-earth-dark/70">Décembre 2025</p>
              </div>
              
              {/* Middle Points */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative z-10">
                  <div className="bg-brand-earth-dark w-6 h-6 rounded-full mx-auto" />
                </div>
              ))}
              
              {/* End Point */}
              <div className="relative z-10 text-center">
                <div className="bg-brand-gold w-8 h-8 rounded-full border-4 border-brand-earth-dark mx-auto mb-4" />
                <p className="text-sm font-medium text-brand-earth-dark">Fin du Marathon</p>
                <p className="text-xs text-brand-earth-dark/70">15 jours plus tard</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuinnessRecord;
