import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";

const OrderDetailsHeader = ({ orderId, status, dateRange }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow rounded-lg mb-6">
      <div>
        <p className="text-lg font-bold">
          Orders ID: #{orderId}{" "}
          <span className={`px-2 py-1 rounded-full text-sm ${status === "Pending" ? "bg-yellow-200 text-yellow-800" : "bg-green-200 text-green-800"}`}>
            {status}
          </span>
        </p>
        <div className="flex items-center text-gray-600 mt-2">
          <FaRegCalendarAlt />
          <p className="ml-2">{dateRange}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <select className="border px-4 py-2 rounded-md text-gray-700">
          <option>Change Status</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
        <button className="border p-2 rounded-md">
          <FiPrinter />
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default OrderDetailsHeader;
