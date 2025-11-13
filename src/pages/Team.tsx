import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Layout } from '@/components/layout/Layout';
import { teamApi, sponsorsApi, testimonialsApi } from '@/lib/api';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Team = () => {
  const { t } = useTranslation();

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

  return (
    <Layout footerBgColor="bg-brand-yellow-light">
      {/* Hero */}
      <section className="bg-brand-earth-dark  team-hero-section-bg py-16">
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
            {t('team.project_team')}
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
                      <span className="text-gray-400 text-sm">Photo</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-brand-gold to-brand-honey p-4 rounded-b-2xl text-center relative">
                    <button className="absolute -top-3 right-4 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow">
                      <X className="w-4 h-4 text-brand-earth-dark" />
                    </button>
                    
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
            {sponsors.slice(0, 16).map((sponsor: any) => (
              <div 
                key={sponsor.id}
                className="flex items-center justify-center p-4"
              >
                <div className="w-full h-12 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Logo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="bg-brand-yellow-light py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-gold text-center mb-12">
            {t('team.supporters')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
