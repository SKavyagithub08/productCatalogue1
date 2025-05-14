"use client";
import { useEffect, useState } from "react";

export default function CategoryFilter({ onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <button
        onClick={() => onSelect("all")}
        className="px-4 py-1.5 bg-indigo-100 hover:bg-indigo-200 rounded-full text-sm font-medium text-indigo-700"
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium capitalize"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
