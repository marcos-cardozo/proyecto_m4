export interface ICategories {
  text: string;
  image: string;
  id: number
}

export const categories: ICategories[] = [
  { id: 1, text: "CELULARES", image: "/imagenes/categorias/smartphones.png" },
  { id: 2, text: "PORTATILES", image: "/imagenes/categorias/laptops.png" },
  { id: 3, text: "TABLETAS", image: "/imagenes/categorias/tablets.png" },
  { id: 4, text: "RELOJES INTELIGENTES", image: "/imagenes/categorias/relojes.png" },
  { id: 5, text: "AUDIFONOS INALAMBRICOS", image: "/imagenes/categorias/auriculares.png" },
  { id: 6, text: "ALTAVOCES INTELIGENTES", image: "/imagenes/categorias/parlantes.png" },
];
