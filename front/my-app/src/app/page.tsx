import Image from "next/image";
import ImgBaner from "../../public/imagenes/banner/Banner-de-la-pagina.svg";
import Categories from "@/components/Categories/Categories";
import Products from "@/components/Products/Products";
import Footer from "@/components/Footer/Footer";

export default function Landing() {
  return (
    <>
      <div className="flex justify-center items-center mt-8 ">
        <Image src={ImgBaner} alt="" className="w-9/12" />
      </div>

      <div>
        <div>
          <Categories />
          <Products />
          <Footer />
        </div>
      </div>
    </>
  );
}
