import React from "react";
import { NavLink } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-4">
      {/* Product Image */}
      <div className="h-40 flex items-center justify-center bg-gray-100 rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-xl font-semibold">{product.price}</p>
      <div className="text-gray-600">
        <p>Stock: {product.remaining}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <NavLink
          to="/dashboard/product-detail"
          className="flex items-center gap-2 text-blue-500 hover:underline"
        >
          <FaEdit className="text-blue-500" />
          Edit
        </NavLink>
        <button className="flex items-center gap-2 text-red-500 hover:underline">
          <FaTrashAlt className="text-red-500" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
