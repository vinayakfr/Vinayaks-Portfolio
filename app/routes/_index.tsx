import Background from "./components/background";
import Devcard from "./components/devcard";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Skill from "./components/skills";

export default function Home() {
  return (
    <div className="text-white absolute w-full h-full" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Navbar/>
      <div className="grid place-content-center place-items-center py-96">
        <Background/>
        <div className="absolute select-none">
          <h1 className=" text-8xl text-center">Vinayak Srivastava</h1>
          <p className="text-4xl text-center">
          <a href="./developer" className="hover:text-black transition duration-700">Developer</a> | <a href="/music" className="hover:text-black transition duration-700">Musician</a> |  <a href="./student" className="hover:text-black transition duration-700">Student</a>
          </p>
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-6xl text-center">About Me</h1>
        <div className="bg-zinc-800 mx-16 h-56 rounded-2xl my-10">
          <p className="text-3xl text-justify py-6 mx-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus nostrum autem nam illo minus expedita fugit natus tempora nihil sapiente sequi, maiores voluptatibus facere! Sed repudiandae reiciendis similique esse sunt consequuntur atque nihil at aut sapiente doloribus, nostrum dolore dignissimos a quae maxime necessitatibus illo qui eveniet ad. Autem, blanditiis!</p>
        </div>
        <div className="flex justify-between mx-16 py-5">
          <div className="h-unit-8xl w-unit-9xl bg-zinc-800 rounded-2xl">
            <img src="" alt="" />
            <h1 className="translate-y-unit-8xl translate-x-96 py-5 mx-8 text-2xl italic">~ Vinayak Srivastava</h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-blue-800 w-unit-9xl rounded-3xl border-blue-950">
              <div className='border-2 border-blue-950 bg-blue-950 rounded-3xl h-96 w-unit-9xl -translate-y-2 -translate-x-2 shadow-xl'>
                <h1 className="text-5xl text-justify mx-2 my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit vel aliquam dignissimos voluptas molestias nisi!</h1>
              </div>
            </div>
            <div className='bg-transparent'>
              <div className='border-2 border-neutral-800 bg-neutral-800 rounded-md h-56 w-unit-9xl -translate-y-2 -translate-x-1 shadow-2xl'>
                <p className='italic text-xl font-serif text-center py-24'>
                  | <a className='text-rose-600'>Hard work </a>beats talent everytime <a className='text-rose-600'>talent  </a> doesn't work hard |
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16 mx-16">
        <h1 className="text-center text-4xl leading-snug my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam maxime rem nam optio accusantium perspiciatis doloremque maiores facilis? Atque pariatur nulla minus ipsam quibusdam aperiam consequuntur iure dolorum, qui iusto eveniet tenetur? Reiciendis, harum? Dolorum consectetur modi ipsam saepe veniam debitis dicta sapiente placeat id, soluta in. Omnis, maxime?</h1>
        <h1 className="text-center text-4xl leading-snug my-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam maxime rem nam optio accusantium perspiciatis doloremque maiores facilis? Atque pariatur nulla minus ipsam quibusdam aperiam consequuntur iure dolorum, qui iusto eveniet tenetur? Reiciendis, harum? Dolorum consectetur modi ipsam saepe veniam debitis dicta sapiente placeat id, soluta in. Omnis, maxime?</h1>
      </div>
      <div className="py-10 mx-6">
        <Skill/>
        <Experience/>
      </div>
      <div className="flex place-content-center -translate-y-24"><Devcard/></div>
      <div><Footer/></div>
    </div>
  )
}
