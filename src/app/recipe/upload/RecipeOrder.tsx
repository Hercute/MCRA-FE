'use client';
import React, { useRef, useState } from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { AiOutlinePicture } from 'react-icons/ai';
import { GoPlusCircle } from 'react-icons/go';
import { useRecoilState } from 'recoil';
import { orderPagesState } from '@/recoil/atoms/recoilState';

import './upload.css';

const RecipeOrder: React.FC = () => {
  const [recipePage, setRecipePage] = useRecoilState(orderPagesState);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleAddPage = () => {
    setRecipePage([
      ...recipePage,
      { id: recipePage.length + 1, description: '', file: undefined, showDeleteButton: true }
    ]);
  };
  const handleDeleteOrder = (id: number) => {
    console.log(id);
    const updateOrder = recipePage.filter((page) => page.id !== id);
    setRecipePage(updateOrder);
    console.log(recipePage);
  };
  return (
    <section className="recipeSection">
      <div className="uploadDiv">
        <IoBookOutline size={27} />
        <span>조리순서</span>
      </div>
      {recipePage.map((page) => (
        <div className="orderItem" key={page.id}>
          <div className="orderFileBox" onClick={handleDivClick}>
            <AiOutlinePicture size={36} />
            <input type="file" className="orderFile" ref={fileInputRef} onChange={handleFileChange} />
          </div>
          <div className="recipeExplanation">
            <span>{page.id}</span>
            <textarea placeholder="레시피설명"></textarea>
          </div>
          {page.showDeleteButton && (
            <button className="deleteButton" onClick={() => handleDeleteOrder(page.id)}>
              X
            </button>
          )}
        </div>
      ))}
      <div className="addPageButton" onClick={handleAddPage}>
        <GoPlusCircle size={24} />
      </div>
    </section>
  );
};

export default RecipeOrder;
