import { Layout } from "@/components/layout/Layout";
import { Download } from "lucide-react";
import { useState } from "react";

const Ressources = () => {
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

  return (
    <Layout>
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

      {/* Download Section */}
      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* BIOGRAPHIE */}
          <div className="bg-brand-earth-dark rounded-2xl p-8 text-white flex flex-col items-center shadow-lg">
            <h3 className="text-2xl font-heading text-brand-gold mb-4 text-center">
              Biographie — Cheffe Keith
            </h3>

            <button
              onClick={() =>
                downloadFile(
                  "/assets/ressources/biographie-keith.pdf",
                  "biographie-keith.pdf",
                  setDownloadingBio
                )
              }
              disabled={downloadingBio}
              className={`mt-4 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition ${
                downloadingBio
                  ? "bg-white/30 cursor-not-allowed"
                  : "bg-brand-gold text-brand-earth-dark hover:bg-white"
              }`}
            >
              {downloadingBio ? (
                <>
                  <span className="w-4 h-4 border-2 border-brand-earth-dark border-t-transparent rounded-full animate-spin"></span>
                  Téléchargement...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Télécharger le PDF
                </>
              )}
            </button>
          </div>

          {/* BRAND BOOK */}
          <div className="bg-brand-earth-dark rounded-2xl p-8 text-white flex flex-col items-center shadow-lg">
            <h3 className="text-2xl font-heading text-brand-gold mb-4 text-center">
              Brand Book — Identité visuelle
            </h3>

            <button
              onClick={() =>
                downloadFile(
                  "/assets/ressources/brandbook-keith.pdf",
                  "brandbook-keith.pdf",
                  setDownloadingBrandBook
                )
              }
              disabled={downloadingBrandBook}
              className={`mt-4 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition ${
                downloadingBrandBook
                  ? "bg-white/30 cursor-not-allowed"
                  : "bg-brand-gold text-brand-earth-dark hover:bg-white"
              }`}
            >
              {downloadingBrandBook ? (
                <>
                  <span className="w-4 h-4 border-2 border-brand-earth-dark border-t-transparent rounded-full animate-spin"></span>
                  Téléchargement...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Télécharger le PDF
                </>
              )}
            </button>
          </div>

          {/* PRESSBOOK */}
          <div className="bg-brand-earth-dark rounded-2xl p-8 text-white flex flex-col items-center shadow-lg">
            <h3 className="text-2xl font-heading text-brand-gold mb-4 text-center">
              Pressbook — Cheffe Keith
            </h3>

            <button
              onClick={() =>
                downloadFile(
                  "/assets/ressources/pressbook-keith.pdf",
                  "pressbook-keith.pdf",
                  setDownloadingPressbook
                )
              }
              disabled={downloadingPressbook}
              className={`mt-4 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition ${
                downloadingPressbook
                  ? "bg-white/30 cursor-not-allowed"
                  : "bg-brand-gold text-brand-earth-dark hover:bg-white"
              }`}
            >
              {downloadingPressbook ? (
                <>
                  <span className="w-4 h-4 border-2 border-brand-earth-dark border-t-transparent rounded-full animate-spin"></span>
                  Téléchargement...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Télécharger le PDF
                </>
              )}
            </button>
          </div>

          {/* LOGOS */}
          <div className="bg-brand-earth-dark rounded-2xl p-8 text-white flex flex-col items-center shadow-lg">
            <h3 className="text-2xl font-heading text-brand-gold mb-4 text-center">
              Logos — Toutes versions
            </h3>

            <button
              onClick={() =>
                downloadFile(
                  "/logos/logoskeithsonon.zip",
                  "keith-logos.zip",
                  setDownloadingLogos
                )
              }
              disabled={downloadingLogos}
              className={`mt-4 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition ${
                downloadingLogos
                  ? "bg-white/30 cursor-not-allowed"
                  : "bg-brand-gold text-brand-earth-dark hover:bg-white"
              }`}
            >
              {downloadingLogos ? (
                <>
                  <span className="w-4 h-4 border-2 border-brand-earth-dark border-t-transparent rounded-full animate-spin"></span>
                  Préparation...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Télécharger le pack ZIP
                </>
              )}
            </button>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Ressources;
