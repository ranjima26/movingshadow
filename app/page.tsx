
"use client"
import { MdOutlineEmail } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-4">
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
      <div className="">
        <h2 className="text-3xl text-black font-bold text-center mt-8">Shop By Category</h2>
        <p className="text-center mt-3">Limited drop.Maximum impact.</p>

      </div>

      <section>

        <div>
          <img src="/assets/banners/Group-72.png" alt="" />
        </div>
      </section>

      <section>

        <div>
          <img src="/assets/banners/section-2.png" alt="" />
        </div>
      </section>


      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div>
          <img src="/assets/banners/0fferbanner.png" alt="Offer Banner" className="w-full" />
        </div>
      </section>


      <div className="text-center">
        <h1 className="text-3xl text-black font-bold text-center mt-8">New Arrivals</h1>
        <p className="mt-3">Freshly droped.Limited Stock.</p>
      </div>


      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">


          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <img src="/assets/banners/Background-1.png" alt="Front of men's Basic Tee in black." />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Essential Polo
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Organic Cotton</p>
                </div>
                <p className="text-sm font-medium text-gray-900">₹3,499</p>
              </div>
            </div>
            <div className="group relative">
              <img src="/assets/banners/Background-3.png" alt="Front of men's Basic Tee in white." />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Oversized Hoodie
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">arench Terry</p>
                </div>
                <p className="text-sm font-medium text-gray-900">₹5,999</p>
              </div>
            </div>
            <div className="group relative">
              <img src="assets/banners/Background-2.png" alt="Front of men's Basic Tee in dark gray." />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Straight Denim
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">selvedge ainish</p>
                </div>
                <p className="text-sm font-medium text-gray-900">₹7,499</p>
              </div>
            </div>
            <div className="group relative">
              <img src="assets/banners/shop2.png" alt="Front of men's Artwork Tee in peach." />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Linene Utility Jacket
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Natural aiber</p>
                </div>
                <p className="text-sm font-medium text-gray-900">₹8,999</p>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">


          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <img src="/assets/banners/Background-1.png" alt="Front of men's Basic Tee in black." />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Essential Polo
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Organic Cotton</p>
                </div>
                <p className="text-sm font-medium text-gray-900">₹3,499</p>
              </div>
            </div>
            <div className="group relative">
              <img src="/assets/banners/Background-3.png" alt="Front of men's Basic Tee in white." />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Oversized Hoodie
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">arench Terry</p>
                </div>
                <p className="text-sm font-medium text-gray-900">₹5,999</p>
              </div>
            </div>
            <div className="group relative">
              <img src="assets/banners/Background-2.png" alt="Front of men's Basic Tee in dark gray." />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Straight Denim
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">selvedge ainish</p>
                </div>
                <p className="text-sm font-medium text-gray-900">₹7,499</p>
              </div>
            </div>
            <div className="group relative">
              <img src="assets/banners/shop2.png" alt="Front of men's Artwork Tee in peach." />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Linene Utility Jacket
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Natural aiber</p>
                </div>
                <p className="text-sm font-medium text-gray-900">₹8,999</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full px-4 mt-10">
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