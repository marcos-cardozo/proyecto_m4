import { IProduct } from "@/data/products";
import { getProducts } from "./getProducts";

const getProduct = async (id: string) => {
  const products: IProduct[] = await getProducts();

  const product: IProduct | undefined = products.find(
    (product) => product.id === parseInt(id, 10)
  );
  if (!product) throw new Error("producto no existente");
  return product;
};

export default getProduct;
