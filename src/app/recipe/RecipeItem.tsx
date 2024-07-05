import React from 'react';
import { Recipe } from '../data/recipeDummyData';
import { FcLike } from 'react-icons/fc';

type RecipeItemProps = {
  recipe: Recipe;
};

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe }) => {
  return (
    <div className="recipeItemDiv" key={recipe.id}>
      <div className="recipeImgBox"></div>
      <p>{recipe.name}</p>
      <p className="likedDiv">
        <FcLike color="red" />
        <span>{recipe.likeCounts}</span>
      </p>
    </div>
  );
};

export default RecipeItem;
