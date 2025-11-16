import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { SavingsResult } from '../types';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from './ui/Select';
import Card from './ui/Card';

const SavingsCalculator: React.FC = () => {
  const [result, setResult] = useState<SavingsResult | null>(null);
  const [age, setAge] = useState('30');
  const [premium, setPremium] = useState('200');
  const [duration, setDuration] = useState('10');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const totalPremium = parseInt(premium) * 12 * parseInt(duration);
    const marketAverage = totalPremium * 1.25; // Assume market is 25% higher
    const estimatedSavings = marketAverage - totalPremium;

    setResult({ totalPremium, estimatedSavings, marketAverage });
  };
  
  const chartData = result ? [
    { name: 'Your Premium', value: result.totalPremium, fill: '#D2FF28' },
    { name: 'Market Average', value: result.marketAverage, fill: '#334155' },
  ] : [];

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Calculate Your Insurance Savings</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-4">See how much you could save with our competitive rates over time.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label="Your Age" id="calc-age" type="number" value={age} onChange={e => setAge(e.target.value)} required min="18" />
              <Select label="Insurance Type" id="calc-insurance-type" required>
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
              <Input label="Estimated Monthly Premium ($)" id="calc-premium" type="number" value={premium} onChange={e => setPremium(e.target.value)} required />
              <Input label="Duration (Years)" id="calc-duration" type="number" value={duration} onChange={e => setDuration(e.target.value)} required />
              <Button type="submit" className="w-full">Calculate Savings</Button>
            </form>
          </Card>
          {result ? (
            <Card className="flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Estimated Savings Over {duration} Years</h3>
              <div className="text-center mb-6">
                <p className="text-gray-600">Total Premium Paid</p>
                <p className="text-3xl font-bold text-gray-900">${result.totalPremium.toLocaleString()}</p>
              </div>
              <div className="text-center mb-6 bg-[#D2FF28]/20 p-4 rounded-lg">
                <p className="text-gray-600">Estimated Savings</p>
                <p className="text-4xl font-bold text-green-600">${result.estimatedSavings.toLocaleString()}</p>
              </div>
               <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `$${Number(value).toLocaleString()}`}/>
                    <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                    <Bar dataKey="value" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <Button variant="secondary" className="mt-6">Apply Now</Button>
            </Card>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 bg-gray-50 rounded-xl p-8">
              <p>Your savings analysis will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;