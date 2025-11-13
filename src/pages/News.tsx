import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Layout } from '@/components/layout/Layout';
import { newsApi } from '@/lib/api';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const News = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState<string | undefined>(undefined);

  const { data: news = [], isLoading } = useQuery({
    queryKey: ['news', category],
    queryFn: async () => {
      const response = await newsApi.getAll({ category });
      return response.data;
    },
  });

  const categories = [
    { value: undefined, label: 'Tous' },
    { value: 'recipe', label: 'Recettes' },
    { value: 'interview', label: 'Interviews' },
    { value: 'press', label: 'Presse' },
    { value: 'event', label: 'Événements' },
  ];

  return (
    <Layout footerBgColor="bg-brand-yellow-light">
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
                className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                  category === cat.value
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
              {news.map((article: any) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
                >
                  <div className="relative">
                    <Badge 
                      variant={article.category === 'recipe' ? 'default' : 'secondary'}
                      className="absolute top-4 left-4 z-10"
                    >
                      {article.category}
                    </Badge>
                    
                    <div className="aspect-video bg-gradient-to-br from-brand-gold-light to-brand-honey flex items-center justify-center">
                      <span className="text-white text-sm">Image article</span>
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
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default News;
