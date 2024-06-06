// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-100">OpenRepo</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-blue-500">About</Link>
          <Link to="/contribute" className="text-gray-300 hover:text-blue-500">Contribute</Link>
          <Link to="/contact" className="text-gray-300 hover:text-blue-500">Contact</Link>
        </div>
        <button id="mobile-menu-button" className="md:hidden p-2 bg-gray-700 rounded" onClick={toggleMobileMenu}>
          <i id="mobile-menu-icon" data-feather="menu" className="text-gray-100"></i>
        </button>
      </div>
      <div className={`bg-gray-900 bg-opacity-75 fixed inset-0 z-20 flex ${isMobileMenuOpen ? 'visible' : 'hidden'}`}>
        <div className="bg-gray-800 w-64 h-full flex flex-col p-4">
          <button id="close-mobile-menu" className="self-end mb-4 p-2 bg-gray-700 rounded" onClick={toggleMobileMenu}>
            <i data-feather="x" className="text-gray-100"></i>
          </button>
          <Link to="/" className="nav-btn mb-2" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/about" className="nav-btn mb-2" onClick={toggleMobileMenu}>About</Link>
          <Link to="/contribute" className="nav-btn mb-2" onClick={toggleMobileMenu}>Contribute</Link>
          <Link to="/contact" className="nav-btn mb-2" onClick={toggleMobileMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
