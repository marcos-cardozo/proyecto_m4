/* eslint-disable @next/next/no-img-element */
import { AddProduct } from "@/components/AddProduct/AddProduct";
import "./producto.css";


import getProduct from "@/helpers/getProduct";
import Link from "next/link";
import { IProduct } from "@/interfaces/UserInterfaces/IProduct";
import { BuyProduct } from "@/components/BuyProduct/BuyProduct";

const Product = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const chosenProduct: IProduct | undefined = await getProduct(slug);
  console.log(chosenProduct);
  if (chosenProduct === undefined) {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="mt-40 text-center bg-electricPurple rounded-[10px] text-xl w-[17rem] p-2">
          Producto no encontrado 🤷‍♂️
        </p>
        <Link href="/">
          <button className="btn bg-smeraldGreen p-3 mt-5 rounded-[10px] font-satoshi font-[900] text-xl transition duration-300 ease-in-out hover:bg-green-200 hover:shadow-lg hover:scale-105 text-obsidian">
            VOLVER AL HOME
          </button>
        </Link>
      </div>
    );
  }

  const { name, price, description, image, stock } = chosenProduct;

  return (
    <main className="flex justify-center items-center text-obsidian">
      <div className="flex flex-col w-[60rem] rounded-[10px] mt-20">
        <div className="flex justify-center items-center bg-electricPurple rounded-[10px] boxshadow-purple">
          <img src={image} alt={name} className="h-[30rem]" />
        </div>

        <span className="bg-electricPurple rounded-[10px] inline-block px-4 py-2 font-satoshi font-[900] text-5xl text-center mt-8 boxshadow-purple cursor-default">
          {name.toUpperCase()}
        </span>

        <div className="flex justify-center items-center my-8 bg-electricPurple rounded-[10px] boxshadow-purple">
          <p className="w-[90%] font-archivo font-[600] text-start text-[1.2rem] py-5 cursor-default">
            {description}
          </p>
        </div>

        <div className="bg-electricPurple rounded-[10px] boxshadow-purple ">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <span className="font-robotoCondensed text-[1.2rem] ml-10 my-5 text-center bg-smeraldGreen rounded-[10px] p-1 w-[8rem] font-archivo font-[600] cursor-default">
                Precio: ${price}
              </span>
              <span className="font-robotoCondensed text-[1.2rem] ml-10 my-5 text-center bg-orange-400 rounded-[10px] p-1 w-[12rem] font-archivo font-[600] cursor-default">
                Stock disponible: {stock}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly my-10">
          <AddProduct product={chosenProduct}/>
          <BuyProduct product={chosenProduct}/>
        </div>
      </div>
    </main>
  );
};

export default Product;
