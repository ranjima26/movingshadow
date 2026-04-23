"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "motion/react";

interface ProductOptionsProps {
  productData: any;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductOptions({ productData }: ProductOptionsProps) {
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes[2]); // Default to M or similar
  const { addToCart } = useCart();

  const handleAddToBag = () => {
    addToCart(productData, 1, selectedColor.name, selectedSize.name);
  };

  return (
    <div className="mt-4 lg:row-span-3 lg:mt-0">
      <h2 className="sr-only">Product information</h2>
      <p className="text-3xl tracking-tight text-gray-900 font-bold">₹{productData.price}</p>

      <form className="mt-10">
        {/* Colors */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Color</h3>

          <fieldset aria-label="Choose a color" className="mt-4">
            <div className="flex items-center gap-x-3">
              {productData.colors.map((color: any) => (
                <button
                  key={color.id}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={classNames(
                    color.classes,
                    selectedColor.id === color.id ? "ring-2 ring-gray-900 ring-offset-2" : "",
                    "size-8 rounded-full border border-black/10 transition-all"
                  )}
                  title={color.name}
                />
              ))}
            </div>
          </fieldset>
        </div>

        {/* Sizes */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Size</h3>
            <button type="button" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Size guide
            </button>
          </div>

          <fieldset aria-label="Choose a size" className="mt-4">
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-8 lg:grid-cols-4">
              {productData.sizes.map((size: any) => (
                <button
                  key={size.name}
                  type="button"
                  disabled={!size.inStock}
                  onClick={() => setSelectedSize(size)}
                  className={classNames(
                    size.inStock
                      ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                      : "cursor-not-allowed bg-gray-50 text-gray-200",
                    selectedSize.name === size.name ? "ring-2 ring-gray-900" : "",
                    "group relative flex items-center justify-center rounded-xl border border-gray-200 py-3 px-4 text-sm font-bold uppercase hover:bg-gray-50 focus:outline-none transition-all"
                  )}
                >
                  <span>{size.name}</span>
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleAddToBag}
            className="flex w-full items-center justify-center rounded-xl border border-transparent bg-gray-900 px-8 py-3.5 text-base font-bold text-white hover:bg-black transition-all shadow-lg"
          >
            Add to bag
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className="flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-base font-bold text-gray-900 hover:bg-gray-50 transition-all"
          >
            Buy Now
          </motion.button>
        </div>
      </form>
    </div>
  );
}
