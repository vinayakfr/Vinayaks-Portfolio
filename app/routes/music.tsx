import Footer from "./components/footer";
import Navbar from "./components/navbar";
import MusicCard from "./components/songcard";
import Vinyl from "./components/vinyl";

export default function Music() {
  return (
    <div>
      <Navbar />
      <div className="hidden md:block">
        <div className="flex place-content-center place-items-center">
          <Vinyl />
          <div className="absolute">
            <h1 className="text-9xl 2xl:text-[12rem] text-center font-bold bg-gradient-to-tr from-zinc-950 via-rose-600 to-zinc-950 text-transparent bg-clip-text">
              Music
            </h1>
          </div>
        </div>
      </div>

      <div className="relative">
        <h1 className="text-6xl xl:text-8xl text-center text-white font-bold md:hidden">
          Music
        </h1>
        <div className="flex flex-col place-items-center place-content-center 2xl:pt-28">
          <h1 className="text-4xl xl:text-8xl 2xl:text-9xl text-white font-medium">
            My Journey
          </h1>
          <div className="w-[90%] xl:w-[70%] h-[1px] bg-white my-5"></div>
          <div className="h-[15rem] xl:w-[80%] overflow-auto">
            <h1 className="text-xl xl:text-3xl 2xl:text-5xl text-center text-white mx-10 font-extralight 2xl:font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente pariatur iure doloremque, dolorem fuga, numquam tempora recusandae architecto inventore nesciunt natus ratione iusto ullam dolorum? Cumque nobis perferendis fugiat tempore aliquam maxime eos earum illum assumenda mollitia in praesentium aliquid atque, a, quasi recusandae corporis explicabo dicta aspernatur consequatur? Ducimus tenetur quod similique quis corporis? Exercitationem, non. Quaerat quae magnam enim totam consequuntur dolores fugit sit, nemo error pariatur. Modi quam officia non sint voluptas, voluptatem quo quod dignissimos distinctio blanditiis libero neque optio cumque sit deserunt vero quas illo vitae tempora rem cupiditate! Harum ab magni dolor dolorum officiis!
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-3xl xl:text-7xl 2xl:text-9xl text-center text-white font-semibold p-5">
        The <a className="text-yellow-400">reason</a> I am always wearing
        headphones.
      </h1>
      <div className="flex place-content-center place-items-center p-12">
        <div className="flex gap-5 overflow-auto">
          <div className="">
            <MusicCard
              image={"artemis.png"}
              link={"https://music.apple.com/in/album/cant-stop-loving-you/1686132427?i=1686132428"}
              title={"Can't Stop Loving You - Artemis"}
            />
          </div>
          <div>
            <MusicCard
              image={"Yellow.png"}
              link={"https://music.apple.com/in/album/yellow/1122782080?i=1122782283"}
              title={"Yellow - Coldplay"}
            />
          </div>
          <div>
            <MusicCard
              image={"Stargazing.png"}
              link={"https://music.apple.com/in/album/stargazing/1541400529?i=1541400545"}
              title={"Stargazing - The Neighbourhood"}
            />
          </div>
          <div>
            <MusicCard
              image={"Loveback.png"}
              link={"https://music.apple.com/in/album/love-back-single/1587171750"}
              title={"Love Back - Why Don't We"}
            />
          </div>
          <div>
            <MusicCard
              image={"Choolo.png"}
              link={"https://music.apple.com/in/album/choo-lo/1710464344?i=1710464678"}
              title={"Choo Lo - The Local Train"}
            />
          </div>
          <div>
            <MusicCard
              image={"505.png"}
              link={"https://music.apple.com/in/album/505/251126923?i=251127052"}
              title={"505 - Artic Monkeys"}
            />
          </div>
          <div>
            <MusicCard
              image={"Strawberries.png"}
              link={"https://music.apple.com/in/album/strawberries-cigarettes/1460746852?i=1460747047"}
              title={"Strawberries & Cigarretted - Troye Sivan"}
            />
          </div>
          <div>
            <MusicCard
              image={"Storyofmylife.png"}
              link={"https://music.apple.com/in/album/story-of-my-life/695312369?i=695312371"}
              title={"Story of My Life - One Direction"}
            />
          </div>
          <div>
            <MusicCard
              image={"Burningroom.png"}
              link={"https://music.apple.com/in/album/slow-dancing-in-a-burning-room/184335550?i=184335793"}
              title={"Slow Dancing in a Burning Room - John Mayer"}
            />
          </div>
          <div>
            <MusicCard
              image={"Merebina.png"}
              link={"https://music.apple.com/in/album/mere-bina/390435258?i=390435276"}
              title={"Mere Bina- Nikhil D' Souza"}
            />
          </div>
        </div>
      </div>
      <div className="text-4xl text-white text-center">
        <h1>Accomplishments</h1>
      </div>

      <Footer />
    </div>
  );
}
