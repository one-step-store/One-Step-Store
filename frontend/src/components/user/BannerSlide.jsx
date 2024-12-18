import React, { useState, useEffect } from "react";
const BannerSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = ["/src/assets/banner.jpeg", "/src/assets/banner2.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  useEffect(() => {
        const fetchUserByUsername = async (username) => {
          try {
            const response = await apiRequest(
              HTTP_METHODS.POST, 
              `/api/users/username/${username}`
            );
            saveUserSession(response);
  
            console.log(response)
            if (response.data.role == 'admin') {
              window.location.href = "/dashboard";
            }else{
              window.location.href = "/home";
            }
            
          } catch (err) {
            console.error("Error fetching user:", err.response?.data?.data?.message || "Something went wrong.");
          }
        };
      
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        const username = params.get("username");
      
        if (token && username) {
          localStorage.setItem("_token", token);
          fetchUserByUsername(username); 
        }
      }, []);  

  return (
    <div className="relative">
      <img
        src={banners[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        className="w-full rounded-lg transition-all duration-700"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlide;