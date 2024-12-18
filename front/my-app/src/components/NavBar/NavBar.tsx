import { navConfig, NavItem } from "@/data/navConfig";
import Link from "next/link";
import Image from "next/image";
import lupaSearch from "/public/imagenes/navbar/lupaSearch.png";

const NavBar = () => {
  return (
    <header className="bg-obsidian sticky top-0">
      <nav className="container mx-auto flex flex-row justify-between items-center p-4 ">
        <div className="flex bg-white rounded-[10px] w-1/3 mx-4 mt-2">
          <Image src={lupaSearch} alt="" className="size-8 p-1" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full rounded-full bg-gray-100 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none text-black"
          />
        </div>
        <span className=" text-electricPurple text-3xl mt-1 ml-10">
          ClickTech
        </span>
        <ul className="flex flex-row justify-between">
          {navConfig.map((item: NavItem) => {
            return (
              <li key={item.dirección} className="ml-6 mt-2 text-lg">
                <Link href={`/${item.dirección}`}>
                  <span className=" text-white hover:text-smeraldGreen">
                    {item.texto}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
