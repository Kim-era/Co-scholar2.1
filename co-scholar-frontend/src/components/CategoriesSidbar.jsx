import { useState, useEffect } from "react";
import { API_BASE } from "../config";

const sampleCategories = [
  { id: 1, name: "Guidance" },
  { id: 2, name: "Career" },
  { id: 3, name: "Life" },
  { id: 4, name: "Tech" },
];

export default function CategoriesSidebar({ onSelectCategory, selectedCategory }) {
  const [categories, setCategories] = useState(sampleCategories);

  useEffect(() => {
    fetch("http://localhost:3000/api/api/categories")
      .then(res => res.json())
      .then(data => {
        if (data.length) setCategories(data);
      })
      .catch(() => {}); // keep static sample if backend fails
  }, []);

  return (
    <div className="bg-white p-4 w-48 border-r border-gray-200">
      <h2 className="text-orange-500 font-bold mb-4">Categories</h2>
      {categories.map(cat => (
        <div
          key={cat.id}
          onClick={() => onSelectCategory(cat.name)}
          className={`cursor-pointer p-2 rounded hover:bg-orange-100 ${
            selectedCategory === cat.name ? "bg-orange-200 font-semibold" : ""
          }`}
        >
          {cat.name}
        </div>
      ))}
    </div>
  );
}
