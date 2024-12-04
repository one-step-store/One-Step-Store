import React from "react";
import EditCategoryForm from "../../components/admin/all-category/EditCategoryForm";

const AdminEditCategoryPage = () => {
  const category = {
    id: 1,
    name: "Handphone",
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <EditCategoryForm category={category} />
    </div>
  );
};

export default AdminEditCategoryPage;
