// src/components/Contribute.jsx
import React from 'react';

const Contribute = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 shadow-md fixed w-full z-10 top-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/src/assets/nlogo.png" alt="Logo" className="w-12" />
            <a className="text-xl font-bold text-gray-100 ml-2" href="https://openrepo.in/">OpenRepo</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="https://openrepo.in/" className="text-gray-300 hover:text-blue-500">Home</a>
            <a href="/about" className="text-gray-300 hover:text-blue-500">About</a>
            <a href="/contribute" className="text-gray-300 hover:text-blue-500">Contribute</a>
            <a href="/contact" className="text-gray-300 hover:text-blue-500">Contact</a>
          </div>
          <button id="mobile-menu-button" className="md:hidden p-2 bg-gray-700 rounded">
            <i id="mobile-menu-icon" className="text-gray-100">☰</i>
          </button>
        </div>
      </nav>
      
      <div className="container mx-auto mt-20 p-4">
        <h1 className="text-3xl font-bold mb-4">Contribute to OpenRepo</h1>
        <p className="mb-4">Your contributions help us to grow and maintain the OpenRepo platform. Here's how you can contribute:</p>

        <h2 className="text-2xl font-bold mb-2">Ways to Contribute</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Submit new repositories with valuable learning resources.</li>
          <li>Help us improve existing listings by providing feedback or additional information.</li>
          <li>Share OpenRepo with your network to help us reach more learners.</li>
        </ul>

        <div className="mt-5 text-center">
          <a href="https://openrepo.in/imanohar" className="bg-black text-white py-2 px-4 rounded-full font-bold uppercase tracking-wide hover:bg-gray-900">About the founder</a>
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-300 py-4 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="src/assets/nlogo.png" alt="Logo" className="w-16" />
          </div>
          <div className="text-center md:text-right">
            <p>Contact us: manoharcodes@gmail.com</p>
            <p>Social media: <a href="https://www.instagram.com/manohargella/" target="_blank" className="hover:text-blue-500">@manohargella</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/manohar-gella-2926bb24b/" target="_blank" className="hover:text-blue-500">@manohargella</a></p>
            <p><a href="/tandc" target="_blank" className="hover:text-blue-500">Terms and Conditions</a></p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} OpenRepo. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Contribute;
