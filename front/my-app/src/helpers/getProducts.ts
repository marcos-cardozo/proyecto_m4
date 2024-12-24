import { products, IProduct } from "../data/products";

export const getProducts = async (): Promise<IProduct[]> => {
  return products;
};
