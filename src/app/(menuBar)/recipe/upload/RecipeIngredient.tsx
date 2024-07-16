'use client';
import { recipeState } from '@/recoil/atoms/recoilState';
import React, { useState } from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { useRecoilState } from 'recoil';

const RecipeIngredient = () => {
  const [recipe, setRecipe] = useRecoilState(recipeState);
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientCount, setIngredientCount] = useState('');

  const handleIngredientAdd = () => {
    if (ingredientName.trim() === '' || ingredientCount.trim() === '') {
      alert('재료 이름과 개수를 모두 입력해주세요.');
      return;
    }

    const newIngredient = { name: ingredientName, count: ingredientCount };
    const updatedIngredients = [...recipe.ingredients, newIngredient];

    setRecipe((prev) => ({
      ...prev,
      ingredients: updatedIngredients
    }));

    // 입력 필드 초기화
    setIngredientName('');
    setIngredientCount('');
  };
  return (
    <section className="recipeSection">
      <div className="uploadDiv">
        <IoBookOutline size={27} />
        <span>재료</span>
      </div>
      <div>
        <label htmlFor="ingredientName">재료 이름</label>
        <input
          id="ingredientName"
          type="text"
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
        />
        <label htmlFor="ingredientCount">개수</label>
        <input
          id="ingredientCount"
          type="text"
          value={ingredientCount}
          onChange={(e) => setIngredientCount(e.target.value)}
        />
        <button type="button" onClick={handleIngredientAdd}>
          추가하기
        </button>
      </div>
      <div>
        <h3>등록된 재료</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} - {ingredient.count}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RecipeIngredient;
