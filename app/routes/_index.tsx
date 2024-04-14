import { SiHtml5, SiJavascript, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import Background from "./components/background";
import Devcard from "./components/devcard";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="text-white absolute w-full h-full" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Navbar/>
      <div className="flex place-content-center place-items-center pt-20 md:pt-40 lg:pt-96 2xl:pt-[35rem]">
        <div className="flex place-content-center place-items-center"><Background/></div>
        
        <div className="absolute flex flex-col gap-1 place-content-center place-items-center">
          <h1 className="text-4xl md:text-6xl xl:text-9xl 2xl:text-[10rem]">Vinayak Srivastava</h1>
          <p className="text-xl md:text-3xl xl:text-6xl 2xl:text-7xl">
          <a href="./developer" className="hover:text-black transition duration-700">Developer</a> | <a href="/music" className="hover:text-black transition duration-700">Musician</a> |  <a href="./student" className="hover:text-black transition duration-700">Student</a>
          </p>
        </div>
      </div>
      <div className="pt-40 md:pt-64 lg:pt-[27.5rem] 2xl:pt-[45rem] flex flex-col place-content-center place-items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl text-center">About Me</h1>
        <div className="bg-zinc-800 h-max w-[90%] rounded-2xl mt-5 p-5">
          <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus nostrum autem nam illo minus expedita fugit natus tempora nihil sapiente sequi, maiores voluptatibus facere! Sed repudiandae reiciendis similique esse sunt consequuntur atque nihil at aut sapiente doloribus, nostrum dolore dignissimos a quae maxime necessitatibus illo qui eveniet ad. Autem, blanditiis!</p>
        </div>
        <div className="flex flex-col md:flex-row place-content-center place-items-center justify-between gap-6 p-5">
          <div className="w-80 h-[30rem] bg-zinc-800 rounded-2xl">
            <img src="" alt="" />
            {/* <h1 className=" py-5 mx-8 text-2xl italic">~ Vinayak Srivastava</h1> */}
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-blue-800 w-80 rounded-3xl border-blue-950">
              <div className='border-2 border-blue-950 bg-blue-950 rounded-3xl h-[35rem] -translate-y-2 -translate-x-2 shadow-xl'>
                <h1 className="text-8xl text-start mx-2 my-5">Let's get to know him better</h1>
              </div>
            </div>
            <div className='bg-transparent hidden lg:block'>
              <div className='border-2 border-neutral-800 bg-neutral-800 rounded-md h-56 w-unit-9xl -translate-y-2 -translate-x-1 shadow-2xl'>
                <p className='italic text-xl font-serif text-center py-24'>
                  | <a className='text-rose-600'>Hard work </a>beats talent everytime <a className='text-rose-600'>talent  </a> doesn't work hard |
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <h1 className="text-center text-7xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, similique!</h1>
      </div>
      <div className="my-16 mx-16">
        <h1 className="text-center text-4xl leading-snug my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam maxime rem nam optio accusantium perspiciatis doloremque maiores facilis? Atque pariatur nulla minus ipsam quibusdam aperiam consequuntur iure dolorum, qui iusto eveniet tenetur? Reiciendis, harum? Dolorum consectetur modi ipsam saepe veniam debitis dicta sapiente placeat id, soluta in. Omnis, maxime?</h1>
        <h1 className="text-center text-4xl leading-snug my-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti error laudantium dolorum. Autem neque porro error praesentium, ad fuga. Obcaecati ducimus doloremque voluptas ea nemo saepe, mollitia in delectus fugit minus, libero blanditiis minima atque nulla consequuntur. Dolor sequi accusamus sunt beatae nobis placeat reprehenderit rerum quis vitae nihil. Corrupti.</h1>
      </div>
      <div className="flex flex-col place-items-center">
        <h1 className="h-[200px] w-[200px] hover:bg-cyan-950 transform duration-700 rounded-full py-14 text-center text-7xl ">Skills</h1>
        <div className=" h-[120px] w-[120px] hover:bg-cyan-950 transform duration-700 translate-x-[100px] -translate-y-[250px] rounded-full"></div>
        <div className=" h-[120px] w-[120px] hover:bg-cyan-950 transform duration-700 -translate-x-[90px] -translate-y-[185px] rounded-full"></div>
          <div className="flex gap-x-28 -translate-y-36">
              <SiJavascript size={90} color="zinc"/>
              <SiTypescript size={90} color="zinc"/>
              <SiPython size={90} color="zinc"/>
              <SiHtml5 size={90} color="zinc"/>
              <SiTailwindcss size={90} color="zinc"/>
              <SiReact size={90} color="zinc"/>
          </div>
      </div>
      <div className="flex flex-col place-items-center mb-16">
        <h1 className="h-[200px] w-[200px] hover:bg-orange-800 transform duration-700 rounded-full py-14 text-7xl flex place-content-center">Experience</h1>
        <div className=" h-[120px] w-[120px] hover:bg-orange-500 transform duration-700 -translate-x-[100px] -translate-y-[250px] rounded-full"></div>
        <div className=" h-[120px] w-[120px] hover:bg-orange-500 transform duration-700 translate-x-[90px] -translate-y-[185px] rounded-full"></div>
      </div>
      <div className="flex place-content-center -translate-y-24"><Devcard/></div> */}
      <div><Footer/></div>
    </div>
  )
}
