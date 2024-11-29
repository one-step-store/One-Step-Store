import React from "react";

const AdminProductDetailForm = () => {
  return (
    <div className="flex flex-col gap-8 p-6">
      {/* Form  */}
      <div className="flex gap-8">
        {/* Bagian Kiri */}
        <div className="w-2/3">
          {/* Input Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Product Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter product description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter category"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Brand Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter brand name"
            />
          </div>
          <div className="flex gap-4">
            <div className="mb-4 flex-1">
              <label className="block text-sm font-medium mb-2">SKU</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter SKU"
              />
            </div>
            <div className="mb-4 flex-1">
              <label className="block text-sm font-medium mb-2">Stock Quantity</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter stock quantity"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mb-4 flex-1">
              <label className="block text-sm font-medium mb-2">Regular Price</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter regular price"
              />
            </div>
            <div className="mb-4 flex-1">
              <label className="block text-sm font-medium mb-2">Sale Price</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter sale price"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Tags</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Add tags"
            />
          </div>
        </div>

        {/* Bagian Kanan */}
        <div className="w-1/3">
          {/* Gambar  */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Main Image</label>
            <div className="border border-gray-300 rounded-lg h-40 flex items-center justify-center bg-gray-100">
              <span className="text-gray-400">Upload or Select Main Image</span>
            </div>
          </div>

          {/* galeri */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Product Gallery</label>
            <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
              <div className="text-center text-gray-400">Drop your images here, or browse</div>
            </div>
            <ul className="mt-4 space-y-2">
              {[...Array(4)].map((_, index) => (
                <li key={index} className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 rounded"></div>
                    <span className="text-gray-700">Product thumbnail.png</span>
                  </div>
                  <span className="text-green-500 font-bold">✔</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tombol */}
      <div className="flex justify-end gap-4">
        <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">Update</button>
        <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">Delete</button>
        <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300 transition">Cancel</button>
      </div>
    </div>
  );
};

export default AdminProductDetailForm;
