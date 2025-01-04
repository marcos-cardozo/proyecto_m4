"use client";

import { useAuth } from "@/context/AuthContext";
import {
  INavItem,
  navConfigLoggedIn,
  navConfigLoggedOut,
} from "@/data/navConfig";
import Link from "next/link";
import Swal from "sweetalert2";

const ItemsNav = () => {
  const { isAuthenticated, logout } = useAuth();

  const LogOutHandler = () => {
        Swal.fire({
            title: "¿Estas seguro que quieres Cerrar Sesión?",
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: "No"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("¡Sesión Cerrada!", "", "success");
              logout()
            } 
          });
}

  return isAuthenticated ? (
    <>
      {navConfigLoggedIn.map((navItem: INavItem) => {
        return (
          <li
            key={navItem.texto}
            className="text-smeraldGreen hover:text-green-200 font-cabinet text-lg mt-1"
          >
            <Link href={`/${navItem.dirección}`}>
              <span>{navItem.texto}</span>
            </Link>
          </li>
        );
      })}
      <li
        className="text-smeraldGreen hover:text-green-200 font-cabinet text-lg mt-1 cursor-pointer"
        onClick={LogOutHandler}
      >
        <span>Cerrar Sesión</span>
      </li>
    </>
  ) : (
    navConfigLoggedOut.map((navItem: INavItem) => {
      return (
        <li
          key={navItem.texto}
          className="text-smeraldGreen hover:text-green-200 font-cabinet text-lg mt-1"
        >
          <Link href={`/${navItem.dirección}`}>
            <span>{navItem.texto}</span>
          </Link>
        </li>
      );
    })
  );
};

export default ItemsNav;
