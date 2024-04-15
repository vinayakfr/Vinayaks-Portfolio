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
    <div className="bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 h-96 w-72 2xl:h-[35rem] 2xl:w-[25rem] rounded-2xl p-2">
      <div className="flex flex-col place-content-center place-items-center gap-4 full scroll-smooth">
        <a href={link}><img
          // onClick={open()}
          
          src={image}
          className="h-64 w-72 2xl:h-[22.5rem] 2xl:w-96 bg-zinc-800 rounded-2xl object-fit border-2 border-neutral-900"
        /></a>
        
        <h1 className="text-white text-ellipsis overflow-x-auto h-6 mx-2 2xl:h-10 2xl:text-3xl">
          {title}
        </h1>
        <div className="flex flex-col place-content-center place-items-center justify-between gap-4 2xl:gap-6">
          <div className="flex gap-2 2xl:gap-9 2xl:pt-6">
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
          <div className="w-28 h-[2px] 2xl:w-64 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
