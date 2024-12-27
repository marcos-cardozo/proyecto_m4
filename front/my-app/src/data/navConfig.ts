export interface NavItem {
  texto: string;
  dirección: string;
}

export const navConfig: NavItem[] = [
  { texto: "Inicio", dirección: "" },
  { texto: "Sobre Nosotros", dirección: "sobre-nosotros" },
  { texto: "Carrito", dirección: "carrito" },
  { texto: "Iniciar Sesion", dirección: "auth/login" },
  { texto: "Registrarse", dirección: "auth/register" },
];
