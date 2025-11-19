import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { X } from 'lucide-react';
import { useState } from 'react';

const Team = () => {
  const { t } = useTranslation();

  // Requêtes API commentées
  /*
  const { data: team = [] } = useQuery({
    queryKey: ['team'],
    queryFn: async () => {
      const response = await teamApi.getAll();
      return response.data;
    },
  });

  const { data: sponsors = [] } = useQuery({
    queryKey: ['sponsors-grid'],
    queryFn: async () => {
      const response = await sponsorsApi.getAll();
      return response.data;
    },
  });

  const { data: testimonials = [] } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const response = await testimonialsApi.getAll();
      return response.data;
    },
  });
  */

  // Variables locales simulant les données
  const team = [
    { id: 1, name: 'Alice Dupont', role: 'Chef de projet' },
    { id: 2, name: 'Jean Martin', role: 'Développeur' },
    { id: 3, name: 'Sophie Bernard', role: 'Designer' },
    { id: 4, name: 'Alice Dupont', role: 'Chef de projet' },
    { id: 5, name: 'Jean Martin', role: 'Développeur' },
    { id: 6, name: 'Sophie Bernard', role: 'Designer' },
  ];

  const sponsors = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
    { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 },
  ];

  const testimonials = [
    { id: 1, name: 'Lucie', message: 'Super équipe !', location: 'Paris' },
    { id: 2, name: 'Marc', message: 'Travail de qualité.', location: 'Lyon' },
    { id: 3, name: 'Anna', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', location: 'Marseille' },
    { id: 4, name: 'Lucie', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', location: 'Paris' },
    { id: 5, name: 'Marc', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', location: 'Lyon' },
    { id: 6, name: 'Anna', message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ', location: 'Marseille' },
    { id: 7, name: 'Lucie', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', location: 'Paris' },
    { id: 8, name: 'Marc', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', location: 'Lyon' },
    { id: 9, name: 'Anna', message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet', location: 'Marseille' },
    { id: 1, name: 'Lucie', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', location: 'Paris' },
    { id: 10, name: 'Marc', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', location: 'Lyon' },
    { id: 11, name: 'Anna', message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit', location: 'Marseille' },
    { id: 12, name: 'Lucie', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', location: 'Paris' },
    { id: 13, name: 'Marc', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', location: 'Lyon' },
    { id: 14, name: 'Anna', message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', location: 'Marseille' },

  ];

  return (
    <Layout footerBgColor="bg-brand-yellow-light">
      {/* Hero */}
      <section className="bg-brand-earth-dark team-hero-section-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="title-primary text-5xl md:text-7xl text-white"
          >
            {t('team.title')}
          </motion.h1>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-gold text-center mb-12">
            Découvrez les énergies derrière ce projet
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.length === 0 ? (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500">Informations de l'équipe à venir</p>
              </div>
            ) : (
              team.map((member: any) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="group"
                >
                  <div className="bg-brand-cream rounded-t-2xl p-6 aspect-square flex items-end justify-center">
                    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                      
                        <img
                    src="/assets/images/team-profil-15.png"
                    alt="Google"
                    className="w-full h-full"
                  />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-brand-gold to-brand-honey p-4 rounded-b-2xl text-center relative">
                    
                    {/* 
                    <button className="absolute -top-3 right-4 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow">
                      <span className="p-2 text-brand-earth-dark"> +</span>
                    </button>
                     */}

                    <p className="text-brand-earth-dark font-medium">
                      {member.name}
                    </p>
                    <p className="text-brand-earth-dark/80 text-sm">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-gold text-center mb-12">
            {t('team.partners')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {sponsors.map((sponsor: any) => (
              <div
                key={sponsor.id}
                className="flex items-center justify-center p-4"
              >
                <div className="w-full h-12 bg-transparent rounded flex items-center justify-center">
                  <img
                    src="/assets/images/Google_2015_logo.svg_3png.png"
                    alt="Google"
                    className="w-full h-full"
                  />
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="bg-brand-yellow-light py-12 sm:py-12 lg:py-12 relative">
        <div className="container mx-auto px-4 relative pt-4 sm:pt-16 lg:pt-16">
          {/* Titre qui dépasse à moitié */}
          <h2 className="absolute  -top-[44px]  md:-top-[54px] left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[27px] sm:text-[50px]  lg:text-[70px] text-center text-outline-section-titre">

            {t('team.supporters')}
          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-4 sm:mt-24 lg:mt-24">
            {testimonials.length === 0 ? (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500">Témoignages à venir</p>
              </div>
            ) : (
              testimonials.map((testimonial: any) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    "{testimonial.message}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-earth-dark font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-brand-earth-dark text-sm">
                        {testimonial.name}
                      </p>
                      {testimonial.location && (
                        <p className="text-gray-500 text-xs">
                          {testimonial.location}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
