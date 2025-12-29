import React, { useState } from "react";
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="shadow-md bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-gray-800">MyStore</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/about" className="hover:text-blue-600">About</Link>
                    <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                </nav>

                {/* Search + Icons */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Search Bar */}
                    <div className="flex items-center gap-2 border rounded-full px-3 py-1">
                        <FiSearch size={18} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="outline-none bg-transparent"
                        />
                    </div>

                    {/* Icons */}
                    <FiUser size={22} className="cursor-pointer hover:text-blue-600" />
                    <FiShoppingCart size={22} className="cursor-pointer hover:text-blue-600" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col gap-4 p-4 text-gray-700 text-lg font-medium">
                        <a href="#" className="hover:text-blue-600">Home</a>
                        <a href="#" className="hover:text-blue-600">Products</a>
                        <a href="#" className="hover:text-blue-600">About</a>
                        <a href="#" className="hover:text-blue-600">Contact</a>
                    </nav>

                    <div className="p-4 border-t flex items-center justify-between">
                        <FiUser size={24} />
                        <FiShoppingCart size={24} />
                    </div>
                </div>
            )}
        </header>
    );
}
