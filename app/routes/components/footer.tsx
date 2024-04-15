export default function Footer() {
  return (
    <div className="w-screen bg-zinc-800 text-white">
      <div className="flex flex-col md:flex-row place-content-center place-items-center justify-between gap-10 p-6 2xl:p-10">
        <div>
          <h1 className="text-3xl lg:text-5xl 2xl:text-7xl font-bold">
            Vinayak Srivastava
          </h1>
        </div>
        <div className="flex flex-col 2xl:gap-10 bg-gradient-to-br from-zinc-500 via-rose-800 to-zinc-500 text-transparent bg-clip-text">
          <h1 className="font-bold text-center 2xl:text-start lg:text-2xl 2xl:text-5xl">
            Socials
          </h1>
          <div className="flex gap-2 2xl:gap-6 text-sm lg:text-xl 2xl:text-3xl">
            <a href="">GitHub</a>
            <a href="">LinkedIn</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
          </div>
          <h1 className="font-bold text-center 2xl:text-start lg:text-2xl 2xl:text-5xl">
            Quick Links
          </h1>
          <div className="flex gap-2 2xl:gap-6 text-sm lg:text-xl 2xl:text-3xl">
            <a href="">Projects</a>
            <a href="">Music</a>
            <a href="">Playlist</a>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
