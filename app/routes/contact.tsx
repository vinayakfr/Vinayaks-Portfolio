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
        <div className="flex place-content-center place-items-center">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
            className="bg-zinc-800 w-[20rem] md:w-[40rem] xl:w-[60rem] h-96 xl:h-[30rem] 2xl:w-[80rem] 2xl:h-[42.5rem] rounded-xl py-6 md:py-12 flex flex-col place-content-between place-items-center gap-2 md:gap-4 px-2 md:px-6 outline-dotted outline-rose-600"
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
        </div>
      </div>
      <Footer />
    </div>

    
  );
}

