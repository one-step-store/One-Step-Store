import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import { apiRequest, HTTP_METHODS } from "../../utils/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || [];
  });
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(""); 

  useEffect(() => {
    const fetchProductById = async () => {
      setLoading(true);
      try {
        const response = await apiRequest(HTTP_METHODS.GET, `/api/products/${id}`);
        if (response.code === 0) {
          setProduct(response.data);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductById();
  }, [id]);

  const checkAuthAndProceed = (action) => {
    const token = localStorage.getItem("_token");
    if (!token) {
      navigate("/Login");
    } else {
      action();
    }
  };

  const addToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setNotification("Product added to cart");
    setTimeout(() => setNotification(""), 3000);
  };

  const buyNow = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (loading) {
    return (
      <div className="container mx-auto px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-600">Loading product details...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold text-red-500">Product not found.</h2>
      </div>
    );
  }

  return (
    <div>
      {localStorage.getItem("_token") ? <Navbar /> : (
        <header className="bg-black text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-8">
            <img src="/assets/logo.png" alt="Logo" className="h-10 mr-3" />
            <nav className="flex gap-4">
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
              <Link to="/SignUp" className="text-white hover:text-gray-300">Sign Up</Link>
              <Link to="/Login" className="text-white hover:text-gray-300">Login</Link>
            </nav>
          </div>
        </header>
      )}

      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="relative w-full md:w-1/2">
            <img src={`data:image/png;base64,${product.image}`} alt={product.name} className="w-3/4 h-auto rounded-lg shadow-lg mx-auto" />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-3xl font-bold text-green-600">Rp {product.price.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition" onClick={() => checkAuthAndProceed(addToCart)}>Add to Cart</button>
              <button className="bg-gray-100 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition" onClick={() => checkAuthAndProceed(buyNow)}>Buy Now</button>
            </div>
          </div>
        </div>

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
