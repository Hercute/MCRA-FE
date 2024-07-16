import React from 'react';
import RecipeUpload from './RecipeUpload';
import RecipeIngredient from './RecipeIngredient';
import RecipeOrder from './RecipeOrder';
import HashTag from './HashTag';
import RecipeRegister from './RecipeRegister';

import './upload.css';

const page = () => {
  return (
    <div style={{ padding: '0 0.5rem', width: '375px', border: '1px solid #999999', margin: '0 auto' }}>
      <RecipeUpload />
      <RecipeIngredient />
      <RecipeOrder />
      <HashTag />
      <RecipeRegister />
    </div>
  );
};

export default page;
