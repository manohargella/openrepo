import React, { useEffect } from 'react';
import feather from 'feather-icons';

const Navbar = () => {
  useEffect(() => {
    feather.replace();
  }, []);

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
        <button id="mobile-menu-button" className="md:hidden p-2 bg-gray-700 rounded">
          <i id="mobile-menu-icon" data-feather="menu" className="text-gray-100"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
