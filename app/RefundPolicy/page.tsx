
"use client";

import { motion } from "motion/react";
export default function RefundPolicy() {
    return (
        <>

            <h1 className="text-black text-4xl sm:text-5xl md:text-7xl font-bold text-center flex flex-col gap-2 md:gap-4 mt-10 md:mt-15">
                <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Return, Cancellation
                </motion.span>

                <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    & Refund Policy
                </motion.span>
            </h1>


            <div className="max-w-4xl mx-auto px-4 md:px-6 pb-20 mt-10 md:mt-15">
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed text-left mb-10 md:mb-16 font-normal">
                    Welcome to Movingshadow.com, owned and operated by Moving Shadow.his Return, Cancellation, and Refund Policy outlines the procedures for returning products, cancelling orders, and requesting refunds.</p>
                <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">1. Return Policy:</h2>

                    <p className="text-gray-800 text-base leading-relaxed">Once items are delivered, they cannot be returned as opened or used products cannot be reused or resold.

                    </p>
                     <p className="text-gray-800 text-base leading-relaxed">Damages caused by neglect, improper use, or incorrect application will not be covered under this policy.
                    </p>
                     <p className="text-gray-800 text-base leading-relaxed">We do not assume responsibility for adverse reactions or sensitivities caused by specific product ingredients. Patch tests are recommended as advised on each product packaging.

                    </p>
                </div>

                {/* 2 */}

                 <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">2. Refund Policy:</h2>

                    <p className="text-gray-800 text-base leading-relaxed">Florenza Italiya is not responsible for any damage that occurs after the product has been delivered.

                    </p>
                     <p className="text-gray-800 text-base leading-relaxed">Claims for missing items, leakage, breakage, damage, or incorrect product require an unboxing video showing the original packaging.
                    </p>
                     <p className="text-gray-800 text-base leading-relaxed">To claim a refund, contact customer care at +910000000000 or email info@movingshadow.com with the subject “Refund for [Order ID]” and relevant images/videos.

                    </p>
                       <p className="text-gray-800 text-base leading-relaxed">If a package is tampered with, damaged, or defective, refuse to accept it and contact us immediately.

                    </p>
                       <p className="text-gray-800 text-base leading-relaxed">If your order is marked as delivered but not received, report this within 3 days of delivery status. No refunds after this period.

                    </p>
                    <p className="text-gray-800 text-base leading-relaxed">Delivery charges are non-refundable.

                    </p>
                    <p className="text-gray-800 text-base leading-relaxed">Claims for refunds must be made within 24 hours of delivery.
                    </p>
                    <p className="text-gray-800 text-base leading-relaxed">Once accepted, refunds may take up to 10 days to be credited. Transaction ID and details will be provided.
                    </p>
                </div>

                {/* 3 */}
                <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">3. Product Availability:</h2>

                    <p className="text-gray-800 text-base leading-relaxed">Product availability on the website is subject to change without notice. We do not guarantee the availability of any product listed on the website.</p>
                </div>

                {/* 4 */}
                <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">4. External Links:</h2>

                    <p className="text-gray-800 text-base leading-relaxed">This website may contain links to external websites. These links are provided for your convenience, and we do not endorse the content of third-party websites.</p>
                </div>

                {/* 5 */}
                <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">5. User Responsibilities:</h2>

                    <p className="text-gray-800 text-base leading-relaxed"> You are responsible for ensuring that all information you provide on this website is accurate, current, and complete. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by any third party.</p>
                </div>

                {/* 6 */}
                <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">6. Order Acceptance:</h2>

                    <p className="text-gray-800 text-base leading-relaxed">All orders placed on Movingshadow.com are subject to acceptance. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product or pricing information, or suspicion of fraudulent activity.

                    </p>
                </div>

                {/* 7 */}
                <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">7. Pricing and Payment:</h2>

                    <p className="text-gray-800 text-base leading-relaxed">Prices for products are subject to change without notice. We reserve the right to modify or discontinue products at any time. Payments are processed through secure payment gateways. We do not store credit card details.

                    </p>
                </div>


                {/* 8 */}
                <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">8. Shipping:</h2>

                    <p className="text-gray-800 text-base leading-relaxed">Shipping costs and delivery times are provided during the checkout process. We are not responsible for delays or issues caused by shipping carriers.

                    </p>
                </div>

                <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">9. Returns and Refunds:</h2>

                    <p className="text-gray-800 text-base leading-relaxed">Our returns and refunds policy is outlined in detail on the Returns and Refunds page. Please review this information before making a purchase.

                    </p>
                </div>


                <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">10. User Accounts:</h2>

                    <p className="text-gray-800 text-base leading-relaxed">You may be required to create a user account to access certain features of the website. You are responsible for maintaining the confidentiality of your account information and for restricting access to your account.

                    </p>
                </div>

                <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">11. Changes to Terms and Conditions:</h2>

                    <p className="text-gray-800 text-base leading-relaxed">Moving Shadow reserves the right to change these terms and conditions at any time without notice. By using this website, you agree to be bound by the current version of these terms and conditions
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">12. Governing Law:</h2>

                    <p className="text-gray-800 text-base leading-relaxed">These terms and conditions are governed by and construed in accordance with the laws of Kerala, India, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Kerala, India, specifically the High Court of Kerala.
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-left mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111]">13. Contacting Us:</h2>

                    <p className="text-gray-800 text-base leading-relaxed">If you have any questions about these Terms and Conditions, please contact us at:
                    </p>
                </div>

                <div className="mt-10">
                    <p className="text-gray-800 text-base leading-relaxed font-bold">
                        Email: <a href="mailto:info@movingshadow.com" className="font-semibold text-gray-600 hover:underline">info@movingshadow.com</a>
                    </p>
                </div>

            </div>
        </>
    );
}