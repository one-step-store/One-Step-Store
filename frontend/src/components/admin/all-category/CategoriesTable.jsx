import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const CategoriesTable = ({ categories }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
      {/* Header */}
      <div className="border-b-2 flex justify-between items-center pb-4 mb-4">
        <h1 className="font-semibold text-lg">All Categories</h1>
        <Link
          to="/dashboard/add-category"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          + Add New Categories
        </Link>
      </div>

      {/*  Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3">Categories</th>
              <th className="px-4 py-3 text-center">Edit</th>
              <th className="px-4 py-3 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-t even:bg-gray-50">
                <td className="px-4 py-3">{category.name}</td>

                <td className="px-4 py-3 text-center relative">
                  <Link
                    to={`/dashboard/edit-category/:id`}
                    className="flex items-center justify-center group relative w-full h-full"
                  >
                    <FaEdit className="text-blue-500 text-lg group-hover:opacity-0 transition-opacity duration-200" />
                    <span className="absolute inset-0 flex items-center justify-center text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Edit
                    </span>
                  </Link>
                </td>

                {/* Delete  */}
                <td className="px-4 py-3 text-center relative">
                  <button
                    className="flex items-center justify-center group relative w-full h-full"
                  >
                    <FaTrashAlt className="text-red-500 text-lg group-hover:opacity-0 transition-opacity duration-200" />
                    <span className="absolute inset-0 flex items-center justify-center text-red-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Delete
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesTable;
