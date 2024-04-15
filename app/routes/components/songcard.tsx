import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

interface MusicCardProps {
  image: string;
  link: string;
  title: string;
}

const MusicCard = ({ image, link, title }: MusicCardProps) => {
  return (
    <div className="bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 h-96 w-72 rounded-2xl p-2">
      <div className="flex flex-col place-content-center place-items-center gap-4 full scroll-smooth">
        <img
          src={image}
          className="h-64 w-72 bg-zinc-800 rounded-2xl object-fit border-2 border-neutral-900"
        />
        <h1 className="text-white text-ellipsis overflow-x-auto h-6 mx-2">{title}</h1>
        <div className="flex flex-col place-content-center place-items-center justify-between gap-4">
          <div className="flex gap-2">
            <FaBackward href={link} color="white"/>
            <FaPause href={link} color="white"/>
            <FaPlay href={link} color="white"/>
            <FaForward href={link} color="white"/>
          </div>
          <div className=" w-28 h-[2px] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
