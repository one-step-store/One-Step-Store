import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from "../context/CartContext"; 

const Cart = () => {
  const { cartItems, removeItem, updateQuantity } = useContext(CartContext); 

  // Hitung subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-8 text-center">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Daftar Produk */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Your Items</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-6 border-b pb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg mr-4 object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.code}</p>
                      <p className="text-sm font-semibold mt-2 text-gray-800">
                        Rp{item.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {/* Update Quantity */}
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      -
                    </button>
                    <p className="mx-2">{item.quantity}</p>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 ml-4"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Ringkasan Pesanan */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-lg font-semibold">
                Rp{calculateSubtotal().toLocaleString("id-ID")}
              </p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Discount</p>
              <p className="text-lg font-semibold">Rp0</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <p className="text-gray-800 font-semibold">Total</p>
              <p className="text-xl font-bold text-green-600">
                Rp{(calculateSubtotal() + 0).toLocaleString("id-ID")}
              </p>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg mt-6">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
