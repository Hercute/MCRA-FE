'use client';
import React from 'react';
import { Recipe } from '../data/recipeDummyData';
import SubTitle from '@/components/layout/SubTitle';
import { IoBookOutline } from 'react-icons/io5';

type RecipesListProps = {
  recipes: Recipe[];
};

const RecipeList: React.FC<RecipesListProps> = ({ recipes }) => {
  return (
    <div>
      <SubTitle
        title="모두의 레시피"
        explanation="모두의 레시피 모음 ( 기타 설명 추가 )"
        showButton={true}
        icon={IoBookOutline}
        href={`/recipe/detail-page}`}
      />
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <div>{recipe.name}</div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
