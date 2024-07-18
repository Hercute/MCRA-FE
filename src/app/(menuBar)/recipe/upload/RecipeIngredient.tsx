'use client';
import { recipeState } from '@/recoil/atoms/recoilState';
import React, { useState } from 'react';
import { TbMeat } from 'react-icons/tb';
import { IoMdClose } from 'react-icons/io';
import { useRecoilState } from 'recoil';

const RecipeIngredient = () => {
  const [recipe, setRecipe] = useRecoilState(recipeState);
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientCount, setIngredientCount] = useState('');
  console.log(recipe.ingredients.length);
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
        <TbMeat size={27} />
        <span>재료</span>
      </div>
      <div className="ingredientBox">
        <div>
          <label htmlFor="ingredientName">재료 이름</label>
          <input
            id="ingredientName"
            type="text"
            value={ingredientName}
            onChange={(e) => setIngredientName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ingredientCount">개수</label>
          <input
            id="ingredientCount"
            type="text"
            value={ingredientCount}
            onChange={(e) => setIngredientCount(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleIngredientAdd}>
          추가하기
        </button>
      </div>
      <div className="ingredientList">
        <h3>등록된 재료</h3>
        {recipe.ingredients.filter((ingredient) => ingredient.name && ingredient.count).length > 0 ? (
          <ul>
            {recipe.ingredients
              .filter((ingredient) => ingredient.name && ingredient.count)
              .map((ingredient, index) => (
                <li key={index}>
                  <span>
                    {ingredient.name} {ingredient.count}
                  </span>
                  <IoMdClose size={16} color="red" />
                </li>
              ))}
          </ul>
        ) : (
          <div>등록된 재료가 없습니다</div>
        )}
      </div>
    </section>
  );
};

export default RecipeIngredient;
