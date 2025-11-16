
import React, { useState } from 'react';
import Header from './components/Header';
import QuoteGenerator from './components/QuoteGenerator';
import FaqChatbot from './components/FaqChatbot';
import SavingsCalculator from './components/SavingsCalculator';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import About from './components/pages/About';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';
import Contact from './components/pages/Contact';
import Insights from './components/pages/Insights';
import type { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    { id: 'quote', title: 'Get Your Instant Insurance Quote', keywords: 'quote generator instant', component: <QuoteGenerator /> },
    { id: 'faq', title: 'Ask Our AI Insurance Chatbot', keywords: 'faq chatbot ai question', component: <FaqChatbot /> },
    { id: 'calculator', title: 'Calculate Your Insurance Savings', keywords: 'savings calculator calculate', component: <SavingsCalculator /> },
    { id: 'quiz', title: 'Test Your Insurance Knowledge!', keywords: 'quiz trivia daily game', component: <Quiz /> },
  ];

  const handleSetCurrentPage = (page: Page) => {
    setCurrentPage(page);
    if (page !== 'home') {
      setSearchQuery(''); // Reset search when leaving homepage
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.keywords.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'contact':
        return <Contact />;
      case 'insights':
        return <Insights />;
      case 'home':
      default:
        return (
          <main>
            {filteredSections.length > 0 ? (
               filteredSections.map(section => (
                 <React.Fragment key={section.id}>
                   {section.component}
                 </React.Fragment>
               ))
            ) : (
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                  <h2 className="text-2xl font-bold text-gray-700">No Results Found</h2>
                  <p className="text-gray-500 mt-2">Try adjusting your search for "{searchQuery}".</p>
              </div>
            )}
          </main>
        );
    }
  };

  return (
    <div className="bg-white font-sans text-gray-800">
      <Header 
        setCurrentPage={handleSetCurrentPage} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isHomePage={currentPage === 'home'}
      />
      {renderPage()}
      <Footer setCurrentPage={handleSetCurrentPage} />
    </div>
  );
};

export default App;