import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="text-white flex flex-col place-content-center place-items-center py-5">
        <h1 className="text-center text-5xl px-2 xl:text-8xl 2xl:text-[10rem] font-bold bg-gradient-to-br from-zinc-800 via-rose-700 to-zinc-800 text-transparent bg-clip-text">
          Let's get in touch
        </h1>
        <p className="text-2xl xl:text-4xl 2xl:text-5xl text-center py-9 px-4 xl:px-5 font-light">
          Fill out the form below and I will get in touch with you as soon as possible <br />
        </p>
        {/* <div className="hidden xl:block py-10 w-[80%]">
          <div className="flex gap-10">
            <div className="h-[15rem] w-full bg-zinc-800 rounded-xl">
              <h1 className="text-center xl:text-4xl font-bold py-5">Notice:</h1>
              <p className="xl:text-2xl px-5">Meeting Hours</p>
              <br />
              <li className="text-left xl:text-xl px-5">05:30 p.m to 08:00 p.m on Weekdays</li>
              <br />
              <li className="text-left xl:text-xl px-5">02:00 p.m to 06:00 p.m on Weekends</li>
            </div>
            <div className="h-[15rem] w-full bg-zinc-800 rounded-xl">
            </div>
          </div>
        </div> */}
        <div className="bg-zinc-800 w-[80%] h-96 xl:h-[30rem] 2xl:w-[55%] 2xl:h-[42.5rem] rounded-xl py-6 md:py-12 flex flex-col place-content-between place-items-center gap-2 px-2 md:px-6 outline-dotted outline-rose-600">
          <div className="w-full flex flex-col md:flex-row gap-6">
            <input
              placeholder="Full Name"
              className="xl:text-xl 2xl:text-3xl h-12 w-full md:h-20 xl:h-20 2xl:h-24 bg-zinc-900 rounded-xl border-2 border-rose-500 hover:text-rose-500 px-2"
              required
            />
            <input
              placeholder="Phone Number"
              className="xl:text-xl 2xl:text-3xl h-12 w-full md:h-20 xl:h-20 2xl:h-24 bg-zinc-900 rounded-xl border-2 border-rose-500 hover:text-rose-500 px-2"
              required
            />
          </div>
          <input
            placeholder="Email"
            className="xl:text-xl 2xl:text-3xl h-12 w-full md:h-20 xl:h-20 2xl:h-24 bg-zinc-900 rounded-xl border-2 border-rose-500 hover:text-rose-500 px-2"
            required
          />
          <input
            placeholder="Message"
            className="xl:text-xl 2xl:text-3xl h-12 w-full md:h-20 xl:h-20 2xl:h-28 bg-zinc-900 rounded-xl border-2 border-rose-500 hover:text-rose-500 px-2"
            required
          />
          <button className="xl:text-2xl font-semibold h-10 w-24 xl:h-16 xl:w-56 2xl:h-20 wxxl:w-72 rounded-xl border-2 border-rose-500 bg-zinc-900 text-rose-500 hover:bg-rose-500 hover:text-white transform duration-300">
            Send
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}