"use client";

import { useEffect, useState } from "react";
import { IProductPreview } from "../../components/Card/Card";
import { getProducts } from "../../helpers/getProducts";
import { Card } from "@/components/Card/Card";
import Link from "next/link";

export default function Inicio() {
  const [products, setProducts] = useState<IProductPreview[]>([]);

  useEffect(() => {
    getProducts()
      .then((response: IProductPreview[]) => {
        setProducts(response);
      })
      .catch((error) => {
        alert(`hubo un error al traer los productos, ${error}`);
      });
  }, []);

  return (
      <div>
        <div>
          <h1>Productos</h1>
          <div>
            {products.map(({ id, name, price, image }) => {
              return (
                <Link href={`producto/${id}`} key={id}>
                <Card
                  id={id}
                  name={name}
                  price={price}
                  image={image}
                  />
                  </Link>
              );
            })}
          </div>
        </div>
      </div>
  );
}
