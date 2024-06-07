import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="flex justify-between items-center p-10 2xl:p-20">
      <div className="hidden md:block">
        <a
          href="/"
          className="text-lg md:text-xl xl:text-3xl 2xl:text-6xl text-white hover:text-rose-500"
        >
          VS
        </a>
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
      <div className="md:hidden flex justify-between items-center w-full relative">
        <a
          href="/"
          className="text-lg md:text-xl xl:text-3xl 2xl:text-6xl text-white hover:text-rose-500"
        >
          VS
        </a>
        <div className="">
          <button
            className="text-white hover:text-rose-500"
            onClick={handleMenu}
          >
            <CgMenuGridO size={25} />
          </button>
          <div
            id="nav-dialog"
            className={`absolute right-0 mt-2 w-48 bg-gradient-to-br bg-black text-white rounded-l-full rounded-b-full ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col gap-2 p-4">
              <a
                href="/"
                className="hover:text-rose-500 transform duration-700"
              >
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
      </div>
    </nav>
  );
}
