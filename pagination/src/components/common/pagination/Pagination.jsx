import React from "react";

function Pagination({ postsPerPage, totalPosts, setCurrentPage, currentPage }) {
  const totalPages = Math.max(1, Math.ceil(totalPosts / postsPerPage)); 

  let pages = [];
  for (let index = 1; index <= totalPages; index++) { 
    pages.push(index);
  }

  return (
    <div className="flex w-[80%] h-[80px] bg-blue-500 justify-center gap-2 items-center p-4 rounded-lg shadow-md">
      {/* Previous Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="p-3 bg-gray-800 text-white rounded disabled:opacity-50"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          onClick={() => setCurrentPage(page)}
          key={page}
          className={`p-3 rounded text-white text-xl transition-all ${
            page === currentPage ? "bg-black" : "bg-gray-700 hover:bg-gray-900"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="p-3 bg-gray-800 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination