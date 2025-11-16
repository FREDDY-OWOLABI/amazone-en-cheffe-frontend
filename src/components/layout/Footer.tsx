import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { sponsorsApi } from '@/lib/api';
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

  const { data: sponsors = [] } = useQuery({
    queryKey: ['sponsors'],
    queryFn: async () => {
      const response = await sponsorsApi.getAll();
      return response.data;
    },
  });

  return (
    <footer className={`${bgColor}`}>


      {/* Logo Section */}
      <div className="py-8">
        <div className="container mx-auto px-4 text-center flex items-center justify-center">
          <p className="font-heading text-brand-gold mb-2 text-sm">
            <img
              src="/assets/images/KEITHSONONLogoNoirPaysage.png"
              alt="L'Amazone en Cheffe - Keith Vanessa Yabo SONON"
              className="h-[200px] w-auto sm:h-[250px] lg:h-[350px]" 
            />
          </p>
        </div>
      </div>


      {/* Partners Carousel */}

      <div className="md:flex md:items-center md:justify-center md:gap-8 mb-[50px]">
        {/* Titre */}
        <h2 className="text-center md:text-left text-brand-earth-dark font-semibold text-2xl uppercase tracking-wider font-crispy-bake mb-6 md:mb-0">
          PARTENAIRES OFFICIELS
        </h2>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 justify-center ">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex justify-center">
              <img
                src="/assets/images/Google_2015_logo.svg 3.svg"
                alt="Google"
                className="h-12"
              />
            </div>
          ))}
        </div>
      </div>









      {sponsors.length > 0 && (
        <div className="py-8 border-b border-brand-earth/10">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-brand-earth-dark font-semibold mb-6 text-sm uppercase tracking-wider font-crispy-bake">
              {t('footer.partners')}
            </h3>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {sponsors.map((sponsor) => (
                  <CarouselItem key={sponsor.id} className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                    <div className="flex items-center justify-center p-4">
                      {sponsor.website_url ? (
                        <a
                          href={sponsor.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-60 hover:opacity-100 transition"
                        >
                          <img
                            src={sponsor.logo_url}
                            alt={sponsor.name}
                            className="w-full h-12 object-contain grayscale hover:grayscale-0 transition"
                          />
                        </a>
                      ) : (
                        <img
                          src={sponsor.logo_url}
                          alt={sponsor.name}
                          className="w-full h-12 object-contain opacity-60"
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      )}



      {/* Copyright */}
      <div className="py-4 border-t border-brand-earth/10">
        <div className="container mx-auto px-4 text-center text-sm text-brand-earth-dark/70">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};
