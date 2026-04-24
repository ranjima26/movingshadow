
'use client'

import { useCart } from "@/app/context/CartContext"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { HiOutlineTrash, HiMinus, HiPlus, HiArrowLeft } from "react-icons/hi"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart()

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-full p-8 mb-6 inline-block">
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Explore our collection and find something you love!</p>
          <Link 
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Shopping
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
            <Link href="/shop" className="p-2 hover:bg-gray-100 rounded-full transition-colors group">
                <HiArrowLeft className="text-2xl text-gray-600 group-hover:text-black" />
            </Link>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
            <span className="ml-2 text-gray-400 font-medium">({cartCount} items)</span>
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7 xl:col-span-8">
            <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>

            <ul role="list" className="border-t border-b border-gray-100 divide-y divide-gray-100">
              <AnimatePresence mode="popLayout">
                {cart.map((product) => (
                  <motion.li 
                    key={product._id} 
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex py-8 sm:py-10"
                  >
                    <div className="shrink-0">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="size-24 rounded-2xl object-cover object-center sm:size-32 bg-gray-50 border border-gray-50 shadow-sm"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-lg">
                              <a href={`/shop/${product._id}`} className="font-bold text-gray-800 hover:text-black transition-colors">
                                {product.name}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm text-gray-500 gap-x-4">
                            {product.color && <p className="border-r border-gray-200 pr-4">Color: <span className="text-gray-900 font-medium">{product.color}</span></p>}
                            {product.size && <p>Size: <span className="text-gray-900 font-medium">{product.size}</span></p>}
                          </div>
                          <p className="mt-2 text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9">
                          <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-1 w-fit">
                            <button
                              onClick={() => updateQuantity(product._id, product.quantity - 1)}
                              className="p-1.5 hover:bg-white rounded-lg transition-all text-gray-500 hover:text-black disabled:opacity-30"
                              disabled={product.quantity <= 1}
                            >
                              <HiMinus className="size-4" />
                            </button>
                            <span className="text-sm font-bold w-8 text-center">{product.quantity}</span>
                            <button
                              onClick={() => updateQuantity(product._id, product.quantity + 1)}
                              className="p-1.5 hover:bg-white rounded-lg transition-all text-gray-500 hover:text-black"
                            >
                              <HiPlus className="size-4" />
                            </button>
                          </div>

                          <div className="absolute right-0 top-0">
                            <button
                              onClick={() => removeFromCart(product._id)}
                              type="button"
                              className="p-2 text-gray-400 hover:text-red-500 transition-colors bg-gray-50 hover:bg-red-50 rounded-xl group"
                            >
                              <span className="sr-only">Remove</span>
                              <HiOutlineTrash className="size-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                        <svg className="h-5 w-5 shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span>In stock and ready to ship</span>
                      </p>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-3xl bg-gray-50/50 border border-gray-100 px-6 py-8 sm:p-10 lg:col-span-5 xl:col-span-4 lg:mt-0 shadow-sm sticky top-28"
          >
            <h2 id="summary-heading" className="text-xl font-bold text-gray-900">Order Summary</h2>

            <dl className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-bold text-gray-900">₹{cartTotal.toLocaleString()}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a href="#" className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </dt>
                <dd className="text-sm font-bold text-green-600 uppercase tracking-wider text-[10px]">Calculated at checkout</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a href="#" className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how tax is calculated</span>
                    <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </dt>
                <dd className="text-sm font-bold text-gray-900">₹0.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-lg font-extrabold text-gray-900">Order total</dt>
                <dd className="text-xl font-black text-gray-900">₹{cartTotal.toLocaleString()}</dd>
              </div>
            </dl>

            <div className="mt-10">
              <button
                type="button"
                className="w-full rounded-full border border-transparent bg-black px-4 py-4 text-base font-bold text-white shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
                <p>
                    or{' '}
                    <Link href="/shop" className="font-bold text-black hover:underline underline-offset-4">
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </p>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
                <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="size-6 rounded-full bg-gray-200 border-2 border-white" />
                        ))}
                    </div>
                    <p>Joined by 10,000+ happy customers</p>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}