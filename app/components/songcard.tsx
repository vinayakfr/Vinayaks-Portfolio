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
    <div className="bg-gradient-to-tr from-neutral-800 via-rose-900 to-neutral-800 h-[25rem] w-72 2xl:h-[31rem] 2xl:w-[62.5rem] rounded-3xl p-2">
      <div className="flex flex-col gap-2 2xl:grid 2xl:grid-cols-2 place-content-center place-items-center">
        <a href={link}>
          <img
            src={image}
            className="h-[16.5rem] w-72 2xl:h-[30rem] 2xl:w-[30rem] rounded-2xl object-fit"
          />
        </a>
        <div className="grid grid-rows-2 place-content-center place-items-center">
          <h1 className="text-white text-center mx-2 h-auto text-xl xl:text-[1.3rem] 2xl:text-6xl">
            {title}
          </h1>
          <div className="grid grid-rows-2 place-content-center place-items-center 2xl:gap-6 ">
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
