import React from 'react';
// import Navbar from '../components/Navbar';  
// import Footer from '../components/Footer';  
import  Navbar from "../../components/user/Navbar";
import  Footer from "../../components/user/Footer";
const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-gray-600 mb-8">
          Your visited page not found. You may go home page.
        </p>
        <a
          href="/"
          className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800"
        >
          Back to home page
        </a>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ErrorPage;
