import React from 'react';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center my-8">
      <button
        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
        className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        ←
      </button>
      {pageNumbers.map((number) => (
        <a
          key={number}
          href="#"
          className={`mr-2 bg-blue-500 text-white px-4 py-2 rounded ${
            currentPage === number ? 'bg-gray-800' : ''
          }`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </a>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
        className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
