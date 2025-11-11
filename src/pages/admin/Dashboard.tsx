import { useQuery } from '@tanstack/react-query';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { donationsApi, newsApi, teamApi } from '@/lib/api';
import { DollarSign, Newspaper, Users, Heart } from 'lucide-react';

const Dashboard = () => {
  const { data: donationTotal } = useQuery({
    queryKey: ['donation-total'],
    queryFn: async () => {
      const response = await donationsApi.getTotal();
      return response.data;
    },
  });

  const { data: news = [] } = useQuery({
    queryKey: ['news-admin'],
    queryFn: async () => {
      const response = await newsApi.getAll();
      return response.data;
    },
  });

  const { data: team = [] } = useQuery({
    queryKey: ['team-admin'],
    queryFn: async () => {
      const response = await teamApi.getAll();
      return response.data;
    },
  });

  const stats = [
    {
      title: 'Dons collectés',
      value: `${donationTotal?.total || 0} CFA`,
      icon: DollarSign,
      description: `${donationTotal?.count || 0} donateurs`,
      color: 'text-green-600',
    },
    {
      title: 'Articles publiés',
      value: news.length,
      icon: Newspaper,
      description: 'Articles d\'actualité',
      color: 'text-blue-600',
    },
    {
      title: 'Membres de l\'équipe',
      value: team.length,
      icon: Users,
      description: 'Membres actifs',
      color: 'text-purple-600',
    },
    {
      title: 'Besoins en nature',
      value: '0',
      icon: Heart,
      description: 'Besoins actifs',
      color: 'text-red-600',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-brand-earth-dark mb-2">
            Tableau de bord
          </h1>
          <p className="text-gray-600">
            Vue d'ensemble de l'administration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent News */}
        <Card>
          <CardHeader>
            <CardTitle>Derniers articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {news.slice(0, 5).map((article: any) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium">{article.title}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(article.created_at).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded ${
                    article.published 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {article.published ? 'Publié' : 'Brouillon'}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
