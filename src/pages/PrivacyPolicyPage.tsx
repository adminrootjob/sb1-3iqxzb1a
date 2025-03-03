import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 mb-6">
            Last updated: June 15, 2025
          </p>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              JobAgartala.in ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-700 mb-4">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Create an account</li>
              <li>Upload your resume or CV</li>
              <li>Apply for jobs</li>
              <li>Fill out forms or surveys</li>
              <li>Communicate with us</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The types of information we may collect include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Personal identifiers (name, email address, phone number, etc.)</li>
              <li>Professional information (work history, education, skills, etc.)</li>
              <li>Login credentials</li>
              <li>Device information and usage data</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process job applications and connect job seekers with employers</li>
              <li>Communicate with you about our services, updates, and promotions</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect against, identify, and prevent fraud and other illegal activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-700 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Employers when you apply for jobs through our platform</li>
              <li>Service providers who perform services on our behalf</li>
              <li>Professional advisors, such as lawyers, auditors, and insurers</li>
              <li>Government authorities when required by law</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We will not sell your personal information to third parties.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We have implemented appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: privacy@jobagartala.in
            </p>
            <p className="text-gray-700">
              Phone: +91 381 2345678
            </p>
            <p className="text-gray-700">
              Address: 123 City Center, Near Ujjayanta Palace, Agartala, Tripura 799001, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;