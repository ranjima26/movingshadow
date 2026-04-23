"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function BannerCarousel() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="rounded-lg overflow-hidden"
    >
      {/* Slide 1 - Text on Right */}
      <SwiperSlide>
        <div className="relative h-[400px] bg-gray-900 text-white flex items-center">
          <img
            src="/assets/banners/slide2.png"
            alt="Promo 1"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 w-full flex justify-end pr-10 md:pr-20">
            <div className="text-right max-w-sm">
              <h2 className="text-3xl md:text-5xl font-bold">Flat 70% Sale</h2>
              <p className="mt-4 text-lg">Limited drop.Maximum impact.</p>
              <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 - Text on Left */}
      <SwiperSlide>
        <div className="relative h-[400px] bg-blue-900 text-white flex items-center">
          <img
            src="/assets/banners/slide-1.png"
            alt="Promo 2"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 w-full flex justify-start pl-10 md:pl-20">
            <div className="text-left max-w-sm">
              <h2 className="text-3xl md:text-5xl font-bold">The New Uniform</h2>
              <p className="mt-4 text-lg">Clean shilhouettes.No excess.</p>
              <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                Explore
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 - Text on Right */}
      <SwiperSlide>
        <div className="relative h-[400px] bg-gray-800 text-white flex items-center">
          <img
            src="/assets/banners/slide-3.png"
            alt="Promo 3"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 w-full flex justify-end pr-10 md:pr-20">
            <div className="text-right max-w-sm">
              <h2 className="text-3xl md:text-5xl font-bold">Built For Presence</h2>
              <p className="mt-4 text-lg">Elevated basics for daily Rotation.</p>
              <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
