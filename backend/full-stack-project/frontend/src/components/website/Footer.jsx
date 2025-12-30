const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">ShopEase</h3>
          <p className="text-sm">
            Your one-stop destination for trendy and affordable products.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Shop</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <p className="text-sm">Email: support@shopease.com</p>
          <p className="text-sm mt-1">Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2025 ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
