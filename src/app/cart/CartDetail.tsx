'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';

const CartDetail = () => {
  const [checkEvent, setCheckEvent] = useState(false);

  const cartNum = [
    { category: '과일', subCategory: '', name: '사과', check: false },
    { category: '과일', subCategory: '', name: '딸기', check: false },
    { category: '과일', subCategory: '', name: '수박', check: false }
  ];
  const cartZero = 0;

  const cartCheckEvent = () => {
    setCheckEvent(!checkEvent);
  };

  const cartUncheckEvent = () => {
    setCheckEvent(!checkEvent);
  };

  return (
    <div className="cartDetailDiv">
      {cartNum ? (
        <div>
          <div>
            {checkEvent ? (
              <div>
                <button onClick={cartUncheckEvent}>취소</button>
                <button>전체선택</button>
              </div>
            ) : (
              <button onClick={cartCheckEvent}>선택</button>
            )}
          </div>
          {cartNum.map((cart) => {
            return (
              <div key={cart.name}>
                <button>{cart.check ? <RiCheckboxBlankCircleFill /> : <RiCheckboxBlankCircleLine />}</button>
                <span>{cart.name}</span>
              </div>
            );
          })}
          <button>장바구니에 재료 추가하기</button>
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
