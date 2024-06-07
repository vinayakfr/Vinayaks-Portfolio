import { useRef } from "react";

interface ProjectsProps {
    heading: string;
    time: string;
    text: string;
  }

const Experience = ({heading, time, text}: ProjectsProps) => {
    return (
        <div>
            <div className="flex gap-12">
                <div className="h-[22.5rem] w-72 xl:h-[20rem] xl:w-[40rem] bg-zinc-800 rounded-2xl grid grid-rows-3 place-content-center place-items-center px-3">
                    <h1 className="text-3xl text-center font-semibold">{heading}</h1>
                    <p className="text-xl font-extralight">{time}</p>
                    <p className="text-center text-wrap">{text}</p>
                </div>
                {/* <div className="h-[35rem] w-[40rem] bg-blue-400 rounded-2xl"></div> */}
            </div>
        </div>
    )
}

export default Experience;