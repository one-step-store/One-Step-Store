import React from "react";

const AdminRecentPurchasesTable = ({ orders }) => {
  return (
    <table className="w-full text-left border-collapse">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-3">
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
            <td className="px-4 py-3">
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
  );
};

export default AdminRecentPurchasesTable;
