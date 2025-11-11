import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { donationsApi } from '@/lib/api';
import { toast } from 'sonner';

export const useDonationTotal = () => {
  return useQuery({
    queryKey: ['donation-total'],
    queryFn: async () => {
      const response = await donationsApi.getTotal();
      return response.data;
    },
    refetchInterval: 30000, // Refetch every 30s
  });
};

export const useContributorsList = () => {
  return useQuery({
    queryKey: ['contributors-list'],
    queryFn: async () => {
      const response = await donationsApi.getList();
      return response.data;
    },
  });
};

export const useCreateDonation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: donationsApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['donations'] });
      queryClient.invalidateQueries({ queryKey: ['donation-total'] });
      queryClient.invalidateQueries({ queryKey: ['contributors-list'] });
      toast.success('Merci pour votre don ! 🙏');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Erreur lors du don');
    },
  });
};
