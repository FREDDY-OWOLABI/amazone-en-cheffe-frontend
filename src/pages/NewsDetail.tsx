import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { newsApi } from '@/lib/api';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import { toast } from 'sonner';
import { Helmet } from 'react-helmet-async';

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: article, isLoading } = useQuery({
    queryKey: ['news', slug],
    queryFn: async () => {
      const response = await newsApi.getBySlug(slug!);
      return response.data;
    },
    enabled: !!slug,
  });

  const { data: adjacentArticles } = useQuery({
    queryKey: ['news-adjacent', article?.id],
    queryFn: async () => {
      const response = await newsApi.getAll();
      const articles = response.data;
      const currentIndex = articles.findIndex((a: any) => a.id === article?.id);
      return {
        previous: currentIndex > 0 ? articles[currentIndex - 1] : null,
        next: currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null,
      };
    },
    enabled: !!article?.id,
  });

  const shareUrl = window.location.href;
  const shareTitle = article?.title || '';

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        toast.success('Lien copié dans le presse-papier');
        return;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  if (isLoading) {
    return (
      <Layout footerBgColor="bg-brand-yellow-light">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold" />
        </div>
      </Layout>
    );
  }

  if (!article) {
    return (
      <Layout footerBgColor="bg-brand-yellow-light">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Article non trouvé</h2>
            <Button onClick={() => navigate('/news')}>Retour aux actualités</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout footerBgColor="bg-brand-yellow-light">
      <Helmet>
        <title>{article.title} - L'Amazone en Cheffe</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.cover_image_url} />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Back Button */}
      <section className="bg-brand-earth-dark py-4">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/news')}
            className="text-white hover:text-brand-gold"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('news.back_to_list')}
          </Button>
        </div>
      </section>

      {/* Article Hero */}
      <section className="bg-brand-earth-dark py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Badge variant={article.category === 'recipe' ? 'default' : 'secondary'}>
              {article.category}
            </Badge>
            <h1 className="font-script text-4xl md:text-6xl text-white">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>{new Date(article.published_at).toLocaleDateString('fr-FR')}</span>
              {article.author && <span>Par {article.author}</span>}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {article.cover_image_url && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-12"
            >
              <img
                src={article.cover_image_url}
                alt={article.title}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>
          )}

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className="text-lg font-semibold text-brand-earth-dark">
                Partager cet article
              </h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('facebook')}
                  className="hover:bg-blue-600 hover:text-white hover:border-blue-600"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('twitter')}
                  className="hover:bg-sky-500 hover:text-white hover:border-sky-500"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('linkedin')}
                  className="hover:bg-blue-700 hover:text-white hover:border-blue-700"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('copy')}
                  className="hover:bg-brand-gold hover:text-brand-earth-dark hover:border-brand-gold"
                >
                  <Link2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Previous/Next */}
      {adjacentArticles && (
        <section className="bg-brand-yellow-light py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Previous Article */}
              {adjacentArticles.previous ? (
                <Link
                  to={`/news/${adjacentArticles.previous.slug}`}
                  className="group bg-white rounded-xl p-6 hover:shadow-lg transition flex items-start gap-4"
                >
                  <ChevronLeft className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Article précédent</p>
                    <h3 className="font-semibold text-brand-earth-dark group-hover:text-brand-gold transition">
                      {adjacentArticles.previous.title}
                    </h3>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {/* Next Article */}
              {adjacentArticles.next ? (
                <Link
                  to={`/news/${adjacentArticles.next.slug}`}
                  className="group bg-white rounded-xl p-6 hover:shadow-lg transition flex items-start gap-4 md:text-right"
                >
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Article suivant</p>
                    <h3 className="font-semibold text-brand-earth-dark group-hover:text-brand-gold transition">
                      {adjacentArticles.next.title}
                    </h3>
                  </div>
                  <ChevronRight className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default NewsDetail;
