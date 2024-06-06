import { CgMenuGridO } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className="flex justify-between place-items-center place-object-center p-10 2xl:p-20">
        <a href="/" className="text-lg md:text-xl xl:text-3xl 2xl:text-6xl text-white hover:text-rose-500">VS</a>
        <h1 className="text-white cursor-pointer hover:text-rose-500 sm:hidden"><CgMenuGridO size={25}/></h1>
      <div className="hidden sm:block">
        <div className="md:text-xl xl:text-3xl 2xl:text-6xl flex gap-5 xl:gap-7 2xl:gap-12 text-white">
          <a href="/" className="hover:text-rose-500 transform duration-700">
            Home
          </a>
          <a
            href="/projects"
            className="hover:text-rose-500 transform duration-700"
          >
            Projects
          </a>
          <a
            href="/music"
            className="hover:text-rose-500 transform duration-700"
          >
            Music
          </a>
          <a
            href="/contact"
            className="hover:text-rose-500 transform duration-700"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
