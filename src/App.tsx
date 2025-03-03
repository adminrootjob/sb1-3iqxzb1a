import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import JobSearchPage from './pages/JobSearchPage';
import UploadCVPage from './pages/UploadCVPage';
import JobDetailsPage from './pages/JobDetailsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchByLocationPage from './pages/SearchByLocationPage';
import PopularJobsPage from './pages/PopularJobsPage';
import PopularCompaniesPage from './pages/PopularCompaniesPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/search" element={<JobSearchPage />} />
            <Route path="/upload-cv" element={<UploadCVPage />} />
            <Route path="/job/:id" element={<JobDetailsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/search-by-location" element={<SearchByLocationPage />} />
            <Route path="/popular-jobs" element={<PopularJobsPage />} />
            <Route path="/popular-companies" element={<PopularCompaniesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;