# L'Amazone en Cheffe - Site Officiel

Ce dépôt contient le code source du site web officiel de la Cheffe Keith Sonon, "L'Amazone en Cheffe", dans le cadre de son défi pour le **Record Guinness du plus long marathon culinaire**.

Le site est développé en utilisant une stack moderne pour garantir performance, maintenabilité et une expérience utilisateur fluide.

## Technologies Utilisées

*   **Framework :** React (avec TypeScript)
*   **Build Tool :** Vite
*   **Styling :** Tailwind CSS (configuré avec la charte graphique officielle)
*   **Routing :** React Router DOM
*   **Gestion d'État :** (À définir, si nécessaire)

## Charte Graphique & Design

Le design est basé sur les maquettes fournies et respecte la charte graphique de l'Amazone en Cheffe :

*   **Couleurs :** Terre d'Afrique (`#682718`), Miel Gourmand (`#C0833A`), Fond Clair (`#F2DF80`), Or Dégradé (`#CFA15D`).
*   **Polices :** Choco Taste (Titres), Crispy Bake (Secondaire), Guton (Corps de texte).

## Démarrage Rapide (Développement Local)

Pour lancer le projet sur votre machine, suivez ces étapes :

### **Prérequis**

Vous devez avoir **Node.js** (version LTS recommandée) installé sur votre système.

### **Installation**

1.  **Cloner le dépôt** (ou décompresser l'archive) :
    ```bash
    git clone [URL_DU_DEPOT]
    cd amazone-en-cheffe
    ```
2.  **Installer les dépendances** (bibliothèques React, Tailwind, etc.) :
    ```bash
    npm install
    # OU si vous utilisez pnpm :
    # pnpm install
    ```

### **Lancement du Serveur de Développement**

1.  **Lancer le projet :**
    ```bash
    npm run dev
    # OU
    # pnpm run dev
    ```
2.  Le site sera accessible à l'adresse indiquée dans votre terminal, généralement : `http://localhost:5173/`

## Structure du Projet

*   `public/` : Contient les ressources statiques (images, polices, favicon ) accessibles via `/assets/...`.
*   `src/pages/` : Contient les composants principaux de chaque page (`Index.tsx`, `Support.tsx`, etc.).
*   `src/components/` : Contient les composants réutilisables (Header, Footer, Boutons, etc.).
*   `src/index.css` : Déclaration des polices personnalisées (`@font-face`).
*   `tailwind.config.ts` : Configuration de Tailwind CSS avec les couleurs et polices de la charte.

## Build pour la Production

Pour générer les fichiers statiques prêts à être déployés sur un serveur :

```bash
npm run build
