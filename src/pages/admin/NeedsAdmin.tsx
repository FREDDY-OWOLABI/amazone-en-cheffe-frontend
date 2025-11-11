import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { needsApi } from '@/lib/api';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2 } from 'lucide-react';

const NeedsAdmin = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingNeed, setEditingNeed] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity_needed: 0,
    unit: '',
  });

  const queryClient = useQueryClient();

  const { data: needs = [], isLoading } = useQuery({
    queryKey: ['needs-admin'],
    queryFn: async () => {
      const response = await needsApi.getAll();
      return response.data;
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: any) => needsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['needs-admin'] });
      toast.success('Besoin créé avec succès');
      setIsDialogOpen(false);
      resetForm();
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => needsApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['needs-admin'] });
      toast.success('Besoin mis à jour');
      setIsDialogOpen(false);
      resetForm();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => needsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['needs-admin'] });
      toast.success('Besoin supprimé');
    },
  });

  const resetForm = () => {
    setFormData({ name: '', description: '', quantity_needed: 0, unit: '' });
    setEditingNeed(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNeed) {
      updateMutation.mutate({ id: editingNeed.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (need: any) => {
    setEditingNeed(need);
    setFormData({
      name: need.name,
      description: need.description || '',
      quantity_needed: need.quantity_needed,
      unit: need.unit,
    });
    setIsDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-brand-earth-dark">Besoins en nature</h1>
            <p className="text-gray-600">Gérer les besoins du projet</p>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-brand-gold text-brand-earth-dark" onClick={resetForm}>
                <Plus className="mr-2 h-4 w-4" />
                Nouveau besoin
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingNeed ? 'Modifier le besoin' : 'Nouveau besoin'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantité</Label>
                    <Input
                      id="quantity"
                      type="number"
                      value={formData.quantity_needed}
                      onChange={(e) => setFormData({ ...formData, quantity_needed: parseInt(e.target.value) })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="unit">Unité</Label>
                    <Input
                      id="unit"
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                      placeholder="kg, litres, unités..."
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Annuler
                  </Button>
                  <Button type="submit" className="bg-brand-gold text-brand-earth-dark">
                    {editingNeed ? 'Mettre à jour' : 'Créer'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Liste des besoins</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">Chargement...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Quantité</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {needs.map((need: any) => (
                    <TableRow key={need.id}>
                      <TableCell className="font-medium">{need.name}</TableCell>
                      <TableCell>{need.description}</TableCell>
                      <TableCell>{need.quantity_needed} {need.unit}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(need)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            if (confirm('Supprimer ce besoin ?')) {
                              deleteMutation.mutate(need.id);
                            }
                          }}
                        >
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
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

export default NeedsAdmin;
