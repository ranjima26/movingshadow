"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const categories = ["All", "Tops", "Bottoms", "Outerwear"];

export default function FilterBar() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-2.5 rounded-[4px] text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-[#5D5D5D] text-white"
                  : "bg-[#EBEBEB] text-[#5D5D5D] hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-6 self-end md:self-auto">
          <span className="text-[11px] tracking-[0.15em] text-[#888888] font-semibold uppercase">
            Sort by:
          </span>
          <button className="flex items-center gap-2 text-sm font-bold text-[#333333] hover:text-black transition-colors">
            Newest First
            <FiChevronDown className="w-5 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
