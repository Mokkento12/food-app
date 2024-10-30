import React from "react";
import "./RecipeCard.css";
const RecipeCard = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>
      <h3>Ингредиенты:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Шаги:</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default RecipeCard;
