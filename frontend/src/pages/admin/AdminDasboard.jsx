import React from 'react';
import AdminRecentOrders from '../../components/admin/dashboard/AdminRecentOrders';
import { useState, useEffect } from 'react';
const AdminDashboard = () => {
  // test aja,kalo mau hapus silakan
  const [users, setUsers] = useState(0);
  const [orders, setOrders] = useState(0);
  const [brands, setBrands] = useState(0);

  useEffect(() => {
    const userInterval = setInterval(() => {
      setUsers((prev) => (prev < 140 ? prev + 1 : prev));
    }, 50);

    const ordersInterval = setInterval(() => {
      setOrders((prev) => (prev < 35 ? prev + 1 : prev));
    }, 100);

    const brandsInterval = setInterval(() => {
      setBrands((prev) => (prev < 5 ? prev + 1 : prev));
    }, 150);

    return () => {
      clearInterval(userInterval);
      clearInterval(ordersInterval);
      clearInterval(brandsInterval);
    };
  }, []);

  return (
    <div className="p-4 bg-white min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-black">Dashboard</h1>
        <p className="text-sm text-gray-500">Home &gt; Dashboard</p>
      </div>

      {/* test */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black text-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold">{users}</p>
        </div>
        <div className="bg-black text-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold">New Orders</h2>
          <p className="text-2xl font-bold">{orders}</p>
        </div>
        <div className="bg-black text-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold">Total brands</h2>
          <p className="text-2xl font-bold">{brands}</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-black mb-4">Recent Orders</h2>
        <AdminRecentOrders />
      </div>
    </div>
  );
};

export default AdminDashboard;
