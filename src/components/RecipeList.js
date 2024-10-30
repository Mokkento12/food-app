import React, { useState } from "react";
import recipes from "../data";
import RecipeCard from "./RecipeCard/RecipeCard";

const RecipeList = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClose = () => {
    setSelectedRecipe(null);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  return (
    <div>
      <h2>Список рецептов</h2>
      <input
        type="text"
        placeholder="Поиск по ингредиентам"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeClick(recipe)}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <img src={recipe.image} alt={recipe.title} />
            <p>Ингредиенты: {recipe.ingredients.join(", ")}</p>
          </li>
        ))}
      </ul>
      {selectedRecipe && (
        <RecipeCard recipe={selectedRecipe} onClose={handleClose} />
      )}
    </div>
  );
};

export default RecipeList;
