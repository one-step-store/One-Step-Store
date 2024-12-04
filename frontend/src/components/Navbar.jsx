import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/logo.png" 
            alt="Logo"
            className="h-10 mr-3"
          />
        </div>

        {/* Buttons and Links */}
        <div className="flex items-center space-x-6">
          

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link
              to="/"
            >
              Home
            </Link>
            <Link
              to="/contact"
            >
              Contact
            </Link>
            <Link
              to="/about"
            >
              About
            </Link>
          </div>

          {/* Cart Button */}
          <Link
            to="/cart"
            className="flex items-center bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            <FaShoppingCart className="mr-2" />
            Cart
          </Link>

          {/* Profile Button */}
          <Link
            to="/edit-profile"
            className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            <FaUser className="mr-2" />
            Profile
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
