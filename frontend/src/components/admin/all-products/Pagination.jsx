import React from "react";

function Pagination() {
  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">1</button>
      <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">2</button>
      <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">3</button>
      <span>...</span>
      <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Next</button>
    </div>
  );
}

export default Pagination;
