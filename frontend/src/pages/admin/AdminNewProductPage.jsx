import React from "react";
import AddProductForm from "../../components/admin/AdminNewProduct/AdminNewProduct";

const AddNewProductPage = () => {
  return (
    <div className="p-6">
      {/* Subheader */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Add New Product</h1>
        <p className="text-gray-600">Home &gt; All Products &gt; Add New Product</p>
      </div>

      {/* Form Add Product */}
      <AddProductForm />
    </div>
  );
};

export default AddNewProductPage;
