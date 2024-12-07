import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import products from "../../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || [];
  });
  
  const [notification, setNotification] = useState(""); 

  const addToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setNotification("Product added to cart");
    setTimeout(() => {
      setNotification(""); 
    }, 3000);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (!product) {
    return (
      <div className="container mx-auto px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold text-red-500">Product not found.</h2>
      </div>
    );
  }

  // Dummy review data
  const reviews = [
    {
      rating: 5,
      comment: "Amazing product, highly recommend! It exceeded my expectations."
    },
    {
      rating: 4,
      comment: "Good quality, but the packaging could be better."
    },
    {
      rating: 3,
      comment: "The product is fine, but it's a bit smaller than expected."
    },
    {
      rating: 5,
      comment: "Worth every penny! Fantastic value for the price."
    }
  ];

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="relative w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-3/4 h-auto rounded-lg shadow-lg mx-auto"
            />
            {product.discount && (
              <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                {product.discount}% OFF
              </span>
            )}
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>
                  {index < product.rating ? (
                    <FaStar className="text-yellow-500" />
                  ) : (
                    <FaRegStar className="text-gray-300" />
                  )}
                </span>
              ))}
              <p className="text-gray-600 text-sm ml-2">({product.rating}/5)</p>
            </div>
            <p className="text-lg text-gray-500 mb-4">
              Category: <span className="text-blue-600 font-semibold">{product.category}</span>
            </p>
            <p className="text-xl text-gray-600 mb-4">{product.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <p className="text-3xl font-bold text-green-600">
                Rp {product.discountPrice.toLocaleString()}
              </p>
              {product.originalPrice && (
                <p className="text-lg text-gray-500 line-through">
                  Rp {product.originalPrice.toLocaleString()}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition" onClick={addToCart}>
                Add to Cart
              </button>
              <button
                className="bg-gray-100 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
                onClick={() => navigate("/checkout")}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Section (Dummy Data) */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Product Details</h2>
          <div className="space-y-4">
            <p><span className="font-semibold">Color:</span></p>
            <div className="flex gap-4">
              {/* Color Options */}
              {['#000000', '#c0c0c0', '#ff0000'].map((color, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: color,
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                  }}
                  title={`Color ${color}`}
                />
              ))}
            </div>
            <p><span className="font-semibold">Material:</span> Cotton</p>
            <p><span className="font-semibold">Dimensions:</span> 20cm x 30cm x 10cm</p>
            <p><span className="font-semibold">Size:</span> Medium</p>
            <p><span className="font-semibold">Weight:</span> 250g</p>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
          {reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx}>
                        {idx < review.rating ? (
                          <FaStar className="text-yellow-500" />
                        ) : (
                          <FaRegStar className="text-gray-300" />
                        )}
                      </span>
                    ))}
                    <p className="text-gray-600 text-sm ml-2">({review.rating}/5)</p>
                  </div>
                  <p className="text-lg text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
          )}
        </div>

        {/* Notification */}
        {notification && (
          <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition">
            <p>{notification}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
