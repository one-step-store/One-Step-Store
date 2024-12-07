import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [deliveryOption, setDeliveryOption] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [orderDetails, setOrderDetails] = useState([
    { id: 1, name: "Apple Watch Series 8", quantity: 2, price: 8000000, image: "https://down-id.img.susercontent.com/file/id-11134207-7r992-lvzwxeem8jr1ff.webp" },
    { id: 2, name: "Dell XPS 13", quantity: 1, price: 25000000, image: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lzvmzqx8ycwrfc.webp" },
  ]);

  useEffect(() => {
    // Get the address from localStorage
    const savedAddress = JSON.parse(localStorage.getItem("userAddress"));
    setSelectedAddress(savedAddress);
  }, []);

  const handleCheckout = () => {
    if (!selectedAddress || !deliveryOption || !paymentOption) {
      alert("Please complete all the selections.");
      return;
    }

    // Perform checkout logic
    alert("Checkout successful!");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Delivery Address */}
            <div className="w-full lg:w-1/3 bg-white shadow-xl rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Delivery Address</h2>
              {selectedAddress ? (
                <div className="space-y-4">
                  <p><span className="font-semibold">Street:</span> {selectedAddress.street}</p>
                  <p><span className="font-semibold">City:</span> {selectedAddress.city}</p>
                  <p><span className="font-semibold">State:</span> {selectedAddress.state}</p>
                  <p><span className="font-semibold">Zip Code:</span> {selectedAddress.zipCode}</p>
                </div>
              ) : (
                <p className="text-gray-500">No address found. Please go to My Address to add one.</p>
              )}
            </div>

            {/* Order Details */}
            <div className="w-full lg:w-2/3 bg-white shadow-xl rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4">
                {orderDetails.map((item) => (
                  <div key={item.id} className="flex justify-between items-center space-x-4">
                    <img
                      src={item.image}  // Use the image URL here
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <span>{item.name}</span>
                    </div>
                    <span>{item.quantity} xRp.{item.price}</span>
                  </div>
                ))}
                <div className="flex justify-between mt-6">
                  <span>Total:</span>
                  <span>Rp.{orderDetails.reduce((acc, item) => acc + item.quantity * item.price, 0)}</span>
                </div>
              </div>

              {/* Delivery Options */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Delivery Option</h3>
                <select
                  value={deliveryOption}
                  onChange={(e) => setDeliveryOption(e.target.value)}
                  className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  <option value="">Select Delivery Option</option>
                  <option value="Standard Delivery">Standard Delivery ( 3-4 Days )</option>
                  <option value="Express Delivery">Express Delivery ( 1-2 Days )</option>
                  <option value="Express Delivery">Same Day Delivery</option>
                </select>
              </div>

              {/* Payment Options */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Payment Option</h3>
                <select
                  value={paymentOption}
                  onChange={(e) => setPaymentOption(e.target.value)}
                  className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  <option value="">Select Payment Option</option>
                  <option value="Credit Card">BCA</option>
                  <option value="PayPal">BNI</option>
                  <option value="PayPal">BRI</option>
                  <option value="PayPal">Mandiri</option>
                  <option value="PayPal">Permata</option>
                  <option value="PayPal">CIMB</option>
                </select>
              </div>

              <button
                onClick={handleCheckout}
                className="bg-black text-white px-6 py-2 rounded-md mt-6"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
