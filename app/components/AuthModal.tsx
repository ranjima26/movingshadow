"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User as UserIcon, LogIn } from "lucide-react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Mock loading state for UI demonstration
    setTimeout(() => {
      setLoading(false);
      onClose(); // Automatically closes after simulated loading
    }, 1500);
  };

  const handleGoogleSignIn = async () => {
    // Mock Google Sign In for UI demonstration
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-gray-900/40 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6">
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative w-full max-w-md bg-white border border-gray-200 rounded-[24px] md:rounded-[32px] overflow-y-auto max-h-[95vh] sm:max-h-[90vh] shadow-2xl scrollbar-hide flex flex-col"
                >
                  <Dialog.Title className="sr-only">Authentication</Dialog.Title>
                  <Dialog.Description className="sr-only">Login or register</Dialog.Description>
                  
                  {/* Header */}
                  <div className="p-6 md:p-8 pb-5 md:pb-6 text-center border-b border-gray-100 bg-gray-50/50 shrink-0">
                    <Dialog.Close asChild>
                      <button className="absolute right-5 top-5 md:right-6 md:top-6 text-gray-400 hover:text-gray-900 transition-colors bg-gray-100 rounded-full p-1.5 md:p-1.5 md:bg-transparent md:hover:bg-gray-100">
                        <X size={20} className="md:w-5 md:h-5" />
                      </button>
                    </Dialog.Close>
                    <h2 className="font-['Cookie'] text-4xl md:text-5xl text-gray-900 mb-2 mt-2 md:mt-0">
                      {isLogin ? "Welcome Back" : "Join Us"}
                    </h2>
                    <p className="font-['Roboto'] text-xs md:text-sm text-gray-500 px-2">
                      {isLogin
                        ? "Login to access your orders and loved products."
                        : "Create an account to start your journey."}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1 overflow-y-auto scrollbar-hide">
                    {error && (
                      <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm text-center">
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {!isLogin && (
                        <div>
                          <label className="text-xs text-gray-600 uppercase font-bold tracking-wider mb-2 block">
                            Name
                          </label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                              <UserIcon size={18} />
                            </div>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="John Doe"
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm md:text-base"
                            />
                          </div>
                        </div>
                      )}

                      <div>
                        <label className="text-xs text-gray-600 uppercase font-bold tracking-wider mb-2 block">
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Mail size={18} />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm md:text-base"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-gray-600 uppercase font-bold tracking-wider mb-2 block">
                          Password
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Lock size={18} />
                          </div>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="••••••••"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all text-sm md:text-base"
                          />
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className="w-full mt-6 md:mt-8 flex items-center justify-center gap-2 bg-gray-900 text-white py-3.5 rounded-xl font-bold uppercase tracking-wide hover:bg-black transition-colors shadow-lg shadow-gray-900/10 disabled:opacity-70 text-sm md:text-base"
                      >
                        {loading ? "Please wait..." : isLogin ? "Sign In" : "Sign Up"}
                        {!loading && <LogIn size={18} />}
                      </motion.button>
                    </form>

                    <div className="relative my-6 md:my-8">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-[10px] md:text-xs text-gray-400 bg-white px-4 font-['Roboto'] uppercase tracking-wider mx-auto w-max">
                        Or continue with
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleGoogleSignIn}
                      className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 py-3.5 rounded-xl font-semibold shadow-sm hover:bg-gray-50 transition-colors text-sm md:text-base"
                    >
                      <Image
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google"
                        width={20}
                        height={20}
                      />
                      Google Sign In
                    </motion.button>

                    <div className="mt-6 md:mt-8 text-center pb-2">
                      <p className="text-gray-500 text-xs md:text-sm">
                        {isLogin
                          ? "Don't have an account? "
                          : "Already have an account? "}
                        <button
                          type="button"
                          onClick={() => {
                            setIsLogin(!isLogin);
                            setError("");
                          }}
                          className="text-gray-900 font-bold hover:underline ml-1"
                        >
                          {isLogin ? "Sign up" : "Log in"}
                        </button>
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100/50 blur-[50px] rounded-full pointer-events-none" />
                </motion.div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}