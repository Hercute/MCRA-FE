'use client';
import React from 'react';
import { Recipe } from '../data/recipeDummyData';

type RecipesListProps = {
  recipes: Recipe[];
};

const RecipeList: React.FC<RecipesListProps> = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <div>{recipe.name}</div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
