
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import type { Page } from '../types';

interface HeaderProps {
  setCurrentPage: (page: Page) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isHomePage: boolean;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage, searchQuery, setSearchQuery, isHomePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setCurrentPage('home');
      setSearchQuery(''); // Clear search to show all sections before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      setCurrentPage(href as Page);
    }
  };

  const handleLogoClick = () => {
    setCurrentPage('home');
    setSearchQuery(''); // Clear search on logo click
  };

  const SearchBar = () => (
     <div className="relative">
      <input
        type="search"
        placeholder="Search sections..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full md:w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2FF28] focus:border-transparent transition"
        aria-label="Search sections"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
  
  const NavItem = ({ link }: { link: typeof NAV_LINKS[0] }) => {
    const commonClasses = "text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition cursor-pointer";
    if(link.href.startsWith('#')) {
      return (
        <a
          href={link.href}
          onClick={(e) => handleNavLinkClick(e, link.href)}
          className={commonClasses}
        >
          {link.name}
        </a>
      )
    }
    return (
       <button onClick={(e) => handleNavLinkClick(e, link.href)} className={commonClasses}>
          {link.name}
       </button>
    )
  }
  
   const MobileNavItem = ({ link }: { link: typeof NAV_LINKS[0] }) => {
    const commonClasses = "text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition cursor-pointer text-left w-full";
    if(link.href.startsWith('#')) {
      return (
        <a
          href={link.href}
          onClick={(e) => {
            handleNavLinkClick(e, link.href);
            setIsMenuOpen(false);
          }}
          className={commonClasses}
        >
          {link.name}
        </a>
      )
    }
    return (
       <button onClick={(e) => {
         handleNavLinkClick(e, link.href);
         setIsMenuOpen(false);
       }} className={commonClasses}>
          {link.name}
       </button>
    )
  }


  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button onClick={handleLogoClick} className="text-2xl font-bold text-gray-900">AI Insurance Hub</button>
          </div>
          <div className="hidden md:flex items-center">
            <nav className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <NavItem key={link.name} link={link} />
              ))}
            </nav>
            {isHomePage && (
              <div className="ml-6">
                <SearchBar />
              </div>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D2FF28]"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {isHomePage && (
              <div className="px-2 pb-2">
                <SearchBar />
              </div>
            )}
            {NAV_LINKS.map((link) => (
               <MobileNavItem key={link.name} link={link} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;