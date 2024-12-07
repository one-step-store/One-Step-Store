import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Mengimpor ikon keranjang belanja

const ProductCard = ({ id, name, price, image, rating }) => {
  const handleAddToCart = () => {
    // Logic for adding product to the cart
    console.log(`Product ${name} added to cart`);
  };

  const handleBuyNow = () => {
    // Logic for buying the product (e.g., redirect to checkout page)
    console.log(`Buying product: ${name}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
      {/* Menggunakan Link untuk produk, agar bisa diklik */}
      <Link to={`/product/${id}`} className="block">
        <img src={image} alt={name} className="w-full h-48 object-contain mb-4" />
        <h3 className="text-lg font-semibold">{name}</h3>
      </Link>
      <p className="text-sm text-gray-600">{rating} ★</p>
      <p className="text-xl font-bold text-black">{price}</p>

      {/* Add buttons */}
      <div className="mt-4 flex justify-between gap-4">
        {/* Link ke halaman keranjang belanja */}
        <Link to="/cart" className="flex items-center bg-black text-white p-2 rounded-md hover:bg-gray-800">
          <FaShoppingCart className="w-5 h-5 mr-2" />
        </Link>

        <button
          onClick={handleBuyNow}
          className="bg-black text-white px-5 py-1 rounded-md text-sm"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
