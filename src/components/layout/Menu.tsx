import Link from 'next/link';

const Menu = () => {
  return <section>
  <Link href='/'>
  <h4>홈</h4>
  </Link>
  <Link href='/recipe'>
  <h4>레시피</h4>
  </Link>
  <Link href='/fridge'>
  <h4>냉장고</h4>
  </Link>
  <Link href='/cart'>
  <h4>장보기</h4>
  </Link>
  <Link href='/login'>
  <h4>로그인</h4>
  </Link>
</section>;
};

export default Menu;
