'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

const CartDetail = () => {
  const [checkEvent, setCheckEvent] = useState(false);
  const [checkItems, setCheckItems] = useState([]);
  const [cartModal, setCartModal] = useState(false);
  const [cartKeep, setCartKeep] = useState('');

  const cartNum = [{ title: '사과' }, { title: '딸기' }, { title: '수박' }];

  const cartEventBtnArray = [{ title: '실온' }, { title: '냉장' }, { title: '냉동' }, { title: '삭제' }];
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

  const cartModalOnBtn = (title) => {
    if (checkItems.length === 0) {
      toast.warning('선택된 재료가 없어요!');
      return false;
    }
    setCartModal(true);
    setCartKeep(title);
  };

  const cartModalCancelBtn = () => {
    setCartModal(false);
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
          {checkEvent ? (
            <div className="cartEventBtnDiv">
              {cartEventBtnArray.map((item) => {
                return (
                  <div>
                    <button onClick={() => cartModalOnBtn(item.title)}>{item.title}</button>
                  </div>
                );
              })}
            </div>
          ) : (
            <Link href="/cart/plus">
              <button type="button">장바구니에 재료 추가하기</button>
            </Link>
          )}
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
      {cartModal && (
        <div className="cartModalDiv">
          <div className="cartModalStyle">
            <form>
              <h3>{cartKeep === '삭제' ? `${cartKeep} 할까요?` : `${cartKeep}에 보관할까요?`}</h3>
              <div>
                <button onClick={cartModalCancelBtn}>취소</button>
                <button>확인</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetail;
