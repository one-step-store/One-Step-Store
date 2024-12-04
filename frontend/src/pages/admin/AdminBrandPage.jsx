import React from "react";
import { Link } from "react-router-dom";
import BrandCard from "../../components/admin/all-brand/BrandCard";
import Pagination from "../../components/admin/all-brand/Pagination";

const AdminBrandPage = () => {
  const brands = [
    { id: 1, name: "SAMSUNG", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Apple", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Xiaomi", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Huawei", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex  sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold">All Brand</h1>
        <Link
          to={"/dashboard/add-brand"}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          + Add New Brand
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default AdminBrandPage;
