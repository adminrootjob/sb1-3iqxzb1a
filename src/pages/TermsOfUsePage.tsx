import React from 'react';

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 mb-6">
            Last updated: June 15, 2025
          </p>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              Welcome to JobAgartala.in. By accessing or using our website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials on JobAgartala.in for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose or for any public display;</li>
              <li>Attempt to reverse engineer any software contained on JobAgartala.in;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p className="text-gray-700">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by JobAgartala.in at any time.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. User Accounts</h2>
            <p className="text-gray-700 mb-4">
              When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
            </p>
            <p className="text-gray-700 mb-4">
              You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Job Listings and Applications</h2>
            <p className="text-gray-700 mb-4">
              JobAgartala.in acts as an intermediary between job seekers and employers. We do not guarantee the accuracy of job listings, nor do we guarantee that you will receive a job offer or that employers will review your application.
            </p>
            <p className="text-gray-700 mb-4">
              By submitting your resume or job application through our platform, you authorize JobAgartala.in to share your information with the relevant employers.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The materials on JobAgartala.in are provided on an 'as is' basis. JobAgartala.in makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Limitations</h2>
            <p className="text-gray-700 mb-4">
              In no event shall JobAgartala.in or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on JobAgartala.in, even if JobAgartala.in or a JobAgartala.in authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: legal@jobagartala. in
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

export default TermsOfUsePage;