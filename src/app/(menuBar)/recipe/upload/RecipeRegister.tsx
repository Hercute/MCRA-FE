'use client';

import { hashTagsState, orderPagesState, recipeState } from '@/recoil/atoms/recoilState';
import React from 'react';
import { useRecoilState } from 'recoil';

const RecipeRegister = () => {
  const [recipe, setRecipe] = useRecoilState(recipeState);
  const [hashTags, setHashTags] = useRecoilState(hashTagsState);
  const [recipePage, setRecipePage] = useRecoilState(orderPagesState);
  const handleSubmit = () => {
    alert('레시피가 성공적으로 저장되었습니다.');
    setRecipe({
      title: '',
      comment: '',
      name: '',
      time: '',
      image: '',
      category: '',
      ingredientMapList: []
    });
    setRecipePage([{ id: 1, comment: '', file: undefined, showDeleteButton: false }]);
    setHashTags([]);

    console.log('Final Recipe State:', recipe);
    console.log('hashTags', hashTags);
    console.log('recipePage', recipePage);
  };

  return <button onClick={handleSubmit}>등록</button>;
};

export default RecipeRegister;
