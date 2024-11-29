import React from "react";

const ProductsTable = ({ products, total }) => (
  <div className="bg-white p-4 shadow rounded-lg">
    <h2 className="font-bold text-lg mb-4">Products</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 text-left">Product Name</th>
          <th className="px-4 py-2 text-left">Order ID</th>
          <th className="px-4 py-2 text-left">Quantity</th>
          <th className="px-4 py-2 text-left">Total</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} className="border-b">
            <td className="px-4 py-2">{product.name}</td>
            <td className="px-4 py-2">{product.orderId}</td>
            <td className="px-4 py-2">{product.quantity}</td>
            <td className="px-4 py-2">{product.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="flex justify-end mt-4">
      <div className="text-right">
        <p>Subtotal: {total.subtotal}</p>
        <p>Tax (20%): {total.tax}</p>
        <p>Discount: {total.discount}</p>
        <p>Shipping Rate: {total.shippingRate}</p>
        <h3 className="text-lg font-bold">Total: {total.grandTotal}</h3>
      </div>
    </div>
  </div>
);

export default ProductsTable;
