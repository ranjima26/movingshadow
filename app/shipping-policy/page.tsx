import React from "react";

export default function ShippingPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shipping Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-gray-600 mb-4">Last updated: April 23, 2026</p>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Shipping Times</h2>
          <p>Orders are typically processed within 1-2 business days. Domestic shipping takes 3-5 business days, while international shipping may take 7-14 business days.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Shipping Costs</h2>
          <p>We offer free domestic shipping on orders over ₹2000. For smaller orders, shipping costs are calculated at checkout based on your location.</p>
        </section>
      </div>
    </div>
  );
}
