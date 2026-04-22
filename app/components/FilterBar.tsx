"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const categories = ["All", "Tops", "Bottoms", "Outerwear"];

export default function FilterBar() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest First");

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
       
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-2.5 rounded-[4px] text-sm font-medium transition-all duration-200 ${activeCategory === category
                  ? "bg-[#5D5D5D] text-white"
                  : "bg-[#EBEBEB] text-[#5D5D5D] hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        
        <div className="flex items-center gap-4 self-end md:self-auto">
          <span className="text-[11px] tracking-[0.15em] text-[#888888] font-semibold uppercase">
            Sort by:
          </span>
          <div className="relative">
            <select 
              className="appearance-none bg-transparent pr-8 py-1 text-sm font-bold text-[#333333] hover:text-black transition-colors focus:outline-none cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Newest First</option>
            
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-4 pointer-events-none text-[#333333]" />
          </div>
        </div>
      </div>
    </div>
  );
}
