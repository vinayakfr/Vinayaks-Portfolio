import Footer from "./components/footer";
import Navbar from "./components/navbar";
import MusicCard from "./components/songcard";
import Vinyl from "./components/vinyl";

export default function Music() {
  return (
    <div>
      <Navbar />
      <div className="flex place-content-center place-items-center md:pt-10">
        <Vinyl />
      </div>
      <div className="py-12">
        <h1 className="text-6xl text-center text-white">Music</h1>
      </div>
      <div className="flex flex-col place-items-center place-content-center">
        <h1 className="text-4xl text-white ">My Journey</h1>
        <div className="w-[90%] h-[1px] bg-white my-5"></div>
        <div className="h-[15rem] overflow-auto">
          <h1 className="text-xl text-center text-white  mx-10">
            My <a className="text-red-500">musical journey</a> began when I was 8 years old and my
            teacher asked me to chose between Music, Dance and Theatre. And as a
            shy and not so confidant kid, I chose music since it was the
            <a className="text-green-500"> better option</a>.
            <br />
            My interest in music developed after two years in 5th grade, when I
            met <a className="text-blue-500">Ankur Sir</a>. To this day I am very grateful to him for
            making me the musician I am today. <br />
            The first instrument that I learnt was <a className="text-orange-500">Tabla</a>. I was not very
            fond of the instrument but my mother wanted me to learn so I took
            some classes for <a className="text-yellow-400">one year</a>. Over the span of
            <a className="text-green-500"> 10 years </a>I have learnt <a className="text-rose-500"> guitar</a> and several other
            <a className="text-red-500"> perscussion instruments</a>.
          </h1>
        </div>
      </div>
      <h1 className="text-3xl text-center text-white p-5">
        The <a className="text-yellow-400">reason</a> I am always wearing
        headphones.
      </h1>
      <Footer />
    </div>
  );
}
