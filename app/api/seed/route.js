import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Product from "@/app/models/Product";

const dummyProducts = [
  {
    name: "Essential Polo",
    description: "Organic Cotton",
    price: 3499,
    imageUrl: "/assets/banners/Background-1.png",
    category: "Tops",
    isNewArrival: true
  },
  {
    name: "Oversized Hoodie",
    description: "French Terry",
    price: 5999,
    imageUrl: "/assets/banners/Background-3.png",
    category: "Outerwear",
    isNewArrival: true
  },
  {
    name: "Straight Denim",
    description: "Selvedge Finish",
    price: 7499,
    imageUrl: "/assets/banners/Background-2.png",
    category: "Bottoms",
    isNewArrival: true
  },
  {
    name: "Linen Utility Jacket",
    description: "Natural Fiber",
    price: 8999,
    imageUrl: "/assets/banners/shop2.png",
    category: "Outerwear",
    isNewArrival: true
  }
];

export async function GET() {
  try {
    await connectDB();
    
    // Clear existing products
    await Product.deleteMany({});
    
    // Insert new dummy products
    const inserted = await Product.insertMany(dummyProducts);
    
    return NextResponse.json({ 
      success: true, 
      message: `Database seeded successfully with ${inserted.length} products.` 
    });
  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json({ error: "Failed to seed database" }, { status: 500 });
  }
}
