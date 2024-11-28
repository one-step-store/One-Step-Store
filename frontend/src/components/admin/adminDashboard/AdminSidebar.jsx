import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiDropdownList } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="bg-white w-64 h-full flex flex-col items-center  ">
      {/* Logo */}
      <div className="flex items-center justify-center mt-5 ">
        <img
          src="https://via.placeholder.com/50"
          alt="Logo"
          className="w-16 h-16"
        />
      </div>

      {/* Navigation Links */}
      <nav className="space-y-4 w-[212px] h-44 mt-11">
        <NavLink

          to="/dashboard"
          className="font-bold text-white hover:text-blue-500 w-full h-12 bg-black flex rounded-lg items-center gap-2 text-[14px]"
        >
          <FaUser className="ml-4"/>
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/all-products"
          className="w-full h-12 font-bold  text-black hover:text-blue-500 flex items-center gap-2 text-[14px]"
        >
          <FaUser className="ml-4"/>
          All Products
        </NavLink>

        <NavLink
          to="/admin/orders"
          className="w-full h-12 font-bold  text-black hover:text-blue-500 flex items-center gap-2 text-[14px]"
        >
          <FaUser className="ml-4"/>
          Orders
        </NavLink>

        <button
          onClick={() => setShowCategories(!showCategories)}
          className=" text-black font-bold hover:text-blue-500 flex w-full justify-between items-center text-[20px]"
        >
          Categories
          <RiDropdownList  />
        </button>
        {showCategories && (
          <ul className="ml-4 space-y-2">
            <li>
              <NavLink
                to="/admin/categories/handphone"
                className="block text-gray-700 hover:text-blue-500"
              >
                Handphone
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/categories/laptop"
                className="block text-gray-700 hover:text-blue-500"
              >
                Laptop
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default AdminSidebar;
