import React, { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev[item.id];
      if (existingItem) {
        return {
          ...prev,
          [item.id]: {
            ...existingItem,
            quantity: existingItem.quantity + 1,
          },
        };
      } else {
        return {
          ...prev,
          [item.id]: {
            ...item,
            quantity: 1,
          },
        };
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const item = prev[id];
      if (!item) return prev;

      if (item.quantity > 1) {
        return {
          ...prev,
          [id]: {
            ...item,
            quantity: item.quantity - 1,
          },
        };
      } else {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
    });
  };

  const getTotalCartAmount = () => {
    return Object.values(cartItems).reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
