import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Building, MapPin, Clock, CreditCard } from 'lucide-react';

const PopularJobsPage: React.FC = () => {
  // Dummy data for popular job categories
  const jobCategories = [
    { id: 1, name: 'Government Jobs', count: 156 },
    { id: 2, name: 'IT & Software', count: 124 },
    { id: 3, name: 'Teaching & Education', count: 98 },
    { id: 4, name: 'Banking & Finance', count: 87 },
    { id: 5, name: 'Healthcare & Medical', count: 76 },
    { id: 6, name: 'Sales & Marketing', count: 65 },
    { id: 7, name: 'Customer Service', count: 54 },
    { id: 8, name: 'Administrative', count: 48 },
    { id: 9, name: 'Engineering', count: 42 },
    { id: 10, name: 'Hospitality', count: 38 },
    { id: 11, name: 'Retail', count: 35 },
    { id: 12, name: 'Construction', count: 32 }
  ];

  // Dummy data for popular jobs
  const popularJobs = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'TechSolutions Ltd',
      location: 'Agartala, Tripura',
      type: 'Full-time',
      salary: '₹25,000 - ₹40,000 per month',
      postedDate: '2 days ago',
      description: 'We are looking for a skilled Software Developer with experience in web technologies to join our team.'
    },
    {
      id: 2,
      title: 'Primary School Teacher',
      company: 'Tripura Public School',
      location: 'Agartala, Tripura',
      type: 'Full-time',
      salary: '₹20,000 - ₹30,000 per month',
      postedDate: '3 days ago',
      description: 'Experienced Primary School Teacher needed to teach students from Class I to V.'
    },
    {
      id: 3,
      title: 'Bank Clerk',
      company: 'Tripura State Cooperative Bank',
      location: 'Multiple Locations, Tripura',
      type: 'Full-time',
      salary: '₹22,000 - ₹28,000 per month',
      postedDate: '1 week ago',
      description: 'Looking for Bank Clerks to handle customer transactions and administrative duties.'
    },
    {
      id: 4,
      title: 'Sales Executive',
      company: 'Telecom Solutions',
      location: 'Agartala, Tripura',
      type: 'Full-time',
      salary: '₹18,000 - ₹25,000 per month',
      postedDate: '5 days ago',
      description: 'Sales Executive needed to promote telecom products and services to potential customers.'
    },
    {
      id: 5,
      title: 'Staff Nurse',
      company: 'City Hospital',
      location: 'Agartala, Tripura',
      type: 'Full-time',
      salary: '₹25,000 - ₹35,000 per month',
      postedDate: '4 days ago',
      description: 'Registered Nurse needed to provide patient care in a busy hospital setting.'
    },
    {
      id: 6,
      title: 'Administrative Assistant',
      company: 'Government Department',
      location: 'Agartala, Tripura',
      type: 'Contract',
      salary: '₹18,000 - ₹22,000 per month',
      postedDate: '1 week ago',
      description: 'Administrative Assistant needed to support office operations and handle documentation.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Popular Jobs in Tripura</h1>
          <p className="text-xl text-gray-600">Discover the most sought-after job opportunities across various industries</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Job Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {jobCategories.map(category => (
              <Link to={`/search?category=${category.name}`} key={category.id} className="bg-gray-100 p-4 rounded-md hover:bg-purple-50 transition-colors">
                <div className="flex flex-col items-center text-center">
                  <Briefcase className="h-8 w-8 text-purple-600 mb-2" />
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} jobs</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Trending Jobs This Week</h2>
          <div className="space-y-6">
            {popularJobs.map(job => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-purple-700 mb-2">{job.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Building size={16} className="mr-1" />
                  <span className="mr-4">{job.company}</span>
                  <MapPin size={16} className="mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Briefcase size={16} className="mr-1" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CreditCard size={16} className="mr-1" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-1" />
                    <span>{job.postedDate}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <Link to={`/job/${job.id}`} className="inline-block bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300">
                  View Details
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/search" className="inline-block bg-white text-purple-700 border border-purple-700 px-6 py-3 rounded-md hover:bg-purple-50 transition duration-300 font-semibold">
              View All Jobs
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Job Search Tips</h2>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Keep Your Resume Updated</h3>
              <p className="text-gray-700">Regularly update your resume with your latest skills and experiences to stand out to employers.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Set Up Job Alerts</h3>
              <p className="text-gray-700">Create job alerts to receive notifications about new job postings that match your preferences.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Prepare for Interviews</h3>
              <p className="text-gray-700">Research the company and practice common interview questions before your interview.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Network with Professionals</h3>
              <p className="text-gray-700">Connect with professionals in your field to learn about hidden job opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularJobsPage;