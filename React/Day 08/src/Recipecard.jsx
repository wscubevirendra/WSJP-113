import React, { useEffect, useState } from 'react'

export default function Recipecard() {
    const [recipe, setRecipes] = useState([]);
    async function fetchRecipes() {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setRecipes(data.recipes)
    }


    useEffect(
        () => {
            fetchRecipes()
        },
        []
    )


    // console.log(recipe)


    return (
        <div className='container-xxl'>
            <div className="row gy-4 ">
                {
                    recipe.map((data) => {
                        return <Card key={data.id} name={data.name} image={data.image} rating={data.rating} />
                    })
                }

            </div>
        </div>
    )
}



function Card({ name, image, rating }) {
    return (
        <div className="col-4">
            <div className='card'>
                <img height={"200"} src={image} className="card-img-top" alt="Product Image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="d-flex justify-content-between align-items-center">

                        <div>

                            <small className="text-muted">({rating})</small>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light">
                    <button className="btn btn-primary btn-sm">Add to Cart</button>

                </div>

            </div>

        </div>
    )
}
