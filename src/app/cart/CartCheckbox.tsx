import React from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';

const CartCheckbox = ({ cart, checkItems, setCheckItems }) => {
  const isChecked = checkItems.includes(cart.title);

  const handleCheckboxChange = () => {
    cartSingleCheck(cart.title);
  };

  const cartSingleCheck = (id) => {
    if (isChecked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  return (
    <div key={cart.title} onClick={handleCheckboxChange}>
      {/* {checkEvent ? (
	            <button>{cart.check ? <RiCheckboxBlankCircleFill /> : <RiCheckboxBlankCircleLine />}</button>
	          ) : (
	            <input type="checkbox"></input>
	          )} */}
      <input
        type="checkbox"
        onChange={(e) => cartSingleCheck(cart.title)}
        checked={isChecked}
        className="hidden-checkbox"
      />
      <div className="custom-checkbox">{isChecked ? <RiCheckboxBlankCircleFill /> : <RiCheckboxBlankCircleLine />}</div>
      <span>{cart.title}</span>
    </div>
  );
};

export default CartCheckbox;
