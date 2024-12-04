import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Kolom 1 */}
        <div>
          <h4 className="font-bold text-lg mb-3">Capstone</h4>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
        </div>

        {/* Kolom 2 */}
        <div>
          <h4 className="font-bold text-lg mb-3">Support</h4>
          <p>Customer Services</p>
          <p>business@store.com</p>
          <p>+62 857-7764-8913</p>
        </div>

        {/* Kolom 3 */}
        <div>
          <h4 className="font-bold text-lg mb-3">Account</h4>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Shop</p>
        </div>

        {/* Kolom 4 */}
        <div>
          <h4 className="font-bold text-lg mb-3">Quick Links</h4>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Contact</p>
        </div>
      </div>
      <p className="text-center mt-4 text-gray-500">
        © Copyright One Step Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
