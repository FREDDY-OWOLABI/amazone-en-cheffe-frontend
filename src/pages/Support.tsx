// src/pages/Support.tsx

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ButtonPrimary } from '@/components/ui/ButtonPrimary';
import { ButtonSecondary } from '@/components/ui/ButtonSecondary';
import { motion } from 'framer-motion';
import ProgressBarDonationCollected from '@/components/layout/ProgressBarDonationCollected';
import { DONATION_TARGET, contributors } from '@/constants/donation';
import { needs } from '@/constants/need';
import { AmountModal } from '@/components/modals/AmountModal';
import { NeedsModal } from '@/components/modals/NeedsModal';
import PaymentMethods from "@/components/ui/PaymentMethods";

interface SupportProps {
  hideHeader?: boolean;
  hideFooter?: boolean;
}


const Support = ({ hideHeader = false, hideFooter = false }: SupportProps) => {
  const { t } = useTranslation();

  // États pour les modales
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [showNeedsModal, setShowNeedsModal] = useState(false);

  // Scroll vers #donate
  useEffect(() => {
    if (window.location.hash === "#donate") {
      const section = document.getElementById("donate");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, []);

  // Calculs
  const totalCollected = contributors.reduce((sum, c) => sum + Number(c.amount || 0), 0);
  const donorsCount = contributors.length;
  const formatNumber = (v: number) => new Intl.NumberFormat('fr-FR').format(Math.round(v));

  return (
    <Layout hideHeader={hideHeader} hideFooter={hideFooter} footerBgColor="bg-brand-yellow-light">
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

          <div className="flex justify-center mt-6 w-full">
            <ProgressBarDonationCollected
              collected={totalCollected}
              target={DONATION_TARGET}
              donors={donorsCount}
            />
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-or-degrade mb-8 text-center">
            Pourquoi ?
          </h1>

          <p className="guton mb-6 text-lg md:text-xl leading-relaxed text-justify text-brand-earth-dark">
            Vous savez, derrière chaque plat que je crée, il y a bien plus que des ingrédients. Il y a les mains et le
            savoir-faire de toutes les personnes qui m'ont appris à cuisiner ainsi que leurs expériences et toute une
            vie passée à croire que la cuisine est le plus beau des langages. Aujourd'hui, je me prépare à vivre le défi
            le plus intense de ma vie : un marathon culinaire de plusieurs jours et nuits pour tenter de battre un
            record du monde.
          </p>

          <p className="guton mb-6 text-lg md:text-xl leading-relaxed text-justify text-brand-earth-dark">
            Mais je vais être honnête avec vous : j'ai peur. J'ai peur de la fatigue, du doute, de la solitude dans ces
            longues heures avant l'aube. Pourtant, une force plus grande que la peur me pousse en avant : la
            conviction que c'est en repoussant nos limites que l'on inspire les autres à croire en leurs propres rêves.
            Ce marathon, c'est mon combat pour montrer que la passion peut transcender la douleur, et que l'on
            peut puiser une force insoupçonnée au fond de soi quand on le fait pour quelque chose de plus grand.
            C'est pourquoi je tends la main aujourd'hui, non pas en tant que l'Amazone en cheffe sûre d'elle, mais en
            tant que femme vulnérable et déterminée. Votre soutien, sous quelque forme que ce soit, serait la plus
            belle des épices dans cette aventure :
          </p>

          <ul className="list-disc list-inside mb-6 text-lg md:text-xl space-y-2 text-brand-earth-dark">
            <li>Vos mots d'encouragements sur mes différents réseaux sociaux</li>
            <li>Vos dons tant au niveau des produits de qualité qu'au niveau de la logistique de cet événement.</li>
            <li>Le partage de mon histoire autour de vous</li>
            <li>Votre présence, ne serait-ce que par la pensée, me rappellera que je ne suis pas seule.</li>
          </ul>

          <p className="guton mb-6 text-lg md:text-xl leading-relaxed text-justify text-brand-earth-dark">
            Je ne cherche pas la gloire, mais à écrire une histoire dont nous pourrons être fiers ensemble. Une
            histoire qui dit que quand une communauté se rassemble pour porter l'un des siens, même l'impossible
            devient réalisable.
          </p>

          <p className="guton text-lg md:text-xl leading-relaxed font-semibold text-justify text-brand-earth-dark">
            Merci du fond du cœur de croire en moi, et de rendre cette folle tentative si profondément humaine.
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="bg-white py-12" id="donate">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-rows-2 gap-8 max-w-6xl mx-auto">
            {/* Formulaire de don */}
            <div>
              <div className="bg-brand-earth-dark rounded-3xl p-8 text-white relative pt-16">
                <h2 className="w-full absolute -top-[6px] left-1/3 sm:left-1/3 lg:left-1/4 -translate-x-1/2 -translate-y-1/2 font-heading text-[54px] md:text-[72px] text-center text-outline-section-donate">
                  {t('support.donate_title')}
                </h2>

                <div className="mb-6">
                  <div className="w-full bg-white text-center text-brand-earth-dark px-4 py-6 my-3 rounded-lg">
                    <button
                      onClick={() => setShowAmountModal(true)}
                      className="bg-brand-gold text-white px-6 py-3 rounded-full font-bold shadow-lg hover:opacity-90 w-full"
                    >
                      Contribution libre
                    </button>

                    <div className="mt-4">
                      <p className="text-sm font-medium mb-3">
                        Moyens de paiement acceptés :
                      </p>

                      <PaymentMethods />
                    </div>
                  </div>

                  <h2 className="font-medium mb-4 font-heading text-4xl">
                    Les besoins de la Cheffe
                  </h2>



                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                    {needs.map((need, index) => (
                      <div key={index} className="relative group">

                        <label className="flex items-center gap-2 cursor-pointer">
                          <img className="w-5 h-5" src={need.icon} alt="" />

                          {need.obsolete === "oui" ? (
                            <s className="text-sm text-gray-400">{need.label}</s>
                          ) : (
                            <span className="text-sm">{need.label}</span>
                          )}
                        </label>

                        {/* Tooltip */}
                        <div className="
        absolute left-0 top-6 z-20
        hidden group-hover:block
        w-64
        bg-white text-brand-earth-dark text-xs
        p-3 rounded-lg shadow-lg
        animate-fade-in
      ">
                          {need.description}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                <ButtonSecondary
                  className="w-full md:w-auto font-bold"
                  onClick={() => setShowNeedsModal(true)}
                >
                  Contribuer maintenant
                </ButtonSecondary>
              </div>
            </div>

            {/* Liste des contributeurs */}
            <div>
              <div className="bg-gray-100 rounded-3xl p-6 relative pt-16 mt-10">
                <h2 className="w-full absolute -top-[6px] left-1/3 sm:left-1/3 lg:left-1/4 -translate-x-1/2 -translate-y-1/2 font-heading text-[54px] md:text-[72px] text-center text-outline-section-contributor pl-10">
                  {t('support.contributors_title')}
                </h2>

                <div className="text-center mb-6">
                  <p className="text-3xl text-left font-bold text-brand-earth-dark">
                    {formatNumber(totalCollected)} F&nbsp;CFA {t('support.total_collected')}
                  </p>

                  <p className="text-sm flex justify-between items-center text-gray-500 font-bold mb-4 pb-4 border-b border-brand-earth/80">
                    <span className="text-left">sur {formatNumber(DONATION_TARGET)} F&nbsp;CFA</span>
                    <span className="text-xl">{formatNumber(donorsCount)} donateurs</span>
                  </p>
                </div>

                <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar px-8">
                  {[...contributors]
                    .sort(() => Math.random() - 0.5)
                    .map((contributor) => (
                      <div key={contributor.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-sm font-medium text-gray-700">
                          {contributor.name} - <span className="text-xs italic text-gray-400">{contributor.country}</span>
                        </span>
                        <span className="font-bold text-brand-gold">
                          {contributor.amount} F CFA - <span className="text-sm font-medium text-gray-700">{contributor.days}</span>
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section 
      <section className="bg-brand-yellow-light pt-12 relative">
        <div className="container mx-auto px-4 max-w-2xl relative pt-4 sm:pt-16 lg:pt-16">
          <h2 className="w-full absolute -top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[54px] md:text-[72px] text-center text-outline-section-titre">
            {t('support.contact_title')}
          </h2>

          <div className="flex justify-center">
            <div className="inline-flex justify-center gap-4 mb-8 mt-4 sm:mt-4 lg:mt-2 bg-brand-gold-dark text-white px-6 py-3 rounded-full">
              <img src="/assets/images/Facebook.svg" className="w-5 h-5" alt="Facebook" />
              <img src="/assets/images/Instagram.svg" className="w-5 h-5" alt="Instagram" />
              <img src="/assets/images/TikTok.svg" className="w-5 h-5" alt="TikTok" />
              <img src="/assets/images/WhatsApp.svg" className="w-5 h-5" alt="WhatsApp" />
              <img src="/assets/images/Phone.svg" className="w-5 h-5" alt="Phone" />
            </div>
          </div>

          <form className="space-y-4 mb-10">
            <Input placeholder="Nom et prénom" className="bg-white" />
            <Input type="email" placeholder="Email" className="bg-white" />
            <Textarea placeholder="Votre message" rows={6} className="bg-white" />
            <ButtonPrimary type="submit" className="w-full md:w-auto">
              {t('support.send_message')}
            </ButtonPrimary>
          </form>


        </div>
      </section>
    */}
    
      {/* Modales */}
      <AmountModal
        isOpen={showAmountModal}
        onClose={() => setShowAmountModal(false)}
      />

      <NeedsModal
        isOpen={showNeedsModal}
        onClose={() => setShowNeedsModal(false)}
        needs={needs}
      />
    </Layout>
  );
};

export default Support;
