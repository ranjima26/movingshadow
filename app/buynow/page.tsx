"use client";

import { useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdPayment, MdLocalShipping, MdCreditCard, MdShield } from "react-icons/md";

export default function BuyNow() {
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

    return (
        <>
            <div className="flex flex-col items-center text-center pt-16 md:pt-20 px-4">
                <h1 className="text-3xl text-gray-700 font-semibold">Checkout</h1>
                <p className="text-gray-500 text-sm mt-2">Cart › Shipping & Payment</p>
            </div>

            <div className="bg-gray-50 min-h-screen pb-20 pt-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* Left Column: Shipping & Payment */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Shipping Information */}
                            <div className="bg-gray-200 rounded-[30px] p-8 md:p-10 border border-white/5">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="bg-gray-400 p-3 rounded-full">
                                        <FaShippingFast className="text-gray-900 text-xl" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-700 tracking-tight">Shipping Information</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-gray-400 text-sm font-medium ml-1">Full Name</label>
                                        <div className="relative">
                                            <input type="text" placeholder="John Doe" className="w-full bg-gray-100 border border-white/5 text-gray-800 p-4 pl-12 rounded-2xl outline-none focus:border-[#8CFC8C]/30 transition-all placeholder:text-gray-600" />
                                            <i className="fa-solid fa-user absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"></i>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-gray-400 text-sm font-medium ml-1">Email Address</label>
                                        <div className="relative">
                                            <input type="email" placeholder="john@example.com" className="w-full bg-gray-100 border border-white/5 text-gray-800 p-4 pl-12 rounded-2xl outline-none focus:border-[#8CFC8C]/30 transition-all placeholder:text-gray-600" />
                                            <i className="fa-solid fa-envelope absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-2">
                                    <label className="text-gray-400 text-sm font-medium ml-1">Phone Number</label>
                                    <div className="relative">
                                        <input type="text" placeholder="10 digit mobile number" className="w-full bg-gray-100 border border-white/5 text-gray-800 p-4 pl-12 rounded-2xl outline-none focus:border-[#8CFC8C]/30 transition-all placeholder:text-gray-600" />
                                        <i className="fa-solid fa-phone absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"></i>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-2">
                                    <label className="text-gray-400 text-sm font-medium ml-1">Delivery Address</label>
                                    <div className="relative">
                                        <input type="text" placeholder="House no, Building, Street name" className="w-full bg-gray-100 border border-white/5 text-gray-800 p-4 pl-12 rounded-2xl outline-none focus:border-[#8CFC8C]/30 transition-all placeholder:text-gray-600" />
                                        <i className="fa-solid fa-location-dot absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"></i>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                    <div className="space-y-2">
                                        <label className="text-gray-400 text-sm font-medium ml-1">City</label>
                                        <input type="text" placeholder="e.g. Kochi" className="w-full bg-gray-100 border border-white/5 text-gray-800 p-4 rounded-2xl outline-none focus:border-[#8CFC8C]/30 transition-all placeholder:text-gray-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-gray-400 text-sm font-medium ml-1">State</label>
                                        <input type="text" placeholder="e.g. Kerala" className="w-full bg-gray-100 border border-white/5 text-gray-800 p-4 rounded-2xl outline-none focus:border-[#8CFC8C]/30 transition-all placeholder:text-gray-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-gray-400 text-sm font-medium ml-1">Pin Code</label>
                                        <input type="text" placeholder="######" className="w-full bg-gray-100 border border-white/5 text-gray-800 p-4 rounded-2xl outline-none focus:border-[#8CFC8C]/30 transition-all placeholder:text-gray-600" />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method Section */}
                            <div className="bg-gray-200 rounded-[30px] p-8 md:p-10 border border-white/5">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="bg-gray-400 p-3 rounded-full">
                                        <MdPayment className="text-gray-900 text-xl" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-700 tracking-tight">Payment Method</h2>
                                </div>

                                <div className="space-y-4">
                                    {/* Cash on Delivery */}
                                    <div
                                        onClick={() => setPaymentMethod('cod')}
                                        className="bg-white p-6 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-all shadow-sm"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="bg-gray-100 p-3 rounded-xl">
                                                <MdLocalShipping className="text-2xl text-gray-700" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800">Cash on Delivery</h3>
                                                <p className="text-gray-500 text-xs">Pay when you receive</p>
                                            </div>
                                        </div>
                                        <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${paymentMethod === 'cod' ? 'border-green-500' : 'border-gray-300'}`}>
                                            {paymentMethod === 'cod' && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                                        </div>
                                    </div>

                                    {/* Online Payment */}
                                    <div
                                        onClick={() => setPaymentMethod('online')}
                                        className="bg-white p-6 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-all shadow-sm"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="bg-gray-100 p-3 rounded-xl">
                                                <MdCreditCard className="text-2xl text-gray-700" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800">Online Payment</h3>
                                                <p className="text-gray-500 text-xs">Credit/Debit Card, UPI, Wallets</p>
                                            </div>
                                        </div>
                                        <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${paymentMethod === 'online' ? 'border-green-500' : 'border-gray-300'}`}>
                                            {paymentMethod === 'online' && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-black text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-xl">
                                {paymentMethod === 'cod' ? 'Place Order (COD)' : paymentMethod === 'online' ? 'Proceed to Online Payment' : 'Select Payment Method'} <span className="text-xl">›</span>
                            </button>
                        </div>

                        {/* Right Column: Summarised */}
                        <div className="lg:col-span-1 relative">
                            <div className="bg-gray-200 rounded-[30px] p-8 border border-gray-300 shadow-sm sticky top-32">
                                <h2 className="text-2xl font-bold text-gray-700 tracking-tight mb-4" >Summarised</h2>

                                <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-2xl mb-8 relative border border-white/50">
                                    <div className="relative">
                                        <img src="/assets/banners/shop2.png" alt="Product" className="w-16 h-16 object-cover rounded-xl" />
                                        <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">1</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-gray-800 font-bold">Linen Utility Jacket</h3>
                                        <p className="text-gray-500 text-xs">400g</p>
                                    </div>
                                    <span className="text-gray-800 font-bold">₹300</span>
                                </div>

                                <div className="space-y-4 px-2">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span className="text-gray-800 font-bold">₹300</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span className="text-green-600 font-bold">Free</span>
                                    </div>
                                </div>

                                <div className="bg-gray-100 p-6 rounded-3xl mt-8 flex justify-between items-center border border-white/50">
                                    <span className="text-gray-700 text-lg font-bold">Total Amount</span>
                                    <span className="text-gray-900 text-3xl font-black">₹300</span>
                                </div>

                                <div className="mt-8 flex gap-3 text-gray-500 text-[11px] leading-tight px-2 bg-white/50 p-4 rounded-2xl border border-white/20">
                                    <MdShield className="text-gray-400 text-2xl" />
                                    <p>Your payment is secure. We use industry-standard encryption to protect your data.</p>
                                </div>

                                <button className="w-full bg-black text-white py-5 rounded-2xl mt-8 font-black text-lg hover:bg-gray-800 transition-all shadow-lg">
                                    {paymentMethod === 'cod' ? 'Place Order (COD)' : paymentMethod === 'online' ? 'Proceed to Online Payment' : 'Proceed to Payment'}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}