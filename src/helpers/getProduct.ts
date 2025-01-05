import { IProduct } from "@/data/products";
import { getProducts } from "./getProducts";

const getProduct = async (id: string) => {
  const products: IProduct[] = await getProducts();

  const product: IProduct | undefined = products.find(
    (product) => product.id === parseInt(id, 10)
  );

  return product;
};

export default getProduct;
