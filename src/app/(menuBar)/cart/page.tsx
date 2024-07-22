import MainHeader from '@/components/layout/MainHeader';
import CartMain from './CartMain';

const CartPage = () => {
  return (
    <div style={{ width: '375px', border: '1px solid #999999', margin: '0 auto' }}>
      <MainHeader />
      <CartMain />
    </div>
  );
};

export default CartPage;
