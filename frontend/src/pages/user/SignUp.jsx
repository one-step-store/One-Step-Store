import React, { useState } from "react";
// import Footer from "../components/Footer";
import Footer from "../../components/user/Footer";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    phoneNumber: "",
    password: "",
  }); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 
  const [success, setSuccess] = useState(""); 

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Validasi sederhana
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://example.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Sign up failed. Please check your details.");
      }

      const data = await response.json();
      console.log("Sign up successful:", data);

      setSuccess("Account created successfully! Please log in.");
      setFormData({
        name: "",
        email: "",
        username: "",
        phoneNumber: "",
        password: "",
      });


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
              src="/assets/mockup.png"
              alt="Sign Up Illustration"
              className="w-3/4"
            />
          </div>

          {/* Bagian Kanan: Form */}
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Sign Up To One Step Store
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              Enter your details below:
            </p>

            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}
            {success && (
              <p className="text-green-500 text-sm text-center mb-4">
                {success}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <p className="text-gray-600 mt-4 text-center">
              Already have an account?{" "}
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
