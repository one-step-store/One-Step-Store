import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
const MyAddress = () => {
  const [addressData, setAddressData] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [savedAddress, setSavedAddress] = useState(null); 
  const [isEditing, setIsEditing] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    setSavedAddress(addressData);
    // Save to localStorage
    localStorage.setItem("userAddress", JSON.stringify(addressData));
    setAddressData({ street: "", city: "", state: "", zipCode: "" });
    setIsEditing(false);
  };

  const handleEditAddress = () => {
    setIsEditing(true);
    setAddressData(savedAddress);
  };

  const handleAddAddress = () => {
    setIsEditing(true);
    setAddressData({ street: "", city: "", state: "", zipCode: "" });
  };

  const cities = ["Palembang", "Lampung", "Aceh"];
  const states = ["Sumatera Selatan", "DKI Jakarta", "Jawa Barat"];
  const zipCodes = ["12345", "67890", "54321"];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow py-10 px-4 lg:px-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="w-full md:w-1/3 bg-white shadow-xl rounded-lg p-6 mb-6 md:mb-0">
              {savedAddress ? (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Address</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-semibold">Street:</span> {savedAddress.street}</p>
                    <p><span className="font-semibold">City:</span> {savedAddress.city}</p>
                    <p><span className="font-semibold">State:</span> {savedAddress.state}</p>
                    <p><span className="font-semibold">Zip Code:</span> {savedAddress.zipCode}</p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={handleEditAddress}
                      className="bg-black text-white px-6 py-2 rounded-md"
                    >
                      Edit Address
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">No address saved. Please add your address.</p>
              )}
            </div>

            <div className="w-full md:w-2/3 bg-white shadow-xl rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-6">{isEditing ? 'Edit Address' : 'Add Your Address'}</h3>
              <form onSubmit={handleSaveAddress} className="space-y-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Street</label>
                  <input
                    type="text"
                    name="street"
                    value={addressData.street}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <select
                    name="city"
                    value={addressData.city}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select City</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <select
                    name="state"
                    value={addressData.state}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Zip Code</label>
                  <select
                    name="zipCode"
                    value={addressData.zipCode}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Zip Code</option>
                    {zipCodes.map((zipCode, index) => (
                      <option key={index} value={zipCode}>
                        {zipCode}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-md"
                  >
                    Save Address
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

export default MyAddress;
