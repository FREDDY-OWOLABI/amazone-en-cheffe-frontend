import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NewsProps {
  hideHeader?: boolean;
  hideFooter?: boolean;
}



const News  = ({ hideHeader = false , hideFooter = false }: NewsProps) => {
  const { t } = useTranslation();
  const [category, setCategory] = useState<string | undefined>(undefined);

  // Données locales simulées
  const allNews = [
    { id: 1, category: "SORTIE", title: "Titre de l'article 1", excerpt: "Extrait de l'article 1", slug: "article-1" },
    { id: 2, category: "INTERVIEW", title: "Titre de l'article 2", excerpt: "Extrait de l'article 2", slug: "article-2" },
    { id: 3, category: "PRESSE", title: "Titre de l'article 3", excerpt: "Extrait de l'article 3", slug: "article-3" },
   



  ];

  // Filtrer les articles selon la catégorie sélectionnée
  const news = category ? allNews.filter((a) => a.category.toLowerCase() === category?.toLowerCase()) : allNews;

  const isLoading = false; // pas de chargement réel

  // Catégories pour le filtre
  const categories = [
    { value: undefined, label: 'Tous' },
    { value: 'SORTIE', label: 'SORTIE' },
    { value: 'INTERVIEW', label: 'INTERVIEW' },
    { value: 'PRESSE', label: 'PRESSE' },
  ];

  // Mapping des couleurs pour Badge
  const badgeColors: Record<string, string> = {
    SORTIE: 'bg-amber-900',
    INTERVIEW: 'bg-amber-700',
    PRESSE: 'bg-amber-600',
  };

  return (
    <Layout  hideHeader={hideHeader} hideFooter={hideFooter} footerBgColor="bg-brand-yellow-light">
      {/* Hero */}
      <section className="bg-brand-earth-dark news-hero-section-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="title-primary text-5xl md:text-7xl text-white"
          >
            {t('news.title')}
          </motion.h1>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[120px] bg-white border-b py-4 z-30">
        <div className="container mx-auto px-4">
          <nav className="flex gap-4 items-center overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.value || 'all'}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition ${category === cat.value
                  ? 'bg-brand-gold text-brand-earth-dark font-bold'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* News Grid */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold mx-auto" />
            </div>
          ) : news.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucun article pour le moment</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((article) => (

                <div className="transition-transform duration-300 hover:scale-105">
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
                  >
                    <div className="relative ">
                      <Badge
                        className={`absolute top-4 left-4 z-10 ${badgeColors[article.category] || 'bg-gray-800'}`}
                      >
                        {article.category}
                      </Badge>


                      <div className="aspect-video flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src="/assets/images/galerie-media-aspect-img.png"
                          alt={`Image article ${article.id}`}
                          className="w-full h-full object-cover block relative left-[-1px]"
                        />
                      </div>

                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 text-brand-earth-dark line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <Link
                        to={`/news/${article.slug}`}
                        className="text-brand-gold hover:text-brand-gold-dark font-medium inline-flex items-center gap-1"
                      >
                        {t('news.read_more')} →
                      </Link>
                    </div>
                  </motion.article>
                </div>

              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default News;
