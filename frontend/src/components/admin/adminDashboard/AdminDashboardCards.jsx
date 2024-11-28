import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiMoreVertical } from 'react-icons/fi'; 

const AdminDashboardCards = ({ title, value, change, comparisonText }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-[140px] w-full border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className=" text-sm font-bold ">{title}</p>
        <FiMoreVertical className="text-gray-400 cursor-pointer" />
      </div>

      {/* Konten */}
      <div className="flex items-center mt-2">
        <div className="bg-black p-3 rounded-md text-white">
          <HiOutlineShoppingBag size={24} />
        </div>

        {/* informasi */}
        <div className="ml-4">
          <p className="text-[16px] font-bold text-gray-900">{value}</p>
          <p className="text-xs text-gray-500 mt-1">{comparisonText}</p>
        </div>
      </div>

      {/* % */}
      <div className="flex items-center justify-end mt-3">
        <span className={`text-sm font-medium flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '▲' : '▼'} {Math.abs(change)}%
        </span>
      </div>
    </div>
  );
};

export default AdminDashboardCards
