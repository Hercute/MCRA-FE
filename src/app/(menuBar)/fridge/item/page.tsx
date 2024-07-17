import './style.css';
import Image from 'next/image';
import button from '@/assets/button/button_orange.png';

const FridgeAddPage = () => {
  return (
    <ul className="largeCategoryList">
      <li>
        <Image src={button} alt="버튼 배경 이미지" />
        <h4>야채</h4>
      </li>
      <li>
        <Image src={button} alt="버튼 배경 이미지" />
        <h4>과일</h4>
      </li>
      <li>
        <Image src={button} alt="버튼 배경 이미지" />
        <h4>육류</h4>
      </li>
      <li>
        <Image src={button} alt="버튼 배경 이미지" />
        <h4>해물</h4>
      </li>
      <li>
        <Image src={button} alt="버튼 배경 이미지" />
        <h4>곡류</h4>
      </li>
      <li>
        <Image src={button} alt="버튼 배경 이미지" />
        <h4>조미료</h4>
      </li>
      <li>
        <Image src={button} alt="버튼 배경 이미지" />
        <h4>가공식품</h4>
      </li>
      <li>
        <Image src={button} alt="버튼 배경 이미지" />
        <h4>음료</h4>
      </li>
      <li>
        <Image src={button} alt="버튼 배경 이미지" />
        <h4>기타</h4>
      </li>
    </ul>
  );
};

export default FridgeAddPage;
