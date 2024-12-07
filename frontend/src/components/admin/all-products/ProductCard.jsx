import React from "react";
import { NavLink } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-4 transform transition-transform hover:scale-105 hover:shadow-lg">
      {/* Product Image */}
      <div className="h-40 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <h3 className="text-lg font-bold text-gray-800 hover:text-blue-500 transition-colors">
        {product.name}
      </h3>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-xl font-semibold text-gray-800">{product.price}</p>
      <div className="text-gray-600">
        <p>Stock: {product.remaining}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        {/* Edit Button */}
        <NavLink
          to="/dashboard/product-detail/:id"
          className="flex items-center gap-2 text-blue-500 hover:underline hover:text-blue-700 transition-colors"
        >
          <FaEdit className="text-blue-500" />
          Edit
        </NavLink>
        {/* Delete Button */}
        <button className="flex items-center gap-2 text-red-500 hover:underline hover:text-red-700 transition-colors">
          <FaTrashAlt className="text-red-500" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
