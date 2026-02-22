// ============================================
// WordPress API Type Definitions
// AnD Innovatech — All TypeScript interfaces
// ============================================

// WordPress Media (Featured Image)
export interface WPMedia {
  source_url: string;
  alt_text: string;
}

// WordPress Embedded Content
export interface WPEmbedded {
  'wp:featuredmedia'?: WPMedia[];
  'wp:term'?: WPTerm[][];
}

// WordPress Term (Category/Tag)
export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

// WordPress Blog Post
export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  status: string;
  categories: number[];
  tags: number[];
  _embedded?: WPEmbedded;
  author: number;
}

// WordPress Portfolio Item (Custom Post Type)
export interface WPPortfolio {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  acf: {
    client: string;
    tech_stack: string;
    live_url: string;
    category: string;
  };
  _embedded?: WPEmbedded;
}

// WordPress Service (Custom Post Type)
export interface WPService {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  acf: {
    icon_name: string;
    short_description: string;
  };
  _embedded?: WPEmbedded;
}

// WordPress Message (Contact Form Submission)
export interface WPMessage {
  id: number;
  title: { rendered: string };
  acf: {
    name: string;
    email: string;
    phone: string;
    service: string;
    budget: string;
    message: string;
    read: boolean;
  };
  date: string;
  status: string;
}

// Contact Form Data (submitted from frontend)
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

// Data for creating/updating a blog post
export interface PostData {
  title: string;
  content: string;
  excerpt?: string;
  status?: 'publish' | 'draft' | 'pending';
  categories?: number[];
  tags?: number[];
  featured_media?: number;
}

// Data for creating/updating a portfolio item
export interface PortfolioData {
  title: string;
  content: string;
  status?: 'publish' | 'draft';
  acf?: {
    client?: string;
    tech_stack?: string;
    live_url?: string;
    category?: string;
  };
  featured_media?: number;
}

// Auth types
export interface AuthResponse {
  token: string;
  user_display_name: string;
  user_email: string;
  user_nicename: string;
}

export interface AuthError {
  code: string;
  message: string;
  data: { status: number };
}

// API Response wrapper
export interface APIResponse<T> {
  data: T | null;
  error: string | null;
  total?: number;
  totalPages?: number;
}

// Navigation link type
export interface NavLink {
  label: string;
  href: string;
}

// Testimonial data (static/hardcoded)
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
  initials: string;
}

// Service card (fallback data)
export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  slug: string;
}

// Stats item
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

// Why Choose Us feature
export interface Feature {
  number: string;
  title: string;
  description: string;
}

// Dashboard stats
export interface DashboardStats {
  totalPosts: number;
  totalPortfolio: number;
  totalMessages: number;
  totalServices: number;
}
