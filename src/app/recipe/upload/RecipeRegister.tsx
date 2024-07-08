'use client';

import { recipeState } from '@/recoil/atoms/recoilState';
import React from 'react';
import { useRecoilState } from 'recoil';

const RecipeRegister = () => {
  const [recipe, setRecipe] = useRecoilState(recipeState);
  const handleSubmit = () => {
    console.log('Final Recipe State:', recipe);
    alert('레시피가 성공적으로 저장되었습니다.');
    setRecipe({
      title: '',
      description: '',
      dishName: '',
      cookingTime: '',
      ingredients: []
    });
  };

  return <button onClick={handleSubmit}>등록</button>;
};

export default RecipeRegister;
