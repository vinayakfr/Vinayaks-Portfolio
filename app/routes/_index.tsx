import Background from "./components/background";
import Navbar from "./components/navbar";

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
    </div>
  )
}
