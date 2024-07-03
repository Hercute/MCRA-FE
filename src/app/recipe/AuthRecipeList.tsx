'use client';
import React from 'react';
import { Recipe } from '../data/recipeDummyData';

type AuthRecipeListProps = {
  recipes: Recipe[];
};
const AuthRecipeList: React.FC<AuthRecipeListProps> = ({ recipes }) => {
  const AuthRecipes = recipes.filter((recipe) => recipe.memberId === 2);
  return (
    <div>
      {AuthRecipes.map((recipe) => (
        <div key={recipe.id}>
          <p>{recipe.name}</p>
          <p>{recipe.likeCounts}</p>
        </div>
      ))}
    </div>
  );
};

export default AuthRecipeList;
