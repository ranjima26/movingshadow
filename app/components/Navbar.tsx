"use client"

import Link from "next/link";
import { useState } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex md:hidden items-center justify-between py-3">
                    <img
                        src="/assets/banners/logo.png"
                        alt="Logo"
                        height={200} width={200}
                    />
                    <div className="flex items-center space-x-3">
                        <PiShoppingCartBold className="text-2xl cursor-pointer" />
                        <FaUserAlt className="text-xl cursor-pointer" />
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none">
                            {menuOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </div>

                <div className="hidden md:flex justify-center mt-7">
                    <img
                        src="/assets/banners/logo.png"
                        alt="Logo"
                        height={250} width={250}
                    />
                </div>




                <div className="hidden md:flex justify-between items-center h-14">
                    <div className="flex items-center space-x-6   p-1 rounded-full">
                        <Link
                            href="/home"
                            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${pathname === "/home" ? "bg-white shadow text-black" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${pathname === "/shop" ? "bg-white shadow text-black" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            Shop
                        </Link>
                        <Link
                            href="/contact"
                            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${pathname === "/contact" ? "bg-white shadow text-black" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="flex items-center space-x-3">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border rounded-full shadow-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-gray-300"
                        />
                        <PiShoppingCartBold className="text-2xl cursor-pointer hover:text-gray-500 transition" />
                        <FaUserAlt className="text-xl cursor-pointer hover:text-gray-500 transition" />
                    </div>
                </div>


                {menuOpen && (
                    <div className="md:hidden flex flex-col space-y-3 pb-4 pt-2 border-t">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-300 w-full"
                        />
                        <Link href="/home" className={`py-1 transition-colors ${pathname === "/home" ? "text-black font-bold" : "text-gray-700 hover:text-black"}`} onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link href="/shop" className={`py-1 transition-colors ${pathname === "/shop" ? "text-black font-bold" : "text-gray-700 hover:text-black"}`} onClick={() => setMenuOpen(false)}>Shop</Link>
                        <Link href="/contact" className={`py-1 transition-colors ${pathname === "/contact" ? "text-black font-bold" : "text-gray-700 hover:text-black"}`} onClick={() => setMenuOpen(false)}>Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
