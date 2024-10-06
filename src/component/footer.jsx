import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls down 300px
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <footer className="bg-[#012055] text-white py-4">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Contact Us Section */}
        <section id="contact" className="relative py-10 text-white">
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch With Us</h2>
            <p className="mb-8 max-w-lg mx-auto text-lg">
              We'd love to hear from you. Whether you have questions about our services, or just want to connect, feel free to reach out.
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-[#ef780d] p-4 rounded-full text-black font-semibold hover:bg-[#fa770e] transition"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> Contact Us
            </a>
          </div>
        </section>
        <div className="flex flex-wrap justify-center">
          {/* Company Information */}
          <div className="w-full sm:w-1/2 p-4 md:w-1/3 mb-6">
            <h5 className="text-lg font-semibold mb-4">Company Name</h5>
            <p className='text-white'>
              Your company description goes here. It could be a brief message about what your company does or its vision.
            </p>
            <p className="text-white mt-4">Address: 123 Main St, Anytown, USA</p>
            <p className="text-white">Phone: (123) 456-7890</p>
            <p className="text-white">Email: info@company.com</p>
          </div>

          {/* Useful Links */}
          <div className="w-full sm:w-1/2 p-4 md:w-1/3 mb-6 text-center">
            <h5 className="text-lg font-semibold mb-4">Useful Links</h5>
            <ul>
              <li className="mb-2">
                <a href="/#about-us" className="text-white hover:text-gray transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/#services" className="text-white hover:text-gray transition-colors duration-300">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact-us"
                  className="block text-gray-700 hover:text-primary font-medium transition-colors duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <a href="/#privacy" className="text-white hover:text-gray transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full p-4 md:w-1/3">
            <h5 className="text-lg font-semibold mb-4 text-center">Follow Us</h5>
            <div className="flex justify-center space-x-4">
              <a href="https://www.facebook.com" className="text-white hover:text-gray transition-colors duration-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82v-9.294H9.692v-3.62h3.128V8.413c0-3.1 2.313-5.575 5.585-5.575h3.196v3.91h-2.323c-1.82 0-2.177.867-2.177 2.136v2.796h4.354l-.568 3.62h-3.785V24h7.415C23.407 24 24 23.408 24 22.676V1.325C24 .593 23.407 0 22.675 0z"
                  />
                </svg>
              </a>
              <a href="https://www.twitter.com" className="text-white hover:text-gray transition-colors duration-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.196 4.92 4.92 0 00-8.384 4.482A13.957 13.957 0 011.671 3.149a4.92 4.92 0 001.523 6.573A4.902 4.902 0 01.96 9.027v.063a4.923 4.923 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.923 4.923 0 004.6 3.419 9.868 9.868 0 01-6.102 2.104c-.397 0-.79-.023-1.174-.068A13.945 13.945 0 007.548 21c9.058 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.014-.637A10.012 10.012 0 0024 4.557z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className='text-center flex flex-col'>
          <div className=''>&#169;All copyrights reserved</div>
          <div className=''>Website By Axor Technology</div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
