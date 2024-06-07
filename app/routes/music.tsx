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
        <p className="text-xl xl:text-4xl 2xl:text-7xl text-center font-light text-white p-4 xl:p-10">
          “If I were not a physicist, I would probably be a musician. I often
          think in music. I live my daydreams in music. I see my life in terms
          of music.” —{" "}
          <a href="" className="italic font-extralight xl:text-3xl">
            Albert Einstein
          </a>
        </p>
        <div className="flex flex-col place-items-center place-content-center 2xl:pt-28">
          <h1 className="text-5xl xl:text-8xl 2xl:text-9xl font-medium bg-gradient-to-tr from-rose-700 via-white to-rose-700 text-transparent bg-clip-text">
            Journey
          </h1>
          <div className="w-[90%] xl:w-[70%] h-[1px] bg-white my-5"></div>
          <div className="h-[15rem] xl:w-[80%] overflow-auto">
            <h1 className="text-xl xl:text-3xl 2xl:text-5xl text-center text-white mx-10 font-thin 2xl:font-light">
              I had no other option but to choose music because it was the most
              comfortable option compared to dance and theatre. But this choice
              also had its conditions: my mother made me promise that I would
              sing and play for her all the songs that were taught to me in
              music class. And as you can all guess, my interest was nowhere
              near music when I first started my journey; at that time, I didn't
              even know my time with music would eventually become a{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                journey.{" "}
              </a>{" "}
              <br />
              My interest{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                sparked{" "}
              </a>{" "}
              My{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                interest
              </a>{" "}
              sparked when I met my new music teacher in 5th grade. It didn't
              take long for him to become one of the people I respect the most.
              In his presence, I became more and more{" "}
              <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">
                fascinated{" "}
              </a>
              with the subject and wanted to learn every instrument in the music
              room. Looking back, I believe it was never about the subject but
              the people I met through music and the memories I made.
              <br />
              The first instrument I sincerely learned was the{" "} <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">tabla</a>. My mother
              enrolled me in tabla classes for one year, but gradually, I lost
              interest. In{" "} <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">6th grade</a>, I became one of the{" "} <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">founding members</a> of my
              school's orchestra group, which was a pretty big deal for me. I
              used to love the stay-backs and the practices in between classes.
              It gave me a chance to skip some boring subjects, which were
              boring only because I got to do something that I loved. We
              participated in{" "} <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">Zonal Level Orhestra Competitions{" "}</a>but never won;
              we were either placed in 2nd or 3rd position. In 8th grade, I
              started developing an interest in stringed instruments, so I
              joined my music teacher's school. I was a{" "} <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse"> "quick learner,"</a> as my
              teacher would say. I took my first music exam and passed with
              merit from Trinity College of Music, London. After changing
              schools in 11th grade, I joined my new school's orchestra team.
              This time, we won the{" "} <a className="bg-gradient-to-tr from-zinc-400 via-rose-600 to-zinc-400 text-transparent bg-clip-text animate-pulse">Zonal Level Orchestra Competition.</a>
            </h1>
          </div>
        </div>
      </div>
      <Timeline />
      <h1 className="text-white text-5xl xl:text-7xl 2xl:text-9xl text-center font-semibold p-10 2xl:p-14">
        And people ask why I always carry headphopnes...👀
      </h1>
      <div className="flex place-content-center place-items-center px-12 pb-12">
        <div className="flex gap-5 overflow-auto">
          <div className="">
            <MusicCard
              image={"artemis.png"}
              link={
                "https://music.apple.com/in/album/cant-stop-loving-you/1686132427?i=1686132428"
              }
              title={"Can't Stop Loving You - Artemis"}
            />
          </div>
          <div>
            <MusicCard
              image={"Stargazing.png"}
              link={
                "https://music.apple.com/in/album/stargazing/1541400529?i=1541400545"
              }
              title={"Stargazing - The Neighbourhood"}
            />
          </div>
          <div>
            <MusicCard
              image={"Strawberries.png"}
              link={
                "https://music.apple.com/in/album/strawberries-cigarettes/1460746852?i=1460747047"
              }
              title={"Strawberries & Cigarretted - Troye Sivan"}
            />
          </div>
          <div>
            <MusicCard
              image={"Storyofmylife.png"}
              link={
                "https://music.apple.com/in/album/story-of-my-life/695312369?i=695312371"
              }
              title={"Story of My Life - One Direction"}
            />
          </div>
          <div>
            <MusicCard
              image={"Burningroom.png"}
              link={
                "https://music.apple.com/in/album/slow-dancing-in-a-burning-room/184335550?i=184335793"
              }
              title={"Slow Dancing in a Burning Room - John Mayer"}
            />
          </div>
          <div>
            <MusicCard
              image={"Iris.png"}
              link={
                "https://music.apple.com/in/album/iris/1109658139?i=1109658204"
              }
              title={"Iris - The Goo Goo Dolls"}
            />
          </div>
          <div>
            <MusicCard
              image={"Black-And-White.png"}
              link={
                "https://music.apple.com/in/album/black-and-white/1497607470?i=1497608050"
              }
              title={"Slow Dancing in a Burning Room - John Mayer"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
