'use client';

import { hashTagsState, recipeState } from '@/recoil/atoms/recoilState';
import React from 'react';
import { useRecoilState } from 'recoil';

const RecipeRegister = () => {
  const [recipe, setRecipe] = useRecoilState(recipeState);
  const [hashTags, setHashTags] = useRecoilState(hashTagsState);
  const handleSubmit = () => {
    alert('레시피가 성공적으로 저장되었습니다.');
    setRecipe({
      title: '',
      description: '',
      dishName: '',
      cookingTime: '',
      ingredients: []
    });
    setHashTags([]);

    console.log('Final Recipe State:', recipe);
    console.log('hashTags', hashTags);
  };

  return <button onClick={handleSubmit}>등록</button>;
};

export default RecipeRegister;
