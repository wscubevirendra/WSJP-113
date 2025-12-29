// BlinkitClone.jsx — SIMPLE React + Tailwind (NO TypeScript, NO pagination, NO infinite scroll)
// Drop this inside any React project (Vite/CRA). Tailwind must be installed.

import React, { useState, useEffect } from "react";

export default function BlinkitClone() {
  const [query, setQuery] = useState("milk");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL =
    "https://api.apify.com/v2/datasets/ohFz2Mo6Rvfrx3prO/items?format=json&clean=true&fields=brand,category,images,in_stock,inventory,mrp,name,price,product_id,rating";

  async function fetchProducts() {
    setLoading(true);
    try {
      const url = `${API_URL}&search_query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data || []);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  function handleSearch(e) {
    e.preventDefault();
    fetchProducts();
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Blinkit Clone (Simple)</h1>

      {/* Search */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search grocery..."
          className="flex-1 p-3 border rounded-lg"
        />
        <button className="px-4 py-3 bg-green-600 text-white rounded-lg">Search</button>
      </form>

      {/* Loading */}
      {loading && <p className="text-gray-500">Loading...</p>}

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item) => (
          <div key={item.product_id} className="bg-white p-4 rounded-xl shadow">
            <img
              src={item.images?.[0] || "https://via.placeholder.com/200"}
              alt={item.name}
              className="h-32 mx-auto object-contain"
            />
            <h3 className="mt-2 font-semibold text-sm line-clamp-2">{item.name}</h3>
            <p className="text-gray-500 text-xs">{item.brand}</p>
            <p className="font-bold text-lg mt-1">₹{item.price}</p>
            <button className="w-full bg-yellow-500 text-white mt-3 py-2 rounded-lg">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}