import Link from "next/link";
import FilterBar from "../components/FilterBar";
import { MdOutlineEmail } from "react-icons/md";

export default function Shop() {
  return (
    <>

      <section className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden mt-4 relative">

        <img
          src="/assets/banners/shop1.png"
          alt=""
          className="w-full h-auto"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h5 className="text-sm md:text-base">Season 2024</h5>

          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            New Arrivals
          </h1>

          <p className="mt-3 text-sm md:text-base">
            Freshly dropped. Limited stock designed for the <br />
            moving spirit.
          </p>
        </div>
      </section>

      <div id="categories">
        <FilterBar />
      </div>


      <div className="bg-white mt-10">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:max-w-5xl lg:px-8">


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

      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:max-w-5xl lg:px-8">


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


      <div className="w-full max-w-4xl mx-auto mt-6">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-white">


          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-r from-gray-800 via-yellow-700 to-black opacity-90"></div>


            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:40px_40px] opacity-20"></div>
          </div>


          <div className="relative z-10 max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Flat 70% Sale
            </h1>

            <p className="text-sm text-gray-200 mb-6">
              Clearance of the previous collection. One time only.
            </p>
 
              <Link href="#categories" className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition inline-block">
                Shop Now
              </Link>
            
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
    </>
  );
}