
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
    return (

        <footer className="bg-gray-100 text-black-300 px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">


                <div className="md:col-span-2">

                    <img height={200} width={200} src="/assets/banners/logo.png" alt="" />
                    <p className="mt-2 text-sm text-gray-500">we have clothes that suit your <br />
                        style and which you're proud to <br />
                        wear. From women to men.</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#"><FaTwitter className="text-black" /></a>
                        <a href="#"><FaFacebook className="text-black" /></a>
                        <a href="#"><FaInstagram className="text-black" /></a>
                        <a href="#"><FaGithub className="text-black" /></a>

                    </div>
                </div>


                <div className="">
                    <h3 className="font-semibold mb-3">COMPANY</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/shop" className="hover:text-gray-500">Shop</Link></li>
                        <li><Link href="/contact" className="hover:text-gray-500">Contact</Link></li>

                    </ul>

                </div>
                <div>
                    <h3 className="font-semibold mb-3">HELP</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/contact" className="hover:text-gray-500">Customer Support</Link></li>
                        <li><Link href="/shipping-policy" className="hover:text-gray-500">Shipping Policy</Link></li>
                        <li><Link href="/refund-policy" className="hover:text-gray-500">Refund Policy</Link></li>
                        <li><Link href="/terms-and-conditions" className="hover:text-gray-500">Terms & Conditions</Link></li>
                        <li><Link href="/privacy-policy" className="hover:text-gray-500">Privacy Policy</Link></li>
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
                    <span className="bg-white text-black px-2 py-1 rounded"><img src="https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png" width={40} height={40} alt="" /></span>
                    <span className="bg-white text-black px-2 py-1 rounded"><img src="https://pngimg.com/d/paypal_PNG1.png" width={40} height={40} alt="" /></span>

                    <span className="bg-white text-black px-2 py-1 rounded"><img src="https://1000logos.net/wp-content/uploads/2023/03/Apple-Pay-logo.png" width={40} height={40} alt="" /></span>

                    <span className="bg-white text-black px-2 py-1 rounded"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1280px-Google_Pay_Logo.svg.png" width={40} height={40} alt="" /></span>

                </div>
            </div>

        </footer>

    )
}

