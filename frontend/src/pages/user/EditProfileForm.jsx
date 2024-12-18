import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
const EditProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [savedProfile, setSavedProfile] = useState(null); 

  const [isEditing, setIsEditing] = useState(false); 

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Save the profile to savedProfile state
  const handleSaveProfile = (e) => {
    e.preventDefault();
    setSavedProfile(formData);
    setFormData({ firstName: "", lastName: "", email: "", phone: "" }); 
    setIsEditing(false); 
  };

  // Start editing the profile
  const handleEditProfile = () => {
    setIsEditing(true);
    setFormData(savedProfile); 
  };

  // Add a new profile
  const handleAddProfile = () => {
    setIsEditing(true);
    setFormData({ firstName: "", lastName: "", email: "", phone: "" }); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow py-10 px-4 lg:px-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
            {/* Profile Display */}
            <div className="w-full md:w-1/3 bg-white shadow-xl rounded-lg p-6 mb-6 md:mb-0">
              {savedProfile ? (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Profile</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-semibold">First Name:</span> {savedProfile.firstName}</p>
                    <p><span className="font-semibold">Last Name:</span> {savedProfile.lastName}</p>
                    <p><span className="font-semibold">Email:</span> {savedProfile.email}</p>
                    <p><span className="font-semibold">Phone:</span> {savedProfile.phone}</p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={handleEditProfile}
                      className="bg-black text-white px-6 py-2 rounded-md"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">No profile saved. Please add your profile.</p>
              )}
            </div>

            {/* Profile Form */}
            <div className="w-full md:w-2/3 bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-6">{isEditing ? 'Edit Profile' : 'Add Your Profile'}</h3>
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Usename</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-md"
                  >
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditProfileForm;
