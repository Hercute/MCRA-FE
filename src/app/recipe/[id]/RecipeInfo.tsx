import TestThumbnail from '@/assets/image 42.png';
import Image from 'next/image';
import { TbClock } from 'react-icons/tb';
import { BiHeart } from 'react-icons/bi';

const RecipeInfo = () => {
  return (
    <section>
      <main className="infobox">
        <Image src={TestThumbnail} alt="레시피썸네일" width={375} />
        <p className="recipeName">간장비빔국수</p>
        <p className="recipeTitle">댕맛있는 간장비빔국수 레시피 공유합니다~!</p>
        <p className="recipeDescription">
          예전에 유튜브에서 본건데, 진짜 너무 맛있어서 공유합니다. 간장비빔국수는 꼭 이렇게 해먹어요! 청양고추 필수니까
          꼭 넣어드세요!
        </p>
      </main>
      <div className="subDetailBox">
        <div className="subDetail">
          <TbClock />
          <p>10분</p>
        </div>
        <div className="subDetail">
          <BiHeart />
          <p>2,314</p>
        </div>
      </div>
    </section>
  );
};

export default RecipeInfo;
