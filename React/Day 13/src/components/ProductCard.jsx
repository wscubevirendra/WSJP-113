import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context";

export default function ProductCard({ thumbnail, title, price, id }) {
  const { addtoCart } = useContext(StoreContext)
  return (

    <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      {/* Thumbnail */}
      <Link to={`/product/detail/${id}`}>
        <div className="overflow-hidden rounded-t-2xl">
          <img
            src={thumbnail}
            alt={title}
            className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <h3 className="line-clamp-2 text-base font-semibold text-gray-800">
          {title}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">₹{price}</span>

          <button onClick={() => addtoCart(id)} className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div >

  );
}
