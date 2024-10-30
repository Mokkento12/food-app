import React from "react";
import "./RecipeDetails.css";

const RecipeDetails = ({ recipe }) => {
  if (!recipe) {
    return <div className="recipe-details">Выберите рецепт для просмотра</div>;
  }

  return (
    <div className="recipe-details">
      <h2 className="recipe-title">{recipe.title}</h2>
      <img className="recipe-image" src={recipe.image} alt={recipe.title} />
      <p className="recipe-description">{recipe.description}</p>
      <h3>Ингредиенты:</h3>
      <ul className="ingredient-list">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Рецепт:</h3>
      <ol className="recipe-steps">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;
