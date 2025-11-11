import { useState, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '@/lib/axios';

interface User {
  id: number;
  name: string;
  email: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const queryClient = useQueryClient();

  // Check if user is authenticated
  const { data: authUser, isLoading } = useQuery({
    queryKey: ['auth-user'],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/user');
        return data;
      } catch (error) {
        return null;
      }
    },
    retry: false,
  });

  useEffect(() => {
    setUser(authUser || null);
  }, [authUser]);

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      // Get CSRF cookie first
      await apiClient.get('/sanctum/csrf-cookie');
      
      // Then login
      const { data } = await apiClient.post('/login', credentials);
      return data;
    },
    onSuccess: (data) => {
      setUser(data.user);
      queryClient.invalidateQueries({ queryKey: ['auth-user'] });
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiClient.post('/logout');
    },
    onSuccess: () => {
      setUser(null);
      localStorage.removeItem('auth_token');
      queryClient.clear();
    },
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
    loginError: loginMutation.error,
  };
};
