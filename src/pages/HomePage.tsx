import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Briefcase, Building, Users, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  const jobCategories = [
    'Engineering', 'Teacher', 'Developer', 'Manager', 'Specialist', 
    'Consultant', 'Executive', 'Analyst'
  ];

  const locations = [
    'Agartala', 'Tripura West', 'Tripura North', 'Tripura South', 
    'Dhalai', 'Khowai', 'Sepahijala', 'Gomati', 'Unakoti'
  ];

  const featuredJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechSolutions Ltd',
      location: 'Agartala, Tripura',
      type: 'Full-time',
      salary: '₹25,000 - ₹40,000 per month',
      postedDate: '2 days ago'
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'Global Marketing Inc',
      location: 'Agartala, Tripura',
      type: 'Full-time',
      salary: '₹35,000 - ₹50,000 per month',
      postedDate: '1 week ago'
    },
    {
      id: 3,
      title: 'Customer Support Executive',
      company: 'ServiceFirst Solutions',
      location: 'Remote (Tripura)',
      type: 'Part-time',
      salary: '₹15,000 - ₹20,000 per month',
      postedDate: '3 days ago'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Job in Agartala</h1>
            <p className="text-xl mb-8">Discover thousands of job opportunities in Tripura's capital city</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Job title, keywords, or company" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-700"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="City, state, or pin code" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-700"
                />
              </div>
              <button className="bg-purple-700 text-white px-8 py-3 rounded-md hover:bg-purple-800 transition duration-300 font-semibold">
                FIND JOBS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Briefcase className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">1,500+</h3>
              <p className="text-gray-600">Active Job Listings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Building className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">300+</h3>
              <p className="text-gray-600">Companies Hiring</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">10,000+</h3>
              <p className="text-gray-600">Registered Job Seekers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CV Upload Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl font-bold mb-4">Your dream job is waiting for you</h2>
                <p className="text-gray-600 mb-6">Upload your CV and let employers find you. It only takes a few seconds!</p>
                <div className="mb-6">
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">FREE!</span>
                </div>
                <Link to="/upload-cv" className="inline-block bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition duration-300 font-semibold">
                  Upload your CV
                </Link>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Upload CV" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Featured Jobs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the latest job opportunities from top employers in Agartala</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredJobs.map(job => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-purple-700 mb-2">{job.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Building size={16} className="mr-1" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">{job.type}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">{job.salary}</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded">{job.postedDate}</span>
                </div>
                <Link to={`/job/${job.id}`} className="block text-center bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300">
                  View Details
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/search" className="inline-block bg-white text-purple-700 border border-purple-700 px-6 py-3 rounded-md hover:bg-purple-50 transition duration-300 font-semibold">
              View All Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Job Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {jobCategories.map((category, index) => (
              <div key={index} className="border border-gray-300 rounded-md p-4 flex items-center justify-center hover:bg-purple-50 hover:border-purple-300 cursor-pointer transition duration-300">
                <Search size={16} className="text-purple-700 mr-2" />
                <span className="font-medium">{category}</span>
              </div>
            ))}
            <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center hover:bg-purple-50 hover:border-purple-300 cursor-pointer transition duration-300">
              <span className="font-medium">Enter your own →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Locations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <div key={index} className="border border-gray-300 bg-white rounded-md p-4 flex items-center justify-center hover:bg-purple-50 hover:border-purple-300 cursor-pointer transition duration-300">
                <MapPin size={16} className="text-purple-700 mr-2" />
                <span className="font-medium">{location}</span>
              </div>
            ))}
            <div className="border border-gray-300 bg-white rounded-md p-4 flex items-center justify-center hover:bg-purple-50 hover:border-purple-300 cursor-pointer transition duration-300">
              <span className="font-medium">Enter your own →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Choose JobAgartala.in</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The leading job portal dedicated to connecting job seekers and employers in Tripura</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                <Search className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Focus</h3>
              <p className="text-gray-600">Specialized in Tripura's job market with local insights and opportunities</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                <Award className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Listings</h3>
              <p className="text-gray-600">Verified job postings from reputable companies across various industries</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Support</h3>
              <p className="text-gray-600">Resume building, interview tips, and career guidance for job seekers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;