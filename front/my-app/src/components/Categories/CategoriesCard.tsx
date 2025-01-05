import Image from "next/image";

interface ICategoriesCard {
  text: string;
  image: string;
  index: number;

}

const CategoriesCard = ({ text, image, index}: ICategoriesCard) => {
  return (
    <div
    className={`flex flex-col rounded-[10px] w-72 h-72 transform transition duration-300 ease-in-out hover:scale-105 ${
        index > 2 ? "bg-smeraldGreen boxshadow-greenCard"  : "bg-electricPurple boxshadow-purpleCard"
      } `}
    >
      <Image
        src={image}
        alt={text}
        width={200}
        height={200}
        className="m-auto"
      />
      <div className="pb-8">
        <h2 className="text-center text-obsidian font-satoshi font-[800] text-2xl">{text}</h2>
      </div>
    </div>
  );
};

export default CategoriesCard;
