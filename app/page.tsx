import { MdOutlineEmail } from "react-icons/md";
import connectDB from "@/lib/db";
import Product from "@/app/models/Product";
import BannerCarousel from "./components/BannerCarousel";
import ProductCard from "./components/ProductCard";

import SecondaryBanners from "./components/SecondaryBanners";

export const revalidate = 0; // Disable caching to always show latest products on home page

async function getNewArrivals() {
  try {
    await connectDB();
    const products = await Product.find({ isNewArrival: true }).limit(8).lean();
    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error("Error fetching new arrivals:", error);
    return [];
  }
}

export default async function Home() {
  const newArrivals = await getNewArrivals();

  return (
    <div className="w-full mt-4">
      {/* Centered Top Content */}
      <div className="max-w-6xl mx-auto px-4">
        <BannerCarousel />
        
        <div className="">
          <h2 className="text-3xl text-black font-bold text-center mt-8">Explore Our Collection</h2>
          <p className="text-center mt-3">Limited drop.Maximum impact.</p>
        </div>

        <SecondaryBanners />

        <div className="text-center">
          <h1 className="text-3xl text-black font-bold text-center mt-8">New Arrivals</h1>
          <p className="mt-3">Freshly droped.Limited Stock.</p>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-6 sm:py-8 lg:max-w-7xl">
            {newArrivals.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {newArrivals.map((product: any) => (
                  <ProductCard 
                    key={product._id} 
                    id={product._id} 
                    name={product.name} 
                    description={product.description} 
                    price={product.price} 
                    imageUrl={product.imageUrl} 
                  />
                ))}
              </div>
            ) : (
               <p className="text-center text-gray-500 w-full py-10 col-span-full">No new arrivals found. Please seed the database.</p>
            )}
          </div>
        </div>
      </div>

      {/* Truly Full-width Static Offer Banner */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-14 overflow-hidden">
        <img 
          src="/assets/banners/0fferbanner.png" 
          alt="Exclusive Offer" 
          className="w-full h-auto object-cover block" 
        />
      </div>

      {/* Newsletter Section */}
      <section className="w-full px-4 mt-10 mb-10">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left leading-tight">
            STAY UP TO DATE ABOUT <br className="hidden md:block" />
            OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <div className="relative">
              <MdOutlineEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="pl-9 pr-4 py-2 rounded-full bg-gray-100 text-sm outline-none w-full md:w-72"
              />
            </div>
            <button className="bg-white text-gray-800 text-sm font-medium py-2 rounded-full hover:bg-gray-200 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}