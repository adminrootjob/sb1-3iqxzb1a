import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you. Get in touch with our team.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
              <MapPin className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Office</h3>
            <p className="text-gray-700">
              123 City Center, Near Ujjayanta Palace<br />
              Agartala, Tripura 799001<br />
              India
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
              <Phone className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">
              Customer Support: +91 381 2345678<br />
              Employer Inquiries: +91 381 2345679<br />
              Toll-Free: 1800 123 4567
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
              <Mail className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-700">
              General Inquiries: info@jobagartala.in<br />
              Support: support@jobagartala.in<br />
              Careers: careers@jobagartala.in
            </p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition duration-300 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
          <div className="flex items-start mb-6">
            <Clock className="h-6 w-6 text-purple-700 mr-4 mt-1" />
            <div>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Sunday:</span> Closed
              </p>
            </div>
          </div>
          <p className="text-gray-700 italic">
            Note: Our online support is available 24/7 through email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;