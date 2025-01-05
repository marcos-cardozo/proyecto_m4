/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { IProduct } from "@/interfaces/UserInterfaces/IProduct";
import { createContext, useContext, useEffect, useState } from "react";

interface CartContextType {
  items: IProduct[];
  addItemToCart: (item: IProduct) => void;
  removeItemFromCart: (id: number) => void;
  emptyCart: () => void;
  countItems: (id: number) => number;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItemToCart: (item: IProduct) => {},
  removeItemFromCart: (id: number) => {},
  emptyCart: () => {},
  countItems: (id: number) => 0,
});

export const CartProvided = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<IProduct[]>([]);

  useEffect(() => {
    const savedItem = localStorage.getItem("cartItems");
    if (savedItem) return setItems(JSON.parse(savedItem));
    setItems([]);
  }, []);

  const addItemToCart = (item: IProduct) => {
    setItems([...items, item]);
    localStorage.setItem("cartItems", JSON.stringify([...items, item]));
  };
  const removeItemFromCart = (id: number) => {
    const index = items.findIndex((item) => item.id === id); // Encuentra la primera instancia
    if (index !== -1) {
      const updatedItems = [...items];
      updatedItems.splice(index, 1); // Elimina solo un elemento
      setItems(updatedItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    }
  };
  

  const emptyCart = () => {
    setItems([]);
    localStorage.removeItem("cartItems");
  };

  const countItems = (id: number) => items.filter((e) => e.id === id).length;

  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        removeItemFromCart,
        emptyCart,
        countItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
