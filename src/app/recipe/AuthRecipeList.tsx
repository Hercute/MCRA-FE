'use client';
import React from 'react';
import { Recipe } from '../data/recipeDummyData';
import SubTitle from '@/components/layout/SubTitle';
import { FaRegThumbsUp } from 'react-icons/fa';

import './AuthRecipeList.css';

type AuthRecipeListProps = {
  recipes: Recipe[];
};
const AuthRecipeList: React.FC<AuthRecipeListProps> = ({ recipes }) => {
  const AuthRecipes = recipes.filter((recipe) => recipe.memberId === 2);
  return (
    <div>
      <SubTitle
        title="메추리픽 레시피"
        explanation="메추리알 운영진의 찐레시피"
        showButton={true}
        icon={FaRegThumbsUp}
        href={`/recipe/detail-page}`}
      />
      {AuthRecipes.map((recipe) => (
        <>
          <div key={recipe.id}>
            <p>{recipe.name}</p>
            <p>{recipe.likeCounts}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default AuthRecipeList;
