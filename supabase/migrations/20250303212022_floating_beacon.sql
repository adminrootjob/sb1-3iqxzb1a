FOR SELECT 
  TO anon, authenticated 
  USING (status = 'active');

-- Job applications policies
CREATE POLICY "Users can view their own applications" 
  ON job_applications 
  FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own applications" 
  ON job_applications 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

-- Saved jobs policies
CREATE POLICY "Users can view their saved jobs" 
  ON saved_jobs 
  FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their saved jobs" 
  ON saved_jobs 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their saved jobs" 
  ON saved_jobs 
  FOR DELETE 
  TO authenticated 
  USING (auth.uid() = user_id);

-- Company reviews policies
CREATE POLICY "Anyone can view company reviews" 
  ON company_reviews 
  FOR SELECT 
  TO anon, authenticated 
  USING (true);

CREATE POLICY "Users can insert their own reviews" 
  ON company_reviews 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" 
  ON company_reviews 
  FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = user_id);

-- Notifications policies
CREATE POLICY "Users can view their own notifications" 
  ON notifications 
  FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own notifications" 
  ON notifications 
  FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = user_id);

-- Job alerts policies
CREATE POLICY "Users can view their own job alerts" 
  ON job_alerts 
  FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own job alerts" 
  ON job_alerts 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own job alerts" 
  ON job_alerts 
  FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own job alerts" 
  ON job_alerts 
  FOR DELETE 
  TO authenticated 
  USING (auth.uid() = user_id);

-- Blog posts policies
CREATE POLICY "Anyone can view published blog posts" 
  ON blog_posts 
  FOR SELECT 
  TO anon, authenticated 
  USING (published = true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_jobs_company_id ON jobs(company_id);
CREATE INDEX IF NOT EXISTS idx_jobs_location ON jobs(location);
CREATE INDEX IF NOT EXISTS idx_jobs_job_type ON jobs(job_type);
CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_job_id ON job_applications(job_id);
CREATE INDEX IF NOT EXISTS idx_job_applications_user_id ON job_applications(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_jobs_user_id ON saved_jobs(user_id);
CREATE INDEX IF NOT EXISTS idx_company_reviews_company_id ON company_reviews(company_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_job_alerts_user_id ON job_alerts(user_id);