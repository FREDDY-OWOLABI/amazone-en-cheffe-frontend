import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        guinness: "Mon Guinness Record",
        about: "L'Amazone en Cheffe",
        news: "Mon actualité",
        team: "Mon équipe",
        support: "Soutenez-moi",
      },
      hero: {
        tagline: "À l'assaut du Guinness Record",
      },
      mission: {
        text: "Pendant 15 jours, je m'engage à valoriser la gastronomie béninoise en proposant une variété de plats du Bénin, afin d'inscrire mon pays dans le livre des records. Une consécration personnelle, mais aussi un engagement fort envers mes racines et ma passion pour la cuisine.",
      },
      cta: {
        support: "Soutenir la Cheffe",
        donate: "Faites un don",
        participate: "Participer",
      },
      about: {
        full_name: "Keith Vanessa Yabo SONON",
        age: "22 ans",
        origin: "cheffe d'origine béninoise vivant en France",
        intro: "portée par une passion particulière pour la cuisine et une ambition sans limites",
        whoami: "Qui suis-je ?",
        pressbook: "Mon pressbook",
        download: "Télécharger",
      },
      guinness: {
        title: "Mon Guinness Record",
        marathon_title: "Marathon de Décembre",
        timeline_title: "Timeline du Marathon",
      },
      news: {
        title: "Mon actualité",
        read_more: "Lire la suite",
      },
      team: {
        title: "Mon équipe",
        project_team: "L'équipe projet",
        partners: "Les partenaires",
        supporters: "Les fans et supporters",
      },
      support: {
        title: "Soutenez-moi",
        why_title: "Pourquoi ?",
        donate_title: "Faire un don",
        contributors_title: "Les contributeurs",
        contact_title: "Me contacter",
        send_message: "Envoyer mon message",
        needs_title: "Mes besoins en nature",
        total_collected: "collectés",
        goal: "Objectif",
        donors: "donateurs",
      },
      footer: {
        partners: "PARTENAIRES OFFICIELS",
        copyright: "© Copyright 2025. Tous droits réservés.",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        guinness: "My Guinness Record",
        about: "The Amazon Chef",
        news: "News",
        team: "My Team",
        support: "Support Me",
      },
      hero: {
        tagline: "Going for the Guinness Record",
      },
      mission: {
        text: "For 15 days, I commit to promoting Beninese gastronomy by offering a variety of dishes from Benin, in order to inscribe my country in the record books. A personal consecration, but also a strong commitment to my roots and my passion for cooking.",
      },
      cta: {
        support: "Support the Chef",
        donate: "Make a Donation",
        participate: "Participate",
      },
      about: {
        full_name: "Keith Vanessa Yabo SONON",
        age: "22 years old",
        origin: "Beninese chef living in France",
        intro: "driven by a particular passion for cooking and unlimited ambition",
        whoami: "Who am I?",
        pressbook: "My pressbook",
        download: "Download",
      },
      guinness: {
        title: "My Guinness Record",
        marathon_title: "December Marathon",
        timeline_title: "Marathon Timeline",
      },
      news: {
        title: "News",
        read_more: "Read more",
      },
      team: {
        title: "My Team",
        project_team: "The Project Team",
        partners: "Partners",
        supporters: "Fans and Supporters",
      },
      support: {
        title: "Support Me",
        why_title: "Why?",
        donate_title: "Make a Donation",
        contributors_title: "Contributors",
        contact_title: "Contact Me",
        send_message: "Send my message",
        needs_title: "My needs in kind",
        total_collected: "CFA collected",
        goal: "Goal",
        donors: "donors",
      },
      footer: {
        partners: "OFFICIAL PARTNERS",
        copyright: "© Copyright 2025. All rights reserved.",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
