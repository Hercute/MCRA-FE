import React from 'react';
import { dummyRecipes } from '../data/recipeDummyData';
import RecipeList from './RecipeList';
import RecommendMenuList from './RecommendMenuList';
import AuthRecipeList from './AuthRecipeList';
import RecipeUploadBtn from '@/components/common/RecipeUploadBtn';

const RecipePage = () => {
  const recipes = dummyRecipes;
  return (
    <div style={{ padding: '0 0.5rem', width: '375px', border: '1px solid #999999', margin: '0 auto' }}>
      {/* <RecommendMenuList recipes={recipes} /> */}
      <AuthRecipeList recipes={recipes} />
      <RecipeList recipes={recipes} />
      <RecipeUploadBtn />
    </div>
  );
};

export default RecipePage;
