import React, { useState } from "react";
// import Navbar from "../components/Navbar"; 
// import Footer from "../components/Footer"; 
import { FaStar, FaRegStar } from "react-icons/fa"; // Import icons for rating
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
const MyOrder = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      product: "Wireless Headphones",
      status: "Shipped",
      price: "Rp 1.500.000",
      date: "2024-12-01",
      rating: 0,
      review: "",
    },
    {
      id: 2,
      product: "Gaming Mouse",
      status: "Delivered",
      price: "Rp 750.000",
      date: "2024-12-03",
      rating: 0,
      review: "",
    },
    {
      id: 3,
      product: "Mechanical Keyboard",
      status: "Processing",
      price: "Rp 2.000.000",
      date: "2024-12-05",
      rating: 0,
      review: "",
    },
  ]);

  const [reviewData, setReviewData] = useState({ orderId: null, review: "", rating: 0 });

  const handleContactUs = (id) => {
    alert(`Hubungi kami untuk order ID: ${id}`);
  };

  const handleOrderReceived = (id) => {
    alert(`Pesanan ID: ${id} telah diterima.`);
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Completed" } : order
      )
    );
  };

  const handleReview = (id) => {
    setReviewData({ orderId: id, review: "", rating: 0 });
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleStarClick = (rating) => {
    setReviewData((prevState) => ({ ...prevState, rating }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert(`Ulasan untuk Order ID ${reviewData.orderId}:\nRating: ${reviewData.rating}\nUlasan: ${reviewData.review}`);
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === reviewData.orderId
          ? { ...order, rating: reviewData.rating, review: reviewData.review }
          : order
      )
    );
    setReviewData({ orderId: null, review: "", rating: 0 });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      <main className="bg-gray-100 flex-grow py-10">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="flex">
            {/* Content Area */}
            <div className="w-full bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">My Orders</h3>
              {orders.length > 0 ? (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="p-6 bg-gray-100 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h4 className="text-lg font-medium">{order.product}</h4>
                          <p className="text-sm text-gray-500">Order Date: {order.date}</p>
                          <p className="text-sm text-gray-500">
                            Status:{" "}
                            <span
                              className={`font-semibold ${
                                order.status === "Completed"
                                  ? "text-green-600"
                                  : order.status === "Processing"
                                  ? "text-yellow-600"
                                  : "text-blue-600"
                              }`}
                            >
                              {order.status}
                            </span>
                          </p>
                          <p className="text-sm text-gray-500">Price: {order.price}</p>
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => handleContactUs(order.id)}
                          className="bg-black text-white px-6 py-2 rounded-md"
                        >
                          Hubungi Kami
                        </button>
                        <button
                          onClick={() => handleOrderReceived(order.id)}
                          className="bg-black text-white px-6 py-2 rounded-md"
                        >
                          Pesanan Diterima
                        </button>

                        {/* Show "Kasih Ulasan" button only if status is "Completed" */}
                        {order.status === "Completed" && (
                          <button
                            onClick={() => handleReview(order.id)}
                            className="bg-black text-white px-6 py-2 rounded-md"
                          >
                            Kasih Ulasan
                          </button>
                        )}
                      </div>

                      {/* Show Review Form when "Kasih Ulasan" is clicked */}
                      {reviewData.orderId === order.id && (
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold mb-4">Tulis Ulasan</h4>
                          <form onSubmit={handleReviewSubmit}>
                            <div className="mb-4">
                              <label className="block text-sm font-medium">Rating:</label>
                              <div className="flex space-x-1">
                                {/* Rating stars */}
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <div
                                    key={star}
                                    onClick={() => handleStarClick(star)}
                                    className={`cursor-pointer ${star <= reviewData.rating ? "text-yellow-500" : "text-gray-300"}`}
                                  >
                                    {star <= reviewData.rating ? <FaStar /> : <FaRegStar />}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <textarea
                              name="review"
                              value={reviewData.review}
                              onChange={handleReviewChange}
                              placeholder="Tulis ulasan Anda"
                              className="w-full p-4 bg-gray-50 border rounded-md"
                              rows="4"
                              required
                            />
                            <button
                              type="submit"
                              className="bg-black text-white px-6 py-2 rounded-md"
                            >
                              Kirim Ulasan
                            </button>
                          </form>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>No orders found.</p>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MyOrder;
