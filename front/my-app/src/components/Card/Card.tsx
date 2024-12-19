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
    <div key={id} className="bg-electricPurple rounded-[10px] w-72 h-72 boxshadow-purple">
      <div className="flex flex-wrap justify-center items-center">
        <img src={image} className="w-40" />
      </div>
      <div>
      <h2 className="text-center pt-6 text-obsidian font-bebas text-2xl">{name}</h2>
      </div>
      <div className="bg-smeraldGreen rounded-[10px] w-20 h-8 ml-auto mr-auto mt-3 flex items-center justify-center">
        <p className="text-center text-obsidian font-bebas text-3xl">${price}</p>
      </div>
    </div>
  );
};
