export interface NavItem {
  text: string;
  path: string;
}

export const navConfig: NavItem[] = [
  { text: "Inicio", path: "inicio" },
  { text: "Sobre Nosotros", path: "sobre-nosotros" },
  { text: "Carrito", path: "carrito" },
];
