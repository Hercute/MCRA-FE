'use client';
import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { orderPagesState } from '@/recoil/atoms/recoilState';
import { OrderPage } from '@/types/recipe';
import { IoMdClose } from 'react-icons/io';
import { AiOutlinePicture } from 'react-icons/ai';
import { GoPlusCircle } from 'react-icons/go';
import Image from 'next/image';
import { PiCookingPot } from 'react-icons/pi';

const RecipeComponent: React.FC = () => {
  const [recipePages, setRecipePages] = useRecoilState<OrderPage[]>(orderPagesState);

  const handleAddPage = () => {
    const newPage: OrderPage = {
      id: Date.now(),
      description: '',
      file: undefined,
      filePreview: undefined,
      showDeleteButton: true
    };
    setRecipePages([...recipePages, newPage]);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, pageId: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const filePreview = URL.createObjectURL(file);
      setRecipePages(recipePages.map((page) => (page.id === pageId ? { ...page, file, filePreview } : page)));
      console.log(recipePages.map((page) => page));
    }
  };

  const handleDescription = (pageId: number, description: string) => {
    setRecipePages(recipePages.map((page) => (page.id === pageId ? { ...page, description } : page)));
  };

  const handleDeleteOrder = (pageId: number) => {
    setRecipePages(recipePages.filter((page) => page.id !== pageId));
  };

  const handleDivClick = (pageId: number) => {
    document.getElementById(`fileInput-${pageId}`)?.click();
  };

  return (
    <section className="recipeSection">
      <div className="uploadDiv">
        <PiCookingPot size={27} />
        <span>조리순서</span>
      </div>
      {recipePages.map((page, index) => (
        <div className="orderItem" key={page.id}>
          <div className="orderFileBox" onClick={() => handleDivClick(page.id)}>
            {page.filePreview ? (
              <Image src={page.filePreview} alt={page.description} className="uploadedImage" width={80} height={80} />
            ) : (
              <AiOutlinePicture size={36} />
            )}
            <input
              type="file"
              className="orderFile"
              id={`fileInput-${page.id}`}
              style={{ display: 'none' }}
              onChange={(e) => handleFileChange(e, page.id)}
            />
          </div>
          <div className="recipeExplanation">
            <span>{index + 1}</span>
            <textarea
              name="description"
              value={page.description}
              onChange={(e) => handleDescription(page.id, e.target.value)}
              placeholder="레시피설명"
            ></textarea>
          </div>
          {page.showDeleteButton && (
            <span className="deleteButton" onClick={() => handleDeleteOrder(page.id)}>
              <IoMdClose size={20} color="red" />
            </span>
          )}
        </div>
      ))}
      <div className="addPageButton" onClick={handleAddPage}>
        <GoPlusCircle size={24} />
      </div>
    </section>
  );
};

export default RecipeComponent;
