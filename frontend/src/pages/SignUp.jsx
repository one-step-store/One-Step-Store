import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex w-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
        
          {/* Bagian Kiri: Gambar */}
          <div className="w-1/2 flex items-center justify-center">
            <img
              src="/assets/mockup.png" 
              alt="Sign Up Illustration"
              className="w-3/4"
            />
          </div>

          {/* Bagian Kanan: Form */}
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6">Sign Up To One Step Store</h2>
            <p className="text-gray-600 mb-4">Enter your details below:</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg"
              />
              <button className="w-full bg-black text-white py-3 rounded-lg font-bold">
                Create Account
              </button>
            </form>
            <p className="text-gray-600 mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
