import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import Footer from "../components/Footer";
import CardProduct from "../components/CardProduct";
import products from "../data/products";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const banners = [
    "/assets/banner.jpeg", 
    "/assets/banner2.jpeg", 
  ];

  // Menggeser banner otomatis setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative">
      {/* Gambar Banner */}
      <img
        src={banners[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        className="w-full rounded-lg transition-all duration-700"
      />

      {/* Indikator (Dot) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-black" : "bg-gray-400"} transition-all`}
            onClick={() => setCurrentIndex(index)} 
          ></button>
        ))}
      </div>
    </div>
  );
};

const Beranda = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAll, setShowAll] = useState(false);

  const categories = ["Phones", "Computers", "Smartwatch", "Camera", "Headphones", "Gaming"];

  const brands = [
    { name: "Apple", logo: "/assets/apple.png" },
    { name: "Samsung", logo: "/assets/samsungg.png" },
    { name: "Sony", logo: "/assets/sony.png" },
    { name: "Dell", logo: "/assets/dell.png" },
    { name: "HP", logo: "/assets/hp.png" },
  ];

  useEffect(() => {
    filterProducts();
  }, [searchQuery, selectedCategory]);

  const filterProducts = () => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  const productsToDisplay = showAll ? filteredProducts : filteredProducts.slice(0, 10);

  return (
    <>
      <header className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-8">
        <img src="/assets/logo.png" alt="Logo" className="h-10 mr-3" />
          <nav className="flex gap-4">
            <Link to="/" className="px-4 py-2 lg:px-0 lg:py-0 text-white hover:text-gray-300">Home</Link>
            <Link to="/SignUp" className="px-4 py-2 lg:px-0 lg:py-0 text-white hover:text-gray-300">Sign Up</Link>
            <Link to="/Login" className="px-4 py-2 lg:px-0 lg:py-0 text-white hover:text-gray-300">Login</Link>
          </nav>
        </div>
      </header>

      <main className="bg-gray-100">
        {/* Search Bar */}
        <div className="py-6 shadow-sm">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-2 border border-gray-300 rounded-l-lg shadow-sm text-sm"
            />
            <button
              className="bg-black text-white px-4 py-2 text-sm rounded-r-lg"
              onClick={filterProducts}
            >
              Search
            </button>
          </div>
        </div>

        {/* Banner (Hidden when there is a search query) */}
        {!searchQuery && (
          <section className="container mx-auto px-8 mt-4">
            <Banner /> {/* Gunakan komponen Banner */}
          </section>
        )}

        {/* Categories Section */}
        {!searchQuery && (
          <section className="container mx-auto px-8 py-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">Browse By Category</h2>
            <div className="flex justify-center gap-6 flex-wrap">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`py-3 px-6 rounded-md border text-lg font-medium ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } shadow-sm hover:bg-black hover:text-white transition`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Browse By Brand Section */}
        {!searchQuery && (
          <section className="container mx-auto px-8 py-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">Browse By Brand</h2>
            <div className="flex justify-center gap-6 flex-wrap">
              {brands.map((brand, index) => (
                <Link
                  key={index}
                  to={`/brand/${brand.name}`}
                  className="py-3 px-6 rounded-md border bg-white text-black shadow-sm hover:text-white transition"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-16 h-16 object-contain mx-auto"
                  />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Search Results */}
        {searchQuery && (
          <section className="container mx-auto px-8 py-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Search Results for "{searchQuery}"
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <CardProduct
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={`Rp ${product.discountPrice.toLocaleString()}`}
                    image={product.image}
                    rating={product.rating}
                  />
                ))
              ) : (
                <p className="text-gray-500 col-span-full text-center">No products found.</p>
              )}
            </div>
          </section>
        )}

        {/* Products Section */}
        {!searchQuery && (
          <section className="container mx-auto px-8 mt-8">
            <h2 className="text-2xl font-semibold mb-6">Explore Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
              {productsToDisplay.length > 0 ? (
                productsToDisplay.map((product) => (
                  <CardProduct
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={`Rp ${product.discountPrice.toLocaleString()}`}
                    image={product.image}
                    rating={product.rating}
                  />
                ))
              ) : (
                <p className="text-gray-500 col-span-full text-center">No products found.</p>
              )}
            </div>

            {!showAll && filteredProducts.length > 10 && (
              <div className="flex justify-center mt-6">
                <button
                  className="bg-black text-white px-6 py-2 rounded-md"
                  onClick={handleViewAll}
                >
                  View All Products
                </button>
              </div>
            )}
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Beranda;
