import React from 'react';
import { dummyRecipes } from '../data/recipeDummyData';
import RecipeList from './RecipeList';
import RecommendMenuList from './RecommendMenuList';
import AuthRecipeList from './AuthRecipeList';
const RecipePage = () => {
  const recipes = dummyRecipes;
  return (
    <>
      {/* <RecommendMenuList recipes={recipes} /> */}
      <AuthRecipeList recipes={recipes} />
      {/* <RecipeList recipes={recipes} /> */}
    </>
  );
};

export default RecipePage;
