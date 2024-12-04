import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex w-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
        
          {/* Bagian Kiri: Gambar */}
          <div className="w-1/2 flex items-center justify-center">
            <img
              src="/assets/mockup2.png" 
              alt="Login Illustration"
              className="w-3/4"
            />
          </div>

          {/* Bagian Kanan: Form */}
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6">Log in to One Step Store</h2>
            <p className="text-gray-600 mb-4">Enter your details below:</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg"
              />
              <button className="w-full bg-black text-white py-3 rounded-lg font-bold">
                Log In
              </button>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold">
                Sign In with Google
              </button>
            </form>
            <p className="text-gray-600 mt-4">
              <a href="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
