/*
  # Initial database schema for JobAgartala.in

  1. New Tables
    - `users` - Stores user account information
    - `user_profiles` - Stores detailed user profile information
    - `companies` - Stores company information
    - `jobs` - Stores job listings
    - `job_applications` - Stores job applications
    - `saved_jobs` - Stores jobs saved by users
    - `company_reviews` - Stores company reviews
    - `notifications` - Stores user notifications
    - `job_alerts` - Stores job alert preferences
    - `blog_posts` - Stores blog content

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their own data
    - Add policies for public access to certain data
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  phone_number text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  profile_complete boolean DEFAULT false,
  resume_url text,
  profile_image_url text
);

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  headline text,
  summary text,
  skills text[],
  experience_years integer,
  current_salary integer,
  expected_salary integer,
  notice_period integer,
  highest_education text,
  current_location text,
  preferred_locations text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create companies table
CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  industry text NOT NULL,
  description text,
  website text,
  logo_url text,
  location text NOT NULL,
  employee_count text,
  founded_year integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  verified boolean DEFAULT false
);

-- Create jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  responsibilities text[],
  requirements text[],
  benefits text[],
  job_type text NOT NULL,
  experience_level text,
  education_level text,
  salary_min integer,
  salary_max integer,
  location text NOT NULL,
  is_remote boolean DEFAULT false,
  skills_required text[],
  application_deadline timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  status text DEFAULT 'active',
  views_count integer DEFAULT 0,
  applications_count integer DEFAULT 0
);

-- Create job_applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid REFERENCES jobs(id) ON DELETE CASCADE,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  resume_url text NOT NULL,
  cover_letter text,
  status text DEFAULT 'applied',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create saved_jobs table
CREATE TABLE IF NOT EXISTS saved_jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  job_id uuid REFERENCES jobs(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, job_id)
);

-- Create company_reviews table
CREATE TABLE IF NOT EXISTS company_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title text,
  pros text,
  cons text,
  advice_to_management text,
  is_current_employee boolean DEFAULT false,
  employment_status text,
  job_title text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  title text NOT NULL,
  message text NOT NULL,
  type text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  link_url text
);

-- Create job_alerts table
CREATE TABLE IF NOT EXISTS job_alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  keywords text[],
  locations text[],
  job_types text[],
  salary_min integer,
  frequency text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  active boolean DEFAULT true
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  featured_image_url text,
  tags text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published boolean DEFAULT false,
  views_count integer DEFAULT 0
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create RLS policies

-- Users policies
CREATE POLICY "Users can view their own data" 
  ON users 
  FOR SELECT 
  TO authenticated 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own data" 
  ON users 
  FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = id);

-- User profiles policies
CREATE POLICY "Users can view their own profile" 
  ON user_profiles 
  FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
  ON user_profiles 
  FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
  ON user_profiles 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

-- Companies policies
CREATE POLICY "Anyone can view companies" 
  ON companies 
  FOR SELECT 
  TO anon, authenticated 
  USING (true);

-- Jobs policies
CREATE POLICY "Anyone can view active jobs" 
  ON jobs