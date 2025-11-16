
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { CountryInsight } from '../types';
import Card from './ui/Card';

interface Props {
  country: CountryInsight;
  onClose: () => void;
}

const COLORS = ['#D2FF28', '#334155', '#64748b', '#94a3b8', '#cbd5e1', '#f1f5f9'];

const CountryDetailModal: React.FC<Props> = ({ country, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="relative max-h-[90vh] overflow-y-auto">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          <div className="flex items-center space-x-4 mb-6 border-b pb-4">
            <span className="text-4xl">{country.flag}</span>
            <h2 className="text-3xl font-bold">{country.name}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Information</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Global Rank (Market Size):</strong> #{country.globalRank}</p>
                <p><strong>Per Capita Spending:</strong> ${country.perCapitaSpending.toLocaleString()}</p>
                 <p><strong>Total Market Size:</strong> ${country.marketSize.toLocaleString()} Billion</p>
                <p><strong>Top Insurance Types:</strong> {country.popularInsurances.join(', ')}</p>
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-semibold mb-2">Coverage Notes:</h4>
                  <p className="text-sm">{country.notes}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Market Distribution</h3>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={country.distribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {country.distribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
        </Card>
      </div>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CountryDetailModal;
