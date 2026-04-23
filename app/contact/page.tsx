"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { CiShare2 } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { BsFilePlay } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState<"loading" | "success" | "error" | null>(null);
    const [errorMsg, setErrorMsg] = useState("");

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (!res.ok) {
                setErrorMsg(data.error || "Something went wrong.");
                setStatus("error");
            } else {
                setStatus("success");
                setForm(initialForm);
            }
        } catch (err) {
            setErrorMsg("Network error. Please try again.");
            setStatus("error");
        }
    }

    return (
        <section className="bg-gray-50 pb-20">

            <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                {/* Left — Info */}
                <div>
                    <h1 className="text-4xl md:text-5xl text-black font-bold">Contact Us</h1>
                    <p className="mb-8 mt-4 text-gray-500 text-sm md:text-base">
                        We'd love to hear from you. Reach out to our concierge team for bespoke inquiries or support.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-gray-400 font-semibold text-xs tracking-widest">EMAIL US</h2>
                            <p className="text-gray-700 mt-1">hello@movingshadow.com</p>
                        </div>
                        <div>
                            <h2 className="text-gray-400 font-semibold text-xs tracking-widest">CALL US</h2>
                            <p className="text-gray-700 mt-1">+1 (555) 000-0000</p>
                        </div>
                        <div>
                            <h2 className="text-gray-400 font-semibold text-xs tracking-widest">VISIT US</h2>
                            <p className="text-gray-700 mt-1">742 Rue Saint-Honore, Paris, France</p>

                            <div className="flex space-x-4 mt-4 text-2xl text-gray-700">
                                <a href="#"><CiShare2 className="rounded-full bg-gray-200 p-1 hover:bg-gray-300 transition" /></a>
                                <a href="#"><CiCamera className="rounded-full bg-gray-200 p-1 hover:bg-gray-300 transition" /></a>
                                <a href="#"><BsFilePlay className="rounded-full bg-gray-200 p-1 hover:bg-gray-300 transition" /></a>
                            </div>

                            {/* Map */}
                            <div className="w-full mt-6 h-56 md:h-64 rounded-3xl bg-gray-400 overflow-hidden relative shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.4705492364888!2d2.3209213763063166!3d48.86830567133347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e32cf2d4a0b%3A0x5e87d3da1b07ab5!2s742%20Rue%20Saint-Honor%C3%A9%2C%2075008%20Paris%2C%20France!5e0!3m2!1sen!2sin!4v1776672454268!5m2!1sen!2sin"
                                    width="100%" height="100%" className="border-none w-full h-full" allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white px-5 py-2 rounded-full shadow-lg font-semibold text-sm text-gray-800 hover:bg-gray-100 transition"
                                    >
                                        View on Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right — Form */}
                <div className="bg-white shadow-xl rounded-3xl p-6 md:p-8 mt-8 lg:mt-0">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Send a Message</h2>

                    {status === "success" && (
                        <div className="mb-5 px-4 py-3 rounded-2xl bg-green-50 border border-green-200 text-green-700 text-sm">
                            ✓ Your message was sent! We'll get back to you soon.
                        </div>
                    )}
                    {status === "error" && (
                        <div className="mb-5 px-4 py-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">
                            ✕ {errorMsg}
                        </div>
                    )}

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs text-gray-500 font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full mt-2 text-black px-5 py-3 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-gray-300 transition text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full mt-2 text-black px-5 py-3 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-gray-300 transition text-sm"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs text-gray-500 font-medium">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full mt-2 text-black px-5 py-3 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-gray-300 transition text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-medium">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Inquiry about current collection"
                                    className="w-full mt-2 text-black px-5 py-3 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-gray-300 transition text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 font-medium">
                                Message <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your message here...."
                                rows={5}
                                required
                                className="w-full mt-2 text-black px-5 py-4 rounded-3xl bg-gray-100 outline-none focus:ring-2 focus:ring-gray-300 transition resize-none text-sm"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full sm:w-auto px-8 py-3 rounded-full bg-gray-800 hover:bg-black transition text-xs text-white font-bold tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? "SENDING..." : "SEND MESSAGE →"}
                        </button>
                    </form>
                </div>
            </div>

            <section className="px-6 py-12 md:py-16 bg-gray-200 flex justify-center">
                <div className="w-full max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Common inquiries</h2>
                    <div className="w-12 h-1 bg-gray-800 rounded-full mb-8"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Shipping and Lead times", text: "Our pieces are crafted upon order to maintain exclusivity. Standard lead time is 4–6 weeks for most collections." },
                            { title: "Bespoke Adjustments", text: "We offer minor alterations for sizing and material preference through our dedicated concierge service." },
                            { title: "Global Logistics", text: "International shipping is available to most major regions, handled by our premium logistics partners." },
                            { title: "Sustainability Ethos", text: "Our manufacturing process emphasizes ethical sourcing and low-impact production methods." },
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-3xl shadow-md p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-base md:text-xl font-semibold text-gray-700">{item.title}</h3>
                                    <p className="text-2xl font-light text-gray-400 cursor-pointer">+</p>
                                </div>
                                <p className="text-gray-600 text-sm md:text-base">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 mt-16 flex justify-center">
                <div className="w-full max-w-4xl bg-gray-800 rounded-3xl px-6 md:px-12 py-10 md:py-14">
                    <h2 className="text-3xl md:text-5xl text-white font-bold">Join the inner circle</h2>
                    <p className="text-gray-300 text-sm md:text-base mt-4 mb-8">
                        Be the first to experience our new collections and exclusive lookbook previews.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-6 py-4 rounded-full bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 text-sm"
                        />
                        <button
                            type="submit"
                            className="sm:w-auto px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-200 transition text-xs tracking-wide"
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </section>

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

        </section>
    );
}