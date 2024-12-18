import React from 'react';
import AdminRecentOrders from '../../components/admin/dashboard/AdminRecentOrders';
import { useState, useEffect } from 'react';
import { apiRequest, HTTP_METHODS } from "../../utils/utils";
import { saveUserSession } from "../../utils/utils";


const AdminDashboard = () => {
  // test aja,kalo mau hapus silakan
  const [users, setUsers] = useState(0);
  const [orders, setOrders] = useState(0);
  const [brands, setBrands] = useState(0);

    useEffect(() => {
      const fetchUserByUsername = async (username) => {
        try {
          const response = await apiRequest(
            HTTP_METHODS.POST, 
            `/api/users/username/${username}`
          );
          saveUserSession(response);

          console.log(response)
          if (response.data.role == 'admin') {
            window.location.href = "/dashboard";
          }else{
            window.location.href = "/home";
          }
          
        } catch (err) {
          console.error("Error fetching user:", err.response?.data?.data?.message || "Something went wrong.");
        }
      };
    
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
      const username = params.get("username");
    
      if (token && username) {
        localStorage.setItem("_token", token);
        fetchUserByUsername(username); 
      }
    }, []);  

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

      

      {/* Recent Orders */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-black mb-4">Recent Orders</h2>
        <AdminRecentOrders />
      </div>
    </div>
  );
};

export default AdminDashboard;
