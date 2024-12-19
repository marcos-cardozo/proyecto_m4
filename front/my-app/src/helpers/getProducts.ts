import { IProduct } from "../interfaces/OrderInterfaces/IProduct";
import { products } from "../data/products";

export const getProducts = async (): Promise<IProduct[]> => {
  return products;
};
