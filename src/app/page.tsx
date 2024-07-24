import Image from 'next/image';

import MainHeader from '@/components/layout/MainHeader';
import buttonImage from '../assets/button/button.png';
import Link from 'next/link';
import Menu from '@/components/layout/Menu';

export default function Home() {
  return (
    <main style={{ width: '375px', border: '1px solid #999999', margin: '0 auto' }}>
      <MainHeader />
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3rem',
          padding: '5rem 0'
        }}
      >
        <Link href="/cart">
          <Image src={buttonImage} alt="" />
          장보기
        </Link>
        <Link href="fridge">
          <Image src={buttonImage} alt="" />
          냉장고
        </Link>
      </section>
      <Menu />
    </main>
  );
}
