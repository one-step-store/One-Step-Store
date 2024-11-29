import React from "react";
import { BsChevronDown } from "react-icons/bs";

const AdminChangeStatusDropdown = () => {
  return (
    <div className="relative">
      <button className="flex items-center px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200">
        Change Status <BsChevronDown className="ml-2" />
      </button>
      {/* Dropdown menu */}
      <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md hidden">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delivered</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Canceled</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pending</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminChangeStatusDropdown;
