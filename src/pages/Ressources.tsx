import { Layout } from "@/components/layout/Layout";
import { Download, FileText, Book, Briefcase, Image } from "lucide-react";
import { useState } from "react";

interface RessourcesProps {
  hideHeader?: boolean;
  hideFooter?: boolean;
}

const Ressources = ({ hideHeader = false, hideFooter = false }: RessourcesProps) => {
  const [downloadingBio, setDownloadingBio] = useState(false);
  const [downloadingBrandBook, setDownloadingBrandBook] = useState(false);
  const [downloadingPressbook, setDownloadingPressbook] = useState(false);
  const [downloadingLogos, setDownloadingLogos] = useState(false);

  const downloadFile = (path: string, filename: string, setLoading: Function) => {
    try {
      setLoading(true);

      const link = document.createElement("a");
      link.href = path;
      link.download = filename;
      document.body.appendChild(link);

      setTimeout(() => {
        link.click();
        document.body.removeChild(link);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error("Erreur téléchargement :", error);
      setLoading(false);
    }
  };

  const resources = [
    {
      id: "bio",
      icon: FileText,
      title: "Biographie — Cheffe Keith",
      description: "Parcours et histoire complète",
      path: "/assets/ressources/biographie-keith.pdf",
      filename: "biographie-keith.pdf",
      isLoading: downloadingBio,
      setLoading: setDownloadingBio,
      buttonText: "Télécharger le PDF",
      color: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      id: "brandbook",
      icon: Book,
      title: "Brand Book — Identité visuelle",
      description: "Charte graphique et directives",
      path: "/assets/ressources/brandbook-keith.pdf",
      filename: "brandbook-keith.pdf",
      isLoading: downloadingBrandBook,
      setLoading: setDownloadingBrandBook,
      buttonText: "Télécharger le PDF",
      color: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: "pressbook",
      icon: Briefcase,
      title: "Pressbook — Cheffe Keith",
      description: "Dossier de presse complet",
      path: "/assets/ressources/pressbook-keith.pdf",
      filename: "pressbook-keith.pdf",
      isLoading: downloadingPressbook,
      setLoading: setDownloadingPressbook,
      buttonText: "Télécharger le PDF",
      color: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      id: "logos",
      icon: Image,
      title: "Logos — Toutes versions",
      description: "Fichiers vectoriels et PNG",
      path: "/logos/logoskeithsonon.zip",
      filename: "keith-logos.zip",
      isLoading: downloadingLogos,
      setLoading: setDownloadingLogos,
      buttonText: "Télécharger le pack ZIP",
      color: "bg-lime-50",
      iconColor: "text-lime-600"
    }
  ];

  return (
    <Layout hideHeader={hideHeader} hideFooter={hideFooter}>
      {/* Hero */}
      <section className="bg-brand-earth-dark team-hero-section-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading mb-6 title-primary text-5xl md:text-7xl text-white">
            Ressources
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-gold text-center mb-12">
            Retrouvez ici toutes les ressources, documents et fichiers utiles.
          </h2>
        </div>
      </section>

      {/* Download Section avec vignettes */}
      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Vignette visuelle */}
                <div className={`${resource.color} h-40 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                  <Icon 
                    className={`w-20 h-20 ${resource.iconColor} group-hover:scale-110 transition-transform duration-300`} 
                    strokeWidth={1.5} 
                  />
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-lg font-heading text-brand-earth-dark mb-2 text-center">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    {resource.description}
                  </p>

                  {/* Bouton de téléchargement */}
                  <button
                    onClick={() =>
                      downloadFile(
                        resource.path,
                        resource.filename,
                        resource.setLoading
                      )
                    }
                    disabled={resource.isLoading}
                    className={`w-full px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                      resource.isLoading
                        ? "bg-gray-200 cursor-not-allowed text-gray-400"
                        : "bg-brand-gold text-brand-earth-dark hover:bg-brand-earth-dark hover:text-brand-gold hover:shadow-lg"
                    }`}
                  >
                    {resource.isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
                        <span className="text-sm">Téléchargement...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        <span className="text-sm">{resource.buttonText}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Ressources;