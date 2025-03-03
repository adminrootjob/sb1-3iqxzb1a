import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Briefcase, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmployerDropdownOpen, setIsEmployerDropdownOpen] = useState(false);
  const [isJobSeekerDropdownOpen, setIsJobSeekerDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEmployerDropdown = () => {
    setIsEmployerDropdownOpen(!isEmployerDropdownOpen);
  };

  const toggleJobSeekerDropdown = () => {
    setIsJobSeekerDropdownOpen(!isJobSeekerDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Briefcase className="h-8 w-8 text-purple-700" />
              <span className="ml-2 text-2xl font-bold text-purple-700">JobAgartala.in</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-purple-700"
                onClick={toggleJobSeekerDropdown}
              >
                Job Seekers <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isJobSeekerDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <Link to="/search" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Find Jobs</Link>
                    <Link to="/upload-cv" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Upload CV</Link>
                    <Link to="/popular-jobs" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Popular Jobs</Link>
                    <Link to="/career-advice" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Career Advice</Link>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-purple-700"
                onClick={toggleEmployerDropdown}
              >
                Employers <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isEmployerDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <Link to="/post-job" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Post a Job</Link>
                    <Link to="/employer-login" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Employer Login</Link>
                    <Link to="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Pricing</Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/about-us" className="text-gray-700 hover:text-purple-700">About Us</Link>
            <Link to="/contact-us" className="text-gray-700 hover:text-purple-700">Contact</Link>
            <Link to="/login" className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Sign in</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <div>
                <button 
                  className="flex items-center justify-between w-full text-gray-700 hover:text-purple-700 py-2"
                  onClick={toggleJobSeekerDropdown}
                >
                  <span>Job Seekers</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isJobSeekerDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/search" className="block text-gray-700 hover:text-purple-700 py-1" onClick={toggleMenu}>Find Jobs</Link>
                    <Link to="/upload-cv" className="block text-gray-700 hover:text-purple-700 py-1" onClick={toggleMenu}>Upload CV</Link>
                    <Link to="/popular-jobs" className="block text-gray-700 hover:text-purple-700 py-1" onClick={toggleMenu}>Popular Jobs</Link>
                    <Link to="/career-advice" className="block text-gray-700 hover:text-purple-700 py-1" onClick={toggleMenu}>Career Advice</Link>
                  </div>
                )}
              </div>
              
              <div>
                <button 
                  className="flex items-center justify-between w-full text-gray-700 hover:text-purple-700 py-2"
                  onClick={toggleEmployerDropdown}
                >
                  <span>Employers</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isEmployerDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/post-job" className="block text-gray-700 hover:text-purple-700 py-1" onClick={toggleMenu}>Post a Job</Link>
                    <Link to="/employer-login" className="block text-gray-700 hover:text-purple-700 py-1" onClick={toggleMenu}>Employer Login</Link>
                    <Link to="/pricing" className="block text-gray-700 hover:text-purple-700 py-1" onClick={toggleMenu}>Pricing</Link>
                  </div>
                )}
              </div>
              
              <Link to="/about-us" className="text-gray-700 hover:text-purple-700 py-2" onClick={toggleMenu}>About Us</Link>
              <Link to="/contact-us" className="text-gray-700 hover:text-purple-700 py-2" onClick={toggleMenu}>Contact</Link>
              <Link to="/login" className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 text-center" onClick={toggleMenu}>Sign in</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;