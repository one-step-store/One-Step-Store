import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

function AdminNavbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  

  return (
    <div className="flex justify-between items-center bg-black px-4 py-3 shadow-md text-white">
    {/* Logo */}
    <div>
      <img src="/img/logo.png" alt="Logo" className="h-10 w-10" />
    </div>
  
    {/* Profile */}
    <div className="flex items-center gap-4">
      <div className="relative">
        <button
          className="flex items-center space-x-2 bg-white text-black py-2 px-4 rounded-lg shadow-md focus:outline-none"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        >
          <span className="font-medium">Admin</span>
          <FaUserCircle className="text-gray-600 text-2xl" />
        </button>
  
        {/* Dropdown */}
        {showProfileMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50">
            <ul>
              <li>
                <button className="block w-full px-4 py-2 text-left text-black hover:bg-gray-100">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
  
  );
}

export default AdminNavbar;
