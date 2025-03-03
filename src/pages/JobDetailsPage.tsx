import React from 'react';
import { MapPin, Building, Clock, CreditCard, Briefcase, Calendar, CheckCircle, Share2 } from 'lucide-react';

const JobDetailsPage: React.FC = () => {
  // Sample job data
  const job = {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechSolutions Ltd',
    location: 'Agartala, Tripura',
    type: 'Full-time',
    salary: '₹25,000 - ₹40,000 per month',
    postedDate: '2 days ago',
    description: 'We are looking for a skilled Frontend Developer with experience in React.js to join our team.',
    responsibilities: [
      'Develop new user-facing features using React.js',
      'Build reusable components and front-end libraries for future use',
      'Translate designs and wireframes into high-quality code',
      'Optimize components for maximum performance across a vast array of web-capable devices and browsers'
    ],
    requirements: [
      'Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model',
      'Thorough understanding of React.js and its core principles',
      'Experience with popular React.js workflows (such as Flux or Redux)',
      'Familiarity with newer specifications of ECMAScript',
      'Experience with data structure libraries (e.g., Immutable.js)',
      'Knowledge of isomorphic React is a plus'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance',
      'Flexible working hours',
      'Professional development opportunities',
      'Friendly work environment'
    ],
    companyInfo: 'TechSolutions Ltd is a leading technology company in Agartala, specializing in web and mobile application development. We work with clients across various industries to deliver innovative digital solutions.'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-purple-700 mb-3">{job.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <Building size={18} className="mr-1" />
              <span className="mr-4">{job.company}</span>
              <MapPin size={18} className="mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                <Briefcase size={16} className="mr-1" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                <CreditCard size={16} className="mr-1" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                <Calendar size={16} className="mr-1" />
                <span>Posted {job.postedDate}</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition duration-300 flex-grow">
                Apply Now
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-50 transition duration-300">
                <Share2 size={20} />
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold mb-4">Job Description</h2>
            <p className="text-gray-700 mb-6">{job.description}</p>
            
            <h3 className="text-lg font-semibold mb-3">Responsibilities:</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-3">Requirements:</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-3">Benefits:</h3>
            <ul className="mb-6 space-y-2 text-gray-700">
              {job.benefits.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">About the Company</h2>
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-4 rounded-full mr-4">
              <Building size={32} className="text-purple-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{job.company}</h3>
              <p className="text-gray-600">{job.location}</p>
            </div>
          </div>
          <p className="text-gray-700">{job.companyInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;