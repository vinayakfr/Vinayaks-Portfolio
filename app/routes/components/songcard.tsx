import { FaForward, FaPlay } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

interface MusicCardProps {
  image: string;
  link: string;
  title: string;
}

const MusicCard = ({ image, link, title}: MusicCardProps) => {
  return (
    <div className="bg-gradient-to-tr from-neutral-800 via-rose-900 to-neutral-800 h-[22.5rem] w-72 2xl:h-[31rem] 2xl:w-[62.5rem] rounded-3xl p-2">
      <div className="flex flex-col 2xl:grid 2xl:grid-cols-2 place-content-center place-items-center gap-4 scroll-smooth">
        <a href={link}>
          <img
            src={image}
            className="h-64 w-72 2xl:h-[30rem] 2xl:w-[30rem] rounded-2xl object-fit"
          />
        </a>
        <div className="grid xl:grid-rows-1 2xl:grid-rows-3 2xl:place-content-center 2xl:place-items-center">
          <h1 className="text-white text-center overflow-auto mx-2 xl:h-max xl:text-[1.3rem] 2xl:text-7xl">
            {title}
          </h1>
          <div className="flex flex-col place-content-center place-items-center justify-between gap-4 2xl:gap-6 lg:hidden 2xl:block">
            <div className="flex place-content-center place-items-center gap-6 2xl:gap-9 2xl:pt-10">
              <FaBackward href={link} color="white" className="2xl:hidden" />
              <FaBackward
                href={link}
                size={40}
                color="white"
                className="hidden 2xl:block"
              />
              <FaPause href={link} color="white" className="2xl:hidden" />
              <FaPause
                href={link}
                size={40}
                color="white"
                className="hidden 2xl:block"
              />
              <FaPlay href={link} color="white" className="2xl:hidden" />
              <FaPlay
                href={link}
                size={40}
                color="white"
                className="hidden 2xl:block"
              />
              <FaForward href={link} color="white" className="2xl:hidden" />
              <FaForward
                href={link}
                size={40}
                color="white"
                className="hidden 2xl:block"
              />
            </div>
            <div className="w-40 h-[2px] 2xl:h-[3px] 2xl:w-64 2xl:my-8 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
