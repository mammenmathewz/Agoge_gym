import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for dynamic routing
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="relative px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900 hover:text-yellow-400 transition-colors"
              >
                Home
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100" />
              </Link>
              <Link
                to="/services"
                className="relative px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900 hover:text-yellow-400 transition-colors"
              >
                Services
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100" />
              </Link>
              <Link
                to="/offers"
                className="relative px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900 hover:text-yellow-400 transition-colors"
              >
                Offers
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100" />
              </Link>
              <Link
                to="/store"
                className="relative px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900 hover:text-yellow-400 transition-colors"
              >
                Store
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100" />
              </Link>
              <Link
                to="/contact"
                className="relative px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900 hover:text-yellow-400 transition-colors"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100" />
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={toggleMenu} // Close the menu on link click
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-yellow-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-yellow-400 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/offers"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-yellow-400 transition-colors"
            >
              Offers
            </Link>
            <Link
              to="/store"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-yellow-400 transition-colors"
            >
              Store
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-yellow-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Optional: Bottom Gradient for styling */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-100 to-transparent"></div> */}
    </nav>
  );
};

export default Navbar;

