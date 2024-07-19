import React from 'react';
import CartDetail from './CartDetail';

import './CartMain.css';

const CartMain = () => {
  return (
    <div className="cartMainDiv">
      <h2 className="cartMainTitle">장바구니</h2>
      <CartDetail />
    </div>
  );
};

export default CartMain;
