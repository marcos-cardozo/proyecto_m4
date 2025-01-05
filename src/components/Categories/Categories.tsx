"use client";
import { ICategories, categories } from "@/data/categorias";
import CategoriesCard from "./CategoriesCard";
import "./categories.css";
import Link from "next/link";

const Categories = () => {
  return (
    <section>
      <div className="flex justify-center items-center my-20 mt-32 text-obsidian">
        <h1 className="bg-electricPurple rounded-[10px] text-5xl w-80 text-center font-satoshi font-[900] boxshadow-purple">
          CATEGORIAS
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-20">
        {categories.map((elemento: ICategories, index: number) => {
          return (
            <Link href={`/categoria/${elemento.id}`} key={index}>
              <CategoriesCard
                text={elemento.text}
                image={elemento.image}
                index={index}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
