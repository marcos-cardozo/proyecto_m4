import Image from "next/image";
import ImgBaner from "../../public/imagenes/banner/Banner-de-la-pagina.svg";
import Categories from "@/components/Categories/Categories";
import Products from "@/components/Products/Products";

export default function Landing() {
  return (
    <>
      <div className="flex justify-center items-center mt-28 ">
        <Image src={ImgBaner} alt="" className="w-9/12" />
      </div>

      <main>
        <section>
          <Categories />
          <Products />
        </section>
      </main>
    </>
  );
}
