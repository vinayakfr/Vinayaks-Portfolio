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
          <div className="flex place-content-center place-items-center gap-2 2xl:gap-6 lg:text-xl 2xl:text-3xl">
            <a href="">GitHub</a>
            <a href="">LinkedIn</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
          </div>
          <h1 className="font-bold text-center md:text-start text-xl lg:text-2xl 2xl:text-5xl bg-gradient-to-br from-zinc-500 via-rose-800 to-zinc-500 text-transparent bg-clip-text">
            Quick Links
          </h1>
          <div className="flex place-content-center place-items-center gap-2 2xl:gap-6 lg:text-xl 2xl:text-3xl">
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
