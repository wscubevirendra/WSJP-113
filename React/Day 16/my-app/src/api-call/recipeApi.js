async function getRecipes() {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    if (data) {
        return data.recipes
    } else {
        return []
    }
}


async function getRecipesById(id) {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    return data
}






export { getRecipes, getRecipesById }