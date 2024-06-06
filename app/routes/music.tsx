import Footer from "../components/footer";
import Navbar from "../components/navbar";
import MusicCard from "../components/songcard";
import Vinyl from "../components/vinyl";
import Timeline from "../components/timeline";

export default function Music() {
  return (
    <div>
      <Navbar />
      <div className="hidden md:block">
        <div className="flex place-content-center place-items-center">
          <Vinyl />
          <div className="absolute">
            <h1 className="text-9xl 2xl:text-[12rem] text-center font-bold bg-gradient-to-br from-white via-rose-600 to-white text-transparent bg-clip-text">
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
          <h1 className="text-5xl xl:text-8xl 2xl:text-9xl font-medium bg-gradient-to-tr from-rose-700 via-white to-rose-700 text-transparent bg-clip-text">
            Journey
          </h1>
          <div className="w-[90%] xl:w-[70%] h-[1px] bg-white my-5"></div>
          <div className="h-[15rem] xl:w-[80%] overflow-auto">
            <h1 className="text-xl xl:text-3xl 2xl:text-5xl text-center text-white mx-10 font-thin 2xl:font-light">

It all started in 3rd grade when Vinayak was given an ultimatum between Dance, Music, and Theatre. With a promise to his mother that he would sing all the songs taught to him in Music, she filled out the music check-box. He wasn't very keen at first, but his interest <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                sparked{" "}
              </a> when he met his new music teacher in 5th grade. It didn't take much time for the new teacher to become his idol. Vinayak became more  <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                fascinated{" "}
              </a> by music and wanted to learn everything he could in his music room. Following his old music teacher's suggestion to make him learn the <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                Tabla{" "}
              </a> seriously, his mother enrolled him in tabla classes for one year. Although Vinayak wasn't very fond of the tabla, he was quite good at it.

In 6th grade, Vinayak became one of the  <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                founding members{" "}
              </a> of his school <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                orchestra group{" "}
              </a>, which was a pretty big deal for him. He loved the stay-backs and the early morning practices, as well as the fact that he could skip class periods for his 'orchestra practice.' He also loved how his music teacher would pick him up in the morning and drop him back at home after practice. The orchestra team always placed in the top three but never scored first place.

In 8th grade, Vinayak started developing an interest in <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                string instruments
              </a>, so he joined his music teacher's music school. Vinayak was a 'quick learner,' as his teacher would say; he was indeed <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                talented
              </a>. Vinayak took his first music exam in guitar from <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                Trinity College
              </a>, London. After changing schools in 11th grade, Vinayak became a part of his new school's orchestra team. Not to his surprise, he was still on <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse"> percussion </a>, as he was before. With his new team, Vinayak returned to his old school, where his journey began, to complete the circle. This time, he won the <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                Zonal Level Orchestra Competition.{" "}
              </a>. Vinayak felt both happy and nostalgic as he celebrated his victory with his teammates.
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-white text-5xl xl:text-7xl 2xl:text-9xl text-center font-semibold p-10 2xl:p-14">
        And people ask why I always carry headphopnes...👀
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
              image={"Stargazing.png"}
              link={"https://music.apple.com/in/album/stargazing/1541400529?i=1541400545"}
              title={"Stargazing - The Neighbourhood"} />
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
        </div>
      </div>
      <Timeline />
      <Footer />
    </div>
  );
}
