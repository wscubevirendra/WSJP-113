"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiGrid,
    FiFileText,
    FiCreditCard,
    FiClock,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";

const menu = [
    { name: "Dashboard", path: "/admin", icon: FiGrid },
    { name: "Category", path: "/admin/category", icon: FiFileText },
    { name: "Product", path: "/cards", icon: FiCreditCard },
    { name: "Color", path: "/admin/color", icon: FiClock },
    { name: "Settings", path: "/settings", icon: FiSettings },
];

export default function Sidebar() {
    const pathname = usePathname();



    return (
        <aside className="w-64 h-100vh bg-white shadow-xl flex flex-col">
            {/* LOGO */}
            <div className="px-6 py-5 ">
                <h1 className="text-2xl font-bold text-[#ff7b00]">
                    Admin<span className="text-gray-800">Panel</span>
                </h1>
            </div>

            {/* MENU */}
            <nav className="p-4 space-y-2 flex-1">
                {menu.map((item) => {
                    const isActive = pathname === item.path;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`
                group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                ${isActive
                                    ? "bg-[#ff7b00] text-white shadow-md"
                                    : "text-gray-600 hover:bg-orange-50 hover:text-[#ff7b00]"
                                }
              `}
                        >
                            <Icon
                                size={20}
                                className={`transition ${isActive
                                    ? "text-white"
                                    : "text-[#ff7b00] group-hover:text-[#ff7b00]"
                                    }`}
                            />
                            <span className="font-medium">{item.name}</span>

                            {isActive && (
                                <span className="ml-auto w-2 h-2 bg-white rounded-full"></span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* LOGOUT BUTTON */}
            <div className="p-4 ">
                <button

                    className="w-full flex items-center gap-3 px-4 border py-3 cursor-pointer hover:text-white hover:translate-x-2 rounded-xl text-gray-600 hover:bg-[#ff7b00] transition"
                >
                    <FiLogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
}
