import { getRecipes } from '@/api-call/recipeApi'
import React from 'react'
import RecipeCard from '@/components/RecipeCard';

export default async function recipesPage() {
    const recipes = await getRecipes();
    return (
        <div className='max-w-7xl mx-auto p-4 grid grid-cols-4'>
            {
                recipes.map((recipe) => {
                    return <RecipeCard thumbnail={recipe.image} title={recipe.name} price={499} id={recipe.id} key={recipe.id} />
                })
            }
        </div>
    )
}
