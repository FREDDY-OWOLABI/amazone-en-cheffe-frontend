import { useTranslation } from 'react-i18next';
// import { useQuery } from '@tanstack/react-query';
// import { sponsorsApi } from '@/lib/api';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface FooterProps {
  bgColor?: string;
}

export const Footer = ({ bgColor = "bg-brand-yellow-light" }: FooterProps) => {
  const { t } = useTranslation();

  const sponsors = [
    "/assets/images/sponsors/logo-Plan-de-travail-1.png",
    "/assets/images/sponsors/logo-Plan-de-travail-2.png",
    "/assets/images/sponsors/logo-Plan-de-travail-3.png",
    "/assets/images/sponsors/logo-Plan-de-travail-4.png",
    "/assets/images/sponsors/logo-Plan-de-travail-5.png",
    "/assets/images/sponsors/logo-Plan-de-travail-6.png",
    "/assets/images/sponsors/logo-Plan-de-travail-7.png",
    "/assets/images/sponsors/logo-Plan-de-travail-8.png",
    "/assets/images/sponsors/logo-Plan-de-travail-9.png",
    "/assets/images/sponsors/logo-Plan-de-travail-10.png",
  ];

  return (
    <footer className={`${bgColor}`}>

      {/* Logo Section */}
      <div className="py-8">
        <div className="container mx-auto px-4 text-center flex items-center justify-center">
          <img
            src="/assets/images/KEITHSONONLogoNoirPaysage.png"
            alt="L'Amazone en Cheffe - Keith Vanessa Yabo SONON"
            className="h-[200px] w-auto sm:h-[250px] lg:h-[350px]"
          />
        </div>
      </div>

      {/* ----------- CARROUSEL SPONSORS ----------- */}

      <div className="mb-[50px] flex flex-col md:flex-row md:items-center md:gap-10 md:justify-center">

        {/* Titre */}
        <h2 className="text-brand-earth-dark font-semibold text-[14px]  md:text-[18px] uppercase tracking-wider font-crispy-bake mb-6 md:mb-0 whitespace-nowrap">
          PARTENAIRES OFFICIELS
        </h2>

        {/* Carrousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full max-w-5xl"
        >
          <CarouselContent>
            {sponsors.map((logo, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/6 flex justify-center"
              >
                <img
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="h-12 object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>


      {/* Ligne après le carrousel */}
      <div className="py-8 border-b border-brand-earth/10" />

      {/* Copyright */}
      <div className="py-4 border-t border-brand-earth/10">
        <div className="container mx-auto px-4 text-center text-sm text-brand-earth-dark/70">
          {t('footer.copyright')} - Powered by Studio Enabloo
        </div>
      </div>
    </footer>
  );
};
