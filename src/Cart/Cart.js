import React from 'react';
import { useCart } from './CartStateProvider';

const Cart = () => {
  const cart = useCart();
  return (
    <div>
      {`Am I open? ${cart.cartIsOpen ? 'yes!' : 'no'}`}
      <p>
        <button onClick={cart.toggleCart}>Toggle</button>
      </p>
    </div>
  );
};

export default Cart;
