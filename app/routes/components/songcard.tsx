import { FaForward, FaPlay } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

interface MusicCardProps {
  image: string;
  link: string;
  title: string;
  music: string;
}

const MusicCard = ({ image, link, title, music }: MusicCardProps) => {
  return (
    <div className="bg-gradient-to-tr from-neutral-800 via-rose-900 to-neutral-800 h-96 w-72 2xl:h-[35rem] 2xl:w-[25rem] rounded-2xl p-2">
      <div className="flex flex-col place-content-center place-items-center gap-4 full scroll-smooth">
        <a href={link}>
          <img
            src={image}
            className="h-64 w-72 2xl:h-[22.5rem] 2xl:w-96 bg-zinc-800 rounded-2xl object-fit border-2 border-neutral-900"
          />
        </a>
        

        <h1 className="text-white text-ellipsis overflow-x-auto h-6 mx-2 2xl:h-10 2xl:text-3xl">
          {title}
        </h1>
        <audio controls crossOrigin="anonymous" className="w-64 hidden lg:block"><source src={music}/></audio>
        <div className="flex flex-col place-content-center place-items-center justify-between gap-4 2xl:gap-6 lg:hidden">
          <div className="flex gap-6 2xl:gap-9 2xl:pt-6">
            <FaBackward href={link} color="white" className="2xl:hidden" />
            <FaBackward
              href={link}
              size={20}
              color="white"
              className="hidden 2xl:block"
              
            />
            <FaPause href={link} color="white" className="2xl:hidden" />
            <FaPause
              href={link}
              size={20}
              color="white"
              className="hidden 2xl:block"
            />
            <FaPlay href={link} color="white" className="2xl:hidden" />
            <FaPlay
              href={link}
              size={20}
              color="white"
              className="hidden 2xl:block"
            />
            <FaForward href={link} color="white" className="2xl:hidden" />
            <FaForward
              href={link}
              size={20}
              color="white"
              className="hidden 2xl:block"
            />
          </div>
          <div className="w-40 h-[2px] 2xl:w-64 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
