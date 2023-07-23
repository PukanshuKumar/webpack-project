import { useState } from "react";

const elvenShielRecipe = {
    leatherStrings: 2,
    ironIngot: 1,
    refinemoonston:4,
};

const elvenGauntletsRecipe = {
    ...elvenShielRecipe,
    leather: 1,
    refinedMoonstone:4,
}

console.log(elvenShielRecipe);
console.log(elvenGauntletsRecipe);



const Recipes = () => {
    const [recipe, setRecipe] = useState({});
    return (
       <div>
        <h3>Current Recipes:   </h3>
        <button onClick={() => setRecipe(elvenShielRecipe)}>elven Shield Recipe</button>
        <button onClick={() => setRecipe(elvenGauntletsRecipe)}>elven Gauntlets Recipe</button>
        <ul>
            {Object.keys(recipe).map((material) => (
                <li key={material}>
                    {material}: {recipe[material]}
                </li>
            ))}
        </ul>
       </div>
    )
}

export default Recipes