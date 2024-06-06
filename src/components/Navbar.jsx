import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';

const Navbar = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  // State to track whether the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-100">OpenRepo</div>
        <div className="hidden md:flex space-x-4">
          <a href="https://openrepo.in/" className="text-gray-300 hover:text-blue-500">Home</a>
          <a href="about.html" className="text-gray-300 hover:text-blue-500">About</a>
          <a href="contribute.html" className="text-gray-300 hover:text-blue-500">Contribute</a>
          <a href="contact.html" className="text-gray-300 hover:text-blue-500">Contact</a>
        </div>
        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-button"
          className="md:hidden p-2 bg-gray-700 rounded"
          onClick={toggleMobileMenu} // Add click event handler
        >
          <i id="mobile-menu-icon" data-feather="menu" className="text-gray-100"></i>
        </button>
      </div>
      {/* Mobile Sidebar */}
      <div className={`bg-gray-900 bg-opacity-75 fixed inset-0 z-20 flex ${isMobileMenuOpen ? 'visible' : 'hidden'}`}>
        <div className="bg-gray-800 w-64 h-full flex flex-col p-4">
          <button
            id="close-mobile-menu"
            className="self-end mb-4 p-2 bg-gray-700 rounded"
            onClick={toggleMobileMenu} // Close mobile menu on button click
          >
            <i data-feather="x" className="text-gray-100"></i>
          </button>
          <a href="https://openrepo.in/" className="nav-btn mb-2">Home</a>
          <a href="about.html" className="nav-btn mb-2">About</a>
          <a href="contribute.html" className="nav-btn mb-2">Contribute</a>
          <a href="contact.html" className="nav-btn mb-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
