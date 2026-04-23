import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-gray-600 mb-4">Last updated: April 23, 2026</p>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Use of Service</h2>
          <p>By accessing and using Moving Shadow, you agree to comply with these terms and all applicable laws and regulations.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
          <p>All content on this site, including designs, text, and images, is the property of Moving Shadow and is protected by copyright laws.</p>
        </section>
      </div>
    </div>
  );
}
