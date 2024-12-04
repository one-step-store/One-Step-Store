import React, { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import NotificationDropdown from "./NotificationDropdown";

function AdminNavbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // test
  const notifications = [
    { title: "New order received", time: "2 minutes ago" },
    { title: "Product out of stock", time: "10 minutes ago" },
    { title: "New user registered", time: "1 hour ago" },
  ];

  return (
    <div className="flex justify-between items-center bg-white px-4 py-3 shadow-md">
      {/* Logo */}
      <div>
        <img src="https://via.placeholder.com/40" alt="Logo" className="h-10 w-10" />
      </div>

      {/* Notif and Profile */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="focus:outline-none"
          >
            <FaBell className="text-gray-600 text-xl cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {notifications.length}
            </span>
          </button>

          {/* Notifications  */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-50">
              <NotificationDropdown notifications={notifications} />
            </div>
          )}
        </div>

        {/* Admin  */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 bg-gray-200 py-2 px-4 rounded-lg focus:outline-none"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <span className="text-gray-800 font-medium">Admin</span>
            <FaUserCircle className="text-gray-600 text-2xl" />
          </button>

          {/*  Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50">
              <ul>
                <li>
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                    Change Password
                  </button>
                </li>
                <li>
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
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
