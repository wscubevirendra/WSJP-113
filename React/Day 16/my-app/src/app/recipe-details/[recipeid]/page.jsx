import { getRecipesById } from "@/api-call/recipeApi";

export default async function RecipePage({ params }) {
  const resolvePromise = await params
  const recipe =await getRecipesById(resolvePromise?.recipeid);

  return (
    <div className="max-w-5xl mx-auto p-4">

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-80 object-cover rounded-xl"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mt-6">
        {recipe.name}
      </h1>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
        <span>⭐ {recipe.rating} ({recipe.reviewCount} reviews)</span>
        <span>🍽 {recipe.servings} servings</span>
        <span>🔥 {recipe.caloriesPerServing} cal</span>
        <span>⏱ Prep: {recipe.prepTimeMinutes} min</span>
        <span>🍳 Cook: {recipe.cookTimeMinutes} min</span>
        <span>📌 {recipe.difficulty}</span>
      </div>

      {/* Ingredients */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {recipe?.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          {recipe?.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Add to Cart */}
      <div className="mt-10">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Add to Cart
        </button>
      </div>

    </div>
  );
}
