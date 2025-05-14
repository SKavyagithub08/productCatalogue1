"use client";

export default function SearchAndSort({ onSearch, onSort }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
      <input
        type="text"
        placeholder="Search products"
        onChange={(e) => onSearch(e.target.value)}
        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <select
        onChange={(e) => onSort(e.target.value)}
        className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Sort by</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="rating-asc">Rating: Low → High</option>
        <option value="rating-desc">Rating: High → Low</option>
      </select>
    </div>
  );
}

