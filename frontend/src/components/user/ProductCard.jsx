import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { apiRequest, HTTP_METHODS, getUserSession } from "../../utils/utils";

const ProductCard = ({ id, name, price, image, rating }) => {
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const user = getUserSession();
      if (!user) {
        console.error("User not logged in");
        return;
      }

      const requestData = {
        product_id: id,
        user_id: user._id,
        quantity: 1,
      };

      const response = await apiRequest(
        HTTP_METHODS.POST,
        "/api/cart",
        requestData
      );

      if (response.code === 0) {
        alert("Product added to cart");
      }

      console.log(`Product ${name} added to cart`, response);
    } catch (error) {
      console.error("Failed to add product to cart", error);
    }
  };

  const handleBuyNow = () => {
    navigate(`/checkout/${id}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${id}`} className="block">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-contain mb-3"
        />
        <h3 className="text-lg font-medium text-gray-800">{name}</h3>
      </Link>
      <p className="text-sm text-gray-500 mb-2">{rating} ★</p>
      <p className="text-lg font-semibold text-gray-900">{price}</p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 md:py-1 md:text-sm lg:py-2 lg:text-base"
        >
          <FaShoppingCart className="inline-block mr-2" />
          Add to Cart
        </button>

        <button
          onClick={handleBuyNow}
          className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors duration-300 md:py-1 md:text-sm lg:py-2 lg:text-base"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
