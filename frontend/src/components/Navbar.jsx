import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fungsi untuk toggle dropdown profil
  const handleProfileClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Fungsi untuk toggle menu mobile
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-10 mr-3" />
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-black lg:relative lg:top-0 lg:left-auto lg:w-auto lg:flex lg:items-center lg:space-x-6`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
            <Link
              to="/"
              className="px-4 py-2 lg:px-0 lg:py-0 text-white hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 lg:px-0 lg:py-0 text-white hover:text-gray-300"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 lg:px-0 lg:py-0 text-white hover:text-gray-300"
            >
              About
            </Link>
          </div>
        </nav>

        {/* Right Section: Cart & Profile */}
        <div className="flex items-center space-x-6">
          {/* Cart */}
          <Link to="/cart" className="flex items-center text-white hover:text-gray-300">
            <FaShoppingCart className="mr-2" />
          </Link>

          {/* Profile */}
          <div className="relative">
            <button onClick={handleProfileClick} className="flex items-center">
              <FaUser className="mr-2" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-12 right-0 bg-white text-black shadow-lg rounded-lg w-40 z-50">
                <Link
                  to="/edit-profile"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  My Profile
                </Link>
                <Link
                  to="/my-address"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  My Address
                </Link>
                <Link
                  to="/my-orders"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  My Order
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="lg:hidden text-white text-xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
