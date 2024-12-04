import React from "react";

const AddNewProductForm = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-100">
      {/* Subheader */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">Add New Product</h1>
        <p className="text-sm text-gray-600">Home &gt; All Products &gt; Add New Product</p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Product Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Type name here"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Type description here"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <option value="" disabled selected>
                Pilih kategori
              </option>
              <option value="kategori1">Kategori 1</option>
              <option value="kategori2">Kategori 2</option>
              <option value="kategori3">Kategori 3</option>
              <option value="kategori4">Kategori 4</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Brand</label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <option value="" disabled selected>
                Pilih brand
              </option>
              <option value="brand1">Brand 1</option>
              <option value="brand2">Brand 2</option>
              <option value="brand3">Brand 3</option>
              <option value="brand4">Brand 4</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Stock Quantity</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter stock quantity"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter product price"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Main Image</label>
            <div className="border border-gray-300 rounded-lg h-40 flex items-center justify-center bg-gray-100">
              <span className="text-gray-400">Upload or Select Image</span>
            </div>
          </div>
        </div>
      </div>

      {/*  Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">
          Add Product
        </button>
        <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300 transition">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddNewProductForm;
