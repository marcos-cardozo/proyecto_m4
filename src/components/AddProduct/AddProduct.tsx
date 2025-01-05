"use client";

import { useCart } from "@/context/CartContext";
import { IProduct } from "@/interfaces/UserInterfaces/IProduct";
import { useEffect, useState } from "react";

export const AddProduct = ({ product }: { product: IProduct }) => {
  const { addItemToCart, items, countItems } = useCart();
  const [disable, setDisable] = useState(false);

  const clickHandler = () => {
    addItemToCart(product);
  };

  useEffect(() => {
    // if (countItems(product.id) >= product.stock) {
    //   setDisable(true);
    // }

    if (countItems(product.id) >= 1) {
      setDisable(true);
    }
  }, [items, countItems, product.id, product.stock]);

  return (
    <button
      onClick={clickHandler}
      className="btn bg-orange-400 p-3 rounded-[10px] font-satoshi font-[900] text-xl transition duration-300 ease-in-out hover:bg-orange-300 hover:shadow-lg hover:scale-105"
      disabled={disable}
    >
      AGREGAR AL CARRITO
    </button>
  );
};
