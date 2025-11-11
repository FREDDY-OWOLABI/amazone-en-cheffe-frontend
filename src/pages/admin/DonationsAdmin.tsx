import { useQuery } from '@tanstack/react-query';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { donationsApi } from '@/lib/api';

const DonationsAdmin = () => {
  const { data: donations = [], isLoading } = useQuery({
    queryKey: ['donations-admin'],
    queryFn: async () => {
      const response = await donationsApi.getList();
      return response.data;
    },
  });

  const { data: donationTotal } = useQuery({
    queryKey: ['donation-total'],
    queryFn: async () => {
      const response = await donationsApi.getTotal();
      return response.data;
    },
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-brand-earth-dark">Dons</h1>
          <p className="text-gray-600">Gérer les contributions financières</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total collecté</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{donationTotal?.total || 0} CFA</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Nombre de donateurs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{donationTotal?.count || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Objectif</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{donationTotal?.goal || 0} CFA</div>
              <p className="text-xs text-muted-foreground mt-1">
                {donationTotal?.total && donationTotal?.goal
                  ? `${Math.round((donationTotal.total / donationTotal.goal) * 100)}% atteint`
                  : '0% atteint'}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Liste des dons</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">Chargement...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Donateur</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Montant</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donations.map((donation: any) => (
                    <TableRow key={donation.id}>
                      <TableCell className="font-medium">
                        {donation.is_anonymous ? 'Anonyme' : donation.donor_name}
                      </TableCell>
                      <TableCell>{donation.donor_email || '-'}</TableCell>
                      <TableCell className="font-semibold text-green-600">
                        {donation.amount} CFA
                      </TableCell>
                      <TableCell className="max-w-xs truncate">
                        {donation.message || '-'}
                      </TableCell>
                      <TableCell>
                        {new Date(donation.created_at).toLocaleDateString('fr-FR')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default DonationsAdmin;
