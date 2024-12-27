import { navConfig, NavItem } from "@/data/navConfig";
import Link from "next/link";


const NavBar = () => {
  return (
    <header className="flex justify-between items-center w-full fixed top-0 bg-obsidian z-10">
      <nav className="flex w-full items-center py-5 ml-5">
        <Link href={"/"}>
        <span className=" font-telma text-electricPurple text-3xl">
          ClickTech
        </span>
        </Link>
        <ul className="flex ml-auto gap-16 mr-5">
          {navConfig.map((item: NavItem) => {
            return (
              <li key={item.dirección} className="text-smeraldGreen hover:text-green-200 font-cabinet text-lg mt-1">
                <Link href={`/${item.dirección}`}>
                  <span>
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
