export interface INavItem {
  texto: string;
  dirección: string;
}

export const navConfigLoggedIn: INavItem[] = [
  { texto: "Inicio", dirección: "" },
  { texto: "Mis Pedidos", dirección: "mis-pedidos" },
  { texto: "Carrito", dirección: "carrito" },
  { texto: "Mi cuenta", dirección: "mi-cuenta" },
];

export const navConfigLoggedOut: INavItem[] = [
  { texto: "Inicio", dirección: "" },
  { texto: "Carrito", dirección: "carrito" },
  { texto: "Iniciar Sesión", dirección: "auth/login" },
  { texto: "Registrarse", dirección: "auth/register" },
];
