'use client';
import { hashTagsState } from '@/recoil/atoms/recoilState';
import React, { useState } from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { useRecoilState } from 'recoil';

const HashTag = () => {
  const [tagItem, setTagItem] = useState('');
  const [hashTags, setHashTags] = useRecoilState(hashTagsState);

  const addHashTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const hashTag = tagItem.trim();
      const newHashTag = hashTag.replace(/[, ]+/g, '');
      console.log(newHashTag.length);
      if (newHashTag !== '') {
        setHashTags((prevHashTags) => {
          if (!prevHashTags.includes(newHashTag)) {
            return [...prevHashTags, newHashTag];
          }
          return prevHashTags;
        });
        setTagItem('');
      }
    }
  };

  const removeHashTag = (tag: string) => {
    console.log(tag);
    console.log('xxxx');
    setHashTags((prevHashTag) => prevHashTag.filter((item) => item !== tag));
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
        <div className="hashTagItem">
          {hashTags.map((tag) => (
            <div key={tag} className="hashTag" onClick={() => removeHashTag(tag)}>
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HashTag;
