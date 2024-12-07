import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Footer from "../../components/user/Footer";

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 

  // Fungsi untuk submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulasi API login (ganti dengan API backend Anda)
      const response = await fetch("https://example.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Simpan token di localStorage atau context (opsional)
      localStorage.setItem("token", data.token);

      // Redirect ke halaman dashboard atau beranda
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col lg:flex-row w-11/12 lg:w-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Bagian Kiri: Gambar */}
          <div className="hidden lg:flex w-1/2 items-center justify-center bg-gray-100">
            <img
              src="/assets/mockup2.png"
              alt="Login Illustration"
              className="w-3/4"
            />
          </div>

          {/* Bagian Kanan: Form */}
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Log in to One Step Store
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              Enter your details below:
            </p>

            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or Phone Number"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-bold ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            <div className="flex items-center justify-between mt-4">
              <a
                href="/forgot-password"
                className="text-blue-500 hover:underline text-sm"
              >
                Forgot Password?
              </a>
              <a
                href="/signup"
                className="text-blue-500 hover:underline text-sm"
              >
                Create Account
              </a>
            </div>

            <button
              type="button"
              className="w-full bg-blue-500 text-white py-3 mt-4 rounded-lg font-bold hover:bg-blue-600 transition"
            >
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
