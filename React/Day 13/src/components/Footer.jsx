import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold text-white">ProductEco</span>
            </div>
            <p className="text-sm text-gray-400">
              Sustainable products for a better tomorrow. Eco-friendly, ethical, and affordable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400">Home</a></li>
              <li><a href="#" className="hover:text-green-400">Products</a></li>
              <li><a href="#" className="hover:text-green-400">Sustainability</a></li>
              <li><a href="#" className="hover:text-green-400">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400">Contact</a></li>
              <li><a href="#" className="hover:text-green-400">FAQs</a></li>
              <li><a href="#" className="hover:text-green-400">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">Stay Connected</h3>
            <p className="mb-4 text-sm text-gray-400">Subscribe for eco updates & offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-xl px-4 py-2 text-sm text-gray-800 focus:outline-none"
              />
              <button className="rounded-r-xl bg-green-600 px-4 text-sm font-medium text-white hover:bg-green-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ProductEco. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-green-400"><Facebook size={18} /></a>
            <a href="#" className="hover:text-green-400"><Twitter size={18} /></a>
            <a href="#" className="hover:text-green-400"><Instagram size={18} /></a>
            <a href="#" className="hover:text-green-400"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
