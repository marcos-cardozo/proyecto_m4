"use client"

import Link from "next/link";
import { Card, IProductPreview } from "../Card/Card";
import { useEffect, useState } from "react";
import { getProducts } from "@/helpers/getProducts";

export default function Products() {
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
            <div className="flex justify-center items-center my-20 mt-32">
            <h1 className="bg-electricPurple rounded-[10px] text-4xl w-2/5 text-center text-obsidian">ALGUNOS PRODUCTOS DE INTERES</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center pr-[110px]">
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