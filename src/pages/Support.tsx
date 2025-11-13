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
      <section className="bg-brand-earth-dark support-hero-section-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="title-primary text-5xl md:text-7xl text-white"
          >
            {t('support.title')}
          </motion.h1>
        </div>
      </section>

       {/* Why Section */}
        <div className="my-12 container mx-auto px-4">
          <h1 className="text-3xl font-bold font-heading mb-6 w-full text-center">
            Pourquoi ?
          </h1>
          <h2 className=" guton mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </h2>
          <p className="leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className=" leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h2 className="title-primary text-3xl text-brand-gold text-center mb-6">
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
              <h2 className="title-primary text-3xl text-brand-gold text-center mb-6">
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

      <section className="bg-brand-yellow-light py-12 relative">
  <div className="container mx-auto px-4 max-w-2xl relative pt-16">
    {/* Titre qui dépasse à moitié */}
    <h2 className=" w-full absolute -top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[54px] md:text-[72px] text-center text-outline-section-titre">
      {t('support.contact_title')}
    </h2>

    <div className="flex justify-center">
    <div className="inline-flex justify-center gap-4 mb-8 mt-24 bg-brand-gold-dark text-white px-6 py-3 rounded-full">
  <Facebook className="w-6 h-6" />
  <Youtube className="w-6 h-6" />
  <Instagram className="w-6 h-6" />
</div>
</div>


    <form className="space-y-4">
      <Input placeholder="Nom et prénom" className="bg-white" />
      <Input type="email" placeholder="Email" className="bg-white" />
      <Textarea placeholder="Votre message" rows={6} className="bg-white" />
      <ButtonPrimary type="submit" className="w-full md:w-auto">
        {t('support.send_message')}
      </ButtonPrimary>
    </form>
  </div>
</section>

    </Layout>
  );
};

export default Support;
