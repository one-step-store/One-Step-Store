import React from "react";
import AdminProductDetailForm from "../../components/admin/productsDetails/AdminPoductsDetailForm";
const AdminProductDetailPage = () => {
  return (
    <div className="p-6">
      {/* Subheader */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Product Details</h1>
        <p className="text-gray-600">Home &gt; All Products &gt; Product Details</p>
      </div>

      {/* Form Detail Produk */}
      <AdminProductDetailForm />
    </div>
  );
};

export default AdminProductDetailPage;
