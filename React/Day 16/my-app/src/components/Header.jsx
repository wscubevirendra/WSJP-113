"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const RecipeHeader = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart)
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Recipes", path: "/recipes" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🍲</span>
          <h1 className="text-2xl font-bold text-green-600">
            RecipeHub
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition ${pathname === link.path
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-600 hover:text-green-600"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search + Button */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search recipes..."
            className="hidden sm:block px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default RecipeHeader;
