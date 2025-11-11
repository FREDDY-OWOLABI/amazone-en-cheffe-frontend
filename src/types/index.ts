export interface Donation {
  id: string;
  amount: number;
  currency: string;
  donor_name: string;
  donor_email: string;
  donor_message?: string;
  is_anonymous: boolean;
  show_in_list: boolean;
  payment_method: 'stripe' | 'mobile_money';
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface DonationTotal {
  total: number;
  count: number;
  goal: number;
  percentage: number;
}

export interface Need {
  id: string;
  category: 'ingredient' | 'equipment' | 'service' | 'other';
  item_name: string;
  description: string;
  quantity_needed: number;
  quantity_received: number;
  unit: string;
  status: 'needed' | 'partial' | 'fulfilled';
  priority: 'high' | 'medium' | 'low';
  created_at: string;
  updated_at: string;
}

export interface News {
  id: string;
  title: string;
  title_en?: string;
  slug: string;
  excerpt: string;
  excerpt_en?: string;
  content: string;
  content_en?: string;
  cover_image_url: string;
  category: 'interview' | 'event' | 'press' | 'recipe' | 'general';
  author: string;
  published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  role_en?: string;
  bio: string;
  bio_en?: string;
  photo_url: string;
  order: number;
  created_at: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo_url: string;
  website_url?: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  order: number;
  created_at: string;
}

export interface GalleryItem {
  id: string;
  type: 'photo' | 'video';
  url: string;
  thumbnail_url: string;
  title: string;
  description?: string;
  category: 'portrait' | 'kitchen' | 'event' | 'dish';
  order: number;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  location?: string;
  created_at: string;
}

export interface Contributor {
  id: string;
  name: string;
  amount?: number;
  contribution_description?: string;
  is_anonymous: boolean;
  created_at: string;
  time_ago?: string;
}

export interface Setting {
  key: string;
  value: string;
  type: 'number' | 'date' | 'text' | 'boolean';
}
