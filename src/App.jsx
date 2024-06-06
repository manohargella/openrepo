// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import About from './components/About';
import Contribute from './components/Contribute';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
