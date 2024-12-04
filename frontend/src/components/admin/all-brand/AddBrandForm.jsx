import React from "react";

const AddBrandForm = () => {
  return (
    <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Add New Brand</h1>
      <form>
        {/* Brand Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Brand Name</label>
          <input
            type="text"
            placeholder="Enter brand name"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Brand Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Brand Image</label>
          <input
            type="file"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/*  Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add Brand
          </button>
          <button
            type="button"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBrandForm;
