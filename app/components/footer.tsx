export default function Footer() {
  return (
    <div className="w-screen bg-zinc-800 text-white">
      <div className="flex flex-col md:flex-row place-content-center place-items-center justify-between gap-10 p-6 2xl:p-10">
        <div>
          <h1 className="text-3xl lg:text-5xl 2xl:text-7xl font-bold">
            Vinayak Srivastava
          </h1>
        </div>
        <div className="flex flex-col 2xl:gap-10">
          <h1 className="font-bold text-center md:text-start text-xl lg:text-2xl 2xl:text-5xl bg-gradient-to-br from-zinc-500 via-rose-800 to-zinc-500 text-transparent bg-clip-text">
            Socials
          </h1>
          <div className="flex place-content-center place-items-center md:place-content-start gap-2 2xl:gap-6 lg:text-xl 2xl:text-3xl">
            <a href="https://github.com/vinayakfr" className="hover:text-rose-700">GitHub |</a>
            <a href="https://www.linkedin.com/in/vinayaksrivsatava/" className="hover:text-rose-700">LinkedIn |</a>
            <a href="https://www.instagram.com/idkvinayak/" className="hover:text-rose-700">Instagram |</a>
            <a href="https://x.com/idkvinayak" className="hover:text-rose-700">Twitter</a>
          </div>
          <h1 className="font-bold text-center md:text-start text-xl lg:text-2xl 2xl:text-5xl bg-gradient-to-br from-zinc-500 via-rose-800 to-zinc-500 text-transparent bg-clip-text">
            Quick Links
          </h1>
          <div className="flex place-content-center place-items-center md:place-content-start gap-2 2xl:gap-6 lg:text-xl 2xl:text-3xl">
            <a href="/projects" className="hover:text-rose-700">Projects |</a>
            <a href="" className="hover:text-rose-700">Playlist |</a>
            <a href="/resume" className="hover:text-rose-700">Resume |</a>
            <a href="/contact" className="hover:text-rose-700">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
