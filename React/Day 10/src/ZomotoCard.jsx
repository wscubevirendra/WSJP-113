export default function ZomotoCard({ recipe }) {
  return (
    <div className="rounded-2xl  shadow-md bg-white">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-48 object-cover"
        />

        <span className="absolute top-2 left-2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md">
          Promoted
        </span>

        <span classname="absolute bottom-2 left-2 bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded-md">
          Flat 20% OFF
        </span>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold  w-[210px]">
            {recipe.name}
          </h2>

          <span className="flex items-center gap-1 bg-green-600 text-white text-sm px-2 py-1 rounded-md">
            {recipe.rating} ★
          </span>
        </div>


        <p className="text-gray-700 text-sm mt-1">
          {recipe.cookTimeMinutes} min
        </p>
      </div>
    </div>
  );
}
