import React, { useState } from "react";

const ResetPassword = () => {
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== retypePassword) {
      setError("Passwords do not match!");
      return;
    }

    setError(""); 
    alert("Password successfully reset!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg w-11/12 md:w-3/5 lg:w-1/3 p-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Reset Your Password
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="resetToken" className="block text-sm font-medium text-gray-700">
              Reset Token
            </label>
            <input
              type="text"
              id="resetToken"
              value={resetToken}
              onChange={(e) => setResetToken(e.target.value)}
              placeholder="Enter reset token"
              required
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="retypePassword" className="block text-sm font-medium text-gray-700">
              Retype New Password
            </label>
            <input
              type="password"
              id="retypePassword"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              placeholder="Retype new password"
              required
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-bold"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
