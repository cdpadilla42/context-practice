import React, { createContext, useContext, useState } from 'react';
const CartContext = createContext();

export default function CartStateProvider({ children }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function toggleCart() {
    setCartIsOpen(!cartIsOpen);
  }

  return (
    <CartContext.Provider
      value={{
        cartIsOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const all = useContext(CartContext);
  return all;
}
