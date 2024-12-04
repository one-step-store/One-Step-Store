import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const UserTable = () => {
  const users = [
    { id: 1, username: 'John Doe', detailLink: '/dashboard/user-detail/1' },
    { id: 2, username: 'Jane Smith', detailLink: '/dashboard/user-detail/2' },
  ];

  return (
    <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg">
      {/* Header */}
      <div className="border-b-2 flex justify-between items-center pb-4 mb-4">
        <h1 className="font-semibold text-lg">All Users</h1>
        <span className="text-gray-500 text-xl">&#x1F465;</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3 text-center">Detail</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : ''} hover:bg-gray-100`}
              >
                <td className="px-4 py-3">{user.username}</td>
                <td className="px-4 py-3 text-center relative">
                  <Link
                    to={'/dashboard/user-detail'}
                    className="flex items-center justify-center group relative"
                  >
                    <FaEye className="text-blue-500 text-lg group-hover:opacity-0 transition-opacity duration-200" />
                    <span className="absolute inset-0 flex items-center justify-center text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      View Details
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
