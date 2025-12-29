import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <>
       
            <div className="bg-gray-100 min-h-screen py-16 px-4">
                <div className="container mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            Contact <span className="text-blue-600">Us</span>
                        </h1>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            We would love to hear from you! Reach out with questions, feedback, or business inquiries.
                        </p>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Contact Details */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                                <p className="text-gray-600">
                                    Our team is here to help you 24/7. Contact us through any method below.
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <FiMapPin className="text-3xl text-blue-600" />
                                <p className="text-gray-700 leading-6">
                                    125 MG Road, Sector 21
                                    <br /> Jaipur, Rajasthan, India
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <FiPhone className="text-3xl text-blue-600" />
                                <p className="text-gray-700 text-lg">+91 98765 43210</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <FiMail className="text-3xl text-blue-600" />
                                <p className="text-gray-700 text-lg">support@mystore.com</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Send us a Message
                            </h2>

                            <form className="space-y-5">
                                <div>
                                    <label className="text-gray-700">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 p-3 border rounded-lg outline-blue-500"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-700">Your Email</label>
                                    <input
                                        type="email"
                                        className="w-full mt-1 p-3 border rounded-lg outline-blue-500"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-700">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full mt-1 p-3 border rounded-lg outline-blue-500"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>

                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* Map Section */}
                    <div className="mt-20">
                        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                            Visit Our Location
                        </h2>

                        <iframe
                            className="w-full h-72 rounded-2xl shadow"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1567203784!2d75.78160337516534!3d26.90079616075845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9a8cb0677c1%3A0x8e9b910a426266eb!2sJaipur!5e0!3m2!1sen!2sin!4v1683397300"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>
            </div>
           
        </>

    );
}
