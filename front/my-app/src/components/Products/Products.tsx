import Link from "next/link";
import { Card, IProductPreview } from "../Card/Card";

import { getProducts } from "@/helpers/getProducts";
import "./products.css";

export default async function Products() {
  const products: IProductPreview[] = await getProducts();

  return (
    <div>
      <div>
        <div className="flex justify-center items-center mb-20 mt-32 bg-electricPurple rounded-[10px] w-2/5 m-auto boxshadow-purple">
          <h1 className=" text-5xl  text-center font-bebas text-obsidian ">
            ALGUNOS PRODUCTOS DE INTERES
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center  gap-20">
          {products.map(({ id, name, price, image }) => {
            return (
              <Link href={`producto/${id}`} key={id}>
                <Card id={id} name={name} price={price} image={image} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
