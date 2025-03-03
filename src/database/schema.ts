// Database schema for JobAgartala.in
// This file defines the TypeScript types for our database schema

export interface User {
  id: string;
  email: string;
  full_name: string;
  phone_number?: string;
  created_at: string;
  updated_at: string;
  profile_complete: boolean;
  resume_url?: string;
  profile_image_url?: string;
}

export interface UserProfile {
  id: string;
  user_id: string;
  headline?: string;
  summary?: string;
  skills?: string[];
  experience_years?: number;
  current_salary?: number;
  expected_salary?: number;
  notice_period?: number;
  highest_education?: string;
  current_location?: string;
  preferred_locations?: string[];
  created_at: string;
  updated_at: string;
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  description?: string;
  website?: string;
  logo_url?: string;
  location: string;
  employee_count?: string;
  founded_year?: number;
  created_at: string;
  updated_at: string;
  verified: boolean;
}

export interface Job {
  id: string;
  company_id: string;
  title: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  job_type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'remote';
  experience_level?: string;
  education_level?: string;
  salary_min?: number;
  salary_max?: number;
  location: string;
  is_remote: boolean;
  skills_required?: string[];
  application_deadline?: string;
  created_at: string;
  updated_at: string;
  status: 'active' | 'closed' | 'draft';
  views_count: number;
  applications_count: number;
}

export interface JobApplication {
  id: string;
  job_id: string;
  user_id: string;
  resume_url: string;
  cover_letter?: string;
  status: 'applied' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
  created_at: string;
  updated_at: string;
}

export interface SavedJob {
  id: string;
  user_id: string;
  job_id: string;
  created_at: string;
}

export interface CompanyReview {
  id: string;
  company_id: string;
  user_id: string;
  rating: number;
  title?: string;
  pros?: string;
  cons?: string;
  advice_to_management?: string;
  is_current_employee: boolean;
  employment_status?: string;
  job_title?: string;
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'application_update' | 'job_alert' | 'system' | 'message';
  read: boolean;
  created_at: string;
  link_url?: string;
}

export interface JobAlert {
  id: string;
  user_id: string;
  keywords?: string[];
  locations?: string[];
  job_types?: string[];
  salary_min?: number;
  frequency: 'daily' | 'weekly' | 'instant';
  created_at: string;
  updated_at: string;
  active: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  featured_image_url?: string;
  tags?: string[];
  created_at: string;
  updated_at: string;
  published: boolean;
  views_count: number;
}