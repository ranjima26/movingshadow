"use client";

import { FiChevronDown } from "react-icons/fi";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";

const categories = ["All", "Tops", "Bottoms", "Outerwear"];

function FilterBarContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") || "All";
  const sortBy = searchParams.get("sort") || "Newest First";

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    // If we change category, we probably want to stay on page 1 (if pagination existed)
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
       
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => updateFilters("category", category)}
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
              onChange={(e) => updateFilters("sort", e.target.value)}
            >
              <option value="Newest First">Newest First</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
            <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-4 pointer-events-none text-[#333333]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FilterBar() {
  return (
    <Suspense fallback={<div className="h-20 w-full max-w-5xl mx-auto px-4 mt-8 animate-pulse bg-gray-100 rounded-lg"></div>}>
      <FilterBarContent />
    </Suspense>
  );
}
