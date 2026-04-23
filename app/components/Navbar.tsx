"use client"

import Link from "next/link";
import { useState } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { AuthModal } from "./AuthModal";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const pathname = usePathname();
    const { data: session } = useSession();

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex md:hidden items-center justify-between py-3">
                    <Link href="/">
                        <img
                            src="/assets/banners/logo.png"
                            alt="Logo"
                            height={100} width={100}
                            className="h-8 w-auto object-contain"
                        />
                    </Link>
                    <div className="flex items-center space-x-3">
                        <PiShoppingCartBold className="text-2xl cursor-pointer" />
                        {session ? (
                            <button onClick={() => signOut()} className="text-xl cursor-pointer" title="Sign Out">
                                <FaSignOutAlt />
                            </button>
                        ) : (
                            <FaUserAlt onClick={() => setIsAuthModalOpen(true)} className="text-xl cursor-pointer" />
                        )}
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none">
                            {menuOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </div>

                <div className="hidden md:flex justify-center py-4">
                    <Link href="/">
                        <img
                            src="/assets/banners/logo.png"
                            alt="Logo"
                            height={180} width={180}
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex justify-between items-center h-14 border-t border-gray-50">
                    <div className="flex items-center space-x-6">
                        <Link
                            href="/"
                            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${pathname === "/" ? "bg-gray-900 text-white shadow-lg" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${pathname === "/shop" ? "bg-gray-900 text-white shadow-lg" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            Shop
                        </Link>
                        <Link
                            href="/contact"
                            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${pathname === "/contact" ? "bg-gray-900 text-white shadow-lg" : "text-gray-600 hover:text-black"
                                }`}
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-gray-200 rounded-full px-4 py-1.5 text-sm outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-900 transition-all w-48 group-hover:w-64"
                            />
                        </div>
                        <div className="flex items-center space-x-5 ml-4">
                            <PiShoppingCartBold className="text-2xl cursor-pointer hover:text-gray-500 transition" />
                            {session ? (
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-gray-700 hidden lg:inline">Hello, {session.user?.name?.split(' ')[0]}</span>
                                    <button onClick={() => signOut()} className="text-xl cursor-pointer hover:text-red-500 transition" title="Sign Out">
                                        <FaSignOutAlt />
                                    </button>
                                </div>
                            ) : (
                                <div onClick={() => setIsAuthModalOpen(true)} className="flex items-center gap-2 text-gray-700 hover:text-black transition cursor-pointer">
                                    <FaUserAlt className="text-xl" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden flex flex-col space-y-3 pb-6 pt-2 border-t border-gray-100">
                        <div className="px-1">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-900/5 focus:border-gray-900 w-full bg-gray-50"
                            />
                        </div>
                        <Link href="/" className={`px-2 py-2 rounded-lg transition-colors ${pathname === "/" ? "bg-gray-900 text-white font-medium" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link href="/shop" className={`px-2 py-2 rounded-lg transition-colors ${pathname === "/shop" ? "bg-gray-900 text-white font-medium" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setMenuOpen(false)}>Shop</Link>
                        <Link href="/contact" className={`px-2 py-2 rounded-lg transition-colors ${pathname === "/contact" ? "bg-gray-900 text-white font-medium" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setMenuOpen(false)}>Contact</Link>
                        {session ? (
                             <button onClick={() => { signOut(); setMenuOpen(false); }} className="px-2 py-2 text-left text-red-600 font-medium hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                                <FaSignOutAlt /> Logout
                             </button>
                        ) : (
                            <button onClick={() => { setIsAuthModalOpen(true); setMenuOpen(false); }} className="px-2 py-2 text-left text-gray-900 font-bold hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2">
                                <FaUserAlt /> Login / Sign Up
                            </button>
                        )}
                    </div>
                )}
            </div>
            <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        </nav>
    );
}


