import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <AlertTriangle className="h-20 w-20 text-purple-700 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition duration-300 inline-block font-semibold"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;