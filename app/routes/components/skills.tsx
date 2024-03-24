import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";

function Skill() {
  return (
    <div className="flex justify-between mx-16">
        <div className="h-[300px] w-[700px] bg-zinc-800 rounded-2xl my-10">
            <h1 className="flex justify-center py-28 text-6xl">Skills</h1>
            <div className="h-40 w-40 rounded-full bg-gradient-to-tl from-orange-500 to-transparent opacity-70 -translate-y-[375px] -translate-x-20"></div>
            <div className="flex gap-4 opacity-80 -translate-y-56 translate-x-[325px] ">
                <div className="h-36 w-36 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600"></div>
                <div className="h-36 w-36 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-700"></div>
                <div className="h-36 w-36 rounded-full bg-gradient-to-r from-cyan-700 to-transparent"></div>
            </div>
        </div>
        <div className='w-[700px] h-[700px]  rounded-2xl'>
          <div className="absolute grid grid-rows-3 grid-cols-2 gap-x-80 gap-y-36 translate-x-32 py-16">
              <SiJavascript size={90} color="zinc"/>
              <SiTypescript size={90} color="zinc"/>
              <SiPython size={90} color="zinc"/>
              <SiHtml5 size={90} color="zinc"/>
              <SiTailwindcss size={90} color="zinc"/>
              <SiReact size={90} color="zinc"/>
          </div>
        </div>

    </div>
  )
}

export default Skill;