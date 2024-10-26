import {
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import Background from "../components/background";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Projects from "../components/projects";

export default function Home() {
  const openProjects = () => {
    window.open("/projects");
  };

  return (
    <div className="text-white absolute w-full h-full">
      <Navbar />
      <div className="flex place-content-center place-items-center pt-28 md:pt-52 lg:pt-[22.5rem] 2xl:pt-[40rem]">
        <div className="flex place-content-center place-items-center">
          <Background />
        </div>
        <div className="absolute flex flex-col gap-1 place-content-center place-items-center">
          <h1 className="text-4xl md:text-6xl lg:text-[7rem] xl:text-9xl 2xl:text-[12rem] bg-gradient-to-tr from-rose-800 via-zinc-300 to-rose-800 text-transparent bg-clip-text">
            Vinayak Srivastava
          </h1>
          <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            <a className="hover:text-black transition duration-700">
              Developer
            </a>{" "}
            |{" "}
            <a
              href="/music"
              className="hover:text-black transition duration-700"
            >
              Musician
            </a>{" "}
            |{" "}
            <a className="hover:text-black transition duration-700">Student</a>
          </p>
        </div>
      </div>
      <div className="pt-40 md:pt-64 lg:pt-[27.5rem] 2xl:pt-[50rem] flex flex-col place-content-center place-items-center">
        <h1 className="font-extrabold text-[2.45rem] md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[9rem] text-center bg-gradient-to-tr from-zinc-950 via-rose-600 to-zinc-950 text-transparent bg-clip-text">
          About Me
        </h1>
        <img
          src="profile.jpg"
          alt=""
          className="h-[25rem] md:h-[30rem] 2xl:h-[45rem] animate-disfigure my-7 border-8 object-cover border-rose-700 bg-rose-500"
        />
        <div className="bg-zinc-800 h-max w-[90%] rounded-2xl mt-5 p-5">
          <p className="text-center xl:text-2xl 2xl:text-5xl font-medium">
            I am an engineering student with a passion for music, currently
            pursuing a B.Tech in Computer Science and Engineering at SRM
            University of Science and Technology. I stay actively engaged with
            music alongside my studies.
          </p>
        </div>
      </div>
      <div className="flex place-content-center place-items-center pt-10">
        <div className="h-auto w-[90%] bg-zinc-950 rounded-xl p-4">
          <h1 className="text-left text-2xl px-2 md:text-3xl 2xl:text-5xl leading-snug font-extralight 2xl:font-thin text-white">
            Since an early age, Vinayak has been interested in computer science
            and robotics. While he worked on small projects in school, his real
            breakthroughs came in college. As a creative person, Vinayak sought
            ways to channel his creativity, leading him to start his journey as
            a front-end developer.
            <br />
            <br />
            Vinayak is disciplined, hard-working and has a hunger for knowledge,
            constantly striving to improve himself every day.
            <br />
            <br />
            <a className="italic font-extralight bg-gradient-to-tr from-zinc-600 via-rose-600 to-zinc-600 text-transparent bg-clip-text">
              “If there is no struggle, there is no progress.” - Frederick
              Douglass
            </a>
            <br />
            <br />
            Being a part of <a className="italic">SRMKZILLA</a> has taught him
            how to be a team-player. It was also the starting point of Vinayak's
            coding journey. Vinayak loves to create beautiful and interactive UI
            and has worked on a few freelancing projects. Beyond coding, he
            enjoys sports and maintains a daily reading habit. He is adventurous
            and loves exploring new things.
            <br />
            <br />
            Since the age of 8, music has been a significant part of Vinayak's
            life. He continues to practice and refine his musical skills. You
            can listen to his covers on his{" "}
            <a
              href="https://www.instagram.com/vinayakxmusix/"
              className="italic underline"
            >
              Instagram
            </a>{" "}
            music page.
          </h1>
        </div>
      </div>

      <div className="flex flex-col place-items-center gap-14 my-40 2xl:mt-56">
        <div className="flex justify-center items-center">
          <div className="h-40 w-40 md:h-[200px] md:w-[200px] 2xl:h-[20rem] 2xl:w-[20rem] bg-gradient-to-tr from-transparent via-rose-500 to-transparent transform duration-700 rounded-full py-14 text-6xl flex place-content-center place-items-center absolute">
            <h1 className="font-medium text-7xl xl:text-8xl 2xl:text-[10rem] bg-gradient-to-br from-rose-800 via-zinc-800 to-rose-800 text-transparent bg-clip-text animate-none">
              Skills
            </h1>
          </div>
          <div className="animate-circle-loop">
            <div className="flex justify-between w-full gap-32 2xl:gap-56">
              <div className="h-20 w-20 md:h-[120px] md:w-[120px] 2xl:h-[7rem] 2xl:w-[7rem] bg-gradient-to-tr from-transparent to-rose-500 transform duration-700 rounded-full relative"></div>
              <div className="h-20 w-20 md:h-[120px] md:w-[120px] 2xl:h-[7rem] 2xl:w-[7rem] bg-gradient-to-tr from-rose-500 to-transparent transform duration-700 rounded-full relative"></div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="grid grid-rows-3 grid-cols-3 gap-x-20 gap-y-16 md:gap-x-28 md:gap-y-20 justify-between pt-20">
            <SiJavascript size={50} color="zinc"  />
            <SiTypescript size={50} color="zinc"  />
            <SiPython size={50} color="zinc" />
            <SiHtml5 size={50} color="zinc" />
            <SiTailwindcss size={50} color="zinc" />
            <SiReact size={50} color="zinc" />
            <SiFigma size={50} color="zinc"/>
            <TbBrandCpp size={50} color="zinc"/>
            <TbBrandReactNative
              size={50}
              color="zinc"
              className="animate-bounce"
            />
          </div>
        </div>
        <div className="hidden md:block 2xl:hidden">
          <div className="grid grid-rows-2 grid-cols-4 gap-x-36 gap-y-24 justify-between pt-20">
            <SiJavascript
              size={75}
              color="zinc"
              className="hover:animate-bounce"
            />
            <SiTypescript
              size={75}
              color="zinc"
              className="hover:animate-bounce"
            />
            <SiPython size={75} color="zinc" className="hover:animate-bounce" />
            <SiHtml5 size={75} color="zinc" className="hover:animate-bounce" />
            <SiTailwindcss
              size={75}
              color="zinc"
              className="hover:animate-bounce"
            />
            <SiReact size={75} color="zinc" className="hover:animate-bounce" />
            <TbBrandCpp
              size={75}
              color="zinc"
              className="hover:animate-bounce"
            />
            <TbBrandReactNative
              size={75}
              color="zinc"
              className="hover:animate-bounce"
            />
          </div>
        </div>
        <div className="hidden 2xl:block">
          <div className="grid grid-rows-2 grid-cols-4 gap-x-36 gap-y-24 justify-between pt-40">
            <SiJavascript
              size={125}
              color="zinc"
              className="hover:animate-bounce"
            />
            <SiTypescript
              size={125}
              color="zinc"
              className="hover:animate-bounce"
            />
            <SiPython
              size={125}
              color="zinc"
              className="hover:animate-bounce"
            />
            <SiHtml5 size={125} color="zinc" className="hover:animate-bounce" />
            <SiTailwindcss
              size={125}
              color="zinc"
              className="hover:animate-bounce"
            />
            <SiReact size={125} color="zinc" className="hover:animate-bounce" />
            <TbBrandCpp
              size={125}
              color="zinc"
              className="hover:animate-bounce"
            />
            <TbBrandReactNative
              size={125}
              color="zinc"
              className="hover:animate-bounce"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col place-items-center place-content-center mt-32 2xl:mt-56">
        <div className="flex justify-center items-center">
          <div
            className="absolute h-48 w-48 md:h-[225px] md:w-[225px] 2xl:h-[25rem] 2xl:w-[25rem] bg-gradient-to-tl from-transparent via-rose-500 to-transparent transform duration-700 rounded-full flex place-content-center place-items-center"
            onClick={openProjects}
          >
            <h1 className="font-medium text-7xl xl:text-8xl 2xl:text-[9rem] bg-gradient-to-br from-rose-700 via-white to-rose-800 text-transparent bg-clip-text">
              Projects
            </h1>
          </div>
          <div className="-animate-circle-loop">
            <div className="flex justify-between w-full gap-32 2xl:gap-72 ">
              <div className="h-20 w-20 md:h-[120px] md:w-[120px] 2xl:h-[7rem] 2xl:w-[7rem] bg-gradient-to-tr from-transparent to-rose-500 transform duration-700 rounded-full relative"></div>
              <div className="h-20 w-20 md:h-[120px] md:w-[120px] 2xl:h-[7rem] 2xl:w-[7rem] bg-gradient-to-tr from-rose-500 to-transparent transform duration-700 rounded-full relative"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex place-content-center place-items-center pt-32 2xl:pt-52">
        <div className="flex gap-10 overflow-auto p-10">
          <Projects
            heading={"MOZOFEST 24'"}
            time={"15.02.2024 - 01.04.2024"}
            text={
              "Contributed to the front-end development for Mozofest, the flagship event of SRMKZILLA, SRMIST's official Mozilla Learning Campus Club."
            }
          />
          <Projects
            heading={"Unbranded Cosmetics"}
            time={"15.02.2024 - 01.04.2024"}
            text={
              "Unbranded Boutique is a manufacturing brand based in USA. It helps upcoming skincare brands to grow their market"
            }
          />
          <Projects
            heading="TheBridge"
            time="23.06.2024 - today"
            text="TheBridge is a platform that connects people dedicated to making a positive impact and promoting goodwill."
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
