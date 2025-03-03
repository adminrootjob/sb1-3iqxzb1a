import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase } from 'lucide-react';

const SearchByLocationPage: React.FC = () => {
  // Dummy data for locations in Tripura
  const locations = [
    {
      id: 1,
      name: 'Agartala',
      jobCount: 245,
      image: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Udaipur',
      jobCount: 87,
      image: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Dharmanagar',
      jobCount: 65,
      image: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Kailashahar',
      jobCount: 42,
      image: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Ambassa',
      jobCount: 38,
      image: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Belonia',
      jobCount: 35,
      image: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      name: 'Khowai',
      jobCount: 32,
      image: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      name: 'Teliamura',
      jobCount: 28,
      image: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      name: 'Sonamura',
      jobCount: 25,
      image: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 10,
      name: 'Amarpur',
      jobCount: 22,
      image: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 11,
      name: 'Sabroom',
      jobCount: 18,
      image: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 12,
      name: 'Kumarghat',
      jobCount: 15,
      image: 'https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Search Jobs by Location</h1>
          <p className="text-xl text-gray-600">Find job opportunities in different cities and towns across Tripura</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map(location => (
            <Link to={`/search?location=${location.name}`} key={location.id} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-40">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{location.name}</h3>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">{location.name}, Tripura</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">{location.jobCount} jobs</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Popular Districts in Tripura</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/search?location=West Tripura" className="bg-gray-100 p-3 rounded-md hover:bg-purple-50 hover:text-purple-700 transition-colors">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>West Tripura</span>
              </div>
            </Link>
            <Link to="/search?location=North Tripura" className="bg-gray-100 p-3 rounded-md hover:bg-purple-50 hover:text-purple-700 transition-colors">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>North Tripura</span>
              </div>
            </Link>
            <Link to="/search?location=South Tripura" className="bg-gray-100 p-3 rounded-md hover:bg-purple-50 hover:text-purple-700 transition-colors">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>South Tripura</span>
              </div>
            </Link>
            <Link to="/search?location=Dhalai" className="bg-gray-100 p-3 rounded-md hover:bg-purple-50 hover:text-purple-700 transition-colors">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Dhalai</span>
              </div>
            </Link>
            <Link to="/search?location=Khowai" className="bg-gray-100 p-3 rounded-md hover:bg-purple-50 hover:text-purple-700 transition-colors">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Khowai</span>
              </div>
            </Link>
            <Link to="/search?location=Gomati" className="bg-gray-100 p-3 rounded-md hover:bg-purple-50 hover:text-purple-700 transition-colors">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Gomati</span>
              </div>
            </Link>
            <Link to="/search?location=Unakoti" className="bg-gray-100 p-3 rounded-md hover:bg-purple-50 hover:text-purple-700 transition-colors">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Unakoti</span>
              </div>
            </Link>
            <Link to="/search?location=Sepahijala" className="bg-gray-100 p-3 rounded-md hover:bg-purple-50 hover:text-purple-700 transition-colors">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Sepahijala</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchByLocationPage;