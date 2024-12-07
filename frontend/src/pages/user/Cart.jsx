import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartPage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || [];
  });
  const navigate = useNavigate(); 

  // Fungsi untuk menghapus item dari keranjang
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Fungsi untuk menambah kuantitas produk
  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Fungsi untuk mengurangi kuantitas produk
  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Fungsi untuk menghitung total harga
  const getTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + (product.discountPrice * product.quantity || 0),
      0
    );
  };

  // Menyimpan perubahan ke localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Arahkan ke halaman checkout
    navigate("/checkout");
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-semibold mb-6">Your Shopping Cart</h1>

        <div className="flex gap-8">
          {/* Produk Section */}
          <div className="flex-1">
            {cart.length > 0 ? (
              <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="py-3 px-4 text-left">Product</th>
                      <th className="py-3 px-4 text-left">Price</th>
                      <th className="py-3 px-4 text-left">Quantity</th>
                      <th className="py-3 px-4 text-left">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => (
                      <tr key={product.id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4 flex items-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded-md mr-4"
                          />
                          <div>
                            <h3 className="font-semibold text-lg">{product.name}</h3>
                            <p className="text-gray-500">{product.category}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-green-600 font-semibold">
                          Rp {((product.discountPrice || 0) * product.quantity).toLocaleString()}
                        </td>
                        <td className="py-4 px-4 flex items-center gap-4">
                          <button
                            className="text-gray-600 hover:text-gray-800"
                            onClick={() => decreaseQuantity(product.id)}
                          >
                            <AiOutlineMinus className="text-xl" />
                          </button>
                          <span className="text-lg font-semibold">{product.quantity}</span>
                          <button
                            className="text-gray-600 hover:text-gray-800"
                            onClick={() => increaseQuantity(product.id)}
                          >
                            <AiOutlinePlus className="text-xl" />
                          </button>
                        </td>
                        <td className="py-4 px-4">
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => removeFromCart(product.id)}
                          >
                            <FaTrashAlt className="text-xl" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 mt-6">Your cart is currently empty.</p>
            )}
          </div>

          {/* Total Price Section */}
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

            {/* Total Price */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-lg">Total:</span>
              <span className="text-2xl font-semibold text-green-600">
                Rp {getTotalPrice().toLocaleString()}
              </span>
            </div>

            {/* Checkout Button */}
            <div className="mt-6 text-center">
              {cart.length > 0 ? (
                <button
                  className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              ) : (
                <button
                  className="bg-gray-300 text-white py-3 px-8 rounded-lg cursor-not-allowed"
                  disabled
                >
                  Your cart is empty
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CartPage;
