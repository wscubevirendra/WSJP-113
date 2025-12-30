const ProductCard = ({ title, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 mt-1">₹{price}</p>

        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};




export default ProductCard;
