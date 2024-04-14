export default function Footer() {
  return (
    <div className="w-screen bg-zinc-800 text-white">
      <div className="flex flex-col gap-5 place-content-center place-items-center justify-between p-4">
        <div>
          <h1 className="font-bold text-center">Socials</h1>
          <div className="flex gap-2">
            <a href="">GitHub</a>
            <a href="">LinkedIn</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-center">Quick Links</h1>
          <div className="flex gap-2">
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
