
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 border-b pb-4">Privacy Policy</h1>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p><strong>Last Updated:</strong> October 26, 2023</p>
            <p>AI Insurance Hub ("us", "we", or "our") operates the AI Insurance Hub website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">1. Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, your name, email address, age, and other details necessary for generating insurance quotes.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">2. Use of Data</h2>
            <p>AI Insurance Hub uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">3. Data Security</h2>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">4. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Privacy;
