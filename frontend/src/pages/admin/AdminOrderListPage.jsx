import React from "react";
import AdminSubHeader from "../../components/admin/orderList/AdminSubHeader";
import AdminChangeStatusDropdown from "../../components/admin/orderList/AdminChangeStatusDropdown";
import AdminPaginationOrderList from "../../components/admin/orderList/AdminPaginationOrderList";
import AdminRecentPurchasesTable from "../../components/admin/orderList/AdminRecentPurchasesTable";
function AdminOrdersListPage() {
  const orders = [
    {
      product: "Lorem Ipsum",
      id: "#25426",
      date: "Nov 8th, 2023",
      customerName: "Kavin",
      status: "Delivered",
      amount: "₹200.00",
    },
    {
      product: "Lorem Ipsum",
      id: "#25425",
      date: "Nov 7th, 2023",
      customerName: "Komal",
      status: "Canceled",
      amount: "₹200.00",
    },
  ];

  return (
    <div className="p-6">
      {/* Sub Header */}
      <AdminSubHeader
        title="Orders List"
        breadcrumb="Home > Order List"
        actions={<AdminChangeStatusDropdown />}
      />

      {/* Recent Purchases Table */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Recent Purchases</h2>
        <AdminRecentPurchasesTable orders={orders} />
      </div>

      {/* Pagination */}
      <AdminPaginationOrderList />
    </div>
  );
};

export default AdminOrdersListPage;
