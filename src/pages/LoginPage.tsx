import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
        
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <div className="mt-2">
              <Link to="/forgot-password" className="text-purple-700 text-sm hover:underline">Forgot password?</Link>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-purple-700 text-white py-3 rounded-md hover:bg-purple-800 transition duration-300 font-medium"
          >
            LOGIN
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-gray-500">Or</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
            <span className="text-purple-700">Login via Google</span>
          </button>
          
          <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
            <span className="text-purple-700">Login via Facebook</span>
          </button>
        </div>
        
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            By logging in to your account you confirm your continued acceptance of our{' '}
            <Link to="/terms-of-use" className="text-purple-700 hover:underline">Terms of Use</Link> and{' '}
            <Link to="/privacy-policy" className="text-purple-700 hover:underline">Privacy Policy</Link>.
          </p>
        </div>
        
        <div className="mt-6 text-center">
          <p>
            Don't have an account yet?{' '}
            <Link to="/register" className="text-purple-700 font-medium hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;