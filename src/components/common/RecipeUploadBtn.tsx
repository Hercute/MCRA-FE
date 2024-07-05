import Link from 'next/link';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

import './RecipeUploadBtn.css';

const RecipeUploadBtn = () => {
  return (
    <Link href="/recipe/upload">
      <button className="recipeUploadBtn" type="button">
        <FaPlus size={18} />
        <span>레시피 올리기</span>
      </button>
    </Link>
  );
};

export default RecipeUploadBtn;
