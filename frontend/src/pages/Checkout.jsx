import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4 bg-gray-50 sm:px-6 lg:px-8">

        {/* Delivery Address */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Delivery Address</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <input
                type="radio"
                name="address"
                id="address1"
                className="w-5 h-5 border-gray-300 text-green-600"
              />
              <label htmlFor="address1" className="ml-3 text-gray-700">
                <p className="font-medium">Jack Jennes</p>
                <p className="text-sm text-gray-500">Sumatera Selatan, Palembang</p>
                <p className="text-sm text-gray-500">Phone: +62-831-7714-6970</p>
              </label>
            </div>
            <div className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <input
                type="radio"
                name="address"
                id="address2"
                className="w-5 h-5 border-gray-300 text-green-600"
              />
              <label htmlFor="address2" className="ml-3 text-gray-700">
                <p className="font-medium">Pamungkas</p>
                <p className="text-sm text-gray-500">Sumatera Selatan, Palembang</p>
                <p className="text-sm text-gray-500">Phone: +62-831-7714-6970</p>
              </label>
            </div>
          </div>
        </section>

        {/* Delivery Option */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Delivery Option</h2>
          <div className="space-y-4">
            <label className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <input
                type="radio"
                name="delivery"
                className="w-5 h-5 border-gray-300 text-green-600"
              />
              <span className="ml-3 text-gray-700">Standard Delivery</span>
            </label>
            <label className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <input
                type="radio"
                name="delivery"
                className="w-5 h-5 border-gray-300 text-green-600"
              />
              <span className="ml-3 text-gray-700">Future Delivery</span>
            </label>
          </div>
        </section>

        {/* Payment Option */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Option</h2>
          <div className="space-y-4">
            {["Cash On Delivery", "Credit/Debit Card", "Net Banking", "My Wallet"].map(
              (option, index) => (
                <label key={index} className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <input
                    type="radio"
                    name="payment"
                    className="w-5 h-5 border-gray-300 text-green-600"
                  />
                  <span className="ml-3 text-gray-700">{option}</span>
                </label>
              )
            )}
          </div>
        </section>

        {/* Total Price and Checkout Button */}
        <section className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <div className="flex justify-between items-center flex-col sm:flex-row">
            <button
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 shadow-md"
              onClick={() => window.history.back()} 
            >
              Cancel
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Checkout Now
            </button>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
