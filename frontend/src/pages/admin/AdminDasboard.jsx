import React from "react";
import AdminRecentOrders from "../../components/admin/dashboard/AdminRecentOrders";

const AdminDashboard = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-600">Home &gt; Dashboard</p>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
        <AdminRecentOrders />
      </div>
    </div>
  );
};

export default AdminDashboard;
