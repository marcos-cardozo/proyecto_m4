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
    <div key={id} className="bg-electricPurple rounded-[10px] w-72 h-72 ml-[120px] mb-8">
      <div className="flex flex-wrap justify-center items-center">
        <img src={image} className="w-40" />
      </div>
      <h2 className="text-center pt-6 text-obsidian">{name}</h2>
      <div className="bg-smeraldGreen rounded-[10px] w-40 h-8 ml-auto mr-auto mt-3 flex items-center justify-center">
        <p className="text-center text-obsidian">${price}</p>
      </div>
    </div>
  );
};
