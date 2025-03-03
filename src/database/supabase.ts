import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Create a single supabase client for interacting with your database
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please connect to Supabase to get your API keys.');
}

export const supabase = createClient<Database>(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

// Authentication helpers
export const signUp = async (email: string, password: string, fullName: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });
  
  if (error) throw error;
  
  // Create user profile record if signup is successful
  if (data.user) {
    const { error: profileError } = await supabase
      .from('users')
      .insert({
        id: data.user.id,
        email: data.user.email!,
        full_name: fullName,
      });
    
    if (profileError) throw profileError;
  }
  
  return data;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

// Job related helpers
export const getJobs = async (filters: any = {}) => {
  let query = supabase
    .from('jobs')
    .select(`
      *,
      companies (
        name,
        logo_url,
        industry
      )
    `)
    .eq('status', 'active');
  
  // Apply filters
  if (filters.location) {
    query = query.ilike('location', `%${filters.location}%`);
  }
  
  if (filters.jobType) {
    query = query.eq('job_type', filters.jobType);
  }
  
  if (filters.keyword) {
    query = query.or(`title.ilike.%${filters.keyword}%,description.ilike.%${filters.keyword}%`);
  }
  
  if (filters.salaryMin) {
    query = query.gte('salary_min', filters.salaryMin);
  }
  
  const { data, error } = await query;
  
  if (error) throw error;
  return data;
};

export const getJobById = async (id: string) => {
  const { data, error } = await supabase
    .from('jobs')
    .select(`
      *,
      companies (
        *
      )
    `)
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
};

export const applyForJob = async (jobId: string, coverLetter: string, resumeUrl: string) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('User not authenticated');
  
  const { data, error } = await supabase
    .from('job_applications')
    .insert({
      job_id: jobId,
      user_id: user.id,
      cover_letter: coverLetter,
      resume_url: resumeUrl,
    });
  
  if (error) throw error;
  
  // Update application count
  await supabase.rpc('increment_application_count', { job_id: jobId });
  
  return data;
};

export const saveJob = async (jobId: string) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('User not authenticated');
  
  const { data, error } = await supabase
    .from('saved_jobs')
    .insert({
      job_id: jobId,
      user_id: user.id,
    });
  
  if (error) throw error;
  return data;
};

export const getSavedJobs = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('User not authenticated');
  
  const { data, error } = await supabase
    .from('saved_jobs')
    .select(`
      *,
      jobs (
        *,
        companies (
          name,
          logo_url
        )
      )
    `)
    .eq('user_id', user.id);
  
  if (error) throw error;
  return data;
};

// Company related helpers
export const getCompanies = async (filters: any = {}) => {
  let query = supabase
    .from('companies')
    .select('*');
  
  if (filters.industry) {
    query = query.eq('industry', filters.industry);
  }
  
  if (filters.location) {
    query = query.ilike('location', `%${filters.location}%`);
  }
  
  const { data, error } = await query;
  
  if (error) throw error;
  return data;
};

export const getCompanyById = async (id: string) => {
  const { data, error } = await supabase
    .from('companies')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
};

// User profile helpers
export const getUserProfile = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('User not authenticated');
  
  const { data, error } = await supabase
    .from('users')
    .select(`
      *,
      user_profiles (*)
    `)
    .eq('id', user.id)
    .single();
  
  if (error) throw error;
  return data;
};

export const updateUserProfile = async (profileData: any) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('User not authenticated');
  
  // Update basic user info
  const { error: userError } = await supabase
    .from('users')
    .update({
      full_name: profileData.fullName,
      phone_number: profileData.phoneNumber,
      profile_complete: true,
      updated_at: new Date().toISOString(),
    })
    .eq('id', user.id);
  
  if (userError) throw userError;
  
  // Check if profile exists
  const { data: existingProfile } = await supabase
    .from('user_profiles')
    .select('id')
    .eq('user_id', user.id)
    .single();
  
  if (existingProfile) {
    // Update existing profile
    const { error: profileError } = await supabase
      .from('user_profiles')
      .update({
        headline: profileData.headline,
        summary: profileData.summary,
        skills: profileData.skills,
        experience_years: profileData.experienceYears,
        current_salary: profileData.currentSalary,
        expected_salary: profileData.expectedSalary,
        notice_period: profileData.noticePeriod,
        highest_education: profileData.highestEducation,
        current_location: profileData.currentLocation,
        preferred_locations: profileData.preferredLocations,
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', user.id);
    
    if (profileError) throw profileError;
  } else {
    // Create new profile
    const { error: profileError } = await supabase
      .from('user_profiles')
      .insert({
        user_id: user.id,
        headline: profileData.headline,
        summary: profileData.summary,
        skills: profileData.skills,
        experience_years: profileData.experienceYears,
        current_salary: profileData.currentSalary,
        expected_salary: profileData.expectedSalary,
        notice_period: profileData.noticePeriod,
        highest_education: profileData.highestEducation,
        current_location: profileData.currentLocation,
        preferred_locations: profileData.preferredLocations,
      });
    
    if (profileError) throw profileError;
  }
  
  return await getUserProfile();
};

// File upload helper
export const uploadResume = async (file: File) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('User not authenticated');
  
  const fileExt = file.name.split('.').pop();
  const fileName = `${user.id}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `resumes/${fileName}`;
  
  const { error: uploadError } = await supabase.storage
    .from('user-documents')
    .upload(filePath, file);
  
  if (uploadError) throw uploadError;
  
  const { data: urlData } = supabase.storage
    .from('user-documents')
    .getPublicUrl(filePath);
  
  // Update user record with resume URL
  const { error: updateError } = await supabase
    .from('users')
    .update({
      resume_url: urlData.publicUrl,
      updated_at: new Date().toISOString(),
    })
    .eq('id', user.id);
  
  if (updateError) throw updateError;
  
  return urlData.publicUrl;
};