import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <>
         
            <div className="bg-gray-100 min-h-screen py-16 px-4">
                <div className="container mx-auto">

                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            About <span className="text-blue-600">Us</span>
                        </h1>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            We are dedicated to delivering high-quality products and exceptional
                            experiences. Our mission is to make online shopping easy, fast, and reliable.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        {/* Image */}
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1521791055366-0d553872125f"
                                alt="Team"
                                className="rounded-2xl shadow-lg"
                            />
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                                Who We Are
                            </h2>
                            <p className="text-gray-600 leading-7 mb-6">
                                We are a passionate team of developers, designers, and creators who
                                believe in delivering excellence. Our platform provides a wide range of
                                high-quality products with a seamless shopping experience.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Our Mission
                            </h2>
                            <p className="text-gray-600 leading-7 mb-6">
                                Our mission is to empower customers with the best online shopping
                                experience through innovation, commitment, and trust.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Why Choose Us?
                            </h2>
                            <ul className="text-gray-600 space-y-3">
                                <li>✔️ Premium quality products</li>
                                <li>✔️ Fast & secure delivery</li>
                                <li>✔️ 24/7 customer support</li>
                                <li>✔️ Best prices guaranteed</li>
                            </ul>
                        </div>

                    </div>

                    {/* Values Section */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                            Our Core Values
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                            <div className="bg-white p-8 rounded-2xl shadow text-center">
                                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                                <p className="text-gray-600">
                                    We operate with honesty, responsibility, and transparency.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow text-center">
                                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                                <p className="text-gray-600">
                                    We constantly improve and deliver modern solutions.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow text-center">
                                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                                <p className="text-gray-600">
                                    Our customers are our top priority — always.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
          
        </>


    );
}
