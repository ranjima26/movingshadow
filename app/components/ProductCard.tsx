"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ id, name, description, price, imageUrl }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 transition-all shadow-md group-hover:shadow-xl">
        <img
          alt={name}
          src={imageUrl}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between px-2">
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            <Link href={`/shop/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-gray-500 line-clamp-1">{description}</p>
        </div>
        <p className="text-sm font-bold text-gray-900">₹{price}</p>
      </div>
    </motion.div>
  );
}
