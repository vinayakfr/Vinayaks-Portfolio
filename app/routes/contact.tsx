import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="text-white flex flex-col place-content-center place-items-center py-5">
        <h1 className="text-5xl xl:text-8xl font-bold bg-gradient-to-br from-zinc-800 via-rose-700 to-zinc-800 text-transparent bg-clip-text">
          Let's get in touch
        </h1>
        <p className="text-2xl xl:text-4xl text-center py-9 px-4 xl:px-5 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos est
          beatae architecto distinctio delectus iure excepturi doloremque? Nemo,
          amet!
        </p>
        <div className="hidden xl:block py-10 w-[80%]">
          <div className="flex gap-10">
            <div className="h-[15rem] w-full bg-zinc-800 rounded-xl">
            </div>
            <div className="h-[15rem] w-full bg-zinc-800 rounded-xl"></div>
          </div>
        </div>
        <div className="bg-zinc-800 w-[80%] h-96 xl:h-[30rem] rounded-xl py-6 md:py-12 flex flex-col place-content-between place-items-center gap-2 px-2 md:px-6">
          <div className="w-full flex flex-col md:flex-row gap-6">
            <input
              placeholder="Full Name"
              className="xl:text-xl h-12 w-full xl:h-20 rounded-xl bg-zinc-900 border-2 border-rose-500 hover:text-rose-500 px-2"
              required
            />
            <input
              placeholder="Phone Number"
              className="xl:text-xl h-12 w-full xl:h-20 rounded-xl bg-zinc-900 border-2 border-rose-500 hover:text-rose-500 px-2"
              required
            />
          </div>
          <input
            placeholder="Email"
            className="xl:text-xl h-12 w-full xl:h-20 rounded-xl bg-zinc-900 border-2 border-rose-500 hover:text-rose-500 px-2"
            required
          />
          <input
            placeholder="Message"
            className="xl:text-xl h-12 w-full xl:h-20 md:h-20 bg-zinc-900 rounded-xl border-2 border-rose-500 hover:text-rose-500 px-2"
            required
          />
          <button className="xl:text-2xl font-semibold h-10 w-24 xl:h-16 xl:w-56 rounded-xl border-2 border-rose-500 bg-zinc-900 text-rose-500 hover:bg-rose-500 hover:text-white transform duration-300">
            Send
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}