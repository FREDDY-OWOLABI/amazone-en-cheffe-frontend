// src/pages/Support.tsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ButtonPrimary } from '@/components/ui/ButtonPrimary';
import { ButtonSecondary } from '@/components/ui/ButtonSecondary';
import { Facebook, Youtube, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Support = () => {
  const { t } = useTranslation();

  //  requêtes commentées
  /*
  const { data: donationData } = useDonationTotal();
  const { data: contributors = [] } = useContributorsList();
  */

  //  Données locales simulées
  const donationData = { total: '218 000 F CFA' };

  const contributors = [
    { id: 1, name: "Anonyme", amount: "9,000", days: "2 jours" },
    { id: 2, name: "John Doe", amount: "20,000", days: "1 jour" },
    { id: 3, name: "Jane Doe", amount: "180,000", days: "3 jours" },
    { id: 4, name: "Anonyme", amount: "9,000", days: "2 jours" },
    { id: 5, name: "John Doe", amount: "20,000", days: "1 jour" },
    { id: 6, name: "Jane Doe", amount: "180,000", days: "3 jours" },
    { id: 7, name: "Anonyme", amount: "9,000", days: "2 jours" },
    { id: 8, name: "John Doe", amount: "20,000", days: "1 jour" },
    { id: 9, name: "Jane Doe", amount: "180,000", days: "3 jours" },
    { id: 10, name: "Anonyme", amount: "9,000", days: "2 jours" },
    { id: 11, name: "John Doe", amount: "20,000", days: "1 jour" },
    { id: 12, name: "Jane Doe", amount: "180,000", days: "3 jours" },
    { id: 13, name: "Anonyme", amount: "9,000", days: "2 jours" },
    { id: 14, name: "John Doe", amount: "20,000", days: "1 jour" },
    { id: 15, name: "Jane Doe", amount: "180,000", days: "3 jours" },
  ];

  const needs = [
    { icon: "/assets/images/Flame.svg", label: "Besoin 1", obsolete: "oui" },
    { icon: "/assets/images/Flame.svg", label: "Besoin 4", obsolete: "non" },
    { icon: "/assets/images/Flame.svg", label: "Besoin 7", obsolete: "non" },
    { icon: "/assets/images/Flame.svg", label: "Besoin 2", obsolete: "non" },
    { icon: "/assets/images/Flame.svg", label: "Besoin 5", obsolete: "non" },
    { icon: "/assets/images/Flame.svg", label: "Besoin 8", obsolete: "oui" },
    { icon: "/assets/images/Flame.svg", label: "Besoin 3", obsolete: "oui" },
    { icon: "/assets/images/Flame.svg", label: "Besoin 6", obsolete: "oui" },
    { icon: "/assets/images/Flame.svg", label: "Besoin 9", obsolete: "non" },
  ];

  return (
    <Layout footerBgColor="bg-brand-yellow-light">
      {/* Hero */}
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
      <section className="bg-white py-16">
        <div className="my-12 container mx-auto px-4">
          <h1 className="text-5xl font-bold font-heading text-or-degrade mb-6 w-full text-center">
            Pourquoi ?
          </h1>
          <p className="guton mb-4 text-lg leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Formulaire de don */}
            <div>
              <h2 className="title-primary text-3xl text-brand-gold text-center mb-6">
                {t('support.donate_title')}
              </h2>

              <div className="bg-brand-earth-dark rounded-3xl p-8 text-white">
                <div className="mb-6">

                  <div
                    className="w-full  bg-white text-center text-brand-earth-dark px-4 py-6  my-3 rounded-lg placeholder-gray-500"
                  >
                    Emplacement de l'agrégateur de paiement
                  </div>

                  <h4 className="font-medium mb-4 font-heading text-3xl">{t('support.needs_title')}</h4>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                   

                    {needs.map((need, index) => (
                      <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <img className="w-5 h-5" src={need.icon} />

                        {need.obsolete === "oui" ? (
                          <s className="text-sm text-gray-400">{need.label}</s>
                        ) : (
                          <span className="text-sm">{need.label}</span>
                        )}
                      </label>
                    ))}

                  </div>
                </div>


                <ButtonSecondary className="w-full md:w-auto font-bold">
                  Contribuer en nature
                </ButtonSecondary>
              </div>
            </div>

            {/* Liste des contributeurs */}
            <div>
              <h2 className="title-primary text-3xl text-bg-brand-earth-dark text-center mb-6">
                {t('support.contributors_title')}
              </h2>

              <div className="bg-gray-100 rounded-3xl p-6">
                <div className="text-center mb-6">
                  <p className="text-3xl text-left font-bold text-brand-earth-dark">
                    {donationData?.total} {t('support.total_collected')}
                  </p>


                  <p className="text-sm flex justify-between items-center text-gray-500 font-bold mb-4 pb-4 border-b border-brand-earth/80">
                    <span className="text-left">sur 1.000.000 F CFA </span>
                    <span className="text-xl"> 40 donateurs</span>
                  </p>
                </div>


                <div className="space-y-3 max-h-96 overflow-y-auto px-8">
                  {contributors.map((contributor) => (
                    <div key={contributor.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{contributor.name}</span>
                      <span className="font-bold text-brand-gold">{contributor.amount} F CFA - &nbsp;<span className="text-sm font-medium text-gray-700">{contributor.days}</span> </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-brand-yellow-light py-12 relative">
        <div className="container mx-auto px-4 max-w-2xl relative pt-16">
          {/* Titre qui dépasse */}
          <h2 className="w-full absolute -top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[54px] md:text-[72px] text-center text-outline-section-titre">
            {t('support.contact_title')}
          </h2>

          {/* Réseaux sociaux */}
          <div className="flex justify-center">
            <div className="inline-flex justify-center gap-4 mb-8 mt-24 bg-brand-gold-dark text-white px-6 py-3 rounded-full">
              <img src="/assets/images/Facebook.svg" className="w-5 h-5" />
              <img src="/assets/images/Instagram.svg" className="w-5 h-5" />
              <img src="/assets/images/TikTok.svg" className="w-5 h-5" />
              <img src="/assets/images/WhatsApp.svg" className="w-5 h-5" />
              <img src="/assets/images/Phone.svg" className="w-5 h-5" />


            </div>
          </div>

          {/* Formulaire de contact */}
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
