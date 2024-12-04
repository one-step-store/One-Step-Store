import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const BrandCard = ({ brand }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center gap-4">
      {/* Brand Image */}
      <div className="h-40 w-full flex items-center justify-center bg-gray-100 rounded-md">
        <img
          src={brand.image}
          alt={brand.name}
          className="h-full w-full object-cover rounded-md"
        />
      </div>

      {/* Brand Name */}
      <h3 className="text-lg font-bold text-center">{brand.name}</h3>

      {/* Actions */}
      <div className="flex justify-between w-full mt-4">
        {/* Edit Button */}
        <Link
          to={`/dashboard/edit-brand`}
          className="relative flex items-center justify-center group"
        >
          <FaEdit className="text-blue-500 text-lg group-hover:opacity-0 transition-opacity duration-200" />
          <span className="absolute inset-0 flex items-center justify-center text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Edit
          </span>
        </Link>

        {/* Delete Button */}
        <button className="relative flex items-center justify-center group">
          <FaTrashAlt className="text-red-500 text-lg group-hover:opacity-0 transition-opacity duration-200" />
          <span className="absolute inset-0 flex items-center justify-center text-red-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Delete
          </span>
        </button>
      </div>
    </div>
  );
};

export default BrandCard;
