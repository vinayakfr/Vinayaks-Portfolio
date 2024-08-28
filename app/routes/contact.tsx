import { link } from "@nextui-org/react";
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
          Fill out the form below and I will get in touch with you as soon as
          possible <br />
        </p>
        <div className="flex flex-col lg:flex-row justify-between w-[90%]">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
            className="bg-zinc-800 w-[20rem] md:w-[40rem] h-96 xl:h-[30rem] 2xl:w-[80rem] 2xl:h-[42.5rem] rounded-xl py-6 md:py-12 flex flex-col place-content-between place-items-center gap-2 md:gap-4 px-2 md:px-6 outline-dotted outline-rose-600"
          >
            <input
              type="hidden"
              name="access_key"
              value="3d85774c-ac94-4b96-9f04-d6b5d758d715"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from your Website"
            />
            <div className="w-full flex flex-col md:flex-row gap-6">
              <input
                placeholder="Full Name"
                type="text"
                name="name"
                id="name"
                className="xl:text-xl 2xl:text-3xl h-12 w-full md:h-16 xl:h-20 2xl:h-28 bg-zinc-900 rounded-xl border-2 border-rose-500 hover:text-rose-500 px-2"
                required
              />
              <input
                placeholder="Phone Number"
                type="text"
                name="phone"
                id="phone"
                className="xl:text-xl 2xl:text-3xl h-12 w-full md:h-16 xl:h-20 2xl:h-28 bg-zinc-900 rounded-xl border-2 border-rose-500 hover:text-rose-500 px-2"
                required
              />
            </div>
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              className="xl:text-xl 2xl:text-3xl h-12 w-full md:h-20 xl:h-20 2xl:h-28 bg-zinc-900 rounded-xl border-2 border-rose-500 hover:text-rose-500 px-2"
              required
            />
            <input
              placeholder="Message"
              name="message"
              id="message"
              className="xl:text-xl 2xl:text-3xl h-12 w-full md:h-20 xl:h-20 2xl:h-28 bg-zinc-900 rounded-xl border-2 border-rose-500 hover:text-rose-500 px-2 "
              required
            />
            <button
              type="submit"
              className="xl:text-2xl 2xl:text-3xl font-semibold h-10 w-24 xl:h-16 xl:w-56 2xl:h-20 wxxl:w-72 rounded-xl border-2 border-rose-500 bg-zinc-900 text-rose-500 hover:bg-rose-500 hover:text-white transform duration-300"
            >
              Send
            </button>
            <p className="text-base text-center text-gray-500" id="result"></p>
          </form>
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 grid-rows-1 gap-40">
              <div className="flex flex-col place-content-center place-items-center h-[40vh] rotate-45 group">
                {/* Top Wings */}
                <div className="flex -space-x-8 group-hover:animate-flap">
                  <div className="bg-rose-500 h-[4.5rem] w-[6.2rem] rounded-tl-[50%] rounded-tr-full rounded-bl-full flex place-content-center place-items-center ">
                    <div className="bg-white rounded-full h-5 w-5"></div>
                  </div>
                  <div className="bg-rose-500 h-[4.5rem] w-[6.2rem] rounded-tl-full rounded-tr-[50%] rounded-br-full flex place-content-center place-items-center">
                    <div className="bg-white rounded-full h-5 w-5"></div>
                  </div>
                </div>

                {/* Center Part */}
                <div className="bg-rose-300 h-[6px] w-[4rem] rounded-t-[50%] rounded-b-[50%]"></div>

                {/* Bottom Wings */}
                <div className="flex -space-x-8 group-hover:animate-flap">
                  <div className="bg-rose-500 h-[4.5rem] w-[6.2rem] rounded-bl-[50%] rounded-br-full rounded-tl-full flex place-content-center place-items-center">
                    <div className="bg-white rounded-full h-5 w-5"></div>
                  </div>
                  <div className="bg-rose-500 h-[4.5rem] w-[6.2rem] rounded-bl-full rounded-br-[50%] rounded-tr-full flex place-content-center place-items-center">
                    <div className="bg-white rounded-full h-5 w-5"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col place-content-center place-items-center h-[40vh] rotate-45 group mt-40">
                {/* Top Wings */}
                <div className="flex -space-x-5 group-hover:animate-flap">
                  <div className="bg-rose-500 h-[4.5rem] w-[6.2rem] rounded-tl-[50%] rounded-tr-full rounded-bl-full flex place-content-center place-items-center ">
                    <div className="bg-white rounded-full h-5 w-5"></div>
                  </div>
                  <div className="bg-rose-500 h-[4.5rem] w-[6.2rem] rounded-tl-full rounded-tr-[50%] rounded-br-full flex place-content-center place-items-center">
                    <div className="bg-white rounded-full h-5 w-5"></div>
                  </div>
                </div>

                {/* Center Part */}
                <div className="bg-rose-300 h-[6px] w-[4rem] rounded-t-[50%] rounded-b-[50%]"></div>

                {/* Bottom Wings */}
                <div className="flex -space-x-5 group-hover:animate-flap">
                  <div className="bg-rose-500 h-[4.5rem] w-[6.2rem] rounded-bl-[50%] rounded-br-full rounded-tl-full flex place-content-center place-items-center">
                    <div className="bg-white rounded-full h-5 w-5"></div>
                  </div>
                  <div className="bg-rose-500 h-[4.5rem] w-[6.2rem] rounded-bl-full rounded-br-[50%] rounded-tr-full flex place-content-center place-items-center">
                    <div className="bg-white rounded-full h-5 w-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wings */}
      </div>
      <Footer />
    </div>
  );
}
