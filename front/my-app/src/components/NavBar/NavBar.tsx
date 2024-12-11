import { navConfig, NavItem } from "@/data/navConfig";
import Link from "next/link";

const NavBar = () => {
  return (
    <header>
      <ul>
        {navConfig.map((item: NavItem) => {
          return (
            <li key={item.path}>
              <Link href={`/${item.path}`}>
                <span className="">{item.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default NavBar;
