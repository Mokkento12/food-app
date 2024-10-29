// src/components/RecipeDetails.js
import React from "react";

const RecipeDetails = ({ recipe }) => {
  if (!recipe) {
    return <div>No recipe selected</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default RecipeDetails;
