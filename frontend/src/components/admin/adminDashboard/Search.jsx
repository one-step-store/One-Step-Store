import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({  }) => {
  return (
    <div className="relative w-full md:w-64">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
        // onChange={(e) => onSearch(e.target.value)}
      />

      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default SearchBar;
