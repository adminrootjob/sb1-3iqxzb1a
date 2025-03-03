import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Building, Clock, CreditCard } from 'lucide-react';

const JobSearchPage: React.FC = () => {
  const [filters, setFilters] = useState({
    jobType: [],
    experience: [],
    salary: [],
    postedDate: []
  });

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechSolutions Ltd',
      location: 'Agartala, Tripura',
      type: 'Full-time',
      salary: '₹25,000 - ₹40,000 per month',
      postedDate: '2 days ago',
      description: 'We are looking for a skilled Frontend Developer with experience in React.js to join our team.'
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'Global Marketing Inc',
      location: 'Agartala, Tripura',
      type: 'Full-time',
      salary: '₹35,000 - ₹50,000 per month',
      postedDate: '1 week ago',
      description: 'Experienced Marketing Manager needed to lead our marketing initiatives and campaigns.'
    },
    {
      id: 3,
      title: 'Customer Support Executive',
      company: 'ServiceFirst Solutions',
      location: 'Remote (Tripura)',
      type: 'Part-time',
      salary: '₹15,000 - ₹20,000 per month',
      postedDate: '3 days ago',
      description: 'Looking for customer-oriented individuals to provide support to our clients.'
    },
    {
      id: 4,
      title: 'Accountant',
      company: 'Finance Partners',
      location: 'Agartala, Tripura',
      type: 'Full-time',
      salary: '₹30,000 - ₹45,000 per month',
      postedDate: '5 days ago',
      description: 'Seeking a qualified Accountant to handle financial records and reporting.'
    }
  ];

  const toggleFilter = (category: string, value: string) => {
    setFilters(prev => {
      const currentFilters = [...prev[category as keyof typeof filters]];
      if (currentFilters.includes(value)) {
        return {
          ...prev,
          [category]: currentFilters.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [category]: [...currentFilters, value]
        };
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            
            {/* Job Type Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Job Type</h3>
              <div className="space-y-2">
                {['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'].map((type) => (
                  <label key={type} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      checked={filters.jobType.includes(type)}
                      onChange={() => toggleFilter('jobType', type)}
                    />
                    <span className="ml-2 text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Experience Level */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Experience Level</h3>
              <div className="space-y-2">
                {['Entry Level', '1-3 years', '3-5 years', '5-10 years', '10+ years'].map((exp) => (
                  <label key={exp} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      checked={filters.experience.includes(exp)}
                      onChange={() => toggleFilter('experience', exp)}
                    />
                    <span className="ml-2 text-gray-700">{exp}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Salary Range */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Salary Range</h3>
              <div className="space-y-2">
                {['₹10k-20k', '₹20k-30k', '₹30k-50k', '₹50k-75k', '₹75k+'].map((salary) => (
                  <label key={salary} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      checked={filters.salary.includes(salary)}
                      onChange={() => toggleFilter('salary', salary)}
                    />
                    <span className="ml-2 text-gray-700">{salary}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Posted Date */}
            <div>
              <h3 className="font-semibold mb-3">Posted Date</h3>
              <div className="space-y-2">
                {['Last 24 hours', 'Last 3 days', 'Last week', 'Last month'].map((date) => (
                  <label key={date} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      checked={filters.postedDate.includes(date)}
                      onChange={() => toggleFilter('postedDate', date)}
                    />
                    <span className="ml-2 text-gray-700">{date}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Job Listings */}
        <div className="w-full md:w-3/4">
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Job title, keywords, or company" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="City, state, or pin code" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <button className="bg-purple-700 text-white px-8 py-3 rounded-md hover:bg-purple-800 transition duration-300">
                FIND JOBS
              </button>
            </div>
          </div>
          
          <div className="mb-4">
            <h2 className="text-xl font-bold">Jobs in Agartala</h2>
            <p className="text-gray-600">{jobs.length} jobs found</p>
          </div>
          
          <div className="space-y-6">
            {jobs.map((job) => (
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
                <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchPage;