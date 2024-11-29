import React from "react";
import ProductCard from "../../components/admin/allProducts/ProductCard";
import Pagination from "../../components/admin/allProducts/Pagination";
const AdminAllProductsPage = () => {
  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    name: "Battery",
    category: "Electronics",
    description: "Lorem ipsum is placeholder text commonly used in the graphic.",
    price: "₹110.40",
    sales: 1269,
    remaining: Math.floor(Math.random() * 500) + 1,
    image: "https://via.placeholder.com/150",
  }));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Products</h1>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          + Add New Product
        </button>
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
