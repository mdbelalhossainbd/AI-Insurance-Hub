import React, { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from './ui/Select';
import Card from './ui/Card';

const QuoteGenerator: React.FC = () => {
  const [quote, setQuote] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setQuote(null);
    setTimeout(() => {
      const randomQuote = Math.floor(Math.random() * (350 - 50 + 1)) + 50;
      setQuote(randomQuote);
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="quote" className="py-16 md:py-24 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Instant Insurance Quote</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">Fill in your details below to receive a personalized, no-obligation quote in seconds.</p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Card className="text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label="Full Name" id="name" type="text" placeholder="John Doe" required />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Age" id="age" type="number" placeholder="30" required min="18" />
                <Select label="Gender" id="gender" required>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Select>
              </div>
              <Select label="Insurance Type" id="insurance-type" required>
                <optgroup label="Life & Personal Insurance">
                  <option>Life Insurance</option>
                  <option>Term Life Insurance</option>
                  <option>Whole Life Insurance</option>
                  <option>Universal Life Insurance</option>
                  <option>Health Insurance</option>
                  <option>Critical Illness Insurance</option>
                  <option>Accident Insurance</option>
                  <option>Disability Insurance</option>
                  <option>Travel Insurance</option>
                  <option>Personal Accident Insurance</option>
                  <option>Mortgage Protection Insurance</option>
                </optgroup>
                <optgroup label="Vehicle & Transport Insurance">
                  <option>Auto / Car Insurance</option>
                  <option>Motorcycle Insurance</option>
                  <option>Commercial Vehicle Insurance</option>
                  <option>Truck Insurance</option>
                  <option>Taxi/Uber/Lyft Insurance</option>
                  <option>Boat / Marine Insurance</option>
                  <option>Aviation Insurance</option>
                </optgroup>
                <optgroup label="Property & Home Insurance">
                  <option>Homeowners Insurance</option>
                  <option>Renters Insurance</option>
                  <option>Condo Insurance</option>
                  <option>Landlord Insurance</option>
                  <option>Fire Insurance</option>
                  <option>Flood Insurance</option>
                  <option>Earthquake Insurance</option>
                  <option>Natural Disaster Insurance</option>
                  <option>Property Protection Insurance</option>
                </optgroup>
                <optgroup label="Business & Commercial Insurance">
                  <option>General Liability Insurance</option>
                  <option>Professional Liability (E&O) Insurance</option>
                  <option>Commercial Property Insurance</option>
                  <option>Workers’ Compensation Insurance</option>
                  <option>Business Interruption Insurance</option>
                  <option>Cyber Liability Insurance</option>
                  <option>Directors & Officers (D&O) Insurance</option>
                  <option>Employment Practices Liability (EPL) Insurance</option>
                  <option>Product Liability Insurance</option>
                  <option>Commercial Umbrella Insurance</option>
                </optgroup>
                <optgroup label="Specialty Insurance">
                  <option>Pet Insurance</option>
                  <option>Wedding/Event Insurance</option>
                  <option>Jewelry Insurance</option>
                  <option>Art & Collectibles Insurance</option>
                  <option>Tech Device Insurance (Laptop, Mobile)</option>
                  <option>Credit Insurance</option>
                  <option>Crop & Farm Insurance</option>
                  <option>International Student Insurance</option>
                  <option>Dental & Vision Insurance</option>
                  <option>Long-Term Care Insurance</option>
                </optgroup>
                <optgroup label="Government-Related Insurance (US-focused)">
                  <option>Medicare Insurance</option>
                  <option>Medicaid Plans</option>
                  <option>Life & AD&D offered by employers</option>
                  <option>Obamacare / ACA Health Plans</option>
                </optgroup>
              </Select>
              <Input label="Coverage Amount ($)" id="coverage" type="number" placeholder="50000" required />
              <Input label="Email" id="email" type="email" placeholder="john.doe@example.com" required />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Generating...' : 'Get Quote'}
              </Button>
            </form>
          </Card>
          <div className="flex items-center justify-center min-h-[300px]">
            {loading && <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#D2FF28]"></div>}
            {quote && (
              <div className="animate-fade-in-up">
                 <Card className="text-center w-full max-w-sm border-2 border-[#D2FF28]">
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Your Estimated Monthly Quote</h3>
                  <p className="text-5xl font-extrabold text-gray-900 mb-4">${quote}<span className="text-lg font-medium">/mo</span></p>
                  <p className="text-xs text-gray-500 mb-6">This is an estimate. Actual rates may vary.</p>
                  <Button variant="secondary">Contact an Agent</Button>
                </Card>
              </div>
            )}
            {!quote && !loading && (
              <div className="text-gray-500">
                <p>Your quote will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default QuoteGenerator;