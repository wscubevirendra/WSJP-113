import { ShoppingCart, Menu, Leaf } from "lucide-react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../Context";

export default function Header() {
    const { cart } = useContext(StoreContext)
    const location = useLocation();
    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Leaf className="h-7 w-7 text-green-600" />
                    <span className="text-xl font-bold text-gray-800">ProductEco</span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {
                        navItems.map((item, index) => {
                            return (
                                <Link key={index} to={item.path} className={`text-gray-600 ${location.pathname == item.path ? "bg-amber-400 font-bold text-white" : ""} hover:text-green-600 px-4 py-2 rounded-3xl transition`}>
                                    {item.name}
                                </Link>
                            )
                        })
                    }


                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:block rounded-xl bg-green-600 px-5 py-2 text-sm font-medium text-white hover:bg-green-700 transition">
                        Login
                    </button>
                    <Link to="/cart">
                        <button className="relative rounded-xl p-2 hover:bg-gray-100 transition">
                            <ShoppingCart className="h-6 w-6 text-gray-700" />
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                                {cart.length}
                            </span>
                        </button>
                    </Link>
                    {/* Mobile Menu Icon */}
                    <button className="md:hidden rounded-xl p-2 hover:bg-gray-100 transition">
                        <Menu className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
            </div>
        </header>
    );
}
