export type ApprovalStatus = 'pending' | 'approved' | 'rejected';
export type InquiryStatus = 'new' | 'contacted' | 'completed';

export interface InterpreterProfile {
  id: string;
  full_name: string;
  native_language: string;
  secondary_languages: string[];
  location: string;
  bio: string;
  hourly_rate_usd: number;
  avatar_url?: string;
  accent_video_url: string;
  status: ApprovalStatus;
  verified_accent_badge?: string;
  admin_notes?: string;
  created_at: string;
}

export interface TourismSpot {
  id: string;
  title: string;
  location: string;
  description: string;
  cover_image_url: string;
  featured_notes?: string;
  is_published: boolean;
  created_at: string;
}

export interface ClientInquiry {
  id: string;
  client_name: string;
  client_email: string;
  whatsapp_number?: string;
  target_language: string;
  service_type: string;
  travel_dates_and_details: string;
  status: InquiryStatus;
  created_at: string;
}
