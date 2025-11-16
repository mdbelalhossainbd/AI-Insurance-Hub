
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 border-b pb-4">Terms of Service</h1>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p><strong>Last Updated:</strong> October 26, 2023</p>
            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the AI Insurance Hub website (the "Service") operated by AI Insurance Hub ("us", "we", or "our").</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">1. Acceptance of Terms</h2>
            <p>By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. The materials contained in this Service are protected by applicable copyright and trademark law.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on AI Insurance Hub's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on AI Insurance Hub's website;</li>
              <li>remove any copyright or other proprietary notations from the materials.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">3. Disclaimer</h2>
            <p>The materials on AI Insurance Hub's website are provided on an 'as is' basis. AI Insurance Hub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">4. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of our operating jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
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

export default Terms;
