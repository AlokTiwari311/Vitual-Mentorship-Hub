import React from "react";

function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center my-4">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`mx-1 px-3 py-2 border rounded-md 
          ${currentPage === i + 1
              ? "bg-[#2BB17A] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } 
          ${i === 0 ? "rounded-l-md" : ""} ${i === totalPages - 1 ? "rounded-r-md" : ""
            }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
