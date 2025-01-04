import Link from "next/link";
import ItemsNav from "../ItemsNav/ItemsNav";
import CartStatus from "../CartStatus/CartStatus";
const NavBar = () => {

  return (
    <header className="flex justify-between items-center w-full fixed top-0 bg-obsidian z-10">
      <nav className="flex w-full items-center py-3 ml-5">
        <Link href={"/"}>
          <span className=" font-telma text-electricPurple text-3xl">
            ClickTech
          </span>
        </Link>
        <ul className="flex ml-auto gap-10 mr-5">
          <ItemsNav />
          <li className="mt-[0.25rem] text-smeraldGreen font-cabinet text-lg border-2 border-smeraldGreen rounded-[10px]">
            <CartStatus />
          </li>
        </ul>
      </nav>
    </header>
  );
};
{
  /*  */
}

export default NavBar;
