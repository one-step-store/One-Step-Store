import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import ProductCard from "../components/ProductCard"; 
import products from "../data/products"; 
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 

const BrandPage = () => {
  const { brandName } = useParams(); 
  const [brandProducts, setBrandProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    // Filter products based on the selected brand
    const filteredProducts = products.filter(
      (product) => product.brand.toLowerCase() === brandName.toLowerCase()
    );
    setBrandProducts(filteredProducts);
  }, [brandName]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on search query
  const displayedProducts = brandProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8 py-10">
        {/* Header Brand */}
        <div className="flex flex-col items-center mb-10">
          <img
            src={`/logos/${brandName.toLowerCase()}.png`} 
            alt={`${brandName} logo`}
            className="w-24 h-24 object-contain mb-4"
          />
          <h2 className="text-3xl font-bold text-center">
            All {brandName} Products
          </h2>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full md:w-2/3 lg:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-center"
          />
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <div key={product.id} className="relative">
                {/* Product Logo */}
                {product.logo && (
                  <img
                    src={product.logo} 
                    alt={`${product.name} logo`}
                    className="absolute top-0 left-0 w-12 h-12 object-contain mb-4"
                  />
                )}

                {/* Product Card */}
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={`Rp ${product.discountPrice.toLocaleString()}`}
                  image={product.image}
                  rating={product.rating}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found for "{searchQuery}" in {brandName}.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrandPage;
