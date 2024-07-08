import React from 'react';
import { IoBookOutline } from 'react-icons/io5';

const RecipeOrder = () => {
  return (
    <section className="recipeSection">
      <div className="uploadDiv">
        <IoBookOutline size={27} />
        <span>조리순서</span>
      </div>
      <div>
        <input type="file" />
      </div>
    </section>
  );
};

export default RecipeOrder;
