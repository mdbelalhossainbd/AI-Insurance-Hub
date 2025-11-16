
import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you shortly.");
    // In a real application, you would handle form submission here
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-white py-16 md:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 border-b pb-4">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Have questions or need personalized assistance? We're here to help. Reach out to us through the form, or use the contact details below.</p>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p><a href="mailto:support@aiinsurancehub.com" className="text-[#D2FF28] brightness-50 hover:underline">support@aiinsurancehub.com</a></p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p><a href="tel:+11234567890" className="text-[#D2FF28] brightness-50 hover:underline">(123) 456-7890</a></p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Office Address</h3>
                <p>123 Insure Lane, Tech City, 10101</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label="Your Name" id="contact-name" type="text" placeholder="John Doe" required />
              <Input label="Your Email" id="contact-email" type="email" placeholder="john.doe@example.com" required />
              <Input label="Subject" id="contact-subject" type="text" placeholder="Question about my quote" required />
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="contact-message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2FF28] focus:border-transparent transition" placeholder="I'd like to know more about..." required></textarea>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
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

export default Contact;
