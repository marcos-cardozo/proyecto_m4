/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { imgFooter } from "@/data/imgFooter";
import { InfoFooter, infoFooter } from "@/data/infoFooter";
import { linksFooter } from "@/data/linksFooter";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-smeraldGreen flex mt-40">
      <div className="flex flex-col pl-5 pr-[10rem] mb-5">
        <span className="text-[2rem] mb-5">ClickTech.</span>
        <div>
          {infoFooter.map((elemento: InfoFooter) => (
            <p key={elemento.text}>
              <span>{elemento.title}</span>
              {elemento.text}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col pr-[10rem] mb-5">
        <span className="text-[2rem] mb-5">Enlaces de interes</span>
        <div className="flex flex-col">
          {linksFooter.map((elemento, index) => (
            <Link
              href="#"
              key={index}
              className="underline hover:text-green-800"
            >
              <span>{elemento}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col mb-5 ml-5">
        <span className="text-[2rem] mb-5">Redes Sociales</span>
        <div className="flex justify-center items-center">
          {imgFooter.map((elemento) => (
            <Link href="#" key={elemento.name}>
            <img src={elemento.image} className="pr-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
