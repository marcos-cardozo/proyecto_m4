"use client";

import { useCart } from "@/context/CartContext";

const CartStatus = () => {
  const { items } = useCart();
  return <span className="p-1">Productos: {items.length}</span>;
};

export default CartStatus;
