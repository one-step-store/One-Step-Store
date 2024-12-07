import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [deliveryOption, setDeliveryOption] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [orderDetails, setOrderDetails] = useState([
    {
      id: 1,
      name: "Apple Watch Series 8",
      quantity: 2,
      price: 8000000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r992-lvzwxeem8jr1ff.webp",
    },
    {
      id: 2,
      name: "Dell XPS 13",
      quantity: 1,
      price: 25000000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lzvmzqx8ycwrfc.webp",
    },
  ]);
  const [sellerMessage, setSellerMessage] = useState(""); // Pesan untuk penjual
  const [isModalOpen, setIsModalOpen] = useState(false); // Kontrol visibilitas modal
  const navigate = useNavigate();

  useEffect(() => {
    const savedAddress = JSON.parse(localStorage.getItem("userAddress"));
    setSelectedAddress(savedAddress);
  }, []);

  const handleCheckout = () => {
    if (!selectedAddress || !deliveryOption || !paymentOption) {
      alert("Please complete all the selections.");
      return;
    }
    setIsModalOpen(true);
  };

  const getTotalAmount = () => {
    return orderDetails.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Alamat Pengiriman */}
            <div className="w-full lg:w-1/3 bg-white shadow-xl rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Delivery Address</h2>
              {selectedAddress ? (
                <div className="space-y-4">
                  <p>
                    <span className="font-semibold">Street:</span>{" "}
                    {selectedAddress.street}
                  </p>
                  <p>
                    <span className="font-semibold">City:</span>{" "}
                    {selectedAddress.city}
                  </p>
                  <p>
                    <span className="font-semibold">State:</span>{" "}
                    {selectedAddress.state}
                  </p>
                  <p>
                    <span className="font-semibold">Zip Code:</span>{" "}
                    {selectedAddress.zipCode}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500">
                  No address found. Please go to My Address to add one.
                </p>
              )}
            </div>

            {/* Rincian Pesanan */}
            <div className="w-full lg:w-2/3 bg-white shadow-xl rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4">
                {orderDetails.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center space-x-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <span>{item.name}</span>
                    </div>
                    <span>
                      {item.quantity} x Rp. {item.price.toLocaleString()}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between mt-6">
                  <span>Total:</span>
                  <span>Rp. {getTotalAmount().toLocaleString()}</span>
                </div>
              </div>

              {/* Pesan untuk Penjual */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">
                  Message to Seller (Optional)
                </h3>
                <textarea
                  value={sellerMessage}
                  onChange={(e) => setSellerMessage(e.target.value)}
                  placeholder="Write your message here..."
                  className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  rows="4"
                ></textarea>
              </div>

              {/* Pilihan Pengiriman */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Delivery Option</h3>
                <select
                  value={deliveryOption}
                  onChange={(e) => setDeliveryOption(e.target.value)}
                  className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  <option value="">Select Delivery Option</option>
                  <option value="Standard Delivery">
                    Standard Delivery (3-4 Days)
                  </option>
                  <option value="Express Delivery">
                    Express Delivery (1-2 Days)
                  </option>
                  <option value="Same Day Delivery">Same Day Delivery</option>
                </select>
              </div>

              {/* Pilihan Pembayaran */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Payment Option</h3>
                <select
                  value={paymentOption}
                  onChange={(e) => setPaymentOption(e.target.value)}
                  className="w-full p-3 bg-gray-50 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  <option value="">Select Payment Option</option>
                  <option value="BCA">BCA</option>
                  <option value="BNI">BNI</option>
                  <option value="BRI">BRI</option>
                  <option value="Mandiri">Mandiri</option>
                  <option value="Permata">Permata</option>
                  <option value="CIMB">CIMB</option>
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

      {/* Modal pop up */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-4 text-gray-600 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Transaction Summary</h2>
            <div>
              <p>
                <strong>Order ID:</strong> 123456789
              </p>
              <p>
                <strong>Bank:</strong> {paymentOption}
              </p>
              <p>
                <strong>Amount:</strong> Rp. {getTotalAmount().toLocaleString()}
              </p>
              <p>
                <strong>Message to Seller:</strong>{" "}
                {sellerMessage || "No message provided"}
              </p>
              <p>
                <strong>Payment Type:</strong> Virtual Account
              </p>
              <p>
                <strong>Virtual Account Number:</strong> 987654321
              </p>
              <p>
                <strong>Payment Expiry Time:</strong> 2023-12-31 12:00:00
              </p>
              <p>
                <strong>Payment Status:</strong> Pending
              </p>
            </div>
            <div className="mt-6">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"
                onClick={() => alert("Checking payment status...")}
              >
                Check Payment Status
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                onClick={() => navigate("/")}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Checkout;
