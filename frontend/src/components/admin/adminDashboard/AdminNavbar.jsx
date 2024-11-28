import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
function AdminNavbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="flex justify-between items-center bg-white px-[60px] py-8  h-24 ml-1">
      {/* Search */}
      <div className="flex-1 mr-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-64 border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        />
      </div>

      {/* Notifikasi dan Profil */}
      <div className="flex items-center gap-10">
        {/* Notifikasi */}
        <div className="relative">
          <FaBell className="text-gray-600 text-xl cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>

        {/* Profil Admin */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <FaUserCircle className="text-gray-600 text-2xl" />
          </button>

          {/* Dropdown Menu */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white  rounded-md overflow-hidden z-50">
              <ul>
                <li>
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                    Profile
                  </button>
                </li>
                <li>
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                    Settings
                  </button>
                </li>
                <li>
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                    Logout
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
