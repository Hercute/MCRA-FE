'use client';
import { recipeState } from '@/recoil/atoms/recoilState';
import React from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { useRecoilState } from 'recoil';

const RecipeUpload = () => {
  const [recipe, setRecipe] = useRecoilState(recipeState);

  const handleRecipeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe((prev) => {
      const newState = { ...prev, [name]: value };
      return newState;
    });
  };
  return (
    <section className="recipeSection">
      <div className="uploadDiv">
        <IoBookOutline size={27} />
        <span>레시피 올리기</span>
        <select className="categorySelect">
          <option value="korean">한식</option>
          <option value="japanese">일식</option>
          <option value="chineese">중식</option>
          <option value="western">양식</option>
          <option value="dessert">디저트</option>
          <option value="other">기타</option>
        </select>
      </div>
      <input
        type="text"
        name="title"
        value={recipe.title}
        onChange={handleRecipeChange}
        className="uploadInput"
        placeholder="제목을 작성해주세요"
      />
      <textarea
        name="description"
        value={recipe.description}
        onChange={handleRecipeChange}
        className="uploadInput"
        placeholder="요리 설명을 작성해 주세요"
      ></textarea>
      <input
        type="text"
        name="dishName"
        value={recipe.dishName}
        onChange={handleRecipeChange}
        className="uploadInput"
        placeholder="요리이름"
      />
      <input
        type="text"
        name="cookingTime"
        value={recipe.cookingTime}
        onChange={handleRecipeChange}
        className="uploadInput"
        placeholder="조리시간"
      />
    </section>
  );
};

export default RecipeUpload;
