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
import Devcard from "../components/devcard";
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
      <div className="flex place-content-center place-items-center pt-28 md:pt-40 lg:pt-[22.5rem] 2xl:pt-[35rem]">
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
      <div className="pt-40 md:pt-64 lg:pt-[27.5rem] 2xl:pt-[45rem] flex flex-col place-content-center place-items-center">
        <h1 className="font-extrabold text-[2.45rem] md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[9rem] text-center bg-gradient-to-tr from-zinc-950 via-rose-600 to-zinc-950 text-transparent bg-clip-text">
          About Me
        </h1>
        <div className="bg-zinc-800 h-max w-[90%] rounded-2xl mt-5 p-5">
          <p className="text-center xl:text-2xl 2xl:text-5xl font-medium">
            I am an engineering student with a passion for music, currently
            pursuing a B.Tech in Computer Science and Engineering at SRM
            University of Science and Technology. I stay actively engaged with
            music alongside my studies.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center font-extrabold py-10 px-[0.7rem] xl:text-7xl 2xl:text-8xl text-4xl 2xl:p-20 bg-gradient-to-tr from-rose-700 via-white to-rose-700 text-transparent bg-clip-text">
          With great powers come great responsibility
        </h1>
      </div>
      <div className="flex place-content-center place-items-center">
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

      <div className="flex flex-col place-items-center gap-14 mt-28">
        <div className="h-44 w-44 md:h-[200px] md:w-[200px] bg-gradient-to-tr from-transparent via-rose-500 to-transparent transform duration-700 rounded-full py-14 text-6xl flex place-content-center place-items-center ">
          <h1 className="font-medium text-6xl xl:text-8xl bg-gradient-to-br from-rose-800 via-zinc-800 to-rose-800 text-transparent bg-clip-text">
            Skills
          </h1>
        </div>
        <div className="absolute h-20 w-20 md:h-[120px] md:w-[120px] bg-gradient-to-tr from-transparent to-rose-500 transform duration-700 translate-x-20 -translate-y-6 md:translate-x-[100px] md:-translate-y-[50px] rounded-full"></div>
        <div className="absolute h-20 w-20 md:h-[120px] md:w-[120px] bg-gradient-to-tr from-rose-500 to-transparent transform duration-700 -translate-x-24 translate-y-28 md:-translate-x-[105px] md:translate-y-[7.5rem] rounded-full"></div>
        <div className="md:hidden">
          <div className="grid grid-rows-3 grid-cols-3 gap-x-20 gap-y-16 md:gap-x-28 md:gap-y-20 justify-between pt-3">
            <SiJavascript size={50} color="zinc" />
            <SiTypescript size={50} color="zinc" />
            <SiPython size={50} color="zinc" />
            <SiHtml5 size={50} color="zinc" />
            <SiTailwindcss size={50} color="zinc" />
            <SiReact size={50} color="zinc" />
            <SiFigma size={50} color="zinc" />
            <TbBrandCpp size={50} color="zinc" />
            <TbBrandReactNative size={50} color="zinc" />
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid grid-rows-2 grid-cols-4 gap-x-36 gap-y-24 justify-between pt-10">
            <SiJavascript size={75} color="zinc" />
            <SiTypescript size={75} color="zinc" />
            <SiPython size={75} color="zinc" />
            <SiHtml5 size={75} color="zinc" />
            <SiTailwindcss size={75} color="zinc" />
            <SiReact size={75} color="zinc" />
            <TbBrandCpp size={75} color="zinc" />
            <TbBrandReactNative size={75} color="zinc" />
          </div>
        </div>
      </div>

      <div className="flex flex-col place-items-center place-content-center pt-32">
        <div
          className="absolute h-52 w-52 md:h-[225px] md:w-[225px] bg-gradient-to-tl from-transparent via-rose-500 to-transparent transform duration-700 rounded-full flex place-content-center place-items-center"
          onClick={openProjects}
        >
          <h1 className="font-medium text-6xl xl:text-8xl bg-gradient-to-br from-rose-700 via-white to-rose-800 text-transparent bg-clip-text">
            Projects
          </h1>
        </div>
        <div className="h-24 w-24 md:h-[120px] md:w-[120px] bg-gradient-to-tl from-transparent to-rose-500 translate-x-24 translate-y-36 md:translate-x-[90px] md:translate-y-[160px] rounded-full"></div>
        <div className="h-24 w-24 md:h-[120px] md:w-[120px] bg-gradient-to-tl from-transparent to-rose-500 -translate-x-24 -translate-y-36 md:-translate-x-[90px] md:-translate-y-[155px] rounded-full"></div>
      </div>
      <div className="flex place-content-center place-items-center p-12">
        <div className="flex gap-10 overflow-auto pt-10">
          <Projects
            heading={"MOZOFEST 24'"}
            time={"15.02.2024 - 01.04.2024"}
            text={
              "Mozofest is a flagship event of SRMKZILLA which is the official Mozilla Learning Campus Club at SRMIST. Helped in the gront-end portion of Mozofest."
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
            heading="TheHelpingHand"
            time="23.06.2024 - today"
            text="HelpingHand is a platform designed to unite individuals who want to make a positive impact on society. It's ideal for those dedicated to preserving humanity and promoting goodwill."
          />
        </div>
      </div>
      <div className="flex place-content-center pt-10 md:pt-16 md:-translate-y-24">
        <Devcard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
