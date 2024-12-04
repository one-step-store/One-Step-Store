import React from 'react';
import { FaTachometerAlt, FaBox, FaTags, FaTrademark, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="flex justify-around items-center h-16 bg-gray-100 shadow-md">
      {/* Dashboard */}
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `flex flex-col items-center text-sm font-bold ${
            isActive ? 'text-blue-500' : 'text-gray-700'
          } hover:text-blue-500`
        }
      >
        <FaTachometerAlt />
        Dashboard
      </NavLink>

      {/* Products */}
      <NavLink
        to="/dashboard/all-products"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm font-bold ${
            isActive ? 'text-blue-500' : 'text-gray-700'
          } hover:text-blue-500`
        }
      >
        <FaBox />
        Products
      </NavLink>

      {/* Categories */}
      <NavLink
        to="/dashboard/all-categories"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm font-bold ${
            isActive ? 'text-blue-500' : 'text-gray-700'
          } hover:text-blue-500`
        }
      >
        <FaTags />
        Categories
      </NavLink>

      {/* Brands */}
      <NavLink
        to="/dashboard/all-brands"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm font-bold ${
            isActive ? 'text-blue-500' : 'text-gray-700'
          } hover:text-blue-500`
        }
      >
        <FaTrademark />
        Brands
      </NavLink>

      {/* Users */}
      <NavLink
        to="/dashboard/all-users"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm font-bold ${
            isActive ? 'text-blue-500' : 'text-gray-700'
          } hover:text-blue-500`
        }
      >
        <FaUsers />
        Users
      </NavLink>
    </aside>
  );
};

export default AdminSidebar;
