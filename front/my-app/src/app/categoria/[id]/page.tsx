import "./categoria.css";

import { Card } from "@/components/Card/Card";
import { categories } from "@/data/categorias";
import { getProducts } from "@/helpers/getProducts";
import { IProduct } from "@/interfaces/UserInterfaces/IProduct";
import Link from "next/link";

const Categoria = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const currentCategory = categories.find(
    (categorie) => categorie.id === Number(id)
  );

  const products = await getProducts();

  const filteredProducts = products.filter(
    (product: IProduct) => product.categoryId === currentCategory?.id
  );

  if (!filteredProducts) {
    return (
      <div>
        <h1>Categoria no encontrada</h1>
      </div>
    );
  }
  return (
    <div className="flex mt-12 flex-col">
      <div className="flex justify-center items-center my-20 mt-32 text-obsidian">
        <h1 className="bg-electricPurple rounded-[10px] text-5xl text-center font-satoshi font-[900] boxshadow-purple p-2">
          {currentCategory?.text}
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        {filteredProducts.map(({id, name, price, image}: IProduct) => {
          return (
            <Link href={`/producto/${id}`} key={id}>
              <Card
                id={id}
                name={name}
                price={price}
                image={image}
                key={id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categoria;
