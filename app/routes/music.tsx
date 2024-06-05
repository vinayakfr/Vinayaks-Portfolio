import Footer from "../components/footer";
import Navbar from "../components/navbar";
import MusicCard from "../components/songcard";
import Vinyl from "../components/vinyl";
import Timeline from "../components/timeline";
import Checkpoints from "../components/checkpoints";


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
        <h1 className="text-7xl xl:text-8xl text-center font-bold bg-gradient-to-tr from-zinc-950 via-rose-600 to-zinc-950 text-transparent bg-clip-text md:hidden">
          Music
        </h1>
        <p className="text-xl xl:text-4xl 2xl:text-7xl text-center text-white p-4 xl:p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          magni hic aliquid harum distinctio voluptates!
        </p>
        <div className="flex flex-col place-items-center place-content-center 2xl:pt-28">
          <h1 className="text-5xl xl:text-8xl 2xl:text-9xl text-white font-medium">
            Journey
          </h1>
          <div className="w-[90%] xl:w-[70%] h-[1px] bg-white my-5"></div>
          <div className="h-[15rem] xl:w-[80%] overflow-auto">
            <h1 className="text-xl xl:text-3xl 2xl:text-5xl text-center text-white mx-10 font-thin 2xl:font-light">
              It all started in <a>3rd grade</a> when Vinayak got an ultimatem
              between Dance. Music and Theatre. With a promise to his mother
              that Vinayak will sing all the songs taught to him in Music, his
              mother filled out the music check-box. He wasn't very keen at
              first but his interest{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                sparked{" "}
              </a>
              when he met his new music teacher in 5th Grade. It didn't take
              much time for the new teacher to become his idol. Vinayak became
              more{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                fascinated{" "}
              </a>
              by music and wanted to learn each and everything he could find in
              his music room. Taking Vinayak's old music teacher's suggestion to
              make him learn{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                Tabla{" "}
              </a>
              seriously, his mother put him in Tabla classes for one year.
              Vinayak wasn't very fond of Tabla, even though he was rather very
              good in it. <br />
              In 6th grade, Vinayak became one of the{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                founding members{" "}
              </a>
              of his school{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                orchestra group{" "}
              </a>
              , and it was pretty big deal for him. He loved the stay backs and
              the early morning practices and how he could skip class periods
              for his 'orchestra practice'. He also loved how his music teacher
              would pick him up in the morning and drop him back at home after
              practice. The Orchestra team was always in the top three but never
              scored the first position.
              <br />
              In 8th Grade, Vinayak started developing interest in{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                string instruments
              </a>
              , so he joined his music teacher's music school. Vinayak was a
              'quick leaner' as his teacher would say, he sure was{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                talented
              </a>
              . Vinayak gave his first music exam in guitar from{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                Trinity College
              </a>
              , London. He was After chaning school in 11th Grade, Vinayak
              became a part of his new school's orchestra team, not to his
              surprise, he was still on the{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                purcurssion
              </a>{" "}
              as he was before. With his new team, Vinayak went back to his old
              school, where his journey began, to complete the circle. This
              time, he won the{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                Zonal Level Orchestra Competition.{" "}
              </a>
              Vinayak was happy and nostalgic, both at the same time as he
              celebrated his victory with his team-mates.
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-5xl xl:text-7xl 2xl:text-9xl text-center text-white font-semibold p-10 2xl:p-14">
        You didn't forget your headphones, did you? 👀
      </h1>
      <div className="flex place-content-center place-items-center px-12">
        <div className="flex gap-5 overflow-auto">
          <div className="">
            <MusicCard
              image={"artemis.png"}
              link={"https://music.apple.com/in/album/cant-stop-loving-you/1686132427?i=1686132428"}
              title={"Can't Stop Loving You - Artemis"} />
          </div>
          <div>
            <MusicCard
              image={"Yellow.png"}
              link={"https://music.apple.com/in/album/yellow/1122782080?i=1122782283"}
              title={"Yellow - Coldplay"} />
          </div>
          <div>
            <MusicCard
              image={"Stargazing.png"}
              link={"https://music.apple.com/in/album/stargazing/1541400529?i=1541400545"}
              title={"Stargazing - The Neighbourhood"} />
          </div>
          <div>
            <MusicCard
              image={"Loveback.png"}
              link={"https://music.apple.com/in/album/love-back-single/1587171750"}
              title={"Love Back - Why Don't We"} />
          </div>
          <div>
            <MusicCard
              image={"Choolo.png"}
              link={"https://music.apple.com/in/album/choo-lo/1710464344?i=1710464678"}
              title={"Choo Lo - The Local Train"} />
          </div>
          <div>
            <MusicCard
              image={"505.png"}
              link={"https://music.apple.com/in/album/505/251126923?i=251127052"}
              title={"505 - Artic Monkeys"} />
          </div>
          <div>
            <MusicCard
              image={"Strawberries.png"}
              link={"https://music.apple.com/in/album/strawberries-cigarettes/1460746852?i=1460747047"}
              title={"Strawberries & Cigarretted - Troye Sivan"} />
          </div>
          <div>
            <MusicCard
              image={"Storyofmylife.png"}
              link={"https://music.apple.com/in/album/story-of-my-life/695312369?i=695312371"}
              title={"Story of My Life - One Direction"} />
          </div>
          <div>
            <MusicCard
              image={"Burningroom.png"}
              link={"https://music.apple.com/in/album/slow-dancing-in-a-burning-room/184335550?i=184335793"}
              title={"Slow Dancing in a Burning Room - John Mayer"} />
          </div>
          <div>
            <MusicCard
              image={"Merebina.png"}
              link={"https://music.apple.com/in/album/mere-bina/390435258?i=390435276"}
              title={"Mere Bina- Nikhil D' Souza"} />
          </div>
        </div>
      </div>
      <Timeline />
      <Checkpoints />
      <Footer />
    </div>
  );
}
