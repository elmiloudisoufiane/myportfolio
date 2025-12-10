import React, { useState } from 'react';
import logo from '../imgs/logo.ico';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Services', href: '#Services' },
    { name: 'Contact', href: '#Contact' }
  ];

  return (
    <nav className="text-white shadow-lg animate-fade-down animate-once fixed animate-ease-out w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl"><img src={logo}/></h1>
          </div>

          {/* Desktop Navigation links*/}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>  

          {/* Desktop Navigation button*/}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
                <a className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-2.5 rounded-full text-l font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg' href="https://github.com/elmiloudisoufiane">VISIT GITHUB</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-800 focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-fade-down animate-once animate-ease-out">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

              <a className='w-full text-left bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200Z bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-2.5 rounded-full text-l font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg' href="https://github.com/elmiloudisoufiane">VISIT GITHUB</a>
            </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;