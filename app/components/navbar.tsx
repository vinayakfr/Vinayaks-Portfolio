import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="relative flex justify-between items-center p-10 2xl:p-20">
      <a
        href="/"
        className="text-xl md:text-xl xl:text-3xl 2xl:text-6xl text-white hover:text-rose-500"
      >
        VS
      </a>
      <button className="text-white sm:hidden" onClick={handleMenu}>
        <RxHamburgerMenu size={25} />
      </button>
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
            href="/resume.pdf"
            className="hover:text-rose-500 transform duration-700"
          >
            Resume
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
      {menuOpen && (
        <div className="fixed inset-0 bg-rose-600 bg-opacity-95 text-white z-50">
          <button
            className="absolute top-10 right-10 text-3xl"
            onClick={handleMenu}
          >
            <span className="text-3xl font-black text-black hover:text-white">
              ✕
            </span>
          </button>
          <div className="absolute text-right top-20 right-8">
            <a
              href="/"
              className="text-3xl font-black hover:underline underline-offset-4 italic text-black hover:text-white"
              onClick={handleMenu}
            >
              Home
            </a>
            {/* <hr className="h-[0.2rem] w-16 bg-gradient-to-r from-zinc-800 to-rose-500" /> */}
            <br />
            <a
              href="/projects"
              className="text-3xl font-bold hover:underline underline-offset-4 italic text-black hover:text-white"
              onClick={handleMenu}
            >
              Projects
            </a>
            {/* <hr className="h-[0.2rem] w-16 bg-gradient-to-r from-zinc-800 to-rose-500" /> */}
            <br />
            <a
              href="/music"
              className="text-3xl font-bold hover:underline underline-offset-4 italic text-black hover:text-white"
              onClick={handleMenu}
            >
              Music
            </a>
            {/* <hr className="h-[0.2rem] w-16 bg-gradient-to-r from-zinc-800 to-rose-500" /> */}
            <br />
            <a
              href="/resume.pdf"
              className="text-3xl font-bold hover:underline underline-offset-4 italic text-black hover:text-white"
              onClick={handleMenu}
            >
              Resume
            </a>
            {/* <hr className="h-[0.2rem] w-16 bg-gradient-to-r from-zinc-800 to-rose-500" /> */}
            <br />
            <a
              href="/contact"
              className="text-3xl font-bold hover:underline underline-offset-4 italic text-black hover:text-white"
              onClick={handleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
