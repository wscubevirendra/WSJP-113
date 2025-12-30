const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">ShopEase</h1>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 font-medium text-gray-600">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">Shop</a>
          <a href="#" className="hover:text-indigo-600">Categories</a>
          <a href="#" className="hover:text-indigo-600">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="hidden md:block border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Cart
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
