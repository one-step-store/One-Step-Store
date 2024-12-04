import React from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 

const EditProfileForm = () => (
  <div className="flex flex-col min-h-screen">
    {/* Navbar */}
    <Navbar />

    {/* Konten Utama */}
    <main className="bg-gray-100 flex-grow py-10">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Edit Your Profile
          </h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm mb-2">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">Province</label>
              <input
                type="text"
                placeholder="Province"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">City</label>
              <input
                type="text"
                placeholder="City"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">Postal Code</label>
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Current Password
              </label>
              <input
                type="password"
                placeholder="Current Password"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">New Password</label>
              <input
                type="password"
                placeholder="New Password"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
          </form>
          <div className="flex justify-between mt-8">
            <button
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 shadow-md"
              onClick={() => window.history.back()} 
            >
              Cancel
            </button>
            <button
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 shadow-md"
              onClick={() => alert("Changes saved!")} 
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </main>

    {/* Footer */}
    <Footer />
  </div>
);

export default EditProfileForm;
