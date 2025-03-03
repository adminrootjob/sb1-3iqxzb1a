export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          phone_number: string | null
          created_at: string
          updated_at: string
          profile_complete: boolean
          resume_url: string | null
          profile_image_url: string | null
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          phone_number?: string | null
          created_at?: string
          updated_at?: string
          profile_complete?: boolean
          resume_url?: string | null
          profile_image_url?: string | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          phone_number?: string | null
          created_at?: string
          updated_at?: string
          profile_complete?: boolean
          resume_url?: string | null
          profile_image_url?: string | null
        }
      }
      user_profiles: {
        Row: {
          id: string
          user_id: string
          headline: string | null
          summary: string | null
          skills: string[] | null
          experience_years: number | null
          current_salary: number | null
          expected_salary: number | null
          notice_period: number | null
          highest_education: string | null
          current_location: string | null
          preferred_locations: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          headline?: string | null
          summary?: string | null
          skills?: string[] | null
          experience_years?: number | null
          current_salary?: number | null
          expected_salary?: number | null
          notice_period?: number | null
          highest_education?: string | null
          current_location?: string | null
          preferred_locations?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          headline?: string | null
          summary?: string | null
          skills?: string[] | null
          experience_years?: number | null
          current_salary?: number | null
          expected_salary?: number | null
          notice_period?: number | null
          highest_education?: string | null
          current_location?: string | null
          preferred_locations?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      companies: {
        Row: {
          id: string
          name: string
          industry: string
          description: string | null
          website: string | null
          logo_url: string | null
          location: string
          employee_count: string | null
          founded_year: number | null
          created_at: string
          updated_at: string
          verified: boolean
        }
        Insert: {
          id?: string
          name: string
          industry: string
          description?: string | null
          website?: string | null
          logo_url?: string | null
          location: string
          employee_count?: string | null
          founded_year?: number | null
          created_at?: string
          updated_at?: string
          verified?: boolean
        }
        Update: {
          id?: string
          name?: string
          industry?: string
          description?: string | null
          website?: string | null
          logo_url?: string | null
          location?: string
          employee_count?: string | null
          founded_year?: number | null
          created_at?: string
          updated_at?: string
          verified?: boolean
        }
      }
      jobs: {
        Row: {
          id: string
          company_id: string
          title: string
          description: string
          responsibilities: string[] | null
          requirements: string[] | null
          benefits: string[] | null
          job_type: string
          experience_level: string | null
          education_level: string | null
          salary_min: number | null
          salary_max: number | null
          location: string
          is_remote: boolean
          skills_required: string[] | null
          application_deadline: string | null
          created_at: string
          updated_at: string
          status: string
          views_count: number
          applications_count: number
        }
        Insert: {
          id?: string
          company_id: string
          title: string
          description: string
          responsibilities?: string[] | null
          requirements?: string[] | null
          benefits?: string[] | null
          job_type: string
          experience_level?: string | null
          education_level?: string | null
          salary_min?: number | null
          salary_max?: number | null
          location: string
          is_remote?: boolean
          skills_required?: string[] | null
          application_deadline?: string | null
          created_at?: string
          updated_at?: string
          status?: string
          views_count?: number
          applications_count?: number
        }
        Update: {
          id?: string
          company_id?: string
          title?: string
          description?: string
          responsibilities?: string[] | null
          requirements?: string[] | null
          benefits?: string[] | null
          job_type?: string
          experience_level?: string | null
          education_level?: string | null
          salary_min?: number | null
          salary_max?: number | null
          location?: string
          is_remote?: boolean
          skills_required?: string[] | null
          application_deadline?: string | null
          created_at?: string
          updated_at?: string
          status?: string
          views_count?: number
          applications_count?: number
        }
      }
      job_applications: {
        Row: {
          id: string
          job_id: string
          user_id: string
          resume_url: string
          cover_letter: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          job_id: string
          user_id: string
          resume_url: string
          cover_letter?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          job_id?: string
          user_id?: string
          resume_url?: string
          cover_letter?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      saved_jobs: {
        Row: {
          id: string
          user_id: string
          job_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          job_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          job_id?: string
          created_at?: string
        }
      }
      company_reviews: {
        Row: {
          id: string
          company_id: string
          user_id: string
          rating: number
          title: string | null
          pros: string | null
          cons: string | null
          advice_to_management: string | null
          is_current_employee: boolean
          employment_status: string | null
          job_title: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          user_id: string
          rating: number
          title?: string | null
          pros?: string | null
          cons?: string | null
          advice_to_management?: string | null
          is_current_employee?: boolean
          employment_status?: string | null
          job_title?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          user_id?: string
          rating?: number
          title?: string | null
          pros?: string | null
          cons?: string | null
          advice_to_management?: string | null
          is_current_employee?: boolean
          employment_status?: string | null
          job_title?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          title: string
          message: string
          type: string
          read: boolean
          created_at: string
          link_url: string | null
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          message: string
          type: string
          read?: boolean
          created_at?: string
          link_url?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          message?: string
          type?: string
          read?: boolean
          created_at?: string
          link_url?: string | null
        }
      }
      job_alerts: {
        Row: {
          id: string
          user_id: string
          keywords: string[] | null
          locations: string[] | null
          job_types: string[] | null
          salary_min: number | null
          frequency: string
          created_at: string
          updated_at: string
          active: boolean
        }
        Insert: {
          id?: string
          user_id: string
          keywords?: string[] | null
          locations?: string[] | null
          job_types?: string[] | null
          salary_min?: number | null
          frequency: string
          created_at?: string
          updated_at?: string
          active?: boolean
        }
        Update: {
          id?: string
          user_id?: string
          keywords?: string[] | null
          locations?: string[] | null
          job_types?: string[] | null
          salary_min?: number | null
          frequency?: string
          created_at?: string
          updated_at?: string
          active?: boolean
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          content: string
          author: string
          featured_image_url: string | null
          tags: string[] | null
          created_at: string
          updated_at: string
          published: boolean
          views_count: number
        }
        Insert: {
          id?: string
          title: string
          content: string
          author: string
          featured_image_url?: string | null
          tags?: string[] | null
          created_at?: string
          updated_at?: string
          published?: boolean
          views_count?: number
        }
        Update: {
          id?: string
          title?: string
          content?: string
          author?: string
          featured_image_url?: string | null
          tags?: string[] | null
          created_at?: string
          updated_at?: string
          published?: boolean
          views_count?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_application_count: {
        Args: {
          job_id: string
        }
        Returns: undefined
      }
      increment_view_count: {
        Args: {
          job_id: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}