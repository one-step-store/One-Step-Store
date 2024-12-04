import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState(products); 
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [showAll, setShowAll] = useState(false); 

  const categories = ["Phones", "Computers", "Smartwatch", "Camera", "Headphones", "Gaming"]; 

  // Fungsi untuk memfilter produk berdasarkan teks pencarian atau kategori
  useEffect(() => {
    filterProducts(); 
  }, [searchQuery, selectedCategory]);

  const filterProducts = () => {
    let filtered = products;

    // Filter berdasarkan kategori
    if (selectedCategory) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter berdasarkan teks pencarian
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  // Fungsi untuk menangani klik tombol "View All"
  const handleViewAll = () => {
    setShowAll(true); 
  };

  // Batasi produk yang ditampilkan
  const productsToDisplay = showAll ? filteredProducts : filteredProducts.slice(0, 10);

  return (
    <>
      <Navbar />
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
            <div className="relative">
              <img
                src="/assets/banner.jpeg"
                alt="One Step Store Banner"
                className="w-full rounded-lg"
              />
            </div>
          </section>
        )}

        {/* Categories Section (Hidden when there is a search query) */}
        {!searchQuery && (
          <section className="container mx-auto px-8 py-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Browse By Category
            </h2>
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

        {/* Display Search Results Below Search Bar */}
        {searchQuery && (
          <section className="container mx-auto px-8 py-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Search Results for "{searchQuery}"
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={`Rp ${product.discountPrice.toLocaleString()}`}
                    image={product.image}
                    rating={product.rating}
                  />
                ))
              ) : (
                <p className="text-gray-500 col-span-full text-center">
                  No products found.
                </p>
              )}
            </div>
          </section>
        )}

        {/* Products Section (Displayed when search query is empty) */}
        {!searchQuery && (
          <section className="container mx-auto px-8 mt-8">
            <h2 className="text-2xl font-semibold mb-6">Explore Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
              {productsToDisplay.length > 0 ? (
                productsToDisplay.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={`Rp ${product.discountPrice.toLocaleString()}`}
                    image={product.image}
                    rating={product.rating}
                  />
                ))
              ) : (
                <p className="text-gray-500 col-span-full text-center">
                  No products found.
                </p>
              )}
            </div>

            {/* Button "View All" */}
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

export default Home;
