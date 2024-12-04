import React from "react";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function AdminRecentOrders() {
  return (
    <div className="bg-white shadow-md rounded-[16px] overflow-hidden p-6">
      {/* Header Section */}
      <div className="border-b-2 flex justify-between items-center pb-4 mb-4">
        <h1 className="font-semibold text-lg">Recent Orders</h1>
        <span className="text-gray-500">&#x1F37F;</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 w-[40px]">Details</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Customer Name</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t even:bg-gray-50">
              <td className="px-4 py-3 text-center">
                <NavLink
                  to="/dashboard/order-details"
                  className="flex items-center justify-center text-blue-500 group relative"
                >
                  <FaEye className="text-blue-500 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
                  <span className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                    View Details
                  </span>
                </NavLink>
              </td>
              <td className="px-4 py-3">Lorem Ipsum</td>
              <td className="px-4 py-3">#25426</td>
              <td className="px-4 py-3">Nov 8th, 2023</td>
              <td className="px-4 py-3">Kavin</td>
              <td className="px-4 py-3">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  Delivered
                </span>
              </td>
              <td className="px-4 py-3">₹200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminRecentOrders;
