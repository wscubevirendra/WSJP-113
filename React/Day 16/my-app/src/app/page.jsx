import { getRecipes } from '@/api-call/recipeApi'
import RecipeCard from '@/components/RecipeCard'
import React from 'react'



export default async function page() {
  const recipes = await getRecipes();
  const topRecipes = recipes.slice(0, 4)
  const trendingRecipes = recipes.slice(5, 9)
  return (
    <div className='max-w-7xl mx-auto p-4 '>
      {/* Top Recipe */}
      <div>
        <h2 className='text-2xl font-bold py-2 my-2'>Top Recipes</h2>
        <div className='grid grid-cols-4'>
          {
            topRecipes.map((recipe) => {
              return <RecipeCard thumbnail={recipe.image} title={recipe.name} price={499} id={recipe.id} key={recipe.id} />
            })
          }
        </div>

      </div>
      <div>
        <h2 className='text-2xl font-bold py-2 my-2'>Trending Recipes</h2>
        <div className='grid grid-cols-4'>
          {
            trendingRecipes.map((recipe) => {
              return <RecipeCard thumbnail={recipe.image} title={recipe.name} price={499} id={recipe.id} key={recipe.id} />
            })
          }
        </div>
      </div>


    </div>
  )
}
