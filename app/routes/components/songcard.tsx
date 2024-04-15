import { IoPlayCircle } from "react-icons/io5";

interface MusicCardProps {
  image: string;
  link: string;
  color: string;
  title: string;
}

const MusicCard = ({ image, link, color, title }: MusicCardProps) => {
  return (
    <div className="bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 h-96 w-72 rounded-2xl p-2">
      <div className="flex flex-col place-content-center place-items-center gap-4 full scroll-smooth">
        <img
          src={image}
          className="h-64 w-72 bg-zinc-800 rounded-2xl object-fit border-2 border-neutral-900"
        />
        <h1 className="text-white">{title}</h1>
        <div className="flex place-content-center place-items-center justify-between gap-4">
          <button className="bg-white h-7 w-7 rounded-full "></button>
          <div className=" w-28 h-[2px] bg-white"></div>
          <button className="bg-white h-7 w-7 rounded-full"></button>
        </div>
        {/* <a href={link} className="absolute"><IoPlayCircle size={70} color={color} className="translate-y-[215px] translate-x-[420px]"/></a>  */}
      </div>
    </div>
  );
};

export default MusicCard;
