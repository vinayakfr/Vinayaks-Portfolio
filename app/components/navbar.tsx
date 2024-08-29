import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom"; // Import useLocation

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  const isActive = (path: any) => location.pathname === path;

  return (
    <div className="relative flex justify-between items-center p-10 2xl:p-20">
      <a
        href="/"
        className={`text-xl md:text-xl xl:text-3xl 2xl:text-6xl text-white hover:text-rose-500 ${
          isActive("/") ? "border-b-2 border-rose-500" : ""
        }`}
      >
        VS
      </a>
      <button className="text-white sm:hidden" onClick={handleMenu}>
        <RxHamburgerMenu size={25} />
      </button>
      <div className="hidden sm:block">
        <div className="md:text-xl xl:text-3xl 2xl:text-6xl flex gap-5 xl:gap-7 2xl:gap-12 text-white">
          <a
            href="/"
            className={`hover:text-rose-500 transform duration-700 ${
              isActive("/") ? "border-b-2 border-rose-500" : ""
            }`}
          >
            Home
          </a>
          <a
            href="/projects"
            className={`hover:text-rose-500 transform duration-700 ${
              isActive("/projects") ? "border-b-2 border-rose-500" : ""
            }`}
          >
            Projects
          </a>
          <a
            href="/resume.pdf"
            className={`hover:text-rose-500 transform duration-700 ${
              isActive("/resume.pdf") ? "border-b-2 border-rose-500" : ""
            }`}
          >
            Resume
          </a>
          <a
            href="/music"
            className={`hover:text-rose-500 transform duration-700 ${
              isActive("/music") ? "border-b-2 border-rose-500" : ""
            }`}
          >
            Music
          </a>
          <a
            href="/contact"
            className={`hover:text-rose-500 transform duration-700 ${
              isActive("/contact") ? "border-b-2 border-rose-500" : ""
            }`}
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
          <div className="absolute flex flex-col text-right top-20 right-8 -space-y-4">
            <a
              href="/"
              className={`text-3xl font-black ${
                isActive("/")
                  ? "bg-white text-rose-600 rounded-full p-2"
                  : "text-black hover:text-white"
              }`}
              onClick={handleMenu}
            >
              Home
            </a>
            <br />
            <a
              href="/projects"
              className={`text-3xl font-bold ${
                isActive("/projects")
                  ? "bg-white text-rose-600 rounded-full p-2"
                  : "text-black hover:text-white"
              }`}
              onClick={handleMenu}
            >
              Projects
            </a>
            <br />
            <a
              href="/music"
              className={`text-3xl font-bold ${
                isActive("/music")
                  ? "bg-white text-rose-600 rounded-full p-2"
                  : "text-black hover:text-white"
              }`}
              onClick={handleMenu}
            >
              Music
            </a>
            <br />
            <a
              href="/resume.pdf"
              className={`text-3xl font-bold ${
                isActive("/resume.pdf")
                  ? "bg-white text-rose-600 rounded-full p-4"
                  : "text-black hover:text-white"
              }`}
              onClick={handleMenu}
            >
              Resume
            </a>
            <br />
            <a
              href="/contact"
              className={`text-3xl font-bold ${
                isActive("/contact")
                  ? "bg-white text-rose-600 rounded-full p-2"
                  : "text-black hover:text-white"
              }`}
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
