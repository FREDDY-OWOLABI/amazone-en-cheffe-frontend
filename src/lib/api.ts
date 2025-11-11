import apiClient from './axios';

// ========== DONATIONS ==========
export const donationsApi = {
  getAll: () => apiClient.get('/donations'),
  getTotal: () => apiClient.get('/donations/total'),
  getList: () => apiClient.get('/donations/list'),
  create: (data: any) => apiClient.post('/donations', data),
  createPaymentIntent: (amount: number) => 
    apiClient.post('/stripe/create-payment-intent', { amount }),
};

// ========== NEEDS ==========
export const needsApi = {
  getAll: () => apiClient.get('/needs'),
  getById: (id: string) => apiClient.get(`/needs/${id}`),
  create: (data: any) => apiClient.post('/needs', data),
  update: (id: string, data: any) => apiClient.put(`/needs/${id}`, data),
  delete: (id: string) => apiClient.delete(`/needs/${id}`),
  contribute: (id: string, data: any) => 
    apiClient.post(`/needs/${id}/contribute`, data),
};

// ========== NEWS ==========
export const newsApi = {
  getAll: (params?: any) => apiClient.get('/news', { params }),
  getBySlug: (slug: string) => apiClient.get(`/news/${slug}`),
  create: (data: any) => apiClient.post('/news', data),
  update: (id: string, data: any) => apiClient.put(`/news/${id}`, data),
  delete: (id: string) => apiClient.delete(`/news/${id}`),
};

// ========== TEAM ==========
export const teamApi = {
  getAll: () => apiClient.get('/team'),
  create: (data: any) => apiClient.post('/team', data),
  update: (id: string, data: any) => apiClient.put(`/team/${id}`, data),
  delete: (id: string) => apiClient.delete(`/team/${id}`),
};

// ========== SPONSORS ==========
export const sponsorsApi = {
  getAll: () => apiClient.get('/sponsors'),
  create: (data: FormData) => 
    apiClient.post('/sponsors', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),
  update: (id: string, data: FormData) => 
    apiClient.put(`/sponsors/${id}`, data),
  delete: (id: string) => apiClient.delete(`/sponsors/${id}`),
};

// ========== GALLERY ==========
export const galleryApi = {
  getPhotos: () => apiClient.get('/gallery/photos'),
  getVideos: () => apiClient.get('/gallery/videos'),
  getAll: (category?: string) => 
    apiClient.get('/gallery', { params: { category } }),
  upload: (data: FormData) => 
    apiClient.post('/gallery', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),
  delete: (id: string) => apiClient.delete(`/gallery/${id}`),
};

// ========== CONTACT ==========
export const contactApi = {
  send: (data: any) => apiClient.post('/contact', data),
  getAll: () => apiClient.get('/contact'),
  markAsRead: (id: string) => apiClient.patch(`/contact/${id}/read`),
};

// ========== TESTIMONIALS ==========
export const testimonialsApi = {
  getAll: () => apiClient.get('/testimonials'),
};

// ========== SETTINGS ==========
export const settingsApi = {
  get: (key: string) => apiClient.get(`/settings/${key}`),
  getAll: () => apiClient.get('/settings'),
  getCountdown: () => apiClient.get('/settings/countdown'),
  getDonationGoal: () => apiClient.get('/settings/donation-goal'),
};
