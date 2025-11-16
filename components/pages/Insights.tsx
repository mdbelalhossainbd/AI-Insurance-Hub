
import React, { useState, useMemo } from 'react';
// Fix: Imported Legend from recharts.
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { insightsData } from '../../data/insightsData';
import type { CountryInsight, InsuranceType } from '../../types';
import Button from '../ui/Button';
import Select from '../ui/Select';
import Card from '../ui/Card';
import CountryDetailModal from '../CountryDetailModal';

const Insights: React.FC = () => {
    const [filterType, setFilterType] = useState<InsuranceType | 'All'>('All');
    const [filterSpending, setFilterSpending] = useState('All');
    const [sortKey, setSortKey] = useState<'name' | 'perCapitaSpending'>('name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [selectedCountry, setSelectedCountry] = useState<CountryInsight | null>(null);

    const filteredAndSortedData = useMemo(() => {
        let data = insightsData;

        // Filter by type
        if (filterType !== 'All') {
            data = data.filter(country => country.popularInsurances.includes(filterType));
        }

        // Filter by spending
        if (filterSpending !== 'All') {
            const [min, max] = filterSpending.split('-').map(Number);
            data = data.filter(country => {
                const spending = country.perCapitaSpending;
                if (max) {
                    return spending >= min && spending <= max;
                }
                return spending >= min;
            });
        }
        
        // Sort
        data.sort((a, b) => {
            if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
            if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        return data;
    }, [filterType, filterSpending, sortKey, sortOrder]);
    
    const handleSort = (key: 'name' | 'perCapitaSpending') => {
        if (key === sortKey) {
            setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };
    
    const chartData = useMemo(() => {
        return [...filteredAndSortedData]
            .sort((a,b) => b.marketSize - a.marketSize)
            .slice(0, 10)
            .map(c => ({ name: c.name, 'Market Size (USD B)': c.marketSize }));
    }, [filteredAndSortedData]);
    
    const resetFilters = () => {
        setFilterType('All');
        setFilterSpending('All');
        setSortKey('name');
        setSortOrder('asc');
    };

    const insuranceTypes: InsuranceType[] = ['Health', 'Life', 'Auto', 'Home', 'Travel', 'Business'];

  return (
    <div className="bg-white py-16 md:py-24 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">Global Insurance Insights</h1>
              <p className="max-w-3xl mx-auto text-gray-600 mt-4">Explore insurance trends, spending, and key market data from around the world.</p>
            </div>

            {/* Filters Section */}
            <section id="filters" className="mb-12">
                <Card className="bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                        <Select label="Filter by Insurance Type" id="filter-type" value={filterType} onChange={e => setFilterType(e.target.value as InsuranceType | 'All')}>
                            <option value="All">All Types</option>
                            {insuranceTypes.map(type => <option key={type} value={type}>{type}</option>)}
                        </Select>
                         <Select label="Filter by Per Capita Spending" id="filter-spending" value={filterSpending} onChange={e => setFilterSpending(e.target.value)}>
                            <option value="All">Any Spending</option>
                            <option value="0-1000">&lt; $1,000</option>
                            <option value="1000-4000">$1,000 - $4,000</option>
                            <option value="4000-Infinity">$4,000+</option>
                        </Select>
                        <div className="flex space-x-2">
                             <Button onClick={resetFilters} className="w-full">Reset Filters</Button>
                        </div>
                    </div>
                </Card>
            </section>
            
             {/* Charts Section */}
            <section id="charts" className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Top 10 Markets by Size</h2>
                <Card>
                    <div className="w-full h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip cursor={{fill: 'rgba(210, 255, 40, 0.2)'}} />
                                <Legend />
                                <Bar dataKey="Market Size (USD B)" fill="#334155" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </section>


            {/* Countries Section */}
            <section id="countries">
                 <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold">Country Data</h2>
                    <div className="flex space-x-2">
                        <button onClick={() => handleSort('name')} className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                            Sort by Name {sortKey === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                        </button>
                        <button onClick={() => handleSort('perCapitaSpending')} className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                             Sort by Spending {sortKey === 'perCapitaSpending' && (sortOrder === 'asc' ? '▲' : '▼')}
                        </button>
                    </div>
                 </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAndSortedData.map(country => (
                        <div key={country.name} className="transform transition-transform hover:scale-105" onClick={() => setSelectedCountry(country)}>
                          <Card className="h-full cursor-pointer">
                            <div className="flex items-center space-x-4 mb-4">
                               <span className="text-3xl">{country.flag}</span>
                               <h3 className="text-xl font-bold">{country.name}</h3>
                            </div>
                            <p className="text-gray-600 text-sm mb-4 h-10">{country.keyInsight}</p>
                             <div className="text-xs text-gray-500 mb-4">
                                <strong>Popular Types:</strong> {country.popularInsurances.join(', ')}
                            </div>
                            <div className="mt-auto pt-4 border-t">
                                <p className="font-bold text-lg text-gray-800">${country.perCapitaSpending.toLocaleString()}</p>
                                <p className="text-xs text-gray-500">Per Capita Spending</p>
                            </div>
                        </Card>
                        </div>
                    ))}
                </div>
                 {filteredAndSortedData.length === 0 && (
                    <div className="text-center py-16">
                        <h3 className="text-xl font-semibold">No countries match your filters.</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your filter criteria or click "Reset Filters".</p>
                    </div>
                )}
            </section>
        </div>

        {selectedCountry && (
            <CountryDetailModal country={selectedCountry} onClose={() => setSelectedCountry(null)} />
        )}
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

export default Insights;
