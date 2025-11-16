
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 border-b pb-4">About Us</h1>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>Welcome to AI Insurance Hub, your trusted partner in navigating the complex world of insurance. Our mission is to simplify insurance by leveraging cutting-edge artificial intelligence, making it more accessible, transparent, and personalized for everyone.</p>
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">Our Vision</h2>
            <p>We believe that finding the right insurance should be a seamless and empowering experience. In an industry often perceived as opaque and confusing, we aim to be a beacon of clarity. By combining deep industry expertise with powerful AI tools, we provide instant quotes, answer your questions 24/7, and help you discover savings you never thought possible.</p>
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">What We Do</h2>
            <p>AI Insurance Hub is a one-stop portal for all your insurance needs. Our platform offers:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Instant Quotes:</strong> Get personalized insurance quotes in seconds with our smart quote generator.</li>
              <li><strong>AI-Powered Guidance:</strong> Our advanced chatbot is trained on a vast knowledge base to provide you with accurate answers to your insurance-related questions anytime, anywhere.</li>
              <li><strong>Savings Analysis:</strong> Use our calculator to understand your potential savings and make informed financial decisions.</li>
              <li><strong>Engaging Education:</strong> Learn more about insurance in a fun and interactive way with our daily quizzes.</li>
            </ul>
            <p>We are committed to putting our customers first, ensuring you have the confidence to choose the coverage that's right for you and your family. Thank you for choosing AI Insurance Hub.</p>
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

export default About;
