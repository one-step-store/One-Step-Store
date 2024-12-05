import React from 'react';

const AddUserForm = () => {
  return (
    <div className="w-full">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Type name here"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Phone Number</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter phone number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter email address"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Username</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter username"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Role</label>
        <select
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          defaultValue=""
        >
          <option value="" disabled>
            Select role
          </option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
    </div>
  );
};

export default AddUserForm;
