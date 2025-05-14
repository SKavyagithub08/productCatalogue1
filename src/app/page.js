"use client";

import { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import CategoryFilter from "../components/CategoryFilter";
import SearchAndSort from "../components/SearchAndSort";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setAllProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleCategorySelect = (category) => {
    if (category === "all") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter((p) => p.category === category);
      setProducts(filtered);
    }
  };

  const handleSearch = (query) => {
    const filtered = allProducts.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
  };

  const handleSort = (sortOption) => {
    let sorted = [...products];
    if (sortOption === "price-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sortOption === "price-desc") sorted.sort((a, b) => b.price - a.price);
    else if (sortOption === "rating-asc") sorted.sort((a, b) => a.rating.rate - b.rating.rate);
    else if (sortOption === "rating-desc") sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(sorted);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {error && <Error message={error} />}
      {loading ? (
        <Loading />
      ) : (
        <>
          <SearchAndSort onSearch={handleSearch} onSort={handleSort} />
          <CategoryFilter onSelect={handleCategorySelect} />
          <ProductGrid products={products} />
        </>
      )}
    </div>
  );
}
