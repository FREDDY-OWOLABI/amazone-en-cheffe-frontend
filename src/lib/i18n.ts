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
        name: "Keith SONON",
        tagline: "À l'assaut du Guinness Record",
      },
      home: {
        mission_title: "Ma Mission",
        mission_intro: "Un défi audacieux pour honorer mes racines et porter haut les couleurs du Bénin.",
        mission_text: "Pendant 15 jours, je m'engage à valoriser la gastronomie béninoise en proposant une variété de plats du Bénin, afin d'inscrire mon pays dans le livre des records. Une consécration personnelle, mais aussi un engagement fort envers mes racines et ma passion pour la cuisine.",
        mission_quote: "« Ce record est bien plus qu'un exploit personnel. C'est un hommage à mes ancêtres, à leur héritage culinaire, et une promesse d'avenir pour les générations futures. »",
        logo_main: "L'Amazone",
        logo_sub: "en Cheffe",
      },


      mission: {
        text: "Pendant 15 jours, je m'engage à valoriser la gastronomie béninoise en proposant une variété de plats du Bénin, afin d'inscrire mon pays dans le livre des records. Une consécration personnelle, mais aussi un engagement fort envers mes racines et ma passion pour la cuisine.",
      },


      cta: {
        support: "Soutenir la Cheffe",
        donate: "Faites un don",
        participate: "Participer",
        learn_more: "En savoir plus",
      },















    



// MON GUINNESS RECORD


 guinness: {
        title: "Mon Guinness Record",
        subtitle: "Un Défi, Une Passion, Un Héritage",
        intro: "Pendant 15 jours, je m'engage à valoriser la gastronomie béninoise en proposant une variété de plats du Bénin, afin d'inscrire mon pays dans le livre des records. Une consécration personnelle, mais aussi un engagement fort envers mes racines et ma passion pour la cuisine.",
        
        why_title: "Pourquoi ce défi ?",
        why_text: "Ce défi représente bien plus qu'un simple record. C'est l'opportunité de mettre en lumière la richesse culinaire du Bénin, de partager mon héritage avec le monde entier, et de prouver que la passion et la détermination peuvent mener aux plus grandes réalisations.",
        
        mindset_text: "Zen et confiante, je vis cette échéance avec sérénité, sans regret, consciente que chaque étape de mon parcours me construit. Je me donne 5 ans pour concrétiser de nouveaux projets après ce record.",
        
        cta_text: "Soutenez-moi dans ce défi historique et participez à l'aventure !",
        
        // MARATHON DE DÉCEMBRE
        marathon_title: "Le Marathon de Décembre",
        marathon_subtitle: "15 Jours Pour Écrire l'Histoire",
        marathon_intro: "Le marathon culinaire débutera en décembre 2025. Pendant 15 jours consécutifs, je cuisinerai sans interruption, en respectant le protocole strict du Guinness World Records.",
        
        marathon_details_title: "Les détails du défi :",
        marathon_duration: "Durée : 15 jours consécutifs de cuisine ininterrompue",
        marathon_objective: "Objectif : Valoriser la gastronomie béninoise",
        marathon_witnesses: "Témoins officiels présents en permanence",
        marathon_documentation: "Documentation vidéo et photographique continue",
        marathon_rules: "Respect strict du règlement Guinness World Records",
        
        // TIMELINE
        timeline_title: "Timeline du Marathon",
        timeline_subtitle: "Le Compte à Rebours a Commencé",
        timeline_start: "Jour 1",
        timeline_start_desc: "Début du marathon culinaire",
        timeline_middle: "Jours 2-14",
        timeline_middle_desc: "Cuisine continue, témoins officiels",
        timeline_end: "Jour 15",
        timeline_end_desc: "Fin du défi et célébration",
      },







// L'AMAZONE EN CHEFFE
      about: {
        title: "L'Amazone en Cheffe",
        subtitle: "Keith Vanessa Yabo SONON",
        
        full_name: "Keith Vanessa Yabo SONON",
        age: "22 ans",
        origin: "cheffe d'origine béninoise vivant en France",
        intro: "portée par une passion particulière pour la cuisine et une ambition sans limites",
        
        whoami: "Qui suis-je ?",
        
        bio_intro: "Keith Vanessa Yabo SONON, 22 ans, est une cheffe d'origine béninoise vivant en France, portée par une passion particulière pour la cuisine et une ambition sans limites.",
        
        bio_p1: "Sa couleur préférée, le blanc, symbolise à ses yeux la pureté, le commencement et la page blanche sur laquelle elle écrit chaque jour son histoire culinaire.",
        
        bio_p2: "Née avec l'amour des saveurs, Keith a très tôt passé son temps en cuisine « derrière les tatas » plutôt que sur ses cahiers.",
        
        bio_p3: "En 2022, elle réalise que sa place n'est nulle part ailleurs que derrière les fourneaux. Elle passe alors un marché avec sa mère : tenter sérieusement sa chance dans la cuisine avant de reprendre éventuellement ses études.",
        
        bio_p4: "Keith intègre alors une école d'art culinaire où elle décroche un CAP et un BP en deux ans. Rapidement repérée pour son talent, elle se voit confier les clés de cuisines professionnelles.",
        
        bio_cooking_style: "Sa cuisine se définit en trois mots :",
        bio_style_1: "Fusionnelle",
        bio_style_2: "Savoureuse",
        bio_style_3: "Généreuse",
        
        pressbook: "Mon pressbook",
        pressbook_subtitle: "Découvrez mon parcours en détail",
        download: "Télécharger",
        loading: "Téléchargement...",
        media_gallery_title: "Galerie média",
        photos_title: "Photos",
        videos_title: "Vidéos",
      },












     

      // MON ACTUALITÉ
      news: {
        title: "Mon actualité",
        subtitle: "Suivez Mon Parcours",
        read_more: "Lire la suite",
        back_to_news: "Retour aux actualités",
        no_articles: "Aucun article pour le moment",
      },












    
     // MON ÉQUIPE
      team: {
        title: "Mon équipe",
        subtitle: "Ensemble Pour La Réussite",
        project_team: "L'équipe projet",
        partners: "Les partenaires",
        supporters: "Les fans et supporters",
        no_team: "Aucun membre d'équipe pour le moment",
        no_sponsors: "Aucun partenaire pour le moment",
        no_testimonials: "Aucun témoignage pour le moment",
      },






     

 // SOUTENEZ-MOI
      support: {
        title: "Soutenez-moi",
        subtitle: "Ensemble, Faisons l'Histoire",
        
        why_title: "Pourquoi Votre Soutien Est Important ?",
        why_intro: "Votre contribution, quelle qu'elle soit, est essentielle pour la réussite de ce projet.",
        
        why_p1: "Chaque don, chaque partage, chaque message de soutien me rapproche de mon objectif. Ensemble, nous pouvons faire de ce défi une réalité et inscrire le Bénin dans le livre des records.",
        
        why_p2: "Votre générosité permettra de financer l'équipement nécessaire, les ingrédients, et l'organisation de cet événement historique.",
        
        donate_title: "Faire un don",
        donate_subtitle: "Chaque contribution compte",
        
        needs_title: "Mes besoins en nature",
        needs_ingredients: "Ingrédients",
        needs_equipment: "Équipement",
        needs_services: "Services",
        needs_other: "Autres",
        
        contributors_title: "Les contributeurs",
        contributors_subtitle: "Merci à tous nos généreux donateurs",
        total_collected: "collectés",
        goal: "Objectif",
        donors: "donateurs",
        
        contact_title: "Me contacter",
        contact_subtitle: "Une Question ? Un Message ?",
        
        form_name: "Votre nom",
        form_email: "Votre email",
        form_message: "Votre message",
        send_message: "Envoyer mon message",
        
        contact_info_title: "INFORMATIONS DE CONTACT",
        contact_email: "Email",
        contact_phone: "Téléphone",
        contact_instagram: "Instagram",
        contact_facebook: "Facebook",
        contact_tiktok: "TikTok",
      },













       footer: {
        partners: "PARTENAIRES OFFICIELS",
        company: "KEITH SONON",
        founder: "Fondatrice : Keith Vanessa Yabo SONON",
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
