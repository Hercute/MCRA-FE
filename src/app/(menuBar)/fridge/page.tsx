import Link from 'next/link';

const FridgePage = () => {
  return (
    <div>
      page
      <Link href="fridge/item">
        <button>냉장고 채우기</button>
      </Link>
    </div>
  );
};

export default FridgePage;
