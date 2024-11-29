import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs"; 

const ProductCard = ({ product }) => {
  return (
    <div
      className="bg-white shadow-md rounded-[16px] p-[16px] flex flex-col gap-4"
      style={{ width: "270px", height: "fit-content" }} 
    >
      {/* barang */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-[64px] h-[64px] object-cover rounded-md"
          />
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category || "General"}</p>
          </div>
        </div>
        <BsThreeDotsVertical className="text-gray-400 cursor-pointer" />
      </div>

      {/* Harga */}
      <p className="text-xl font-bold">{product.price}</p>

      {/* Deskripsi */}
      <div className="border rounded-md p-3 bg-gray-50">
        <h4 className="text-sm font-semibold mb-1">Summary</h4>
        <p className="text-sm text-gray-500">
          {product.description || "No description available."}
        </p>
      </div>

      {/* Statistik */}
      <div className="border rounded-md p-3 bg-gray-50">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-500">Sales</p>
          <p className="text-green-500 font-semibold">↑ {product.sales}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Remaining Products</p>
          <div className="flex items-center space-x-2">
            <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-400 rounded-full"
                style={{
                  width: `${(product.remaining / product.sales) * 100}%`,
                }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">{product.remaining}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
