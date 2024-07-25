'use client';
import { recipeState } from '@/recoil/atoms/recoilState';
import React, { useRef } from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { AiOutlinePicture } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { Recipe } from '@/types/recipe';

const RecipeUpload = () => {
  const [recipe, setRecipe] = useRecoilState<Recipe>(recipeState);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleRecipeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe((prev) => {
      const newState = { ...prev, [name]: value };
      return newState;
    });
  };
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setRecipe((prev) => ({
        ...prev,
        image: imgUrl
      }));
    }
  };
  const triggerFileInput = (): void => {
    fileInputRef.current?.click();
  };
  const handleFileDelete = (e: React.MouseEvent<SVGElement, MouseEvent>): void => {
    e.stopPropagation();
    setRecipe((prev) => ({
      ...prev,
      image: ''
    }));
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
      <div className="recipeUploadImg">
        <div className="uploadImgBox" onClick={triggerFileInput}>
          {recipe.image ? (
            <>
              <Image src={recipe.image} alt={recipe.comment} layout="fill" objectFit="contain" />
              <IoMdClose onClick={handleFileDelete} className="closeImg" color="red" size={28} />
            </>
          ) : (
            <>
              <AiOutlinePicture size={108} color="gray" />
              <span>대표 이미지를 등록해 주세요</span>
            </>
          )}
          <input type="file" style={{ display: 'none' }} onChange={handleFileUpload} ref={fileInputRef} />
        </div>
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
        name="comment"
        value={recipe.comment}
        onChange={handleRecipeChange}
        className="uploadInput"
        placeholder="요리 설명을 작성해 주세요"
      ></textarea>
      <input
        type="text"
        name="name"
        value={recipe.name}
        onChange={handleRecipeChange}
        className="uploadInput uploadDishName"
        placeholder="요리이름"
      />
      <input
        type="text"
        name="time"
        value={recipe.time}
        onChange={handleRecipeChange}
        className="uploadInput uploadTime"
        placeholder="조리시간"
      />
    </section>
  );
};

export default RecipeUpload;
