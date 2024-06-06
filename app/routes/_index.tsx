import {
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import Background from "../components/background";
import Devcard from "../components/devcard";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div className="text-white absolute w-full h-full">
      <Navbar />
      <div className="flex place-content-center place-items-center pt-28 md:pt-40 lg:pt-[22.5rem] 2xl:pt-[35rem]">
        <div className="flex place-content-center place-items-center">
          <Background />
        </div>
        <div className="absolute flex flex-col gap-1 place-content-center place-items-center">
          <h1 className="text-4xl md:text-6xl lg:text-[7rem] xl:text-9xl 2xl:text-[12rem] bg-gradient-to-tr from-rose-600 via-zinc-800 to-rose-600 text-transparent bg-clip-text">
            Vinayak Srivastava
          </h1>
          <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            <a
              href="./developer"
              className="hover:text-black transition duration-700"
            >
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
            <a
              href="./student"
              className="hover:text-black transition duration-700"
            >
              Student
            </a>
          </p>
        </div>
      </div>
      <div className="pt-40 md:pt-64 lg:pt-[27.5rem] 2xl:pt-[45rem] flex flex-col place-content-center place-items-center">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[9rem] text-center bg-gradient-to-tr from-zinc-950 via-rose-600 to-zinc-950 text-transparent bg-clip-text">
          About Me
        </h1>
        <div className="bg-zinc-800 h-max w-[90%] rounded-2xl mt-5 p-5">
          <p className="text-center xl:text-2xl 2xl:text-5xl font-medium">
            An Engineering student with a passion for music. I am pursuing my B.Tech Degree in CSE with specialisation in computer science from SRM University of Science and Technology. I am very passionate about music and try to keep myself indulged with the subject.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center font-extrabold py-10 px-[0.7rem] xl:text-7xl 2xl:text-8xl text-4xl 2xl:p-20">
          With great powers come great responsibility
        </h1>
      </div>
      <div className="flex place-content-center place-items-center">
        <div className="h-96 w-[95%] xl:w-[70%] overflow-auto bg-zinc-950 rounded-xl p-4">
          <h1 className="text-center text-3xl px-2 md:text-4xl 2xl:text-6xl leading-snug font-extralight 2xl:font-thin text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum voluptatum cum placeat molestias repellendus blanditiis beatae commodi corrupti. Officiis, assumenda consectetur amet aliquam ipsum labore sint optio non quam dolorum, vitae in magni eos libero! Cumque praesentium libero voluptatibus similique officia hic earum molestiae consequuntur eaque commodi quis consectetur dolores veritatis adipisci quaerat doloremque temporibus consequatur unde error, tempore sed deserunt. Obcaecati enim a sint voluptatibus commodi amet tempore! Veritatis quisquam beatae accusamus praesentium sint consequuntur adipisci deleniti dolore hic magni, perferendis totam debitis mollitia obcaecati nostrum perspiciatis quibusdam explicabo quas, a impedit eveniet! Quod laudantium maxime suscipit quis. Distinctio.
          </h1>
        </div>
      </div>

      <div className="flex flex-col place-items-center gap-14 py-10 md:py-14">
        <div className="h-44 w-44 md:h-[200px] md:w-[200px] bg-gradient-to-tr from-zinc-800 to-rose-500 transform duration-700 rounded-full py-14 text-6xl flex place-content-center place-items-center ">
          <h1 className="font-medium text-6xl xl:text-8xl bg-gradient-to-br from-black via-rose-800 to-black text-transparent bg-clip-text">
            Skills
          </h1>
        </div>
        <div className="absolute h-20 w-20 md:h-[120px] md:w-[120px] bg-gradient-to-tr from-zinc-800 to-rose-500 transform duration-700 translate-x-20 -translate-y-6 md:translate-x-[100px] md:-translate-y-[50px] rounded-full"></div>
        <div className="absolute h-20 w-20 md:h-[120px] md:w-[120px] bg-gradient-to-tr from-rose-500 to-zinc-800 transform duration-700 -translate-x-24 translate-y-28 md:-translate-x-[105px] md:translate-y-[7.5rem] rounded-full"></div>
        <div className="md:hidden">
          <div className="grid grid-rows-2 grid-cols-3 gap-x-20 gap-y-16 md:gap-x-28 md:gap-y-20 justify-between pt-3">
            <SiJavascript size={50} color="zinc" />
            <SiTypescript size={50} color="zinc" />
            <SiPython size={50} color="zinc" />
            <SiHtml5 size={50} color="zinc" />
            <SiTailwindcss size={50} color="zinc" />
            <SiReact size={50} color="zinc" />
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid grid-rows-2 grid-cols-3 gap-x-36 gap-y-24 justify-between pt-6">
            <SiJavascript size={75} color="zinc" />
            <SiTypescript size={75} color="zinc" />
            <SiPython size={75} color="zinc" />
            <SiHtml5 size={75} color="zinc" />
            <SiTailwindcss size={75} color="zinc" />
            <SiReact size={75} color="zinc" />
          </div>
        </div>
      </div>

      <div className="flex flex-col place-items-center place-content-center pt-16">
        <div className="absolute h-52 w-52 md:h-[250px] md:w-[250px] bg-gradient-to-tl from-rose-500 to-zinc-800 transform duration-700 rounded-full flex place-content-center place-items-center">
          <h1 className="text-7xl font-medium bg-gradient-to-tr from-orange-900 via-orange-500 to-orange-900 text-transparent bg-clip-text">
            Projects
          </h1>
        </div>
        <div className="h-24 w-24 md:h-[120px] md:w-[120px] bg-gradient-to-tl from-zinc-800 to-rose-500 translate-x-24 translate-y-36 md:translate-x-[100px] md:translate-y-[160px] rounded-full"></div>
        <div className="h-24 w-24 md:h-[120px] md:w-[120px] bg-gradient-to-tl from-zinc-800 to-rose-500 -translate-x-24 -translate-y-36 md:-translate-x-[100px] md:-translate-y-[175px] rounded-full"></div>
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
              "Mozofest is a flagship event of SRMKZILLA which is the official Mozilla Learning Campus Club at SRMIST. Helped in the gront-end portion of Mozofest."
            }
          />
        </div>
      </div>
      <div className="flex place-content-center pt-16 md:-translate-y-24">
        <Devcard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
