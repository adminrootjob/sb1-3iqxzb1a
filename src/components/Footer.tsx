import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Job Seekers</h3>
            <ul className="space-y-2">
              <li><Link to="/upload-cv" className="text-purple-600 hover:text-purple-800">Upload your CV</Link></li>
              <li><Link to="/search-by-location" className="text-purple-600 hover:text-purple-800">Search Jobs by Location</Link></li>
              <li><Link to="/popular-jobs" className="text-purple-600 hover:text-purple-800">Popular Jobs</Link></li>
              <li><Link to="/popular-companies" className="text-purple-600 hover:text-purple-800">Popular companies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About JobAgartala</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-purple-600 hover:text-purple-800">About Us</Link></li>
              <li><Link to="/careers" className="text-purple-600 hover:text-purple-800">Careers</Link></li>
              <li><Link to="/blog" className="text-purple-600 hover:text-purple-800">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Information</h3>
            <ul className="space-y-2">
              <li><Link to="/terms-of-use" className="text-purple-600 hover:text-purple-800">Terms of Use</Link></li>
              <li><Link to="/privacy-policy" className="text-purple-600 hover:text-purple-800">Privacy Policy</Link></li>
              <li><Link to="/cookie-settings" className="text-purple-600 hover:text-purple-800">Cookie Settings</Link></li>
              <li><Link to="/contact-us" className="text-purple-600 hover:text-purple-800">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© 2025, JobAgartala.in - The #1 Job Portal in Tripura</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;