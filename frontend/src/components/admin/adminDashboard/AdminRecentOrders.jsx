import React from "react";
import { FaBurger } from "react-icons/fa6";

const AdminRecentOrders = ({ orders }) => {
  return (
    <div
      className="bg-white shadow-md rounded-[16px] overflow-hidden p-[24px]"
      style={{ height: "588px" }}
    >
      {/* Header */}
      <div className="border-b-2 flex justify-between items-center pb-4 mb-4">
        <h1 className="font-semibold text-lg">Recent Orders</h1>
        <FaBurger className="text-gray-500" />
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 w-[40px]">
              <input type="checkbox" className="form-checkbox" />
            </th>
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Order ID</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Customer Name</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t even:bg-gray-50">
              <td className="px-4 py-3 text-center">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="px-4 py-3">{order.product}</td>
              <td className="px-4 py-3">{order.id}</td>
              <td className="px-4 py-3">{order.date}</td>
              <td className="px-4 py-3">{order.customerName}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-4 py-3">{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRecentOrders
