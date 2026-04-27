"use client";

import { useState } from "react";
import { 
    MdPerson, 
    MdShoppingBag, 
    MdLocationOn, 
    MdLogout, 
    MdEdit,
    MdEmail,
    MdPhone,
    MdCalendarToday,
    MdArrowForwardIos
} from "react-icons/md";
import { motion } from "motion/react";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("orders");

    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+91 98765 43210",
        joinDate: "January 2024",
        orders: 12,
        address: "Kochi, Kerala, India"
    };

    const recentOrders = [
        { id: "#ORD-7721", date: "24 Apr 2024", total: "₹899", status: "Delivered", items: 2 },
        { id: "#ORD-6542", date: "12 Mar 2024", total: "₹1,250", status: "Processing", items: 1 },
        { id: "#ORD-5431", date: "05 Feb 2024", total: "₹450", status: "Delivered", items: 3 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header Hero */}
            <div className="bg-white border-b border-gray-200 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative">
                            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-4 border-gray-100 overflow-hidden shadow-inner">
                                <MdPerson className="text-gray-400 text-7xl" />
                            </div>
                            <button className="absolute bottom-1 right-1 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-all shadow-lg border-2 border-white">
                                <MdEdit className="text-sm" />
                            </button>
                        </div>
                        
                        <div className="text-center md:text-left space-y-2">
                            <h1 className="text-3xl font-black text-gray-900">{user.name}</h1>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 text-sm font-medium">
                                <span className="flex items-center gap-1"><MdEmail /> {user.email}</span>
                                <span className="flex items-center gap-1"><MdCalendarToday /> Joined {user.joinDate}</span>
                            </div>
                            
                            <div className="flex gap-4 pt-4 justify-center md:justify-start">
                                <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Orders</p>
                                    <p className="text-xl font-black text-gray-800">{user.orders}</p>
                                </div>
                                <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Member Points</p>
                                    <p className="text-xl font-black text-gray-800">450</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="bg-white rounded-[30px] p-6 border border-gray-100 shadow-sm sticky top-24">
                            <nav className="space-y-2">
                                <button 
                                    onClick={() => setActiveTab("orders")}
                                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${activeTab === 'orders' ? 'bg-black text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <MdShoppingBag className="text-xl" />
                                        <span className="font-bold">My Orders</span>
                                    </div>
                                    <MdArrowForwardIos className="text-xs" />
                                </button>

                                <button 
                                    onClick={() => setActiveTab("profile")}
                                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${activeTab === 'profile' ? 'bg-black text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <MdPerson className="text-xl" />
                                        <span className="font-bold">Profile Details</span>
                                    </div>
                                    <MdArrowForwardIos className="text-xs" />
                                </button>

                                <button 
                                    onClick={() => setActiveTab("address")}
                                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${activeTab === 'address' ? 'bg-black text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <MdLocationOn className="text-xl" />
                                        <span className="font-bold">Addresses</span>
                                    </div>
                                    <MdArrowForwardIos className="text-xs" />
                                </button>



                                <div className="pt-4 mt-4 border-t border-gray-100">
                                    <button className="w-full flex items-center gap-3 p-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all font-bold">
                                        <MdLogout className="text-xl" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        <motion.div 
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-gray-200 rounded-[30px] p-8 md:p-10 border border-white/5"
                        >
                            {activeTab === "orders" && (
                                <div className="space-y-8">
                                    <h2 className="text-2xl font-black text-gray-800">Recent Orders</h2>
                                    <div className="space-y-4">
                                        {recentOrders.map((order) => (
                                            <div key={order.id} className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 hover:shadow-md transition-all group">
                                                <div className="flex items-center gap-6 w-full md:w-auto">
                                                    <div className="bg-gray-100 p-4 rounded-2xl">
                                                        <MdShoppingBag className="text-gray-400 text-2xl" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-black text-gray-800">{order.id}</h3>
                                                        <p className="text-gray-400 text-xs font-bold">{order.date} • {order.items} Items</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-10">
                                                    <div className="text-right">
                                                        <p className="text-lg font-black text-gray-900">{order.total}</p>
                                                        <span className={`text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                                            {order.status}
                                                        </span>
                                                    </div>
                                                    <button className="bg-gray-100 p-3 rounded-xl group-hover:bg-black group-hover:text-white transition-all">
                                                        <MdArrowForwardIos className="text-sm" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === "profile" && (
                                <div className="space-y-8">
                                    <h2 className="text-2xl font-black text-gray-800">Profile Details</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-gray-500 text-xs font-bold uppercase ml-1">Full Name</label>
                                            <input type="text" defaultValue={user.name} className="w-full bg-white border border-gray-100 p-4 rounded-2xl outline-none focus:border-black transition-all font-bold text-gray-800" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-gray-500 text-xs font-bold uppercase ml-1">Email Address</label>
                                            <input type="email" defaultValue={user.email} className="w-full bg-white border border-gray-100 p-4 rounded-2xl outline-none focus:border-black transition-all font-bold text-gray-800" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-gray-500 text-xs font-bold uppercase ml-1">Phone Number</label>
                                            <input type="text" defaultValue={user.phone} className="w-full bg-white border border-gray-100 p-4 rounded-2xl outline-none focus:border-black transition-all font-bold text-gray-800" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-gray-500 text-xs font-bold uppercase ml-1">Location</label>
                                            <input type="text" defaultValue={user.address} className="w-full bg-white border border-gray-100 p-4 rounded-2xl outline-none focus:border-black transition-all font-bold text-gray-800" />
                                        </div>
                                    </div>
                                    <button className="bg-black text-white px-10 py-4 rounded-2xl font-black hover:bg-gray-800 transition-all shadow-xl">
                                        Save Changes
                                    </button>
                                </div>
                            )}

                            {/* Address, Settings tabs would follow a similar pattern */}
                            {activeTab === "address" && (
                                <div className="text-center py-20">
                                    <MdLocationOn className="text-gray-300 text-6xl mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-700">Manage Your Addresses</h3>
                                    <p className="text-gray-500 mt-2">Saved addresses for faster checkout will appear here.</p>
                                    <button className="mt-8 bg-black text-white px-8 py-3 rounded-xl font-bold">Add New Address</button>
                                </div>
                            )}

                            
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}