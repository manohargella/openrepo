import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const resources = [
    {
      img: 'src/assets/grab.png',
      title: 'Free resources to learn C++',
      description: 'Language, DSA, Game Dev etc.',
      link: 'https://stupendous-hubcap-0d8.notion.site/C-Free-Learning-Resources-79f333e89cd64eb1bbcfc464ba38ad34?pvs=4'
    },
    {
      img: 'src/assets/swift.png',
      title: 'Free resources to learn Swift',
      description: 'IOS Development',
      link: 'under.html'
    },
    {
      img: 'src/assets/5.png',
      title: 'Free resources to learn C',
      description: 'Language basics and DSA.',
      link: 'under.html'
    },
    {
      img: 'src/assets/4.png',
      title: 'Free resources to learn C#',
      description: 'Servers and Game development.',
      link: 'under.html'
    },
    {
      img: 'src/assets/2.png',
      title: 'Free resources to learn Python',
      description: 'AI, ML, DL, Web Dev .. etc',
      link: 'under.html'
    },
    {
      img: 'src/assets/3.png',
      title: 'Free resources to learn JavaScript',
      description: 'Language, front-end development',
      link: 'under.html'
    },
    // Add more resources...
  ];

  // Calculate total pages
  const totalPages = Math.ceil(resources.length / itemsPerPage);

  // Determine the resources to display on the current page
  const currentResources = resources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Navbar />
      <MainContent resources={currentResources} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default App;
