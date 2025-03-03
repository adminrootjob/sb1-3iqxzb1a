import React from 'react';
import { Building, Users, Award, Target } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About JobAgartala.in</h1>
          <p className="text-xl text-gray-600">The leading job portal in Tripura connecting talented professionals with great companies</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            JobAgartala.in was founded in 2023 with a simple mission: to bridge the gap between job seekers and employers in Tripura. We recognized that while there were many national job portals, none of them focused specifically on the unique job market and opportunities in our region.
          </p>
          <p className="text-gray-700 mb-4">
            Our team of local professionals with extensive experience in recruitment and technology came together to create a platform that addresses the specific needs of Tripura's workforce and businesses.
          </p>
          <p className="text-gray-700">
            Today, JobAgartala.in has grown to become the most trusted job portal in the region, serving thousands of job seekers and hundreds of employers across Tripura.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <div className="flex items-start mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Target className="h-6 w-6 text-purple-700" />
              </div>
              <p className="text-gray-700">
                To empower job seekers in Tripura by connecting them with meaningful career opportunities and providing resources for professional growth.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Award className="h-6 w-6 text-purple-700" />
              </div>
              <p className="text-gray-700">
                To be the catalyst for economic growth in Tripura by creating a thriving ecosystem where talent meets opportunity, reducing unemployment and fostering innovation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                <Users className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-700">We prioritize the needs of our local community in everything we do.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                <Building className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-700">We maintain the highest standards of honesty and transparency.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                <Award className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-700">We strive for excellence in our service and user experience.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <p className="text-gray-700 mb-6">
            JobAgartala.in is powered by a dedicated team of professionals who are passionate about creating positive change in Tripura's employment landscape. Our team combines expertise in recruitment, technology, and local market knowledge to deliver the best possible service to our users.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="Team Member" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Rajiv Sharma</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="Team Member" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Priya Das</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="Team Member" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Amit Roy</h3>
              <p className="text-gray-600">Technical Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;