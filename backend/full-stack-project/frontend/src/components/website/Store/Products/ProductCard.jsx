const ProductCard = ({ product, imageBaseUrl }) => {
    const imageUrl = product?.thumbnail
        ? `${imageBaseUrl}main/${product.thumbnail}`
        : "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9";

    return (
        <div className="relative bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden group">

            {/* 🔖 BADGES */}
            <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                {product.is_best_seller && (
                    <span className="bg-orange-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                        Best Seller
                    </span>
                )}

                {product.is_hot && (
                    <span className="bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                        New
                    </span>
                )}
            </div>

            {/* 🔥 DISCOUNT */}
            {product.discount_percentage && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded z-10">
                    {product.discount_percentage}% OFF
                </span>
            )}

            {/* IMAGE */}
            <div className="h-40 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                    src={imageUrl}
                    alt={product.name}
                    className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* CONTENT */}
            <div className="p-3 space-y-1">

                {/* TITLE */}
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                    {product.name}
                </h3>

                {/* PRICE */}
                <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-gray-900">
                        ₹{product.final_price}
                    </span>

                    {product.original_price && (
                        <span className="text-xs line-through text-gray-400">
                            ₹{product.original_price}
                        </span>
                    )}
                </div>

                {/* STOCK */}
                {!product.stock && (
                    <p className="text-xs  text-red-500 font-medium">
                        Out of Stock
                    </p>
                )}
            </div>

            {/* ADD TO CART (HOVER ACTION) */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-white translate-y-full group-hover:translate-y-0 transition hidden sm:block">
                <button
                    disabled={!product.stock}
                    className={`w-full py-2 rounded-lg text-sm font-medium transition
                        ${product.stock
                            ? 'bg-black text-white hover:bg-gray-900'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    Add to Cart
                </button>
            </div>

            {/* MOBILE BUTTON */}
            <div className="p-3 pt-0 sm:hidden">
                <button
                    disabled={!product.stock}
                    className={`w-full py-2 rounded-lg text-sm font-medium transition
                        ${product.stock
                            ? 'bg-black text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
