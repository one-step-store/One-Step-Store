import React from "react";

const NotificationDropdown = ({ notifications }) => {
  return (
    <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Notifications</h2>
      </div>
      <ul className="max-h-60 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <li
              key={index}
              className="flex items-start p-4 hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <p className="text-sm font-medium">{notification.title}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            </li>
          ))
        ) : (
          <li className="p-4 text-center text-gray-500">No new notifications</li>
        )}
      </ul>
      <div className="p-4 border-t border-gray-300 text-center">
        <button className="text-sm text-blue-600 hover:underline">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
