import React from "react";

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-gray-600 mb-4">Last updated: April 23, 2026</p>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Return Eligibility</h2>
          <p>At Moving Shadow, we want you to be completely satisfied with your purchase. You may return any item within 30 days of receipt, provided it is in its original condition, unworn, and with all tags attached.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Refund Process</h2>
          <p>Once we receive and inspect your return, we will process your refund back to your original payment method. Please allow 5-10 business days for the credit to appear on your statement.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Exchanges</h2>
          <p>We offer free exchanges for size or color variations. Please contact our support team to initiate an exchange.</p>
        </section>
      </div>
    </div>
  );
}
