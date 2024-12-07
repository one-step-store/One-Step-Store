import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const savedAddresses = JSON.parse(localStorage.getItem("userAddresses")) || [];
    setAddresses(savedAddresses);
  }, []);

  const handleCheckout = async () => {
    if (!selectedAddress || !deliveryOption || !paymentOption) {
      setError("Please complete all the selections.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await fetch("https://example.com/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: selectedAddress,
          deliveryOption,
          paymentOption,
        }),
      });

      if (!response.ok) {
        throw new Error("Checkout failed. Please try again.");
      }

      const data = await response.json();
      setSuccess("Checkout successful! Thank you for your purchase.");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 via-white to-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-screen-xl mx-auto py-12 px-6 lg:px-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kolom Kiri: Pilihan Alamat */}
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
              Delivery Address
            </h2>
            <div className="space-y-6">
              {addresses.length > 0 ? (
                addresses.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-all hover:shadow-lg ${
                      selectedAddress === item.address ? "border-black" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedAddress(item.address)}
                  >
                    <p className="font-semibold text-gray-700">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.address}</p>
                    <p className="text-sm text-gray-500">Phone: {item.phone}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">No address found. Please add an address in your profile.</p>
              )}
            </div>
          </div>

          {/* Kolom Kanan: Pilihan Pengiriman dan Pembayaran */}
          <div className="space-y-12">
            {/* Delivery Option */}
            <div className="bg-white shadow-xl rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                Delivery Option
              </h2>
              <div className="space-y-4">
                {["Standard Delivery ( 3-5 Days )", "Express Delivery ( 1-2 Days )", "Same Day Delivery"].map(
                  (option, index) => (
                    <label
                      key={index}
                      className={`flex items-center p-4 border rounded-lg shadow-sm cursor-pointer transition-all hover:shadow-lg ${
                        deliveryOption === option ? "border-black" : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="delivery"
                        value={option}
                        className="hidden"
                        onChange={(e) => setDeliveryOption(e.target.value)}
                      />
                      <span className="ml-4 text-gray-700 font-medium">{option}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Payment Option */}
            <div className="bg-white shadow-xl rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                Payment Option
              </h2>
              <div>
                <select
                  className="w-full p-4 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  value={paymentOption}
                  onChange={(e) => setPaymentOption(e.target.value)}
                >
                  <option value="" disabled>
                    Select a payment method
                  </option>
                  <option value="BCA">BCA</option>
                  <option value="BNI">BNI</option>
                  <option value="BRI">BRI</option>
                  <option value="Mandiri">Mandiri</option>
                  <option value="Permata">Permata</option>
                  <option value="CIMB">CIMB</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <section className="mt-12">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <button
              className="px-6 py-3 bg-gray-400 text-gray-700 rounded-lg hover:bg-gray-600 transition"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-medium ${
                loading
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800 transition"
              }`}
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? "Processing..." : "Checkout Now"}
            </button>
          </div>
          {error && <p className="text-red-500 font-medium mt-4">{error}</p>}
          {success && <p className="text-green-500 font-medium mt-4">{success}</p>}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
