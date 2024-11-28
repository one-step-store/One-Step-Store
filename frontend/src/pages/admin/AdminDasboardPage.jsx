import React from "react";
import AdminDashboardCards from "../../components/admin/adminDashboard/AdminDashboardCards";
import AdminRecentOrders from "../../components/admin/adminDashboard/AdminRecentOrders";
const AdminDashboard = () => {
  const dashboardCards = [
    { title: "Total Orders", value: "₹126,500", change: 34.7, comparisonText: "Compared to Oct 2023" },
    { title: "Active Orders", value: "₹126,500", change: 34.7, comparisonText: "Compared to Oct 2023" },
    { title: "Completed Orders", value: "₹126,500", change: 34.7, comparisonText: "Compared to Oct 2023" },
    { title: "Return Orders", value: "₹126,500", change: 34.7, comparisonText: "Compared to Oct 2023" },
  ];

  const recentOrders = [
    { product: "Lorem Ipsum", id: "#25426", date: "Nov 8th, 2023", customerName: "Kavin", status: "Delivered", amount: "₹200.00" },
    { product: "Lorem Ipsum", id: "#25425", date: "Nov 7th, 2023", customerName: "Komal", status: "Canceled", amount: "₹200.00" },
    { product: "Lorem Ipsum", id: "#25424", date: "Nov 6th, 2023", customerName: "Nikhil", status: "Delivered", amount: "₹200.00" },
    { product: "Lorem Ipsum", id: "#25423", date: "Nov 5th, 2023", customerName: "Shivam", status: "Canceled", amount: "₹200.00" },
    { product: "Lorem Ipsum", id: "#25422", date: "Nov 4th, 2023", customerName: "Shadab", status: "Delivered", amount: "₹200.00" },
    { product: "Lorem Ipsum", id: "#25421", date: "Nov 2nd, 2023", customerName: "Yogesh", status: "Delivered", amount: "₹200.00" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-600">Home &gt; Dashboard</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {dashboardCards.map((card, index) => (
          <AdminDashboardCards
            key={index}
            title={card.title}
            value={card.value}
            change={card.change}
            comparisonText={card.comparisonText}
          />
        ))}
      </div>

      <AdminRecentOrders orders={recentOrders} />
    </div>
  );
};

export default AdminDashboard
