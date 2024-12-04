import React from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import products from "../data/products";
import { FaStar, FaRegStar } from "react-icons/fa";
import Navbar from "../components/Navbar"; // Mengimpor Navbar
import Footer from "../components/Footer"; // Mengimpor Footer

const ProductDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const product = products.find((p) => p.id === parseInt(id)); 

  if (!product) {
    return (
      <div className="container mx-auto px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold text-red-500">
          Product not found.
        </h2>
      </div>
    );
  }

  // Fungsi untuk menangani klik tombol "Buy Now"
  const handleBuyNow = () => {
    navigate("/checkout"); 
  };

  // Dummy data untuk customer reviews
  const dummyReviews = [
    {
      user: "Muhammad",
      rating: 5,
      comment: "This product is amazing! Highly recommend it to everyone.",
    },
    {
      user: "Putra",
      rating: 4,
      comment: "Great quality, but the delivery was a bit slow.",
    },
    {
      user: "Pamungkas",
      rating: 5,
      comment: "Good product, but I expected better performance for the price.",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar /> {/* Menggunakan komponen Navbar */}

      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {product.discount && (
              <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {/* Rating */}
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
              Category:{" "}
              <span className="text-blue-600 font-semibold">{product.category}</span>
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

            <div className="flex items-center gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
              <button
                className="bg-gray-100 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
                onClick={handleBuyNow} 
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Deskripsi Produk */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Product Description</h2>
          <p className="text-gray-700 leading-relaxed">
            {product.longDescription ||
              "This is a high-quality product designed to meet your needs. With a sleek design and excellent performance, it's the perfect choice for anyone seeking quality and value. Add it to your collection today!"}
          </p>
        </section>

        {/* Komentar dari Pembeli */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {dummyReviews && dummyReviews.length > 0 ? (
              dummyReviews.map((review, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx}>
                        {idx < review.rating ? (
                          <FaStar className="text-yellow-500 text-sm" />
                        ) : (
                          <FaRegStar className="text-gray-300 text-sm" />
                        )}
                      </span>
                    ))}
                    <p className="text-sm text-gray-500">({review.rating}/5)</p>
                  </div>
                  <h3 className="text-lg font-medium">{review.user}</h3>
                  <p className="text-gray-600 mt-1">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer /> {/* Menggunakan komponen Footer */}
    </div>
  );
};

export default ProductDetail;
