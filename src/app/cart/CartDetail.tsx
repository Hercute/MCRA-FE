'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';

const CartDetail = () => {
  const [checkEvent, setCheckEvent] = useState(false);
  const [checkItems, setCheckItems] = useState([]);

  const cartNum = [
    { title: '사과', check: false },
    { title: '딸기', check: false },
    { title: '수박', check: false }
  ];
  const cartZero = 0;

  const cartCheckEvent = () => {
    setCheckEvent(!checkEvent);
  };

  const cartUncheckEvent = () => {
    setCheckEvent(!checkEvent);
    setCheckItems([]);
  };

  const cartSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const cartAllCheck = () => {
    if (checkItems.length === cartNum.length) {
      setCheckItems([]);
    } else {
      const idArray = [];
      cartNum.forEach((prev) => idArray.push(prev.title));
      setCheckItems(idArray);
    }
  };

  console.log(checkItems);

  return (
    <div className="cartDetailDiv">
      {cartNum ? (
        <div>
          <div>
            {checkEvent ? (
              <div>
                <button onClick={cartUncheckEvent}>취소</button>
                <button onClick={cartAllCheck}>전체선택</button>
              </div>
            ) : (
              <button onClick={cartCheckEvent}>선택</button>
            )}
          </div>
          {cartNum.map((cart) => {
            return (
              <div key={cart.title}>
                {checkEvent ? (
                  // <button>{cart.check ? <RiCheckboxBlankCircleFill /> : <RiCheckboxBlankCircleLine />}</button>
                  <input
                    type="checkbox"
                    onChange={(e) => cartSingleCheck(e.target.checked, cart.title)}
                    checked={checkItems.includes(cart.title) ? true : false}
                  />
                ) : (
                  <></>
                )}
                <span>{cart.title}</span>
              </div>
            );
          })}
          <Link href="/cart/plus">
            <button type="button">장바구니에 재료 추가하기</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cartDetailLinkDiv">
            <Link className="cartPlusLink" href="/cart/plus">
              <AiOutlinePlus className="cartPlusIcon" />
              <span>재료추가</span>
            </Link>
          </div>
          <p>장바구니에 재료가 없습니다.</p>
        </>
      )}
    </div>
  );
};

export default CartDetail;
