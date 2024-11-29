import React, { useState } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import NotificationDropdown from './NotificationDropdown';

function AdminNavbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // dummy notifikasi
  const notifications = [
    { title: 'New order received', time: '2 minutes ago' },
    { title: 'Product out of stock', time: '10 minutes ago' },
    { title: 'New user registered', time: '1 hour ago' }
  ];

  return (
    <div className="flex justify-between items-center bg-white px-[60px] py-8 h-24 ml-1">
      {/* Search */}
      <div className="relative w-full md:w-64">
        <input
          type="text"
          placeholder="Search for orders, products..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Notifikasi dan Profil */}
      <div className="flex items-center gap-10 relative">
        {/* Notifikasi */}
        <div className="relative">
          <button onClick={() => setShowNotifications(!showNotifications)} className="focus:outline-none">
            <FaBell className="text-gray-600 text-xl cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {notifications.length}
            </span>
          </button>
          {showNotifications && <NotificationDropdown notifications={notifications} />}
        </div>

        {/* Profil Admin */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 bg-gray-200 py-2 px-4 rounded-lg focus:outline-none"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <span className="text-gray-800 font-medium">Admin</span>
            <FaUserCircle className="text-gray-600 text-2xl" />
          </button>

          {/* Dropdown Menu */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50">
              <ul>
                <li>
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                    Change Password
                  </button>
                </li>
                <li>
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">Log Out</button>
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
