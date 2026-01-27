import CartBtn from "./CartBtn";
import Link from "next/link";

const RecipeCard = ({ thumbnail, price, title, id }) => {

    return (
        <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">

            {/* Thumbnail */}
            <Link href={`/recipe-details/${id}`}>
                <img
                    src={thumbnail}
                    alt="Recipe"
                    className="w-full h-44 object-cover"
                />
            </Link>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {title}
                </h3>



                {/* Price + Button */}
                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-green-600">
                        ₹{price}
                    </span>

                    <CartBtn id={id} price={price} title={title} />
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
