import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/admin/all-products/ProductCard";
import Pagination from "../../components/admin/all-products/Pagination";
const AdminAllProductsPage = () => {
  // Static product data
  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    name: "Battery",
    category: "Electronics",
    price: "20k",
    remaining: Math.floor(Math.random() * 500) + 1,
    image: "https://via.placeholder.com/150",
  }));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Products</h1>
        <Link
          to="/dashboard/add-product"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          + Add New Product
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default AdminAllProductsPage;
