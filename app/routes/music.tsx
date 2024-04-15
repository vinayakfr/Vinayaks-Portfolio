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
            <h1 className="text-9xl text-center font-bold bg-gradient-to-tr from-zinc-950 via-rose-600 to-zinc-950 text-transparent bg-clip-text">
              Music
            </h1>
          </div>
        </div>
      </div>

      <div className="relative">
        <h1 className="text-6xl xl:text-8xl text-center text-white font-bold md:hidden">
          Music
        </h1>
        <div className="flex flex-col place-items-center place-content-center">
          <h1 className="text-4xl xl:text-8xl text-white font-medium">
            My Journey
          </h1>
          <div className="w-[90%] xl:w-[70%] h-[1px] bg-white my-5"></div>
          <div className="h-[15rem] xl:w-[80%] overflow-auto">
            <h1 className="text-xl xl:text-3xl text-center text-white  mx-10 font-extralight">
              My <a className="text-red-500">musical journey</a> began when I
              was 8 years old and my teacher asked me to chose between Music,
              Dance and Theatre. And as a shy and not so confidant kid, I chose
              music since it was the
              <a className="text-green-500"> better option</a>.
              <br />
              My interest in music developed after two years in 5th grade, when
              I met <a className="text-blue-500">Ankur Sir</a>. To this day I am
              very grateful to him for making me the musician I am today. <br />
              The first instrument that I learnt was{" "}
              <a className="text-orange-500">Tabla</a>. I was not very fond of
              the instrument but my mother wanted me to learn so I took some
              classes for <a className="text-yellow-400">one year</a>. Over the
              span of
              <a className="text-green-500"> 10 years </a>I have learnt{" "}
              <a className="text-rose-500"> guitar</a> and several other
              <a className="text-red-500"> perscussion instruments</a>.
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-3xl xl:text-7xl text-center text-white font-semibold p-5">
        The <a className="text-yellow-400">reason</a> I am always wearing
        headphones.
      </h1>
      <div className="flex place-content-center place-items-center p-12">
        <div className="flex gap-5 overflow-auto">
          <div className="">
            <MusicCard
              image={"artemis.png"}
              link={""}
              color={"zinc"}
              title={"Can't Stop Loving You - Artemis"}
            />
          </div>
          <div>
            <MusicCard
              image={"Yellow.png"}
              link={""}
              color={""}
              title={"Yellow - Coldplay"}
            />
          </div>
          <div>
            <MusicCard
              image={"Stargazing.png"}
              link={""}
              color={""}
              title={"Stargazing - The Neighbourhood"}
            />
          </div>
          <div>
            <MusicCard
              image={"Loveback.png"}
              link={""}
              color={""}
              title={"Love Back - Why Don't We"}
            />
          </div>
          <div>
            <MusicCard
              image={"Choolo.png"}
              link={""}
              color={""}
              title={"Choo Lo - The Local Train"}
            />
          </div>
          <div>
            <MusicCard
              image={"505.png"}
              link={""}
              color={""}
              title={"505 - Artic Monkeys"}
            />
          </div>
          <div>
            <MusicCard
              image={"Strawberries.png"}
              link={""}
              color={""}
              title={"Strawberries & Cigarretted - Troye Sivan"}
            />
          </div>
          <div>
            <MusicCard
              image={"Storyofmylife.png"}
              link={""}
              color={""}
              title={"Story of My Life - One Direction"}
            />
          </div>
          <div>
            <MusicCard
              image={"Burningroom.png"}
              link={""}
              color={""}
              title={"Slow Dancing in a Burning Room - John Mayer"}
            />
          </div>
          <div>
            <MusicCard
              image={"Merebina.png"}
              link={""}
              color={""}
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
