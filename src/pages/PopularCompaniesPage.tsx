import React from 'react';
import { Link } from 'react-router-dom';
import { Building, MapPin, Users, Briefcase } from 'lucide-react';

const PopularCompaniesPage: React.FC = () => {
  // Dummy data for popular companies
  const companies = [
    {
      id: 1,
      name: 'Tripura State Government',
      industry: 'Government',
      location: 'Agartala, Tripura',
      employees: '10,000+',
      openJobs: 45,
      description: 'The Government of Tripura is the governing body of the Indian state of Tripura.',
      logo: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'TechSolutions Ltd',
      industry: 'Information Technology',
      location: 'Agartala, Tripura',
      employees: '100-500',
      openJobs: 12,
      description: 'A leading IT company in Tripura providing software development and IT services.',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Tripura University',
      industry: 'Education',
      location: 'Agartala, Tripura',
      employees: '500-1000',
      openJobs: 8,
      description: 'A central university established to provide quality higher education in Tripura.',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      name: 'Tripura Medical College',
      industry: 'Healthcare',
      location: 'Agartala, Tripura',
      employees: '500-1000',
      openJobs: 15,
      description: 'A premier medical institution providing healthcare education and services.',
      logo: 'https://images.unsplash.com/photo-1516549655669-8433e68fc470?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 5,
      name: 'Tripura State Cooperative Bank',
      industry: 'Banking & Finance',
      location: 'Multiple Locations, Tripura',
      employees: '500-1000',
      openJobs: 10,
      description: 'A cooperative banking institution serving the financial needs of Tripura.',
      logo: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 6,
      name: 'Northeast Telecom',
      industry: 'Telecommunications',
      location: 'Agartala, Tripura',
      employees: '100-500',
      openJobs: 7,
      description: 'A telecommunications company providing services across Northeast India.',
      logo: 'https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 7,
      name: 'Tripura Tourism Development Corporation',
      industry: 'Tourism & Hospitality',
      location: 'Agartala, Tripura',
      employees: '100-500',
      openJobs: 5,
      description: 'A government corporation promoting tourism in Tripura.',
      logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 8,
      name: 'Tripura Retail Group',
      industry: 'Retail',
      location: 'Multiple Locations, Tripura',
      employees: '100-500',
      openJobs: 18,
      description: 'A retail group operating multiple stores across Tripura.',
      logo: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  ];

  // Dummy data for industry sectors
  const industries = [
    'Government', 'Information Technology', 'Education', 'Healthcare', 
    'Banking & Finance', 'Telecommunications', 'Tourism & Hospitality', 
    'Retail', 'Manufacturing', 'Agriculture', 'Construction', 'Media'
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Popular Companies in Tripura</h1>
          <p className="text-xl text-gray-600">Discover top employers and exciting career opportunities</p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Industry</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <Link to={`/search?industry=${industry}`} key={index} className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow text-center">
                <Building className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <span className="font-medium">{industry}</span>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Employers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companies.map(company => (
              <div key={company.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-purple-700 mb-1">{company.name}</h3>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Building size={14} className="mr-1" />
                      <span className="text-sm">{company.industry}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <MapPin size={14} className="mr-1" />
                      <span className="text-sm">{company.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Users size={14} className="mr-1" />
                      <span className="text-sm">{company.employees} employees</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 mt-2">{company.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-purple-700">
                    <Briefcase size={16} className="mr-1" />
                    <span className="font-semibold">{company.openJobs} open positions</span>
                  </div>
                  <Link to={`/company/${company.id}`} className="text-purple-700 hover:text-purple-900 font-medium">
                    View Jobs →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/companies" className="inline-block bg-white text-purple-700 border border-purple-700 px-6 py-3 rounded-md hover:bg-purple-50 transition duration-300 font-semibold">
              View All Companies
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Why Work in Tripura?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Growing Economy</h3>
              <p className="text-gray-700">Tripura has a rapidly growing economy with opportunities across various sectors.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Quality of Life</h3>
              <p className="text-gray-700">Enjoy a high quality of life with lower living costs and a beautiful natural environment.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Cultural Heritage</h3>
              <p className="text-gray-700">Experience the rich cultural heritage and traditions of Tripura.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Government Initiatives</h3>
              <p className="text-gray-700">Benefit from various government initiatives aimed at boosting employment and development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCompaniesPage;