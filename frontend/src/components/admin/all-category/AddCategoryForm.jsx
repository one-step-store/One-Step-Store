import React, { useState } from "react";

const AddCategoryForm = () => {


  return (
    <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Add New Category</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category Name</label>
          <input
            type="text"
            placeholder="Enter category name"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
