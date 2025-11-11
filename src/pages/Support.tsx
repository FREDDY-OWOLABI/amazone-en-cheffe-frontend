import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { useDonationTotal, useContributorsList } from '@/hooks/useDonations';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ButtonPrimary } from '@/components/ui/ButtonPrimary';
import { ButtonSecondary } from '@/components/ui/ButtonSecondary';
import { Heart, Facebook, Youtube, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Support = () => {
  const { t } = useTranslation();
  const { data: donationData } = useDonationTotal();
  const { data: contributors = [] } = useContributorsList();

  return (
    <Layout footerBgColor="bg-brand-yellow-light">
      <section className="bg-brand-earth-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-script text-5xl md:text-7xl text-white"
          >
            {t('support.title')}
          </motion.h1>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h2 className="font-script text-3xl text-brand-gold text-center mb-6">
                {t('support.donate_title')}
              </h2>
              
              <div className="bg-brand-earth-dark rounded-3xl p-8 text-white">
                <div className="mb-6">
                  <h4 className="font-medium mb-4">{t('support.needs_title')}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Ingrédients', 'Équipement', 'Services', 'Autres'].map((need) => (
                      <label key={need} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded" />
                        <span className="text-sm">{need}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <ButtonSecondary className="w-full">
                  {t('nav.support')}
                </ButtonSecondary>
              </div>
            </div>
            
            <div>
              <h2 className="font-script text-3xl text-brand-gold text-center mb-6">
                {t('support.contributors_title')}
              </h2>
              
              <div className="bg-gray-50 rounded-3xl p-6">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-brand-earth-dark">
                    {donationData?.total || 0}
                  </p>
                  <p className="text-sm text-gray-600">{t('support.total_collected')}</p>
                </div>
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {contributors.map((contributor: any) => (
                    <div key={contributor.id} className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">{contributor.name}</span>
                      <span className="font-bold text-brand-gold">{contributor.amount} CFA</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-yellow-light py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-script text-4xl text-brand-gold text-center mb-8">
            {t('support.contact_title')}
          </h2>
          
          <div className="flex justify-center gap-4 mb-8">
            <Facebook className="w-6 h-6" />
            <Youtube className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
          </div>
          
          <form className="space-y-4">
            <Input placeholder="Nom et prénom" className="bg-white" />
            <Input type="email" placeholder="Email" className="bg-white" />
            <Textarea placeholder="Votre message" rows={6} className="bg-white" />
            <ButtonPrimary type="submit" className="w-full">
              {t('support.send_message')}
            </ButtonPrimary>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
