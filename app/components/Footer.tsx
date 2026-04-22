
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (

        <footer className="bg-gray-100 text-black-300 px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">


                <div className="md:col-span-2">
                    {/* <h2 className="text-black text-xl font-bold">Moving Shadow</h2> */}
                    <img height={200} width={200} src="/assets/banners/logo.png" alt="" />
                    <p className="mt-2 text-sm text-gray-500">we have clothes that suit your <br />
                        style and which you're proud to <br />
                        wear. From women to men.</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#"><FaTwitter className="text-black" /></a>
                        <a href="#"><FaFacebook className="text-black"  /></a>
                        <a href="#"><FaInstagram className="text-black"  /></a>
                        <a href="#"><FaGithub className="text-black"  /></a>

                    </div>
                </div>

                {/* company */}
                <div className="">
                    <h3 className="font-semibold mb-3">COMPANY</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-gray-500">About</a></li>
                        <li><a href="#" className="hover:text-gray-500">Features</a></li>
                       <li><a href="#" className="hover:text-gray-500">Work</a></li>
                       <li><a href="#" className="hover:text-gray-500">Career</a></li>
                    </ul>

                </div>
                <div>
                    <h3 className="font-semibold mb-3">HELP</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-gray-500">Customer Support</a></li>
                        <li><a href="#" className="hover:text-gray-500">Delivery Details</a></li>
                       <li><a href="#" className="hover:text-gray-500">Terms & Conditions</a></li>
                       <li><a href="#" className="hover:text-gray-500">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">FAQ</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-gray-500">Account</a></li>
                        <li><a href="#" className="hover:text-gray-500">Manage Deliveries</a></li>
                       <li><a href="#" className="hover:text-gray-500">Orders</a></li>
                       <li><a href="#" className="hover:text-gray-500">Payment</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">RESOURCES</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-gray-500">Free eBooks</a></li>
                        <li><a href="#" className="hover:text-gray-500">Development Tutorial</a></li>
                       <li><a href="#" className="hover:text-gray-500">How to - Blog</a></li>
                       <li><a href="#" className="hover:text-gray-500">Youtube Playlist</a></li>
                    </ul>
                </div>

            </div>
           <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">Shop.co © 2000–2023, All Rights Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span className="bg-white text-black px-2 py-1 rounded">Visa</span>
          <span className="bg-white text-black px-2 py-1 rounded">PayPal</span>
          <span className="bg-white text-black px-2 py-1 rounded">Apple Pay</span>
          <span className="bg-white text-black px-2 py-1 rounded">Google Pay</span>
        </div>
      </div>

        </footer>

    )
}

