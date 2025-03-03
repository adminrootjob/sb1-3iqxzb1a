/*
  # Database functions for incrementing counters

  1. New Functions
    - `increment_view_count` - Increments the view count for a job
    - `increment_application_count` - Increments the application count for a job
*/

-- Function to increment job view count
CREATE OR REPLACE FUNCTION increment_view_count(job_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE jobs
  SET views_count = views_count + 1
  WHERE id = job_id;
END;
$$ LANGUAGE plpgsql;

-- Function to increment job application count
CREATE OR REPLACE FUNCTION increment_application_count(job_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE jobs
  SET applications_count = applications_count + 1
  WHERE id = job_id;
END;
$$ LANGUAGE plpgsql;