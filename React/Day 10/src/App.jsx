import { useEffect, useState } from "react";
import ZomotoCard from "./ZomotoCard";
import BlinkitClone from "./BlinkitClone";

export default function ZomotoList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes))
      .catch((err) => console.log(err));
  }, []);

  return (
    // <div className="min-h-screen p-6 bg-gray-100">

    //   <div className="max-w-7xl mx-auto">
    //     <h1 className="text-2xl font-bold mb-4">Zomato Cards</h1>
    //     <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4B gap-6">
    //       {recipes.map((item) => (
    //         <ZomotoCard key={item.id} recipe={item} />
    //       ))}
    //     </div>
    //   </div>


    // </div>

    <BlinkitClone />
  );
}
