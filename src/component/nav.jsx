import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Sticky navbar logic on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${sticky ? 'bg-white shadow-lg sticky top-0' : 'bg-white shadow-lg fixed top-0'} w-full z-10 transition-all duration-300`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo/Brand on the left */}
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-blue-600">
            <img src="/logo.png" alt="Brand Logo" className="h-10" />
          </a>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links (visible on larger screens) */}
        <ul className={`hidden lg:flex space-x-8`}>
          <li>
            <a 
              href="/#about-us" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-300 ease-in-out"
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="/#our-companies" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-300 ease-in-out"
            >
              Our Companies
            </a>
          </li>
          <li>
            <a 
              href="/#services" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-300 ease-in-out"
            >
              Services
            </a>
          </li>
          <li>
            <Link 
              to="/contact-us" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-300 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (hidden on large screens, visible on mobile) */}
      <div className={`lg:hidden w-full ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="px-6 py-2 space-y-4">
          <li>
            <a 
              href="/#about-us" 
              className="block text-gray-700 hover:text-primary font-medium transition-colors duration-300 ease-in-out"
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="/#our-companies" 
              className="block text-gray-700 hover:text-primary font-medium transition-colors duration-300 ease-in-out"
            >
              Our Companies
            </a>
          </li>
          <li>
            <a 
              href="/#services" 
              className="block text-gray-700 hover:text-primary font-medium transition-colors duration-300 ease-in-out"
            >
              Services
            </a>
          </li>
          <li>
            <Link 
              to="/contact-us" 
              className="block text-gray-700 hover:text-primary font-medium transition-colors duration-300 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
