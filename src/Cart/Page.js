import React from 'react';
import Cart from './Cart';
import CartStateProvider from './CartStateProvider';

const Page = () => {
  return (
    <CartStateProvider>
      <Cart />
    </CartStateProvider>
  );
};

export default Page;
