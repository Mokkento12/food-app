import React, { useState } from "react";
import recipes from "../data";
import RecipeDetails from "./RecipeDetails";

const RecipeList = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeClick(recipe)}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <img src={recipe.image} alt={recipe.title} />
          </li>
        ))}
      </ul>
      <RecipeDetails recipe={selectedRecipe} />
    </div>
  );
};

export default RecipeList;
