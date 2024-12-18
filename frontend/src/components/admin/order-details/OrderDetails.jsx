import React from "react";

const OrderDetails = ({ order }) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Order Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 shadow rounded-lg mb-6">
        <div>
          <p className="text-lg font-bold">
            Orders ID: #{order.id}
            <span
              className={`px-2 py-1 rounded-full text-sm ml-2 ${
                order.status === "Pending"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {order.status}
            </span>
          </p>
          <div className="flex items-center text-gray-600 mt-2">
            <span>&#x1F4C5;</span>
            <p className="ml-2">{order.date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <select className="border px-4 py-2 rounded-md text-gray-700">
            <option>Change Status</option>
            <option>Diproses</option>
            <option>Dikirim</option>
          </select>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Save
          </button>
        </div>
      </div>

      {/* Order Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="font-bold text-lg mb-2">Customer</h2>
          <p>Full Name: {order.customer.name}</p>
          <p>Email: {order.customer.email}</p>
          <p>Phone: {order.customer.phone}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="font-bold text-lg mb-2">Order Info</h2>
          <p>Shipping: {order.shipping}</p>
          <p>Payment Method: {order.paymentMethod}</p>
          <p>Status: {order.status}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="font-bold text-lg mb-2">Deliver to</h2>
          <p>Address: {order.deliveryAddress}</p>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="font-bold text-lg mb-4">Products</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Product Name</th>
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.products.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">{product.orderId}</td>
                  <td className="px-4 py-2">{product.quantity}</td>
                  <td className="px-4 py-2">{product.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-right mt-4">
          <p>Subtotal: ₹{order.subtotal}</p>
          <p>Tax (20%): ₹{order.tax}</p>
          <p>Discount: ₹{order.discount}</p>
          <p>Shipping Rate: ₹{order.shippingRate}</p>
          <h3 className="text-lg font-bold">Total: ₹{order.total}</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
