'use client';
import React from 'react';
import { Recipe } from '../data/recipeDummyData';
import { FaRegThumbsUp } from 'react-icons/fa';
import './AuthRecipeList.css';

type AuthRecipeListProps = {
  recipes: Recipe[];
};
const AuthRecipeList: React.FC<AuthRecipeListProps> = ({ recipes }) => {
  const AuthRecipes = recipes.filter((recipe) => recipe.memberId === 2);
  return (
    <div>
      {AuthRecipes.map((recipe) => (
        <>
          <div className="subTitle">
            <h2>
              <FaRegThumbsUp />
              <span>메추리픽 레시피</span>
            </h2>
            <span className="subExplanation">메추리알 운영진의 찐레시피</span>
            <button type="button">더보기</button>
          </div>
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
