/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export interface IProductPreview {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const Card = ({ id, name, price, image }: IProductPreview) => {
  return (
    <div key={id}>
      <img src={image} />
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
};


