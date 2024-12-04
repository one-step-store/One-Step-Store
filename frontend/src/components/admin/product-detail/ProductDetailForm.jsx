import React from "react";

const ProductDetailForm = ({ product }) => {
  return (
    <div className="p-4 sm:p-6 bg-gray-100">
      {/* Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Product Name</label>
            <input
              type="text"
              value={product.name}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Type name here"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Type description here"
              value={product.description}
              readOnly
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              type="text"
              value={product.category}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Type category here"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Brand Name</label>
            <input
              type="text"
              value={product.brand}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Type brand name here"
              readOnly
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Stock Quantity</label>
              <input
                type="number"
                value={product.stock}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter stock quantity"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="number"
                value={product.price}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter product price"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Main Image</label>
            <div className="border border-gray-300 rounded-lg h-40 flex items-center justify-center bg-gray-100">
              <img
                src={product.image}
                alt="Product"
                className="h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">
          Update Product
        </button>
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default ProductDetailForm;
