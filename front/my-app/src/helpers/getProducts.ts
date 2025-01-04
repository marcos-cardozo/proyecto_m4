import { NEXT_PUBLIC_API_URL } from "@/config/envs";
import { IProduct } from "../data/products";

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/products`);
  console.log(response);
  const products = await response.json();

  return products;
};
