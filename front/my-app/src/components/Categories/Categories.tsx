"use client";
import { ICategories, categories } from "@/data/categorias";
import CategoriesCard from "./CategoriesCard";
import "./categories.css"

const Categories = () => {
  return (
    <>
      <div className="flex justify-center items-center my-20 mt-32 text-obsidian">
        <h1 className="bg-electricPurple rounded-[10px] text-5xl w-80 text-center bebas-neue-regular">
          CATEGORIAS
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center pr-[110px]">
        {categories.map((elemento: ICategories, index: number) => {
          return (
            <CategoriesCard
              text={elemento.text}
              image={elemento.image}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Categories;
