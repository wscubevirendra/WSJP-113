import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo & About */}
                <div>
                    <h1 className="text-3xl font-bold text-white mb-4">MyStore</h1>
                    <p className="text-sm leading-6">
                        Your one-stop destination for top-quality products and fast delivery.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-5">
                        <FiFacebook className="text-xl hover:text-white cursor-pointer" />
                        <FiInstagram className="text-xl hover:text-white cursor-pointer" />
                        <FiTwitter className="text-xl hover:text-white cursor-pointer" />
                        <FiLinkedin className="text-xl hover:text-white cursor-pointer" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Products</li>
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-white cursor-pointer">FAQs</li>
                        <li className="hover:text-white cursor-pointer">Shipping</li>
                        <li className="hover:text-white cursor-pointer">Returns</li>
                        <li className="hover:text-white cursor-pointer">Order Tracking</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
                    <p className="text-sm mb-4">Subscribe for special offers & updates.</p>

                    <div className="flex items-center bg-gray-800 rounded-full overflow-hidden">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="px-4 py-2 bg-gray-800 text-gray-300 outline-none w-full"
                        />
                        <button className="bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm">
                © {new Date().getFullYear()} MyStore. All Rights Reserved.
            </div>
        </footer>
    );
}
