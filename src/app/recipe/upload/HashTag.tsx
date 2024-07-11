'use client';
import { hashTagsState } from '@/recoil/atoms/recoilState';
import React, { useState } from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { useRecoilState } from 'recoil';

const HashTag = () => {
  const [tagItem, setTagItem] = useState('');
  const [hashTags, setHashTags] = useRecoilState(hashTagsState);

  const addHashTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newHashTag = tagItem.trim();
    setHashTags((prevHashTags) => {
      return [...new Set([...prevHashTags, newHashTag])];
    });
  };
  return (
    <section className="recipeSection">
      <div className="uploadDiv">
        <IoBookOutline size={27} />
        <span>해시태그</span>
      </div>
      <div className="hashTagBox">
        <input
          placeholder="태그를 입력하세요"
          value={tagItem}
          onChange={(e) => setTagItem(e.target.value)}
          onKeyUp={addHashTag}
        />
      </div>
    </section>
  );
};

export default HashTag;
